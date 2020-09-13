'use strict'

const inquirer = require('inquirer')
jest.mock('inquirer')
 

const { mainMenu } = require('../src/lib/modules/mainmenu')
const viewMenu = require('../src/lib/modules/viewmenu')


    describe('Test main menu', () => {

        it('Should call viewMenu with View as input', async () => {
            inquirer.prompt = jest.fn().mockResolvedValue({selection: 'Exit'})
            const spy = jest.spyOn(process, 'exit').mockImplementation(() => {})
            await mainMenu()
            expect(spy).toHaveBeenCalledWith(0)
        })

    })