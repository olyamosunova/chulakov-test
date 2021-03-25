import {extend} from "../../utils";
import {SORT_BY, SORT_TYPE, FILTER_TYPE, LANGUAGE_MODE} from "../../const";
import {getParamsURL, updateURL} from "../../utils";

const initialState = {
    activeSortBy: getParamsURL('sort_by') ? getParamsURL('sort_by') : SORT_BY.ID,
    activeSortType: getParamsURL('sort_type') ? getParamsURL('sort_type') : SORT_TYPE.INCREASE,
    activeViewType: getParamsURL('view_type') ? getParamsURL('view_type') : FILTER_TYPE.TABLE,
    activeLanguageMode: LANGUAGE_MODE.RU
};

const ActionType = {
    CHANGE_ACTIVE_SORT_BY: `CHANGE_ACTIVE_SORT_BY`,
    CHANGE_ACTIVE_SORT_TYPE: `CHANGE_ACTIVE_SORT_TYPE`,
    CHANGE_ACTIVE_VIEW_TYPE: `CHANGE_ACTIVE_VIEW_TYPE`,
    CHANGE_LANGUAGE_MODE: `CHANGE_LANGUAGE_MODE`
};

const ActionCreatorByStates = {
    changeActiveSortBy: (type) => {
        return {
            type: ActionType.CHANGE_ACTIVE_SORT_BY,
            payload: type,
        };
    },
    changeActiveSortType: (type) => {
        return {
            type: ActionType.CHANGE_ACTIVE_SORT_TYPE,
            payload: type,
        };
    },
    changeActiveViewType: (type) => {
        return {
            type: ActionType.CHANGE_ACTIVE_VIEW_TYPE,
            payload: type,
        };
    },
    changeLanguageMode: (mode) => {
        return {
            type: ActionType.CHANGE_LANGUAGE_MODE,
            payload: mode,
        };
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_ACTIVE_SORT_BY:
            updateURL(action.payload, state.activeSortType, state.activeViewType);

            return extend(state, {
                activeSortBy: action.payload
            });

        case ActionType.CHANGE_ACTIVE_SORT_TYPE:
            updateURL(state.activeSortBy, action.payload, state.activeViewType);

            return extend(state, {
                activeSortType: action.payload
            });

        case ActionType.CHANGE_ACTIVE_VIEW_TYPE:
            updateURL(state.activeSortBy, state.activeSortType, action.payload);

            return extend(state, {
                activeViewType: action.payload,
            });

        case ActionType.CHANGE_LANGUAGE_MODE:
            return extend(state, {
                activeLanguageMode: action.payload,
            });
    }

    return state;
};

export {reducer, ActionCreatorByStates, initialState};
