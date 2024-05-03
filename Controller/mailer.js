const nodemailer = require("nodemailer");
let generateOtp = () => {
  var otp = "";
  for (var i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  //  console.log(otp);
  return otp;
};

exports.mail = (username, email) => {
  var otp = generateOtp();
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "venuemahal97@gmail.com",
      pass: "caix tebp iciv svak",
    },
  });

  var mailOptions = {
    from: "venuemahal@gmail.com",
    to: email,
    subject:
      " Booking Confirmation: Please Verify Your Reservation with Venuemahal.com",
    html: `
    <div class="container" style="font-family:sans-serif; margin: 10px auto;   background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(200,79,202,1) 50%, rgba(233,73,159,1) 100%); box-shadow: 2px 2px 10px #222; border-radius: 10px;
    color: white; width: 700px; padding: 20px;">
    <h2 style="text-align: center; color: #fff;">🏰 Venuemahal.com</h2>
    <h1 style="text-align: center; letter-spacing: 3px; font-weight:bold;color: yellow;">${otp}</h1>
    <h3 style="text-align: left; margin: 10px 0;">Dear ${username}</h3>
    <h3 style="color:#fff;">We kindly ask you to confirm your booking with Venuemahal. Your OTP for verification is <span
            style="font-weight: bold; color: rgb(223, 228, 231); background-color: rgb(30, 210, 156); padding: 2px;">${otp}</span>.
        Please keep
        this OTP confidential and refrain from sharing it with anyone.</h3>
    <p style="margin-bottom: 10px; color:#fff;">Please note that this email is system-generated. Kindly avoid replying to this
        email. To ensure continued
        receipt of our emails, add Venuemahal.com to your white list/safe sender list. Failure to do so may result
        in our emails being filtered by your mailbox or ISP (Internet Service Provider).</p>
    <p style="margin: 15px 0; color:#fff;">Best Regards,</p>
    <p style="color:#fff;">Venuemahal Team</p>
    <p style="color:#fff;">Venuemahal.com</p>

</div>
        
              `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return otp;
};

exports.confireMail = (confirmData) => {
  console.log(confirmData);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "venuemahal97@gmail.com",
      pass: "caix tebp iciv svak",
    },
  });
  var mailOptions = {
    from: "venuemahal@gmail.com",
    to: confirmData[1],
    subject: "Booking Confirmation",
    html: `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Venue mahal</title>
    <style>
        .container {
            width: 700px;
            margin: 0 auto;

            font-family: sans-serif;
            margin: 10px auto;
            background: rgb(131, 58, 180);
            background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(200, 79, 202, 1) 50%, rgba(233, 73, 159, 1) 100%);
            padding: 20px;
            color: #fff;
            text-align: center;
        }

        .message {
            min-width: 70%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            flex-direction: column;
            background-color: #ffffff31;
            border-radius: 10px;
            box-shadow: 2px 2px 10px #222;
            padding: 10px 20px;
            margin: 5px auto;
        }

        table {
            width: 100%;
            padding: 5px;
            text-align: left;
            border-radius: 5px;
        }

        table td,
        th {
            width: 100%;
            /* border: 2px solid #fff; */
            padding: 6px 30px;
            padding-left: 20px;

        }

        button {
            outline: 0;
            border: 0;
            color: #fff;
            padding: 5px 15px;
            border-radius: 3px;
            background-color: rgb(18, 57, 165);
        }

        h2 {
            padding: 10px 30px;
            border-bottom: 2px solid #fff;
        }
    </style>
</head>

<body>
    <!--  
  0 'Prakash',
  1'www.ramkrish98@gmail.com',
  2'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/161/new_medium/ss20230615-21427-l9eqji.jpg?1686830537',
  3'Ramanathapuram City',
  4'Ramanathapuram',
  5'ac',
  6'69,000 ',
  7'Barakath Mahal',
  8'2024-05-31' -->


    <div class="container">

        <h2 style="text-align: center;">🏰 Venuemahal.com</h2>

        <div class="message">
            <div class="img">
                <img src=${confirmData[2]}
                    alt="" width="250px" height="250px" style="border-radius: 20px; box-shadow: 2px 2px 10px #222;">
            </div>

            <div class="message-container">
                <table style="margin: 10px auto;">
                    <tr>
                        <th>Mahalname</th>
                        <td>${confirmData[7]}</td>
                    </tr>
                    <tr>
                        <th>Username:</th>
                        <td>${confirmData[0]}</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>${confirmData[8]}</td>
                    </tr>
                    <tr>
                        <th>District</th>
                        <td>${confirmData[4]}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>${confirmData[3]}</td>
                    </tr>
                    <tr>
                        <th>Ac/NonAc</th>
                        <td>${confirmData[5]}</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td>${confirmData[6]}</td>
                    </tr>

                    <tr>
                        <th>Status</th>
                        <td><button>Booking</button></td>
                    </tr>

                </table>
            </div>
        </div>
        <p>Your booking has been successfully confirmed. Should you have any inquiries, please feel free to reach out to
        <a href="">venuemahal97@gmail.com.</a>
    </div>

</body>

</html>

<img src="" alt="" style="margin: 2px auto;">
    
    `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
