/**
 * Bootstrap — engine depende do pacote de conteúdo + adapters (brand, aluno/).
 * O BC Trilhas não depende deste runtime.
 */
import { MAP_ISLANDS } from "../content/map-islands.js";
import { startJornada } from "./app.js?v=20261013m";
import { bootMentorEditor } from "./mentor-editor.js?v=20261013m";

startJornada({ islands: MAP_ISLANDS });
bootMentorEditor();
