var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(height) {
        this.height = (height === undefined ? 0 : height);
    }
    Animal.prototype.sanyHello = function () {
        console.log('在跑1111');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, height) {
        var _this = _super.call(this, height) // 调用父类的构造方法
         || this;
        _this.name = (name === undefined ? '' : name);
        _this.age = (age === undefined ? 0 : age);
        return _this;
    }
    Dog.prototype.sayHello = function () {
        console.log("".concat(this.name));
        console.log("".concat(this.name, "\u52A0\u6CB9"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, video) {
        var _this = _super.call(this) || this;
        _this.name = (name === undefined ? '' : name);
        _this.age = (age === undefined ? 0 : age);
        _this.video = (video === undefined ? '' : video);
        return _this;
    }
    Cat.prototype.sayHello = function () {
        console.log("".concat(this.name, "\u5728\u8DD1").concat(this.video));
    };
    return Cat;
}(Dog));
var dog = new Dog('lalala', 21);
console.log(dog.sayHello());
var cat = new Cat('sanye', 18, '喵喵');
console.log(cat.sayHello());
