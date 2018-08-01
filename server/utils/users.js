

//add user,
//remove user(id),
//getUser(id),
//getUSerList(room)


class Users{

  constructor(){
    this.users = [];
  }

  addUser(id,name,room) {
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }


  getUser(id) {
    return this.users.filter((user)=>user.id===id)[0];

  }

  getUserList (room){
    var users = this.users.filter((user)=>user.room ===room);
    var namesArray = users.map((user)=>user.name);

    return namesArray;
  }

  removeUser(id) {
    var user = this.getUser(id);

    if (user){
      this.users = this.users.filter((user)=>user.id !==id);
    }
    return user;
  }


}


  module.exports = {Users};
