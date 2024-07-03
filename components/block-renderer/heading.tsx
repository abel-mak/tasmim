import React from "react"
import { getFontSizeFromLevel } from "../../utils/getFontSizeFromLevel"
import { theme } from "../../utils/theme"

export const Heading = ({ attributes, className='' }) => {
  const { textAlign, content, level = 2, textColor } = attributes
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `${className} font-heading max-w-5xl mx-auto my-5 text-${textAlign || 'left'} ${getFontSizeFromLevel(level)}`,
    style: {
      color: theme[textColor] || 'inherit'
    }
  })
  return tag
}