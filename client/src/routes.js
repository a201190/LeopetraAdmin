import React from "react"
import { Switch, Route } from 'react-router-dom'
import Login from 'containers/Login';
import ManagePetFeatures from 'containers/ManagePetFeatures';
import ManagePet from 'containers/ManagePet';
import ManageVets from 'containers/ManageVets';
import ManagePetShop from 'containers/ManagePetShop';
import ManagePetGrooms from 'containers/ManagePetGrooms';
import ManagePetTrainers from 'containers/ManagePetTrainers';
import ManageEvents from 'containers/ManageEvents';
import ManageArticles from 'containers/ManageArticles';
import ManageResturents from 'containers/ManageResturents';
import ManageAdoption from 'containers/ManageAdoption';
import AddPets from 'containers/ManagePet/AddPets';
import AddVets from 'containers/ManageVets/AddVets';
import AddPetShop from 'containers/ManagePetShop/AddPetShop';
import AddPetGroom from 'containers/ManagePetGrooms/AddPetGroom';
import AddPetTrainer from 'containers/ManagePetTrainers/AddPetTrainer';
import AddEvent from 'containers/ManageEvents/AddEvent';
import AddArticles from 'containers/ManageArticles/AddArticles';
import AddResturent from 'containers/ManageResturents/AddResturent';
class MainRoutes extends React.Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/ManagePetFeature' component={ManagePetFeatures} />
        <Route exact path='/ManagePet' component={ManagePet} />
        <Route exact path='/ManageVets' component={ManageVets} />
        <Route exact path='/ManagePetShops' component={ManagePetShop} />
        <Route exact path='/ManagePetGrooms' component={ManagePetGrooms} />
        <Route exact path='/ManagePetTrainers' component={ManagePetTrainers} />
        <Route exact path='/ManageEvents' component={ManageEvents} />
        <Route exact path='/ManageArticles' component={ManageArticles} />
        <Route exact path='/ManageResturents' component={ManageResturents} />
        <Route exact path='/ManageAdoptions' component={ManageAdoption} />
        <Route  path='/ManagePet/AddPets' component={AddPets} />
        <Route  path='/ManageVets/AddVets' component={AddVets} />
        <Route path='/ManagePetShops/AddPetShop' component={AddPetShop}/>
        <Route path='/ManagePetGrooms/AddPetGroom' component={AddPetGroom}/>
        <Route path='/ManagePetTrainers/AddPetTrainer' component={AddPetTrainer}/>
        <Route path='/ManageEvents/AddEvent' component={AddEvent}/>
        <Route path='/ManageArticles/AddArticle' component={AddArticles}/>
        <Route path='/ManageResturents/AddResturent' component={AddResturent}/>
      </Switch>
    )
  }
}

export default MainRoutes;
