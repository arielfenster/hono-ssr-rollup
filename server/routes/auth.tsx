import { Hono } from 'hono';
// import { zValidator } from '@hono/zod-validator';
// import { z } from 'zod';
import { renderServerPage } from '../render';
import { LoginPage } from '../../client/pages/auth/login';
import { getPageScript } from '../../shared/utils';
import { setCookie } from 'hono/cookie';
import { SignupPage } from '../../client/pages/signup/very/nested/folder';

const authRouter = new Hono()
	.get('/login', (c) => {
		const html = renderServerPage(<LoginPage />, {
			title: 'Login',
			pageScript: getPageScript('auth/login'),
		});

		return c.html(html);
	})
	.get('/signup', (c) => {
		const html = renderServerPage(<SignupPage />, {
			title: 'Sign Up',
			pageScript: getPageScript('signup/very/nested/folder'),
		});

		return c.html(html);
	})
	.post(
		'/login',
		// zValidator(
		// 	'json',
		// 	z.object({
		// 		email: z.string().email(),
		// 		password: z.string().min(6),
		// 	}),
		// ),
		async (c) => {
			const data = (await c.req.json()) as { email: string; password: string };
			if (data.email === 'ariel@test.com' && data.password === 'arielfenster') {
				setCookie(c, 'session', '1234', { httpOnly: true, sameSite: 'strict', secure: true });
				return c.redirect('/search');
			}

			return c.json({ error: 'Invalid email or password' }, { status: 400 });
		},
	);

export { authRouter };
