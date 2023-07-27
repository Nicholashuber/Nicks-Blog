---
title: "Building an API Gateway in AWS: A Step-by-Step Guide"
subtitle: Learning AWS
category:
  - Blog
author: Nick Huber
date: 2023-07-27T18:36:29.060Z
featureImage: /uploads/sfaws.png
---
# Creating an API Gateway for AWS with Node.js Lambda Integration

If you want to take AWS to the next level, you will need to create an API Gateway. An API Gateway creates a URL that allows you to post data to it and passes it along to a connected Lambda function running Node.js.

## Getting Started

1. After logging into AWS, click on the search console and navigate to the API Gateway service.

2. Once you are there, go ahead and click "Create API."

![cat](https://i.gyazo.com/4784b2de36c307e38170b603ce2ea00b.png)



3. On the next screen, confirm you have the same options selected and click "Next."

![cat](https://i.gyazo.com/9e8118c52848e5e4734f7a9eb44f20a9.png)



4. Now, you'll need to click the "Actions" drop-down list and select "Create Method."

![cat](https://i.gyazo.com/e8896f150ed91052d03198ca403c933f.png)


5. Create a "POST" method and then click on the method you just created.

![cat](https://i.gyazo.com/d5d65b891b2877475034513cd00a0a4e.png)


6. Next, fill in the details of your Lambda function while keeping the default settings.

7. To simplify the way you receive post data to your API Gateway, check the box next to "Use Lambda Proxy Integration." This allows you to easily parse data inside your Lambda function.

![cat](https://i.gyazo.com/1059d04232bfa6ad9189798e5d42b01f.png)



8. If you don't already have a Lambda function, go ahead and create a blank one. You can learn how to create a Lambda function in [my other post here](link-to-other-post).

9. Now that you have saved your API Gateway along with your "POST" method, you'll want to deploy your changes. Click "Deploy API."

![cat](https://i.gyazo.com/05ec559e3d3ff70a00f9c329a6afeb02.png)



10. You'll be prompted to name a stage you want to deploy it as. Typically, you'll want to create a stage named "sandbox" and a stage named "prod." Let's go ahead and name it "Sandbox."

![cat](https://i.gyazo.com/37753d45dede4b119244ef0a6ffa6202.png)



11. After clicking "deploy," you have now deployed your gateway setup to a stage, giving a URL you can post data to!

12. In order to see the URL generated for your API Gateway, you need to click on "Stages."

![cat](https://i.gyazo.com/defd822d6c0c68e2ec9343b8bacd254c.png)



13. A side panel will open showing the URL you can now post to like this:


![cat](https://i.gyazo.com/7ff7181e5c59b235e6ff4c0d4d093ab3.png)

