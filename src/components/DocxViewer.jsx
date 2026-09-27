import { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';

export const DocxViewer = ({ fileUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    async function loadAndRender() {
      if (!fileUrl || !containerRef.current) return;

      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();

        // Очищаємо перед новим рендером
        containerRef.current.innerHTML = '';

        // Рендеримо точну копію docx
        await renderAsync(blob, containerRef.current, null, {
          className: 'docx-document',
          inWrapper: false, // без додаткової обгортки сторінки
          ignoreWidth: true, // адаптивність під ширину контейнера
          ignoreHeight: true,
        });
      } catch (err) {
        console.error('Помилка рендерингу DOCX:', err);
      }
    }

    loadAndRender();
  }, [fileUrl]);

  return (
    <div className="docx-render-container">
      <style>{`
        /* Темна тема під ваш сайт */
        .docx-render-container .docx-document {
          
          color: #000000 !important; /* Світло-сірий текст */
          padding: 0 !important;
          font-family: inherit !important;
        }
        .docx-render-container .docx-document p {
          color: #000000 !important;
          
        }
        .docx-render-container .docx-document span {
          color: inherit !important;
        }
      `}</style>
      <div ref={containerRef} />
    </div>
  );
};
