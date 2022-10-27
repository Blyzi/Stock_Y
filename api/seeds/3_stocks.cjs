/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("stocks").del();
  await knex("stocks").insert([
    {
      quantity: 8,
      price: 160.0,
      id_item: 1,
      seller: 1,
      size: "10",
    },
    {
      quantity: 3,
      price: 132.0,
      id_item: 3,
      seller: 3,
      size: "7",
    },
    {
      quantity: 1,
      price: 89.0,
      id_item: 7,
      seller: 2,
      size: "S",
    },
    {
      quantity: 4,
      price: 79.0,
      id_item: 7,
      seller: 1,
      size: "M",
    },
  ]);
};
