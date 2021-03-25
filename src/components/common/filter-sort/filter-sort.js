import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getActiveSortBy, getActiveSortType, getLanguageMode} from "../../../reducers/states/selectors";
import {SORT_LIST, LANGUAGE_MODE} from "../../../const";
import {ActionCreatorByStates} from "../../../reducers/states/states";
import {ActionCreatorByData} from "../../../reducers/data/data";
import Select from "../select/select";

const FilterSort = () => {
    const activeSortBy = useSelector(getActiveSortBy);
    const activeSortType = useSelector(getActiveSortType);
    const languageMode = useSelector(getLanguageMode);

    let sortByList = null;
    let sortTypeList = null;

    switch (languageMode) {
        case LANGUAGE_MODE.RU:
            sortByList = SORT_LIST.RU.BY;
            sortTypeList = SORT_LIST.RU.TYPE;
            break;

        case LANGUAGE_MODE.ENG:
            sortByList = SORT_LIST.ENG.BY;
            sortTypeList = SORT_LIST.ENG.TYPE;
            break;
    }

    const dispatch = useDispatch();
    const onChangeSortBy = (sortBy) => {
        dispatch(ActionCreatorByStates.changeActiveSortBy(sortBy));
        dispatch(ActionCreatorByData.sortPeople(sortBy, activeSortType));
    };
    const onChangeSortType = (sortType) => {
        dispatch(ActionCreatorByStates.changeActiveSortType(sortType));
        dispatch(ActionCreatorByData.sortPeople(activeSortBy, sortType));
    };

    return (
        <div className="filter__sort">
            <p className="filter__title">Сортировка</p>

            <div className="filter__blocks">
                <Select items={sortByList} activeType={activeSortBy} changeActiveItem={onChangeSortBy} />
                <Select items={sortTypeList} activeType={activeSortType} changeActiveItem={onChangeSortType} />
            </div>
        </div>
    )
};

export default FilterSort;
