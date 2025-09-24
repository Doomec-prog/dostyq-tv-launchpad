const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="section-title mb-12">О телеканале DostyqTV</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-dostyq-text text-lg mb-12 leading-relaxed">
            DostyqTV - это современный казахстанский телеканал, который предлагает качественный
            контент для всей семьи. Мы транслируем лучшие фильмы, сериалы и телепередачи,
            поддерживая традиции и культуру Евразии.
          </p>

          <div className="relative w-full aspect-video bg-dostyq-card rounded-2xl shadow-xl mx-auto overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vjybzLusyN8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
