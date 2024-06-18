import Home from '~/pages/Home';
import Game from '~/pages/GamePage';
import CharacterPage from '~/pages/CharacterPage';
import CharacterPageId from '~/pages/CharacterPage/CharacterPageId';
import InformationPage from '~/pages/InformationPage';

const publishRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/game', component: Game },
    { path: '/character', component: CharacterPage },
    { path: '/character/:id', component: CharacterPageId },
    { path: '/information', component: InformationPage, layout: null },
];

export default publishRoutes;
