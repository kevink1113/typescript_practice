// 추상 클래스와 클래스의 상속
abstract class AbstractPerson5 {
	abstract name: string;
	constructor(public age?: number) {}
}
class Person5 extends AbstractPerson5 {
	constructor(public name: string, age?: number) {
		super(age); // 부모 클래스의 생성자를 super 키워드로 호출
	}
}
// Person5 클래스는 AbstractPerson5 클래스를 상속해 Abstracterson5가 구현한 age를 얻고,
// AbstractPerson5를 상속받는 클래스가 구현해야 할 name 속성을 구현한다.
let jack5: Person5 = new Person5('Jack', 32);
console.log(jack5);
