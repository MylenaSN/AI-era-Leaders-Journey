/**
 * Bootstrap — engine depende do pacote de conteúdo + adapters (brand, aluno/).
 * O BC Trilhas não depende deste runtime.
 */
import { MAP_ISLANDS } from "../content/map-islands.js";
import { startJornada } from "./app.js?v=20261013w";
import { bootMentorEditor } from "./mentor-editor.js?v=20261013w";

startJornada({ islands: MAP_ISLANDS });
bootMentorEditor();
