module.exports = {
    api: {
        output: {
            mode: "single",
            target: "src/api/orval/types.ts",
            client: "react-query",
        },
        input: {
            target: "./api-docs.json",
        },
    },
};
