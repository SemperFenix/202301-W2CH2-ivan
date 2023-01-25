export const strictEquals = (a, b) => {
  let result = "";

  result = Object.is(a, NaN)
    ? (result = false)
    : (result =
        Object.is(a, 0) && Object.is(b, -0)
          ? (result = true)
          : (result =
              Object.is(a, -0) && Object.is(b, 0)
                ? (result = true)
                : (result = Object.is(a, b)
                    ? (result = true)
                    : (result = false))));

  return result;
};
