let mark = {
  prabin: 90,
  rabin: 56,
  heman: 4,
};
for (let i = 0; i < Object.keys(mark).length; i++) {
  console.log(
    "the mark of" + Object.keys(mark)[i] + "are = " + mark[Object.keys(mark)[i]]
  );
}
