import { UINavigationMenuItem } from "./components/Navigation";
import { PanelColumn } from "./components/Panel/UIPanel.model";
import { Slide } from "./components/Slider/UISlider.model";

export const menu: UINavigationMenuItem[] = [
  {
    label: "Shop",
    link: "#shop",
    children: [
      { label: "Categories", link: "#shop-categories" },
      { label: "Outlet", link: "#shop-outlet" },
      { label: "Sale", link: "#shop-sale" },
      { label: "My Account", link: "#shop-my-account" },
    ],
  },
  {
    label: "About",
    link: "#about",
    children: [
      { label: "Who we are", link: "#about-who-we-are" },
      { label: "History", link: "#about-history" },
      { label: "Careers", link: "#about-careers" },
    ],
  },
  {
    label: "Contact",
    link: "#contact",
    children: [
      { label: "Find us", link: "#contact-find-us" },
      { label: "E-mail", link: "#contact-email" },
      { label: "Online", link: "#contact-online" },
    ],
  },
];
function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
export const randomBetween = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getDescription = (maxLines = 0, totalParagraphs = 1): string => {
  const description = [
    "Fusce quis est eget nisi vestibulum feugiat in ut elit.",
    "Integer bibendum vulputate urna, ac tristique urna ornare id.",
    "Etiam vitae imperdiet felis, eu consequat libero.",
    "Vestibulum arcu metus, luctus et ullamcorper eu, vulputate quis leo.",
    "Mauris convallis mattis sollicitudin.",
    "Vestibulum dictum congue est at mollis.",
    "Etiam egestas bibendum pharetra.",
    "Duis eu elit at leo ornare pharetra nec feugiat nibh.",
    "Nullam sodales efficitur leo eu interdum.",
    "Cras ut ultrices orci.",
    "In hac habitasse platea dictumst.",
    "Nulla facilisi.",
    "Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.",
    "Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc auctor malesuada.",
    "Duis eu elit at leo ornare pharetra nec feugiat nibh.",
    "Nullam sodales efficitur leo eu interdum.",
    "Cras ut ultrices orci.",
    "In hac habitasse platea dictumst.",
    "Nulla facilisi.",
    "Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.",
    "Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc auctor malesuada.",
  ];

  //   const lines = maxLines || randomBetween(1, description.length);
  const lines = maxLines;

  const paragraphs = [];

  for (let i = 0; i < totalParagraphs; i++) {
    paragraphs.push(
      `${shuffleArray([...description])
        .slice(0, lines)
        .join(" ")}`
    );
  }
  return totalParagraphs > 1
    ? paragraphs.map((p) => `<p>${p}</p>`).join("")
    : paragraphs[0];
};

export const columns1: PanelColumn[] = [
  {
    title: "Woohoo",
    description: getDescription(4),
    action: {
      label: "Woohoo",
      link: "/link/to/woohoo",
    },
  },
  {
    title: "Yeahhh",
    description: getDescription(3),
    action: {
      label: "Yeahhh",
      link: "/link/to/yeahh",
    },
  },
  {
    title: "Go Go Go!",
    description: getDescription(4),
    action: {
      label: "Woohoo",
      link: "/link/to/gogogo",
    },
  },
];
export const columns2: PanelColumn[] = [
  {
    image: "img/photo-1472457897821-70d3819a0e24.jpg",
    title: "Woohoo",
    description: getDescription(3),
  },
  {
    image: "img/photo-1518331717677-3d0374dcfcd5.jpg",
    title: "Yeahhh",
    description: getDescription(5),
  },
  {
    image: "img/photo-1617663516011-cd60a0de811d.jpg",
    title: "Go Go Go!",
    description: getDescription(4),
  },
];

export const slides: Slide[] = [
  {
    background: "foreground",
    color: "background",
    image: "img/slide1.jpg",
    content: {
      title: "First Slide",
      subtitle: "Another slide on the wall",
      description: getDescription(4),
    },
  },
  {
    background: "foreground",
    color: "background",
    image: "img/slide2.jpg",
    content: {
      title: "Second Slide",
      subtitle: "Another slide on the wall",
      description: getDescription(3),
    },
  },
  {
    background: "foreground",
    color: "background",
    image: "img/slide3.jpg",
    content: {
      title: "Third Slide",
      subtitle: "Another slide on the wall",
      description: getDescription(2),
    },
  },
  {
    background: "foreground",
    color: "background",
    image: "img/slide4.jpg",
    content: {
      title: "Last Slide",
      subtitle: "Another slide on the wall",
      description: getDescription(4),
    },
  },
];
