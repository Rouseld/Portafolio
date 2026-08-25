// src/Components/ProjectLightbox.jsx
//
// Lightbox que se muestra al hacer clic en una captura de la galeria.
// Muestra la imagen ampliada (fullSrc) y, si no tiene imagen ampliada,
// muestra un mensaje de error. Sirve tanto para maquetas web como de celular.
export function ProjectLightbox({ isVisible, imageSrc, isMobile, onClose }) {
  const showError = !imageSrc;

  return (
    <div className={`lightbox ${isVisible ? "lightbox--visible" : ""}`}>
      <div className="lightbox--iconcontainer" onClick={onClose}>
        <p className="text__small">Close Overlay</p>
        <img src="/portafoliopages/media/Icon__xmark.svg" alt="" className="icon__small" />
      </div>

      {showError ? (
        <div className="errorcontainer errorcontainer--visible">
          <img src="/portafoliopages/media/Icon__Warning.svg" alt="" className="icon__medium" />
          <h3 className="title__h3">Wow! We couldn't enlarge the image.</h3>
          <p className="text__medium">
            This usually happens due to a server error or simply because the image is already
            fully visible in its thumbnail version.
          </p>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt=""
          className={isMobile ? "lightbox__content-mobile" : "lightbox__content"}
        />
      )}
    </div>
  );
}