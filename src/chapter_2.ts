import 'colors';

export const run = () => {
  console.log('Chapter 2 - Type Annotations & Basic Types'.bold);

  console.log(
    `TypeScript allows you to explicitly declare types using type annotations. This helps enforce type checking and makes your code more predictable.`
      .bgBlue
  );

  //!Primitive Types ar here
  let age: number = 25;
  let name: string = 'John';
  let isActive: boolean = true;
  let value: null = null;
  let x: undefined = undefined;
  let sym: symbol = Symbol('unique');
  let big: bigint = 12345678901234567890n; //available since ES2020

  const printedObject = {
    toPrint: `
    ${'let age: number = 25;'.yellow}
    ${"let name: string = 'John';".yellow}
    ${'let isActive: boolean = true;'.yellow}
    ${'let value: null = null;'.yellow}
    ${'let x: undefined = undefined;'.yellow}
    ${"let sym: symbol = Symbol('unique');".yellow}
    ${'let big: bigint = 12345678901234567890n;'.yellow}${
      '// This is a bigint, introduced in ES2020'.gray
    }
    `
  };

  console.log(printedObject.toPrint.bgWhite.black.bold);

  //Playground from here if you want :)
};
