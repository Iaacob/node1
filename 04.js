import fs from 'fs';
//const fs = require('fs');

fs.rename('.texto.txt', 'renombrado.txt', (error) => {
    if(error){
        throw error;
    }
});