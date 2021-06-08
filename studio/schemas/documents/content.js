export default {
    title: "Content",
    name: "content",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        {
            title: "Bio",
            name: "bio",
            type: "body",
        },
        {
            title: "Short",
            name: "short",
            type: "body",
        },
        {
            title: "Long",
            name: "long",
            type: "body",
        },
    ],
};
