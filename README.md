# MySurevys
Link to the website: https://mysterious-depths-46026.herokuapp.com/
Hello everyone! As a part of an online course, I built a website that I created that allows user to create surveys and collect feedback from their customers. This website would be used primarily by business owner who are interested in seeking feedback on their products from the user. 

The following were the languages and libraries used in the project:
•	Developed the front-end application using React/Redux libraries and developed the back-end using Express/Node API to handle the calls, and MongoDB and Mongoose for the storage. The website is deplyed on Heroku. 
•	Added OAUTH Google Authorization, where user could sign in with their Google accounts using PassportJS library. 
•	Added a payment feature using the Stripe library to handle c\redit card payments. Furthermore, used the Mailer library to handle sending out survey emails, and used Webhook technology to handle incoming feedback traffic. 


## DEMO

In this section, I will be conducting a quick demo for the website. 

### Home Page

The homepage currently have one main function and that is to let the user sign in before starting. We need to identify the user so we know which surveys to show. 
![demo1](/images/home.JPG)



When the user click on the sign in button, that will redirect him to a google account sign in page. After signing in with google, the website will redirect him to the surveys page where he could view all his surveys. 
![demo2](/images/surveyspage.JPG)




### Adding Credits.
When the user signs in, the header page will now change to the following:

![demo3](/images/header.JPG)


The user needs to add credits before sending out surveys. So when the user clicks on the add credits button, the following box will show up:

![demo4](/images/addcredit.JPG)


As this website is created for learning purpose, the only credit card available are the test ones. Therefore enter 424242424242 into the box instead. Then click finish. We used Stripe library to integrate this feature. 

### Creating Surveys

When the user clicks on the add button in the surveys page, a form to create a survey will show up. The user will then fill out information regarding the survey such as the topic, question asked, subject of the email and the recipients.


![demo5](/images/newsurvey.JPG)

The user would then click on the next button, where he would be redirected to the confirmation page, where he will be able to send out the emails. 

![demo6](/images/confirmation.JPG)


## Receiving Surveys and Responding

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


![demo7](/images/email.JPG)



