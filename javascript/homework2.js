'user strict';

class UserStorage {
  delay(ms){
    return new Promise (resolve => setTimeout(resolve, ms));
  }

  async putyourId(id, pw){
    await this.delay(2000);
    if(id === 'bomi' && pw === 'army'){
      return id;
    } else {
      throw 'Not Found !'
    }
  }

  async getyourRole(user){
    await this.delay(2000);
    if(user === 'bomi'){
      return {name: 'bomi', role: 'admin'}
    } else {
      throw 'Not access !'
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const pw = prompt('Enter your PASSWORD');

async function loginRoute(userStorage, id, pw){
  const putID = await userStorage.putyourId(id, pw);
  return getROLE = userStorage.getyourRole(putID);
}

loginRoute(userStorage, id, pw)
.then(user => alert(`Welcome! your ID is ${user.name} your ROLE is ${user.role}`))
.catch(alert)
