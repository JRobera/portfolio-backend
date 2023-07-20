const nodemailer = require("nodemailer");

const sendMessage = async (req, res) => {
  const { fullName, email, mobileNumber, subject, message } = req.body.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILERUSER,
      pass: process.env.NODEMAILERPASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILERUSER,
    subject: subject,
    html:
      "<strong>" +
      fullName +
      "</strong>" +
      "<br />" +
      "<i>" +
      message +
      "<i/>" +
      "<br /> <br /> Phone number: " +
      mobileNumber,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json(error);
    } else {
      res.json("Thank You!");
    }
  });
};

module.exports = { sendMessage };
