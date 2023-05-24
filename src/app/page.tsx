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
      <main className="flex min-h-screen flex-col items-center p-24">
        <MainHeader />
        <AllPosts />
      </main>
    </ PostsContext.Provider>
  )
}
