import { delay } from '../utils/utils.js';
import { intro, spinner } from "@clack/prompts";
import picocolors from "picocolors";

const s = spinner();

export const ApiBuilder = async (yargs) => {
  try {
    yargs.positional('project_name', {
      describe: 'It is the name of the project.',
      default: 'MyFalconProject',
    });
  } catch (error) {
    throw Error('Error in Api Builder' + error);
  }
};

export const ApiHandler = async (argv) => {
  try {
    s.start(
      `Falcon is creating your ${picocolors.bgCyan(`${argv.project_name}`)}`
    );
    s.message('Pouring the beer...');
    await delay(1000);
    s.stop('Enough beer for now.');
    intro(picocolors.bgCyanBright(`${argv.project_name}`));
  } catch (error) {
    throw Error('Error in Api Handler' + error);
  }
};
