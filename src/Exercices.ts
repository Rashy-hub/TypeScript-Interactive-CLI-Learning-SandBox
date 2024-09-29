// 1. Basic Types and Interfaces
// Create a `Person` interface with properties such as `name` (string), `age` (number), and an optional `email` (string).
// Implement a function that takes an array of `Person` objects and returns the names of all persons above a certain age.

interface Person {
  name: string;
  age: number;
  email?: string;
}

let myPersons: Person[] = [
  { name: 'robert', age: 19 },
  { name: 'timothee', age: 13 },
  { name: 'rachid', age: 35 },
  { name: 'zoé', age: 12 }
];
function getAllAdults(personArray: Person[]): Pick<Person, 'name'>[] {
  let arrayOfNames: Pick<Person, 'name'>[] = [];
  for (const person of personArray) {
    if (person.age >= 18) arrayOfNames.push({ name: person.name });
  }
  return arrayOfNames;
}

let arrayOfNames: Pick<Person, 'name'>[] = getAllAdults(myPersons);
console.log(arrayOfNames);

// 2. Classes and Inheritance
// Define a base class `Animal` with properties like `name` and methods like `makeSound()`.
// Create subclasses `Dog` and `Cat` that extend `Animal` and override the `makeSound()` method. Instantiate objects of each subclass and demonstrate polymorphism.

class Animal {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    //! child classes will inherit this by default if not override
    console.log(`${this.name} sounds like generic sound`);
  }
}
class Pet extends Animal {
  constructor(name: string) {
    super(name);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} sounds like Woof !`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} sounds like Miaouw !`);
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }
}

let myCat = new Cat('supercat');
let myDog = new Dog('superdog');
let myPet = new Pet('superpet');
let myBird = new Bird('superbird');

const animalCollection: Animal[] = [myCat, myDog, myPet, myBird]; //all child classes are also of type Animal
animalCollection.forEach((animal) => {
  animal.makeSound();
}); // nice is'nt it ? ;)

// 3. Access Modifiers and Readonly Properties
// Create a `BankAccount` class with `private` properties for `accountNumber` and `balance`, and a `readonly` property for `ownerName`. Implement methods to `deposit`, `withdraw`, and `getBalance`. Ensure that `accountNumber` cannot be modified outside the class.

// 4. Generics
// Implement a generic `Stack<T>` class that allows pushing and popping elements of any type. Demonstrate its usage with different data types (e.g., `number`, `string`, custom objects).

// 5. Enums and Union Types
// Define an `enum` for `Color` with values like `Red`, `Green`, and `Blue`. Create a function that accepts a parameter which can be either a `Color` or a `string` representing a color name. The function should return a standardized color name.

// 6. Type Aliases and Intersection Types
// Create type aliases for `Address` and `ContactInfo`. Then, define a new type `Employee` that combines both using intersection types. Implement a function that takes an `Employee` object and prints their full contact information.

// 7. Type Guards and Discriminated Unions
// Define a union type `Shape` that can be either a `Circle` or a `Rectangle`, each with their specific properties. Implement a function that calculates the area of a given `Shape` using type guards to determine the shape type.

// 8. Advanced Types: Mapped and Conditional Types
// Create a mapped type `PartialPerson` that makes all properties of the `Person` interface optional. Additionally, define a conditional type `IsString<T>` that evaluates to `true` if `T` is `string`, and `false` otherwise. Demonstrate their usage with examples.

// 9. Decorators (Experimental)
// Implement a class decorator `@Logger` that logs the creation of any class instance. Apply this decorator to a `Car` class and demonstrate that instantiation logs the appropriate messages.

// 10. Modules and Namespaces
// Organize your code into modules by creating separate files for `User`, `Product`, and `Order` classes. Use namespaces to group related functionalities and demonstrate importing and using these modules in a main application file.

// 11. Function Overloading
// Create an overloaded function `combine` that can handle the following cases:
// - Combining two strings into one.
// - Combining two numbers by adding them.
// - Combining two arrays into one.
// Implement appropriate type signatures and function logic to handle each case.

// 12. Interfaces with Function Types and Index Signatures
// Define an interface `Dictionary` that uses index signatures to map string keys to values of any type. Additionally, include a method signature for `addEntry(key: string, value: any): void`. Implement a class that adheres to this interface.

// 13. Tuples and Literal Types
// Create a tuple type `Response` that consists of a `status` code (number) and a `message` (string). Then, define a literal type `HTTPMethod` that can be either `'GET'`, `'POST'`, `'PUT'`, or `'DELETE'`. Implement a function that takes an `HTTPMethod` and returns a corresponding `Response` tuple.

// 14. Asynchronous Programming with Type Annotations
// Write an asynchronous function `fetchData` that retrieves data from a mock API. Use `async/await` with proper TypeScript type annotations for the returned data. Handle potential errors using try-catch blocks with typed error messages.

// 15. Type Inference and Type Assertions
// Implement a function `processInput` that takes a parameter of type `any`. Inside the function, use type inference to determine if the input is a `string` or a `number` and process it accordingly. Use type assertions where necessary to ensure type safety.

// 16. Readonly Arrays and Tuples
// Define a `ReadonlyArray` of numbers and attempt to modify it to observe TypeScript's compile-time errors. Additionally, create a readonly tuple `Point` representing `(x, y)` coordinates and demonstrate its immutability.

// 17. Namespaces vs. Modules
// Compare and contrast namespaces and modules by organizing related functions and classes using both approaches. Implement a scenario where both namespaces and modules are used, highlighting their differences and use cases.

// 18. Utility Types
// Utilize TypeScript's built-in utility types such as `Pick`, `Omit`, `Record`, and `Readonly` to manipulate the `Employee` type. Demonstrate how each utility type transforms the original type.

// 19. Recursive Types
// Define a recursive type `NestedObject` that can contain nested objects with string keys and values that are either strings or further `NestedObject`s. Implement a function that traverses a `NestedObject` and prints all key-value pairs.

// 20. Conditional Types with Infer
// Create a conditional type `ReturnType<T>` that extracts the return type of a given function type `T`. Use the `infer` keyword to achieve this. Test your conditional type with various function signatures to ensure correctness.

// 21. Mapped Types with Key Remapping
// Develop a mapped type `Nullable<T>` that takes a type `T` and makes all its properties nullable. Then, create another mapped type `RequiredProps<T>` that makes certain properties of `T` required based on a condition.

// 22. Decorator Factories and Parameter Decorators
// Implement a decorator factory `@Throttle(delay: number)` that limits the rate at which a method can be invoked. Apply this decorator to a method in a `Search` class to prevent it from being called more frequently than the specified delay.

// 23. Mixins and Multiple Inheritance
// Create mixin classes `CanFly` and `CanSwim` that provide methods `fly()` and `swim()`, respectively. Use these mixins to create a new class `FlyingFish` that inherits behaviors from both. Ensure proper TypeScript typing for the combined class.

// 24. Symbols and Iterators
// Define a class `Collection` that uses `Symbol.iterator` to make its instances iterable. Implement methods to add and remove items from the collection and demonstrate iterating over the collection using a `for...of` loop.

// 25. Using `this` Types and Fluent Interfaces
// Design a `Builder` class that constructs an object using a fluent interface. Ensure that each method returns `this` with the correct type using `this` types, allowing method chaining while maintaining type safety.

// 26. Advanced Type Narrowing with Exhaustiveness Checking
// Define a union type `Action` with multiple discriminated unions (e.g., `Add`, `Delete`, `Update`). Implement a reducer function that handles each action type. Use exhaustive type checking to ensure all action types are handled, resulting in compile-time errors if any case is missing.

// 27. Intersection Types with Classes and Interfaces
// Create two interfaces `Printable` and `Serializable`. Then, define a class `Document` that implements both interfaces using intersection types. Implement the required methods for printing and serializing the document.

// 28. Private Fields with ECMAScript Private Properties
// Utilize ECMAScript's private fields (using `#`) in a `Secret` class to store sensitive information. Ensure that TypeScript enforces access restrictions and demonstrate that private fields cannot be accessed or modified outside the class.

// 29. Utility Functions with Generic Constraints
// Write a generic function `merge<T, U>` that merges two objects. Use generic constraints to ensure that both parameters are objects. Demonstrate merging objects with overlapping and distinct properties.

// 30. Advanced Decorator Usage: Property and Method Decorators
// Implement a property decorator `@Format` that formats a string property (e.g., trimming whitespace) whenever it's set. Additionally, create a method decorator `@Log` that logs method calls with their arguments and return values. Apply these decorators to a `UserProfile` class and demonstrate their effects.
