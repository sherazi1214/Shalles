export const WA = "923366696660";
export const wa = (text) => `https://wa.me/${WA}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Dates auto-update: experience and year ranges are computed from the start year.
export const CAREER_START = 2012;
export const getYear = () => new Date().getFullYear();
export const getYears = () => getYear() - CAREER_START;

export const deals = [
  { name: "Engagement Deal", items: ["Signature makeup", "Hydra Facial", "Manicure", "Pedicure", "Waxing arms, underarms", "Body polisher, hair duo", "All services"] },
  { name: "Mehndi Deal", items: ["Signature makeup", "Bridal mehndi", "Manicure, pedicure", "Glowing facial", "Hair cut and hair duo"] },
  { name: "Nikkah Deal", items: ["Signature makeup", "Hydra facial", "Whitening pedicure", "Whitening manicure", "Leg wax full", "Hair duo and eye lash", "Arms wax full"] },
  { name: "Barat Deal", best: true, items: ["Shalles signature makeup", "Full body waxing", "Glowing facial", "Hair cut", "Whitening manicure", "Whitening pedicure", "Nails extension", "Hair treatment", "Body polisher"] },
  { name: "Walima Deal", items: ["Shalles signature makeup", "Free party makeup", "Hair cut", "Hair duo", "Hair treatment"] },
  { name: "Party Makeup", items: ["Shalles signature makeup", "Manicure, pedicure", "Hair duo", "Eye lash", "Nail colour", "Waxing half arms and legs"] },
];

export const services = [
  { title: "Hydra Facials", img: "hydra-facial.jpg", text: "Deep cleansing facial with a glow that lasts through the events." },
  { title: "Nails Art", img: "nails-art.jpg", text: "Extensions, colour and shimmer, matched to your outfit." },
  { title: "Manicure and Pedicure", img: "mani-pedi.jpg", text: "Whitening manicure and pedicure for hands and feet." },
];

export const brides = [
  { img: "bride-grey.jpg", alt: "Bride in grey embellished outfit with statement earrings" },
  { img: "bride-red.jpg", alt: "Bride in red dupatta with maang tikka and mehndi" },
  { img: "bride-green.jpg", alt: "Bride in green and gold jewellery with marigold flowers" },
];

export const releases = [
  { title: "Tera Sath", by: "Davinder Kohinoor ft. Mehak Shalle", date: "5 September 2024", img: "tera-sath.jpg" },
  { title: "Main Sadqy Dholay Tu", by: "Naeem Hazarvi, Mehak Shalle", date: "3 November 2023", img: "main-sadqy-dholay-tu.jpg" },
  { title: "Kali Range", by: "Naeem Hazarvi ft. Mehak Shalle", date: "10 October 2023", img: "kali-range.jpg" },
];

export const portfolio = [
  { img: "mehak-red-satin.jpg", alt: "Mehak Shalle in a red satin gown", tag: "Fashion" },
  { img: "mehak-orange.jpg", alt: "Mehak Shalle in an orange skirt set with a long train", tag: "Editorial" },
  { img: "mehak-dubai.jpg", alt: "Mehak Shalle in a plum dress on a boat in Dubai Marina", tag: "Dubai" },
  { img: "mehak-malaysia.jpg", alt: "Mehak Shalle in a pink mirror-work outfit", tag: "Malaysia" },
  { img: "mehak-navy.jpg", alt: "Mehak Shalle in a navy embroidered velvet dress", tag: "Editorial" },
  { img: "mehak-bridal.jpg", alt: "Mehak Shalle in a red and gold bridal outfit", tag: "Bridal" },
  { img: "mehak-portrait.jpg", alt: "Mehak Shalle leaning on a railing in a red satin top", tag: "Portrait" },
  { img: "mehak-party.jpg", alt: "Mehak Shalle in a sequined beige gown", tag: "Party" },
];
