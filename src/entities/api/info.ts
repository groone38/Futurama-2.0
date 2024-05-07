import { Info } from "entities/Info";
import { api } from "entities/config/api/instance";

class InfoService {
  getInfo() {
    return api.get<Info[]>("/info");
  }
}

export default InfoService;
