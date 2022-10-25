export default class UsersService {
  constructor(database) {
    this.database = database;
  }

  createUser(req, res) {
    const { name_user, email_user, password_user, phone_user } = req.body;
    this.database("users")
      .insert({
        name_user,
        email_user,
        password_user,
        phone_user,
      })
      .returning("id_user")
      .then((data) => {
        res.json(data);
      });
  }

  getUsers(req, res) {
    this.database("users").then((data) => {
      res.json(data);
    });
  }

  getUserById(req, res) {
    const id_user = parseInt(req.params.id);
    this.database("users")
      .where({ id_user })
      .then((data) => {
        res.json(data);
      });
  }

  updateUser(req, res) {
    const id_user = parseInt(req.params.id);
    const { name_user, email_user, password_user, phone_user } = req.body;
    this.database("users")
      .where({ id_user })
      .update({
        name_user,
        email_user,
        password_user,
        phone_user,
      })
      .returning("id_user")
      .then((data) => {
        res.json(data);
      });
  }

  deleteUser(req, res) {
    const id_user = parseInt(req.params.id);
    this.database("users")
      .where({ id_user })
      .del()
      .then((data) => {
        res.json(data);
      });
  }
}
