import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export const dataHome = {
  a: [
    {
      href: "https://vitejs.dev",
      target: "_blank",
      img: {
        src: viteLogo,
        alt: "Vite logo",
        className: "logo",
      },
    },
    {
      href: "https://react.dev",
      target: "_blank",
      img: {
        src: reactLogo,
        alt: "React logo",
        className: "logo react",
      },
    },
  ],
  h1: "Vite + React",
  buttonContainer: {
    class: "card",
  },
  p: [
    {
      text: "Click on the Vite and React logos to learn more",
      class: "read-the-docs",
    },
  ],
};
