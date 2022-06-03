class ConsoleObserver {
    constructor() {

    }

    update(model) {
        console.log(`Número observado: ${model.number} - Cor Observada: ${model.color.toUpperCase()}`)
    }
}