DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

1. Problem Break Down:
- task involves dna strands made up of nucleobases A, T, C, G
- DNA pairing rules, A with T and C with G
- Given a string representing a single DNA strand, the goal is to find the complementary strand and represent the pairs in a 2D array

2. Approach:
- Since the problem involves mapping each character to its pair, best method would be to use a `lookup` mechanism
- Iteration is required to process each character of a given string
- A `switch` statement or an object acting as a map could be used for pairing 

3. Algorithm Steps:
- Create a function that takes a string as input
- Initialize an empty array to hold the pairs
- Iterate over each character in the string
- For each character, find its pair (using map or in this case, a `switch` statement) and create a sub-array with the character and its pair
Push this sub-array onto the main array
- Return the main array after the iteration is complete

4. Considerations:
- Ensure that the function handles unexpected characters 'gracefully' (like characters other than A, T, C, G)
- Consider the case-sensitivity of the input

5. Optimization:
- may not be necessary due to its simplicity
- However if dealing with long DNA strands, ensuring efficient lookup and iteration might be important
