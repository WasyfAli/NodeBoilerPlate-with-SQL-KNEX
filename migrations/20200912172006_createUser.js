exports.up = async function (knex) {
  await knex.schema.createTable("user_table", (table) => {
    table.increments("_id").primary();
    table.string("firstname", 45);
    table.string("lastname", 45);
    table.bigint("mobile");
    table.string("email", 45);
    table.integer("created_by").defaultTo();
    table.integer("updated_by").defaultTo();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("user_table");
};
