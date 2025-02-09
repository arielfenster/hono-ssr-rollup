import { useState } from 'react';
import { Navbar } from '../../components/navbar';
import { CategoryFilter } from './components/category-filter';
import { ProductCard } from './components/product-card';
import { type Product } from './data';

type Props = {
	products: Product[];
	categories: string[];
};

export function FullDataPage({ products, categories }: Props) {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredProducts =
		selectedCategory === 'All'
			? products
			: products.filter((product) => product.category === selectedCategory);

	return (
		<div className='container mx-auto p-4'>
			<Navbar />
			<h1 className='text-3xl font-bold mb-4'>Products</h1>
			<CategoryFilter
				categories={categories}
				selectedCategory={selectedCategory}
				onCategorySelect={setSelectedCategory}
			/>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
}
