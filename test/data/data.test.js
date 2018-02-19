import {expect} from "chai"
import testData from "../../src/assets/ratings.js"

describe("Data testing",()=>{
    it("Data length",()=>{
        expect(testData.length).tobe(5);
    })
});
