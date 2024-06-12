import { theme } from "../../utils/theme";

export const PostTitle = ({ content, textAlign, textColor }) => {
  return (
    <h1
      className={`text-${textAlign || "center"} text-4xl`}
      style={{ color: theme[textColor] || "white" }}
    >
      {content}
    </h1>
  );
};
