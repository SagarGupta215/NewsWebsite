import { HeadLine } from "../components/HeadLine";
import { FilterComp } from "../components/FilterComp";
import { SearchComp } from "../components/SearchComp";
import { PaginationComp } from "../components/PaginationComp";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../components/ErrorComp";


function Home({ setArticleContent }) {
	const [searchAndFilter, setSearchAndFilter] = useState({
		searchQuery: "",
		filterQuery: "",
	});
	const [newsHeadline, setNewsHeadline] = useState([]);
	const [currentPage, setcurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const base_uri = import.meta.env.VITE_BASE_URI;
	const token = import.meta.env.VITE_NEWSAPI_KEY;


	useEffect(() => {		
		const fetchData = async()=>{
			try{
				let uri = new URL(base_uri);
				let params = new URLSearchParams({
				apiKey: token,
				page: currentPage,
				language: 'en', // Adding the language parameter
				pageSize: 15, 
				});
				if (searchAndFilter.searchQuery) {
				params.append("q", searchAndFilter.searchQuery);
				}
				if (searchAndFilter.filterQuery) {
				params.append("category", searchAndFilter.filterQuery);
				}
				// Adding query parameters to the URI
				uri.search = params.toString();
				
				const response = await axios.get(uri.toString());
				const articles = response.data.articles;
				setNewsHeadline(articles);

				// Setting total pages
				setTotalPages(Math.floor(response.data.totalResults / 15));
				setError(null);

			}catch(error) {
				if (error.response && error.response.data) {
					const { code, message } = error.response.data;
					setError({ code, message });
				} else if (error.request) {
					setError({ code: 'network', message: 'Network error occurred. Please check your connection and try again.' });
				} else {
					setError({ code: 'unknown', message: error.message });
				}
			}
		}
		fetchData();
			
	}, [searchAndFilter, totalPages, currentPage, newsHeadline]);

	const handleArticleClick = (article) => {
		setArticleContent(article);
		navigate("/article");
	};

	return (
		<>
			{error && <ErrorComponent code={error.code} message={error.message} />}
			<div className="flex justify-start">
				<FilterComp setSearchAndFilter={setSearchAndFilter} />
				<SearchComp setSearchAndFilter={setSearchAndFilter} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3">
				{newsHeadline.map((item, index) => {
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
