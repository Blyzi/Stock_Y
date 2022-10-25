/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id_user").primary;
      table.string("name_user", 50).notNullable.unique;
      table.string("email_user", 50).notNullable.unique;
      table.string("password_user", 50).notNullable.unique;
      table.string("phone_user", 50);
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("items", (table) => {
      table.increments("id_item").primary;
      table.string("model", 50).notNullable.unique;
      table.string("ref", 50).notNullable.unique;
      table.float("price").notNullable.unique;
      table.integer("quantity").notNullable.unique;
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
    .createTable("shoes", (table) => {
      table.increments("id_shoe").primary;
      table.inherits("items");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("sweats", (table) => {
      table.increments("id_sweat").primary;
      table.inherits("items");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("tShirts", (table) => {
      table.increments("id_tShirt").primary;
      table.inherits("items");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .table("shoes", function (table) {
      table
        .enu(
          "size",
          [
            "3.5",
            "4",
            "4.5",
            "5",
            "5.5",
            "6",
            "6.5",
            "7",
            "7.5",
            "8",
            "8.5",
            "9",
            "9.5",
            "10",
            "10.5",
            "11",
            "11.5",
            "12",
            "12.5",
            "13",
            "13.5",
            "14",
            "14.5",
            "15",
            "15.5",
            "16",
            "16.5",
            "17",
            " 17.5",
            "18",
          ],
          { useNative: true, enumName: "shoeSize" }
        )
        .notNullable();
    })
    .table("sweats", function (table) {
      table
        .enu("size", ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], {
          useNative: true,
          enumName: "clotheSize",
        })
        .notNullable();
    })
    .table("tShirts", function (table) {
      table
        .enu("size", null, {
          useNative: true,
          existingType: true,
          enumName: "clotheSize",
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
