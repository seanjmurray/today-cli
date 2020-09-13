'use strict'

class inquirer {
    val = null
    prompt() {
        return Promise.resolve(this.val)
    }
}

module.exports = new inquirer()
