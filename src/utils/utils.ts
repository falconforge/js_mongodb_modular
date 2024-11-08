export const delay = (time: number): Promise<number> => {
    return new Promise(resolve => setTimeout(resolve, time));
}