// 생성자
class Person2 {
	constructor(public name: string, public age?: number) {}
}
// 생성자의 매개변수에 public과 같은 접근 제한자를 붙이면
// 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다.
let jack2: Person2 = new Person2('Jack', 32);
console.log(jack2);
