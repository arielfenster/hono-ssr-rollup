import { getImagePath } from '../../../shared/utils';

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	category: string;
	rating: number;
	reviews: { user: string; comment: string }[];
}

export const products: Product[] = [
	{
		id: 1,
		name: 'Product A',
		description: 'A fantastic product that will change your life!',
		price: 29.99,
		imageUrl: getImagePath('bookshelf.svg'),
		category: 'Electronics',
		rating: 4.5,
		reviews: [
			{ user: 'John Doe', comment: 'Great product!' },
			{ user: 'Jane Smith', comment: 'I love it!' },
		],
	},
	{
		id: 2,
		name: 'Product B',
		description: "Another amazing product you won't want to miss.",
		price: 49.99,
		imageUrl: getImagePath('bookshelf.svg'),
		category: 'Clothing',
		rating: 3.2,
		reviews: [{ user: 'Peter Jones', comment: "It's okay." }],
	},
	{
		id: 3,
		name: 'Product C',
		description: 'This product is a must-have for everyone.',
		price: 99.99,
		imageUrl: getImagePath('bookshelf.svg'),
		category: 'Home Goods',
		rating: 4.8,
		reviews: [
			{ user: 'Alice Johnson', comment: 'Excellent quality!' },
			{ user: 'Bob Williams', comment: 'Highly recommended!' },
		],
	},
];

export const categories = ['All', 'Electronics', 'Clothing', 'Home Goods', 'Books'];
