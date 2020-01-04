import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './dist/style.css';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import NavItemGroup from './NavItemGroup';
import { handleDrawerToggleChange } from '../../../actions/ProjectInfoAction';

class Drawer extends Component{
    componentDidMount() {
        const slidedrop = document.querySelectorAll(".drawer-navmenu");
        for (const slideitem of slidedrop) {
          const items = slideitem.querySelectorAll(".drawer-item");
          for (const item of items) {
            const head = item.querySelector(".drawer-link");
            head.addEventListener('click', () => {
              for (const otherPanel of items) {
                if (otherPanel !== item) {
                  otherPanel.classList.remove('open');
                }
              }
              item.classList.toggle('open');
            });
          }
        }
    }
    handleDrawerToggle(e){
        this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
      }
    render(){
        return(
            <aside className={this.props.toggleStatus ? "drawer-wrapper" : "drawer-wrapper closed"}>
                <nav className="drawer-navigation">
                    <span className="navgroup-title">Main </span>
                    <ul className="drawer-navmenu">
                    <NavItem navMenuTitle="Create Project" navMenuImage={'analytics.svg'} navMenuIcon={""} navURL="/form/CreateProjectForm"></NavItem>
                        <NavItem navMenuTitle="Project List" navMenuImage={'analytics.svg'} navMenuIcon={""} navURL="/form/ProjectInfoForm"></NavItem>
                        {/*<NavItem navMenuTitle="Dashbaord 3" navMenuImage={'dashboard.svg'} navMenuIcon={''} navURL="#"/>
                        <NavItem navMenuTitle="Dashbaord 4" navMenuImage={'project.svg'} navMenuIcon={''} navURL="#"/>
                        <NavItemGroup navMenuTitle="Dashbaord 5" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Sub Item 1" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Sub Item 2" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 3" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 4" navSubMenuUrl="#"/>
                        </NavItemGroup>
                        <NavItemGroup navMenuTitle="Dashbaord 6" navMenuImage={'alert.svg'} navURL="#" hasSubmenuClass="nav-dropdown-menu" >
                            <NavSubItem navSubMenuTitle="Sub Item 1" navSubMenuUrl="/dashboard"/>
                            <NavSubItem navSubMenuTitle="Sub Item 2" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 3" navSubMenuUrl="#"/>
                            <NavSubItem navSubMenuTitle="Sub Item 4" navSubMenuUrl="#"/>
                        </NavItemGroup> */}
                    </ul>
                </nav>
            </aside>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}
export default withRouter(connect(mapStateToProps)(Drawer));
