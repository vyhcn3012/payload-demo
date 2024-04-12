export const addLocale = async ({ data, req, context }) => {
    data.locale = req.locale;
    return data;
};
