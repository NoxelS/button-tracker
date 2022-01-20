import RPi.GPIO as GPIO
from time import sleep     # this lets us have a time delay (see line 15)
import requests

# Example Code with some cleanup todo
# Src: https://raspi.tv/2013/rpi-gpio-basics-6-using-inputs-and-outputs-together-with-rpi-gpio-pull-ups-and-pull-downs

# Env
GPIO.setmode(GPIO.BCM)     # set up BCM GPIO numbering
GPIO.setup(25, GPIO.IN)    # set GPIO25 as input (button)
GPIO.setup(24, GPIO.OUT)   # set GPIO24 as an output (LED)

# Set initial input/outputs
# @todo

# Check for inputs
try:
    while True:            # this will carry on until you hit CTRL+C
        if GPIO.input(25):  # if port 25 == 1
            headers = {"charset": "utf-8", "Content-Type": "application/json"}
            url = "http://192.168.0.14:3000/foo-bar"
            r = requests.post(url, json={"foo": "bar"}, headers=headers)
            print(r.status_code)
            GPIO.output(24, 1)         # set port/pin value to 1/HIGH/True
        else:
            GPIO.output(24, 0)         # set port/pin value to 0/LOW/False
        sleep(0.1)         # wait 0.1 seconds

finally:                   # this block will run no matter how the try block exits
    GPIO.cleanup()         # clean up after yourself
