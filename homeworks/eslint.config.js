import globals from 'globals';
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: globals.node,
		},
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			'prettier/prettier': 'error',
			'no-unused-vars': 'warn',
			'no-var': 'error',
			'prefer-const': 'error',
		},
	},
];
