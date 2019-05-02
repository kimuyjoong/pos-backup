const DEFAULT_ROOT_PATH = '/';
const ROOT = process && process.env && process.env.PUBLIC_URL || DEFAULT_ROOT_PATH;

export const makeImagePath = path => {
    if (!path) {
        throw new TypeError('The path must be existed.');
    }
    return ROOT + path;
};
