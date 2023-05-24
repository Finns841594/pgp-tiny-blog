import { Post } from "@/app/types";

export const getAllLabels = (posts:Post[]) => {
  const labels:string[] = [];
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!labels.includes(tag)) {
        labels.push(tag);
      }
    });
  });
  return labels;
}

export const filterPostsByLabel = (posts:Post[], label:string|number) => {
  if (typeof label === 'number') {
    label = label.toString()
  }
  const loweredLabel = label.toLowerCase();
  const filteredPosts = posts.filter((post) => post.tags.includes(loweredLabel));
  console.log('⭐️⭐️⭐️ filtering with label:', loweredLabel)
  console.log('⭐️⭐️⭐️ filtered:', filteredPosts)
  return filteredPosts
}