export const Cover = ({ attributes, children }) => {
  const { url, width, height, minHeight, align } = attributes;
  console.log(attributes);
  const widthStyle: any = {
    // ((align == 'full') ? (...{ minWidth: '100%'}): (...{ }))
  };
  const heightStyle: any = {
    minHeight: minHeight || "100%",
  };
  // if (align == 'full') widthStyle.minWidth = '100%'
  // else widthStyle.width = width

  return (
    <div
      style={{
        ...heightStyle,
        ...widthStyle,
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
      }}
      className={`relative h-full flex justify-center`}
    >
      <div className="w-full flex flex-1  flex-col justify-center items-center">
        {children}
      </div>
      {/* <img src={url} alt={''}  className='object-cover h-full w-full' /> */}
    </div>
  );
};
