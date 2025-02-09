import type { Product } from '../data';

export const ProductCard: React.FC<Product> = ({ name, description, price, imageUrl, rating }) => {
	return (
		<div className='border rounded p-4 m-4 w-64 shadow-md'>
			<img src={imageUrl} alt={name} className='w-full h-48 object-cover mb-2' />
			<h3 className='text-lg font-semibold mb-1'>{name}</h3>
			<p className='text-sm text-gray-700 mb-2'>{description}</p>
			<p className='text-base font-medium mb-1'>Price: ${price.toFixed(2)}</p>
			<p className='text-sm text-yellow-500'>Rating: {rating}</p>
		</div>
	);
};
