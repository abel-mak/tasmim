import { spacing } from "../../utils/spacing";
import { theme } from "../../utils/theme";

export const Separator = ({ attributes }) => {
  const { backgroundColor, style } = attributes;
  const { bottom, top } = style?.spacing?.margin || {};
  // console.log(style)
  return (
    <div>
      <hr
        style={{
          color: theme[backgroundColor] || "inherit",
          marginTop: spacing[top] || '0rem' ,
          marginBottom: spacing[bottom] || '0rem',
        }}
        className="my-4"
      ></hr>
    </div>
  );
};
