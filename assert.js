/**
node js 之 assert学习
*/
const assert = require('assert');

const obj1 = {
	a:{
		b:1
	}
}

const obj2 ={
	a:{
		b:2
	}
}

const obj3 = {
	a:{
		b:1
	}
}
const obj4 = Object.create(obj1)
console.log(assert.deepEqual(obj1,obj1)); //同一个对象进行deepEqual   测试通过
console.log(assert.deepEqual(obj1,obj2)); //两个不同对象进行deepEqual  会抛出assertionError错误
console.log(assert.deepEqual(obj1,obj3)); //两个相同对象进行deepEqual 测试通过，两个相同对象相等
console.log(assert.deepEqual(obj1,obj4)); //测试不通过，不会进行原型的对比，



//assert.deepStrictEqual
//1.原始值使用全等运算符(===)比较，Set的值与Map的键使用SameValueZero比较
//2.对象的原型也使用全等运算符比较
//3.对象的类型标签要求相同

console.log(assert.deepEqual({a:1},{a:'1'}));	// 1=='1' 测试通过
console.log(assert.deepStrictEqual({a:1},{a:'1'})) // 1 !=='1' ;测试不通过

const date = new Date();
const object = {};
const fakeDate ={};

Object.setPrototypeOf(fakeDate,Date.prototype);
console.log(assert.deepEqual(object,fakeDate));//测试通过，不进行原型的测试
console.log(assert.deepStrictEqual(object,fakeDate)); //测试不通过，因为原型不同
console.log(assert.deepEqual(date,fakeDate));//测试通过，不测试类型标签
console.log(assert.deepStrictEqual(date,fakeDate));//测试不通过，类型不同 抛出assertionError错误
