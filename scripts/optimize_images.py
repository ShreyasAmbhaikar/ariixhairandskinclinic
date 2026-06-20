import os
import re
from PIL import Image

app_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\app"
lib_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\lib"
public_images_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\public"

# Sets to store identified hero and procedure images
hero_images = set()
procedure_images = set()

# Regular expressions to find the image values
hero_re = re.compile(r'heroImage:\s*["\']([^"\']+)["\']')
proc_re = re.compile(r'procedureImage:\s*["\']([^"\']+)["\']')

def scan_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            heroes = hero_re.findall(content)
            procs = proc_re.findall(content)
            for h in heroes:
                abs_h = os.path.join(public_images_dir, h.lstrip('/'))
                hero_images.add(os.path.normpath(abs_h))
            for p in procs:
                abs_p = os.path.join(public_images_dir, p.lstrip('/'))
                procedure_images.add(os.path.normpath(abs_p))
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

print("Scanning app directory for treatment configurations...")
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == "page.tsx":
            scan_file(os.path.join(root, file))

print("Scanning lib directory for treatment configurations...")
for root, dirs, files in os.walk(lib_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            scan_file(os.path.join(root, file))

print(f"Found {len(hero_images)} hero images:")
for h in hero_images:
    print(f"  - {os.path.basename(h)}")
print(f"Found {len(procedure_images)} procedure images:")
for p in procedure_images:
    print(f"  - {os.path.basename(p)}")

def resize_and_compress(src_path, dest_path, max_dim, quality=80):
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        return False
    try:
        with Image.open(src_path) as img:
            # Check orientation
            try:
                from PIL import ImageOps
                img = ImageOps.exif_transpose(img)
            except Exception:
                pass
            
            w, h = img.size
            if w > max_dim or h > max_dim:
                # Calculate new size keeping aspect ratio
                if w > h:
                    new_w = max_dim
                    new_h = int(h * (max_dim / w))
                else:
                    new_h = max_dim
                    new_w = int(w * (max_dim / h))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                print(f"  Resizing {os.path.basename(src_path)} from {w}x{h} to {new_w}x{new_h}")
            else:
                print(f"  Re-compressing {os.path.basename(src_path)} ({w}x{h})")
            
            # Save as WebP
            img.save(dest_path, "WEBP", quality=quality)
            return True
    except Exception as e:
        print(f"Error processing {src_path}: {e}")
        return False

print("\nProcessing Hero Images (generating desktop and mobile sizes)...")
for hero_path in hero_images:
    if os.path.exists(hero_path):
        orig_size = os.path.getsize(hero_path) / 1024
        print(f"Hero Image: {os.path.basename(hero_path)} ({orig_size:.1f} KB)")
        
        # 1. Desktop version (max_dim = 1200)
        resize_and_compress(hero_path, hero_path, max_dim=1200, quality=80)
        desktop_size = os.path.getsize(hero_path) / 1024
        
        # 2. Mobile version (max_dim = 640)
        dir_name, file_name = os.path.split(hero_path)
        base_name, ext = os.path.splitext(file_name)
        mobile_path = os.path.join(dir_name, f"{base_name}-mobile{ext}")
        resize_and_compress(hero_path, mobile_path, max_dim=640, quality=80)
        mobile_size = os.path.getsize(mobile_path) / 1024
        
        print(f"  -> Desktop: {desktop_size:.1f} KB")
        print(f"  -> Mobile:  {mobile_size:.1f} KB")

print("\nProcessing Procedure Images...")
for proc_path in procedure_images:
    if os.path.exists(proc_path):
        orig_size = os.path.getsize(proc_path) / 1024
        print(f"Procedure Image: {os.path.basename(proc_path)} ({orig_size:.1f} KB)")
        resize_and_compress(proc_path, proc_path, max_dim=800, quality=80)
        new_size = os.path.getsize(proc_path) / 1024
        print(f"  -> Optimized: {new_size:.1f} KB (saved {orig_size - new_size:.1f} KB)")

# Now optimize all testimonial images
print("\nProcessing Testimonial Images...")
testimonial_dir = os.path.join(public_images_dir, "images", "testimonial")
if os.path.exists(testimonial_dir):
    for file in os.listdir(testimonial_dir):
        if file.lower().endswith('.webp'):
            filepath = os.path.join(testimonial_dir, file)
            orig_size = os.path.getsize(filepath) / 1024
            print(f"Testimonial Avatar: {file} ({orig_size:.1f} KB)")
            resize_and_compress(filepath, filepath, max_dim=240, quality=80)
            new_size = os.path.getsize(filepath) / 1024
            print(f"  -> Optimized: {new_size:.1f} KB (saved {orig_size - new_size:.1f} KB)")

# Now optimize all gallery images
print("\nProcessing Gallery Images...")
gallery_dir = os.path.join(public_images_dir, "images", "gallery")
if os.path.exists(gallery_dir):
    for file in os.listdir(gallery_dir):
        if file.lower().endswith('.webp'):
            filepath = os.path.join(gallery_dir, file)
            orig_size = os.path.getsize(filepath) / 1024
            print(f"Gallery Image: {file} ({orig_size:.1f} KB)")
            resize_and_compress(filepath, filepath, max_dim=1000, quality=80)
            new_size = os.path.getsize(filepath) / 1024
            print(f"  -> Optimized: {new_size:.1f} KB (saved {orig_size - new_size:.1f} KB)")

print("\nProcessing remaining images in public/images/...")
images_main_dir = os.path.join(public_images_dir, "images")
if os.path.exists(images_main_dir):
    for file in os.listdir(images_main_dir):
        filepath = os.path.join(images_main_dir, file)
        if os.path.isfile(filepath) and file.lower().endswith('.webp') and not file.endswith('-mobile.webp'):
            norm_filepath = os.path.normpath(filepath)
            if norm_filepath not in hero_images and norm_filepath not in procedure_images:
                orig_size = os.path.getsize(filepath) / 1024
                print(f"Misc Image: {file} ({orig_size:.1f} KB)")
                if "hero" in file.lower() or "clinic" in file.lower():
                    resize_and_compress(filepath, filepath, max_dim=1200, quality=80)
                    desktop_size = os.path.getsize(filepath) / 1024
                    
                    dir_name, file_name = os.path.split(filepath)
                    base_name, ext = os.path.splitext(file_name)
                    mobile_path = os.path.join(dir_name, f"{base_name}-mobile{ext}")
                    resize_and_compress(filepath, mobile_path, max_dim=640, quality=80)
                    mobile_size = os.path.getsize(mobile_path) / 1024
                    print(f"  -> Desktop: {desktop_size:.1f} KB, Mobile: {mobile_size:.1f} KB")
                else:
                    resize_and_compress(filepath, filepath, max_dim=1000, quality=80)
                    new_size = os.path.getsize(filepath) / 1024
                    print(f"  -> Optimized: {new_size:.1f} KB (saved {orig_size - new_size:.1f} KB)")

print("\nDone! Image optimization complete.")
