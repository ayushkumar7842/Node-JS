// import the Nodemailer package
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const fs = require("fs/promises");

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code

dotenv.config();
// create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

// define the email configurations
const mailOptions = {
  from: process.env.email,
  to: process.env.email,
  subject: "Greeting from the NODE JS",
  text: "This is the testing mail using nodemailer",
  html: "",
};

// // send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log("Error occured: ", error);
//   } else {
//     console.log("Email Sent: ", info.response);
//   }
// });

async function sendEmail() {
  try {
    // get the content of html usign reading a file asyncronously
    const htmlContent = await fs.readFile("notice.html", { encoding: "utf-8" });

    // set the content to the html
    mailOptions.html = htmlContent;
    // send the email to the given recipient
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (err) {
    console.log("Error occured while sending the email", err);
  }
}

sendEmail();
