/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      model: "6 Championship Crimson Purple",
      ref: "DH7138-006",
      brand_name: "Ground Jordan",
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
    {
      model: "11 Retro Tanking",
      ref: "SA7638-019",
      brand_name: "Ground Jordan",
      gender: "M",
      type: "shoes",
    },
    {
      model: "Ground Jordan Retro 13 Brave Blue",
      ref: "DJ5982-400",
      brand_name: "Ground Jordan",
      gender: "M",
      type: "shoes",
    },
    {
      model: "Juice Wrld x Wlone 999",
      ref: "SS2073-000",
      brand_name: "Wlone",
      gender: "F",
      type: "tShirt",
    },
    {
      model: "Ralph Steadman Icon",
      ref: "QR0283-750",
      brand_name: "Infime",
      gender: "M",
      type: "tShirt",
    },
    {
      model: "Fire Logo",
      ref: "FK93729-482",
      brand_name: "Infime",
      gender: "M",
      type: "tShirt",
    },
    {
      model: "Fire Logo",
      ref: "FK93729-482",
      brand_name: "Itta",
      gender: "M",
      type: "tShirt",
    },
  ]);
};
