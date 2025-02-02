import { useState } from 'react';
import { RpcQueryProvider } from '../../providers/rpc-query-provider';
import { Navbar } from '../../components/navbar';
import { searchBooks } from './api';
import { BookList } from './book-list';
import { SearchForm } from './search-form';
import type { Book } from './types';

export function SearchPage() {
	const [books, setBooks] = useState<Book[]>([]);
	const [loading, setLoading] = useState(false);

	const handleSearch = async (title: string) => {
		setLoading(true);
		try {
			const results = await searchBooks(title);
			setBooks(results);
		} catch (error) {
			console.error('Error searching books:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<RpcQueryProvider>
			<div className='min-h-screen bg-gray-100'>
				<Navbar />
				<div className='container mx-auto px-4 py-8'>
					<h1 className='text-3xl font-bold text-blue-600 mb-6'>Search Books!</h1>
					<SearchForm onSearch={handleSearch} />
					{loading ? (
						<p className='text-center text-gray-700 mt-4'>Loading...</p>
					) : (
						<BookList books={books} />
					)}
				</div>
			</div>
		</RpcQueryProvider>
	);
}
