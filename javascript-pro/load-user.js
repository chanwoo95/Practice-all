class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "chanwoo" && password === "1234") ||
          (id === "heo" && password === "0000")
        ) {
          resolve(id);
        } else {
          reject(new Error("error!"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "chanwoo") {
          resolve({ name: "chanwoo", role: "admin" });
        } else {
          reject(new Error("error!"));
        }
      });
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("아이디를 입력하시오");
const password = prompt("패스워드를 입력하시오");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`hi ${user.name} you have a ${user.role} role!`))
  .catch(console.log);
