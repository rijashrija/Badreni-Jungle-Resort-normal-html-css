import os
import glob

replacements = {
    "<li>Accommodations</li>": "<li><a href=\"room.html\" style=\"color: inherit; text-decoration: none;\">Accommodations</a></li>",
    "<li>Experiences</li>": "<li><a href=\"experience.html\" style=\"color: inherit; text-decoration: none;\">Experiences</a></li>",
    "<li>Contact Us</li>": "<li><a href=\"contact.html\" style=\"color: inherit; text-decoration: none;\">Contact Us</a></li>",
    "<li>Jungle Safari</li>": "<li><a href=\"experience_inner.html\" style=\"color: inherit; text-decoration: none;\">Jungle Safari</a></li>",
    "<li>Nature Walk</li>": "<li><a href=\"experience.html\" style=\"color: inherit; text-decoration: none;\">Nature Walk</a></li>",
    "<li>Sundown Experience</li>": "<li><a href=\"experience.html\" style=\"color: inherit; text-decoration: none;\">Sundown Experience</a></li>",
    "<li>Cultural Performance</li>": "<li><a href=\"experience.html\" style=\"color: inherit; text-decoration: none;\">Cultural Performance</a></li>",
    "<li>Canoeing Adventure</li>": "<li><a href=\"experience.html\" style=\"color: inherit; text-decoration: none;\">Canoeing Adventure</a></li>"
}

html_files = glob.glob("*.html")

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    for old_str, new_str in replacements.items():
        if old_str in content:
            content = content.replace(old_str, new_str)
            modified = True
            
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")
