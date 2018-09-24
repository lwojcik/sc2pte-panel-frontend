import React, { Component } from 'react';

import StatusMessage from '../../components/StatusMessage/StatusMessage';
import ConfigForm from '../../components/ConfigForm/ConfigForm';
import ConfigManual from '../../components/ConfigManual/ConfigManual';
import ConfigWrapper from '../../components/ConfigWrapper/ConfigWrapper';
import Footer from '../../components/Footer/Footer';

import { getTwitchAuth, determineLanguage } from '../../helpers/shared';
import {
  getConfig,
  saveConfig,
  constructProfileUrl,
  unpackProfileUrl,
} from '../../helpers/config';

import Phrases from '../../constants/phrases';

class Config extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      status: {
        type: 'info',
        message: Phrases[determineLanguage(props)].config.loading,
        throbberVisible: true,
      },
      submissionDisabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      getTwitchAuth(async (auth) => {
        const { channelId, token } = auth;
        const playerConfig = await getConfig(channelId, token);

        if (playerConfig.status === 404) {
          this.setState({
            channelId,
            token,
            status: {
              type: 'warning',
              message: 'config_get_no_config_found_warning',
              throbberVisible: false,
            },
            submissionDisabled: false,
          });
        } else if (playerConfig.status === 200) {
          const {
            server,
            playerid,
            region,
            name,
          } = playerConfig;

          const profileUrl = constructProfileUrl(server, playerid, region, name);

          this.setState({
            channelId,
            token,
            profileUrl,
            ...playerConfig,
            status: {
              type: 'success',
              message: 'config_get_success',
              throbberVisible: false,
            },
            submissionDisabled: false,
          });
        } else {
          this.setState({
            status: {
              channelId,
              token,
              type: 'danger',
              message: 'config_get_error',
              throbberVisible: false,
            },
            submissionDisabled: false,
          });
        }
      });
    } catch (error) {
      this.setState({
        status: {
          type: 'danger',
          message: 'config_get_error',
          throbberVisible: false,
        },
        submissionDisabled: false,
      });
    }
  }

  async handleSubmit(formValues) {
    try {
      const { channelId, token } = this.state;
      const configDataValues = unpackProfileUrl(formValues.profileUrl);
      const payload = {
        ...configDataValues,
        token,
      };
      this.setState({
        status: {
          type: 'info',
          message: 'config_save_inprogress',
          throbberVisible: true,
        },
        submissionDisabled: true,
      });

      const response = await saveConfig(channelId, payload);

      if (response.status === 201) {
        this.setState({
          status: {
            type: 'success',
            message: 'config_save_success',
            throbberVisible: false,
          },
          submissionDisabled: false,
        });
      } else {
        this.setState({
          status: {
            type: 'danger',
            message: 'config_save_error',
            throbberVisible: false,
          },
          submissionDisabled: false,
        });
      }
    } catch (error) {
      this.setState({
        status: {
          type: 'danger',
          message: 'config_save_error',
          throbberVisible: false,
        },
        submissionDisabled: false,
      });
    }
  }

  render() {
    const lang = determineLanguage(this.props);
    const {
      status,
      profileUrl,
      submissionDisabled,
    } = this.state;

    return (
      <ConfigWrapper>
        <StatusMessage
          type={status.type}
          content={Phrases[lang].config.messages[status.message]}
          throbberVisible={status.throbberVisible}
        />
        <ConfigForm
          phrases={Phrases[lang].config}
          onSubmit={this.handleSubmit}
          profileUrl={profileUrl}
          submissionDisabled={submissionDisabled}
        />
        <ConfigManual phrases={Phrases[lang].config.manual} />
        <Footer />
      </ConfigWrapper>
    );
  }
}

export default Config;
