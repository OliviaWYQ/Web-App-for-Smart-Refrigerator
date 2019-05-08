# Web-App-for-Smart-Refrigerator
Web App for Smart Refrigerator, using Intel Edison and AWS service.

# Summary
* Determine food category(label) in the refrigerator by image recognition, and update the information on the server and mobile App.
* Maintain a real-time data of food collection in fridge with related information(calorie, weight, expiration date, etc.)
* Track food expiration dates and monitor the internal temperature and humidity of the refrigerator.
* Give users recipe recommendations based on the current food in the refrigerator.

# Detailed Description

## Sensor node are responsible for
* Detecting the motion of the user
* Capturing the image of the food and the image will be sent to AWS S3
* Weighing every food, then send its weight readings along with the image
* Collecting the temperature and humidity data 

## AWS is responsible for 
* Receiving and keeping the food image(S3)
* Detecting food label(Rekognition and functions in Lambda to derive the most relevant one)
* Analysing the meta data and storing the result into DynamoDB

## APP is responsible for
* Displaying the foods in the fridge
* Real-time temperature & humidity and cal. Consumption tracking
* Recommendation for the recipe based on the current food in the fridge

# Front-end demo
![image](https://github.com/OliviaWYQ/Web-App-for-Smart-Refrigerator/blob/master/demo_img/img1.png)

# Refer to the video:
The layout of hardware in our fridge:
https://youtu.be/imrrzTbKiTo

Demo:
https://youtu.be/1YkmIRnyfyo

