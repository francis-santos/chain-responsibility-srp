import Handler from "./Handler.js";

export default class Caixa extends Handler {
  handleRequest({ request }) {
    if (request.quantia <= 1000) {
      console.log(request.quantia, "O empréstimo foi aprovado pelo Caixa.");
    } else {
      console.log(request.quantia, "O caixa não pode aprovar empréstimos acima de R$ 1.000,00.");
      // Passar a solicitação para o próximo handler, se houver
      if (this.successor) {
        this.successor.handleRequest({ request });
      }
    }
  };
}
