// get current host name
const host = window.location.hostname
const port = window.location.port

// function that get posts from api
export const getPosts = async () => {
  const res = await fetch(`http://${host}:${port}/api/posts`)
  const posts = await res.json()
  return posts.posts
}

// function that get posts from api
export const getPostsByLabel = async (label:string) => {
  const res = await fetch(`http://${host}:${port}/api/posts?tag=${label}`)
  const posts = await res.json()
  return posts.posts
}