import {expect} from "chai"
import testData from "../../src/assets/products"

describe("Data testing",()=>{
    it("Data length",()=>{
        expect(testData.length).tobe(8);
    })
});
