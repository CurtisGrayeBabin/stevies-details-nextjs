import Image from "next/image";

export default function Home() {
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

          <button id="homepage-pricing-button" className="button-appearance transition">Book Us</button>

          <h3>See the details for yourself:</h3>
          <div className="social-media-container">
            <a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-3" target="_">
              <Image
                src="/yelp.png"
                width={80}
                height={80}
                alt="Opens our Yelp page in a new window"
              />
            </a>
            <a href="https://www.instagram.com/stevies_details/" target="_">
              <Image
                  src="/ig.svg.png"
                  width={80}
                  height={80}
                  alt="Opens our Instagram page in a new window"
                />
            </a>
            <a href="https://www.tiktok.com/@stevies_details" target="_">
            <Image
                src="/tiktok.png"
                width={80}
                height={80}
                className="white-border-round"
                alt="Opens our TikTok page in a new window"
              />
            </a>
          </div>
      </div>
    </main>
  );
}
