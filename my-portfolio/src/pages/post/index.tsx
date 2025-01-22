import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const sampleMarkdown = `
<img width="645" alt="スクリーンショット 2025-01-22 18.14.10.png (463.8 kB)" src="https://img.esa.io/uploads/production/attachments/13979/2025/01/22/154404/21641067-9473-4bd3-a7ae-1a81f002ae58.png">

# 概要
- 複数人のプレイリストの曲を１つにまとめて、一覧で表示し、重複している曲の数が表示されます。使用場面は、複数人でカラオケで歌う曲を迷ったときです。うたまっちを使えば、ある曲を何人のが知っているかがわかります。

# 使用技術
- python
- react
- vite
- spotifyapi

# リポジトリ
- [うたまっち_front](https://github.com/kajiLabTeam/openHackU2024_front)
`;

const Post = () => {
  return (
    <div className="post">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{sampleMarkdown}</ReactMarkdown>
    </div>
  );
};

export default Post;
