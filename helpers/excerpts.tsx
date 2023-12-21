import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

export const createExcerpt = (
  content: PortableTextBlock[],
  maxNumberOfWords: number,
  trailingIndicator = "..."
) => {
  const listOfWords = content.toString().trim().split(" ");

  const transcatedContent = listOfWords
    .slice(0, maxNumberOfWords)
    .join(" ");

  const excerpt = transcatedContent + trailingIndicator;

  const output =
    listOfWords.length > maxNumberOfWords
      ? excerpt
      : content;

  return output;
};
