import React from "react";
import "../../../styles/form.scss";
import {useSelector, useDispatch} from "react-redux";
import {ActionCreatorByData} from "../../../reducers/data/data";
import {getLanguageMode} from "../../../reducers/states/selectors";
import {LANGUAGE_MODE} from "../../../const";

const FilterName = () => {
    const languageMode = useSelector(getLanguageMode);
    const dispatch = useDispatch();

    const filteredPeople = (evt) => {
        const text = evt.target.value;
        dispatch(ActionCreatorByData.filterPeople(text));
    };

    let placeholder = '';

    switch (languageMode) {
        case LANGUAGE_MODE.RU:
            placeholder = 'Введите имя / фамилию';
            break;

        case LANGUAGE_MODE.ENG:
            placeholder = 'Please enter your first / last name';
            break;
    }

  return (
      <div className="filter__name">
          <form className="filter__form form">
              <input
                  onInput={(evt) => filteredPeople(evt)}
                  id="filter-name"
                  className="input"
                  placeholder={placeholder} />
          </form>
      </div>
  );
};

export default FilterName;
