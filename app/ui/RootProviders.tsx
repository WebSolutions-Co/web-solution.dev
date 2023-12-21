'use client';

import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state';

interface RootProvidersProps {
	children: ReactNode;
}

const RootProviders: React.FC<RootProvidersProps> = ({ children }) => {
	return (
		<>
			<ReduxProvider store={store}>{children}</ReduxProvider>
		</>
	);
};

export default RootProviders;
