import React from 'react'
import './Toolbar.scss'

export default ({ children }) =>
  <header className="mdc-toolbar">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        <a href="#" class="material-icons">
          menu
        </a>
        <span className="mdc-toolbar__title">
          {children}
        </span>
      </section>
    </div>
  </header>
