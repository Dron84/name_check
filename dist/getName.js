"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
const latinize_1 = __importDefault(require("latinize"));
const getName = (name) => {
    const nameReg = /(\w)\.\s(\w+)|(\w+)\s(\w+)|(\w)\s(\w+)|(\w+)/i;
    const isEmptyObject = (object) => object === null || object === undefined ? true : Object.entries(object).length === 0 ? true : false;
    name = (0, latinize_1.default)(name);
    if (!name)
        return;
    //@ts-ignore
    name = name !== null && name.trim().match(nameReg);
    if (!isEmptyObject(name[1]) && !isEmptyObject(name[2])) {
        return `${name[1]} ${name[2]}`;
    }
    else if (isEmptyObject(name[1]) &&
        isEmptyObject(name[2]) &&
        !isEmptyObject(name[3]) &&
        !isEmptyObject(name[4])) {
        const newName = name[3].slice(0, 1);
        return `${newName} ${name[4]}`;
    }
    else if (isEmptyObject(name[1]) &&
        isEmptyObject(name[2]) &&
        isEmptyObject(name[3]) &&
        isEmptyObject(name[4]) &&
        !isEmptyObject(name[5]) &&
        !isEmptyObject(name[6])) {
        return `${name[5]} ${name[6]}`;
    }
    else {
        return `${name[7]}`;
    }
};
exports.getName = getName;
