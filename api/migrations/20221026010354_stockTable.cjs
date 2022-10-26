exports.up = function (knex) {
  return knex.schema
    .createTable("stocks", (table) => {
      table.increments("id_stock").primary;
      table.integer("quantity").notNullable;
      table.float("price").notNullable;
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.integer("id_item").notNullable;
      table.integer("seller").notNullable;
      table.integer("buyer").notNullable;
      table.foreign("id_item").references("id_item").inTable("items");
      table.foreign("seller").references("id_user").inTable("users");
      table.foreign("buyer").references("id_user").inTable("users");
    })
    .table("stocks", function (table) {
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
            "XXS",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "XXXL",
          ],
          { useNative: true, enumName: "shoeSize" }
        )
        .notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stocks");
};
