import {mult} from "./01";
import exp from "constants";

//data
let a: number = 1;
let b: number = 2;
let c: number = 3;

test('multiply should be correct', ()=> {
    //action
    const result1 = mult(a,b);
    const result2 = mult(a,c);
    const result3 = mult(b,c);

    //expectred result
    expect(result1).toBe(2);
    expect(result2).toBe(3);
    expect(result3).toBe(6);
})

