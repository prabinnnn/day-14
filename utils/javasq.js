const passwordgenerate = (l) => {
  let charstr = "";
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < l; i++) {
    charstr += string.charAt(Math.floor(Math.random() * string.length));
  }

  return charstr;
};

const password = passwordgenerate(10);
console.log(password);
