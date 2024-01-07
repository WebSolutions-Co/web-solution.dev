import React from 'react';
import Input from '../../Inputs';
import useContactInfo from './hooks/useContactInfo';
import {
	setContactCompanyName,
	setContactEmail,
	setContactMessage,
	setContactName,
	setContactPhoneNumber,
	setContactSubject,
} from '@/app/state/reducers/contact';
import TextArea from '../../Inputs/TextArea';

const ContactForm = () => {
	const {
		name,
		companyName,
		email,
		phoneNumber,
		subject,
		message,
		onChange,
		onSubmit,
	} = useContactInfo();

	return (
		<div
			id='contact'
			className='w-full z-20 flex justify-center lg:justify-start'
		>
			<div className='w-full flex flex-col max-w-[1100px] px-4 md:px-8 xl:px-0 gap-12 items-center lg:items-start'>
				<div className='text-center lg:text-left gap-2 flex flex-col'>
					<h3 className='text-3xl font-semibold'>
						Drop us an <span className='text-green-500'>Email</span>
					</h3>
					<p>
						Got any problems that need solving? Shoot us an email
						and we&apos;ll assist you!
					</p>
				</div>
				<div className='w-full lg:w-full  gap-12 items-center flex flex-col'>
					<div className='flex flex-col lg:flex-row justify-between lg:gap-4 gap-12 items-center w-full'>
						<Input
							value={name}
							onChange={(e) => onChange(e, setContactName)}
							width='w-full lg:w-1/2'
							placeholder='Full Name'
						/>
						<Input
							value={companyName}
							onChange={(e) => onChange(e, setContactCompanyName)}
							width='w-full lg:w-1/2'
							placeholder='Company Name'
							optional
						/>
					</div>
					<div className='flex flex-col lg:flex-row justify-between lg:gap-4 gap-12 items-center w-full'>
						<Input
							value={email}
							onChange={(e) => onChange(e, setContactEmail)}
							width='w-full lg:w-1/2'
							placeholder='Email'
							type='email'
						/>
						<Input
							value={phoneNumber}
							onChange={(e) => onChange(e, setContactPhoneNumber)}
							width='w-full lg:w-1/2'
							placeholder='Phone Number'
							optional
						/>
					</div>
					<Input
						value={subject}
						onChange={(e) => onChange(e, setContactSubject)}
						placeholder='Subject'
					/>
					<TextArea
						value={message}
						placeholder='Message'
						onChange={(e) => onChange(e, setContactMessage)}
					/>
				</div>
				<button
					className='text-xl bg-green-500 text-white font-semibold rounded-md w-44 h-12'
					onClick={onSubmit}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default ContactForm;
