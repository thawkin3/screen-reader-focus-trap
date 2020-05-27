import React, { Component, createRef } from 'react'
import { FocusTrap } from './focus-trap'

export default {
  title: 'Focus Trap',
}

class DefaultBehaviorExample extends Component {
  state = {
    focusTrapContentIsVisible: false,
  }

  triggerRef = createRef()
  focusTrapRef = createRef()

  focusTrapManager = null

  showFocusTrapContent = () => {
    this.setState({ focusTrapContentIsVisible: true }, () => {
      this.focusTrapManager = new FocusTrap({
        containerDomElement: this.focusTrapRef.current,
        sourceDomElement: this.triggerRef.current,
      })
      this.focusTrapManager.activate()
    })
  }

  hideFocusTrapContent = () => {
    this.focusTrapManager.deactivate()
    this.setState({ focusTrapContentIsVisible: false })
  }

  render() {
    const { focusTrapContentIsVisible } = this.state
    return (
      <>
        <div>
          <button
            id="activate-default"
            onClick={this.showFocusTrapContent}
            ref={this.triggerRef}
          >
            activate trap
          </button>
        </div>
        {focusTrapContentIsVisible && (
          <div
            id="container-default"
            ref={this.focusTrapRef}
            style={{
              border: '1px solid #000',
              padding: '10px 20px',
              marginTop: '20px',
            }}
            tabIndex={-1}
          >
            <p>
              Here is a focus trap <a href="#">with</a> <a href="#">some</a>{' '}
              <a href="#">focusable</a> parts.
            </p>
            <div>
              <button
                id="deactivate-default"
                onClick={this.hideFocusTrapContent}
              >
                deactivate trap
              </button>
            </div>
          </div>
        )}
      </>
    )
  }
}

export const defaultBehavior = () => <DefaultBehaviorExample />
