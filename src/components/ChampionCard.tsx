import { useState } from "react";
import { Champion } from "../types/champion";
import { Card } from "./ui/card";

interface ChampionCardProps {
  champion: Champion;
}

export const ChampionCard = ({ champion }: ChampionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`champion-card border-2 role-${champion.role.toLowerCase()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
        {champion.videoUrl && isHovered ? (
          <video
            src={champion.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src={champion.imageUrl}
            alt={champion.name}
            className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-rajdhani font-bold text-xl">{champion.name}</h3>
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-secondary">
            {champion.role}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{champion.title}</p>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < champion.difficulty
                  ? "bg-primary"
                  : "bg-secondary"
              }`}
            />
          ))}
          <span className="text-xs ml-2 text-muted-foreground">Difficulty</span>
        </div>
      </div>
    </Card>
  );
};