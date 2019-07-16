import {Utilities} from "../../src/utilities/Utilities";

describe("Utilities.isAmbiguous", () => {
    let A = Utilities.isAmbiguous

    test("An empty string should not be ambiguous with anything", () => {
        expect(A("", '.')).toBe(false)
    })

    test("A string with no matches should instantly return false", () => {
        expect(A("abc", "def")).toBe(false)
    })

    test("A string with repeating characters cannot be ambiguous", () => {
        expect(A("c c c c c c c c", 'c')).toBe(false)
        expect(A("c a c a c a c a", 'c')).toBe(false)
    })

    test("A regex with multiple tests should return true if there's any ambiguity", () => {
        expect(A("c a", 'c|a')).toBe(true)
        expect(A("c b", 'c|a')).toBe(false)
    })

    test("It can match with true regexes", () => {
        expect(A("5 6", /\d+/g)).toBe(true)
        expect(A("5 5", /\d+/g)).toBe(false) // No ambiguity, since they're both the same
        expect(A("5 55", /\d+/g)).toBe(true)

        expect(A("5 abc2", /[^\w]\d+[^\w]/g)).toBe(false)
        expect(A("5 2abc", /[^\w]\d+[^\w]/g)).toBe(false)
        expect(A("5 2abc2", /[^\w]\d+[^\w]/g)).toBe(false)

    })

})
