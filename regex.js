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
// USING_THE_TEST_METHOD();

const MATCH_LITERAL_STRINGS = () => {
  //setup
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/;
  let result = waldoRegex.test(waldoIsHiding);
  console.log(result);
};
// MATCH_LITERAL_STRINGS();

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
// LITERAL_STRING_WITH_DIFFERENT_POSSIBILITIES();

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
// IGNORE_CASE_WHILE_MATCHING();

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
// extractUsingMatchMethod();

const findMoreThanFirstMatch = () => {
  //to search or extract a pattern more than once, use g flag (global)
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /twinkle/gi; // Change this line
  let result = twinkleStar.match(starRegex); // Change this line
  console.log(result);
};
// findMoreThanFirstMatch();

const matchAnythingWithWildcardPeriod = () => {
  //use wildcard character to match any one charaacter
  //eg. using regex /hu./ will match hug, huh, hut and hum
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/; // Change this line
  let result = unRegex.test(exampleStr);
  console.log(result); // will display true in console because wildcard (.) matches any one character
};
// matchAnythingWithWildcardPeriod();

const matchSIngleCharacterWithMultiplePossibilities = () => {
  //can search for a literal patttern with flexibility using chracter classes
  //eg. the regex /b[aiu]g/ will match strings bag, big, bug
  let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
  let vowelRegex = /[aeiou]/gi; // Change this line
  let result = quoteSample.match(vowelRegex); // Change this line
  console.log(result);
};
// matchSIngleCharacterWithMultiplePossibilities();

const matchLettersOfTheAlphabet = () => {
  //can define a range of characters within the character set using hypen
  //eg. let regexRange = /[a-e]at/ig
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z]/gi; // Change this line
  let result = quoteSample.match(alphabetRegex); // Change this line
  console.log(result);
};
// matchLettersOfTheAlphabet();

const matchNumbersAndLettersOfTheAlphabet = () => {
  //hypen can also work on numbers
  //eg. /[0-5]/ matches any number between 0-5 inclding 0 and 5

  let quoteSample = "Blueberry 3.141592653s are delicious.";
  let myRegex = /[h-s2-6]/gi; // Change this line
  let result = quoteSample.match(myRegex); // Change this line
  console.log(result);
};
// matchNumbersAndLettersOfTheAlphabet();

const matchSingleCharactersNotSpecified = () => {
  //can create a negated character set using caret (^)
  //eg. /[^aeiou]/ this regex matches all chaaracters INCLUDING white space, ., !, @
  let quoteSample = "3 blind mice.";
  let myRegex = /[^aeiou0-9]/gi; // Change this line
  let result = quoteSample.match(myRegex); // Change this line
  console.log(result);
};
// matchSingleCharactersNotSpecified();

const matchCharactersThatOccurOneOrMoreTimes = () => {
  //use + operator
  let difficultSpelling = "Mississippi";
  let myRegex = /s+/g; // Change this line
  let result = difficultSpelling.match(myRegex);
  console.log(result); // will return Array ["ss","ss"] in the console
};
// matchCharactersThatOccurOneOrMoreTimes();

const matchCahractersThatOccurZeroOrMoreTimes = () => {
  //use * asterisk for zero or more times
  // Only change code below this line
  let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
  let chewieRegex = /Aa*/; // Change this line
  // Only change code above this line
  let result = chewieQuote.match(chewieRegex);
  console.log(result);
};
// matchCahractersThatOccurZeroOrMoreTimes();

const findCharactersWithLazyMatching = () => {
  //greedy match will find the longest possible part of a string that fits the regex pattern
  //lazy match will find the smallest possible part of the string that satisfies the regex pattern
  //default for matching is greedy
  let titanicString = "titanic";
  let greedyRegex = /t[a-z]*i/;
  //greedyRegex is a pattern that starts with t and ends with i and has the full alphabet inbetween zero or more times. will return "titani"
  let lazyRegex = /t[a-z]*?i/;
  //with the question mark after the character set with asterix will return "ti" because the next letter in the titanic string is i and lazy regex will find the smallest possible part of string that satisfies the regex pattern
  let greedyResult = titanicString.match(greedyRegex);
  let lazyResult = titanicString.match(lazyRegex);
  console.log(greedyResult, lazyResult);
  //
  //
  //
  let text = "<h1>Winter is coming</h1>";
  // let myRegex = /<.*>/; // this regex will return the entire opening and closing tag with text inside it beacuse of greedy match
  let myRegex = /<.*?>/; // this regex will match
  let result = text.match(myRegex);
  console.log(result);
};
// findCharactersWithLazyMatching();

const findOneOrMoreCriminalsInAHunt = () => {
  //aanswer is hidden in the variable
  //one or more instances is the + operator
};
// findOneOrMoreCriminalsInAHunt();

const matchBeginningStringPatterns = () => {
  //inside character set, caret omits characters /[^aeiou]/
  //outside of character set, caret used for searching patterns at beginning of string
  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/; // Change this line
  let result = calRegex.test(rickyAndCal);
  console.log(result); //will return true
};
// matchBeginningStringPatterns();

const matchEndingStringPatterns = () => {
  //can search for patterns at the end of the string using dollar sign at end of regex
  //dollar sign also called ANCHOR CHARACTER
  let caboose = "The last car on a train is the caboose";
  let lastRegex = /caboose$/; // Change this line
  let result = lastRegex.test(caboose);
  console.log(result); // will return true
};
// matchEndingStringPatterns();

const matchAllLettersAndNumbers = () => {
  //There is a shorthand for creating a character set
  // /[A-Za-z0-9_]+/ = /\w+/  *remember + operator is match characters that happen one or more times
  //dont' need to use the + operator in this example because of the .length method
  let quoteSample = "The five boxing wizards jump quickly.";
  let alphabetRegexV2 = /\w/g; // Change this line
  let result = quoteSample.match(alphabetRegexV2).length;
  console.log(result);
};
// matchAllLettersAndNumbers();

const MATCH_EVERYTHING_BUT_LETTERS_AND_NUMBERS = () => {
  //shorthand for non-alphanumeric characters = /\W/
  let quoteSample = "The five boxing wizards jump quickly.";
  let nonAlphabetRegex = /\W/g; // Change this line
  let result = quoteSample.match(nonAlphabetRegex).length;
  console.log(result);
};
// MATCH_EVERYTHING_BUT_LETTERS_AND_NUMBERS();

const MATCH_ALL_NUMBERS = () => {
  //shortcut for character class [0-9] is \d
  let movieName = "2001: A Space Odyssey";
  let numRegex = /\d/g; // Change this line
  // let result = movieName.match(numRegex); //// will console log Array(4) ["2", "0", "0", "1"]
  let result = movieName.match(numRegex)[0].length; //// will return 4
  console.log(result);
};
// MATCH_ALL_NUMBERS();

const MATCH_ALL_NON_NUMBERS = () => {
  //shorthand for [^0-9] is \D
  let movieName = "2001: A Space Odyssey";
  let noNumRegex = /\D/g; // Change this line
  let result = movieName.match(noNumRegex).length;
  console.log(result);
};
// MATCH_ALL_NON_NUMBERS();

const RESTRICT_POSSIBLE_USERNAMES = () => {
  //usernames can only use alphanumeric
  //cannot start with a number
  //only numbers in the username have to be at the end
  //username letters can be lowercase or uppercase
  //usernames have to be at least 2 chracters long.
  // let username = "JackOfAllTrades";
  let username = "A1";
  let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line

  // let result = userCheck.test(username);
  let result = username.match(userCheck);
  console.log(result);
};
RESTRICT_POSSIBLE_USERNAMES();

const MATCH_WHITESPACE = () => {
  // /\s/ matches whitespace, carriage return, tab, form feed and new line characters
  let sample = "Whitespace is important in separating words";
  let countWhiteSpace = /\s/g; // Change this line
  let result = sample.match(countWhiteSpace);
  console.log(result);
};
MATCH_WHITESPACE();

const MATCH_NONWHITESPACE_CHARACTERS = () => {
  // /\S/ matches all nonwhitespace characters
  //value returned by .length method should be 32
  let whiteSpace = "Whitespace. Whitespace everywhere!";
  let nonSpaceRegex = /\S/g;
  let result = whiteSpace.match(nonSpaceRegex).length;
  console.log(result);
};
MATCH_NONWHITESPACE_CHARACTERS();

const SPECIFY_UPPER_AND_LOWER_NUMBER_OF_MATCHES = () => {
  //use curly braces eg a{3,5}h to search for pattern "a" occuring 3 to 5 times
  let ohStr = "Ohhhhhhh no";
  let ohRegex = /^.h{3,6}\s../; // Change this line
  // let result = ohRegex.test(ohStr);
  let result = ohStr.match(ohRegex);
  console.log(result);
};
SPECIFY_UPPER_AND_LOWER_NUMBER_OF_MATCHES();

const SPECIFY_ONLY_THE_LOWER_NUMBER_OF_MATCHES = () => {
  //just do: a{3,}h  /// just keep the first number followed by a comma
  let haStr = "Hazzzzzzzzah";
  let haRegex = /..z{4,}../; // Change this line
  let result = haRegex.test(haStr);
  console.log(result); // will console log true as long as there's at least 4 z in that string
};
SPECIFY_ONLY_THE_LOWER_NUMBER_OF_MATCHES();

const SPECIFY_EXACT_NUMBER_OF_MATCHES = () => {
  //it's like the lower number of matches except without the comma
  //eg. a{3}h
  let timStr = "Timmmmmmber";
  let timRegex = /tim{4}ber/i; // Change this line
  // let result = timRegex.test(timStr);
  let result = timStr.match(timRegex);
  console.log(result);
};
SPECIFY_EXACT_NUMBER_OF_MATCHES();

const CHECK_ALL_OR_NONE = () => {
  // can specify the possible existence of element with question mark
  /*eg. let american = "color
        let british = "colour" 
        let regex = /colou$r/ /// the $ after the u will check if it's there in the string and match it if it does
        regex.test(american) would return true
        regex.test(british) would return true as well 
        */
  let favWord = "favorite";
  let favRegex = /favou?rite/; // Change this line
  let result = favRegex.test(favWord);
  console.log(result);
};
CHECK_ALL_OR_NONE();

const POSITIVE_AND_NEGATIVE_LOOKAHEADS = () => {
  //positive lookahead (?=...) will make sure the element in the search pattern is there BUT won't actually match it.

  //negative lookadhea (?!...) will look ahead to make sure element in the pattern is not there. Rest of tthe pattern is returned if negative lookahead part is not present

  const EXAMPLE_ONE = () => {
    let quit = "qu";
    let noquit = "qt";
    let regexP = /q(?=u)/;
    let regexN = /q(?!u)/;
    let lookAheadPos = quit.match(regexP); // will log "q"
    let lookAheadNeg = noquit.match(regexN); // will log "q"
    console.log(lookAheadPos, lookAheadNeg);
  };
  EXAMPLE_ONE();

  //practical use of lookaheads is to check two or more patterns in on string i.e a password checker
  //below is a simple password that looks for between 3-6 characters and at least one number

  const EXAMPLE_TWO = () => {
    let password = "abc123";
    let checkPassword = /(?=\w{3,6})(?=\D*\d)/;
    //first lookahead is checking for between 3 to 6 (including 3 and 6) alpha-numeric charcters
    //second lookahead is positive checking zero or more non-number at beginning of string (the \D*)  and then the rest having at least one number
    let result = checkPassword.test(password);
    console.log(result);
  };
  EXAMPLE_TWO();

  let sampleWord = "astronaut";
  let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
  //first Positive Look Ahead does positive check for any alpha-numeric character
  //second P.L.A checks if string has zero or more non-digits followed by 2 digits
  let answer = pwRegex.test(sampleWord);
  console.log(answer);
};
POSITIVE_AND_NEGATIVE_LOOKAHEADS();

const CHECK_FOR_MIXED_GROUPING_OF_CHARACTERS = () => {
  // want to find either Penguin or Pumpkin in string?
  // use RegEx: /P(engu|umpk)in/
  let myString = "Eleanor Roosevelt";
  let myRegex = /(Eleanor|Franklin D.) Roosevelt/; // Change this line
  let result = myRegex.test(myString); // Change this line
  console.log(result);
};
CHECK_FOR_MIXED_GROUPING_OF_CHARACTERS();

const REUSE_PATTERNS_USING_CAPTURE_GROUPS = () => {
  // capture groups are made by closing the regex pattern to be captured
  // the substring matched by the group is saved a temp var which can be accessed within same regex using \1
  /*
  let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"] 
*/

  //Capture group n amount of times
  const CAPTURE_GROUP_N_AMOUNT_OF_TIMES = () => {
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+) \1 \1(?!.)/; // Change this line
    let result = repeatNum.match(reRegex);
    console.log(result);
  };
  CAPTURE_GROUP_N_AMOUNT_OF_TIMES();
};
REUSE_PATTERNS_USING_CAPTURE_GROUPS();

const USE_CAPTURES_TO_SEARCH_AND_REPLACE = () => {
  // can search and replace text in a string using .replace()
  // eg. wrongText.replace(silverRegex, "blue")
  // - first param is the regex you want to search
  // - second param is the string to replace or a func to do something
  const EXAMPLE_ONE = () => {
    let wrongText = "The sky is silver.";
    let silverRegex = /silver/;
    let answer = wrongText.replace(silverRegex, "orange");
    console.log(answer);
  };
  EXAMPLE_ONE();

  // can also access capture groups with dollar signs. example below
  const EXAMPLE_TWO = () => {
    let result = "Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
    console.log(result); // this will flip the two strings
  };
  EXAMPLE_TWO();

  let str = "one two three";
  let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
  let replaceText = "$3 $2 $1"; // Change this line
  let result = str.replace(fixRegex, replaceText);
  console.log(result);
};
USE_CAPTURES_TO_SEARCH_AND_REPLACE();
