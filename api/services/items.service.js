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
  async getItemById(id_item) {
    return this.database("items").select("*").where({ id_item }).first();
  }
  async updateItem(id_item, item) {
    return this.database("items")
      .where({ id_item })
      .update(item)
      .returning("*");
  }
  async deleteItem(id_item) {
    return this.database("items").where({ id_item }).del().returning("*");
  }
  async getAvailableItems() {
    return this.database("items")
      .innerJoin("stocks", "items.id_item", "stocks.id_item")
      .select("items.*", "stocks.price", "stocks.quantity")
      .distinctOn("items.id_item");
  }
}
