function alignToJustify(align: string) {
  switch (align) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    case 'center':
      return 'center'
    default:
      return 'start';
  }
}


export const ImageBlock = ({ attributes }) => {
  const { url, width, height, align } = attributes;

  return <div className={`flex justify-${alignToJustify(align)}`}>
    <img src={url} alt="" width={width} height={height} />
  </div>
}