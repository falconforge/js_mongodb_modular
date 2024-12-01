import { CloneRepository } from "../utils/utils.js";
import { clones } from '../config/clones.js';

export const CreateProject = async(projectName, language, database, architecture, prettier, eslint) => {
    try {
        let repoURL = clones[language][database][architecture];
        let copyAt = `${process.cwd()}/${projectName}`;
        let project = await CloneRepository(repoURL, copyAt);
        return project;
    } catch (error) {
        throw Error("Error in Create Project generator" + error);
    }
}