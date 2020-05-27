import { FocusTrap } from './focus-trap'

describe('FocusTrap', () => {
  it('can be instantiated', () => {
    const myFocusTrap = new FocusTrap()
    expect(myFocusTrap.hiddenDomNodes).toEqual([])
  })
})
