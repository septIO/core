import {ModelProperty} from "../../src/property/ModelProperty";
import {AmbiguityException} from "../../src/exceptions/AmbiguityException";
import {Model} from "../../src/model/Model";

function t(str: string, expected: string, not?: boolean) {
    if (not)
        return expect(ModelProperty.deserialize(str).datatype).not.toBe(expected)
    return expect(ModelProperty.deserialize(str).datatype).toBe(expected)
}

describe("Property", () => {

    describe("ModelProperty", () => {
        describe("ModelProperty parameter datatype predictor", () => {
            it("Can predict 'timestamp'", () => {
                t("created_at", "timestamp")
                t("last_seen_at", "timestamp")
            })

            it("can predict 'string'", () => {
                t("name", "string")
                t("address", "string")
                t("ip_address", "string")
                t("title", "string")
            })

            it("can predict 'int32'", () => {
                t("owner_id", "uint32")
            })
        })

    })
    test("tester", () => {
        ModelProperty.deserialize("model index, nullable, unique")
        //expect(() => ModelProperty.deserialize("model index true false")).toThrow(AmbiguityException)
        //expect(ModelProperty.deserialize("model index").index).toBe(true)
        //expect(ModelProperty.deserialize("model index false").index).toBe(false)
    })
})
