import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';

export const copyTemplateFolder = async (cli, template, destination) => {
  try {
    // 1. Get the global install path of the CLI by running `npm list -g`
    const globalCLIPath = await getGlobalCLIPath(cli);
    // console.log(globalCLIPath);
    if (!globalCLIPath) {
      throw new Error('Global CLI path not found!');
    }

    // 2. Define the template folder's relative path inside the global package
    const templateFolderPath = path.join(globalCLIPath, template);

    // 3. Define the destination (current directory where the user fired the command)
    const currentDirectory = process.cwd();

    // 4. Define the new directory path where you want to copy the template folder
    const destinationPath = path.join(currentDirectory, destination);

    // 5. Copy the template folder to the destination using fs-extra
    return await fs.copy(templateFolderPath, destinationPath);

    // console.log('Template copied successfully to:', destinationPath);
  } catch (err) {
    throw Error(' Error in copy template function' + err);
    // console.error('Error copying the template folder:', err);
  }
};

// Function to get the global path of the CLI using `npm list -g`
const getGlobalCLIPath = (cli) => {
  return new Promise((resolve, reject) => {
    exec(`npm ls -g ${cli} -p`, (error, stdout, stderr) => {
      // console.log({error, stderr, stdout})
      if (error || stderr) {
        reject(`Error finding global CLI path: ${stderr || error.message}`);
      } else {
        if (stdout) {
          // console.log(`Found local symlink for ${cli}: ${stdout}`);
          resolve(stdout.trim()); // Return the local path if symlinked
        } else {
          reject('CLI not found in global node_modules');
        }
      }
    });
  });
};

export const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const CloneRepository = async (repoUrl, destinationDir) => {
  try {
    const targetPath = path.resolve(process.cwd(), destinationDir);
    console.log(`\tCloning repository from ${repoUrl} into ${targetPath}`);

    return new Promise((resolve, reject) => {
      exec(`git clone ${repoUrl} ${targetPath}`, (error, stdout, stderr) => {
        if (error) {
          reject({ success: false, error: `Error: ${error.message}`});
        } else if (stderr) {
          resolve({ success: true, error: stderr });
        } else {
          resolve({ success: true, error: stdout });
        }
      });
    });
  } catch (error) {
    throw Error(error);
  }
};
