function isValidDivisor(x: string, str1: string, str2: string): boolean {
  let y: string = x;
  while (x.length < str1.length && x.length < str2.length) {
    x += y;
    console.log("for first time: ", x);
  }
  if (x === str1) {
    while (x.length < str2.length) {
      x += y;
      console.log(x);
    }
    if (x === str2) return true;
  }

  if (x === str2) {
    while (x.length < str1.length) {
      x += y;
      console.log(x);
    }
    if (x === str1) return true;
  }

  return false;
}

console.log(isValidDivisor("A", "AA", "AA"));
