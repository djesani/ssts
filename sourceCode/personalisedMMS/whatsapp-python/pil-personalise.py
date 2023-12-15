# Importing the PIL library
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

fileName = "61430249808.jpg"
myMessage = 'Mahesh Jeshani 2023'

original = "HappyDiwali2023.jpg"

def overlay_text(size, message, font):
    W, H = size
    image = Image.open('images/' + original)
    
    draw = ImageDraw.Draw(image)
    _, _, w, h = draw.textbbox((10, 5), message, font=font)
    draw.text(((W-w)/2, (H-h)/2), message, font=font, fill='#90031A')

    draw = ImageDraw.Draw(image)
    _, _, w, h = draw.textbbox((0, 0), message, font=font)
    draw.text(((W-w)/2, (H-h)/2), message, font=font, fill='#D1C911')
    return image

# Custom font style and font size
# myFont = ImageFont.truetype('Roboto-Bold.ttf', 100)
myFont = ImageFont.truetype('Philosopher/Philosopher-BoldItalic.ttf', 100)


myImage = overlay_text((2121, 3870), myMessage, myFont)
myImage.show()

# Save the edited image
myImage.save("img2/" + fileName)
