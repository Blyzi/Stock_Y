import bcryptjs from "bcryptjs";
import _ from "lodash";
export default class UsersService {
  constructor(database) {
    this.database = database;
  }

  async login(user) {
    const { email, password } = user;
    const userFound = await this.database("users").where({ email }).first();
    if (!userFound) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      userFound.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Password is incorrect");
    }
    return _.omit(userFound, "password");
  }

  async createUser(user) {
    const { email, phone } = user;

    if (await this.database("users").where({ email }).first()) {
      throw new Error("Email already used");
    }

    if (await this.database("users").where({ phone }).first()) {
      throw new Error("Phone already used");
    }

    user.password = await bcryptjs.hash(user.password, 10);
    return _.omit(
      await this.database("users").insert(user).returning("*"),
      "password"
    );
  }

  async getUsers() {
    return _.omit(await this.database("users").select("*"), "password");
  }

  async getUserById(id_user) {
    return _.omit(
      await this.database("users").select("*").where({ id_user }).first(),
      "password"
    );
  }

  async updateUser(id_user, user) {
    return _.omit(
      await this.database("users")
        .where({ id_user })
        .update(user)
        .returning("*"),
      "password"
    );
  }

  async deleteUser(id_user) {
    return _.omit(
      await this.database("users").where({ id_user }).del().returning("*"),
      "password"
    );
  }
}
