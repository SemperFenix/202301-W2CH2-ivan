import { strictEquals } from "./strictEquals.js";

console.log("La primera comparación: 1, 1");
strictEquals(1, 1);
console.log("La segunda comparación: NaN, NaN");
strictEquals(NaN, NaN);
console.log("La tercera comparación: 0, -0");
strictEquals(0, -0);
console.log("La cuarta comparación: -0, 0");
strictEquals(-0, 0);
console.log("La quinta comparación: 1, '1'");
strictEquals(1, "1");
console.log("La sexta comparación: true, false");
strictEquals(true, false);
console.log("La séptima comparación: false, false");
strictEquals(false, false);
console.log("La octava comparación: water, oil");
strictEquals("Water", "oil");
