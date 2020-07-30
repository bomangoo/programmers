//콜백 지옥 탈출 promise 시작!

class UserStorage{
  loginUser(id, password){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'bomi' && password === 'army') ||
          (id === 'coder' && password === 'job')
        ){
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    })
  }
  getRoles(user){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user === 'bomi'){
          resolve({name: 'bomi', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log)
