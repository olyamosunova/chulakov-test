import React from "react";
import FilterSort from "../filter-sort/filter-sort";
import FilterTabs from "../filter-tabs/filter-tabs";
import FilterName from "../filter-name/filter-name";
import "../../../styles/filter.scss";

const Filter = () => {
    return (
        <div className="filter">
            <FilterSort />
            <FilterTabs />
            <FilterName />
        </div>
    );
};

export default Filter;
