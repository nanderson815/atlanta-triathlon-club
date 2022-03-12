import { remark } from "remark";
import remarkHtml from "remark-html";

export const convertMarkdownToHTML = (markdown) => {
  return remark().use(remarkHtml).processSync(markdown).toString();
};
