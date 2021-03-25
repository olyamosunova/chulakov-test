import {SORT_BY, SORT_TYPE} from "./const";

export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const ageToString = (age) => {
    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return age+" "+txt;
};

export const sortNameIncrease = (a, b) => {
    const nameA = a.name.split(' ')[0];
    const nameB = b.name.split(' ')[0];

    if (nameA > nameB) {
        return  1;
    } else {
        return -1;
    }
};

export const sortNameDecrease = (a, b) => {
    const nameA = a.name.split(' ')[0];
    const nameB = b.name.split(' ')[0];

    if (nameA > nameB) {
        return  -1;
    } else {
        return 1;
    }
};

export const getParamsURL = (param) => {
    const params = window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            (p,e) => {
                const a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );

    return params[param];
};

export const updateURL = (sort_by, sort_type, view_type) => {
    if (history.pushState) {
        const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        const newUrl = baseUrl + `?sort_by=${sort_by}&sort_type=${sort_type}&view_type=${view_type}`;
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживается');
    }
};

export const sortPeople = (state, sortBy, sortType, peopleList = state.people) => {
    let sortedPeople = [];
    let filteredPeople = [];

    switch (sortBy) {
        case SORT_BY.ID:
            if (sortType === SORT_TYPE.INCREASE) {
                sortedPeople = peopleList.slice().sort((a, b) =>  a.id - b.id);
                filteredPeople = state.filteredPeople.slice().sort((a, b) =>  a.id - b.id);
            } else if (sortType === SORT_TYPE.DECREASE) {
                sortedPeople = peopleList.slice().sort((a, b) => b.id - a.id);
                filteredPeople = state.filteredPeople.slice().sort((a, b) => b.id - a.id);
            } else {
                sortedPeople = peopleList.slice();
                filteredPeople = state.filteredPeople.slice();
            }
            break;


        case SORT_BY.NAME:
            if (sortType === SORT_TYPE.INCREASE) {
                sortedPeople = peopleList.slice().sort((a, b) => (sortNameIncrease(a, b)));
                filteredPeople = state.filteredPeople.slice().sort((a, b) => (sortNameIncrease(a, b)));
            } else if (sortType === SORT_TYPE.DECREASE) {
                sortedPeople = peopleList.slice().sort((a, b) => (sortNameDecrease(a, b)));
                filteredPeople = state.filteredPeople.slice().sort((a, b) => (sortNameDecrease(a, b)));
            } else {
                sortedPeople = peopleList.slice();
                filteredPeople = state.filteredPeople.slice();
            }
            break;

        case SORT_BY.AGE:
            if (sortType === SORT_TYPE.INCREASE) {
                sortedPeople = peopleList.slice().sort((a, b) =>  a.age - b.age);
                filteredPeople = state.filteredPeople.slice().sort((a, b) =>  a.age - b.age);
            } else if (sortType === SORT_TYPE.DECREASE) {
                sortedPeople = peopleList.slice().sort((a, b) => b.age - a.age);
                filteredPeople = state.filteredPeople.slice().sort((a, b) => b.age - a.age);
            } else {
                sortedPeople = peopleList.slice();
                filteredPeople = state.filteredPeople.slice();
            }
            break;

        default:
            sortedPeople = peopleList.slice();
            filteredPeople = state.filteredPeople.slice();
            break;
    }

    return {sortedPeople, filteredPeople}
};
