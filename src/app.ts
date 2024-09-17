console.log('app.ts entry point - TypeScript RoadMap SandBox');
const fs = require('fs');
const path = require('path');
import 'colors';
import inquirer from 'inquirer';

const loadManifest = (): Array<{ name: string; value: string }> => {
  const filePath = path.join(__dirname, '../tableofcontent.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};

const loadChapter = async (chapter: string) => {
  try {
    const chapterModule = await import(`./${chapter}`);
    chapterModule.run(); // Every chapter.ts should have a run function !
  } catch (error) {
    console.error(
      `The chapter ${chapter} could not be loaded. 🚀 cause: ${error}`.bgRed
        .white
    );
  }
};

const selectAndRunChapter = async () => {
  const chapters = loadManifest(); // Charger le manifeste
  const response = await inquirer.prompt([
    {
      type: 'list',
      name: 'chapter',
      message: 'Which chapter would you like to execute?🚀',
      choices: chapters
    }
  ]);

  const { chapter } = response;
  await loadChapter(chapter);
};

// main loop here
const runApp = async () => {
  let continueRunning = true;

  while (continueRunning) {
    await selectAndRunChapter();

    const { continueChoice } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'continueChoice',
        message: 'Would you like to run another chapter ?🚀',
        default: false
      }
    ]);

    continueRunning = continueChoice;
  }

  console.log('Thanks for using my app :) = press CTRL + C to quit '.bgYellow);
};

runApp();
