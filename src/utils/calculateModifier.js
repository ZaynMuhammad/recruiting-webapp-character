// Used for calculating the modifier for a given attribute
export function calculateModifier(attribute) {
    return Math.floor((attribute - 10) / 2);
}