export default class ItemsService {
  constructor(database) {
    this.database = database;
  }

  createItem(req, res) {
    const { brand_name, model, ref, price, quantity, gender } = req.body;
    this.database("items")
      .insert({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
      })
      .returning("id_item")
      .then((data) => {
        res.json(data);
      });
  }

  getItems(req, res) {
    this.database("items").then((data) => {
      res.json(data);
    });
  }

  getItemById(req, res) {
    const id_item = parseInt(req.params.id);
    this.database("items")
      .where({ id_item })
      .then((data) => {
        res.json(data);
      });
  }

  updateItem(req, res) {
    const id_item = parseInt(req.params.id);
    const { brand_name, model, ref, price, quantity, gender } = req.body;
    this.database("items")
      .where({ id_item })
      .update({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
      })
      .returning("id_item")
      .then((data) => {
        res.json(data);
      });
  }

  deleteItem(req, res) {
    const id_item = parseInt(req.params.id);
    this.database("items")
      .where({ id_item })
      .del()
      .then((data) => {
        res.json(data);
      });
  }
}
