import React from "react";
import { spacing } from "../../utils/spacing";

function getFlex(width: string) {
  switch (parseInt(width)) {
    case 33:
      return 'flex-33';
    case 66:
      return 'flex-66';
    case 25:
      return 'flex-25';
    case 100:
      return 'flex-100';
    default:
      return 'flex-100';

  }
}

export const Column = ({ children, attributes }) => {
  const { width, style } = attributes || {};
  // const { style } = spacing || {};
  // const myClass = `flex-${parseInt(width)}`;

  return React.createElement('div', {
    className: `${getFlex(width)} basis-full`,
    children,
    style: {
      color: 'inherit',
      paddingTop: spacing[style?.spacing?.padding?.top] || '0rem',
      paddingBottom: spacing[style?.spacing?.padding?.bottom] || '0rem',
      paddingLeft: spacing[style?.spacing?.padding?.left] || '0rem',
      paddingRight: spacing[style?.spacing?.padding?.right] || '0rem',
    }
  })
  // return <div className={`${getFlex(width)}`} style={{}}>{children}</div>
}