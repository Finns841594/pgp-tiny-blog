import { PostsByLabel } from "./PostsByLabel"
import { LabelDropdown } from "./LabelDropdown"

export const AllPosts = () => {
  return (
    <div>
      <div className="mt-10">
        <PostsByLabel defaultLabel={"history"} />
        <PostsByLabel defaultLabel={"american"} />
        <PostsByLabel defaultLabel={"crime"} />
        <PostsByLabel defaultLabel={"fiction"} />
        <PostsByLabel defaultLabel={"love"} />
      </div>

      {/* <p>Button to add a section</p> */}
    </div>
  )
}