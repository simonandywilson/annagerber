import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import content from "./documents/content"
import body from "./objects/body";
import sort from "./objects/sort";
import img from "./objects/img";
import vid from "./objects/vid";
import seo from "./documents/seo";
import hyperlinks from "./objects/hyperlinks";
import hyperlink from "./objects/hyperlink";

export default createSchema({
    name: "mySchema",
    types: schemaTypes.concat([content, body, sort, img, vid, seo, hyperlinks, hyperlink]),
});