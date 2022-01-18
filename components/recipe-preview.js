import Link from 'next/link';

export default function PostPreview({
  title, slug, time, content,
}) {
  return (
    <div>
      <h3>
        <Link as={`/recipes/${slug}`} href="/recipes/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div>{time}</div>
      <p>{content}</p>
    </div>
  );
}
