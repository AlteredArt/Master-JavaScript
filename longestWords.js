function findLongestWord(str) {
    var strSplit = str.split(" ")
    let longestword = 0;
  
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length > longestword) {
        longestword = strSplit[i].length
      }
    }
    return longestword;
  }
  //   findLongestWord("The quick brown fox jumped over the lazy dog")
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  
  function findTheLongestWord2(sen) {
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    const longestWord = sorted.filter((word) => word.length === sorted[0].length)
    return longestWord
  }
  
  console.log(findTheLongestWord2(" Waffles and, Chloe are so cool"))