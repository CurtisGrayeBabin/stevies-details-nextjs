import Image from "next/image";
import { MouseEventHandler } from "react";
import BookButton from "@/components/BookButton";

export default function Home() {

  const handleBookButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("Button clicked!", event);
  };

  return (
    <main>
      <div className="logo-container">
          <Image
            src="/static-logo.png"
            width={450}
            height={450}
            alt="Stevie's Details. Auto Detailing. Follow us at stevies_details on Instagram and TikTok."
          />
          <h1 id="title-1">The highest quality details in southern California.</h1>

          <h2>Established 2019.</h2>

          <BookButton />

          <h3>See the details for yourself:</h3>
          <div className="social-media-container">
            <a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-3" target="_">
              <Image
                src="/yelp.png"
                width={60}
                height={60}
                alt="Opens our Yelp page in a new window"
              />
            </a>
            <a href="https://www.instagram.com/stevies_details/" target="_">
              <Image
                  src="/ig.svg.png"
                  width={60}
                  height={60}
                  alt="Opens our Instagram page in a new window"
                />
            </a>
            <a href="https://www.tiktok.com/@stevies_details" target="_">
            <Image
                src="/tiktok.png"
                width={60}
                height={60}
                className="white-border-round"
                alt="Opens our TikTok page in a new window"
              />
            </a>
          </div>
      </div>
    </main>
  );
}
