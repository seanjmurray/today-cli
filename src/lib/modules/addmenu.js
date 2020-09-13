'use strict'

const inquirer = require('inquirer')

const { add } = require('../promps')

const log = console.log

const addMenu = async () => {
    const choice = await inquirer.prompt(add)
      const { selection } = choice

      switch (selection) {
        case 'Event':

        case 'Task':

        case 'Note':

        case 'Back':
            return
        default:

      }
  }

module.exports.addMenu = addMenu;
