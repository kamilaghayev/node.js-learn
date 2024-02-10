const fs = require("fs");

//fayllari oxumaq fs.readFileSync
function ReadFiles() {
    const fileDir = "./assets/text.txt";
    return fs.readFileSync(fileDir, {encoding:"utf8", flag: "r"});
};
ReadFiles();

//fayllardaki yazini setire gore bolmek
//"/r/n" text faylda setirden setire kecmek
function splitTextOnFiles() {
    const fileDir = "./assets/text.txt";
    const fileReader = fs.readFileSync(fileDir, { encoding: "utf8", flag: "r"});
    let fileTextArr = fileReader.split("\r\n");
    fileTextArr = fileTextArr.filter(line => line.trim() !== "");
    return fileTextArr;
};
splitTextOnFiles();

//fayl yaratmaq ve fayla yazi yazmaq
function writeFileSync() {
    const pathToFile = "assets/new.txt";
    const text = "Разум превосходит материю,Волнует ли это кого-то?\r\nНе меняй тему,\r\nЯ погряз в любви к тебе.\r\nЯ пропустил свой поезд, в Нью-Йорке шёл сильный дождь.\r\nПолечу на большом реактивном самолете в Лос-Анджелес.\r\nТы ведь знаешь, что ты постоянно у меня в мыслях";
    return fs.writeFileSync(pathToFile, text, {encoding: "utf8", flag: "a"});
};


//Massivdeki yazilardan fayl yaratmaq;
function writeFileFromArr() {
    let textArr = [
        "Flaglar",
        "a,a+ Fayl yoxdusa yaradir, varsa yazini uzerine elave edir",
        "ax, ax+ fayl yoxdursa yaradib yazir, varsa islemir",
        "as, as+ fayli sinxrom rejimde oxuyub elave edir, fayl yoxdursa yaradir",
    ];
    const pathToFile = "assets/new.txt";
    textArr = textArr.filter(text => text !== "");
    return fs.writeFileSync(pathToFile, textArr.join("\r\n"), {encoding: "utf8", flag: "a"});
};
writeFileFromArr();