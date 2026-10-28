/**
 * Bootstrap — engine depende do pacote de conteúdo + adapters (brand, aluno/).
 * O BC Trilhas não depende deste runtime.
 */
import { MAP_ISLANDS } from "../content/map-islands.js?v=20261028a";
import { startJornada } from "./app.js?v=20261028a";
import { bootMentorEditor } from "./mentor-editor.js?v=20261023a";

startJornada({ islands: MAP_ISLANDS });
bootMentorEditor();
