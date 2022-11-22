import DOMPurify from "dompurify";
import React from "react";

const renderHTML = (html, key) => {
  return (
    <div
      key={key}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    ></div>
  );
};

export default renderHTML;
