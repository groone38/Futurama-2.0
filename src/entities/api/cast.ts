import { Cast } from "entities/model/Cast";
import { api } from "entities/config/api/instance";

class CastService {
  getCast() {
    return api.get<Cast[]>("/cast");
  }
}

export default CastService;
