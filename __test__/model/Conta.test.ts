import { Conta } from "../../src/model/Conta";


describe("Conta", () => {

    test("saque Sucesso", async () =>{
       const conta: Conta  = new Conta("123",100.0);
       conta.sacar(20.0);
       expect(conta.saldo).toBe(80);
       
    } );

    test("deposito sucesso", async () =>{
        const conta: Conta  = new Conta("123",5000.0);
        conta.depositar(200.0);
       expect(conta.saldo).toBe(5200.0);
    })

    test("sacar com valor zerado", async () => {
        const conta: Conta = new Conta("123456", 5000.0);
        expect(() => { conta.sacar(-50); }).toThrow("valor não pode ser igual ou menor que zero");
      });

      test("depositar com valor zerado", async () => {
        const conta: Conta = new Conta("123456", 5000.0);
        expect(() => { conta.sacar(0); }).toThrow("valor não pode ser igual ou menor que zero");
      });

    test("Sacar com valor negativo", async () => {
        const conta:Conta = new Conta("123456", 5000);
        expect(() => { conta.sacar(-50); }).toThrow("valor não pode ser igual ou menor que zero");
    });

    test("depositar com valor negativo", async () => {
        const conta: Conta = new Conta("123456", 5000.0);
        expect(() => { conta.depositar(-5.0); }).toThrow("valor não pode ser igual ou menor que zero");
      });

      test("sacar valor acima do saldo", async () => {
        const conta: Conta = new Conta("123456", 199.0);
        expect(() => { conta.sacar(200.0); }).toThrow("saldo indisponível para operação");
      });
      
      
})