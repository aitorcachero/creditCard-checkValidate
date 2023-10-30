export default function validateNum(num) {
  const numArray = num.split('').slice(0, 15).reverse();

  const digit = num.split('')[num.split('').length - 1];

  const firstStep = numArray.map((x, i) => {
    return i % 2 === 0 ? (x * 2).toString() : x;
  });

  const secondStep = firstStep.map((x) => {
    return x.length > 1
      ? x
          .split('')
          .reduce((v, a) => +v + +a)
          .toString()
      : x;
  });

  const lastStep = (secondStep.reduce((v, a) => +v + +a) * 9)
    .toString()
    .split('')
    .reverse()[0];

  const validate = lastStep === digit;

  return validate ? './yes.png' : './no.png';
}
