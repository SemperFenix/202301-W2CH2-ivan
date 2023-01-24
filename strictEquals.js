export const strictEquals = (a, b) => {
  let result = "";
  if (isNaN(a)) {
    result = "false";
  } else {
    switch (a) {
      case 0:
        if (Object.is(b, 0) || Object.is(b, -0)) {
          result = "true";
        } else {
          result = "false";
        }

        break;

      case -0:
        if (Object.is(b, 0) || Object.is(b, -0)) {
          result = "true";
        } else {
          result = "false";
        }

        break;

      default:
        if (Object.is(a, b)) {
          result = "true";
        } else {
          result = "false";
        }

        break;
    }
  }

  return console.log(result);
};
