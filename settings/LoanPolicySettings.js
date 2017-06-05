import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';

import Paneset from '@folio/stripes-components/lib/Paneset';
import Pane from '@folio/stripes-components/lib/Pane';
import PaneMenu from '@folio/stripes-components/lib/PaneMenu';
import Icon from '@folio/stripes-components/lib/Icon';
import NavList from '@folio/stripes-components/lib/NavList';
import NavListSection from '@folio/stripes-components/lib/NavListSection';

class LoanPolicySettings extends React.Component {

  static propTypes = {
    // data: PropTypes.object.isRequired,
  };

  static manifest = Object.freeze({

  });

  constructor(props) {
    super(props);

    this.state = {
      selectedPolicy: null,
      loanPolicies: [{id: 1, name: 'Policy 1'}, {id: 2, name: 'Policy 2'}],
    }

    this.onSelectRow = this.onSelectRow.bind(this);
    this.createNewPolicy = this.createNewPolicy.bind(this);
  };

  onSelectRow(e) {
    e.preventDefault();
    const selectedId = e.target.dataset.id;
    this.setState({ selectedPolicy: _.find(this.state.loanPolicies, { id: selectedId })});
  };

  createNewPolicy() {
    const newPolicy = {id: this.state.loanPolicies.length + 1, name: 'Untitled loan policy'};
    const newPolicyArray = this.state.loanPolicies.slice();
    newPolicyArray.push(newPolicy);
    this.setState({
      loanPolicies: newPolicyArray,
      selectedPolicy: { id: newPolicy.id },
    });
  };

  render() {
    const { data } = this.props;
    //const policies = data.loanPolicies;
    const policies = this.state.loanPolicies;

    const policyDisplay = policies != null ? policies.map(p =>
      <a
        key={p.id}
        href={`#${p.name}`}
        onClick={this.onSelectRow}>
          {p.name ? p.name : 'Untitled loan policy'}
      </a>) : null;

    const LoanPolicyLastMenu = (
      <PaneMenu>
        <button title="Add loan policy" onClick={this.createNewPolicy}>
          <Icon icon="plus-sign" />
        </button>
      </PaneMenu>
    );

    return (
      <Paneset nested>
        <Pane defaultWidth="20%" lastMenu={LoanPolicyLastMenu}>
          <NavList>
            <NavListSection activeLink={this.state.selectedPolicy ? `#${this.state.selectedPolicy.id}` : ''}>
              {policyDisplay}
            </NavListSection>
          </NavList>
        </Pane>
      </Paneset>
    );
  }

}

export default LoanPolicySettings;
