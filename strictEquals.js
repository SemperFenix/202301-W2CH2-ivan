export const strictEquals = (a, b) => {
  let result = "";
  if (isNaN(a)) {
    result = false;
  } else if (Object.is(a, 0) || Object.is(a, -0)) {
    if (Object.is(b, -0) || Object.is(b, 0)) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = Object.is(a, b);
  }

  return console.log(result);
};
