import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeView from './pages/HomeView'
import CategoryView from './pages/CategoryView'
import PostView from './pages/PostView'
import NewPostView from './pages/NewPostView'
import PostEdit from './pages/PostEdit'
import Error404 from './pages/Error404'
import SearchView from './pages/SearchView'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeView} />
    <Route path="/search/posts/:search" exact component={props => <SearchView {...props} />} />
    <Route path="/page/error/404" exact component={props => <Error404 {...props} />} />
    <Route path="/post/new" component={props => <NewPostView {...props} />} />
    <Route path="/:category" exact component={props => <CategoryView {...props} />} />
    <Route path="/:category/:id" exact component={props => <PostView {...props} />} />
    <Route path="/:category/:id/edit" component={props => <PostEdit {...props} />} />
    
  </Switch>
)

export default Routes
