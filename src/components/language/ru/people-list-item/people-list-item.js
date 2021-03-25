import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ActionCreatorByData} from "../../../../reducers/data/data";
import {ageToString} from "../../../../utils";

const PeopleListItemRu = ({user}) => {
    const {id, name, age, phone, image, favourite} = user;
    const isFavouriteIconSrc = favourite ? `favourite` : `no-favourite`;
    const dispatch = useDispatch();
    const changeFavourite = () => dispatch(ActionCreatorByData.updatePeopleFavorite(id));

    return (
        <li className="people-list__item">
            <div className="people-list__user">
                <img className="people-list__avatar" src={`./images/${image}.svg`} alt={name} />
                <p className="people-list__name">{name}</p>
            </div>

            <p className="people-list__age">{ageToString(age)}</p>
            <a className="people-list__phone" href={`tel:${phone}`}>{phone}</a>

            <button className="people-list__favourite favorite-button" type="button" onClick={changeFavourite}>
                <img src={`./images/${isFavouriteIconSrc}.svg`} alt="icon favourite" />
            </button>
        </li>
    );
};

export default PeopleListItemRu;
