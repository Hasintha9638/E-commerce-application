1.	I used the microservices-based architecture. Because in the ecommerce system requirements have several major entities like Products, Customer, Invoices, Reports.
When we go with microservices architecture we can easy to maintain and extend the features. One service failed it not affect to other services.

2.	 I choose the SQL base database, In e-commerce system have entities have depends on the other entities.
Eg: If we have a invoice that contains the list of items ,customer details and payments details also in here we have to get the Items details using their id from product table.

3.	In here I choose the separate frontend-backend architecture. That easy handle we can deploy it separately make easier to handle UI implementation and backend architecture. 

4.	Front end: Angular or React. Angular is my core part. I can easily implement through the angular and able to manage modular wise customer modular, product modular wise maintain modular pattern. have support lot third part libraries. 
React also can choose to make easier to develop lots of parts we can control by own their also support lot third part libraries. React hooks supports for easy to handle state data. 
Consider the performance we can choose the React. 
Both can follow mvc architectures.



4.	A. backend technology: In here I choose the Nest.js for backend that typescript framework we can use the modular wise easy to manage like customer module, product module, Auth module . And using Prisma or sequalize orm easy to handle the database layer also. In here I use mainly with repository design pattern then future if we need to change or migrate database to another one we don’t need to affect the business logics.

5.	cloud provider – I choose the aws for deployment. My cloud core knowledge is aws. 
in here backend we can easily deploy to ec2 or fargate services using elastic beanstalk
and Front end we can put into s3 because this is single page web application using static web feature. We can use cloud front to secure and cache the front end. We can handle domain through the Route53. We can use rds  for deploy to our mysql or postgress database. For maintenance more security we can use VPC, and to store credentials secure for aws sercret manager. 
