import { IconName, IconPrefix } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { parseAttributes } from "../../utils";
import { fontSizeObj } from "../../utils/font";
import { spacing } from "../../utils/spacing";
import { theme } from "../../utils/theme";

export default function Paragraph({ attributes }) {
  const { content, textAlign, textColor, style, fontSize } = attributes;
  if (content.trim().startsWith('[icon') == true && content.trim().endsWith(']') == true) {
    const { name, prefix } = parseAttributes(content.trim());
    // console.log('|' + name + '|', '|' + prefix + '|')
    // return <i className={`${prefix} fa-${name}`}></i>
    return <FontAwesomeIcon
      icon={[prefix as IconPrefix, name as IconName]}
      style={{
        fontSize: fontSizeObj[fontSize] || '0.5rem',
        color: theme[textColor] || 'inherit',
        textAlign
      }}
    />
    // return React.createElement(FontAwesomeIcon, {
    //   icon: [prefix as IconPrefix, name as IconName],
    //   style: {
    //     fontSize: fontSizeObj[fontSize] || '0.5rem',
    //     color: theme[textColor] || 'inherit',
    //     textAlign
    //   }
    // })
    // <FontAwesomeIcon icon={}/>
  }

  const p = React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content,
    },
    className: `text-${textAlign || 'left'} m-0 p-0`,
    style: {
      color: theme[textColor] || 'inherit',
      paddingTop: spacing[style?.spacing?.padding?.top] || '0rem',
      paddingBottom: spacing[style?.spacing?.padding?.bottom] || '0rem',
      paddingLeft: spacing[style?.spacing?.padding?.left] || '0rem',
      paddingRight: spacing[style?.spacing?.padding?.right] || '0rem',
      marginTop: spacing[style?.spacing?.margin?.top] || '0rem',
      marginBottom: spacing[style?.spacing?.margin?.bottom] || '0rem',
      marginLeft: spacing[style?.spacing?.margin?.left] || '0rem',
      marginRight: spacing[style?.spacing?.margin?.right] || '0rem'
    }
  });
  return <div className="max-w-5xl mx-auto">{p}</div>;
}