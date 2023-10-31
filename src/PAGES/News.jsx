import { useState, useCallback } from "react";
import NewsList from "../COMPONENTS/NewsList";
import Categories from "../COMPONENTS/Categories";
const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default News;
