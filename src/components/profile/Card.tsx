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
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <Image
          src={cardData.imageUrl}
          alt={`${cardData.label} - Portfolio Section`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform hover:scale-105"
          {...(cardData.priority ? { priority: true } : { loading: 'lazy' })}
        />
      </div>
      <h3 className="mt-2 text-lg font-medium">{cardData.label}</h3>
    </Link>
  );
}