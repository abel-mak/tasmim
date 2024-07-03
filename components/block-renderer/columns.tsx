import { inherits } from "util";
import { spacing } from "../../utils/spacing";
import { theme } from "../../utils/theme";

/** added these function also so tailwind can scan them add the used classes */
function getColors(textColor: string, backgroundColor: string) {
  let res = "";
  if (textColor) res += `text-${textColor}`;
  if (backgroundColor) res += `bg-${backgroundColor}`;
  return res;
}

export const Columns = ({ children, attributes }) => {
  const { textColor, backgroundColor, align, style } = attributes;
  return (
    <div className="w-full"
      style={{
        backgroundColor: theme[backgroundColor] || 'inherit',
        color: theme[textColor] || 'inherit',
        marginTop: spacing[style?.spacing?.margin?.top] || '0rem',
        marginBottom: spacing[style?.spacing?.margin?.bottom] || '0rem',
        marginLeft: spacing[style?.spacing?.margin?.left] || '0rem',
        marginRight: spacing[style?.spacing?.margin?.right] || '0rem'
      }}
    >
      <div
        className={`${(align == 'full') ? '' : 'max-w-7xl'} mx-auto flex`}
      >
        {children}
      </div>
    </div>
  );
};
