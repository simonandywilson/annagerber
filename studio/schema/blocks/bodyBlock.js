import { BiLink } from "react-icons/bi";

export default {
    title: "Text",
    name: "body",
    type: "array",
    of: [
        {
            type: "block",
            styles: [],
            lists: [],
            marks: {
                decorators: [{ title: 'Strong', value: 'strong' }],
                annotations: [
                    {
                        title: "Link",
                        name: "link",
                        type: "object",
                        icon: BiLink,
                        options: {
                            modal: {
                                type: 'dialog',
                                width: 1
                            }
                        },
                        fields: [
                            {
                                title: "Media",
                                name: "media",
                                type: "sort",
                                validation: (Rule) => Rule.max(1),
                                
                            },
                            {
                                title: "Link",
                                name: "hyperlinks",
                                type: "hyperlinks",
                                validation: (Rule) => Rule.max(1),
                            }
                        ],
                    },
                ],
            },
        },
    ],
};
