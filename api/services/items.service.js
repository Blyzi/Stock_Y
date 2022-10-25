export default class ItemsService {
  constructor(database) {
    this.database = database;
  }

  createUser(req, res) {
    const { name_brand, model, ref, price, quantity } = req.body;
    this.database("items")
      .insert({
        name_brand,
        model,
        ref,
        price,
        quantity,
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

  getUserById(req, res) {
    const id_item = parseInt(req.params.id);
    this.database("items")
      .where({ id_item })
      .then((data) => {
        res.json(data);
      });
  }

  updateUser(req, res) {
    const id_item = parseInt(req.params.id);
    const { name_brand, model, ref, price, quantity } = req.body;
    this.database("items")
      .where({ id_item })
      .update({
        name_brand,
        model,
        ref,
        price,
        quantity,
      })
      .returning("id_item")
      .then((data) => {
        res.json(data);
      });
  }

  deleteUser(req, res) {
    const id_item = parseInt(req.params.id);
    this.database("items")
      .where({ id_item })
      .del()
      .then((data) => {
        res.json(data);
      });
  }
}
