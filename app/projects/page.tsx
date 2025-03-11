import Link from "next/link";
import { getProjects } from "./utils";
import { Navigation } from "@/components/nav";

export default function Projects() {
  const projects = getProjects();

  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col min-h-screen justify-center items-center">
        <h2 className="text-2xl font-bold">My projects:</h2>
        <ul className="leading-tight">
          {projects.map((proj) => (
            <li key={proj.slug}>
              <Link
                className="flex flex-col space-y-1 mb-1 "
                href={`/projects/${proj.slug}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    - {proj.slug}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
