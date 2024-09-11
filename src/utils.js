// Your code here
function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

module.exports = { currentAgeForBirthYear };  // CommonJS export
