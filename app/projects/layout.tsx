import ProjectNavLinks from "./navlinks";

export default function ProjectLayout({
  children} : {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <ProjectNavLinks />
          {children}
        </body>
      </html>
    );
  }