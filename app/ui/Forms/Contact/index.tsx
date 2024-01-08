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
import SubHeading from '../../sub-heading';

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
			<div className='w-full flex flex-col max-w-[1100px] md:px-8 xl:px-0 gap-12 items-center lg:items-start'>
				<div className='text-center lg:text-left gap-2 flex flex-col'>
					<SubHeading>
						Drop us an <span className='text-green-500'>Email</span>
					</SubHeading>
					<p className='text-lg'>
						Need help turning your amazing project idea into
						reality? Cannot find competitive developers to scale
						your team?
						<br />
						Shoot us an email and we&apos;ll assist you!
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
