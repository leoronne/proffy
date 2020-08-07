"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return knex.raw(`DROP VIEW classes_vw;`);
}
exports.down = down;
