import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.raw(`CREATE VIEW classes_vw AS
  SELECT c.user_id
    , u.name
    , u.email
    , u.whatsapp
    , u.avatar
    , u.bio
    , c.id class_id
    , c.subject
    , c.cost
  FROM classes c
  LEFT OUTER JOIN users u ON u.id = c.user_id;`);
}

export async function down(knex: Knex) {
  return knex.raw(`DROP VIEW classes_vw;`);
}
