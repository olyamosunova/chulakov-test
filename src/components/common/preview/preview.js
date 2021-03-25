import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {getIsLoading} from "../../../reducers/data/selectors";
import Spinner from "../spinner/spinner";
import PeopleListPreview from "../people-list-preview/people-list-preview";

const Preview = () => {
    const isLoading = useSelector(getIsLoading);

    return (
        <Fragment>
            {isLoading ? <Spinner /> : <PeopleListPreview />}
        </Fragment>
    );
};

export default Preview;
