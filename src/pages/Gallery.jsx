import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Factory,
  Folder,
  Grid2X2,
  Images,
  Maximize2,
  Search,
  UsersRound,
} from "lucide-react";

import facilities from "../assets/facilities.png";
import laboratory from "../assets/laboratory.png";
import office from "../assets/office.png";
import warehouse from "../assets/warehouse.png";
import exhibition from "../assets/exhibition.png";
import ourteam from "../assets/ourteam.png";
import events from "../assets/events.png";
import GalleryImg from "../assets/Gallery.png";
import facilities2 from "../assets/laboratory.png";
import events2 from "../assets/exhibition.png";

import "./Gallery.css";
import ContactInfo from "../components/ContactInfo";
import { getGallery } from "../lib/cosmochemStore";

/* ========================================
   GALLERY DATA
======================================== */

export const GALLERY_SEED = [
  {
    category: "Facilities",
    images: [facilities, facilities2],
  },
  {
    category: "Laboratory",
    images: [laboratory],
  },
  {
    category: "Warehouse",
    images: [warehouse],
  },
  {
    category: "Events",
    images: [events,events2],
  },
  {
    category: "Our Team",
    images: [ourteam],
  },
  {
    category: "Office",
    images: [office],
  },
  {
    category: "Exhibition",
    images: [exhibition],
  },
];

/* ========================================
   CATEGORIES
======================================== */

/* ========================================
   CATEGORY ICONS
======================================== */

const categoryIcons = {
  All: Grid2X2,
  Facilities: Factory,
  Laboratory: Images,
  Warehouse: Folder,
  Events: Camera,
  "Our Team": UsersRound,
  Office: Factory,
  Exhibition: Camera,
};

function Gallery() {
  const [galleryItems, setGalleryItems] = useState(() => getGallery(GALLERY_SEED));
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = useMemo(
    () => ["All", ...galleryItems.map((item) => item.category)],
    [galleryItems]
  );

  useEffect(() => {
    const refreshGallery = () => setGalleryItems(getGallery(GALLERY_SEED));
    refreshGallery();
    window.addEventListener("cosmochem-content-change", refreshGallery);
    return () => window.removeEventListener("cosmochem-content-change", refreshGallery);
  }, []);

  const pageSize = 12;

  /* ========================================
     DYNAMIC TOTALS
  ======================================== */

  const totalGalleryImages = useMemo(() => {
    return galleryItems.reduce(
      (total, item) => total + item.images.length,
      0,
    );
  }, []);

  const totalCategories = galleryItems.length;

  /* ========================================
     FILTER CATEGORY
  ======================================== */

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory]);

  /* ========================================
     PAGINATION
  ======================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / pageSize),
  );

  const visibleItems = filteredItems.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  /* ========================================
     CATEGORY CHANGE
  ======================================== */

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  /* ========================================
     OPEN GALLERY
  ======================================== */

  const openGallery = (item) => {
    setSelectedPhoto(item);
    setSelectedIndex(0);
  };

  /* ========================================
     CLOSE GALLERY
  ======================================== */

  const closeGallery = () => {
    setSelectedPhoto(null);
    setSelectedIndex(0);
  };

  /* ========================================
     PREVIOUS PHOTO
  ======================================== */

  const previousPhoto = () => {
    if (!selectedPhoto) return;

    setSelectedIndex((current) =>
      current === 0
        ? selectedPhoto.images.length - 1
        : current - 1,
    );
  };

  /* ========================================
     NEXT PHOTO
  ======================================== */

  const nextPhoto = () => {
    if (!selectedPhoto) return;

    setSelectedIndex((current) =>
      current === selectedPhoto.images.length - 1
        ? 0
        : current + 1,
    );
  };

  return (
    <main className="gallery-page">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="gallery-hero">
        <img src={GalleryImg} alt="CosmoChem campus" />

        <div className="gallery-hero-overlay" />

        <div className="gallery-container gallery-hero-content">
          <div className="gallery-breadcrumb">
            Home <span>›</span> Gallery
          </div>

          <h1>
            Our <span>Gallery</span>
          </h1>

          <p>
            Explore our facilities, laboratory, manufacturing plant,
            <br />
            events and team at CosmoChem.
          </p>
        </div>
      </section>

      {/* ========================================
          GALLERY DIRECTORY
      ======================================== */}

      <section
        className="gallery-container gallery-directory"
        id="gallery-directory"
      >
        {/* CATEGORY TABS */}

        <div
          className="gallery-tabs"
          role="tablist"
          aria-label="Gallery categories"
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Folder;

            return (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => chooseCategory(category)}
                role="tab"
                aria-selected={
                  activeCategory === category
                }
              >
                <Icon size={28} />
                {category}
              </button>
            );
          })}
        </div>

        {/* HEADING */}

        <div className="gallery-heading">
          <div>
            <span>VISUAL JOURNEY</span>

            <h2>
              Inside <strong>CosmoChem</strong>
            </h2>
          </div>
        </div>

        {/* GALLERY GRID */}

        <div className="gallery-grid">
          {visibleItems.map((item) => {
            const { category, images } = item;

            return (
              <button
                className="gallery-card"
                key={category}
                onClick={() => openGallery(item)}
                aria-label={`Open ${category} gallery`}
              >
                <div className="gallery-card-image">
                  <img
                    src={images[0]}
                    alt={category}
                  />

                  <span>
                    <Maximize2 size={16} />
                  </span>
                </div>

                <div className="gallery-card-content">
                  <h3>{category}</h3>

                <p>
                  <Images size={12} />
                  {images.length} {images.length === 1 ? "Photo" : "Photos"}
                </p>

                </div>
              </button>
            );
          })}

          {!visibleItems.length && (
            <div className="gallery-empty">
              <Search size={25} />

              <strong>
                No photos in this category
              </strong>

              <button
                onClick={() => chooseCategory("All")}
              >
                View All Photos
              </button>
            </div>
          )}
        </div>

        {/* PAGINATION */}

        <div className="gallery-pagination">
          <span>
            Showing {visibleItems.length} of{" "}
            {filteredItems.length} categories
          </span>

          <div>
            <button
              disabled={page === 1}
              onClick={() =>
                setPage((current) =>
                  Math.max(1, current - 1),
                )
              }
              aria-label="Previous page"
            >
              <ChevronLeft size={15} />
            </button>

            <strong>
              {page} / {totalPages}
            </strong>

            <button
              disabled={page === totalPages}
              onClick={() =>
                setPage((current) =>
                  Math.min(
                    totalPages,
                    current + 1,
                  ),
                )
              }
              aria-label="Next page"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================
          DYNAMIC STATS
      ======================================== */}

      <section className="gallery-stats">
        <div className="gallery-container">
          <div>
            <Images size={26} />

            <strong>
              {totalGalleryImages}+
            </strong>

            <span>Gallery Images</span>
          </div>

          <div>
            <Folder size={26} />

            <strong>
              {totalCategories}+
            </strong>

            <span>Categories</span>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="gallery-cta">
        <div className="gallery-container">
          <FlaskIcon />

          <div>
            <h2>
              Want to Know More
              <br />
              About <span>Our Facilities?</span>
            </h2>

            <p>
              Get a virtual tour or schedule a visit
              to our manufacturing plant.
            </p>
          </div>

          <a href="#contact">
            Get a Quote <ArrowRight size={15} />
          </a>

          <ContactInfo compact />


        </div>
      </section>

      {/* ========================================
          IMAGE MODAL
      ======================================== */}

      {selectedPhoto && (
        <div
          className="gallery-modal-backdrop"
          onClick={closeGallery}
        >
          <div
            className="gallery-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
          >
            {/* CLOSE */}

            <button
              className="gallery-modal-close"
              onClick={closeGallery}
              aria-label="Close photo"
            >
              ×
            </button>

            {/* CATEGORY */}

            <span className="gallery-modal-category">
              {selectedPhoto.category}
            </span>

            {/* IMAGE */}

            <img
              className="gallery-modal-image"
              src={
                selectedPhoto.images[
                  selectedIndex
                ]
              }
              alt={`${selectedPhoto.category} ${
                selectedIndex + 1
              }`}
            />

            {/* LEFT ARROW */}

            {selectedPhoto.images.length > 1 && (
              <button
                className="gallery-modal-prev"
                onClick={previousPhoto}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* RIGHT ARROW */}

            {selectedPhoto.images.length > 1 && (
              <button
                className="gallery-modal-next"
                onClick={nextPhoto}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* PHOTO COUNTER */}

            {selectedPhoto.images.length > 1 && (
              <div className="gallery-modal-counter">
                {selectedIndex + 1} /{" "}
                {selectedPhoto.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function FlaskIcon() {
  return (
    <div className="gallery-flask">
      ✧
    </div>
  );
}

export default Gallery;