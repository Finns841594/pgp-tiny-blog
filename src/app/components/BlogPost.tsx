import { Post } from '../types'

interface Props { post: Post }

export const BlogPost = ({post}:Props) => {
  return (
    <div 
    key={post.id}
    className='w-80 h-48 flex-none hover:h-auto hover:transition transition duration-300 ease-in-out overflow-y-hidden rounded-lg shadow hover:shadow-lg hover:shadow-violet-500 p-2 m-2'>
      <h3 className='border-b-2 border-b-violet-600 py-2 font-bold'>{post.title}</h3>
      <p className='font-light text-sm my-2'>{post.body}</p>
      <div className='flex flex-row pb-2 text-sm '>
        <p className='text-violet-400'>Tags:</p>
        {post.tags.map((label) => {
          // eslint-disable-next-line react/jsx-key
          return (<p className='text-violet-400' key={label}>{label}, </p>)
        })
        }
      </div>
    </div>
  )
}