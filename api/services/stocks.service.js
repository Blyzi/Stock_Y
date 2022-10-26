export default class StocksService {
  constructor(database) {
    this.database = database;
  }
  async createStock(stock) {
    return this.database("stocks").insert(stock).returning("*");
  }
  async getStocks() {
    return this.database("stocks").select("*");
  }
  async getStockById(id_stock) {
    return this.database("stocks").select("*").where({ id_stock }).first();
  }
  async updateStock(id_stock, stock) {
    return this.database("stocks")
      .where({ id_stock })
      .update(stock)
      .returning("*");
  }
  async deleteStock(id_stock) {
    return this.database("stocks").where({ id_stock }).del().returning("*");
  }
}
