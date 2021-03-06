//ICONS
export const HEADER_LOGO =
  "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png";
export const SEARCH_ICON =
  "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png";

export const API_URL =
  "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas";

//LOCAL STORAGE CONFIG
export const APP_PREFIX = "loompas";
export const KEY_ITEMS = "items";
export const KEY_LAST_PAGE = "lastPage";
export const KEY_ITEM_ID = id => `${id}`;

// APP STATE REDUCERS
export const FETCH_ITEMS = "FETCH_ITEMS";
export const SET_ERROR = "SET_ERROR";

export const SEARCH_KEYS = ["name", "profession", "lastName"];
export const GENDER = value => (value === "F" ? "Woman" : "Man");
