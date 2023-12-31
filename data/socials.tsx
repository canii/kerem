import { ReactNode } from "react";

import {
  DevToLogo,
  GitHubLogo,
  HashnodeLogo,
  Twitterlogo,
  YouTubeLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/_kermcann",
    icon: <Twitterlogo />,
  },
  {
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/user/pbf8r6cuik3evk5kio58x0uue?si=1349beef38e54e16",
    icon: <GitHubLogo  color="#1DB954"/>,
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.com/users/314403590942752778/",
    icon: <YouTubeLogo color="#7289da" />,
  },
  {
    id: "steam",
    name: "Steam",
    url: "https://steamcommunity.com/id/jackaktus",
    icon: <HashnodeLogo color="#171a21" />,
  },
];

export default socials;
