const nodemailer=require("nodemailer");
let generateOtp=()=>{
  var otp='';
  for(var i=0;i<4;i++){
    otp+=Math.floor(Math.random()*10);
  }
//  console.log(otp);
  return otp
}


exports.mail=(username,email)=>{
   var otp=generateOtp();
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'venuemahal97@gmail.com',
          pass: 'caix tebp iciv svak'
        }
      });
     
      var mailOptions = {
        from: 'venuemahal@gmail.com',
        to:email,
        subject: 'Sending Email using Node.js',
        html:`
        <h3 style="text-align: center;">🏰 Venuemahal.com</h3>
        <h2 style="text-align: center; font-weight: 600;">${otp}</h2>
        <p style="margin: 10px 0;">Dear ${username}</p>

    <p style="margin-top: 10px;">confirm your booking with (Venuemahal).</p>
   
    <p>your <span style="background-color: gold;">OTP</span>
    for <span style="background-color:gold ;">verification</span>
    is ${otp}.please do not share your <span style="background-color: gold;">OTP</span>
   with anyone </p>
   
   <p style="margin-top: 10px;">This is a system generated e-mail and please do not replay
    Add <a href="">venue mahal.com</a> to your white list/safe sender
    list.Else ,your mailbox filter or ISP(Internet Service Provider)
    may stop you from e-mails
   </p>
   <p style="margin-top: 10px;">Regards,</p>
   <p style="margin-top: 10px;">Venuemahal team,</p>
   <p>Venuemahal.com</p>
        
              `
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          
        }
      });
      return otp;
    }

    exports.confireMail=(username,email,image)=>{
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'venuemahal97@gmail.com',
          pass: 'caix tebp iciv svak'
        }
      });
      var mailOptions = {
        from: 'venuemahal@gmail.com',
        to:email,
        subject: 'Sending Email using Node.js',
        html:`
        <h3 style="text-align: center;">🏰 Venuemahal.com</h3>
        <p style="margin: 10px 0;">Dear ${username}</p>
        <img src="${image}" alt="" width="200" height="200" style="margin: 2px auto;">
        <p style="margin: 10px 0;">Your booking was confiremd</p>
        `
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        
      }
    });
  }