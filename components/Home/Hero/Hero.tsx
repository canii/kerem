import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.jpg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Kerem
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          10th grader • Front-end Developer • Graphic Designer • PlayBoy •
          E-Trader
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I am a front-end developer, currently looking into learning new
          things (Rust, , Web2 and front-end technologies). Whenever I feel like
          I should share my knowledge with others, I like to do it via blog
          posts and social media.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Kerem"
        />
      </div>
    </div>
  );
};

export default Hero;
