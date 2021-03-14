---
title: Using AWS with Salesforce
subtitle: Using AWS with Salesforce
category:
  - About Awake
author: Nick Huber
date: 2021-03-14T08:20:18.816Z
featureImage: /uploads/sfaws.png
---
Using AWS with Salesforce is one of the best platforms you can use to help leverage Salesforce to reach its maximum potential. No problem can stand in your way when you understand the ins and outs around the technologies inside Amazon Web Services.

S3:
For example using S3 buckets to store files too large for Salesforce or to allow for a speedy CDN to allow users around the globe to access or download files faster than what Salesforce can provide.

Lambda functions:
Another powerful service to know about is Lambda functions. These functions hosted within AWS allow you to integrate with API’s sometimes easier than using apex inside Salesforce. For instance if the api doesn’t pass an OAuth token you’ll need to do some extra things that could be unsafe inside Salesforce. Using a Lambda function you could just consume the request from an API Gateway and submit it back to Salesforce using a Rest Resource or directly with NForce or JSForce.

API Gateway: 
In order to pass data into a Lambda function you’ll need to create an API Gateway. Basically an API Gateway generates a URL that you can post parameters, payloads, and variables to in order for the Lambda function to fire while it references the data received in the API Gateway connected to the lambda function.

NForce and JSForce: 
The most common Lambda function uses Node.js as the code that runs when it receives data. You might be asking yourself how would I submit data to Salesforce? You can do this using the many packages created on the node package manager.
For instance if you include NForce or JSForce you can easily create records in Salesforce that includes the data received in the API Gateway.

Example:

```javascript
var sf = require('node-salesforce');//this is including JSForce

var conn = new sf.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox. it defaults to prod.
    // loginUrl : 'https://test.salesforce.com',
   clientId: 'connectedapp_id',
  clientSecret: 'connectedapp_secret',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  loginUrl: 'https://login.salesforce.com'
  }
});

conn.login('nick@huber.codes', 'passwordsecuritytoken', function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);

  // execute anonymous Apex Code
var apexBody = "System.debug('Hello, World! Nick Huber');";
conn.tooling.executeAnonymous(apexBody, function(err, res) {
  if (err) { return console.error(err); }
  console.log(res.compiled); // compiled successfully
  console.log(res.success); // executed successfully
  // ...
});


  // ...
});
```

