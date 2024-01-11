import React, { ChangeEventHandler } from 'react';

export interface InputProps {
	width?: string;
	value: string | undefined;
	type?: string;
	placeholder?: string;
	optional?: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
	width = 'w-full',
	value,
	type,
	placeholder,
	optional,
	onChange,
}) => {
	return (
		<div className={`${width} group relative`}>
			<input
				type={type}
				value={value || ''}
				onChange={onChange}
				className={`w-full border-0 pb-px outline-none border-b-2 bg-transparent flex items-end focus:border-green-500 ${
					value
						? 'border-green-500'
						: 'border-light-400 dark:border-dark-500 '
				}`}
			/>
			<p
				className={`absolute text-light-500 dark:text-dark-200 bottom-0 left-0 ${
					value && 'bottom-7 text-sm'
				} group-focus-within:bottom-7 group-focus-within:text-sm transition-all pointer-events-none`}
			>
				{placeholder}
				{!optional && '*'}
			</p>
		</div>
	);
};

export default Input;
