import React, { Component } from 'react';

import getViewerData from '../../helpers/viewer';
import { getTwitchAuth } from '../../helpers/shared';
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers/clientStorage';

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

  componentDidMount() {
    this.populateStateWithCachedData();
    this.getViewerData();
    this.interval = setInterval(() => this.getViewerData(), process.env.REACT_APP_UPDATE_INTERVAL);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { status } = this.state;
    if (status === 'ready' && nextState.status !== 'ready') {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async getViewerData() {
    getTwitchAuth(async (auth) => {
      try {
        const { channelId, token } = auth;
        const viewerData = await getViewerData(channelId, token);
        let viewerState;

        switch (viewerData.status) {
          case 200:
            viewerState = {
              isLoaded: true,
              status: 'ready',
              player: viewerData.player,
              ladders: viewerData.ladders,
            };
            this.setState(viewerState);
            this.cacheStateToLocalStorage(JSON.stringify(viewerState));
            break;
          case 404:
            viewerState = {
              isLoaded: false,
              status: 'not_found',
            };
            this.setState(viewerState);
            break;
          case 500:
            this.populateStateWithCachedData();
            break;
          default:
            viewerState = {
              isLoaded: false,
              status: 'error',
            };
        }
      } catch (e) {
        this.populateStateWithCachedData();
      }
    });
  }

  getCachedData = () => {
    const serializedCachedData = getFromLocalStorage('sc2ptedata');
    if (serializedCachedData) {
      const cachedDataObject = JSON.parse(serializedCachedData);
      return cachedDataObject;
    }
    return null;
  }

  cacheStateToLocalStorage = (data) => {
    saveToLocalStorage('sc2ptedata', data);
  }

  populateStateWithCachedData() {
    const cachedData = this.getCachedData();
    if (cachedData) {
      this.setState(cachedData);
    } else {
      this.setState({
        isLoaded: false,
        status: 'error',
      });
    }
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
