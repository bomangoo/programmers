'use strict';

//Promise is a JavaScript object for asynchronous operation.
//State: pending -> fultilled or rejected
//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically.
//작성시 주의해야할 점.

const promise = new Promise((resolve, reject) => {
  console.log('doing something...');

})
