import * as fs from 'fs-extra'
import * as R from 'rambdax'

let splits = fs.readFileSync('./out/android.d.ts').toString().split('\n\n')
splits = splits.filter((v) => v.startsWith('declare'))
let groups = R.groupWith((a, b) => {
	return a.slice(0, a.indexOf('{\n\t\t')) == b.slice(0, b.indexOf('{\n\t\t'))
}, splits)

for (let group of groups) {
	let parts = [] as string[]
	let splits = group[0].split('\n')
	for (let i = 0; i < 2; i++) {
		let split = splits[i]
		parts.push(split.split(' ')[2])
	}
	fs.writeFileSync(`./out/${parts.join('.')}.d.ts`, group.join('\n\n'))
}
