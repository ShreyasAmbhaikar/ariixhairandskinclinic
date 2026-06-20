from PIL import Image
import os

public_gallery_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\public\images\gallery"

gallery_files = [
    "dr-varun-dental-clinic-exterior-viman-nagar.webp",
    "dr-varun-dental-clinic-reception-viman-nagar.webp",
    "modern-dental-operatory-viman-nagar.webp",
    "dental-consultation-room-viman-nagar.webp",
    "dental-treatment-chair-viman-nagar.webp",
    "dental-clinic-workspace-viman-nagar.webp"
]

def generate_thumb(file_name, max_dim=480, quality=75):
    src_path = os.path.join(public_gallery_dir, file_name)
    base, ext = os.path.splitext(file_name)
    dest_path = os.path.join(public_gallery_dir, f"{base}-thumb{ext}")
    
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        return
        
    try:
        with Image.open(src_path) as img:
            w, h = img.size
            print(f"Opening {file_name}: current size {w}x{h}")
            # Maintain aspect ratio
            if w > h:
                new_w = max_dim
                new_h = int(h * (max_dim / w))
            else:
                new_h = max_dim
                new_w = int(w * (max_dim / h))
                
            img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            img_resized.save(dest_path, "WEBP", quality=quality)
            print(f"Saved thumbnail {dest_path} with size {new_w}x{new_h}")
    except Exception as e:
        print(f"Error generating thumbnail for {file_name}: {e}")

for file in gallery_files:
    generate_thumb(file)

print("Gallery Thumbnails Complete.")
