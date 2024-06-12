import { theme } from "../../utils/theme"

export const Separator = ({ attributes }) => {
  const { backgroundColor, style } = attributes;
  const { bottom, top } = style?.margin || {};

  return <div>
    <hr style={{ color: theme[backgroundColor] || 'inherit' }} className='my-4'></hr>
  </div>
}