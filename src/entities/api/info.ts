import { api } from "entities/config/api/instance";

class InfoService {
  getInfo() {
    return api.get("/info");
  }
}

export default InfoService;
