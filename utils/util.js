function toBin(i) {
    return `0b${i.toString(2).toUpperCase()}`;
}

function toHex(i) {
    return `0x${i.toString(16).toUpperCase()}`;
}

export {
    toBin,
    toHex
}