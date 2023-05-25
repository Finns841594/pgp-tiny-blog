'use client'

import { MainHeader } from './components/MainHeader'
import { AllPosts } from './components/AllPosts'
import { PostsContext } from './PostsContext'
import { useEffect, useState } from 'react'
import { Post } from './types'
import { getPosts } from './components/functions/async'
import { Loading } from '@nextui-org/react';


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
    // change the structure of Context.Provider to not wrap the entire app, use the advantage of server rendering
      <main className="flex min-h-screen flex-col items-center px-24">
        <PostsContext.Provider value={{ posts, setPosts }}>
        <MainHeader />
        { posts.length > 0 ? (
          <>
            {/* only shows loading icon here */}
            <AllPosts />
          </>
          ) : (
          <div className='mt-96'>
            <Loading size='xl' color='secondary'/>
          </div>
          )
        }
      </ PostsContext.Provider>
      </main>
  )
}
