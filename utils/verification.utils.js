function verifString(parameter, mustExist, minSize, maxSize) {
    if (!parameter && mustExist === true) {
        throw new Error('Missing parameter');
    }
    if (mustExist === false) {
        return ;
    }
    if (parameter.length < minSize || parameter.length > maxSize) {
        throw new Error(`${parameter} has an invalid size, must be between ${minSize} and ${maxSize}`)
    }
    return ;
}

module.exports = { verifString };