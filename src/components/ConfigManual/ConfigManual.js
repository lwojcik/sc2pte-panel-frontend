import React, { Component } from 'react';

import {
  Button, // eslint-disable-line
  ButtonGroup, // eslint-disable-line
  Collapse, // eslint-disable-line
  Card, // eslint-disable-line
  CardHeader,
  CardBody, // eslint-disable-line
} from 'reactstrap';

class ConfigManual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false, // eslint-disable-line
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  render() {
    const { phrases } = this.props; // eslint-disable-line
    const { collapse } = this.state; // eslint-disable-line

    return (
      <div className="ConfigManual">
        <Card>
          <CardHeader>
            <Button color="link" onClick={this.toggle}>
              {phrases.button.label}
            </Button>
          </CardHeader>
          <Collapse isOpen={collapse}>
            <CardBody>
              {phrases.content.step}
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

// const ConfigManual = ({ phrases }) => ( // eslint-disable-line
//   <React.Fragment>
//     <Button color="link">
//       {phrases.button.label}
//     </Button>
//     <Collapse isOpen>
//       <Card>
//         <CardBody>
//           {phrases.content.step}
//         </CardBody>
//       </Card>
//     </Collapse>
//   </React.Fragment>
// );

export default ConfigManual;
