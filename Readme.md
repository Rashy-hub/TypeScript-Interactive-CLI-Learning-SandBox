# TypeScript Interactive CLI Learning Project

Welcome to the TypeScript Interactive CLI Learning Project! This initiative is designed to offer an engaging and practical approach to learning TypeScript through a command-line interface. By working on this project, I deepened my understanding of TypeScript and aimed to create an interactive experience for others to explore TypeScript concepts via hands-on examples and exercises. This project was born out of a desire for a more dynamic and engaging way to learn coding.

## Key Features:

- Interactive CLI: Seamlessly navigate through various chapters with a user-friendly command-line interface.
- Practical Examples: Each chapter provides actionable code examples to illustrate specific TypeScript concepts.
- Colorful Output: Enhance your learning experience with color-coded console messages for improved readability.

## How It Works:

- Interactive Menu: Upon running the application, you will see a menu allowing you to choose which chapter to explore.
- Dynamic Imports: Chapters are dynamically loaded based on your selection, optimizing resource usage.
- Error Handling: The application includes robust error handling to ensure a smooth experience, even if invalid options are chosen.

## Technical Overview

This project includes a series of interactive CLI-based chapters designed to teach TypeScript through practical examples. Each chapter is a standalone TypeScript file that demonstrates specific concepts or features.
The project leverages **[inquirer](https://www.npmjs.com/package/inquirer)** for user input and **[colors](https://www.npmjs.com/package/colors)** for colorful console output to enhance the learning experience.
In the following example you can see that you have to put your code inside the exported run function .

```typescript
export const run = () => {
  console.log('Chapter 2 - Type Annotations & Basic Types');
  //anything here will run once you select the correct chapter (as long the chapter is registred to tableofcontent.json)
};
```

## How to Clone and Run the Project

1. Clone the Repository:

```bash
git clone https://github.com/yourusername/typescript-interactive-cli.git
cd typescript-interactive-cli
```

2. Install dependencies and run the project trough the dev script :

```bash
npm install
npm run dev
```

3. Navigate Through Chapters: Follow the on-screen prompts to select and execute different chapters.

---

---

---

# Table of Contents: Mastering TypeScript

## 1. Introduction to TypeScript

- 1.1 What is TypeScript?
- 1.2 Differences Between JavaScript and TypeScript
- 1.3 Advantages of Using TypeScript
- 1.4 Setting Up a TypeScript Environment
  - 1.4.1 Installing TypeScript
  - 1.4.2 Configuring `tsconfig.json`
  - 1.4.3 Compilation Process
  - 1.4.4 Using TypeScript in Node.js Projects
  - 1.4.5 TypeScript in Web Projects (Frontend)

## 2. Type Annotations & Basic Types

- 2.1 Type Annotations Syntax
- 2.2 Primitive Types
  - 2.2.1 `string`
  - 2.2.2 `number`
  - 2.2.3 `boolean`
  - 2.2.4 `null` and `undefined`
  - 2.2.5 `void`
  - 2.2.6 `any`
  - 2.2.7 `unknown`
  - 2.2.8 `never`
- 2.3 Type Inference
- 2.4 Arrays and Tuples
  - 2.4.1 Typed Arrays
  - 2.4.2 Tuples

## 3. Object Types

- 3.1 Object Literals
- 3.2 Interfaces
  - 3.2.1 Declaring Interfaces
  - 3.2.2 Optional Properties
  - 3.2.3 Readonly Properties
  - 3.2.4 Interface Extension
  - 3.2.5 Index Signatures
- 3.3 Type Aliases
  - 3.3.1 Difference Between Interfaces and Type Aliases
- 3.4 Intersection Types
- 3.5 Union Types
- 3.6 Type Guards
- 3.7 Type Assertions (Casting)

## 4. Functions in TypeScript

- 4.1 Function Types
  - 4.1.1 Defining Types for Functions
  - 4.1.2 Typed Function Parameters and Return Types
  - 4.1.3 Optional and Default Parameters
- 4.2 Rest Parameters and Spread Syntax
- 4.3 Arrow Functions
- 4.4 `this` in TypeScript Functions
- 4.5 Function Overloads

## 5. Classes and Object-Oriented Programming (OOP)

- 5.1 Introduction to Classes
- 5.2 Class Members
  - 5.2.1 Fields (Properties)
  - 5.2.2 Methods
- 5.3 Constructors
- 5.4 Readonly and Optional Class Properties
- 5.5 Access Modifiers: `public`, `private`, `protected`
- 5.6 Inheritance and `extends`
- 5.7 Abstract Classes and Methods
- 5.8 `super()` and Calling Parent Methods
- 5.9 Static Methods and Properties
- 5.10 Class Decorators

## 6. Modules and Namespaces

- 6.1 Module System Overview
  - 6.1.1 ES Modules vs. CommonJS
  - 6.1.2 Importing and Exporting Modules
- 6.2 Namespaces
  - 6.2.1 Declaring Namespaces
  - 6.2.2 Merging Namespaces with Classes and Functions

## 7. Generics

- 7.1 Introduction to Generics
  - 7.1.1 Why Use Generics?
- 7.2 Generic Functions
- 7.3 Generic Classes
- 7.4 Generic Interfaces
- 7.5 Generic Constraints
  - 7.5.1 Extending Types in Generics
  - 7.5.2 Using `keyof` with Generics

## 8. Advanced Types

- 8.1 Mapped Types
- 8.2 Conditional Types
- 8.3 Template Literal Types
- 8.4 Utility Types
  - 8.4.1 `Partial`
  - 8.4.2 `Readonly`
  - 8.4.3 `Pick`
  - 8.4.4 `Omit`
  - 8.4.5 `Record`
  - 8.4.6 `Exclude` and `Extract`
  - 8.4.7 `NonNullable`
  - 8.4.8 `ReturnType` and `InstanceType`
- 8.5 Discriminated Unions

## 9. TypeScript with Asynchronous Code

- 9.1 Working with Promises
- 9.2 `async` and `await`
- 9.3 Typing Callbacks and Promises
- 9.4 Error Handling with Async Functions

## 10. Enums

- 10.1 Numeric Enums
- 10.2 String Enums
- 10.3 Heterogeneous Enums
- 10.4 Enums with Computed and Constant Members

## 11. Decorators

- 11.1 Introduction to Decorators
  - 11.1.1 What are Decorators?
  - 11.1.2 Enabling Experimental Decorators in TypeScript
- 11.2 Class Decorators
- 11.3 Method Decorators
- 11.4 Property Decorators
- 11.5 Parameter Decorators
- 11.6 Combining Multiple Decorators

## 12. TypeScript and Tooling

- 12.1 TypeScript Compiler Options
  - 12.1.1 Strict Mode (`strictNullChecks`, `strictFunctionTypes`)
  - 12.1.2 `noImplicitAny`, `noImplicitReturns`
  - 12.1.3 Incremental Compilation
- 12.2 Linting with ESLint and TypeScript
- 12.3 Bundling with Webpack and TypeScript
- 12.4 Type Checking in CI/CD Pipelines

## 13. TypeScript and Testing

- 13.1 Unit Testing TypeScript Code
  - 13.1.1 Writing Tests in TypeScript
  - 13.1.2 Testing Tools: Jest, Mocha, and Chai
- 13.2 Mocking and Stubbing in TypeScript
- 13.3 Testing with TypeScript and React (Using Enzyme and React Testing Library)

## 14. TypeScript in Frontend Development

- 14.1 Using TypeScript with React
  - 14.1.1 TypeScript and JSX/TSX
  - 14.1.2 Typing Props and State
  - 14.1.3 Hooks with TypeScript
- 14.2 Using TypeScript with Angular
  - 14.2.1 Angular and TypeScript Overview
  - 14.2.2 Services and Dependency Injection
  - 14.2.3 RxJS and TypeScript
- 14.3 Using TypeScript with Vue.js
  - 14.3.1 Vue 3 Composition API and TypeScript
  - 14.3.2 Class-Based Components in TypeScript

## 15. TypeScript in Backend Development

- 15.1 Using TypeScript with Node.js
  - 15.1.1 Setting Up TypeScript in Node.js
  - 15.1.2 Express.js with TypeScript
  - 15.1.3 TypeORM with TypeScript
- 15.2 GraphQL with TypeScript
- 15.3 Working with REST APIs in TypeScript
- 15.4 TypeScript with Serverless Functions

## 16. Advanced Patterns in TypeScript

- 16.1 Dependency Injection
- 16.2 Singleton Pattern
- 16.3 Repository Pattern
- 16.4 Decorator Pattern
- 16.5 Strategy Pattern
- 16.6 Factory Pattern

## 17. Migrating JavaScript to TypeScript

- 17.1 Step-by-Step Migration Guide
- 17.2 Converting JavaScript Files to TypeScript (`.js` to `.ts`)
- 17.3 Handling Third-Party JavaScript Libraries
- 17.4 Gradual TypeScript Adoption

## 18. Best Practices

- 18.1 Writing Clean and Maintainable TypeScript Code
- 18.2 Structuring Large TypeScript Projects
- 18.3 Using TypeScript with Monorepos
- 18.4 Performance Optimizations in TypeScript
- 18.5 Handling Legacy Codebases
- 18.6 Debugging TypeScript Applications

## 19. TypeScript Ecosystem

- 19.1 DefinitelyTyped and Typings for External Libraries
- 19.2 TypeScript Compiler API
- 19.3 TypeScript in the Open-Source Community
  - 19.3.1 Contributing to TypeScript
  - 19.3.2 Popular Libraries Written in TypeScript

## 20. Conclusion

- 20.1 Future of TypeScript
- 20.2 Staying Up-to-Date with TypeScript Releases
- 20.3 Resources for Further Learning
  - 20.3.1 Official Documentation
  - 20.3.2 Books and Courses
  - 20.3.3 TypeScript Community and Conferences
