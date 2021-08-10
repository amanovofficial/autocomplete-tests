function createAutoComplete(...args) {
    const literals = args[0]
    return (str) => {
        const result = [];
        if (!str) return result;
        str = str.toLowerCase()
        for (let i = 0; i < literals.length; i++) {
            item = literals[i].toLowerCase()
            if (str === item.substr(0, str.length)) {
                result.push(literals[i])
            }
        }

        return result;
    }
}

module.exports.createAutoComplete = createAutoComplete