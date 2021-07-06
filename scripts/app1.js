function User(user, password) {
    this.user = user;
    this.password = password;
}

const user1 = new User("omar, omar21");
const user2 = new User("julian, julian21");
const user3 = new User("gaston, gaston21");


const users = [user1, user2, user3];
localStorage.setItem("users", JSON.stringify(users));