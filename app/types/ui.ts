import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';

export type FeedbackCardsItemType = {
	id: number;
	quote: string;
	name: string;
	title: string;
	image?: string | StaticImport;
};

export type MovingIconType = {
	label: string;
	url: string;
	icon: ReactNode;
	color?: string;
};
