// Documents
import content from "./documents/content"
import seo from "./documents/seo";

// Objects
import img from "./objects/imgObject";
import vid from "./objects/vidObject";
import hyperlink from "./objects/hyperlinkObject";

// Array
import sort from "./arrays/sortArray";
import hyperlinks from "./arrays/hyperlinksArray";

// Blocks
import body from "./blocks/bodyBlock";

const singletons = new Set([]);
const documents = new Set([content, seo]);
const objects = new Set([img, vid, hyperlink]);
const arrays = new Set([sort, hyperlinks]);
const blocks = new Set([body]);
const modules = new Set([]);

export const schema = [...singletons, ...documents, ...objects, ...arrays, ...blocks, ...modules];
export const singletonDocs = new Set(["content", "seo"]);
export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
