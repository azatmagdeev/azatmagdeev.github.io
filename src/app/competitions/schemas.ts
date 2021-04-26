export type Data = {
  count: number;
  filters: {
    areas: [2077]
  };
  competitions: Competition[];
};

type Competition = {
  id: number;
  area: Area;
  name: string;
  code: string | null;
  emblemUrl: string | null;
  plan: 'TIER_ONE' | 'TIER_TWO' | 'TIER_THREE' | 'TIER_FOUR';
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date | string;
};


type Area = {
  id: number;
    name: string;
    countryCode: string;
    ensignUrl: string | null;
};

type CurrentSeason = {
  id: number
  startDate: string; // '2020-09-11',
  endDate: string; // '2021-05-21',
  currentMatchday: number;
  // winner: null // Team?
};

// "winner": {
//   "id": 7522,
//     "name": "VfL Wolfsburg",
//     "shortName": null,
//     "tla": null,
//     "crestUrl": null
// }
