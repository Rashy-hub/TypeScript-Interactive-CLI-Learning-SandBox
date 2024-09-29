import 'colors';

export const run = () => {
  console.log('chapter 1 -  Introduction to TypeScript'.bold);
  //⚠ npm install -g typescript => install globally typescript
  //⚠ tsc --init => initialize a typescript project with tsconfig.json

  const howToInstall =
    '⚠ npm install -g typescript => install globally typescript';
  const howToInit =
    '⚠ tsc --init => initialize a typescript project with tsconfig.json';

  console.log(howToInstall);
  console.log(howToInit);

  //Here's an example of basic typescript config : ⚠ warning must be converted to json

  const basicTypeScriptConfig = {
    compilerOptions: {
      target: 'ES6', // Specifies ECMAScript target version
      module: 'commonjs', // Specify module code generation
      strict: true, // Enable all strict type-checking options
      esModuleInterop: true, // Import syntax compatibility
      outDir: './dist', // Output directory for compiled files
      rootDir: './src' // Input source directory for TypeScript files
    },
    include: ['src/**/*'], // Files to be included
    exclude: ['node_modules'] // Files to be excluded
  };
  console.log(
    "Here's an example of basic typescript config : ⚠ warning must be converted to json"
      .red
  );
  console.log(JSON.stringify(basicTypeScriptConfig, null, 2).green);
};
