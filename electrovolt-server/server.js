const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build'))); 
const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../electrovolt-client/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../electrovolt-client/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'message_hub@electrovolt.in', 
    pass: 'mkqtfasmgmnlldow', 
  },
});

app.get('/', (req, res) => {
    res.send('Hello, this is the home page!');
  });
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.post('/send-email', (req, res) => {
    try{
        const { name, email, phone, subject, message } = req.body;

        const mailOptions = {
            from: 'message_hub@electrovolt.in', 
            to:  'info_hub@electrovolt.in',
            subject: `Subject: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
            } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
