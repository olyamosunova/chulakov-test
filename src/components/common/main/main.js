import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import Table from "../table/table";
import Preview from "../preview/preview";
import {getActiveViewType} from "../../../reducers/states/selectors";
import {FILTER_TYPE} from "../../../const";

const Main = () => {
    const activeViewType = useSelector(getActiveViewType);

    return (
        <Fragment>
            {activeViewType === FILTER_TYPE.TABLE
                ? <Table />
                : activeViewType === FILTER_TYPE.PREVIEW
                    ? <Preview />
                    : null}
        </Fragment>
    );
};

export default Main;
