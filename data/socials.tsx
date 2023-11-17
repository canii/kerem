import { ReactNode } from "react";

import {
  InstagramLogo,
  SpotifyLogo,
  DiscordLogo,
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
    id: "İnstagram",
    name: "İnstagram",
    url: "https://twitter.com/_kermcann",
    icon: <Instagramlogo color="#1DA1F2" />,
  },
  {
    id: "Spotify",
    name: "Spotify",
    url: "https://open.spotify.com/user/pbf8r6cuik3evk5kio58x0uue?si=3119ed0063854ad5",
    icon: <SpotifyLogo color="#1DB954" />,
  },
  {
    id: "Discord",
    name: "Discord",
    url: "https://www.youtube.com/anishtechtutorials",
    icon: <DiscordLogo color="#7289d9" />,
  },
  {
    id: "Youtube",
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCxAcOwXzaxNNR9RkjUBHa6w",
    icon: <YoutubeLogo color="#ff0000" />,
  },
];

export default socials;
