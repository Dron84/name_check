"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameCheck = void 0;
const getName_1 = require("./getName");
const getNameCombination_1 = require("./getNameCombination");
const nameCheck = ({ player, squadList, playerNameField, playerShirtnumberField, squadNameField, squadShirtnumberField, squadListFieldReturn, }) => {
    if (squadList) {
        let price = '0';
        //@ts-ignore
        const playerName = (0, getName_1.getName)(player[playerNameField]);
        squadList.forEach((item) => {
            //@ts-ignore
            const itemName = (0, getName_1.getName)(item[squadNameField]);
            if (playerName === itemName) {
                //@ts-ignore
                price = item[squadListFieldReturn];
            }
        });
        if (price == '0') {
            //@ts-ignore
            const playerName = (0, getNameCombination_1.getNameCombination)(player[playerNameField]);
            squadList.forEach((item) => {
                //@ts-ignore
                const itemName = (0, getNameCombination_1.getNameCombination)(item[squadNameField]);
                if (playerName[0] === itemName[0] && playerName[1] === itemName[1]) {
                    //@ts-ignore
                    price = item[squadListFieldReturn];
                }
                if (playerName[1] === itemName[0] && playerName[0] === itemName[1]) {
                    //@ts-ignore
                    price = item[squadListFieldReturn];
                }
                if (playerName[0].slice(0, 1) === itemName[0].slice(0, 1) &&
                    playerName[1] === itemName[1]) {
                    //@ts-ignore
                    price = item[squadListFieldReturn];
                }
                if (playerName[1].slice(0, 1) === itemName[0].slice(0, 1) &&
                    playerName[0] === itemName[1]) {
                    //@ts-ignore
                    price = item[squadListFieldReturn];
                }
            });
        }
        // if (price == '0') {
        //   squadList.forEach((item) => {
        //     if (
        //       //@ts-ignore
        //       parseInt(player[playerShirtnumberField]) ==
        //       //@ts-ignore
        //       parseInt(item[squadShirtnumberField])
        //     ) {
        //       //@ts-ignore
        //       price = item[squadListFieldReturn]
        //     }
        //   })
        // }
        return price;
    }
};
exports.nameCheck = nameCheck;
exports.default = exports.nameCheck;
