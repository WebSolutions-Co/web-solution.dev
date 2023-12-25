import React from 'react';
import LottieAnimation from '../animations/LottieAnimation';

const BuildProjects = () => {
	return (
		<div className='w-full flex justify-between items-center'>
			<div>
				<h2>Build a Project</h2>
				<p>
					Bring your most innovative project ideas to life. Our team,
					full of expert developers, which understand how to build
					anything you desire.
				</p>
				<p>
					We make building your project Simple. Contact us, describe
					your amazing project idea and let us build the perfect plan.{' '}
				</p>
			</div>
			<div className='h-60 w-60'>
				<LottieAnimation animation='https://lottie.host/5057a21b-c16b-477d-93a9-6796ab6cad35/xmUTNDAKQv.json' />
			</div>
		</div>
	);
};

export default BuildProjects;
