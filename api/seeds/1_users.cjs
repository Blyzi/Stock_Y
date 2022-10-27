/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("stocks").del();
  await knex("users").del();
  await knex("users").insert([
    {
      firstname: "Nathan",
      lastname: "Carlier",
      email: "nathan.carlier@efrei.net",
      password: "nathan1234",
      phone: "+33 6 66 23 68 70",
    },
    {
      firstname: "Théo",
      lastname: "Lasnier",
      email: "theo.lasnier@efrei.net",
      password: "theo1234",
      phone: "+33 6 63 34 82 03",
    },
    {
      firstname: "Nicolas",
      lastname: "Violot",
      email: "nicolas.violot@efrei.net",
      password: "niczer1234",
      phone: "+33 6 95 84 45 98",
    },
  ]);
};
