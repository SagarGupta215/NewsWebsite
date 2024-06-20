import { HeadLine } from "../components/HeadLine";
import { FilterComp } from "../components/FilterComp";
import { SearchComp } from "../components/SearchComp";
import { PaginationComp } from "../components/PaginationComp";
import { useEffect, useState } from "react";
import axios from "axios";
import articlesData from "../../data.json"
import { useNavigate } from "react-router-dom";

function Home({ setArticleContent }) {
	const [searchAndFilter, setSearchAndFilter] = useState({
		searchQuery: "",
		filterQuery: "",
	});
	const [newsHeadline, setNewsHeadline] = useState([]);
	const [currentPage, setcurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();


	useEffect(() => {
		const base_uri = import.meta.env.VITE_BASE_URI;
    console.log(base_uri)
		let uri = new URL(base_uri);
		let params = new URLSearchParams();
		params.append("page", currentPage);
		if (searchAndFilter.searchQuery) {
			params.append("q", searchAndFilter.searchQuery);
		}
		if (searchAndFilter.filterQuery) {
			params.append("category", searchAndFilter.filterQuery);
		}
		// Adding query parameters to the URI
		uri.search = params.toString();
    console.log(uri.toString())
		const token = import.meta.env.VITE_NEWSAPI_KEY;
		axios
			.get(uri.toString(), {
				headers: {
					Authorization: "Bearer " + token, //the token is a variable which holds the token
				},
			})
			.then((response) => {
				const articles = response.data.articles;
				setNewsHeadline(articles);
        
				// setting total pages
				setTotalPages(Math.floor(response.data.totalResults/15));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [searchAndFilter, totalPages, currentPage, newsHeadline]);

  const handleArticleClick = (article) => {
    setArticleContent(article);
    navigate('/article');
  };

	return (
		<>
			<div className="flex justify-start">
				<FilterComp setSearchAndFilter={setSearchAndFilter} />
				<SearchComp setSearchAndFilter={setSearchAndFilter} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3">
				{newsHeadline.map((item,index) => {
					return (
						<HeadLine
							key={index}
							heading={item.title}
							description={item.description}
							img={item.urlToImage}
							onPress={() => handleArticleClick(item)}
						/>
					);
				})}
			</div>
			<div>
				<PaginationComp
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setcurrentPage}
				/>
			</div>
		</>
	);
}

export default Home;
