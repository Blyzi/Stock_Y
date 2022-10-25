export default class SweatsService {
  constructor(database) {
    this.database = database;
  }

  createSweat(req, res) {
    const { brand_name, model, ref, price, quantity, gender, size } = req.body;
    this.database("sweats")
      .insert({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
        size,
      })
      .returning("id_sweat")
      .then((data) => {
        res.json(data);
      });
  }

  getSweats(req, res) {
    this.database("sweats").then((data) => {
      res.json(data);
    });
  }

  getSweatById(req, res) {
    const id_sweat = parseInt(req.params.id);
    this.database("sweats")
      .where({ id_sweat })
      .then((data) => {
        res.json(data);
      });
  }

  updateSweat(req, res) {
    const id_sweat = parseInt(req.params.id);
    const { brand_name, model, ref, price, quantity, gender, size } = req.body;
    this.database("sweats")
      .where({ id_sweat })
      .update({
        brand_name,
        model,
        ref,
        price,
        quantity,
        gender,
        size,
      })
      .returning("id_sweat")
      .then((data) => {
        res.json(data);
      });
  }

  deleteSweat(req, res) {
    const id_sweat = parseInt(req.params.id);
    this.database("sweats")
      .where({ id_sweat })
      .del()
      .then((data) => {
        res.json(data);
      });
  }
}
