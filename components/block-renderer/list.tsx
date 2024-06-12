import React from "react"
import { spacing } from "../../utils/spacing";

export const List = ({ children, attributes }) => {
  const { style } = attributes || {}
  return React.createElement('ul', {
    children,
    className: 'list-disc p-1',
    style: {
      paddingTop: spacing[style?.spacing?.padding?.top] || '0rem',
      paddingBottom: spacing[style?.spacing?.padding?.bottom] || '0rem',
      paddingLeft: spacing[style?.spacing?.padding?.left] || '0rem',
      paddingRight: spacing[style?.spacing?.padding?.right] || '0rem'
    }
  })
  // console.log(attributes);
  // return <ul className="list-disc p-1">{children}</ul>
}

export const ListItem = ({ attributes }) => {
  const { content } = attributes
  return React.createElement('li', {
    dangerouslySetInnerHTML: { __html: content }
  })
}