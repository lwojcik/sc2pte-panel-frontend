import React, { Component } from 'react';

import {
  Button, // eslint-disable-line
  ButtonGroup, // eslint-disable-line
  Collapse, // eslint-disable-line
  Card, // eslint-disable-line
  CardHeader,
  CardBody, // eslint-disable-line
} from 'reactstrap';

import './ConfigManual.css';
import ConfigStepPic1 from './Images/config-step-pic1.png';
import ConfigStepPic2 from './Images/config-step-pic2.png';

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

    /* eslint-disable react/jsx-one-expression-per-line */
    return (
      <div className="ConfigManual">
        <Card>
          <CardHeader>
            <Button color="link" onClick={this.toggle} className="CollapseManualButton">
              {phrases.button.label}
            </Button>
          </CardHeader>
          <Collapse isOpen={collapse}>
            <CardBody>
              <ol>
                <li>
                  Go to <b>StarCraft II Forums</b> in your player profile region:
                  <ul className="forumUrls">
                    <li>
                      <a href="https://us.battle.net/forums/en/sc2/" target="_blank" rel="noopener noreferrer">
                        StarCraft II Forums - Americas & Oceania &raquo;
                      </a>
                    </li>
                    <li>
                      <a href="https://eu.battle.net/forums/en/sc2/" target="_blank" rel="noopener noreferrer">
                        StarCraft II Forums - Europe &raquo;
                      </a>
                    </li>
                    <li>
                      <a href="https://kr.battle.net/forums/ko/sc2/" target="_blank" rel="noopener noreferrer">
                        StarCraft II Forums - Korea &raquo;
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Select <b>My Account</b>, then <b>Log In</b>.
                  <br />
                  <img src={ConfigStepPic1} alt="" />
                </li>
                <li>
                  Log in using your Blizzard account credentials.
                </li>
                <li>
                  On the forum page click <b>Posting as:</b>. Select <b>Profile</b>.<br />
                  <img src={ConfigStepPic2} alt="" />
                </li>
                <li>
                  Log in again if prompted.
                </li>
                <li>You should be redirected to your StarCraft II profile page.</li>
                <li>Look at the URL of your profile page and copy the
                  following info to the config form above:<br /><br />
                  http://&nbsp;<b>[Server]</b>&nbsp;.battle.net/sc2/en/profile/&nbsp;<b>[Player&nbsp;ID]</b>&nbsp;/&nbsp;
                  <b>[Region]</b>&nbsp;/&nbsp;<b>[Name]</b>
                </li>
                <li>
                  Click <b>Submit</b> to save your data in the extension.
                </li>
                <li>
                  <b>Done!</b> Add the extension to one of the panels in your channel page.
                </li>
              </ol>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
    /* eslint-enable react/jsx-one-expression-per-line */
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
