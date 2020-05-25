const fs = require('fs');
const {emojiWordMap} = require('./map');

if (process.argv.length < 2) {
    console.error('❌ no filename!')
}

const basePath = './src';

const filepath = `${basePath}/${process.argv[2]}.yu`;

try {
    let fileData = fs.readFileSync(filepath, 'utf-8');
    for (const emoji in emojiWordMap) {
        fileData = fileData.replace(new RegExp(emoji,'g'), emojiWordMap[emoji]);
    }
    fs.writeFile(`${basePath}/${process.argv[2]}.js`, fileData, { 'flag': 'w' }, err => {
        if (err) {
            throw err;
        }
        console.log(`✅ compile succeed!`);
    });
} catch(e) {
    console.error(`❌ read file error！`, e);
}

