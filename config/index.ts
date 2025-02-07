import { AppPage } from '../shared/constants';

export function getAppPages(obj = AppPage): AppPage[] {
	const values = Object.values(obj);

	return values.reduce((acc, value: any) => {
		if (typeof value === 'object') {
			return acc.concat(getAppPages(value) as any);
		}
		return acc.concat(value);
	}, []);
}
