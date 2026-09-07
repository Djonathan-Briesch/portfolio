import eslint from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default [
	{
		ignores: ['dist', 'node_modules'],
	},

	eslint.configs.recommended,

	...tseslint.configs.recommended,

	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			...reactHooks.configs.recommended.rules,

			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
]
