const getJustify = (align: string) =>{
  switch (align) {
    case 'right':
      return 'justify-end';
    case 'center':
      return 'justify-center';
    default:
      return 'justify-start';
  }
}

export const CallToActionBtn = ({ data }) => {
  const { destination, align, label } = data;
  console.log(label)
  return <div className={` flex ${getJustify(align)} py-5`}>
    <a style={{background: 'linear-gradient(96deg,#6254e7 0%,#9289f1 100%)'}} className="border-0
    py-3 px-7 rounded-md no-underline text-white font-bold cursor-pointer ">{label}</a>
  </div>
}