import { ArrowUp } from "lucide-react";

export function BackToTopFloat() {
  return (
    <a
      href="#page-top"
      aria-label="Back to top"
      className="fixed bottom-[5rem] right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/95 text-[var(--purple)] shadow-[0_10px_24px_rgba(91,45,142,0.18)] transition-transform duration-200 hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--purple)] md:bottom-[5.25rem] md:right-6"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
