import style from './ContactPage.module.css';
export function ContactPage() {
  return (
    <>
      <div className={style.contactContainer}>
        <h4>
          Наші номери телефонів: <br /> (066)-075-02-28 <br /> (067)-886-34-12{' '}
          <br /> м.Київ
        </h4>
        <div className={style.mapContainer}>
          <a
            href="https://maps.app.goo.gl/eGvjBGAKyyABHzWNA"
            target="_blank"
            rel="noopener noreferrer"
            className={style.mapButton}
          >
            Наша геолокація на Google Maps
          </a>
        </div>
      </div>
    </>
  );
}
