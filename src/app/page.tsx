'use client'

import Image from 'next/image'
import { MainHeader } from './components/MainHeader'
import { AllPosts } from './components/AllPosts'
import { PostsContext } from './PostsContext'
import { useEffect, useState } from 'react'
import { Post } from './types'
import { getPosts } from './components/functions/async'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts)
    } ).catch((err) => {
      console.log('err', err)
      })
  }, [])
  
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <main className="flex min-h-screen flex-col items-center px-24">
        { posts.length > 0 ? (
          <>
            <MainHeader />
            <AllPosts />
          </>
          ) : (
          <p>Loading</p>
          )}
      </main>
    </ PostsContext.Provider>
  )
}
