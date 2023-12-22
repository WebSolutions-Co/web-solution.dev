import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

export interface LottieAnimationProps {
	animation: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animation }) => {
	return <Player autoplay loop src={animation} className='h-full w-full' />;
};

export default LottieAnimation;
