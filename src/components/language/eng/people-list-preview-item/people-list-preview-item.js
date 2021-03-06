import React, {Fragment} from "react";
import {useDispatch} from "react-redux";
import {ActionCreatorByData} from "../../../../reducers/data/data";

const PeopleListPreviewItemEng = ({user}) => {
    const {id, name, age, phone, image, video, phrase, favourite} = user;
    const isFavouriteIconSrc = favourite ? `favourite` : `no-favourite`;
    const dispatch = useDispatch();
    const changeFavourite = () => dispatch(ActionCreatorByData.updatePeopleFavorite(id));

    return (
        <li className={video ? 'preview-list__item preview-list__item--full' : 'preview-list__item'}>

            {video ?
                <div className="preview-list__video">
                    <video width="auto" height="auto" controls="controls">
                        <source src={`./videos/${video}.mp4`} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                    </video>
                </div>
                :
                <Fragment>
                    <div className="preview-list__user">
                        <img className="preview-list__avatar" src={`./images/${image}.svg`} alt={name} />
                        <p>{name}</p>
                        <button className="preview-list__favorite favorite-button" type="button" onClick={changeFavourite}>
                            <img src={`./images/${isFavouriteIconSrc}.svg`} alt="icon favourite" />
                        </button>
                    </div>

                    <div className="preview-list__user-info">
                        <p className="preview-list__age">{age} years</p>
                        <a className="preview-list__phone" href={`tel:${phone}`}>{phone}</a>
                        <p className="preview-list__phrase">{phrase}</p>
                    </div>
                </Fragment>
            }
        </li>
    );
};

export default PeopleListPreviewItemEng;
