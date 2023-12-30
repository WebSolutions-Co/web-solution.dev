import React, { ChangeEventHandler } from 'react';

export interface TextAreaProps {
	width?: string;
	value: string | undefined;
	placeholder?: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({
	width = 'w-full',
	value,
	placeholder,
	onChange,
}) => {
	return (
		<div className={`${width} group relative`}>
			<textarea
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`w-full h-44 border-0 pb-px outline-none border-b-2 bg-transparent placeholder:text-light-400 placeholder:dark:text-dark-200  flex items-end focus:border-green-500 ${
					value
						? 'border-green-500'
						: 'border-light-200 dark:border-dark-500 '
				}`}
			/>
		</div>
	);
};

export default TextArea;
