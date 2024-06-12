
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
  const { width } = attributes || {}
  const myClass = `flex-${parseInt(width)}`;

  return <div className={`${getFlex(width)}`} style={{color: 'inherit'}}>{children}</div>
}