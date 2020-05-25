const fs = require('fs');
const {wordEmojiMap} = require('./map');

if (process.argv.length < 2) {
    console.error('❌ no filename!')
}

const basePath = './src';

const filepath = `${basePath}/${process.argv[2]}.js`;

try {
    let fileData = fs.readFileSync(filepath, 'utf-8');
    for (const word in wordEmojiMap) {
        fileData = fileData.replace(new RegExp(word,'g'), wordEmojiMap[word]);
    }
    fs.writeFile(`${basePath}/${process.argv[2]}.yu`, fileData, { 'flag': 'w' }, err => {
        if (err) {
            throw err;
        }
        console.log(`✅ decompile succeed! output file = ${process.argv[2]}.yu`);
    });
} catch(e) {
    console.error(`❌ read file error！`, e);
}

