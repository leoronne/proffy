"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.raw(`ALTER TABLE users ALTER COLUMN avatar DROP NOT NULL;`);
}
exports.up = up;
async function down(knex) {
    return knex.raw(`ALTER TABLE users ALTER COLUMN avatar SET NOT NULL;`);
}
exports.down = down;
