import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { fileURLToPath } from 'url';
import path from 'path';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = ['home', 'about'];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const configs = pages.map((page) => ({
	watch: {
		chokidar: {
			cwd: 'client/**',
		},
	},
	input: `client/roots/${page}.tsx`,
	output: {
		file: `static/js/${page}.js`,
		format: 'iife',
		sourcemap: true,
		name: page,
		globals: {
			react: 'React',
			'react-dom': 'ReactDOM',
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
	],
	external: ['react', 'react-dom'],
}));

export default configs;
