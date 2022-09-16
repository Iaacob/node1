import fs from 'fs';

export const Renombrar = (path, newpath) => {

    fs.rename(path, newpath, () => {

        console.log("\nArchivo renombrado\n");
    })

}