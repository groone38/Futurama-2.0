import { api } from "shared/config/api/instance";

class InfoService {
  getInfo() {
    return api.get("/info");
  }
}

export default InfoService;
