module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  for (let item of bracketsConfig) {
    brackets[item[0]] = item[1];
  }

  let stek = [];
  for (let i = 0; i < str.length; i++) {
    let lastItem = stek[stek.length-1];
    let current = str[i];
    
    if (current in brackets) {
      (current == brackets[current]) && (current == lastItem) ? 
          stek.pop() : stek.push(current);
    } else {
      if (stek.length === 0) {
        return false;
      }
      brackets[lastItem] == current ? stek.pop() : false;
    }
  } 
    return stek.length === 0;
}