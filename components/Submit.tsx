import React from 'react';
import { allPostsQueryVars } from './PostList';
import { useCreatePostMutation, AllPostsDocument } from '../generated/graphql';

export default function Submit() {
  const [createPost, { loading }] = useCreatePostMutation();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const title = `${formData.get('title')}`;
    const url = `${formData.get('url')}`;
    form.reset();

    createPost({
      variables: { title, url },
      update: (proxy, { data }) => {
        const oldData: any = proxy.readQuery({
          query: AllPostsDocument,
          variables: allPostsQueryVars,
        });
        // Update the cache with the new post at the top of the
        proxy.writeQuery({
          query: AllPostsDocument,
          data: {
            ...oldData,
            allPosts: [data?.createPost, ...oldData.allPosts],
          },
          variables: allPostsQueryVars,
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit</h1>
      <input placeholder="title" name="title" type="text" required />
      <input placeholder="url" name="url" type="url" required />
      <button type="submit" disabled={loading}>
        Submit
      </button>
      <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
    </form>
  );
}
