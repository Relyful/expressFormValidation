// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {
      0: {
        firstName: "Marko", 
        lastName: "dinky", 
        email: "dinky.marky@zoznam.sk", 
        age: 31, 
        bio: "Nieco o mne ale co neviem"
      }
    };
    this.id = 1;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  getUserLastName(lastName) {
    for (const userId in this.storage) {
      const user = this.storage[userId];         
      if (user.lastName === lastName) {
        return user;
      }
    }
    return 0;
  }

  getUserEmail(targetEmail) {
    for (const userId in this.storage) {
      const user = this.storage[userId];      
      console.log(`${user.email} a ${targetEmail}`);
      
      if (user.email === targetEmail) {
        return user;
      }
    }
    return 0;
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
