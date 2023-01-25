import { strictEquals } from "./strictEquals.js";

console.log("La primera comparación: 1, 1");
console.log(strictEquals(1, 1));
console.log("La segunda comparación: NaN, NaN");
console.log(strictEquals(NaN, NaN));
console.log("La tercera comparación: 0, -0");
console.log(strictEquals(0, -0));
console.log("La cuarta comparación: -0, 0");
console.log(strictEquals(-0, 0));
console.log("La quinta comparación: 1, '1'");
console.log(strictEquals(1, "1"));
console.log("La sexta comparación: true, false");
console.log(strictEquals(true, false));
console.log("La séptima comparación: false, false");
console.log(strictEquals(false, false));
console.log("La octava comparación: water, oil");
console.log(strictEquals("Water", "oil"));
