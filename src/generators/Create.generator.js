import { copyTemplateFolder } from "../utils/utils.js";
export const CreateProject = async(projectName, language, database, architecture, prettier, eslint) => {
    try {
        let fetchFrom = `src/templates/${language}/${database}/${architecture}`;
        let copyAt = `${process.cwd()}/${projectName}`;
        let projectCreated = await copyTemplateFolder('falconforgecli', fetchFrom, projectName);
        console.log(projectCreated);
        return projectCreated;
    } catch (error) {
        throw Error("Error in Create Project generator" + error);
    }
}