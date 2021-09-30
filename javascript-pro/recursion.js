// for

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

pow(2, 3);

// recursion function

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
pow(2, 4);

//
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
pow(2, 5);
