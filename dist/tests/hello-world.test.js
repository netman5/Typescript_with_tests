"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../hello-world");
it('Says hello world', () => {
    expect((0, hello_world_1.helloWorld)()).toEqual('Hello world!');
});
it('It says hello to someone', () => {
    expect((0, hello_world_1.greetings)('Bright')).toBe('Hi Bright!');
});
describe('Two for one', () => {
    it('Say one for me and for you', () => {
        expect((0, hello_world_1.twoFer)()).toEqual('One for you, one for me.');
    });
    it('a name given', () => {
        const expected = 'One for Alice, one for me.';
        expect((0, hello_world_1.twoFer)('Alice')).toEqual(expected);
    });
    it('another name given', () => {
        const expected = 'One for Bob, one for me.';
        expect((0, hello_world_1.twoFer)('Bob')).toEqual(expected);
    });
});
//# sourceMappingURL=hello-world.test.js.map