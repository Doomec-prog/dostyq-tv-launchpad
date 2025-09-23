import Header from '@/components/Header';
import ContentCard from '@/components/ContentCard';
import PartnersCarousel from '@/components/PartnersCarousel';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

// Movie posters
import movie1 from '@/assets/movie-1.jpg';
import movie2 from '@/assets/movie-2.jpg';
import movie3 from '@/assets/movie-3.jpg';
import movie4 from '@/assets/movie-4.jpg';

// Series posters
import series1 from '@/assets/series-1.jpg';
import series2 from '@/assets/series-2.jpg';
import series3 from '@/assets/series-3.jpg';
import series4 from '@/assets/series-4.jpg';

const Index = () => {
  const movies = [
    { title: "Казахстанские легенды", image: movie1 },
    { title: "Степные просторы", image: movie2 },
    { title: "Алматы ночью", image: movie3 },
    { title: "Традиции предков", image: movie4 },
    { title: "Современный Казахстан" },
    { title: "Горные пейзажи" },
    { title: "Культурное наследие" }
  ];

  const series = [
    { title: "Семейная сага", image: series1 },
    { title: "Детективы Алматы", image: series2 },
    { title: "Исторические хроники", image: series3 },
    { title: "Молодежные истории", image: series4 },
    { title: "Любовь и судьба" },
    { title: "Бизнес в степи" },
    { title: "Таинственные события" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Movies Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="section-title mb-12">Фильмы</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {movies.map((movie) => (
                <ContentCard key={movie.title} title={movie.title} image={movie.image} />
              ))}
              <ContentCard 
                isAction={true} 
                actionText="Все фильмы"
                title=""
              />
            </div>
          </div>
        </section>

        {/* Series Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="section-title mb-12">Сериалы</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {series.map((serie) => (
                <ContentCard key={serie.title} title={serie.title} image={serie.image} />
              ))}
              <ContentCard 
                isAction={true} 
                actionText="Все сериалы"
                title=""
              />
            </div>
          </div>
        </section>

        <PartnersCarousel />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;