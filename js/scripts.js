// Describe: `pigLatin()`
// Test: "It will add 'way' to the end of words that begin with a vowel"
// Expect(pigLatin("a")).toEqual("away");

// Test: "It will check if first character of input string is a vowel, before adding 'way'"
// Expect(pigLatin("broken")).toEqual("broken");
// Expect(pigLatin("abracadabra")).toEqual("abracadabraway");

function pigLatin(words) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let pigLatinPhrase = words;
  for (let i = 0; i < vowels.length; i++) {
    if (words[0] === vowels[i]) {
      pigLatinPhrase += "way";
    }
  }
  return pigLatinPhrase;
}
