// src/Components/ProjectGallery.jsx
//
// Galeria de capturas de un proyecto. Permite cambiar entre pestañas
// (Desktop / Mobile) y ampliar cada imagen en un lightbox.
import { useState } from "react";
import { ProjectLightbox } from "./ProjectLightbox";

export function ProjectGallery({ gallery }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const activeTab = gallery.tabs[activeTabIndex];

  function openLightbox(image) {
    setSelectedImage(image);
  }

  function closeLightbox() {
    setSelectedImage(null);
  }

  function changeTab(tabIndex) {
    setActiveTabIndex(tabIndex);
  }

  return (
    <section className="gallerycontainer">
      <div className="gallerycontainer__innercontainer">
        <div className="gallerycontainer__innercontainer__top">
          <h2 className="title__h2">Project Gallery</h2>
          <p className="text__medium">{gallery.description}</p>
        </div>

        <div className="gallerycontainer__innercontainer__bottom">
          <div className="gallerycontainer__innercontainer__bottom--tabsbutton">
            {gallery.tabs.map((tab, tabIndex) => (
              <button
                key={tab.label}
                className={tabIndex === activeTabIndex ? "tab__button--active" : "tab__button"}
                onClick={() => changeTab(tabIndex)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="gallerycontainer__innercontainer__bottom--tabscontent">
            <div className={`gallerycontainer__innercontainer__bottom--tabscontent-tabvisible ${activeTab.className}`}>
              {activeTab.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image.src}
                  alt=""
                  className={`tabscontent-thumbnail ${image.isMobile ? "thumbnail__mobile" : ""}`}
                  onClick={() => openLightbox(image.fullSrc)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectLightbox
        isVisible={selectedImage !== null}
        imageSrc={selectedImage ?? ""}
        isMobile={activeTab.className === "tabmobile"}
        onClose={closeLightbox}
      />
    </section>
  );
}