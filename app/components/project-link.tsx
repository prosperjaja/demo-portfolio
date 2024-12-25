import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import clsx from "clsx";

function ProjectLink({
  sourceCode,
  live,
  idx,
}: {
  sourceCode?: string;
  live?: string;
  idx: number;
}) {
  return (
    <div className="flex justify-evenly w-full gap-[1rem] items-center">
      {sourceCode ? (
        <a
          href={sourceCode}
          className="text-tunes-heading hover:text-tunes-link text-primary font-medium gap-[5px] flex items-center"
        >
          Code
          <FiGithub />
        </a>
      ) : null}
      {live ? (
        <a
          href={live}
          className={clsx(
            idx % 2 ? "text-[#e8e8e8]" : "text-tunes-heading",
            "hover:text-tunes-link text-primary font-medium gap-[5px] flex items-center"
          )}
        >
          Live Demo
          <HiOutlineExternalLink />
        </a>
      ) : null}
    </div>
  );
}

export default ProjectLink;
