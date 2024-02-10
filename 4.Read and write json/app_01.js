const fs = require("fs");
const pathToFile = "./data_folder/test.json";

//reading json file
function readJsonFile() {
    const data = fs.readFileSync(pathToFile);
    const parsedData = JSON.parse(data);
    return parsedData
}

readJsonFile();

//writing json file
const dataArr = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 2,
        "id": 7,
        "title": "ea qui ipsa sit aut",
        "body": "voluptatem doloribus vel accusantium quis pariatur\nmolestiae et velit aut"
    },
    {
        "userId": 88,
        "id": 56,
        "title": "salam asil ea qui ipsa sit aut",
        "body": "voluptatem wtf is zis vel accusantium quis pariatur\nmolestiae et velit aut"
    }
];
function writeJsonFile() {
    const pathForFile = "./data_folder/new.json";
    const stringData = JSON.stringify(dataArr);
    return fs.writeFileSync(pathForFile, stringData, {encoding: "utf8", flag: "w"});
}
writeJsonFile();