import {extend} from "../../utils";
import {sortPeople} from "../../utils";
import {initialState as initialStateOfStates} from "../states/states";

const initialState = {
    people: [],
    sortedPeople: [],
    filteredPeople: [],
    isLoading: true
};

const ActionType = {
    LOAD_PEOPLE: `LOAD_PEOPLE`,
    CHANGE_IS_LOADED_FLAG: `CHANGE_IS_LOADED_FLAG`,
    UPDATE_PEOPLE_ID_FAVORITE: `UPDATE_PEOPLE_ID_FAVORITE`,
    SORT_PEOPLE: `SORT_PEOPLE`,
    FILTER_PEOPLE: `FILTER_PEOPLE`
};

const ActionCreatorByData = {
    loadPeople: (people) => {
        return {
            type: ActionType.LOAD_PEOPLE,
            payload: people,
        };
    },
    changeIsLoadedFlag: (flag) => {
        return {
            type: ActionType.CHANGE_IS_LOADED_FLAG,
            payload: flag,
        };
    },
    updatePeopleFavorite: (peopleId) => {
        return {
            type: ActionType.UPDATE_PEOPLE_ID_FAVORITE,
            payload: peopleId,
        };
    },
    sortPeople: (sortBy, sortType) => {
        return {
            type: ActionType.SORT_PEOPLE,
            payload: {sortBy, sortType},
        };
    },
    filterPeople: (name) => {
        return {
            type: ActionType.FILTER_PEOPLE,
            payload: name,
        };
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_PEOPLE:
            return extend(state, {
                people: action.payload,
                sortedPeople: sortPeople(state, initialStateOfStates.activeSortBy, initialStateOfStates.activeSortType, action.payload).sortedPeople
            });

        case ActionType.CHANGE_IS_LOADED_FLAG:
            return extend(state, {
                isLoading: action.payload,
            });

        case ActionType.UPDATE_PEOPLE_ID_FAVORITE:
            const peopleId = action.payload;

            const people = state.people.map((peopleItem) => {
                if (peopleItem.id === peopleId) {
                    peopleItem = Object.assign({}, peopleItem, {favourite: !peopleItem.favourite});
                }
                return peopleItem;
            });

            const peopleBySort = state.sortedPeople.map((peopleItem) => {
                if (peopleItem.id === peopleId) {
                    peopleItem = Object.assign({}, peopleItem, {favourite: !peopleItem.favourite});
                }
                return peopleItem;
            });

            const peopleByFilter = state.filteredPeople.map((peopleItem) => {
                if (peopleItem.id === peopleId) {
                    peopleItem = Object.assign({}, peopleItem, {favourite: !peopleItem.favourite});
                }
                return peopleItem;
            });

            return extend(state, {
                people,
                sortedPeople: peopleBySort,
                filteredPeople: peopleByFilter
            });

        case ActionType.SORT_PEOPLE:
            const {sortBy, sortType} = action.payload;

            const getPeople = sortPeople(state, sortBy, sortType);

            return extend(state, {
                sortedPeople: getPeople.sortedPeople,
                filteredPeople: getPeople.filteredPeople
            });

        case ActionType.FILTER_PEOPLE:
            const textElements = action.payload.split(' ');

            const filteredPeople = state.sortedPeople.filter((peopleItem) => {
                const searchTextFirst = textElements[0].toLowerCase() + ' ' + (textElements[1] ? textElements[1].toLowerCase() : '');
                const searchTextSecond = textElements[1] ? textElements[1].toLowerCase() + ' ' + textElements[0].toLowerCase() : textElements[0].toLowerCase();

                if (peopleItem.name.toLowerCase().indexOf(searchTextFirst) > -1 || peopleItem.name.toLowerCase().indexOf(searchTextSecond) > -1) {
                    return peopleItem;
                }

            });

            return extend(state, {
                filteredPeople
            });
    }
    return state;
};


const Operations = {
    loadPeople: () => (dispatch) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // console.log('responseText:' + xmlhttp.responseText);
                try {
                    const data = JSON.parse(xmlhttp.responseText);
                    dispatch(ActionCreatorByData.loadPeople(data));
                    dispatch(ActionCreatorByData.changeIsLoadedFlag(false));
                } catch(err) {
                    // console.log(err.message + " in " + xmlhttp.responseText);
                    dispatch(ActionCreatorByData.changeIsLoadedFlag(false));
                }
            }
        };

        xmlhttp.open("GET", `${window.location.pathname}data/data.json`, true);
        xmlhttp.send();
    }
};


export {reducer, ActionType, ActionCreatorByData, Operations, initialState};
