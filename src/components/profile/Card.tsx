import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  cardData: {
    href: string;
    imageUrl: string;
    label: string;
    priority?: boolean;
  };
}

export function Card({ cardData }: CardProps) {
  return (
    <Link href={cardData.href}>
      <div className="relative group">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]">
          <Image
            src={cardData.imageUrl}
            alt={`${cardData.label} - Portfolio Section`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            {...(cardData.priority ? { priority: true } : { loading: 'lazy' })}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <h3 className="p-3 text-lg font-medium text-white">{cardData.label}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}