import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

export interface LottieAnimationProps {
	animation: string;
	loop?: boolean;
	animationRef?: React.Ref<Player>;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
	animation,
	loop = true,
	animationRef,
}) => {
	return (
		<Player
			ref={animationRef}
			loop={loop}
			keepLastFrame={!loop}
			autoplay
			src={animation}
			className='h-full w-full'
		/>
	);
};

export default LottieAnimation;
