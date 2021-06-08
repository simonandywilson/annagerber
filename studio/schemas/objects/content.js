export default {
    title: "Content",
    name: "content",
    type: "array",
    of: [
        {
            type: "block",
            styles: [],
            lists: [],
            marks: {
                decorators: [],
                annotations: [
                    {
                        name: "link",
                        type: "object",
                        title: "Photo",
                        options: {
                            editModal: "modal",
                        },
                        fields: [
                            {
                                title: "Photo",
                                name: "photo",
                                type: "image",
                                fields: [
                                    {
                                        title: "Alternative Text",
                                        name: "alt",
                                        type: "string",
                                        description: "Important for SEO and accessibility.",
                                        options: {
                                            isHighlighted: true,
                                        },
                                    },
                                    {
                                        // Contact
                                        title: "Link",
                                        name: "hyperlinks",
                                        type: "hyperlinks",
                                        options: {
                                            isHighlighted: true,
                                        },
                                        validation: (Rule) => Rule.max(1),

                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
