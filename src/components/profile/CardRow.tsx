import { Card } from './Card';

interface CardData {
  label: string;
  href?: string;
  imageUrl?: string;
}

interface CardRowProps {
  title: string;
  cards: CardData[];
  isWatching?: boolean;
}

export const CardRow = ({ title, cards, isWatching = false }: CardRowProps) => {
  return (
    <div className="flex flex-col px-4 md:px-8 mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="flex items-center justify-center">
            <Card cardData={{ ...card, href: '', imageUrl: '' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
