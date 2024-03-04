function mergeAlternately(word1: string, word2: string): string {
  const len1: number = word1.length;
  const len2: number = word2.length;
  let result: string = "";

  if (len1 === 0) {
    if (len2 === 0) {
      return "";
    } else {
      return word2;
    }
  } else {
    if (len2 === 0) return word1;
  }
  let i = 0;
  let j = 0;

  while (i < len1 && j < len2) {
    result += word1[i] + word2[j];
    i++;
    j++;
  }

  if (len1 > len2) result += word1.slice(i, len1);
  else result += word2.slice(j, len2);

  return result;
}

// function mergeAlternately(word1: string, word2: string): string {
//   // base case
//   if (word1 === '' || word2 === '') return word1 + word2

//   // recurse
//   return word1[0] + word2[0] + mergeAlternately(word1.slice(1), word2.slice(1))
// }
