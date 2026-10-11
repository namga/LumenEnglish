// Rebuilds index.html from src/template.html + src/data.json
import fs from "node:fs";
const data = fs.readFileSync("src/data.json", "utf8").replace(/</g, "\\u003c");
fs.writeFileSync("index.html", fs.readFileSync("src/template.html", "utf8").replace("/*DATA*/", () => data));
console.log("built index.html");
