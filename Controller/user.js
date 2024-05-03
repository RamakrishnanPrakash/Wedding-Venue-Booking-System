const env = require("dotenv");
const { json } = require("express");
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { log, error } = require("console");
env.config({ path: "../.env" });
const Mailer = require("./mailer");
var nameLogo;
var otp;
var logoname; //not change the variable name
var userData = [];
let bookingData = [];

const connection = db.connection();
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else if (!error) console.log("Database was connected");
});
//Here the router loading the venue card from venue_search.hbs
exports.distic = (req, res) => {
  try {
    // if(!req.cookies.account){
    //    res.render('login');
    // }s
    let logoname = "";
    if (req.userData) {
      let user = req.userData;
      user = JSON.parse(user);
      // console.log(user[0]);          //this set of code client page logo name mainted
      logoname = user[0].uname; // Example:Ramakrishnan => "R" This name was mainted
      logoname = logoname[0];
      console.log(logoname);
    }

    var distic = req.query.distic;
    connection.query(
      `SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage 
                      FROM MAHAL WHERE distic=?`,
      [distic],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result.length == 0) {
          return res.render("index", {
            msg: "Distic not found or Choose the correct distic 🙃",
          });
        }
        if (result.length != 0) {
          const pr = { logoname: logoname };
          console.log(pr);
          res.render("venue_search", {
            result: result,
            distic,
            logo: logoname,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};

//Here the router loading the filter card from venue_search.hbs

exports.filter = (req, res) => {
  let logoname = "";

  if (req.userData) {
    let user = req.userData;
    user = JSON.parse(user);
    // console.log(user[0]);          //this set of code client page logo name mainted
    logoname = user[0].uname; // Example:Ramakrishnan => "R" This name was mainted
    logoname = logoname[0];
    console.log(logoname);
  }
  var amount = req.query.amount;
  var city = req.query.city;
  var ac = req.query.ac;
  var rating = req.query.rating; //console.log(amount,city,ac);
  if ((amount == "") & (city == "") & (ac == "")) {
    res.redirect("back");
  } else if (rating == "") rating = "10.0";
  else if ((amount != "") & (city !== "") & (ac != "") & (rating != "")) {
    connection.query(
      "SELECT * FROM MAHAL WHERE amount<=? AND distic=? AND  rating>=? AND ac=?",
      [amount, city, rating, ac],
      (error, result) => {
        if (error) throw error;
        var c = JSON.stringify(result);
        var mahal = JSON.parse(c);

        res.render("venue_search", { result: result, logo: logoname });
      }
    );
  }
  if (rating == "") rating = "10.0";
  else if ((amount != "") | (city !== "") | (ac != "") | (rating != "")) {
    connection.query(
      "SELECT * FROM MAHAL WHERE amount<=? OR distic=? OR  rating >=? OR ac=?",
      [amount, city, rating, ac],
      (error, result) => {
        if (error) throw error;
        var c = JSON.stringify(result);
        var mahal = JSON.parse(c);

        res.render("venue_search", { result: result, logo: logoname });
      }
    );
  }
};
//Here the info button clicking and routing for 'auth/info' .
//i have render in check .hbs page in local host.
exports.info = (req, res) => {
  let logoname = "";
  if (req.userData) {
    let user = req.userData;
    user = JSON.parse(user);
    // console.log(user[0]);          //this set of code client page logo name mainted
    logoname = user[0].uname; // Example:Ramakrishnan => "R" This name was mainted
    logoname = logoname[0];
    console.log(logoname);
  }

  // console.log('Here the page');
  if (req.user) {
    connection.query(
      ` SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage FROM MAHAL WHERE id=?`,
      [req.query.id],
      (error, result) => {
        if (error) throw error;
        //console.log(result);
        connection.query("SELECT * FROM MAHAL", (error1, result1) => {
          if (error1) throw error1;
          res.render("check.hbs", {
            result: result,
            result1: result1,
            logoname: logoname,
          });
        });
      }
    );
  } else {
    res.render("index");
  }
};

/******************************************************************************************
 *****Here the register button clicking and routing for 'auth/register' . ***************
 *****************************************************************************************  */

exports.register = (req, res) => {
  /* var uname=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var cpassword=req.body.cpassword;*/
  var test = true;
  var { username, email, password, cpassword } = req.body;
  if (!username || !email || !password || !cpassword) {
    return res.render("register", { require: "Please fill in the field !!!" });
  }
  // console.log(username,email,password,cpassword);
  connection.query(
    "SELECT uname FROM USER WHERE uname=?",
    [username],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length > 0) {
        test = false;
        return res.render("register", { msg1: "Username already taken😕😕😕" });
      } else if (result == 0) {
        connection.query(
          "SELECT uemail FROM USER WHERE uemail=?",
          [email],
          async (error, result) => {
            if (error) {
              console.log(error);
            }

            if (result.length > 0) {
              test = false;
              return res.render("register", {
                msg2: "Email is already taken😕😕😕",
              });
            } else if (password.length < 8) {
              return res.render("register", {
                msg3: "Password contains atleast 8 character",
              });
            } else if (password !== cpassword) {
              test = false;
              return res.render("register", {
                msg3: "Password does not match😕😕😕",
              });
            }

            let hashedpassword = await bcrypt.hash(password, 4);
            //console.log(hashedpassword);
            connection.query(
              "INSERT INTO USER set ?",
              { uname: username, uemail: email, upassword: hashedpassword },
              (error, result) => {
                if (error) {
                  console.log(error);
                } else {
                  return res.render("index", {
                    alert: "msg-container-active",
                    msg1: "Registration was successfull",
                  });
                }
              }
            );
          }
        );
      }
    }
  );
};

/******************************************************************************************
 *****************************Here login page ********************************************
 *****************************************************************************************  */

exports.login = async (req, res) => {
  //res.send("Login success");
  try {
    var { username, password } = req.body;
    //console.log(username,password);
    if (!username | !password) {
      return res.render("login", {
        msg1: "Please Enter Your Username and Password 😕",
      });
    }
    connection.query(
      "SELECT * FROM USER WHERE uname=?",
      [username],
      async (error, result) => {
        if (error) {
          console.log(error);
        }
        //console.log(result);

        if (result.length <= 0) {
          // console.log(result);
          return res.render("login", {
            msg1: "Username or Password Incorrect 😕",
          });
        } else {
          if (!(await bcrypt.compare(password, result[0].upassword)))
            return res.render("login", {
              msg1: "Username or Password Incorrect 😕",
            });
        }

        // res.send("GOOD");
        logoname = result[0].uname;
        logoname = logoname[0];
        console.log(logoname);
        const id = result[0].user_id;
        const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN,
        });
        //console.log(token);
        const cookieOption = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
        res.cookie("account", token, cookieOption);
        res.status(200).render("index", {
          alert: "msg-container-active",
          msg1: "Login was successfull",
        });
        //console.log(cookieOption.expires)
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/******************************************************************************************
 **************Here the code check the website login or not login ************************
 *****************************************************************************************  */

exports.isLoggedIn = async (req, res, next) => {
  try {
    if (!req.cookies.account) {
      res.render("login");
    }

    if (req.cookies.account) {
      const decode = await promisify(jwt.verify)(
        req.cookies.account,
        process.env.JWT_SECRET
      );
      // console.log(decode);
      connection.query(
        "SELECT * FROM USER WHERE user_id=?",
        [decode.id],
        (error, result) => {
          if (error) {
            console.log(error);
          }
          // console.log(result);
          if (!result) {
          }
          req.user = result[0];
          return next();
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

//Here the code logout the web application
exports.logout = (req, res) => {
  res.clearCookie("account");
  logoname = "";
  res.render("index");
};

/********************************************************
 **************Mahal Booking codes************************
 *********************************************************  */
var id = "";
exports.bookingMahal = async (req, res, next) => {
  let decode = "";
  var username;
  var validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const { mahal_id } = req.query;
  id = req.query.mahal_id;
  const { name, phone_no, email, date } = req.body;
  console.log(name, phone_no, email, date);

  let state = false;
  const phoneArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // console.log(typeof(phoneArray));

  for (var i = 0; i < phone_no.length; i++) {
    for (var j = 0; j < phoneArray.length; j++) {
      if (phone_no[i] === phoneArray[j]) {
        state = true;
        //console.log(phone_no[i]);
        break;
      } else {
        state = false;
      }
    }
  }

  if (req.cookies.account) {
    decode = await promisify(jwt.verify)(
      req.cookies.account,
      process.env.JWT_SECRET
    );

    connection.query(
      "SELECT * FROM USER WHERE user_id=?",
      [decode.id],
      (error, user_details) => {
        if (error) {
          console.log(error);
        } else {
          logoname = user_details[0].uname;
          logoname = logoname[0];
          console.log(logoname);
          connection.query(
            ` SELECT id, mahalname,city,distic,rating,budjet,indoor,mahalimage FROM MAHAL WHERE id=?`,
            [mahal_id],
            (error, result) => {
              if (error) throw error;

              connection.query("SELECT * FROM MAHAL", (error1, result1) => {
                if (!name | !phone_no | !email | !date) {
                  return res.render("check.hbs", {
                    result: result,
                    message1: "📢 Please enter the fields",
                    result1: result1,
                    logoname: logoname,
                  });
                } else if (user_details[0].uname !== name) {
                  return res.render("check.hbs", {
                    result: result,
                    message1: "Username already exits 🧑",
                    result1: result1,
                    logoname: logoname,
                  });
                } else if (phone_no.length < 10) {
                  return res.render("check.hbs", {
                    result: result,
                    message1: "Not a phone number 📱",
                    result1: result1,
                    logoname: logoname,
                  });
                } else if (state == false) {
                  return res.render("check.hbs", {
                    result: result,
                    message1: "Please enter correct phone number 📱",
                    result1: result1,
                    logoname: logoname,
                  });
                } else if (!email.match(validEmailRegex)) {
                  return res.render("check.hbs", {
                    result: result,
                    message1: "Invalid email address! 📱",
                    result1: result1,
                    logoname: logoname,
                  });
                } else if (date) {
                  var reqDateParse = Date.parse(date);
                  var reqDate = new Date(reqDateParse);
                  var newDate = new Date();
                  if (
                    reqDate.getMonth() < newDate.getMonth() ||
                    reqDate.getFullYear() < newDate.getFullYear() ||
                    (reqDate.getMonth() == newDate.getMonth() &&
                      reqDate.getDate() < newDate.getDate())
                  ) {
                    return res.render("check.hbs", {
                      result: result,
                      message1: "You can't booking privious day",
                      result1: result1,
                      logoname: logoname,
                    });
                  }
                  connection.query(
                    `
                          SELECT * FROM BOOKING WHERE MAHAL_ID=? AND BOOKING_DATE=?
                        `,
                    [mahal_id, date],
                    (err, result1) => {
                      if (result1.length > 0) {
                        //console.log(result.length);
                        return res.render("check.hbs", {
                          result: result,
                          result1: result1,
                          alerts: "warning-active",
                          logoname: logoname,
                        });
                      } else {
                        userData = [
                          {
                            mahalId: mahal_id,
                            userId: decode.id,
                            userName: name,
                            email: email,
                            phoneNo: phone_no,
                            date: date,
                          },
                        ];
                        // console.log(userData);
                        otp = Mailer.mail(
                          userData[0].userName,
                          userData[0].email
                        );
                        console.log(otp);
                        // return res.render('check.hbs',{result:result,result1:result1 ,active:"otp-active"});
                        res.render("otp.hbs");

                        // connection.query('INSERT INTO BOOKING VALUES(?,?,?,?,?)',[parseInt(mahal_id),date,decode.id,email,phone_no],
                        // (error,result1)=>{
                        //    if(error)
                        //      console.log(error);
                        //    else
                        //      console.log("DATA WAS INSERTED");
                        // }
                        // )
                      }
                    }
                  );
                } else {
                  return res.render("index");
                }
              });
            }
          );

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
};
exports.back = (req, res) => {
  res.redirect(`/auth/info?id=${id}`);
};

/***********************************************************************************************************
 **************************This section otp verification*************************************************
 *********************************************************************************************************/

exports.resendOtp = (req, res) => {
  try {
    otp = Mailer.mail(userData[0].userName, userData[0].email);
    console.log(otp);
    res.render("otp");
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.validOtp = (req, res) => {
  try {
    var d;
    var data;
    const bookingData = [];
    var mahalIdArray = [];
    var object1 = new Object();
    const { no1, no2, no3, no4 } = req.body;
    var num = no1 + no2 + no3 + no4;
    function mail() {
      Mailer.confireMail(
        userData[0].userName,
        userData[0].email,
        result[0].mahalimage
      );
    }
    function display() {
      connection.query(
        `
     SELECT MAHAL.mahalname,MAHAL.distic,MAHAL.city,MAHAL.mahalimage,
     BOOKING.BOOKING_DATE,BOOKING.EMAIL,BOOKING.PHONE_NO,BOOKING.USERNAME FROM MAHAL,BOOKING
     WHERE MAHAL.id=BOOKING.MAHAL_ID AND BOOKING.USER_ID=?
     `,
        [userData[0].userId],
        (error, result) => {
          //  console.log('----------------------------------------------------------------------------------')
          console.log(result);
          console.log(userData[0].userName, userData[0].email);
          connection.query(
            `
            SELECT * FROM mahal WHERE id=?
            `,
            [userData[0].mahalId],
            (err, result) => {
              if (err) {
                console.log(err);
              }
              console.log("I am Ramakrishnan");
              var s = result[0].mahalimage;
              // console.log(result[0].mahalimage);
              Mailer.confireMail([
                userData[0].userName,
                userData[0].email,
                result[0].mahalimage,
                result[0].city,
                result[0].distic,
                result[0].Ac,
                result[0].budjet,
                result[0].mahalname,
                userData[0].date,
              ]);
            }
          );
          console.log("Username is:", userData[0].userName);
          var mes = "" + userData[0].userName;
          res.render("confirm", { result: result, mes: mes });
        }
      );
    }
    // console.log(num);
    connection.query(
      `
            SELECT * FROM BOOKING WHERE MAHAL_ID=? AND BOOKING_DATE=?
          `,
      [userData[0].mahalId, userData[0].date],
      (error, result) => {
        if (result.length > 0) {
          display();
        }
        if (result.length <= 0) {
          if (!num || otp !== num) {
            res.render("otp", { msg: "Invalid OTP" });
          } else if (otp == num) {
            // console.log(userData);
            connection.query(
              `INSERT INTO BOOKING VALUES(?,?,?,?,?,?,?)`,
              [
                userData[0].mahalId,
                userData[0].date,
                userData[0].userId,
                userData[0].email,
                userData[0].phoneNo,
                userData[0].userName,
                userData[0].date,
              ],
              (error, result) => {
                if (error) {
                  console.error("Error:" + error);
                }
                if (!error) {
                  display();
                }
              }
            );
          } //else-if block
        }
      }
    );
  } catch (error) {
    //try-block
    console.log(error);
    res.render("404");
  }
};
