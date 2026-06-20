import os
from PIL import Image

testimonial_dir = r"c:\Users\ACER\Desktop\Dr Varun Dental Website\public\images\testimonial"

if os.path.exists(testimonial_dir):
    for file in os.listdir(testimonial_dir):
        if file.lower().endswith('.webp'):
            filepath = os.path.join(testimonial_dir, file)
            try:
                with Image.open(filepath) as img:
                    w, h = img.size
                    print(f"Resizing avatar {file} from {w}x{h} to 100x100")
                    img_resized = img.resize((100, 100), Image.Resampling.LANCZOS)
                    img_resized.save(filepath, "WEBP", quality=75)
                    print(f"Saved avatar {file} successfully.")
            except Exception as e:
                print(f"Error processing {file}: {e}")
else:
    print(f"Directory not found: {testimonial_dir}")

print("Testimonial Avatars Resize Complete.")
