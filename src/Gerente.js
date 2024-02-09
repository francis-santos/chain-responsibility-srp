import Handler from "./Handler.js";

export default class Gerente extends Handler {
  handleRequest({ request }) {
    console.log(request.quantia, "O empréstimo foi aprovado pelo Gerente.");
  };
}
