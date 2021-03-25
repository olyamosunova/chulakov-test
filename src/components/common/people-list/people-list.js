import React from "react";
import { useSelector } from "react-redux";
import "../../../styles/people-list.scss";
import PeopleListItemRu from "../../language/ru/people-list-item/people-list-item";
import PeopleListItemEng from "../../language/eng/people-list-item/people-list-item";
import {getFilteredPeople, getSortedPeople} from "../../../reducers/data/selectors";
import {getLanguageMode} from "../../../reducers/states/selectors";
import {LANGUAGE_MODE} from "../../../const";

const PeopleList = () => {
    const languageMode = useSelector(getLanguageMode);
    const people = useSelector(getFilteredPeople).length ? useSelector(getFilteredPeople) : useSelector(getSortedPeople);

    return (
        <ul className="people-list">
            {people.map((user) => {
                switch (languageMode) {
                    case LANGUAGE_MODE.RU:
                        return <PeopleListItemRu key={user.id} user={user}/>;
                    case LANGUAGE_MODE.ENG:
                        return <PeopleListItemEng key={user.id} user={user}/>;
                }
            })}
        </ul>
    )
};

export default PeopleList;
