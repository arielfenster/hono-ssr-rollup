import type { Book } from './types';
import { getImagePath } from '../../../shared/utils';

interface BookListProps {
	books: Book[];
}

export function BookList({ books }: BookListProps) {
	if (books.length === 0) {
		return (
			<p className='text-center text-gray-700 mt-4'>No books found. Try a different search.</p>
		);
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{books.map((book) => (
				<div key={book.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
					<img
						src={book.coverImageUrl}
						alt={book.title}
						className='w-full h-48 object-cover'
						onError={(e) => {
							e.currentTarget.onerror = null;
							e.currentTarget.src = getImagePath('bookshelf.svg');
						}}
					/>
					<div className='p-4'>
						<h2 className='text-xl font-semibold text-gray-800 mb-2'>{book.title}</h2>
						<p className='text-gray-600 mb-2'>by {book.author}</p>
						<p className='text-sm text-gray-500 mb-2'>{book.publishYear}</p>
					</div>
				</div>
			))}
		</div>
	);
}
