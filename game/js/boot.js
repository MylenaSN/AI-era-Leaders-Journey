/**
 * Bootstrap — engine depende do pacote de conteúdo + adapters (brand, aluno/).
 * O BC Trilhas não depende deste runtime.
 */
import { MAP_ISLANDS } from "../content/map-islands.js";
import { startJornada } from "./app.js?v=20260911c";

startJornada({ islands: MAP_ISLANDS });
