import Phrases from '../constants/phrases';

export function determineLanguage(props) {
  const { location } = props;
  const { search } = location;
  const params = new URLSearchParams(search);
  const language = params.get('language');
  if (Phrases[language]) {
    return language;
  }
  return 'en';
}

export function getTwitchAuth(callback) {
  window.Twitch.ext.onAuthorized(callback);
}
