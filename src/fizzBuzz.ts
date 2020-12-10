export default function fizzBuzz(count = 15): (string | number)[] {
  const value = [];

  for (let c = 1; c <= count; c += 1) {
    if (c % 15 === 0) value.push("fizzBuzz");
    else if (c % 5 === 0) value.push("buzz");
    else if (c % 3 === 0) value.push("fizz");
    else value.push(c);
  }

  return value;
}
