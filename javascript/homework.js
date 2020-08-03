//콜백 지옥 만들기
'use strict'

class UserStorage {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loginUser(id, password) {
        await this.delay(1000);
        if (id === 'bomi' && password === 'army') {
            return id;
        } else {
            throw 'not found';
        }
    }

    async getRoles(user) {
        await this.delay(1000);
        if (user === 'bomi') {
            return {name: 'bomi', role: 'admin'};
        } else {
            throw 'no access';
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function loginProcess(userStorage, id, password) {
    const loginUser = await userStorage.loginUser(id, password);
    return userStorage.getRoles(loginUser);
}

loginProcess(userStorage, id, password)
    .then(user => alert(`Hello ${user.name}, you hava a ${user.role} role`))
    .catch(alert);

// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(
//       user,
//       userWithRole => {
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// )
