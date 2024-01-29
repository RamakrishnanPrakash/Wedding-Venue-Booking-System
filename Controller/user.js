const mysql=require('mysql');
const env=require('dotenv');
const { json } = require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {promisify}=require('util');
const { log, error } = require('console');
env.config({path:'../.env'});

var logoname;//not change the variable name

//DATABASE CONNECTION AND CONFIGURATION
const connection=mysql.createConnection(
    {
       host:process.env.DB_HOST,
       user:process.env.DB_USER,
       password:process.env.DB_PASS,
       database:process.env.DB_NAME
    }
);
connection.connect((error)=>{
    if(error)
      console.log(error);
    else if(!error)
       console.log("Database was connected");
})

//Here the router loading the venue card from venue_search.hbs
exports.distic=(req,res)=>{
   if(!req.cookies.account){
      res.render('login');
   }
  var distic=req.query.distic;
    connection.query(`SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage 
                      FROM MAHAL WHERE distic=?`,[distic],(err,result)=>{
        if (err){
         console.log(err)
        }
        if(result.length==0){
         return res.render('index',{msg:"Distic not found or Choose the correct distic 🙃"})
        }
        if(result.length!=0)
        res.render('venue_search',{result:result,distic,logoname});
    })

}

//Here the router loading the filter card from venue_search.hbs

exports.filter=(req,res)=>{
    var amount=req.query.amount;
    var city=req.query.city;
    var ac=req.query.ac;
    var rating=req.query.rating;  //console.log(amount,city,ac); 
 if(amount=='' & city=='' & ac==''){
    res.redirect('back');
 }

 else  if(rating=='')
      rating='10.0';

 else if(amount!=''&city!=='' & ac!='' & rating!=''){
    connection.query(
        'SELECT * FROM MAHAL WHERE amount<=? AND distic=? AND  rating>=? AND ac=?',
        [amount,city,rating,ac],
        (error,result)=>{
           if(error) throw error;
           var c=(JSON.stringify(result))
           var mahal=JSON.parse(c);
           
           res.render('venue_search',{result:result});
        }
    )
 }
 if(rating=='')
    rating='10.0';
 else if(amount!=''|city!=='' | ac!='' | rating!=''){
    connection.query(
        'SELECT * FROM MAHAL WHERE amount<=? OR distic=? OR  rating >=? OR ac=?',
        [amount,city,rating,ac],
        (error,result)=>{
           if(error) throw error;
           var c=(JSON.stringify(result))
           var mahal=JSON.parse(c);
           
           res.render('venue_search',{result:result});
        }
    )
 }


}
//Here the info button clicking and routing for 'auth/info' .
//i have render in check .hbs page in local host.
exports.info=(req,res)=>{
  // console.log('Here the page');

  connection.query(
  
   ` SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage FROM MAHAL WHERE id=?`,[req.query.id],
   (error,result)=>{

      if(error) throw error;
      //console.log(result);
      connection.query("SELECT * FROM MAHAL",(error1,result1)=>{
         if( error1) throw error1
         res.render('check.hbs',{result:result,result1:result1});
      })
     
   }
  );
};

/****************************************************************************************** 
   *****Here the register button clicking and routing for 'auth/register' . ***************
   *****************************************************************************************  */ 


exports.register=(req,res)=>{
  /* var uname=req.body.username;
   var email=req.body.email;
   var password=req.body.password;
   var cpassword=req.body.cpassword;*/
   var test=true;
   var {username,email,password,cpassword}=req.body;
  // console.log(username,email,password,cpassword);
  connection.query('SELECT uname FROM USER WHERE uname=?',[username],
  (error,result)=>{
    if(error){console.log(error);}
    if(result.length > 0){
        test=false
         return res.render('register',{msg1:"Username already taken😕😕😕"});
     }

    else if(result==0){
      connection.query('SELECT uemail FROM USER WHERE uemail=?',[email],
      async(error,result)=>{
         if(error){  console.log(error);}
       
         if(result.length > 0){
            test=false
            return res.render('register',{msg2:"Email is already taken😕😕😕"});
         }
         else if(password!==cpassword){
            test=false
            return res.render('register',{msg3:"Password does not match😕😕😕"});
          }

          let hashedpassword=await bcrypt.hash(password,4);
          //console.log(hashedpassword);
          connection.query("INSERT INTO USER set ?",{uname:username,uemail:email,upassword:hashedpassword},
          (error,result)=>{
            if(error){console.log(error)}
            else{
         
               return res.render('index',{alert:"msg-container-active" ,msg1:"Registration was successfull"});
               
            }
          })

      })
   }
  
   
  })
   
}

 /****************************************************************************************** 
   *****************************Here login page ********************************************
   *****************************************************************************************  */ 

exports.login=async(req,res)=>{
   //res.send("Login success");
try{
   var {username,password}=req.body;
   //console.log(username,password);
   if(!username | !password){
      return res.render('login',{msg1:"Please Enter Your Username and Password 😕"});  
   }
   connection.query("SELECT * FROM USER WHERE uname=?",[username],
  async (error,result)=>{
      if(error){console.log(error);}
      //console.log(result);
      
     
      if(result.length <=0){
        // console.log(result);
        return res.render('login',{msg1:"Username or Password Incorrect 😕"});
      }
     else{
        if(!(await bcrypt.compare(password,result[0].upassword)))
         return res.render('login',{msg1:"Username or Password Incorrect 😕"});
      }

        // res.send("GOOD");
        logoname=result[0].uname;
        logoname=logoname[0];
        console.log(logoname);
        const id=result[0].user_id;
        const token=jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})
        //console.log(token);
        const cookieOption={
         expires:new Date(
            Date.now()+process.env.JWT_COOKIE_EXPIRES_IN*24*60*60*1000
         ),
         httpOnly:true
        }
        res.cookie('account',token,cookieOption);
        res.status(200).render('index',{alert:"msg-container-active",
        msg1:"Login was successfull" });
        //console.log(cookieOption.expires)
   
      
   }
   );
}
catch(error){
   console.log(error)
}
   

}


 /****************************************************************************************** 
   **************Here the code check the website login or not login ************************
   *****************************************************************************************  */ 

exports.isLoggedIn=async(req,res,next)=>{
   try{

      if(!req.cookies.account){
         res.render('login');
      }
  
   if(req.cookies.account)
   
    {
      const decode=await promisify(jwt.verify)(
        req.cookies.account,
        process.env.JWT_SECRET
      );
     // console.log(decode);
     connection.query('SELECT * FROM USER WHERE user_id=?',
      [decode.id],
      (error,result)=>{
         if(error){console.log(error);}
        // console.log(result);
        if(!result){
         
        }
         req.user=result[0];
         return next()
      }
      );
    }

    }
    catch(error){
      console.log(error)
    }

   

   }

   //Here the code logout the web application
exports.logout=(req,res)=>{
      res.clearCookie('account');
      res.render('index');
   }

   /******************************************************** 
   **************Mahal Booking codes************************
   *********************************************************  */ 

exports.bookingMahal=async(req,res)=>{
   var username;
   var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {mahal_id}=req.query; 
    const {name,phone_no,email,date} =req.body;
    console.log(name,phone_no,email,date)

    let state=false;
    const phoneArray=['0','1','2','3','4','5','6','7','8','9'];
   // console.log(typeof(phoneArray));
       
      for(var i=0;i<phone_no.length;i++){
         for(var j=0;j<phoneArray.length;j++){
             if(phone_no[i]===phoneArray[j]){
               state=true;
               console.log(phone_no[i]);
               break;
             }
             else{
               state=false;
             }

         }
      }
      
    if(req.cookies.account){
        const decode=await promisify(jwt.verify)(
          req.cookies.account,
          process.env.JWT_SECRET
        );

        connection.query('SELECT * FROM USER WHERE user_id=?',
        [decode.id],
        (error,user_details)=>{
           if(error){console.log(error);}

           
          else{
            connection.query(
  
               ` SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage FROM MAHAL WHERE id=?`,[mahal_id],
               (error,result)=>{
                  if(error) throw error;

                  connection.query("SELECT * FROM MAHAL",(error1,result1)=>{

                     if(!name | !phone_no | !email){
                       return res.render('check.hbs',{result:result,message1:"📢 Please enter the fields",result1:result1});
                     }
                     
                    else if(user_details[0].uname !==name){
                     return res.render('check.hbs',{result:result,message1:"Username already exits 🧑",result1:result1});
                     }

                    else if(phone_no.length<10){
                     return res.render('check.hbs',{result:result,message1:"Not a phone number 📱",result1:result1});
                  }

                 
                     else if(state==false){
                     return res.render('check.hbs',{result:result,message1:"Please enter correct phone number 📱",result1:result1}); 
                  }
         
                  
                    

                     else if(!email.match(validEmailRegex)){
                      
                       return res.render('check.hbs',{result:result,message1:"Invalid email address! 📱",result1:result1});
                     }

                     else{
                        return res.render('index');
                     }

                  
                  
                  })
               });

     /*    if(user_details[0].uname !==name){
            connection.query(
  
               ` SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage FROM MAHAL WHERE id=?`,[mahal_id],
               (error,result)=>{
            
                  if(error) throw error;
                  //console.log(result);
                  connection.query("SELECT * FROM MAHAL",(error1,result1)=>{
                     if( error1) throw error1
                     res.render('check.hbs',{result:result,message1:"Username already exits",result1:result1});
                  })
                 
               }
              ); 
         } 

         else if(phone_no.length<10){
          console.log("phono no")
            connection.query(
  
               ` SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage FROM MAHAL WHERE id=?`,[mahal_id],
               (error,result)=>{
            
                  if(error) throw error;
                  //console.log(result);
                  connection.query("SELECT * FROM MAHAL",(error1,result1)=>{
                     if( error1) throw error1
                     res.render('check.hbs',{result:result,message1:"Not an phone no",result1:result1});
                  })
                 
               }
              ); 


         }

         else{
            res.render('index');
         }
         */
      }

      }
      );










      }
   }