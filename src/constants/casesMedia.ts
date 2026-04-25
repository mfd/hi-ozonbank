// Desktop images imports - organized by case
// Alfa case
import imgAlfa1_sm from "../imports/_cases/alfaui1_sm.png";
import imgAlfa1_full from "../imports/_cases/alfaui1.png";
import imgAlfa2_sm from "../imports/_cases/alfaui2_sm.png";
import imgAlfa2_full from "../imports/_cases/alfaui2.png";
import imgAlfa3_sm from "../imports/_cases/alfaui3_sm.png";
import imgAlfa3_full from "../imports/_cases/alfaui3.png";
import imgAlfa4_sm from "../imports/_cases/alfaui4_sm.gif";
import imgAlfa4_full from "../imports/_cases/alfaui4.mp4";
import imgAlfa4_poster from "../imports/_cases/alfaui4_poster.png";

// Siemens case
import imgSiemens1_sm from "../imports/_cases/siem1_sm.png";
import imgSiemens1_full from "../imports/_cases/siem1.png";
import imgSiemens2_sm from "../imports/_cases/siem2_sm.png";
import imgSiemens2_full from "../imports/_cases/siem2.png";
import imgSiemens3_sm from "../imports/_cases/siem3_sm.png";
import imgSiemens3_full from "../imports/_cases/siem3.png";
import imgSiemens4_sm from "../imports/_cases/siem4_sm.png";
import imgSiemens4_full from "../imports/_cases/siem4.png";

// Ozon case
import imgOzon1_sm from "../imports/_cases/ozonfin1_sm.png";
import imgOzon1_full from "../imports/_cases/ozonfin1.png";
import imgOzon2_sm from "../imports/_cases/ozonfin2_sm.png";
import imgOzon2_full from "../imports/_cases/ozonfin2.png";

// AlfaVideo case
import imgAlfaVideo1_sm from "../imports/_cases/alfavideo1_sm.png";
import imgAlfaVideo1_full from "../imports/_cases/alfavideo1.png";
import imgAlfaVideo2_sm from "../imports/_cases/alfavideo2_sm.png";
import imgAlfaVideo2_full from "../imports/_cases/alfavideo2.png";
import imgAlfaVideo3_sm from "../imports/_cases/alfavideo3_sm.gif";
import imgAlfaVideo3_full from "../imports/_cases/alfavideo3.mp4";
import imgAlfaVideo3_poster from "../imports/_cases/alfavideo3_poster.jpg";

// Plugin case
import imgPlugin1_sm from "../imports/_cases/plg1.gif";
import imgPlugin1_full from "../imports/_cases/plg1.gif";

// Unified image mapping for small images (preview)
export const imageMapSm: Record<string, string> = {
  imgAlfa1: imgAlfa1_sm,
  imgAlfa2: imgAlfa2_sm,
  imgAlfa3: imgAlfa3_sm,
  imgAlfa4: imgAlfa4_sm,
  imgSiemens1: imgSiemens1_sm,
  imgSiemens2: imgSiemens2_sm,
  imgSiemens3: imgSiemens3_sm,
  imgSiemens4: imgSiemens4_sm,
  imgOzon1: imgOzon1_sm,
  imgOzon2: imgOzon2_sm,
  imgAlfaVideo1: imgAlfaVideo1_sm,
  imgAlfaVideo2: imgAlfaVideo2_sm,
  imgAlfaVideo3: imgAlfaVideo3_sm,
  imgPlugin1: imgPlugin1_sm,
};

// Unified image mapping for full images (lightbox)
export const imageMapFull: Record<string, string> = {
  imgAlfa1: imgAlfa1_full,
  imgAlfa2: imgAlfa2_full,
  imgAlfa3: imgAlfa3_full,
  imgAlfa4: imgAlfa4_full,
  imgSiemens1: imgSiemens1_full,
  imgSiemens2: imgSiemens2_full,
  imgSiemens3: imgSiemens3_full,
  imgSiemens4: imgSiemens4_full,
  imgOzon1: imgOzon1_full,
  imgOzon2: imgOzon2_full,
  imgAlfaVideo1: imgAlfaVideo1_full,
  imgAlfaVideo2: imgAlfaVideo2_full,
  imgAlfaVideo3: imgAlfaVideo3_full,
  imgPlugin1: imgPlugin1_full,
};

// Unified image mapping for video posters
export const imageMapPoster: Record<string, string> = {
  imgAlfaVideo3: imgAlfaVideo3_poster,
  imgAlfa4_full: imgAlfa4_poster,
};
