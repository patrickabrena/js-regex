/*My Javscript Regex Notes */
const USING_THE_TEST_METHOD = () => {
  /*Regular expressions are used to match parts of strings.
        You create patterns to help you do that matching */
  //
  /*use /the/ to find the word "the" in the string "The dog chased the cat" */
  //
  /*One way to test is using the .test() method. */
  const example = () => {
    let testStr = "freeCodeCamp";
    let testRegex = /Code/;
    let result = testRegex.test(testStr);
    console.log(result);
    /*will show true */
  };
  example();
};
USING_THE_TEST_METHOD();

const MATCH_LITERAL_STRINGS = () => {
  //setup
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/;
  let result = waldoRegex.test(waldoIsHiding);
  console.log(result);
};
MATCH_LITERAL_STRINGS();

const LITERAL_STRING_WITH_DIFFERENT_POSSIBILITIES = () => {
  //can search for multiple patterns "/coding/" using the OR operator |
  //example - if you want ot match the strings yes or no, regex you want is /yes|no/
  //can also search for more than two patterns, just use more OR operators eg. /yes|no|maybe/

  //Complete the regex petRegex to match the pets dog, cat, bird or fish
  //setup
  let petString1 = "James has a pet cat.";
  let petString2 = "James has a pet dog.";
  let petString3 = "James has a pet owl.";
  let petString4 = "James has a pet fish.";

  let petRegex = /dog|cat|bird|fish/; //Change this line
  let result1 = petRegex.test(petString1);
  let result2 = petRegex.test(petString2);
  let result3 = petRegex.test(petString3);
  let result4 = petRegex.test(petString4);
  console.log(result1);
  console.log(result2);
  console.log(result3); //will throw an error beccause it's not part of petRegex
  console.log(result4);
};
LITERAL_STRING_WITH_DIFFERENT_POSSIBILITIES();

const IGNORE_CASE_WHILE_MATCHING = () => {
  //can use the flag "i" after regex to match strings ignorecase, igNOreCase and IgnoreCase
  let fccString1 = "freeCodeCamp";
  let fccString2 = "frEeCodECaMP";
  let fccString3 = "freecodecamp";
  let fccString4 = "FREECODE CAMP";

  let fccRegex = /freeCodeCamp/i;

  let regex = (petstring) => {
    console.log(fccRegex.test(petstring));
  };
  let regexArr = [
    regex(fccString1),
    regex(fccString2),
    regex(fccString3),
    regex(fccString4), //will throw error beause there's a spacve
  ];
  return regexArr;
  // console.log(regexArr);
};
IGNORE_CASE_WHILE_MATCHING();

const extractUsingMatchMethod = () => {
  //.match syntax is OPPOSITE OF .test syntax
  /*eg. "string".match(/regex/)
        /regex/.test("string") */
  let extractStr = "Extract the word 'coding' from this string";
  let codingRegex = /coding/;
  // let result = extractStr;
  let theTestMethod = codingRegex.test(extractStr);
  console.log(theTestMethod); // will display true

  let theMatchMethod = extractStr.match(codingRegex);
  console.log(theMatchMethod); // willd displaay an array with the match in it
};
extractUsingMatchMethod();

const findMoreThanFirstMatch = () => {
  //to search or extract a pattern more than once, use g flag (global)
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /twinkle/gi; // Change this line
  let result = twinkleStar.match(starRegex); // Change this line
  console.log(result);
};
findMoreThanFirstMatch();

const matchAnythingWithWildcardPeriod = () => {
  //use wildcard character to match any one charaacter
  //eg. using regex /hu./ will match hug, huh, hut and hum
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/; // Change this line
  let result = unRegex.test(exampleStr);
  console.log(result); // will display true in console because wildcard (.) matches any one character
};
matchAnythingWithWildcardPeriod();

const matchSIngleCharacterWithMultiplePossibilities = () => {
  //can search for a literal patttern with flexibility using chracter classes
  //eg. the regex /b[aiu]g/ will match strings bag, big, bug
  let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
  let vowelRegex = /[aeiou]/gi; // Change this line
  let result = quoteSample.match(vowelRegex); // Change this line
  console.log(result);
};
matchSIngleCharacterWithMultiplePossibilities();

const matchLettersOfTheAlphabet = () => {
  //can define a range of characters within the character set using hypen
  //eg. let regexRange = /[a-e]at/ig
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z]/gi; // Change this line
  let result = quoteSample.match(alphabetRegex); // Change this line
  console.log(result);
};
matchLettersOfTheAlphabet();
