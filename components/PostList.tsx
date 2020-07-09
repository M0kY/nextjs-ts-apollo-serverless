import React from 'react';
import { NetworkStatus } from 'apollo-client';
import ErrorMessage from './ErrorMessage';
import PostUpvoter from './PostUpvoter';
import { useAllPostsQuery } from '../generated/graphql';

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useAllPostsQuery({
    variables: allPostsQueryVars,
    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (!data || (loading && !loadingMorePosts)) return <div>Loading</div>;

  const { allPosts, _allPostsMeta } = data;
  const areMorePosts = allPosts.length < _allPostsMeta.count;

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: allPosts.length,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return Object.assign({}, previousResult, {
          // Append the new posts results to the old one
          allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
        });
      },
    });
  };

  return (
    <section>
      <ul>
        {allPosts.map((post: any, index: number) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
              <PostUpvoter id={post.id} votes={post.votes} />
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  );
}
