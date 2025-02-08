import type { Book } from './types';

const API_URL = 'https://openlibrary.org/search.json';

const COVER_ID_PLACEHOLDER = 'COVER_ID';
const COVER_IMAGE_API_URL = `https://covers.openlibrary.org/b/id/${COVER_ID_PLACEHOLDER}-L.jpg`;

type BookData = {
	key: string;
	title: string;
	author_name: string;
	cover_i: number;
	first_publish_year: number;
};
type ApiResponse = { docs: BookData[] };

export async function searchBooks(title: string): Promise<Book[]> {
	const searchParams = new URLSearchParams({ title: title.toLowerCase(), limit: '5' });

	try {
		const response = await fetch(`${API_URL}?${searchParams.toString()}`);
		if (!response.ok) {
			throw new Error('Failed to search books');
		}
		const data = (await response.json()) as ApiResponse;

		return data.docs.map(mapBookDataToBook);
	} catch (error) {
		console.error(error);
		return [];
	}
}

function mapBookDataToBook(data: BookData): Book {
	const coverImageUrl = data.cover_i
		? COVER_IMAGE_API_URL.replace(COVER_ID_PLACEHOLDER, data.cover_i.toString())
		: '';

	return {
		id: data.key,
		title: data.title,
		author: data.author_name,
		publishYear: data.first_publish_year,
		coverImageUrl,
	};
}
