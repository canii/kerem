import Link from "@/components/Shared/Link";
import Socials from "@/components/Shared/Socials";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <Socials small className="mb-8" />
      <p>
        Made by <Link href="https://instagram.com/_kermcann">Kerem</Link>
      </p>
      <p>
        For contact{" "}
        <Link href="https://discord.com/users/314403590942752778/">on Discord</Link>
      </p>
    </footer>
  );
};

export default Footer;
