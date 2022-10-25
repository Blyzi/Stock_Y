export default class ShoesService {
  constructor(database) {
    this.database = database;
  }

  createShoe(req, res) {
    const { brand_name, model, ref, price, quantity, gender, size } = req.body;
    this.database("shoes")
      .insert({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
        size,
      })
      .returning("id_shoe")
      .then((data) => {
        res.json(data);
      });
  }

  getShoes(req, res) {
    this.database("shoes").then((data) => {
      res.json(data);
    });
  }

  getShoeById(req, res) {
    const id_shoe = parseInt(req.params.id);
    this.database("shoes")
      .where({ id_shoe })
      .then((data) => {
        res.json(data);
      });
  }

  updateShoe(req, res) {
    const id_shoe = parseInt(req.params.id);
    const { brand_name, model, ref, price, quantity, gender, size } = req.body;
    this.database("shoes")
      .where({ id_shoe })
      .update({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
        size,
      })
      .returning("id_shoe")
      .then((data) => {
        res.json(data);
      });
  }

  deleteShoe(req, res) {
    const id_shoe = parseInt(req.params.id);
    this.database("shoes")
      .where({ id_shoe })
      .del()
      .then((data) => {
        res.json(data);
      });
  }
}
