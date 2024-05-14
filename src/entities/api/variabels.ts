import CastService from "./cast";
import CharactersService from "./characters";
import EpisodesService from "./episodes";
import InfoService from "./info";
import InventoryService from "./inventory";

class Api {
  infoService = new InfoService();
  castService = new CastService();
  charactersService = new CharactersService();
  edisodesService = new EpisodesService();
  inventoryService = new InventoryService();
}

const api = new Api();
export default api;
