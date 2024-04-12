import { randomUUID } from 'crypto';

export const addId = async ({ data, req, context }) => {
    data.uuid = randomUUID();
    return data;
};
