import Link from "next/link";
import { getProjects } from "../utils";
import { Navigation } from "@/components/nav";
type ProjectPageProps = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { default: ProjectMarkdown, metadata } = await import(
    "@/content/projects/" + slug + ".mdx"
  );

  console.log(metadata);

  return (
    <>
      <Navigation back="/projects" />
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col min-h-screen justify-center items-center">
        <h2 className="text-4xl font-bold">{metadata.title}</h2>
        <p>
          {metadata.github && (
            <Link href={metadata.github}>
              <u>github</u>
            </Link>
          )}{" "}
          {metadata.website && (
            <Link href={metadata.website}>
              <u>website</u>
            </Link>
          )}{" "}
          {metadata.telegram && (
            <Link href={`https://t.me/${metadata.telegram}`}>
              <u>telegram</u>
            </Link>
          )}
        </p>
        {"-".repeat(35)}
        <p>{metadata.description ? metadata.description : "None"}</p>
        {"-".repeat(35)}
        <ProjectMarkdown />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getProjects();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
