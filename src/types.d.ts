import { MixedSchema } from 'yup';

export type FetchMethod = 'GET' | 'POST';

export type ApiUrlType = 'config' | 'viewer';
export type ApiActivity = 'get' | 'save';

export type SchemaType =
  'mixed'
  | 'string'
  | 'number'
  | 'boolean'
  | 'bool'
  | 'date'
  | 'array'
  | 'object';

export type ValidationMethod =
  (this: MixedSchema<unknown>, ...args: unknown[]) =>
    MixedSchema<unknown>;

export type ServerLocale =
  'us'
  | 'eu'
  | 'kr'
  | 'cn';

export type ResultType =
  'win'
  | 'loss'
  | 'left';

export type Rank =
  'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'master'
  | 'grandmaster'
  | '';

export type Tier = 1 | 2 | 3 | 4;

export type GameType = 'solo' | 'team';

export type Race =
  'terran'
  | 'zerg'
  | 'protoss'
  | 'random';

export type LadderGameMode =
  '1v1'
  | '2v2'
  | '3v3'
  | '4v4'
  | 'Archon';

export type GameMode =
  LadderGameMode
  | 'Custom'
  | 'Co-Op'
  | '(Unknown)';

export interface FetchParams {
  url: string;
  method?: FetchMethod;
  headers?: FetchHeaders;
}

export interface PlayerObject {
  clan: {
    name: string;
    tag: string;
  };
  name: string;
  server: ServerLocale;
}

export interface PortraitObject {
  url: string;
  frame: Rank;
}

export interface HeadingObject {
  portrait: PortraitObject;
  player: PlayerObject;
}

export interface StatsObject {
  totalRankedGamesThisSeason: number;
  seasonWinRatio: number;
  totalCareerGames: number;
  highestSoloRank: Rank;
  highestTeamRank: Rank;
}

export interface MatchObject {
  mapName: string;
  mode: GameMode;
  result: ResultType;
  date: number;
}

export interface LadderObject {
  mode: LadderGameMode;
  rank: Rank;
  wins: number;
  losses: number;
  race: Race;
  mmr: number;
  divisionRank: number;
  teamMembers: string[];
}

export interface DetailsObject {
  snapshot: LadderObject[];
  stats: StatsObject;
  history: MatchObject[];
}

export interface ProfileObject {
  heading: HeadingObject;
  details: DetailsObject;
}

export interface FetchHeaders {
  [key: string]: string;
}

export interface ConfigData {
  profiles: string[];
}

export interface Sc2ProfileObject {
  regionId: number;
  realmId: number;
  profileId: string;
  locale: string;
}

export interface ViewerData {
  channelId: string;
  data: {
    profiles: ProfileObject[];
  }
  error?: Boolean;
}
