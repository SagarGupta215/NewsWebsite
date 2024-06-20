
export const HeadLine = ({heading,description,img,onPress}) => {

  return (
    <div onClick={onPress} className="bg-white rounded shadow-md p-4 hover:scale-105">
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Heading */}
            <div className="flex-1">
                <div className="text-2xl font-semibold mb-2">
                    {heading}
                </div>
                <div className="text-grey-700">
                    {description}
                </div>
            </div>
            {/* IMG */}
            <div className="flex-shrink-0">
                <img src= {img}
                alt="Description of the image"
                className="rounded w-full h-48 md:w-32 md:h-32 object-contained"
                />
            </div>
        </div>
    </div>
  )
}

