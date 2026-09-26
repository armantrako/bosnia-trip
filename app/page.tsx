export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        {/* TODO(phase 2): swap for real hero photography (Mostar/Kravica/Jahorina) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 p-6 pb-12 text-white md:p-16">
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Discover Bosnia.
            <br />
            One trip at a time.
          </h1>
          <p className="mt-4 max-w-md text-white/80">
            Explore cities, nature and hidden gems across Bosnia and
            Herzegovina. Plan trips, track what you&apos;ve visited, and build
            your own Bosnia travel passport.
          </p>
        </div>
      </section>

      {/* TODO(phase 2): Featured destinations, Explore by season, Explore by
          category, How it works, Passport teaser, AI planner teaser, CTA */}
    </main>
  );
}
