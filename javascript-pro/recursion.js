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

//
let company = {
  sales: [
    {
      name: "john",
      salary: 3000,
    },
    { name: "bob", salary: 2000 },
  ],

  department: {
    sites: [
      {
        name: "mike",
        salary: 4000,
      },
      { name: "brian", salary: 1000 },
    ],
    internals: [
      {
        name: "kim",
        salary: 3000,
      },
      { name: "lee", salary: 2000 },
    ],
  },
};

function sumSalaries(department) {}

sumSalaries(company);
