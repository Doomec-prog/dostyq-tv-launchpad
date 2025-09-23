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
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--dostyq-header-footer-bg)) 0%, hsla(var(--dostyq-header-footer-bg) / 0) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{
              background: 'linear-gradient(270deg, hsl(var(--dostyq-header-footer-bg)) 0%, hsla(var(--dostyq-header-footer-bg) / 0) 100%)',
            }}
          />
          <div className="flex items-center space-x-16 marquee">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-12 px-8 bg-dostyq-card rounded-lg"
                style={{ filter: 'grayscale(1)', opacity: '0.8' }}
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