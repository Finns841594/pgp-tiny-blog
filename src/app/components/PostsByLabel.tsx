'use client'

import { useEffect, useState } from "react"
import { Post } from "../types"
import { BlogPost } from "./BlogPost"
import { getPosts } from "./functions/async"

export const PostsByLabel = () => {
  const [postsByLabel, setPostsByLabel] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then((posts) => {
      console.log('posts', posts)
      setPostsByLabel(posts)
      console.log('postsLength', postsByLabel.length)
    }).catch((err) => {
      console.log('err', err)
    })
  }, [])

  return (
    <div>
      <p>label 1</p>
      { postsByLabel.length > 0 ? (
        // show all posts with label 1
        postsByLabel.map((post) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <BlogPost post={post} />
          )
        })


        ) : (<p>no posts</p>)}
    </div>
  )
}