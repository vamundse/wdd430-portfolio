import Link from "next/link";

export default function ProjectNavLinks() {
  return (
    <nav>
            <ul className="flex gap-6 justify-center items-center m-12">
              <li><Link href="/projects">All Projects</Link></li>
              <li><Link href="/projects/opensource">Open Source</Link></li>
              <li><Link href="/projects/school">School</Link></li>
            </ul>
          </nav>
  );
}