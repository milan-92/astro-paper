import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"] & { image?: string };
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, image } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title), fontSize: "1.5rem" },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="addHorizontalLines">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p style={{ margin: '1em 0' }}>{description}</p>
      {image && (
        <>
          <img src={image} alt={title} style={{ width: 'auto', height: 'auto' }} />
        </>
      )}
    </li>
  );
}
