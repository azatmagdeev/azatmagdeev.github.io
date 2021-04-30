export type Competitions = {
  count: number;
  filters: {
    areas: [2077]
  };
  competitions: Competition[];
};

export type Competition = {
  id: number;
  area: Area;
  name: string;
  code: string | null;
  emblemUrl: string | null;
  plan: 'TIER_ONE' | 'TIER_TWO' | 'TIER_THREE' | 'TIER_FOUR';
  currentSeason: Season;
  numberOfAvailableSeasons: number;
  lastUpdated: Date | string;
  seasons: Season[];
};

type Area = {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl: string | null;
};

type Season = {
  id: number
  startDate: string; // '2020-09-11',
  endDate: string; // '2021-05-21',
  currentMatchday: number;
  winner: Team;
  availableStages: string;
};

export type Teams = {
  count: number;
  filters: {
    season: string;
    stage: string;
  };
  competition: Competition;
  season: Season;
  teams: Team[];
};

export type Team = {
  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string
};

export type Standings = {
  filters: {
    standingType: 'TOTAL' /*(default)*/ | 'HOME' | 'AWAY'
  };
  competition: Competition;
  season: Season;
  standings: Standing[]
};

export type Position = {
  position: number;
  team: Team;
  playedGames: number,
  won: number,
  draw: number,
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  form: string;
};

export type Standing = {
  stage: string;
  type: string;
  group: null | any; // todo: check!
  table: Position[];
};
