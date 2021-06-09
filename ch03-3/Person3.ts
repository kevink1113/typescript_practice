// 생성자 (Person2.ts와 같은 의미)
class Person3 {
	name: string;
	age?: number;
	constructor(name: string, age?: number) {
		this.name = name;
		this.age = age;
	}
}
let jack3: Person3 = new Person3('Jack', 32);
console.log(jack3);
