import DOMPurify from "dompurify";
import React from "react";

const renderHTML = (html) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
  );
};

export default renderHTML;
