import { Post } from '../types'

interface Props { post: Post }

export const BlogPost = ({post}:Props) => {
  return (
    <div 
    key={post.id}
    className='w-80 h-48 hover:h-auto transition-[height] duration-500 ease-in-out overflow-y-hidden border-2 rounded-2xl border-slate-500 p-2 my-4'>
      <h3 className='border-b-2 border-b-slate-500 py-2'>{post.title}</h3>
      <div className='flex flex-row pb-2'>
        <p>Tags:</p>
        {post.tags.map((label) => {
          // eslint-disable-next-line react/jsx-key
          return (<p key={label}>{label}, </p>)
        })
        }
      </div>
      <p className=''>{post.body}</p>
    </div>
  )
}