// 1. Class declarations
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name} : hello!`);
  }
}

const bomi = new Person('bomi', 20);
console.log(bomi.name);
console.log(bomi.age);

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('bomi', 'sung', -1);
console.log(user1.age); // -1이라고 지정했지만 getter, setter에 의해 0으로 리턴

// 3. Inheritance
class Shape{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
  draw(){
    super.draw(); //부모 요소로부터 상속받은 draw() 메소드를 이어받으면서 새로운 내용을 추가하기 위해 super를 사용
    console.log('▲');
  }
  getArea(){
    return (this.width * this.height) /2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();  // drawing blue color ! 출력
console.log(rectangle.getArea()); // 400
triangle = new Triangle(30, 30, 'red');
triangle.draw(); // drawing red color ! + ▲ 함께 출력
console.log(triangle.getArea()); // 30 * 30 / 2 => 450 출력


// 4. class checking
console.log(rectangle instanceof Triangle);  //false
console.log(rectangle instanceof Shape);  //true
console.log(triangle instanceof Object);  //true
//


//Quiz
function calculate(command, a, b){
  switch(command){
    case 'add':
      return a+b;
    case 'substract':
      return a-b;
    case 'divide':
      return a/b;
    case 'multiply':
      return a*b;
    case 'remainder':
      return a%b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculate('divide', 10, 2));
