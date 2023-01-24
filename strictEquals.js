export const strictEquals = (a, b) => {
  let result = "";
  if (isNaN(a)) {
    result = "false";
  } else {
    switch (a) {
      case 0:
        result = "true";
        break;

      case -0:
        result = "true";
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
