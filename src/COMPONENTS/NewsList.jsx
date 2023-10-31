import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./LoadingBar";
import Categories from "./Categories";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = (props) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query =
          props.category === "all" ? "all" : `category=${props.category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=bce8ef3addfc41b58e93a2283556878d`
        );
        setArticles(response.data.status === "ok");
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.category]);
  if (loading) {
    return <Loading />;
  }

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};
export default NewsList;
