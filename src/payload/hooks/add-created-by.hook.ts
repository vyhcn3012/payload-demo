export const addCreatedBy = async ({ data, req, context }) => {
    data.created_by = req.user.id;
    return data;
};
