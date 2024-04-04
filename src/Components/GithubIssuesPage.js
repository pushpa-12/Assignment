import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import IssueItem from "./IssueItem";
import Wrapper from "./Wrapper";
import IssueHeader from "./IssueHeader";

const GithubIssuesPage = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const styleObj = {
    loadingText: {
      textAlign: "center",
    },
  };

  const fetchIssues = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/facebook/react/issues?page=${page}`
      );

      if (!response.ok) {
        console.log("Failed !!");
      }
      const data = await response.json();

      if (data?.length === 0) {
        setHasMore(false);
      } else {
        setIssues((prevIssues) => [...prevIssues, ...data]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleLoadMore = () => {
    fetchIssues();
  };

  return (
    <Wrapper>
      <IssueHeader/>
      <InfiniteScroll
        dataLength={issues.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={<h4 style={styleObj.loadingText}>Loading ....</h4>}
        endMessage={
          <h4 style={styleObj.loadingText}> No more issues to load.</h4>
        }
      >
        {issues?.map((issue,i) => (
          <IssueItem key={i} data={issue} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
};

export default GithubIssuesPage;
