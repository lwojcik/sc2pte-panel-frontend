import React, { Component } from 'react';

import getViewerData from '../../helpers/viewer';
import { getTwitchAuth } from '../../helpers/shared';

import ViewerPanel from '../../components/ViewerPanel/ViewerPanel';
import ViewerPanelWrapper from '../../components/ViewerPanelWrapper/ViewerPanelWrapper';
import ViewerPanelMessage from '../../components/ViewerPanelMessage/ViewerPanelMessage';

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      status: 'loading',
      player: {
        server: '',
        name: '',
        clan: {
          name: '',
          tag: '',
        },
        rank: '',
        portrait: {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          offset: 0,
          url: '',
        },
      },
      ladders: {
        '1v1': {
          totalLadders: 0,
          topRankId: -1,
          topRank: '',
          topMMR: 0,
          wins: 0,
          losses: 0,
          ties: 0,
        },
        archon: {
          totalLadders: 0,
          topRankId: -1,
          topRank: '',
          topMMR: 0,
          wins: 0,
          losses: 0,
          ties: 0,
        },
        '2v2': {
          totalLadders: 0,
          topRankId: -1,
          topRank: '',
          topMMR: 0,
          wins: 0,
          losses: 0,
          ties: 0,
        },
        '3v3': {
          totalLadders: 0,
          topRankId: -1,
          topRank: '',
          topMMR: 0,
          wins: 0,
          losses: 0,
          ties: 0,
        },
        '4v4': {
          totalLadders: 0,
          topRankId: -1,
          topRank: '',
          topMMR: 0,
          wins: 0,
          losses: 0,
          ties: 0,
        },
      },
    };
  }

  async componentDidMount() {
    this.getViewerData();
  }

  async getViewerData() {
    getTwitchAuth(async (auth) => {
      const { channelId, token } = auth;
      const viewerData = await getViewerData(channelId, token);
      if (viewerData.status === 404) {
        this.setState({
          isLoaded: false,
          status: 'not_found',
        });
      } else if (viewerData.status === 200) {
        this.setState({
          isLoaded: true,
          status: 'ready',
          player: viewerData.player,
          ladders: viewerData.ladders,
        });
      } else {
        this.setState({
          isLoaded: false,
          status: 'error',
        });
      }
    });
  }

  render() {
    const {
      status,
      isLoaded,
      player,
      ladders,
    } = this.state;

    return (
      <ViewerPanelWrapper>
        {isLoaded
          ? <ViewerPanel playerData={player} ladderData={ladders} />
          : <ViewerPanelMessage status={status} /> }
      </ViewerPanelWrapper>
    );
  }
}

export default Viewer;
