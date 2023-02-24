"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class somarNUmeros {
    constructor() {
        this.largura1 = 10;
        this.largura2 = 150;
    }
    get somando() {
        return this.largura1 * this.largura2;
    }
}
console.log(new somarNUmeros().somando);
