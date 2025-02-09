interface CategoryFilterProps {
	categories: string[];
	selectedCategory: string;
	onCategorySelect: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categories,
	selectedCategory,
	onCategorySelect,
}) => {
	return (
		<div className='flex space-x-4 mb-4'>
			{' '}
			{/* Tailwind classes */}
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => onCategorySelect(category)}
					className={`px-4 py-2 rounded ${
						selectedCategory === category
							? 'bg-gray-200 text-gray-800 font-semibold'
							: 'bg-gray-100 text-gray-600'
					}`} // Tailwind classes (dynamic)
				>
					{category}
				</button>
			))}
		</div>
	);
};
