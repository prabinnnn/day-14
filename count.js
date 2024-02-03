const countnumber = (string, tagaretedchr) => {
  vcount = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === tagaretedchr) vcount++;
  }
  return vcount;
};
const newcountnumber = countnumber("w3resource.com", "o");
console.log(newcountnumber);
