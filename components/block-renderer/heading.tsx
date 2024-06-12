import React from "react"
import { getFontSizeFromLevel } from "../../utils/getFontSizeFromLevel"

export const Heading = ({textAlign, content, level = 2}) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: {__html: content},
    className: `font-heading max-w-5xl mx-auto my-5 text-${textAlign || 'left'} ${getFontSizeFromLevel(level)}`
  })
  return tag
}