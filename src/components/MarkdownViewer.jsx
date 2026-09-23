import { useState, useEffect } from 'react';

import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import styles from './MarkdownViewer.module.css';

export function MarkdownViewer({ fileUrl }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Не вдалося завантажити файл');
        }
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [fileUrl]);

  if (loading) return <p>Завантаження інструкції...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div className={styles.parent}>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </Markdown>
    </div>
  );
}
