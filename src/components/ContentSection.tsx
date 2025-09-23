import ContentCard from '@/components/ContentCard';

interface ContentItem {
  title: string;
  image?: string;
}

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
  actionText: string;
}

const ContentSection = ({ title, items, actionText }: ContentSectionProps) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="section-title mb-12">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map(({ title: itemTitle, image }) => (
          <ContentCard key={itemTitle} title={itemTitle} image={image} />
        ))}
        <ContentCard isAction actionText={actionText} title="" />
      </div>
    </div>
  </section>
);

export default ContentSection;
