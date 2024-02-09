export default class Handler {
  constructor({ successor } = {}) {
    this.successor = successor;
  }

  handleRequest({ request }) {
    // Este método será implementando nas subclasses
  };
}
