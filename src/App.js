import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Signin from './Pages/signin'
import Signup from './Pages/signup'
import Browse from './Pages/Browse'
import * as ROUTES from './Routes/routes'
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { IsUserRedirect, ProtectedRoute } from './Helpers/route'
import useAuthListener  from './hooks/use-auth';


export function App() {
    const { user } = useAuthListener();
 return (
    <Router>
    <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Home />
        </IsUserRedirect>
    </Switch>
</Router>
  );
}
export default App;
