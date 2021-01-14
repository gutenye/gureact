import React from 'react'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { BackToTop, TableOfContents } from 'storybook-docs-toc'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  docs: {
    container: (props) => (
      <React.Fragment>
        <TableOfContents />
        <DocsContainer {...props} />
        <BackToTop />
      </React.Fragment>
    ),
  },
}
