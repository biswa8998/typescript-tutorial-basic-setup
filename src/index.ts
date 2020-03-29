import {add} from "./add";
import {multiply} from "./utils/multiply";

const welcomeString : string = "Hello World! Welcome";
console.log(welcomeString);

const a: number = 100;
const b: number = add(a,a);
console.log("add(a,a) => ", b);

const c: number = multiply(a,b);
console.log("multiply(a,b) => ", c);