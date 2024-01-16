(function() {
    // 创建抽象类就是为了方便别人继承的
    abstract class Animal {
        height:number
        constructor(height?:number) {
            this.height=(height===undefined?0:height)
        }
        sanyHello() {
            console.log('在跑1111');
        }
    }
    class Dog extends Animal{
        name:string;
        age:number;
        constructor(name?:string,age?:number) {
            super() // 调用父类的构造方法
            this.name=(name===undefined?'':name)
            this.age=(age===undefined?0:age)
        }
        sayHello() {
            console.log(`${this.name}`);
            console.log(`${this.name}加油`);
        }
    }
    class Cat extends Dog {
        video:string
        constructor(name?:string,age?:number,video?:string) {
            super()
            this.name=(name===undefined?'':name)
            this.age=(age===undefined?0:age)
            this.video=(video===undefined?'':video)
        }
        sayHello() {
            console.log(`${this.name}在跑${this.video}`);
        }
    }
})