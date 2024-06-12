import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { parseAttributes } from "../../utils";
import { spacing } from "../../utils/spacing";

export default function Paragraph({ attributes }) {
  const { content, textAlign, textColor, style } = attributes;
  if (content.trim().startsWith('[icon') == true && content.trim().endsWith(']') == true) {
    const { name, prefix } = parseAttributes(content.trim());
    console.log('|' + name + '|', '|' + prefix + '|')
    // return <i className={`${prefix} fa-${name}`}></i>
    return <FontAwesomeIcon icon={[prefix, `fa-${name}`]}/>
  }

  const p = React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content,
    },
    className: `text-${textAlign || 'left'} mx-0 my-4 p-0`,
    color: 'inherit',
    style: {
      paddingTop: spacing[style?.spacing?.padding?.top] || '0rem',
      paddingBottom: spacing[style?.spacing?.padding?.bottom] || '0rem',
      paddingLeft: spacing[style?.spacing?.padding?.left] || '0rem',
      paddingRight: spacing[style?.spacing?.padding?.right] || '0rem'
    }
  });
  return p;
}