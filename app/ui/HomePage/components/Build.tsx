import React from 'react';
import { FaSearch, FaLongArrowAltRight } from 'react-icons/fa';
import {
	MdOutlineDesignServices,
	MdOutlineDeveloperMode,
} from 'react-icons/md';

const Build = () => {
	return (
		<div className='w-full h-32 md:h-3/4 flex bg-dot-black/20 dark:bg-dot-white/20 items-center justify-center text-green-500 gap-4 lg:gap-8 text-5xl sm:text-6xl md:text-7xl [mask-image:radial-gradient(ellipse_at_center,white,white,transparent)]'>
			<FaSearch />
			<span className='text-light-600'>
				<FaLongArrowAltRight />
			</span>
			<MdOutlineDesignServices />
			<span className='text-light-600'>
				<FaLongArrowAltRight />
			</span>
			<MdOutlineDeveloperMode />
		</div>
	);
};

export default Build;
