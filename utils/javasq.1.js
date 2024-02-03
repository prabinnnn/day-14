const passwordgenerate = (l) => {
  const charstr = "";
  const count = 0;
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i <= l; i++) {
    charstr += string.charAt(Math.floor(Math.random() * string.length));
    count++;
  }
  return charstr;
};
passwordgenerate();
