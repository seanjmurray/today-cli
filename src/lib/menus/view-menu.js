'use strict'

const inquirer = require('inquirer')

const { view } = require('../prompts/menu-prompts')

const log = console.log

const viewMenu = async () => {
  const choice = await inquirer.prompt(view)
  const { selection } = choice

  switch (selection) {
    case 'Overall':

    case 'Events':

    case 'Tasks':

    case 'Notes':

    case 'Back':
      return Promise.resolve()
    default:
  }
}

module.exports.viewMenu = viewMenu
