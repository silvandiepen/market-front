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

const description = `Fusce quis est eget nisi vestibulum feugiat in ut elit. Integer
bibendum vulputate urna, ac tristique urna ornare id. Etiam vitae
imperdiet felis, eu consequat libero. Vestibulum arcu metus,
luctus et ullamcorper eu, vulputate quis leo. Mauris convallis
mattis sollicitudin. Vestibulum dictum congue est at mollis. Etiam
egestas bibendum pharetra. Duis eu elit at leo ornare pharetra nec
feugiat nibh. Nullam sodales efficitur leo eu interdum. Cras ut
ultrices orci. In hac habitasse platea dictumst. Nulla facilisi.
Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.
Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc
auctor malesuada.`;
const description2 = `Duis eu elit at leo ornare pharetra nec
feugiat nibh. Nullam sodales efficitur leo eu interdum. Cras ut
ultrices orci. In hac habitasse platea dictumst. Nulla facilisi.
Nam mi augue, porttitor tincidunt consequat eu, congue id lacus.
Aliquam gravida et purus quis pretium. Nulla eu tortor ac nunc
auctor malesuada.`;

export const columns1: PanelColumn[] = [
  {
    title: "Woohoo",
    description: description,
    action: {
      label: "Woohoo",
      link: "/link/to/woohoo",
    },
  },
  {
    title: "Yeahhh",
    description: description,
    action: {
      label: "Yeahhh",
      link: "/link/to/yeahh",
    },
  },
  {
    title: "Go Go Go!",
    description: description,
    action: {
      label: "Woohoo",
      link: "/link/to/gogogo",
    },
  },
];
export const columns2: PanelColumn[] = [
  {
    image:
      "https://images.unsplash.com/photo-1617663516011-cd60a0de811d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    title: "Woohoo",
    description: description2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1518331717677-3d0374dcfcd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    title: "Yeahhh",
    description: description2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    title: "Go Go Go!",
    description: description2,
  },
];

export const slides: Slide[] = [
  {
    background: "foreground",
    color: "background",
    image:
      "https://images.unsplash.com/photo-1560961911-a21c4f35443f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    content: {
      title: "First Slide",
      subtitle: "Another slide on the wall",
      description:
        "Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
    },
  },
  {
    background: "foreground",
    color: "background",
    image:
      "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    content: {
      title: "Second Slide",
      subtitle: "Another slide on the wall",
      description:
        "Phasellus sollicitudin arcu sit amet risus ultrices pharetra. Vestibulum eu volutpat mauris.",
    },
  },
  {
    background: "foreground",
    color: "background",
    image:
      "https://images.unsplash.com/photo-1560961911-293cfd783727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    content: {
      title: "Third Slide",
      subtitle: "Another slide on the wall",
      description:
        "Vestibulum eu volutpat mauris. Ut eu tortor gravida, tempor diam ac, suscipit lectus. Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
    },
  },
  {
    background: "foreground",
    color: "background",
    image:
      "https://images.unsplash.com/photo-1560961911-0ac252fecc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    content: {
      title: "Last Slide",
      subtitle: "Another slide on the wall",
      description:
        " Donec quis ullamcorper ipsum, sit amet rutrum dolor. Vestibulum non nibh magna. Cras ultrices volutpat mi vel pellentesque. Etiam eu sem quis elit consequat fringilla a euismod erat. ",
    },
  },
];
