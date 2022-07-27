import ContactForm from '../src/Components/ContactForm';

const express = require('express');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3006, () => console.log("Server is running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kyla.b.wootson@gmail.com",
        pass: "izbabszschctvpze",
    },
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "kyla.b.wootson@gmail.com",
        subject: "Peach Moon Contact Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>` 
    };
    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({ status: "Error" });
        } else {
            res.json({ status: "Message Sent"});
        }
    });
});

