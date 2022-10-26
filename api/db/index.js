import knexfile from "../knexfile.cjs";
import knex from "knex";

export const database = knex(knexfile.development);
