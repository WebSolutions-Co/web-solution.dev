import { ContactFormData } from '@/app/types/contact';
import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export const POST = async (request: NextRequest) => {
	const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
	const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	const data = await request.json();

	// create transporter object
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		tls: {
			ciphers: 'SSLv3',
			rejectUnauthorized: false,
		},

		auth: {
			user: username,
			pass: password,
		},
	});

	try {
		const mail = await transporter.sendMail({
			from: username,
			to: myEmail,
			replyTo: data.email,
			subject: data.subject,
			html: `
              <p>${data.message.replaceAll('\n', '<br />')}</p>
              <hr />
              <p style="padding: 0; margin: 0;">${data.name}</p>
              ${
					data.companyName
						? `<p style="padding: 0; margin: 0;">${data.companyName}</p>`
						: ''
				}
              ${
					data.phoneNumber
						? `<p style="padding: 0; margin: 0;">${data.phoneNumber}</p>`
						: ''
				}
            `,
		});

		return NextResponse.json({ message: 'Success: email was sent' });
	} catch (error) {
		console.log(error);
		NextResponse.error();
	}
};
