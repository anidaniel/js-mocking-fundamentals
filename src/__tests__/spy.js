const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  //with jest.spyOn(obj, 'methodCall') we are no longer reqruied to keep
  //track of original implementation as it restores it.
  jest.spyOn(utils, 'getWinner') 
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  utils.getWinner.mockRestore() //spyOn replaces it with empty mock function 
})
