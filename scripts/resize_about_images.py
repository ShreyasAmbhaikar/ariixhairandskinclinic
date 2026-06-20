from PIL import Image
import os

public_gallery_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\public\images\gallery"
public_images_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\public\images"

def resize_image(dir_path, file_name, new_size, output_name=None, quality=80):
    src_path = os.path.join(dir_path, file_name)
    dest_path = os.path.join(dir_path, output_name if output_name else file_name)
    
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        return
        
    try:
        with Image.open(src_path) as img:
            w, h = img.size
            print(f"Opening {file_name}: current size {w}x{h}")
            img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
            img_resized.save(dest_path, "WEBP", quality=quality)
            print(f"Saved {dest_path} with size {new_size}")
    except Exception as e:
        print(f"Error resizing {file_name}: {e}")

# 1. Clinic Exterior/Interior Image
print("Resizing Clinic Exterior...")
resize_image(public_gallery_dir, "dr-varun-dental-clinic-exterior-viman-nagar.webp", (800, 610), quality=80)
resize_image(public_gallery_dir, "dr-varun-dental-clinic-exterior-viman-nagar.webp", (480, 366), "dr-varun-dental-clinic-exterior-viman-nagar-mobile.webp", quality=80)

# 2. Dr. Varun Tomke Portrait
print("Resizing Dr. Varun Portrait...")
resize_image(public_gallery_dir, "dr-varun-tomke-portrait-viman-nagar.webp", (600, 600), quality=80)
resize_image(public_gallery_dir, "dr-varun-tomke-portrait-viman-nagar.webp", (360, 360), "dr-varun-tomke-portrait-viman-nagar-mobile.webp", quality=80)

# 3. Dr. Priyanka Tidke Portrait
print("Resizing Dr. Priyanka Portrait...")
resize_image(public_gallery_dir, "dr-priyanka-tidke.webp", (600, 450), quality=80)
resize_image(public_gallery_dir, "dr-priyanka-tidke.webp", (360, 270), "dr-priyanka-tidke-mobile.webp", quality=80)

print("About Images Resizing Complete.")
