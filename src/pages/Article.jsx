import { Content } from "../components/Content"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"


export const Article = ({articleContent})=>{
  if (!articleContent) {
    return <div>No article found</div>;
  }
  return (
    <div>
      <Heading  
        heading={articleContent.title}
      />
      <SubHeading 
        description={articleContent.description}
        author={articleContent.author}
        date={articleContent.publishedAt}
      />
      <Content
        imgURL={articleContent.urlToImage}
        url={articleContent.url}
        content={articleContent.content}
      />
    </div>
  )
}
