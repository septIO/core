import {ModelProperty, ModelPropertyException} from "../../src/property/ModelProperty";

describe("Base properties", () => {
    it("Should be able to be instantiated with no args", () => expect(() => new ModelProperty()).not.toThrow())
    it("Should throw an error if trying to deserializing an empty string", () => {
        expect(() => ModelProperty.deserialize("")).toThrow()
    })
    it("Should be able to deserialize a property with no args", () => {
        let m = ModelProperty.deserialize("test")
        expect(m.name).toBe("test")
        expect(m.datatype).toBe("string")
        expect(m.length).toBe(250)
        expect(m.defaultValue).toBe(null)
    })
})
