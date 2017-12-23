const add = (a, b) => a + b;
const multi = a => a * 5;
const divide = a => a / 2;
const sub = a => a - 6;

const compose = (...fns) => fns.reduce((a, b) => (...args) => b(a(...args)));
const pipe = (...fns) => compose(...fns.reverse());

const composed = compose(add, multi, divide, sub);
const piped = pipe(sub, divide, multi, add);

const result = composed(10, 2);
const result2 = piped(10, 2);
result;
result2;
