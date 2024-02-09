# Padrão de Projeto Chain of Responsibility e o Single Responsibility Principle (SRP)

Este é um exemplo de implementação do padrão de projeto Chain of Responsibility e o Single Responsibility Principle (SRP) para lidar com solicitações de empréstimo em uma agência bancária.

## Descrição

O padrão de projeto Chain of Responsibility é um padrão comportamental que permite que uma solicitação seja tratada por vários objetos sem que o remetente conheça explicitamente quem são os destinatários. Ele é frequentemente utilizado para encadear objetos receptores e dar a eles a oportunidade de lidar com uma solicitação ou passá-la adiante na cadeia.

Neste exemplo, criamos uma cadeia de responsabilidade para lidar com solicitações de empréstimo de clientes em uma agência bancária. Os handlers são representados pelas classes `Caixa`, `SubGerente` e `Gerente`, cada um com uma capacidade diferente de aprovar empréstimos. A solicitação é enviada pela cadeia até que seja aprovada ou rejeitada.

## Estrutura do Código

- `Handler`: Classe base que define o método `handleRequest`.
- `Caixa`, `SubGerente`, `Gerente`: Classes que implementam o método `handleRequest` para lidar com solicitações de empréstimo.
- `Emprestimo`: Classe que representa a solicitação de empréstimo do cliente.

O princípio do Single Responsibility (SRP) é seguido na implementação das classes `Caixa`, `SubGerente` e `Gerente`, onde cada uma tem a responsabilidade única de lidar com uma categoria específica de solicitações de empréstimo.

## Uso

1. Instale o Node.js em sua máquina, se ainda não estiver instalado.
2. Clone este repositório.
3. Execute o script `index.js` para ver a cadeia de responsabilidade em ação.

```bash
node index.js
```

## Conclusão

Ao aplicar o padrão Chain of Responsibility, você está criando uma cadeia de objetos que podem manipular uma solicitação de forma incremental. Cada objeto na cadeia tem a oportunidade de lidar com a solicitação ou passá-la para o próximo objeto na cadeia. Ao projetar cada elo da cadeia de forma a aderir ao SRP, você garante que cada objeto tenha uma única responsabilidade bem definida.

Isso ajuda a evitar que uma classe se torne sobrecarregada com várias responsabilidades e promove a reutilização de código, já que cada elo da cadeia pode ser facilmente substituído ou estendido sem afetar os outros elos. 

Assim, combinar o padrão Chain of Responsibility com o princípio SRP pode resultar em um código mais flexível, modular e fácil de dar manutenção.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar bugs, sugerir melhorias ou propor novos recursos.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
