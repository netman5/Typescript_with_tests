import {helloWorld, greetings, twoFer} from '../hello-world';

it('Says hello world', () => {
  expect(helloWorld()).toEqual('Hello world!');
});

it('It says hello to someone', () => {
  expect(greetings('Bright')).toBe('Hi Bright!');
})

describe('Two for one', () => {
  it('Say one for me and for you', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
  })

  it('a name given', () => {
    const expected = 'One for Alice, one for me.'
    expect(twoFer('Alice')).toEqual(expected)
  })

  it('another name given', () => {
    const expected = 'One for Bob, one for me.'
    expect(twoFer('Bob')).toEqual(expected)
  })
})