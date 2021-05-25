const nodeMailer = require('nodemailer')
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mdmehedi',
        pass: ''
    }
})

const mailOption ={
    from: 'mdmehedi',
    to: "mdnur",
    subject: 'Sending from nodejs server',
    text: 'vai kmn acchen'
};

transporter.sendMail(mailOption,(err,info)=>{
   if(err){
       console.log(err);
   }
   else console.log("email sent : ", info.response);
})


