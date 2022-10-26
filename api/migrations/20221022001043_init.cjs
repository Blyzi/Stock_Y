/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id_user").primary;
      table.string("firstname", 50).notNullable();
      table.string("lastname", 50).notNullable();
      table.string("email", 50).notNullable().unique();
      table.string("password").notNullable();
      table.string("phone", 50).unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("items", (table) => {
      table.increments("id_item").primary;
      table.string("model", 50).notNullable().unique();
      table.string("ref", 50).notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .table("items", function (table) {
      table
        .enu(
          "brand_name",
          [
            "Ground Jordan",
            "Abibas",
            "Itta",
            "Yard",
            "Manuel Vans",
            "Wlone",
            "Monsombre",
            "Kanye East",
            "Infime",
            "Ybox",
          ],
          { useNative: true, enumName: "brand" }
        )
        .notNullable();
    })
    .table("items", function (table) {
      table
        .enu("gender", ["M", "F"], {
          useNative: true,
          enumName: "gender",
        })
        .notNullable();
    })
    .table("items", function (table) {
      table
        .enu("type", ["shoes", "tshirt", "sweat", "accessories"], {
          useNative: true,
          enumName: "itemType",
        })
        .notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
