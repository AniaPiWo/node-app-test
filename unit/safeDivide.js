module.exports = (a, b) => {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    throw new Error("not a number");
  }

  return b === 0 ? 0 : a / b;
};
