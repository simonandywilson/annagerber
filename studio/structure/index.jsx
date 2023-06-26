import Emoji from "a11y-react-emoji";
import React from "react";

export const structure = (S) => {
    return S.list()
        .id('root')
        .title('Content')
        .items([
            S.listItem()
                .title("Content")
                .icon(() => <Emoji style={{ fontSize: "2rem" }} symbol={"⭐️"} />)
                .child(S.document().title("Content").schemaType("content").documentId("content")),
            S.divider(),
            S.listItem()
                .title("SEO")
                .icon(() => <Emoji style={{ fontSize: "2rem" }} symbol={"🌍"} />)
                .child(S.document().title("SEO").schemaType("seo").documentId("seo")),
            S.divider(),
        ]);
}
