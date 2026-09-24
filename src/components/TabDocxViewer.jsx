import { useParams } from 'react-router-dom';
import { dataEquipment } from './data';
import { DocxViewer } from './DocxViewer'; // переконайся у правильності шляху

export function TabDocxViewer({ fieldType }) {
  const { idEq } = useParams();

  // Знаходимо вибране обладнання за idEq з параметрів URL
  const selectedProduct = dataEquipment.find(
    (item) => String(item.id_eq) === idEq,
  );

  if (!selectedProduct) {
    return <div>Товар не знайдено</div>;
  }

  // Отримуємо шлях до docx-файлу (наприклад, selectedProduct['description'])
  const filePath = selectedProduct[fieldType];

  if (!filePath) {
    return <div>Файл відсутній</div>;
  }

  return <DocxViewer fileUrl={filePath} theme="dark" />;
}
