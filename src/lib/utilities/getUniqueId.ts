export const generateRandomString = () => Math.random().toString(36).slice(-10);

export const getUniqueId = () => `${generateRandomString()}_${generateRandomString()}`;
