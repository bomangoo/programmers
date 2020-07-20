//Objects
// 1. Literals and Properties
//object는 key와 value의 집합체이다!!!
const name = 'bomi';
const age = 3;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
} //인자의 양이 많아지면 데이터 관리에 어려움 그래서 object를 생성한다!

const info = { name: 'bomi', age: 3 };
const info = { name: 'bomi', age: 3 };
print(info);
const info = { name: 'bomi', age: 3 };
const info = { name: 'bomi', age: 3 };

//object는 생성 이후에 추가도 가능하다
info.hasjob = true;
console.log(info.hasjob);
delete info.hasjob //삭제도 가능! 하지만 추가와 삭제는 이용하지 않는 편이 좋다.


// 2. Computed properties
// 보통 코딩 때는 .key 형태로 작성
// obj[key] 형태는 >>>>>>>특정 key값이 아닌, 런타임에서 key값이 결정되는 상황에서 쓰임.
console.log(info.name);
console.log(info['name']); //key는 반드시 string type으로 지정한다

info['hasjob'] = true;
console.log(info.hasjob); //삭제했던 key값을 다시 추가한다

function printValue(obj, key){
  console.log(obj.key); //undefined
  console.log(obj[key]); //bomi!!!!!!!!!
}
printValue(info, 'name');


// 3. property value shorthand

const person1 = { name: 'jimin', age: 10 };
const person2 = { name: 'hope', age: 20 };
const person3 = { name: 'jin', age: 30 };
const person4 = makePerson('taetae', 10);
console.log(person4); //taetae는 10쨜
function makePerson (name, age){
  return{
    name,
    age
    //name : name,   //생략 가능
    //age : age
  }
}

// 4. Constructor function
//class가 생기면서 object 생성 방법
const person5 = new Person('suga', 50);
function Person(name, age){
  this.name = name;
  this.age = age;
}


// 5. in operator : obj안에 key가 있는지 없는지 확인
console.log('name' in info);
console.log('age' in info);


// 6. for..in vs for..of
for (key in info){ //obj 안의 key값이 무엇이 있는지 보여준다.
  console.log(key);
}

/// 이전의 for문을 더욱 간단하게 만들어주는 for...of!
const array = [1, 2, 4, 6, 8]
for (value of array){
  console.log(value); //array의 값이 순차적으로 나온다
}


// 7. cloning!! 클로닝!!
const bts = { name: 'jimin', age: '95' }
const bts2 = bts;
bts2.name = 'taetae';
console.log(bts) //taetae 출력. obj ref는 다르지만 같은 값을 할당받았기 때문에, bts의 값이 수정되면 bts2의 값도 똑같이 적용된다.

///// 값을 따로 복제하는 방법
//옛날 방법
const bts3 = {};
for (key in bts){
  bts3[key] = bts[key];
}
console.log(bts3);

//요즘 방법!
//Object.assign(타겟, 복제할 소스);
const bts4 = {};
Object.assign(bts4, bts);
console.log(bts4);

//또는 이런 방법도 가능하다
const bts5 = Object.assign({}, bts);
console.log(bts4);

//소스가 다수일 경우
const army = { color: 'black' };
const army2 = { color: 'purple', name: 'army' };
const ours = Object.assign({}, army, army2);
console.log(ours.color) // 나중에 대입된 army2의 값인 purple이 나온다.
console.log(ours.name) // army
