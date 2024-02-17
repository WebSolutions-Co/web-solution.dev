'use client';

import React from 'react';
import SubHeading from '../sub-heading';
import { PopupButton } from 'react-calendly';

const Contact = () => {
	return (
		<div
			id='contact'
			className='w-full max-w-5xl flex items-center lg:items-start flex-col gap-8 xl:px-0'
		>
			<SubHeading>
				Let&apos;s hop on a <span className='text-green-500'>Call</span>
			</SubHeading>
			<div className='flex items-center lg:items-start flex-col gap-2 md:w-1/2'>
				<p className='text-green-300 text-lg'>Amazing project idea?</p>
				<p className='text-center lg:text-left'>
					Don&apos;t let your ideas stay just that. Hit us up and we
					can validate your amazing project idea together and see
					where this takes us. Just maybe, your idea will start the
					next big tech company.
				</p>
			</div>
			<div className='flex items-center lg:items-start flex-col gap-2 md:w-1/2'>
				<p className='text-green-300 text-lg'>Growing your team?</p>
				<p className='text-center lg:text-left'>
					We will make sure your team grows with your company. No need
					to hassle to find the right people, we&apos;ve got you
					covered.
				</p>
			</div>
			{typeof window !== 'undefined' && (
				<PopupButton
					url='https://calendly.com/jan-zunec/30-min-web-solutions'
					/*
					 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
					 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
					 */
					rootElement={document.body}
					text='Schedule a 30min call with us!'
					className='bg-green-500 w-72 h-10 font-semibold rounded-md'
				/>
			)}
		</div>
	);
};

export default Contact;
