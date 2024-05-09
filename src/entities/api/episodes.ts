import { api } from "entities/config/api/instance";
import { Episodes } from "entities/model/Episodes";

class EpisodesService {
  getEpisodes() {
    return api.get<Episodes[]>("/episodes");
  }
}

export default EpisodesService;
