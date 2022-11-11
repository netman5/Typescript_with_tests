"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let isPublished = true;
let numbers = [1, 2, 3];
let user = [1, 'James'];
;
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.3;
    return income * 2;
}
calculateTax(100000, 2022);
let employee = {
    id: 1,
    name: "Debbies",
    age: 37,
    retire: (date) => {
        console.log(date);
    }
};
let clone = {
    id: 1,
    name: 'Taylor',
    age: 49
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
kgToLbs(20);
kgToLbs('20kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let qts = 100;
let newQts = 50;
let kg = 'cm';
let size = 10 + kg;
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase);
    else {
        console.log("Hola!");
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [];
customers === null || customers === void 0 ? void 0 : customers[0];
let log = null;
log === null || log === void 0 ? void 0 : log('2');
//# sourceMappingURL=index.js.map