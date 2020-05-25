const emojis = ['🐔', '🐖', '🐺', '🐑', '🦆', '🐧', '🐭',
    '🐂', '🐯', '🐰', '🐉', '🐍', '🐎', '🐵',
    '🐶', '🐘', '🐊', '🦖', '🦌', '🐿', '🐨',
    '🐻', '🐙', '🦑', '🦈', '🐬', '🐋', '🍗',
    '🐡', '🐥', '🐫', '🦇', '💩', '🦊', '🦔',
    '🐲', '🥚', '🦂', '🐀', '🦏', '🐦', '🦍',
    '🐒', '🐕', '🐩', '🐱', '🐈', '🐅', '🐆',
    '🐴', '🦓', '🐮', '🐃', '🐄', '🐷', '🐗',
    '🐏', '🐐', '🐪', '🦒', '🐁', '🐇', '🐳',
    '🦃', '🐣', '🐓', '🦅', '🕊', '🦉', '🐜',
    '🐝', '🐢', '🧸', '🐚', '🐌', '🦋', '🦀',
    '🐼', '🐟', '🦄', '🦁',
];


const keyWords = ['abstract', 'arguments', 'boolean', 'break', 'byte',
    'case', 'catch', 'char', 'class', 'const',
    'continue', 'debugger', 'default', 'delete', 'do',
    'double', 'else', 'enum', 'eval', 'export',
    'extends', 'false', 'final', 'finally', 'float',
    'for', 'function', 'goto', 'if', 'implements',
    'import', 'in', 'instanceof', 'int', 'interface',
    'let', 'long', 'native', 'new', 'null',
    'package', 'private', 'protected', 'public', 'return',
    'short', 'static', 'super', 'switch', 'synchronized',
    'this', 'throw', 'throws', 'transient', 'true',
    'try', 'typeof', 'var', 'void', 'volatile',
    'while', 'with', 'yield', 'Array', 'Date',
    'Infinity', 'isFinite', 'isNaN', 'length',
    'Math', 'NaN', 'name', 'Number', 'Object',
    'prototype', 'String', 'undefined', 'console',
    '=', '{', '}',
];

if (!validSame(emojis) || !validSame(keyWords)) {
    console.error(`❌ array has same value!`)
}

if (emojis.length !== keyWords.length) {
    console.error(`❌ map error: length not same, emojis ${emojis.length} and keyWords ${keyWords.length}!`);
    return;
}

const emojiWordMap = {};
const wordEmojiMap = {};

keyWords.sort((a, b) => b.length - a.length);

for (let i = 0; i < keyWords.length; i++) {
    emojiWordMap[emojis[i]] = keyWords[i];
    wordEmojiMap[keyWords[i]] = emojis[i];
}

console.log('✅ map.js validate true!');

// 数组判重
function validSame(arr) {
    let set = {};
    for (let i = 0; i < arr.length; i++) {
        if (set[arr[i]]) {
            console.error(`array has same value: position = ${set[arr[i]]} and ${i}, value = ${arr[i]}!`);
            return false;
        }
        set[arr[i]] = i;
    }
    return true;
}

exports.emojiWordMap = emojiWordMap;
exports.wordEmojiMap = wordEmojiMap;
