// Your tests here
// utils.test.js

// Import the function for testing (CommonJS format)
const { currentAgeForBirthYear } = require('../utils');

// OR, if using ES6 modules:
// import { currentAgeForBirthYear } from '../utils';

describe('currentAgeForBirthYear', () => {
    it('returns the age of a person based on the year of birth', () => {
        const birthYear = 1984;
        const currentYear = new Date().getFullYear(); // Get the current year dynamically
        const expectedAge = currentYear - birthYear;

        // Call the function to get the age
        const ageOfPerson = currentAgeForBirthYear(birthYear);

        // Assert that the result matches the expected age
        expect(ageOfPerson).toBe(expectedAge);
    });
});
