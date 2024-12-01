import { delay } from '../utils/utils.js';
import { intro, outro, select, spinner } from "@clack/prompts";
import picocolors from "picocolors";
import { CreateProject } from '../generators/Create.generator.js';

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
    
    let selectDatabase = await select({
        message: "Please select database for your project!",
        options: [
            {
                value: "mysql",
                label: "MySQL"
            },
            {
                value: "mongodb",
                label: "MongoDB"
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

    s.start("Let me get that all mixed 😜 and pour you a greatest of all time cocktail 🍹...");
    let generatedProject = await CreateProject(argv.project_name, selectLanguage, selectDatabase, selectArchitecture, selectPrettier, selectESLint);
    if(generatedProject?.success){
        s.stop("Here is your Perfectly Crafted Cocktail 🥹");
        outro("We will call it "+picocolors.bgCyanBright(`${picocolors.blackBright(argv.project_name)}`)+" 😎")
    } else {
        s.stop("Sorry, we encountered some error.");
        outro(picocolors.bgCyanBright(`${picocolors.blackBright("Please try again.")}`));
    }
  } catch (error) {
    throw Error('Error in Create Handler' + error);
  }
};