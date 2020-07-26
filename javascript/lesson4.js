//JSON
// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

// 오버로딩(overloading) : 함수 이름은 동일하지만 파라미터에 따라 각각 나오는 결과값이 달라지는 경우

const hobi = {
  name: 'mang',
  color: 'purple',
  size: null,
  birthDate: new Date(),
  //symbol: Symbol('id') //자바스크립트 고유의 데이터나
  sing: function(){ //함수 형태는 json으로 불러와지지 않는다
    console.log(`${this.name} can sing !`);
  },
}

json = JSON.stringify(hobi);
console.log(json);

//key-value 값 반환
json = JSON.stringify(hobi, ['name','color']);
console.log(json);

//key 값에서 특정 value를 바꾸는 콜백함수 만들기
json = JSON.stringify(hobi, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'just dance' : value;
})
console.log(json);

// 2. JSON to Object ==> parse(json)
console.clear();
json = JSON.stringify(hobi);
const obj = JSON.parse(json);
console.log(obj);
hobi.sing();
//obj.jump();
// ==> 함수가 아닌 데이터만 json으로 전송되므로 obj에는 sing 함수가 없다

console.log(hobi.birthDate.getDate())
//console.log(obj.birthDate.getDate())
// ==> json으로부터 받은 obj의 birthDate(new Date())는 srting 형태로 할당받기 때문에, getDate 함수는 받을 수 없다
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value
})
console.log(obj2);
console.log(obj2.birthDate.getDate());
