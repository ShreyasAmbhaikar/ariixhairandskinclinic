import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve, sep } from "node:path";

const rootArg = process.argv[2] ?? ".next-build";
const port = Number(process.argv[3] ?? 4173);
const root = resolve(rootArg);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function resolveRequest(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const normalized = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  let candidate = join(root, normalized);

  if (!candidate.startsWith(root + sep) && candidate !== root) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    candidate = join(candidate, "index.html");
  }

  if (!existsSync(candidate) && !extname(candidate)) {
    const withHtml = `${candidate}.html`;
    if (existsSync(withHtml)) {
      candidate = withHtml;
    }
  }

  return candidate;
}

const server = createServer((request, response) => {
  const filePath = resolveRequest(request.url ?? "/");
  const notFound = join(root, "404.html");
  const finalPath =
    filePath && existsSync(filePath) && statSync(filePath).isFile()
      ? filePath
      : notFound;

  if (!existsSync(finalPath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const ext = extname(finalPath);
  response.writeHead(finalPath === notFound ? 404 : 200, {
    "Content-Type": mimeTypes[ext] ?? "application/octet-stream"
  });
  createReadStream(finalPath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`);
});
