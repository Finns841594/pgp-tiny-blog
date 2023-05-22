import {blogPosts} from './data';
import { NextResponse } from 'next/server';
 
// example: http://localhost:3000/api/posts will retun all posts
// example: http://localhost:3000/api/posts?tag=tag1 will retun all posts with tag1
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const tag = searchParams.get('tag')
  if (tag) {
    const filteredPosts = blogPosts.posts.filter(post => post.tags.includes(tag));
    return NextResponse.json(filteredPosts);
  } else {
    return NextResponse.json(blogPosts);
  }
}