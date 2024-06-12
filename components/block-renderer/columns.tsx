import { inherits } from "util";
import { theme } from "../../utils/theme";

/** added these function also so tailwind can scan them add the used classes */
function getColors(textColor: string, backgroundColor: string) {
  let res = "";
  if (textColor) res += `text-${textColor}`;
  if (backgroundColor) res += `bg-${backgroundColor}`;
  return res;
}

export const Columns = ({ children, attributes }) => {
  const { textColor, backgroundColor } = attributes;
  return (
    <div className="w-full p-3"
      style={{
        backgroundColor: theme[backgroundColor] || 'inherit',
        color: theme[textColor] || 'inherit',
      }}
    >
      <div
        className={`max-w-7xl mx-auto flex`}
      >
        {children}
      </div>
    </div>
  );
};
