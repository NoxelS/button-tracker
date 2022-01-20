import RPi.GPIO as GPIO
from time import sleep     # this lets us have a time delay (see line 15)
import requests

# Example Code with some cleanup todo
# Src: https://raspi.tv/2013/rpi-gpio-basics-6-using-inputs-and-outputs-together-with-rpi-gpio-pull-ups-and-pull-downs

# Env
GPIO.setmode(GPIO.BCM)     # set up BCM GPIO numbering

# Inputs
GPIO.setup(18, GPIO.IN)    # 1
GPIO.setup(23, GPIO.IN)    # 2
GPIO.setup(24, GPIO.IN)    # 3
GPIO.setup(25, GPIO.IN)    # 4

# Outputs
GPIO.setup(4, GPIO.OUT)    # 4
GPIO.setup(17, GPIO.OUT)   # 3
GPIO.setup(27, GPIO.OUT)   # 2
GPIO.setup(22, GPIO.OUT)   # 1

# Set initial input/outputs
# @todo

# Check for inputs
try:
    while True:            # this will carry on until you hit CTRL+C
        GPIO.output(4, 1)
        GPIO.output(17, 1)
        GPIO.output(27, 1)
        GPIO.output(22, 1)
        sleep(1)         # wait 0.1 seconds

finally:                   # this block will run no matter how the try block exits
    GPIO.cleanup()         # clean up after yourself
