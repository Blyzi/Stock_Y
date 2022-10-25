export default class TShirtsService {
  constructor(database) {
    this.database = database;
  }

  createTShirt(req, res) {
    const { brand_name, model, ref, price, quantity, gender, size } = req.body;
    this.database("tShirts")
      .insert({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
        size,
      })
      .returning("id_tShirt")
      .then((data) => {
        res.json(data);
      });
  }

  getTShirts(req, res) {
    this.database("tShirts").then((data) => {
      res.json(data);
    });
  }

  getTShirtById(req, res) {
    const id_tShirt = parseInt(req.params.id);
    this.database("tShirts")
      .where({ id_tShirt })
      .then((data) => {
        res.json(data);
      });
  }

  updateTShirt(req, res) {
    const id_tShirt = parseInt(req.params.id);
    const { brand_name, model, ref, price, quantity, gender, size } = req.body;
    this.database("tShirts")
      .where({ id_tShirt })
      .update({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
        size,
      })
      .returning("id_tShirt")
      .then((data) => {
        res.json(data);
      });
  }

  deleteTShirt(req, res) {
    const id_tShirt = parseInt(req.params.id);
    this.database("tShirts")
      .where({ id_tShirt })
      .del()
      .then((data) => {
        res.json(data);
      });
  }
}
