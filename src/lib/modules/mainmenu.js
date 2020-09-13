'use strict'

const inquirer = require('inquirer')

const { main } = require('../promps')
const { viewMenu } = require('./viewmenu')
const { addMenu } = require('./addmenu')

const log = console.log

const mainMenu = async () => {
    const choice = await inquirer.prompt(main)
    const { selection } = choice
    
      if (selection === 'View'){
          console.log('here')
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

  module.exports.mainMenu = mainMenu;
