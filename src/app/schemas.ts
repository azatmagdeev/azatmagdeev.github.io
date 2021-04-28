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


// "winner": {
//   "id": 7522,
//     "name": "VfL Wolfsburg",
//     "shortName": null,
//     "tla": null,
//     "crestUrl": null
// }

// {
//   "message": "The resource you are looking for is restricted. Please pass a valid API token and check your subscription for permission.",
//   "errorCode": 403
// }
