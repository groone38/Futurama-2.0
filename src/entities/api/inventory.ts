import { api } from "entities/config/api/instance";
import { Inventory } from "entities/model/Inventory";

class InventoryService {
  getEpisodes() {
    return api.get<Inventory[]>("/inventory");
  }
}

export default InventoryService;
