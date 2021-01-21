// Describe: `pigLatin()`
// Test-1: "It will add 'way' to the end of words that begin with a vowel"
// Expect(pigLatin("a")).toEqual("away");

// Test-2: "It will check if first character of input string is a vowel, before adding 'way'"
// Expect(pigLatin("broken")).toEqual("broken");
// Expect(pigLatin("abracadabra")).toEqual("abracadabraway");

//Test-3: "If first character is consonant, it will return first and/or subsequent consonants until a vowel reached"
//Expect:(pigLatin("grab")).toEqual("gr");

function pigLatin(words) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let pigLatinPhrase = words;
  for (let i = 0; i < vowels.length; i++) {
    if (words[0] === vowels[i]) {
      pigLatinPhrase += "way";
      return pigLatinPhrase;
    } else if (words[1] === vowels[i]) {
      const consonantCluster = words.slice(0,i);
      return consonantCluster;
    }    
  }
  return pigLatinPhrase;
}
