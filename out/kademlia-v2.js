"use strict";
const events_1 = require("events");
const ALPHA = 3, B_LENGTH = 160, K = 20, T_EXPIRE = 86400, T_REFRESH = 3600, T_REPLICATE = 3600, T_REPUBLISH = 86400, PING = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]), STORE = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]), FIND_NODE = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]), FIND_VALUE = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]);
class KDM extends events_1.EventEmitter {
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KDM;
