Ts 接口可以重复声明 但是使用接口的时候需要实现接口的全部参数。
```ts
interface PersonInter {
    name: string;
    age: number;
}
interface PersonInter {
    speak():void;
}
class Person implements PersonInter {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.age=age;
        this.name=name;
    }
    speak():void {
        console.log("speak"+this.name);
    }

}
const sanye=new Person("sanye",20);
sanye.speak();
```
```
Record<keys,value>
```