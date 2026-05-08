import re

with open('src/assets/hifzio_guard_with_text.svg', 'r') as f:
    content = f.read()

# Remove the background path (fill="#f9f9f9")
content = re.sub(r'<g><path style="opacity:1" fill="#f9f9f9" d="M -0.5,-0.5[^>]+></g>\n?', '', content)

# Save original (transparent background)
with open('src/assets/hifzio_guard_with_text.svg', 'w') as f:
    f.write(content)

# For dark mode, replace all very dark colors with white
# Let's find all fill="#0..." or fill="#1..." or fill="#2..." that are very dark.
# The text seems to be mostly #0... to #2..., let's explicitly list the dark ones we saw:
dark_colors = [
    '#040c33', '#050d36', '#020a33', '#030933', '#010122', '#030a33', '#0f1432',
    '#050d35', '#121835', '#020933', '#020732', '#0519db', '#080d2f', '#090f2f',
    '#151a37', '#25273b', '#292b3d', '#73768f', '#787991', '#8a8da1', '#7f89a8', '#818ba7', '#848eaa', '#828daa', '#838dab'
]

# Wait, let's just use regex to replace fill="#0[0-9a-fA-F]{5}" and "#1[0-9a-fA-F]{5}" and "#2[0-9a-fA-F]{5}" 
# but ONLY if they are very dark and not part of the blue shield (which might be #2c84fa etc.)
# Actually, the shield is purple/blue (#b019f9, #2c84fa).
# Let's replace any fill where the hex is low.
def replace_dark(match):
    color = match.group(1)
    # calculate brightness
    r = int(color[1:3], 16)
    g = int(color[3:5], 16)
    b = int(color[5:7], 16)
    # If it's mostly gray/black (r, g, b all < 140) and not too saturated, let's make it white.
    # Actually, the text is a dark blue-gray. Let's just make it white if r < 60, g < 60, b < 70
    if r < 80 and g < 80 and b < 100:
        return 'fill="#ffffff"'
    # also some gray colors like #73768f used for anti-aliasing text edges?
    if r > 100 and r < 140 and g > 100 and g < 140 and b > 100 and b < 180:
        if abs(r-g) < 20 and abs(g-b) < 30:
            return 'fill="#ffffff"'
    return match.group(0)

dark_content = re.sub(r'fill="([^"]+)"', replace_dark, content)

with open('src/assets/hifzio_guard_with_text_dark.svg', 'w') as f:
    f.write(dark_content)
