const fs = require("fs");
const path = require("path");
//fs.existsSync kataloqun ve ya faylin olub olmadigin yoxlayir
function existDirection() {
    const pathToDir = "./test_folder";

    if(fs.existsSync(pathToDir)){
        return true;
    } else {
        return false;
    }
}
existDirection();

function existFile() {
    const pathToFile = "./test_folder/info.dat";
    const pathtoDocFile = "./test_folder/newDoc.docx";
    if (fs.existsSync(pathtoDocFile)) {
        return true;
    } else {
        return false;
    }
}
existFile();

//fs.statSync fayl haqda melumatlar
//statSync.size yer tutmasi 
//statSync.birthtime faylin yaranma tarixi
function fileInfo() {
    const pathToFile = "./test_folder/open_me.jpg";
    const fileInfoFromDir = fs.statSync(pathToFile);
    const fileSize = fileInfoFromDir.size/(2**10);
    const fileBirthTime = fileInfoFromDir.birthtime;
    return {
        size: fileSize,
        birthTime: fileBirthTime
    }
}
/* console.log(fileInfo().size.toFixed(2) + 'kbytes');
console.log(fileInfo().birthTime); */

//Faylin adi ve genislemesi (pathla)
//path.basename faylin tam genislenmesi ile birlikde adi
//path.dirname faylin oldugu kataloq(fayl)
//path.extname genislenmesi(extension)
//path.parse faylin yeri ve adi haqda umumi melumatlar
function fileDirInfo() {
    const pathToFile = "./test_folder/open_me.jpg";
    return path.parse(pathToFile);
};
fileDirInfo();

//Kataloqda olan butun fayllar massivi(array) fs.readdirSync(pathToFile)
function dirFiles() {
    const dirname ='./test_folder';
    const filesOnDirArr = fs.readdirSync(dirname);
    let allFiles = ''
    filesOnDirArr.forEach(item => allFiles += item + '\n');
    return allFiles;
}
dirFiles();

//path.join(__dirname,'directoryname') Kataloqun komputerde tam yerini gosterir
function absoluteDir() {
    const dirName = './test_folder'
    return path.join(__dirname, dirName);
};
absoluteDir();
//path.join ile bir nece fayla geden yolu birlesdirmek de olar
function pathJoiner() {
    const dirname = 'test_folder';
    return path.join('/', 'users', dirname, 'info.dot');
}
pathJoiner();

//faylin adi ve ya texmini yerinden tam yerini tapmaq ucun
function filesAbsoluteDir() {
    const filename = 'info.dat';
    const fileDirName = 'test_folder'
    if (fileDirName.length) {
        return path.resolve(fileDirName, filename)
    } else {
        return path.resolve(filename)
    }
}
filesAbsoluteDir();

console.log(path.normalize('/Users/../info.dat'));
