import { useContext } from 'react';
import RoutesPrivate from "./routesPrivate"
import RoutesOpen from "./routesOpen"
import { authContext } from '../contexts/auth';

function Routes(){
    const { user } = useContext(authContext);
    return user.id_user ? <RoutesPrivate/> : <RoutesOpen/>
}
export default Routes;