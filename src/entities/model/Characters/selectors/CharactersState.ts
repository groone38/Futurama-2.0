import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store/types";

export const getCharactersState = (state: StateSchema) => state.characters;

export const getCharacterState = (state: StateSchema) => state.character;
