import { Resend } from 'resend';

const API_KEY = 're_RR8eRYXm_52GbqhnYUTVAtYk6NrZXRwkA';
const resend = new Resend(API_KEY);

const FROM_EMAIL = 'onboarding@resend.dev';
// const TO_EMAIL = 'anthony@customerscoops.com';
const TO_EMAIL = 'marieltorres97@gmail.com';

async function sendEmail() {
    try {
        const response = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: 'Customer Scoops',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
        });

        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}

(async() => {
    await sendEmail();
})();
