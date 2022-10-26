export default class itemsService {
  constructor(database) {
    this.database = database;
  }
  async createItem(item) {
    return this.database("items").insert(item).returning("*");
  }
  async getItems() {
    return this.database("items").select("*");
  }
  async getItemById(id) {
    return this.database("items").select("*").where({ id }).first();
  }
  async updateItem(id, item) {
    return this.database("items").where({ id }).update(item).returning("*");
  }
  async deleteItem(id) {
    return this.database("items").where({ id }).del().returning("*");
  }
}
