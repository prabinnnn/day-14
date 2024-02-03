const emailvalidation = (string) => {
  str = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}$/g;
  return str.test(string);
};
const newemail = emailvalidation("prabinbhandari402@gmail.com");
console.log(newemail);
