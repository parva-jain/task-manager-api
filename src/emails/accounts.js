const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parvajainpjjp@gmail.com',
        subject: 'Thanks for joining in!!',
        text: `Welcome to the app, ${name}. Let me know how you get along the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parvajainpjjp@gmail.com',
        subject: 'Good Bye! See you again.',
        text: `GoodBye ${name}. Would you like to tell why you choose to leave.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}