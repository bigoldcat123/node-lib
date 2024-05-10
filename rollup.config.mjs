
import typescript from 'rollup-plugin-typescript2';
import {defineConfig} from 'rollup'
import { createFilter, dataToEsm } from '@rollup/pluginutils';

export default defineConfig({
	input:'src/index.ts',
	output: {
		format:'cjs',
		dir:'dist'
	},
	plugins:[typescript(),json()]
})

function json(options = {}) {
	const filter = createFilter(options.include, options.exclude);
	const indent = 'indent' in options ? options.indent : '\t';
  
	return {
	  name: 'json',
  
	  // eslint-disable-next-line no-shadow
	  transform(code, id) {
		// console.log(code);
		console.log(id);
		if (id.slice(-5) !== '.json' || !filter(id)) return null;
		console.log('------------------')
		try {
		  const parsed = JSON.parse(code);
		  console.log(dataToEsm(parsed, {
			preferConst: options.preferConst,
			compact: options.compact,
			namedExports: options.namedExports,
			includeArbitraryNames: options.includeArbitraryNames,
			indent
		  }),)
		  console.log('------------------')
		  return {
			code: dataToEsm(parsed, {
			  preferConst: options.preferConst,
			  compact: options.compact,
			  namedExports: options.namedExports,
			  includeArbitraryNames: options.includeArbitraryNames,
			  indent
			}),
			map: { mappings: '' }
		  };
		} catch (err) {
		  const message = 'Could not parse JSON file';
		  this.error({ message, id, cause: err });
		  return null;
		}
	  }
	};
  }