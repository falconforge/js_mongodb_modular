import { intro, outro, spinner, text } from '@clack/prompts';
import picocolors from 'picocolors';
import open from 'open';
import path from 'path';
import fs from 'fs';

const s = spinner();
const redirectURL = 'https://falconforge.io';

const createConfigFile = async (key) => {
  try {
    if (key?.length) {
      let data = {
        secret: key,
      };
      const CONFIG_DIR = path.join(
        process.env.HOME || process.env.USERPROFILE,
        '.falconforge'
      );
      const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

      if (!fs.existsSync(CONFIG_DIR)) {
        fs.mkdirSync(CONFIG_DIR, { recursive: true });
        console.log(`\tCreated configuration directory: ${CONFIG_DIR}`);
      }

      fs.writeFileSync(CONFIG_FILE, JSON.stringify(data, null, 2));
      console.log(
        `\tYour API key has been saved successfully!\n\tFile location: ${CONFIG_FILE}`
      );
    } else {
      throw Error('Key not found.');
    }
  } catch (error) {
    throw Error(error);
  }
};
export const ConfigureHandler = async (argv) => {
  try {
    intro(
      picocolors.bgCyanBright(
        picocolors.blackBright(` Setup project Falcon Forge `)
      )
    );

    console.log(`
\tWelcome to Falcon CLI Configuration!
\t-------------------------------------
\tWe need you to authenticate to continue. Please follow the instructions:
\t1. A browser window will open. Log in to your account.
\t2. Generate your secret API key and copy it.
\t3. Paste the API key here and hit Enter.

\tOpening your browser...
    `);

    await open(redirectURL);
    let secretKey = await text({
      message: 'Enter your secret key here...',
    });
    await createConfigFile(secretKey);
    outro("Let's create some awesooome code together 🍻");
  } catch (error) {
    throw Error('Error in Create Handler' + error);
  }
};
