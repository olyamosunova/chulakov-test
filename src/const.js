export const SORT_BY = {
        ID: `ID`,
    NAME: `NAME`,
    AGE: `AGE`
};

export const SORT_TYPE = {
  INCREASE: `INCREASE`,
  DECREASE: `DECREASE`
};

export const FILTER_TYPE = {
    TABLE: `TABLE`,
    PREVIEW: `PREVIEW`
};

export const LANGUAGE_MODE = {
    RU: `RU`,
    ENG: `ENG`,
};

export const SORT_LIST = {
    RU: {
        BY: [
            {
                id: 1,
                title: 'ID',
                key: SORT_BY.ID
            },
            {
                id: 2,
                title: 'Имя',
                key: SORT_BY.NAME
            },
            {
                id: 3,
                title: 'Возраст',
                key: SORT_BY.AGE
            }
        ],
        TYPE: [
            {
                id: 1,
                title: 'По возрастанию',
                key: SORT_TYPE.INCREASE
            },
            {
                id: 2,
                title: 'По убыванию',
                key: SORT_TYPE.DECREASE
            }
        ]
    },
    ENG: {
        BY: [
            {
                id: 1,
                title: 'ID',
                key: SORT_BY.ID
            },
            {
                id: 2,
                title: 'Name',
                key: SORT_BY.NAME
            },
            {
                id: 3,
                title: 'Age',
                key: SORT_BY.AGE
            }
        ],
        TYPE: [
            {
                id: 1,
                title: 'Increasing',
                key: SORT_TYPE.INCREASE
            },
            {
                id: 2,
                title: 'Decreasing',
                key: SORT_TYPE.DECREASE
            }
        ]
    }
};

export const VIEW_TABS = {
    RU: [
        {
            id: 1,
            title: 'Таблица',
            key: FILTER_TYPE.TABLE
        },
        {
            id: 2,
            title: 'Превью',
            key: FILTER_TYPE.PREVIEW
        }
    ],
    ENG: [
        {
            id: 1,
            title: 'Table',
            key: FILTER_TYPE.TABLE
        },
        {
            id: 2,
            title: 'Preview',
            key: FILTER_TYPE.PREVIEW
        }
    ]
};


const viewTabsList = [
    {
        id: 1,
        title: 'Таблица',
        key: FILTER_TYPE.TABLE
    },
    {
        id: 2,
        title: 'Превью',
        key: FILTER_TYPE.PREVIEW
    }
];
