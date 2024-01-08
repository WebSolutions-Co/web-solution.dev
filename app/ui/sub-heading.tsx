import React, { ReactNode } from 'react';

export interface SubHeadingProps {
	children: ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
	return <h2 className='text-3xl sm:text-4xl font-bold'>{children}</h2>;
};

export default SubHeading;
