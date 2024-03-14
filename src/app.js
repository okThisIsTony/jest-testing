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
  if (f % 3) {
    return "fizz";
  }
  if (f % 5) {
    return "buzz";
  }
  if ((f % 3, 5)) {
    return "fizzbuzz";
  } else {
    return f;
  }
}
