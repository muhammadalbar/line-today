import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from './pages/Homepage'
import Bookmark from './pages/Bookmark'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/bookmark' component={Bookmark} />
                <Route exact path='/:topic' component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router