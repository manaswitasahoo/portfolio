import { Card } from './Card';

export const CardRow = ({ title, cards, isWatching = false }: { title: string; cards: any; isWatching?: boolean }) => {
  return (
    <div className="flex flex-col px-4 md:px-8 mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card: { label: string }) => (
          <div key={card.label} className="flex items-center justify-center">
            <Card cardData={{ ...card, href: '', imageUrl: '' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Replace the 'any' type with a proper type definition
// Change this line:
// something: any

// To something like:
// something: CardData[] or React.ReactNode or whatever is appropriate
