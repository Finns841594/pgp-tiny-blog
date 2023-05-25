'use client'

import { useContext, useEffect, useState } from "react"
import { Post } from "../types"
import { BlogPost } from "./BlogPost"
import { LabelDropdown } from "./LabelDropdown"
import { PostsContext } from "../PostsContext"
import { filterPostsByLabel } from "./functions/utilities"

interface Props {defaultLabel:string}

export const PostsByLabel = ({defaultLabel}:Props) => {
  const [labelForPosts, setLabelForPosts] = useState<string>(defaultLabel)
  const { posts } = useContext(PostsContext)

  const initialPosts = filterPostsByLabel(posts, labelForPosts)
  const [postsByLabel, setPostsByLabel] = useState<Post[]>(initialPosts)

  useEffect(() => {
    setPostsByLabel(filterPostsByLabel(posts, labelForPosts))
  }, [labelForPosts, posts])

  return (
    <div className="w-96 md:w-256 my-10">

      <LabelDropdown updateLabel={setLabelForPosts} defaultLabel={defaultLabel}/>

      <div className="flex flex-row flex-wrap justify-start mx-2">  
        { postsByLabel.length > 0 ? (
          postsByLabel.map((post) => {
            return (
              <BlogPost key={post.id} post={post} />
            )
          })
          ) : (<p>no posts</p>)}
      </div>

    </div>
  )
}