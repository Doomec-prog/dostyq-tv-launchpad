const PartnersCarousel = () => {
  const partners = [
    'Телеканал Казахстан',
    'КТК',
    'Хабар 24',
    'Первый канал Казахстан',
    'НТК',
    'Алматы ТВ',
    'Астана ТВ',
    'Медиа корпорация'
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="section-title mb-12">Наши партнеры</h2>
        
        <div className="h-30 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-dostyq-header-footer to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-dostyq-header-footer to-transparent" />
          <div className="flex items-center space-x-16 marquee">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-12 px-8 bg-dostyq-card rounded-lg grayscale opacity-80"
              >
                <span className="text-dostyq-text font-semibold text-sm whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;