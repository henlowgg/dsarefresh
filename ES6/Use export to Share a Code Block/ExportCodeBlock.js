// const uppercaseString = (string) => {
// 	return string.toUpperCase();
// };

// const lowercaseString = (string) => {
// 	return string.toLowerCase();
// };


// personally id rather use the export at the beginning but just for solidifying all avenues these are both ways

// using export within the const function itself at the beginning (my pref)

export const uppercaseString = (string) => {
    return string.toUpperCase();
};

export const lowercaseString = (string) => {
    return string.toLowerCase();
};

// other export method

const uppercaseString = (string) => {
    return string.toUpperCase();
}
export { uppercaseString };

const lowercaseString = (string) => {
    return string.toLowerCase();
}
export { lowercaseString };