import React, { useState } from 'react';

interface SearchFormProps {
	onSearch: (query: string, genre: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
	const [query, setQuery] = useState('');
	const [genre, setGenre] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(query, genre);
	};

	return (
		<form onSubmit={handleSubmit} className='mb-6'>
			<div className='flex flex-col md:flex-row gap-4'>
				<input
					type='text'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder='Search by title, author, or keywords'
					className='flex-grow p-2 border border-gray-300 rounded-md'
					required
				/>
				<select
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
					className='p-2 border border-gray-300 rounded-md'
				>
					<option value=''>All Genres</option>
					<option value='fiction'>Fiction</option>
					<option value='non-fiction'>Non-Fiction</option>
					<option value='mystery'>Mystery</option>
					<option value='sci-fi'>Science Fiction</option>
					<option value='romance'>Romance</option>
				</select>
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
