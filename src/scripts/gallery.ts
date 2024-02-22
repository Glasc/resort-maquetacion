import lightGallery from "lightgallery";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galleryContainer =
  document.querySelector<HTMLDivElement>("#lightgallery");

if (galleryContainer) {
  lightGallery(galleryContainer, {
    plugins: [lgZoom, lgThumbnail],
    speed: 250,
    selector: ".item",
    licenseKey: "your_license_key",
  });
}
