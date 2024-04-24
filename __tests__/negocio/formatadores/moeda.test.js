import {formataBrasileiroParaDecimal,formataDecimalParaReal} from "../../../src/negocio/formatadores/moeda"


describe("negocio/formatadores/moeda", () => {
        
    describe("formaBrasileiroParaDecimal",() => {
        it("Deve retorna 8.59 quando valor for '8,59'",() => {
            const resultado = formataBrasileiroParaDecimal("8,59");
                expect(resultado).toBe(8.59)
            console.log(resultado)
        })
    })



    describe("formataDecimalParaReal", () =>{
        it("Deve retornar R$ 8,59 quando o valor for '8.59'",() =>{
            const resultado = formataDecimalParaReal(8.59);
            console.log(resultado)
            expect(resultado).toMatch(/R\$\s8,59/)
        })
    })
});