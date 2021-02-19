import getApiUrl from './getApiUrl';
import { ApiUrlType, ApiActivity } from 'types';

const types = [
  'config',
  'viewer',
] as ApiUrlType[];

const activities = [
  'get',
  'save',
] as ApiActivity[];

const config = (
  type: ApiUrlType,
  activity: ApiActivity,
) => ({
  channelId: '123',
  type,
  activity,
});

it('returns correct API url', () => {
  types.map(type =>
    activities.map(activity =>
      expect(
        getApiUrl(
          config(type, activity)
        )
      ).toMatchSnapshot()
    )
  );
});

it('returns correct API url when no API version is provided', () => {
  jest.mock('src/config/api/api', () => {
    return jest.fn().mockImplementationOnce(() => ({
      version: '',
    }));
  });

  types.map(type =>
    activities.map(activity =>
      expect(
        getApiUrl(
          config(type, activity)
        )
      ).toMatchSnapshot()
    )
  );
});
