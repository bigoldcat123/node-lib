
import typescript from 'rollup-plugin-typescript2';
import {defineConfig} from 'rollup'

export default defineConfig({
	input:'src/index.ts',
	output: {
		format:'cjs',
		dir:'dist'
	},
	plugins:[typescript()]
})