import { PostCard } from "../PostCard";
import './styles.css'
export function Posts({data}){
  return (
  <div className="posts">
    {data.map((post) => {
    return (
      <PostCard
      key={post.id}
      title={post.title}
      body={post.body}
      cover={post.cover}
      id={post.id}
      />
    )
    })}
  </div>
  )
}