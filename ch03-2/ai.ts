let ai: {
	name: string;
	age: number;
	etc?: boolean;
} = { name: 'Jack', age: 32 };
// [익명 인터페이스(anonymous interface)]
// interface 키워드도 사용하지 않고 인터페이스의 이름도 없는 인터페이스

function printMe(me: { name: string; age: number; etc?: boolean }) {
	console.log(me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`);
}
// 함수에 사용된 익명 인터페이스의 예
printMe(ai);
