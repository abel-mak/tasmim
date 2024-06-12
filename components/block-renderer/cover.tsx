export const Cover = ({ attributes, children }) => {
  const { url, width, height, minHeight } = attributes;

  return <div className="relative flex items-center">
    <div className="absolute w-full">
      {children}
    </div>
    <img src={url} alt={''} style={{height: minHeight || height, width}} className='object-cover'/>
  </div >
}