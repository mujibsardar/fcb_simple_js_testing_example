const { capitalize } = require('./capitalize');

test('for the input: letter', () => {
  expect(capitalize("letter")).toBe("Letter");
});

test('for the input: a', () => {
  expect(capitalize("a")).toBe("A");
});

test('for the input: olleH', () => {
  expect(capitalize("olleH")).toBe("OlleH");
});

test('for the input: hello world', () => {
  expect(capitalize("olleH")).toBe("Hello world");
});

test('for the input (leading space):  hi', () => {
  expect(capitalize(" hi")).toBe("Hi");
});

test('for the input (number): 5', () => {
  expect(capitalize(5)).toBe("5");
});

test('for the input: #hi', () => {
  expect(capitalize("#hi")).toBe("Hi");
});

test('for the input: []', () => {
  expect(capitalize([])).toBe("Invalid input");
});

test('for the input: {}', () => {
  expect(capitalize({})).toBe("Invalid input");
});

test('for the input (float): 4.5', () => {
  expect(capitalize(4.5)).toBe("4.5");
});

test('for the input (number): -5', () => {
  expect(capitalize(-5)).toBe("-5");
});

test('for the input: Hi', () => {
  expect(capitalize("Hi")).toBe("Hi");
});

test('for the input (string): 4string', () => {
  expect(capitalize("4string")).toBe("String");
});

test('for the input: ', () => {
  expect(capitalize()).toBe("Invalid input");
});
