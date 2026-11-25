export function SiteBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <picture className="block h-full w-full">
        <source
          type="image/webp"
          srcSet="/images/studio-bg-sm.webp 640w, /images/studio-bg.webp 1024w"
          sizes="100vw"
        />
        <source
          type="image/jpeg"
          srcSet="/images/studio-bg-sm.jpg 640w, /images/studio-bg.jpg 1024w"
          sizes="100vw"
        />
        <img
          src="/images/studio-bg.jpg"
          alt=""
          width={1024}
          height={571}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[36%_18%] md:object-center"
        />
      </picture>

      {/* Atmospheric contrast scrim so glass surfaces and typography stay readable */}
      <div className="site-bg-scrim absolute inset-0" />
    </div>
  );
}
