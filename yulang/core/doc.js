const {wordEmojiMap} = require('./map');
console.log('📚 Document is shown below: ')
for (let word in wordEmojiMap) {
    console.log(`${word} => ${wordEmojiMap[word]}`);
}