import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import bio from "./documents/bio"
import short from "./documents/short";
import long from "./documents/long"
import seo from "./documents/seo";
import content from "./objects/content";
import hyperlinks from "./objects/hyperlinks";
import hyperlink from "./objects/hyperlink";

export default createSchema({
    name: "mySchema",
    types: schemaTypes.concat([bio, short, long, seo, content, hyperlinks, hyperlink]),
});
