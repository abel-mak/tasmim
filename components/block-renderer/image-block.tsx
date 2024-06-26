function alignToJustify(align: string) {
  switch (align) {
    case 'left':
      return 'justify-start';
    case 'right':
      return 'justify-end';
    case 'center':
      return 'justify-center'
    default:
      return 'justify-start';
  }
}


export const ImageBlock = ({ attributes }) => {
  const { url, width, height, align } = attributes;

  return <div className={`flex ${alignToJustify(align)}`}>
    <img src={url} alt="" width={width} height={height} />
  </div>
}