
import typescript from 'rollup-plugin-typescript2';
import path from 'node:path'
import {defineConfig} from 'rollup'
import fs from 'node:fs'
import json from '@rollup/plugin-json';
import { globSync } from 'glob';


export default defineConfig({
	input:'src/index.ts',
	output: {
		format:'cjs',
		dir:'dist',
		manualChunks: (id) => {
			console.log(id);
		}
	},
	plugins:[json(),typescript()
	]
})

// function json(options) {
//   if ( options === void 0 ) options = {};

//   var filter = createFilter(options.include, options.exclude);
//   var indent = 'indent' in options ? options.indent : '\t';

//   return {
//     name: 'json',

//     // eslint-disable-next-line no-shadow
//     transform: function transform(code, id) {
//       if (id.slice(-5) !== '.json' || !filter(id)) { return null; }

//       try {
//         var parsed = JSON.parse(code);
//         return {
//           code: dataToEsm(parsed, {
//             preferConst: options.preferConst,
//             compact: options.compact,
//             namedExports: options.namedExports,
//             includeArbitraryNames: options.includeArbitraryNames,
//             indent: indent
//           }),
//           map: { mappings: '' }
//         };
//       } catch (err) {
//         var message = 'Could not parse JSON file';
//         this.error({ message: message, id: id, cause: err });
//         return null;
//       }
//     }
//   };
// }

function tsjson () {
	return {
		transform: {
			order:'pre',
			handler:(code, id) => {
				
				console.log(path.dirname(id));
				const r = code.match(/ *import\s+(\w+)\s+from\s+['"]+([\w\./]+.json)['"]+[;]*/g)
				if(r){
					r.forEach(v => {
						const reg = / *import\s+(\w+)\s+from\s+['"]+([\w\./]+.json)['"]+[;]*/g
						const rr = reg.exec(v)
						const jsonFilePath = path.resolve(path.dirname(id),rr[2])
						const fvalue = fs.readFileSync(jsonFilePath)
						const rep = `const ${rr[1]} = ${fvalue.toString()}`
						code = code.replace(v,rep)
					})
				}
				const another = code.match(/ *import\s+{+ *(.+) *}+\s+from\s+['"]+([\w\./]+.json)['"]+[;]*/g);
				if(another) {
					another.forEach(v => {
						const pathReg = / *import\s+{+ *(.+) *}+\s+from\s+['"]+([\w\./]+.json)['"]+[;]*/g
						const reg =  /{+ *(.+) *}+/gm
						const rr = pathReg.exec(v)
						console.log(rr);
						const jsonFilePath = path.resolve(path.dirname(id),rr[2])
						const fvalue = fs.readFileSync(jsonFilePath)
						const jsonObj = JSON.parse(fvalue.toString())
						let req =''
						rr[1].split(',').forEach(v => {
							req += `const ${v.trim()} = '${jsonObj[v.trim()]}'\n`
						})
						console.log(req);
						const rep = `const {${rr[1]}} = ${fvalue.toString()}`
						code = code.replace(v,req)
					})
				}
				return {
					code: code
				}
			}
		}
	}
}