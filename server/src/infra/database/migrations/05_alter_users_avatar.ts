import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.raw(`ALTER TABLE users ALTER COLUMN avatar DROP NOT NULL;`);
}

export async function down(knex: Knex) {
  return knex.raw(`ALTER TABLE users ALTER COLUMN avatar SET NOT NULL;`);
}
