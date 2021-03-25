import React from "react";
import { useSelector } from "react-redux";
import PeopleListPreviewItemRu from "../../language/ru/people-list-preview-item/people-list-preview-item";
import PeopleListPreviewItemEng from "../../language/eng/people-list-preview-item/people-list-preview-item";
import {getFilteredPeople, getSortedPeople} from "../../../reducers/data/selectors";
import "../../../styles/preview-list.scss"
import {getLanguageMode} from "../../../reducers/states/selectors";
import {LANGUAGE_MODE} from "../../../const";

const PeopleListPreview = () => {
    const languageMode = useSelector(getLanguageMode);
    const people = useSelector(getFilteredPeople).length ? useSelector(getFilteredPeople) : useSelector(getSortedPeople);

    return (
        <ul className="preview-list">
            {people.map((user) => {
                switch (languageMode) {
                    case LANGUAGE_MODE.RU:
                        return <PeopleListPreviewItemRu key={user.id} user={user}/>;
                    case LANGUAGE_MODE.ENG:
                        return <PeopleListPreviewItemEng key={user.id} user={user}/>;
                }
            })}
        </ul>
    )
};

export default PeopleListPreview;
