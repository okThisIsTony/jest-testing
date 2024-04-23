import { getTimestamp } from "./date";

export function add(p1, p2) {
  return p1 + p2;
}

export function subtract(w1, w2) {
  return w1 - w2;
}

export function multiply(t1, t2) {
  return t1 * t2;
}

export function divide(g1, g2) {
  return g1 / g2;
}

export function fizzbuzz(f) {
  if (f % 15 === 0) {
    return "fizzbuzz";
  }
  if (f % 3 === 0) {
    return "fizz";
  }
  if (f % 5 === 0) {
    return "buzz";
  } else {
    return f;
  }
}

export function fizzbuzzTo(lastNumber) {
  const list = [];
  for (let i = 1; i <= lastNumber; i++) {
    const result = fizzbuzz(i);
    list.push(result);
  }
  console.log(list);
  return list;
}

export function getUser() {
  return { name: "Yony", accountStart: getTimestamp() };
}
