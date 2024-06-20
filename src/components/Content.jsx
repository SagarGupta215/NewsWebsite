
export const Content = ({content,imgURL,url}) => {
  return (
    <div className="mt-4">

      <img src={imgURL} alt="Article Image" className="w-full h-auto rounded mb-4"/>
      
      <div className="mb-4">
        <a href={url} className="text-blue-500 hover:underline">
          Click here to go to the original article
        </a>
      </div>

      <div className="text-gray-800">
        {content}
      </div>

    </div>
  )
}
