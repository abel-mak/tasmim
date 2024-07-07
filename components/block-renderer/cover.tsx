export const Cover = ({ attributes, children }) => {
  const { url, width, height, minHeight, align } = attributes;
  const widthStyle: any = {
    // ((align == 'full') ? (...{ minWidth: '100%'}): (...{ }))
  }
  const heightStyle: any = {
    // height: minHeight || height
  }
  // if (align == 'full') widthStyle.minWidth = '100%'
  // else widthStyle.width = width


  return <div className={`relative inline`}>
    <div className="absolute w-full flex-1 h-full">
      {children}
    </div>
    <img src={url} alt={''} style={{ ...heightStyle, ...widthStyle }} className='object-cover h-full w-full' />
  </div >
}