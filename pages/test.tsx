export default function Test() {
  let z = 12;
  let i = 18;
  let begin = i / 2 + 2;

  for (let a = 2; a <= i; a += 2) {
    let str = "";
    let space = "";
    let sum = "";

    for (let b = 5; b < a; b++) {
      let b = "*";
      str = str + b.toString();
    }
    for (let f = 0; f < begin; f++) {
      let f = " ";
      space = space + f.toString();
    }
    begin = begin - 1;
    sum = space + str;
    console.log(sum);
  }

  let begin2 = i / 2;

  for (let a = 2; a <= i; a += 2) {
    let str = "";
    let space = "";
    let sum = "";

    for (let b = 1; b < a; b++) {
      let b = "*";
      str = str + b.toString();
    }
    for (let f = 0; f < begin2; f++) {
      let f = " ";
      space = space + f.toString();
    }
    begin2 = begin2 - 1;
    sum = space + str;
    console.log(sum);
  }

  for (let a = 0; a <= 5; a++) {
    let base = "";
    let Bspace = "";
    for (let h = 0; h < 3; h++) {
      let h = "|";
      base = base + h.toString();
    }
    for (let k = 0; k < 8; k++) {
      let k = " ";
      Bspace = Bspace + k.toString();
    }

    console.log(Bspace + base);
  }
}
