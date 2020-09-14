'use strict'

const inquirer = require('inquirer')
jest.mock('inquirer')
 

const { mainMenu } = require('../src/lib/modules/mainmenu')

const viewMenu = require('../src/lib/modules/viewmenu')
jest.mock('../src/lib/modules/viewmenu')

const addMenu = require('../src/lib/modules/addmenu')
jest.mock('../src/lib/modules/addmenu')

    describe('Test main menu', () => {

        it('Should exit Exit as input', async () => {
            inquirer.prompt = jest.fn().mockResolvedValueOnce({selection: 'Exit'})
            const spy = jest.spyOn(process, 'exit').mockImplementation(() => {})
            await mainMenu()
            expect(spy).toHaveBeenCalledWith(0)
        })

        it('Should call viewMenu with View as input', async () => {
            inquirer.prompt = jest.fn()
                .mockResolvedValueOnce({selection: 'View'})
                .mockResolvedValueOnce({selection: 'Back'})
            const spy = jest.spyOn(viewMenu, 'viewMenu').mockImplementation(() => {})
            await mainMenu()
            await expect(spy).toHaveBeenCalled()
        })

        it('Should call addMenu with Add as input', async () => {
            inquirer.prompt = jest.fn()
                .mockResolvedValueOnce({selection: 'Add'})
                .mockResolvedValueOnce({selection: 'Back'})
            const spy = jest.spyOn(addMenu, 'addMenu').mockImplementation(() => {})
            await mainMenu()
            await expect(spy).toHaveBeenCalled()
        })

    })