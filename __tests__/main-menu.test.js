'use strict'

const inquirer = require('inquirer')
jest.mock('inquirer')

const { mainMenu } = require('../src/lib/menus/main-menu')

const viewMenu = require('../src/lib/menus/view-menu')
jest.mock('../src/lib/menus/view-menu')

const addMenu = require('../src/lib/menus/add-menu')
jest.mock('../src/lib/menus/add-menu')

describe('Test main menu', () => {
  it('Should exit with Exit as input', async () => {
    inquirer.prompt = jest.fn().mockResolvedValueOnce({ selection: 'Exit' })
    const spy = jest.spyOn(process, 'exit').mockImplementation(() => {})
    await mainMenu()
    expect(spy).toHaveBeenCalledWith(0)
  })

  it('Should call viewMenu with View as input', async () => {
    inquirer.prompt = jest.fn()
      .mockResolvedValueOnce({ selection: 'View' })
      .mockResolvedValueOnce({ selection: 'Back' })
    const spy = jest.spyOn(viewMenu, 'viewMenu').mockImplementation(() => {})
    await mainMenu()
    await expect(spy).toHaveBeenCalled()
  })

  it('Should call addMenu with Add as input', async () => {
    inquirer.prompt = jest.fn()
      .mockResolvedValueOnce({ selection: 'Add' })
      .mockResolvedValueOnce({ selection: 'Back' })
    const spy = jest.spyOn(addMenu, 'addMenu').mockImplementation(() => {})
    await mainMenu()
    await expect(spy).toHaveBeenCalled()
  })
})
