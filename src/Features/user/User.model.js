export default class usermodel {
  constructor(email, password, name, id) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static signup(email, password) {
    const dt = User.find(
      (val) => val.email === email && val.password === password,
    );
    return dt;
  }
  static signin(userdata) {
    User.id = User.length;
    User.push(userdata);
    return User;
  }
}

const User = [
  {
    id: 1,
    name: "manish raghav",
    email: "manishraghav95964@gmail.com",
    password: "password",
  },
];
