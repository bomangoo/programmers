// 1. async
function fetchUser(){
  return new Promise((resolve, reject) => {
    resolve('bomi');
  })
}

const user = fetchUser();
user.then(console.log);
console.log(user); //promise 상태 : pending, resolve, reject


// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(1000);
  return '●';
}

async function getBanana(){
  await delay(1000);
  return '§';
}

async function getOrange(){
  await delay(500);
  return '○'
}

// function pickFruits(){
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   })
// }

async function pickFruits(){
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise applePromise
function pickAllFruits(){  //API: Promise.all() 병렬구조로 한꺼번에 부르기
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + ')
  )
}
pickAllFruits().then(console.log);

function pickOnlyOne (){  //API: Promise.race() 먼저 처리되는 함수 불러오기
  return Promise.race([getApple(), getOrange()]);
}
pickOnlyOne().then(console.log);
