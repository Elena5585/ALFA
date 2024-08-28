import MainPage from '../pages/main-page/MainPage';
import CardPage from '../pages/card-page/CardPage';
import WhoopsPage from '../pages/whoops-page/WhoopsPage';



export const routes = [
    {path: '/', element: <MainPage/>},    
    {path: '/card', element: <CardPage/>},
    {path: '*', element: <WhoopsPage/>},
];