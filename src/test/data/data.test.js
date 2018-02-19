/**
 * Created by songwang on 6/7/17.
 */

import {expect} from "chai"
import testData from "../assets/ratings.js"

describe("Data testing",()=>{
    it("Data length",()=>{
        expect(testData.length).tobe(5);
    })
});
