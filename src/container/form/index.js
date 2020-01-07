import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/app/header/header';
import Drawer from '../../components/app/drawer/Index';
import CreateProjectForm from '../../components/Form/CreateProjectForm';
import ProjectInfoForm from '../../components/Form/ProjectInfoForm';
import {ProtectedRoute} from '../../routes/ProtectedRoute'
import EditForm from '../../components/Form/EditForm';
class FormIndex extends Component {
    render() {
        return (
                <div className="dashboard-content-container">
                    <Switch>
                        <Route exact path="/form" component={CreateProjectForm} />
                        <Route path="/form/CreateProjectForm" component={CreateProjectForm} />
                        <Route path="/form/EditForm/:projectid" component={EditForm} />
                        <ProtectedRoute path='/form/ProjectInfoForm' component={ProjectInfoForm}/>
                    </Switch>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(FormIndex));