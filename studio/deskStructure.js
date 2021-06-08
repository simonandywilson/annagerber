import S from "@sanity/desk-tool/structure-builder";
import { BiFile } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Content")
                .icon(BiFile)
                .child(S.document().title("Content").schemaType("content").documentId("content")),
            S.divider(),
            S.listItem()
                .title("SEO")
                .icon(BiGlobe)
                .child(S.document().title("SEO").schemaType("seo").documentId("seo")),
            S.divider(),
        ]);
