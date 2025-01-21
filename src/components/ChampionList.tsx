import { useState } from "react";
import { ChampionCard } from "./ChampionCard";
import { Input } from "./ui/input";
import { champions } from "../data/champions";
import { ChampionRole } from "../types/champion";
import { Button } from "./ui/button";

const roles: ChampionRole[] = ["Fighter", "Mage", "Assassin", "Marksman", "Support", "Tank"];

export const ChampionList = () => {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState<ChampionRole | "All">("All");

  const filteredChampions = champions.filter((champion) => {
    const matchesSearch = champion.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole === "All" || champion.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="font-rajdhani text-4xl font-bold mb-4">
          League of Legends Champions
        </h1>
        <p className="text-muted-foreground">
          Explore the diverse roster of champions in League of Legends
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-8 space-y-4">
        <Input
          type="search"
          placeholder="Search champions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedRole === "All" ? "default" : "secondary"}
            onClick={() => setSelectedRole("All")}
            className="rounded-full"
          >
            All
          </Button>
          {roles.map((role) => (
            <Button
              key={role}
              variant={selectedRole === role ? "default" : "secondary"}
              onClick={() => setSelectedRole(role)}
              className={`rounded-full role-${role.toLowerCase()}`}
            >
              {role}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChampions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};