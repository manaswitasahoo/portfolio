export const Card = ({ cardData }: { cardData: any }) => {
  return (
    <a href={cardData.href} target="_blank" rel="noopener noreferrer" className="flex justify-center w-full">
      <div className="relative rounded-lg p-2 hover:bg-red-700 transition-colors flex justify-center w-full max-w-[240px]">
        <div className="relative w-60 h-60 rounded-lg"> {/* Changed to w-60 h-60 (240px) */}
          <img
            className="h-full w-full object-cover rounded-lg"
            src={cardData.imageUrl}
            alt={cardData.label}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
            <p className="text-center text-xl font-medium text-white">
              {cardData.label}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};