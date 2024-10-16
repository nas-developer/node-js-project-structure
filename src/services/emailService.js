const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to send email
const sendEmail = async (to, subject, templateName, context) => {
    try {
        const templatePath = path.join(__dirname, '../emails', `${templateName}.ejs`);
        const emailTemplate = await ejs.renderFile(templatePath, context);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            html: emailTemplate
        };
        
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };
