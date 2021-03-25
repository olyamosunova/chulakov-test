import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {getActiveViewType, getLanguageMode} from "../../../reducers/states/selectors";
import {ActionCreatorByStates} from "../../../reducers/states/states";
import {VIEW_TABS, LANGUAGE_MODE} from "../../../const";
import Select from "../select/select";

const FilterTabs = () => {
    const activeViewType = useSelector(getActiveViewType);
    const languageMode = useSelector(getLanguageMode);
    const dispatch = useDispatch();
    const changeViewType = (viewType) => dispatch(ActionCreatorByStates.changeActiveViewType(viewType));

    let viewTabsList = null;

    switch (languageMode) {
        case LANGUAGE_MODE.RU:
            viewTabsList = VIEW_TABS.RU;
            break;

        case LANGUAGE_MODE.ENG:
            viewTabsList = VIEW_TABS.ENG;
            break;
    }

    return (
        <div className="filter__tabs">
            <p className="filter__title">Вид</p>

            <div className="filter__blocks">
                <Select
                    items={viewTabsList}
                    activeType={activeViewType}
                    changeActiveItem={changeViewType} />
            </div>
        </div>
    );
};

export default FilterTabs;
