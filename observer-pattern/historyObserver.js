class HistoryObserver {
    constructor() {
        this.colorHistory = []
    }

    update(model) {
        this.colorHistory.unshift(model.color[0].toUpperCase())

        let message = 'As cinco cores mais recente são: '

        for (let i = 0; i < 5; i++) {
            if(this.colorHistory[i]) {
                message += this.colorHistory[i] + ', '
            }
        }
        console.log(message)
    }
}