import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import type { RollupOptions } from 'rollup';

export default {
	input: 'server/index.ts',
	output: {
		file: 'dist/server/index.js',
		format: 'esm',
		sourcemap: true,
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
	],
	external: ['react', 'react-dom', 'react-dom/client', 'hono'],
} as RollupOptions;
