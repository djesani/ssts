import pywhatkit
# import os     

# os.path.relpath("images\\61430249808.png")
# f = open(os.path.expanduser("~\\Desktop\\somefile.txt"))

# /Users/Shared/Data/apps/z-pg/whatsapp-python/images/61430249808.png

# Send a WhatsApp Message to a Contact at 1:30 PM
# pywhatkit.sendwhatmsg("+61430249808", "Hi", 22, 28)

# Same as above but Closes the Tab in 2 Seconds after Sending the Message
# pywhatkit.sendwhatmsg("+61430249808", "Hi", 22, 33, 15, True, 2)

# Send an Image to a Group with the Caption as Hello
# pywhatkit.sendwhats_image("+61430249808", "images\\61430249808.jpeg", "Hello")
pywhatkit.sendwhats_image("+61430249808", "file:////Users/Shared/apps/ssts/sourceCode/personalisedMMS/whatsapp-python/images/HappyDiwali2023.jpg", "Wishing you a Happy Diwali and a Prosperous New Year")
# time.sleep(5)

# pywhatkit.sendwhats_image("+61430249808", "\\Users\\Shared\\Data\\apps\\z-pg\\whatsapp-python\\images\\61430249808.png", "Hello 2")

# Send an Image to a Contact with the no Caption
# pywhatkit.sendwhats_image("+61430249808", "file:\\\\\\Users\\Shared\\Data\\apps\\z-pg\\whatsapp-python\\images\\61430249808.png")