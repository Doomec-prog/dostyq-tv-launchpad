interface ContentCardProps {
  title: string;
  image?: string;
  isAction?: boolean;
  actionText?: string;
}

const ContentCard = ({ title, image, isAction = false, actionText }: ContentCardProps) => {
  if (isAction) {
    return (
      <div className="content-card hover-scale min-h-[200px] flex flex-col items-center justify-center text-center cursor-pointer">
        <div className="text-dostyq-text text-xl font-semibold mb-4">
          {actionText}
        </div>
        <div className="text-dostyq-text text-3xl">
          &gt;&gt;
        </div>
      </div>
    );
  }

  return (
    <div className="content-card hover-scale">
      <div className="bg-gray-600 rounded-lg mb-3 h-40 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        ) : (
          <div className="text-dostyq-text text-4xl">🎬</div>
        )}
      </div>
      <h3 className="text-dostyq-text text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default ContentCard;