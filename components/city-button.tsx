import Image from "next/image";
import { Button } from "./ui/button";

interface CityButtonProps {
  name: string;
  date: string;
  image: string;
  onClick: () => void;
}

export function CityButton({ name, date, image, onClick }: CityButtonProps) {
  return (
    <Button
      variant="ghost" // Removes background and border
      className="h-auto p-0 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" // Removes hover bg
      onClick={onClick}
    >
      <div className="flex flex-col items-center p-2">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-cover rounded-md border border-gray-200 dark:border-gray-700 mb-3" // Added rounded border
        />
        <h2 className="font-semibold text-center">{name}</h2>
        <p className="text-xs text-muted-foreground text-center">{date}</p>
      </div>
    </Button>
  );
}