import NameSpace from "../name-space";
export const getPeople = (state) => state[NameSpace.DATA].people;
export const getIsLoading = (state) => state[NameSpace.DATA].isLoading;
export const getSortedPeople = (state) => state[NameSpace.DATA].sortedPeople;
export const getFilteredPeople = (state) => state[NameSpace.DATA].filteredPeople;
