import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import type { RollupOptions } from 'rollup';
import { STATIC_JS_PATH, STATIC_CSS_PATH } from './constants';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

import tailwindConfig from './tailwind.config';

const PAGES = fs.readdirSync('client/roots').map((file) => file.replace('.tsx', ''));

const configs: RollupOptions[] = PAGES.map((page) => ({
	watch: {
		chokidar: {
			cwd: 'client/**',
		},
	},
	input: `client/roots/${page}.tsx`,
	output: {
		file: `${STATIC_JS_PATH}/${page}.js`,
		format: 'iife',
		sourcemap: true,
		name: page,
		globals: {
			react: 'React',
			'react-dom': 'ReactDOM',
			'react-dom/client': 'ReactDOM',
		},
	},
	plugins: [
		replace({
			preventAssignment: true,
			values: {
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
			},
		}),
		resolve(),
		commonjs(),
		babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] }),
		typescript(),
		terser(),
	],
	external: ['react', 'react-dom', 'react-dom/client', /\.css$/],
}));

configs.push({
	input: 'client/index.css',
	output: {
		file: `${STATIC_CSS_PATH}/index.css`,
		format: 'es',
	},
	plugins: [
		postcss({
			extensions: ['.css'],
			plugins: [tailwindcss(tailwindConfig)],
			extract: true,
			minimize: true,
		}),
	],
});

export default configs;
