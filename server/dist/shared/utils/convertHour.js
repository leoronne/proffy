"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ToMinutes(time) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinuets = hour * 60 + minutes;
    return timeInMinuets;
}
exports.default = ToMinutes;
