import React, { useState } from 'react';

interface SearchFormProps {
	onSearch: (title: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
	const [title, setTitle] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(title);
	};

	return (
		<form onSubmit={handleSubmit} className='mb-6'>
			<div className='flex flex-col md:flex-row gap-4'>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Search by title'
					className='flex-grow p-2 border border-gray-300 rounded-md'
					required
				/>
				<button
					type='submit'
					className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
				>
					Search
				</button>
			</div>
		</form>
	);
}
