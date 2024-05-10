import { CastSchema } from "entities/model/Cast";
import { InfoSchema } from "entities/model/Info";
import { CharactersSchema } from "entities/model/Characters";
import { EpisodesSchema } from "entities/model/Episodes";
import { InventorySchema } from "entities/model/Inventory";

export interface StateSchema {
  info: InfoSchema;
  cast: CastSchema;
  characters: CharactersSchema;
  episodes: EpisodesSchema;
  inventory: InventorySchema;
}
