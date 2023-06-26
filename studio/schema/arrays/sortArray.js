import { LimitedArray } from "../../components/LimitedArray";

export default {
    title: "Sort",
    name: "sort",
    type: "array",
    options: {
        sortable: false,
    },
    of: [
        {
            title: "Image",
            name: "img",
            type: "img",
        },
        { title: "Video", name: "vid", type: "vid" },
    ],
    components: {
        input: LimitedArray
    }
};
