// Import images
import home1 from '../../images/home1.png';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.png';
import home4 from '../../images/home4.png';

// Create a mapping of image keys to actual image imports
const imageMap = {
  home1,
  home2,
  home3,
  home4
};

// Define your data structure with imgKey for referencing local images
const items = [
  {
    title: "VEX AI World Skills Champions",
    location: "Award",
    date: "Houston, TX June 5th, 2024",
    imgKey: 'home1',
    description: "Robot Skills Champion (VRC/VEXU/VAIRC)",
    description2: "Innovate Award (VRC/VEXU/VAIRC)",
    navigatePath: "/some-path" // Add navigation path if needed
  },
  {
    title: "TESR AI W",
    location: "Houston, TX",
    date: "June 5th, 2024",
    imgKey: 'home2',
    description: "",
    description2: "",
    navigatePath: "/another-path" // Add navigation path if needed
  }
  // Add more items as needed
];

export { items, imageMap };
