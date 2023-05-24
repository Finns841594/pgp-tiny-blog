import { PostsByLabel } from "./PostsByLabel"
import { LabelDropdown } from "./LabelDropdown"

export const AllPosts = () => {
  return (
    <div>
      <p>Blog posts</p>
      
      <PostsByLabel />

      <p>Add a section</p>
    </div>
  )
}