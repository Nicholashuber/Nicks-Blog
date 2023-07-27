---
title: "Building an API Gateway in AWS: A Step-by-Step Guide"
subtitle: Learning AWS
category:
  - Blog
author: Nick Huber
date: 2023-07-27T18:36:29.060Z
featureImage: /uploads/sfaws.png
---
If you want to take AWS to the next level you will need to create an API Gateway. An API Gateway creates a url that allows you to post data to it and it passes it along to a connected Lambda function running Node.js.


##After logging into AWS click on the search console and navigate to the API Gateway service.



##Once you are there go ahead and click “Create API”



##Once on the next screen confirm you have the same options selected and click next:



##Now you’ll need to click the “actions” drop down list and select “Create Method”:





Create a “POST” method and then click on the method you just created.
Now you’ll want to fill in the details of your lambda function while keeping the default settings:





To simplify the way you recieve post data to your api gateway you should check the box next to “Use Lambda Proxy Iintegration” This allows you to easily parse data inside your lambda function.:





If you dont already have a lambda function go ahead and create a blank one.
You can learn how to create a Lambda function in my other post here:



Now that you have saved your API Gateway along with your “POST” method you’ll want to deploy your changes. Click “Deploy API” like below:





You’ll be prompted to name a stage you want to deploy it as. Typically you’ll want to create a stage named “sandbox” and a stage named “prod”. Lets go ahead and name it Sandbox:



After clicking “deploy” you have now deployed your gateway setup to a stage giving a url you can post data to!
In order to see the URL generated for your API Gateway you need to click on “Stages”





A side panel will open showing the url you can now post to like this:




Use this url to send you post data over to a Lambda function you create.