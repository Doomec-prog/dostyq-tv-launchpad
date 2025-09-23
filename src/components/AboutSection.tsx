const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="section-title mb-12">О телеканале DostyqTV</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-dostyq-text text-lg mb-12 leading-relaxed">
            DostyqTV - это современный казахстанский телеканал, который предлагает качественный 
            контент для всей семьи. Мы транслируем лучшие фильмы, сериалы и телепередачи, 
            поддерживая традиции и культуру Казахстана.
          </p>
          
          <div className="w-full max-w-4xl h-96 bg-dostyq-card rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
            <div className="play-button">
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;