// const franc = require("franc");
// const langs = require('langs');

import {franc, francAll} from 'franc'
import langs from 'langs'; 
import colors from 'colors';

//For user input
const input = process.argv[2];

const langCode = (franc(input))

if(langCode === 'und'){
    console.log("SORRY, Could not figure the language out")
}else{
    const language = langs.where("3", langCode)
    console.log((`Our best guess is: ${language.name}`).rainbow)
}
