/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      model: "Layup Low Championship Crimson Purple",
      ref: "DH7138-006",
      brand_name: "Itta",
      gender: "M",
      type: "shoes",
    },
    {
      model: "4 Retro Military Red",
      ref: "CW0898-400",
      brand_name: "Ground Jordan",
      gender: "M",
      type: "shoes",
    },
    {
      model: "Ground Weak 1 Low 07",
      ref: "CW2288-001",
      brand_name: "Itta",
      gender: "F",
      type: "shoes",
    },
    {
      model: "Layup Mid Fossile",
      ref: "DH6927-140",
      brand_name: "Itta",
      gender: "F",
      type: "shoes",
    },
  ]);
};
