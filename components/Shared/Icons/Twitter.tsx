import { SVGProps } from "react";

const Twitterlogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 551.034 551.034
    xmlSpace="preserve"
    fill="none"
    {...props}
  >
    <path
      d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
      fill="currentColor"
    />
  </svg>
);

export default Twitterlogo;
