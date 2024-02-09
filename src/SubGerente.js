import Handler from "./Handler.js";

export default class SubGerente extends Handler {
  handleRequest({ request }) {
    if (request.quantia <= 5000) {
      console.log(request.quantia, "O empréstimo foi aprovado pelo Sub Gerente.");
    } else {
      console.log(request.quantia, "O sub gerente não pode aprovar empréstimos acima de R$ 5.000,00.");
      // Passar a solicitação para o próximo handler, se houver
      if (this.successor) {
        this.successor.handleRequest({ request });
      }
    }
  };
}
