// function that get posts from api
export const getPosts = async () => {
  const res = await fetch(`http://localhost:3005/api/posts`)
  const posts = await res.json()
  return posts.posts
}

// function that get posts from api
export const getPostsByLabel = async (label:string) => {
  const res = await fetch(`http://localhost:3005/api/posts?tag=${label}`)
  const posts = await res.json()
  return posts.posts
}