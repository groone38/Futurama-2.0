import { api } from "entities/config/api/instance";
import { Characters } from "entities/model/Characters";

class CharactersService {
  getCharacters() {
    return api.get<Characters[]>("/characters");
  }
}

export default CharactersService;
