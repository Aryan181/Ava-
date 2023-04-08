import os
from PIL import Image

def get_most_recent_image(downloads_folder):
    # Get the list of image files
    image_exts = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"]
    image_files = [f for f in os.listdir(downloads_folder) if any(f.lower().endswith(ext) for ext in image_exts)]

    if not image_files:
        print("No images found in the Downloads folder")
        return None

    # Get the most recent image
    most_recent_image = max(image_files, key=lambda f: os.path.getmtime(os.path.join(downloads_folder, f)))
    return os.path.join(downloads_folder, most_recent_image)

def display_image(image_path):
    if image_path:
        img = Image.open(image_path)
        img.show(title=f"Most recent image: {os.path.basename(image_path)}")
    else:
        print("No image to display")

if __name__ == "__main__":
    downloads_folder = os.path.join(os.path.expanduser("~"), "Downloads")
    most_recent_image = get_most_recent_image(downloads_folder)
    display_image(most_recent_image)
