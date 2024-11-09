#!/usr/bin/env node

import { intro, spinner } from "@clack/prompts";
import picocolors from "picocolors";
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { delay } from './utils/utils.js';


const s = spinner();

yargs(hideBin(process.argv)).command(
    'create [project_name]',
    'Initialize the project.',
    (yargs) => {
        yargs.positional('project_name', {
            describe: "It is the name of the project.",
            default: "MyFalconProject"
        });
    },
    async (argv) => {
        s.start(`Falcon is creating your ${picocolors.bgCyan(`${argv.project_name}`)}`);
        s.message("Pouring the beer...");
        await delay(1000);
        s.stop('Enough beer for now.')
        intro(picocolors.bgCyanBright(`${argv.project_name}`))
    }
).argv;

