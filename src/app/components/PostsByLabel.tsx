'use client'

import { useContext, useEffect, useState } from "react"
import { Post } from "../types"
import { BlogPost } from "./BlogPost"
import { getPosts, getPostsByLabel } from "./functions/async"
import { LabelDropdown } from "./LabelDropdown"
import { PostsContext } from "../PostsContext"
import { filterPostsByLabel } from "./functions/utilities"

export const PostsByLabel = () => {
  const [labelForPosts, setLabelForPosts] = useState<string>("History")
  const { posts, setPosts } = useContext(PostsContext)

  const initialPosts = filterPostsByLabel(posts, labelForPosts)
  console.log('⭐️ initialPosts', labelForPosts, initialPosts)

  const [postsByLabel, setPostsByLabel] = useState<Post[]>(initialPosts)

  useEffect(() => {
    setPostsByLabel(filterPostsByLabel(posts, labelForPosts))
  }, [labelForPosts])

  return (
    <div>

      <LabelDropdown updateLabel={setLabelForPosts}/>

      <h3>Posts with label {labelForPosts}: </h3>
      <div className="grid grid-cols-3 gap-4">  
        { postsByLabel.length > 0 ? (
          postsByLabel.map((post) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <BlogPost post={post} />
            )
          })
          ) : (<p>no posts</p>)}
      </div>

    </div>
  )
}