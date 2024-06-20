
export const SubHeading = ({description,author,date}) => {
  return (
    <div className="mb-4">
      <div className="text-lg text-gray-700 mb-2">
        {description}
      </div>
      <div className="text-sm text-gray-500">
        {author} - {date}
      </div>
    </div>
  )
}
