//
console.log(typeof test)
let test = "hello"
// if (true) {
// 	console.log(typeof test)
// 	let test = "test"
// }

//
// var focus = []
//
// for (const i = 0; i < 7; i++) {
// 	focus.push(function() {
// 		console.log(i)
// 	})
// }
//
// focus.forEach((func) => {
// 	func()
// })

//
let obj = {
	name: 'wx',
	age: 22,
	sex: 'm',
}

for (const attr of Object.keys(obj)) {
	console.log(attr)
}
