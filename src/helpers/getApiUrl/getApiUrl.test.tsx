import getApiUrl, { ApiUrlType, ApiActivity } from './getApiUrl';

const types = [
  'config',
  'viewer',
] as ApiUrlType[];

const activities = [
  'get',
  'save',
] as ApiActivity[];

it('returns correct API url', () => {
  types.map(type =>
    activities.map(activity =>
      expect(
        getApiUrl({
          channelId: '123',
          type,
          activity,
        })
      ).toMatchSnapshot()
    )
  );
});

it('returns correct API url when no API version is provided', () => {
  jest.mock('src/config/api', () => {
    return jest.fn().mockImplementationOnce(() => ({
      version: '',
    }));
  });

  types.map(type =>
    activities.map(activity =>
      expect(
        getApiUrl({
          channelId: '123',
          type,
          activity,
        })
      ).toMatchSnapshot()
    )
  );
});