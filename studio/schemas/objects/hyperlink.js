import { BiPaperclip } from "react-icons/bi";

export default {
    title: "Link",
    name: "hyperlink",
    type: "object",
    icon: BiPaperclip,
    fields: [
        {
            title: "Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "External", value: "external" },
                    { title: "Email", value: "email" },
                    { title: "Phone", value: "phone" },
                ],
            },
            initialValue: "external",
        },
        {
            title: "Link",
            name: "link",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: "type",
            subtitle: "link",
        },
        prepare(selection) {
            const { title, subtitle } = selection;
            const capitalise = (string) => (string && string[0].toUpperCase() + string.slice(1)) || "";
            return {
                title: capitalise(title),
                subtitle: subtitle,
            };
        },
    },
};
