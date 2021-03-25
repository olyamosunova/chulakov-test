import React, {Fragment} from "react";
import PeopleList from "../people-list/people-list";
import Spinner from "../spinner/spinner";
import { useSelector } from "react-redux";
import {getIsLoading} from "../../../reducers/data/selectors";

const Table = () => {
    const isLoading = useSelector(getIsLoading);

    return (
        <Fragment>
            {isLoading ? <Spinner /> : <PeopleList />}
        </Fragment>
        );
};
export default Table;
