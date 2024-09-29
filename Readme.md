# TypeScript Interactive CLI Learning Project

Welcome to the TypeScript **Interactive CLI** Learning Project! This initiative is designed to offer an engaging and practical approach to learning TypeScript through a command-line interface. By working on this project, I deepened my understanding of TypeScript and aimed to create an interactive experience for others to explore TypeScript concepts via hands-on examples and exercises. This project was born out of a desire for a more dynamic and engaging way to learn coding.

🚧 **This project is still in its early stage of development!** 🚧

## Key Features:

- **Interactive CLI**: Seamlessly navigate through various chapters with a **user-friendly** command-line interface.
- **Practical Examples**: Each chapter provides actionable code examples to illustrate specific TypeScript concepts.
- **Colorful Output**: Enhance your learning experience with color-coded console messages for improved readability.

## How It Works:

- **Interactive Menu**: Upon running the application, you will see a menu allowing you to choose which chapter to explore.
- **Dynamic Imports**: Chapters are dynamically loaded based on your selection, optimizing resource usage.
- **Error Handling**: The application includes robust error handling to ensure a smooth experience, even if invalid options are chosen.

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
git clone https://github.com/Rashy-hub/typescript-interactive-cli.git
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

## 1. [Introduction to TypeScript](./src/chapter_1.ts)

- 1.1 Setting Up a TypeScript Environment
- 1.2 Configuring `tsconfig.json` & Compilation Process
- 1.3 Using TypeScript in Node.js Projects

## 2. [Type Annotations & Basic Types ](./src/chapter_2.ts)

- 2.1 Type Annotations Syntax
- 2.2 Primitive Types (`string`,`number`,`boolean`,`undefined`,`bigint`,`Symbol`,`null`)
- 2.3 Top-Level Types - Special Types (`void`, `any`, `unknown`, `never`)
- 2.3 Type Inference

## 3. [Arrays & Tuples](./src/chapter_3.ts)

- 3.1 Basic Arrays
- 3.2 Typed Arrays
- 3.3 Tuples

## 4. Object Types

## 5. Functions in TypeScript

## 6. Classes and Object-Oriented Programming (OOP)

## 7. Modules and Namespaces

## 8. Generics

## 9. Advanced Types

## 10. TypeScript with Asynchronous Code

## 11. Enums

## 12. Decorators

## 13. TypeScript and Tooling

## 14. TypeScript and Testing

## 15. TypeScript in Frontend Development

## 16. TypeScript in Backend Development

## 17. Advanced Patterns in TypeScript
