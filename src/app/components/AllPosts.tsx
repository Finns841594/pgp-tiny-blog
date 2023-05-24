import { PostsByLabel } from "./PostsByLabel"

const labelList = ["history", "american", "crime", "fiction", "love"]

export const AllPosts = () => {
  return (
    <div>
      <div className="mt-10">
        {labelList.map((label) => <PostsByLabel key={label} defaultLabel={label} />)}
      </div>
      {/* <p>Button to add a section</p> */}
    </div>
  )
}