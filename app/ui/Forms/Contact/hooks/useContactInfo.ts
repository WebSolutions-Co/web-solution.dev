import useNotification from '@/app/hooks/useNotification';
import { useAppDispatch } from '@/app/state/hooks';
import {
	clearContactForm,
	selectContact,
	setContactName,
} from '@/app/state/reducers/contact';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ChangeEvent, ChangeEventHandler, ReactEventHandler } from 'react';
import { useSelector } from 'react-redux';

const useContactInfo = () => {
	const dispatch = useAppDispatch();
	const { name, companyName, email, phoneNumber, subject, message } =
		useSelector(selectContact);

	const { setNotification } = useNotification();

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
				setNotification(
					'error',
					`response status: ${response.status}, ${response.statusText}`
				);
				throw new Error(`response status: ${response.status}`);
			}
			const responseData = await response.json();
			setNotification('success', responseData['message']);
			dispatch(clearContactForm());
		} catch (err) {
			console.error(err);
			setNotification('error', `Oops, something went wrong. ${err}`);
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
