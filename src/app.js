#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { CreateBuilder, CreateHandler } from "./commands/Create.command.js";
import { ApiBuilder, ApiHandler } from './commands/Api.command.js';
import { ConfigureHandler } from './commands/Auth.commands.js';


yargs(hideBin(process.argv)).command(
    'configure',
    'To register CLI with Server.',
    () => {},
    async(argv) => await ConfigureHandler(argv)
).command(
    'create [project_name]',
    'Initialize the project.',
    async (yargs) => await CreateBuilder(yargs),
    async (argv) => await CreateHandler(argv)
).command(
    'api [api_name]', 
    'Creates an API with basic boilerplate.', 
    async(yargs) => await ApiBuilder(yargs),
    async(argv) => await ApiHandler(argv)
).argv;

