'use strict';

//Promise is a JavaScript object for asynchronous operation.
//State: pending -> fultilled or rejected
//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically. 주의할 점! 프로미스가 생성되면 resolve, reject 등의 executor는 바로 실행된다. 버튼 클릭 이벤트 등으로 실행하고자 할 때는 프로미스가 부적절함!
// 프로미스를 이용하는 이유 ! >> 네트워크에서 데이터를 받아오거나 파일을 읽는 등의 무거운 작동은 동기적으로 처리하면, 다음 단계로 실행되기까지 시간이 오래 걸림! 프로미스로 받아 비동기적으로 처리하는 것이 좋음

const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
  setTimeout(() => {
    //resolve('bomi');
    reject('no network')
  }, 2000);
})

//2. Consumer: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })


const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('chicken'), 1000);
  })

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000);
  })

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

getHen()
  .then(getEgg)
  .then(cook)
  .then(console.log)
