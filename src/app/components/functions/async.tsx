// get current host name
// Update: method below is not working for the client side
// const host = window.location.hostname
// const port = window.location.port

// function that get posts from api
export const getPosts = async () => {
  const res = await fetch(`/api/posts`)
  const posts = await res.json()
  return posts.posts
}

// function that get posts from api
export const getPostsByLabel = async (label:string) => {
  const res = await fetch(`/api/posts?tag=${label}`)
  const posts = await res.json()
  return posts.posts
}