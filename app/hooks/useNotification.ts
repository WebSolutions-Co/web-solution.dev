import { useSelector } from 'react-redux';
import {
	NotificationStatusType,
	selectNotification,
	setNotificationMessage,
	setNotificationStatus,
} from '../state/reducers/notifications';
import { useAppDispatch } from '../state/hooks';

const useNotification = () => {
	const dispatch = useAppDispatch();
	const { status, message } = useSelector(selectNotification);

	const clearNotification = () => {
		dispatch(setNotificationStatus(null));
		dispatch(setNotificationMessage(null));
	};

	const setNotification = (
		newStatus: NotificationStatusType,
		newMessage: string
	) => {
		dispatch(setNotificationStatus(newStatus));
		dispatch(setNotificationMessage(newMessage));

		setTimeout(() => {
			clearNotification();
		}, 3000);
	};

	return {
		status,
		message,
		setNotification,
		clearNotification,
	};
};

export default useNotification;
