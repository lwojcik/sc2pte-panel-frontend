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
// import ConfigStepPic1 from './Images/config-step-pic1.png';
// import ConfigStepPic2 from './Images/config-step-pic2.png';

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
              <p>Your StarCraft II profile URL looks like this:</p>
              <p><i>https://starcraft2.com/en-us/profile/2/1/5593296/</i></p>
              <p>or</p>
              <p><i>http://eu.battle.net/sc2/en/profile/5593296/1/Lukem/</i></p>
              <p>How do I know my StarCraft II profile URL?</p>
              <p><b>Method 1 - StarCraft II homepage:</b></p>
              <ol>
                <li>Login to <a href="https://starcraft2.com/" target="_blank" rel="noopener noreferrer">StarCraft II official website &raquo;</a></li>
                <li>
                  Copy the link labelled as <b>View Profile</b> in
                  top right corner of the page.
                </li>
              </ol>
              <p><b>Method 2 - StarCraft II Forums:</b></p>
              <ol>
                <li>
                  Login to <b>StarCraft II Forums</b> in your region:
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
                  Once logged in, copy the link labelled as <b>Profile</b> in
                  top right corner of the forum homepage.
                </li>
              </ol>
              <p>
                If you ever posted on StarCraft II forums,
                your profile URL is also visible under your portrait alongside each of your posts.
              </p>
              <p><b>Method 3 - try searching for your profile in any the following sites:</b></p>
              <ol>
                <li><a href="http://www.rankedftw.com/" target="_blank" rel="noopener noreferrer">Ranked FTW</a></li>
                <li><a href="https://sc2replaystats.com/ladder/index" target="_blank" rel="noopener noreferrer">Sc2ReplayStats</a></li>
                <li><a href="http://ggtracker.com/players" target="_blank" rel="noopener noreferrer">GGTracker</a></li>
              </ol>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
    /* eslint-enable react/jsx-one-expression-per-line */
  }
}

export default ConfigManual;
