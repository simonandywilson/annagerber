import S from "@sanity/desk-tool/structure-builder";
import { BiShowAlt } from "react-icons/bi";
import { BiFileBlank } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Bio")
                .icon(BiShowAlt)
                .child(S.document().title("Bio").schemaType("bio").documentId("bio")),
            S.listItem()
                .title("Short")
                .icon(BiFileBlank)
                .child(S.document().title("Short").schemaType("short").documentId("short")),
            S.listItem()
                .title("Long")
                .icon(BiFileBlank)
                .child(S.document().title("Long").schemaType("long").documentId("long")),
            S.divider(),
            S.listItem()
                .title("SEO")
                .icon(BiGlobe)
                .child(S.document().title("SEO").schemaType("seo").documentId("seo")),
            S.divider(),
        ]);
