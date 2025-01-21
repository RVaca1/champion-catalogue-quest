export type ChampionRole = "Fighter" | "Mage" | "Assassin" | "Marksman" | "Support" | "Tank";

export interface Champion {
  id: string;
  name: string;
  title: string;
  role: ChampionRole;
  difficulty: 1 | 2 | 3;
  imageUrl: string;
  videoUrl?: string;
}