import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

const PAGES = fs.readdirSync('client/roots').map((file) => file.replace('.tsx', ''));

/**
 * @type {import('rollup').RollupOptions[]}
 */
const configs = PAGES.map((page) => ({
	watch: {
		clearScreen: false,
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
