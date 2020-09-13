'use strict'

class Prompts {

    main = {
        type: 'list',
        name: 'selection',
        message: 'Welcome, what would you like to do?',
        choices: [
          'View',
          'Add',
          'Exit'
        ]
      }
    
    view = {
        type: 'list',
        name: 'selection',
        message: 'What would you like to see?',
        choices: [
            'Overall',
            'Events',
            'Tasks',
            'Notes',
            'Back'
        ]
    }

    add = {
        type: 'list',
        name: 'selection',
        message: 'What would you like to add',
        choices: [
            'Event',
            'Task',
            'Note',
            'Back'
        ]
    }
}

module.exports = new Prompts()
