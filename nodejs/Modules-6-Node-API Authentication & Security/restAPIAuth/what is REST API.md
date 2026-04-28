# what is rest api ?
  1. rest stands for representational state transfer application proggramming interface

  2. rest api will create to take response from any another device create rest api

  3. what is api ?

  4. api stands for application proggraming interface 

  5. api is created for mobile app, web app, and ios app in node js 

  6. api data will be in json formate

  7. what is json ?

     json stands for javscript object notation 
     json is stored multiple data using [{}] formate 
     json file extension .json

     [
        {
            id:1,
            name:"brijesh"
        }
     ] 

   8. rest api check status code 
     check success response 
     201 
     200 
     bad request or unsuccess status 
     404
     403 
     405

    9. check console go in network and check status of api
    10. rest api method 

     get :   get data 
     post :  post data or stored data
     put :   update data 
     patch : update data 
     delete : delete a data


# check status of api 

  download postman desktop app or web app 
  add header accespt json data 
  check api status using method
  create a collection for add request of api

# explain all dependencies of create rest api in node js 

  1. bcrypt : this is an external libraries 
  2. this is used to hashing passowrd 
  3. secred authentication with password hashing ins important to encrypt password

  ```
  const bcrypt=require('bycryptjs');

  ``` 

# cors : 

  cors : Cross-Origin resource sharing 

      1. allow frontend (react, angular , next) to call backend
      2. avoid broswers blocking request

     ```
     const cors=require("cors")
     ```      


# dotenv : load your environement variables setting 
         .env
         1. keep variables setting just like (database , jwt file seting)
         2. create all setting 
         
          
