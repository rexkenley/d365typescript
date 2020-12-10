import fizzBuzz from "../src/fizzBuzz";

describe("fizzBuzz test suite", () => {
  test("fizzBuzz create 15 by default", () => {
    const sut = fizzBuzz();
    expect(sut.length).toBe(15);
  });

  test("fizzBuzz div by 3 is fizz", () => {
    const sut = fizzBuzz();
    expect(sut[2]).toBe("fizz");
    expect(sut[5]).toBe("fizz");
    expect(sut[8]).toBe("fizz");
    expect(sut[11]).toBe("fizz");
  });

  test("fizzBuzz div by 5 is buzz", () => {
    const sut = fizzBuzz();
    expect(sut[4]).toBe("buzz");
    expect(sut[9]).toBe("buzz");
  });

  test("fizzBuzz div by 15 is fizzBuzz", () => {
    const sut = fizzBuzz();
    expect(sut[14]).toBe("fizzBuzz");
  });

  test("fizzBuzz create 100", () => {
    const sut = fizzBuzz(100);
    expect(sut.length).toBe(100);
  });
});
