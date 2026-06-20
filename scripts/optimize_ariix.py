import os
from PIL import Image

# Path configurations
public_dir = r"c:\Users\ACER\Desktop\Ariix Website\Dermacure Website\public"
images_dir = os.path.join(public_dir, "images")

def optimize_image(src, dest, max_dim, quality=80):
    if not os.path.exists(src):
        print(f"Skipping (not found): {src}")
        return False
    try:
        with Image.open(src) as img:
            # Check orientation and transpose if needed
            try:
                from PIL import ImageOps
                img = ImageOps.exif_transpose(img)
            except:
                pass
            
            w, h = img.size
            if w > max_dim or h > max_dim:
                if w > h:
                    new_w = max_dim
                    new_h = int(h * (max_dim / w))
                else:
                    new_h = max_dim
                    new_w = int(w * (max_dim / h))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                print(f"Resizing {os.path.basename(src)}: {w}x{h} -> {new_w}x{new_h}")
            else:
                print(f"Compressing {os.path.basename(src)}: {w}x{h}")
                
            img.save(dest, "WEBP", quality=quality)
            orig_kb = os.path.getsize(src) / 1024
            new_kb = os.path.getsize(dest) / 1024
            print(f"  Saved to {os.path.basename(dest)}: {orig_kb:.1f} KB -> {new_kb:.1f} KB ({(1 - new_kb/orig_kb)*100:.1f}% reduction)")
            return True
    except Exception as e:
        print(f"Error processing {src}: {e}")
        return False

# 1. Optimize Hero Image
hero_src = os.path.join(images_dir, "extracted", "img_2.jpg")
hero_dest = os.path.join(images_dir, "extracted", "img_2.webp")
optimize_image(hero_src, hero_dest, max_dim=1000, quality=80)

# 2. Optimize Results/Testimonials Images (displayed at ~371px width)
results_dir = os.path.join(images_dir, "results")
if os.path.exists(results_dir):
    for f in os.listdir(results_dir):
        if f.endswith(".webp"):
            path = os.path.join(results_dir, f)
            optimize_image(path, path, max_dim=600, quality=75)

# 3. Optimize Logo Images
logo_text = os.path.join(images_dir, "logo-text.webp")
optimize_image(logo_text, logo_text, max_dim=300, quality=80)

logo_symbol = os.path.join(images_dir, "logo-symbol.webp")
optimize_image(logo_symbol, logo_symbol, max_dim=150, quality=80)

logo_text_footer = os.path.join(images_dir, "logo-text-footer.webp")
optimize_image(logo_text_footer, logo_text_footer, max_dim=300, quality=80)

logo_symbol_footer = os.path.join(images_dir, "logo-symbol-footer.webp")
optimize_image(logo_symbol_footer, logo_symbol_footer, max_dim=150, quality=80)

print("Optimization completed!")
