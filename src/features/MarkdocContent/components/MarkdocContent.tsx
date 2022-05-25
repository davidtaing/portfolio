import React from "react";
import Markdoc from "@markdoc/markdoc";

interface Props {
  rawContent: string;
}

export const MarkdocContent = ({ rawContent }: Props) => {
  const ast = Markdoc.parse(rawContent);

  const rtn = Markdoc.transform(ast);

  return (
    <div className="wrapper">
      <div className="text-container">
        {Markdoc.renderers.react(rtn, React)}
      </div>
    </div>
  );
};
