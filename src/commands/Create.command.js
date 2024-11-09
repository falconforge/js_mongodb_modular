import { delay } from '../utils/utils.js';
import { intro, select, spinner } from "@clack/prompts";
import picocolors from "picocolors";

const s = spinner();

export const CreateBuilder = async (yargs) => {
  try {
    yargs.positional('project_name', {
      describe: 'It is the name of the project.',
      default: 'MyFalconProject',
    });
  } catch (error) {
    throw Error('Error in Create Builder' + error);
  }
};

export const CreateHandler = async (argv) => {
  try {
    intro(picocolors.bgCyanBright(`${picocolors.blackBright(argv.project_name)}`))
    let selectLanguage = await select({
        message: "Please select your language!",
        options: [
            {
                value: "ts",
                label: "TypeScript"
            },
            {
                value: "js",
                label: "JavaScript"
            }
        ]
    });

    let selectArchitecture = await select({
        message: "Please select your code base architecture!",
        options: [
            {
                value: "modular",
                label: "Modular Architecture"
            },
            {
                value: "microservices",
                label: "Microservices"
            }
        ]
    }); 

    let selectDatabase = await select({
        message: "Please select database for your project!",
        options: [
            {
                value: "mysql",
                label: "MySQL"
            },
            {
                value: "mongo",
                label: "MongoDB"
            }
        ]
    });

    let selectPrettier = await select({
        message: "Should we include Prettier?",
        options: [
            {
                value: "true",
                label: "That's a great idea!"
            },
            {
                value: "false",
                label: "Naah! Leave it."
            }
        ]
    });

    let selectESLint = await select({
        message: "Should we include ES Linting?",
        options: [
            {
                value: "true",
                label: "We talking about Perfection! I am in."
            },
            {
                value: "false",
                label: "Sounds cool! But I will leave it."
            }
        ]
    });

    s.start("Let me get that all mixed 😜 and pour you a greatest of all time cocktail 🍹...")
    await delay(4000);
    s.stop("Here is your Perfectly Crafted Cocktail. We will call it "+picocolors.bgCyanBright(`${picocolors.blackBright(argv.project_name)}`)+" 😎")
  } catch (error) {
    throw Error('Error in Create Handler' + error);
  }
};
