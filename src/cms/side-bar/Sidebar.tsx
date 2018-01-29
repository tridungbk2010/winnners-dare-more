import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

interface Route {
  route: string;
  name: string;
  icon?: string;
}
const routes: Route[] = [
  { route: '/admin', name: 'All Videos', icon: 'fa-play-circle' },
  { route: '/admin/approved', name: 'Approved Video', icon: 'fa-check' },
  { route: '/admin/drafts', name: 'Drafts', icon: 'fa-edit' },
  { route: '/admin/declined', name: 'Declined Videos', icon: 'fa-trash-alt' },
];

interface State {
  index: number;
}
class Sidebar extends React.Component<Object, State> {
  state = {
    index: 0,
  };

  activeMenu = (index: number): void => {
    this.setState({ index });
  };

  render() {
    return (
      <div className={`admin-side-bar`}>
        <ul>
          {routes.map((route: Route, i: number) => (
            <li
              key={i}
              onClick={this.activeMenu.bind(this, i)}
              className={this.state.index === i ? 'active' : ''}
            >
              <NavLink to={route.route}>
                <i className={`fas ${route.icon}`} />
                <span>{route.name}</span>
                </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
