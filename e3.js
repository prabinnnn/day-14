let mark = {
  prabin: 90,
  rabin: 56,
  heman: 4,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "the marks of" +
      Object.keys(marks)[i] +
      "are" +
      marks(Object.keys(marks)[i])
  );
}
