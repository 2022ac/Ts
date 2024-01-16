// // 限制person对象的具体内容，使⽤【,】分隔，问号代表可选属性
// let person: { name: string, age?: number }
// // 限制car对象的具体内容，使⽤【;】分隔，必须有price和color属性，其他属性不去限制，有没有都⾏
// let car: { price: number; color: string;[k: string]: any }
// // 限制student对象的具体内容，使⽤【回⻋】分隔
// let student: {
//     id: string
//     grade: number
// }
// // 以下代码均⽆警告
// person = { name: '张三' }
// person = { name: '李四', age: 18 }
// car = { price: 100, color: '红⾊', name: 12 }
// student = { id: 'tetqw76te01', grade: 3 }


// function add(a:number):number {
//     return 10;
// }
