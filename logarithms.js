function logarithms(n) {
  while (n > 1) {
    console.log(n);
    n = n / 2;
  }
  console.log("Done");
}

logarithms(16);

function anotherLogN(n) {
  if (n <= 1) {
    console.log("Done");
    return;
  }
  console.log(n);
  anotherLogN(n / 2);
}
anotherLogN(16);
