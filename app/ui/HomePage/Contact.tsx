'use client';

import React from 'react';
import SubHeading from '../sub-heading';
import { PopupButton, PopupWidget } from 'react-calendly';

const Contact = () => {
	const rootEl = document.body;

	console.log(rootEl);
	return (
		<div className='w-full max-w-5xl flex flex-col  lg:justify-between lg:flex-row gap-12 xl:px-0'>
			<div>
				<SubHeading>
					Let's hop on a <span className='text-green-500'>Call</span>
				</SubHeading>
				<div>
					<p>Amazing project idea?</p>
					<p>Ideas </p>
				</div>
				<div>
					<p>Growing your team?</p>
				</div>
			</div>
			{rootEl && (
				<PopupButton
					url='https://calendly.com/jan-zunec/30-min-web-solutions'
					/*
					 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
					 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
					 */
					rootElement={rootEl}
					text='Click here to schedule!'
				/>
			)}
		</div>
	);
};

export default Contact;
