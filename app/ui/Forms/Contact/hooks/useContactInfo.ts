import { useAppDispatch } from '@/app/state/hooks';
import { selectContact, setContactName } from '@/app/state/reducers/contact';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ChangeEvent, ChangeEventHandler, ReactEventHandler } from 'react';
import { useSelector } from 'react-redux';

const useContactInfo = () => {
	const dispatch = useAppDispatch();
	const { name, companyName, email, phoneNumber, subject, message } =
		useSelector(selectContact);

	const onChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		setter: ActionCreatorWithPayload<string | undefined>
	) => {
		dispatch(setter(e.target.value));
	};

	const onSubmit = async () => {
		try {
			const response = await fetch('/api/contact', {
				method: 'post',
				body: JSON.stringify({
					name,
					companyName,
					email,
					phoneNumber,
					subject,
					message,
				}),
			});

			if (!response.ok) {
				console.log('falling over');
				throw new Error(`response status: ${response.status}`);
			}
			const responseData = await response.json();
			console.log(responseData['message']);

			alert('Message successfully sent');
		} catch (err) {
			console.error(err);
			alert('Error, please try resubmitting the form');
		}
	};

	return {
		name,
		companyName,
		email,
		phoneNumber,
		subject,
		message,
		onChange,
		onSubmit,
	};
};

export default useContactInfo;
