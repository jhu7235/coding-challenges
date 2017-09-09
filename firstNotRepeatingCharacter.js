// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

// Input/Output

// [time limit] 4000ms (js)
// [input] string s

// A string that contains only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.

// [output] char

// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

function firstDuplicate(a) {
    
    const DupHash = {
        singleIndex: {
            124123123123: 'example'
        },
        characterMemo: {
            example: {
                count: 1,
                singleIndex: 124123123123,
            }
        }
    }
    
    for(let index = 0; index < a.length; index++) {
        const currentChar = a[index];
        if(existAlready(currentChar, DupHash)) {
            if(hasSingleIndex(currentChar, DupHash)) {
                deleteSingleIndex(currentChar, DupHash);
            }
            addCharacterCount(currentChar, DupHash);
        }
        else if(!existAlready(currentChar, DupHash)) {
            setSingleIndex(currentChar, index, DupHash);
            addCharacterCount(currentChar, DupHash);
        }
    }
    console.log('FIRST DUPLICATE', DupHash)
    for(let singleIndex in DupHash.singleIndex) {
        return DupHash.singleIndex[singleIndex];
    }
    
    return -1
}

function existAlready(char, DupHash) {
    return DupHash.characterMemo[char];
}

function hasSingleIndex(char, DupHash) {
    return DupHash.characterMemo[char].singleIndex;
}// done


function setSingleIndex(char, index, DupHash) {
    DupHash.characterMemo[char] = {};
    DupHash.characterMemo[char].singleIndex = index;
    DupHash.singleIndex[index] = char;
}

function deleteSingleIndex(char, DupHash) {
    let index = DupHash.characterMemo[char].singleIndex;
    delete DupHash.singleIndex[index];
    DupHash.characterMemo[char].singleIndex = null;
}// done


function addCharacterCount(char, DupHash) {
    DupHash.characterMemo[char].count ++;
}