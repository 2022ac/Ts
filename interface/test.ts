// (function() {
    
// })
// 描述一个对象的类型
type MyType={
    name:string
    age:number
}
// 接口定义一个类的结构
interface MyInterface {
    name:string
    age:number
    sayHello():void
}
interface test2 {
    height:number
    sayHeight():void
}
const obj:MyInterface={
    name:'css',
    age:111,
    sayHello() {
        console.log('sanyejiejie');
    }
}
class Cat implements MyInterface,test2 {
    name:string
    height:number
    age:number
    sayHello(): void {
        console.log('hello');
        
    }
    sayHeight(): void {
        console.log('height');
    }
    constructor(name?:string,height?:number,age?:number) {
        this.name=(name===undefined?'':name)
        this.height=(height===undefined?0:height)
        this.age=(age===undefined?0:age)
    }
}
let demo=new Cat('sanye',180,18)
console.log(demo.sayHeight())
console.log(demo.sayHello())