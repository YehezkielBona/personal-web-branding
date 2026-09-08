import type { BlogPost } from "../../types";

type BlogCardProps = {
  post: BlogPost;
};

const formatTanggal = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span 
          key={tag}
          className="text-xs font-semibold bg-sage/20 text-leaf px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-forest">{post.title}</h3>
      <p className="text-forest/70 text-sm mt-2 flex-1">{post.summary}</p>
      <div className="flex justify-between items-center text-xs text-forest/60 mt-4 pt-4 border-t border-sage/20">
        <span>Oleh {post.author}</span>
        <span>{formatTanggal(post.date)}</span>
      </div>
    </article>
  );
};

export default BlogCard;
