import "./Carousel3d.css";

export default function CurvedCarousel() {
  const slides = Array.from({ length: 10 }).map((_, index) => ({
    src: `https://picsum.photos/seed/picsum${index}/1280/720`,
    alt: `Slide ${index}`,
  }));

  // Duplicated for smooth seamless scroll
  const loopSlides = [...slides, ...slides];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {loopSlides.map((slide, index) => (
          <div className="marquee-slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}