import ReactMarkdown from "react-markdown";
import { useState } from "react";

const sampleMarkdown = `
# プロジェクトタイトル
このプロジェクトでは以下の技術を使用しました:
- React
- TypeScript
- Node.js

[GitHub リポジトリ](https://github.com)
`;

const Post = () => {


  return (
    <div className="post">
      <h1>プロジェクト & 記事</h1>
    </div>
  );
};

export default Post;
