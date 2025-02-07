import { zValidator } from '@hono/zod-validator';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { Hono } from 'hono';
import { setCookie } from 'hono/cookie';
import { z } from 'zod';
import { LoginPage } from '../../client/pages/auth/login';
import { SignupPage } from '../../client/pages/auth/signup';
import { getPageScript } from '../../shared/utils';
import { renderServerPage } from '../render';

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
			pageScript: getPageScript('auth/signup'),
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
	)
	.post(
		'/signup',
		zValidator(
			'form',
			z.object({
				firstName: z.string(),
				lastName: z.string(),
				email: z.string().email(),
				password: z.string().min(6),
				personalPicture: z.any(),
			}),
		),
		async (c) => {
			const body = c.req.valid('form');
			console.log({ body });
			console.log(body.email);

			const formData = await c.req.formData();
			const firstName = formData.get('firstName') as string;
			const lastName = formData.get('lastName') as string;
			const email = formData.get('email') as string;
			const password = formData.get('password') as string;
			const personalPicture = formData.get('personalPicture') as File;

			if (!existsSync('./uploads')) {
				await mkdir('./uploads');
			}

			const buffer = Buffer.from(await personalPicture.arrayBuffer());
			await writeFile(`./uploads/${personalPicture.name}`, buffer);

			console.log({ firstName, lastName, email, password, personalPicture });
			return c.json({ message: 'Signup successful' });
		},
	);

export { authRouter };
