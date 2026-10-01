import { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';
import style from './DocxViewer.module.css';

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
          className: style.docx_document,
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
    <div className={style.docx_render_container}>
      <div ref={containerRef} />
    </div>
  );
};
