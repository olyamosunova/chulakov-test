import React, {useState, useEffect, useRef} from "react";
import "../../../styles/select.scss";

const Select = ({items, activeType, changeActiveItem}) => {
    const [activeItem, setActiveItem] = useState(activeType);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const selectElem = useRef(null);

    const onChangeActiveElement = (activeItem) => {
        changeActiveItem(activeItem);
        setActiveItem(activeItem);
        setIsSelectOpen(false);
    };

    useEffect(() => {
        const onClickOutside = (evt) => setIsSelectOpen(selectElem.current.contains(evt.target));
        document.addEventListener('click', onClickOutside);

        return () => document.removeEventListener('click', onClickOutside);
    }, []);

    const onSelectEvent = (evt) => {
        evt.stopPropagation();
        setIsSelectOpen(!isSelectOpen);
    };

    return (
        <div
            className={`select ${isSelectOpen ? 'select--open' : ''}`}>
            <div className="select__placeholder" ref={selectElem}>
                <input
                    className="select__text"
                    onClick={onSelectEvent}
                    onKeyPress={onSelectEvent}
                    value={items.find(item => item.key === activeItem).title}
                    type="text" readOnly={true} />
            </div>
            <div className="select__body">
                <ul className="select__list">
                    {items.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={`select__item ${item.key === activeItem ? 'select__item--active': ''}`}
                                onClick={() => onChangeActiveElement(item.key)}
                                onKeyPress={() => onChangeActiveElement(item.key)}
                                tabIndex="0">
                                {item.title}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Select;
