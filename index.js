import Emprestimo from "./src/Emprestimo.js";
import SubGerente from "./src/SubGerente.js";
import Caixa from "./src/Caixa.js";
import Gerente from "./src/Gerente.js";

// Criar os handlers
const caixa = new Caixa();
const subGerente = new SubGerente();
const gerente = new Gerente();

// Definir a ordem da cadeia
caixa.successor = subGerente;
subGerente.successor = gerente;

// Criar uma solicitação de empréstimo
const emprestimo = new Emprestimo({ quantia: 5500 });

// Enviar a solicitação pela cadeia
caixa.handleRequest({ request: emprestimo });