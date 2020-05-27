import { FocusTrap } from './focus-trap'

describe('FocusTrap', () => {
  describe('invalid arguments', () => {
    it('throws an error if no arguments are provided', () => {
      expect(() => new FocusTrap()).toThrow()
    })

    it('throws an error if an empty object is provided', () => {
      expect(() => new FocusTrap({})).toThrow()
    })

    it('throws an error if no containerDomNode is provided', () => {
      expect(() => new FocusTrap({ sourceDomNode: '#some-id' })).toThrow()
    })

    it('throws an error if no sourceDomNode is provided', () => {
      expect(() => new FocusTrap({ containerDomNode: '#some-id' })).toThrow()
    })
  })

  describe('when dom nodes do not exist', () => {
    it('can be instantiated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      expect(myFocusTrap.hiddenDomNodes).toEqual([])
    })

    it('can be activated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      expect(() => myFocusTrap.activate()).not.toThrow()
    })

    it('can be deactivated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      myFocusTrap.activate()
      expect(() => myFocusTrap.deactivate()).not.toThrow()
    })
  })

  describe('when dom nodes do exist', () => {
    beforeEach(() => {
      //     document
      //      /    \
      //    head   body
      //          /    \
      //  source-id   container-id
      //                   |
      //            close-button-id

      const triggerButton = document.createElement('button')
      triggerButton.id = 'source-id'
      document.body.appendChild(triggerButton)

      const focusTrapContainer = document.createElement('div')
      focusTrapContainer.id = 'container-id'
      document.body.appendChild(focusTrapContainer)

      const closeButton = document.createElement('button')
      closeButton.id = 'close-button-id'
      focusTrapContainer.appendChild(closeButton)
    })

    it('can be instantiated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      expect(myFocusTrap.hiddenDomNodes).toEqual([])
    })

    it('can be activated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      expect(() => myFocusTrap.activate()).not.toThrow()
    })

    it('can be deactivated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      myFocusTrap.activate()
      expect(() => myFocusTrap.deactivate()).not.toThrow()
    })
  })

  describe('when parent and sibling dom nodes do exist', () => {
    beforeEach(() => {
      //     document
      //      /    \
      //    head   body
      //             \
      //        _______parent-id_________
      //           /       |         \
      //  source-id   container-id   sibling-id
      //                   |
      //            close-button-id

      const parentContainer = document.createElement('div')
      parentContainer.id = 'parent-id'
      document.body.appendChild(parentContainer)

      const triggerButton = document.createElement('button')
      triggerButton.id = 'source-id'
      parentContainer.appendChild(triggerButton)

      const focusTrapContainer = document.createElement('div')
      focusTrapContainer.id = 'container-id'
      parentContainer.appendChild(focusTrapContainer)

      const closeButton = document.createElement('button')
      closeButton.id = 'close-button-id'
      focusTrapContainer.appendChild(closeButton)

      const siblingElement = document.createElement('div')
      siblingElement.id = 'sibling-id'
      parentContainer.appendChild(siblingElement)
    })

    it('can be instantiated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      expect(myFocusTrap.hiddenDomNodes).toEqual([])
    })

    it('can be activated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      expect(() => myFocusTrap.activate()).not.toThrow()
    })

    it('can be deactivated', () => {
      const myFocusTrap = new FocusTrap({
        containerDomNode: '#container-id',
        sourceDomNode: '#source-id',
      })
      myFocusTrap.activate()
      expect(() => myFocusTrap.deactivate()).not.toThrow()
    })
  })
})
