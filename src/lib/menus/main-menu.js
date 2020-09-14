'use strict'

const inquirer = require('inquirer')

const { main } = require('../prompts/menu-prompts')
const { viewMenu } = require('./view-menu')
const { addMenu } = require('./add-menu')

const log = console.log

const mainMenu = async () => {
  const choice = await inquirer.prompt(main)
  const { selection } = choice

  if (selection === 'View') {
    await viewMenu()
    mainMenu()
  } else if (selection === 'Add') {
    await addMenu()
    mainMenu()
  } else {
    log('See you soon')
    process.exit(0)
  }
}

module.exports.mainMenu = mainMenu
