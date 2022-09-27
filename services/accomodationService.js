const fs = require('fs');
const file = './models/data.json';

const data = JSON.parse(fs.readFileSync(file));

async function memorize() {
    return new Promise((res, rej) => {
        fs.writeFile(file, JSON.stringify(data), (err) => {
            if(err === null) {
                res();
            }else {
                rej(err);
            }
        });
    });
}

function getAll() {
    return data;
}

function getById(id) {
    return data.find(el => el.id == id);
}

module.exports = {
    getAll,
    getById
}