const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// SYNCRHONOUS METHOD
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e){
    console.log("SOMETHING WENT WRONG!");
    console.log(e);
}

// ASYNCRHONOUS METHOD
// fs.mkdir('Dogs', {recursive: true}, (err) => {
//     console.log("IN THE CALLBACK!")
//     if (err) throw err;
// })
// console.log("AFTER THE CALLBACK!")