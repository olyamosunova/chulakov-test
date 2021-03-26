import React, {useState, useEffect, useRef} from "react";
import "../../../styles/select.scss";

const Select = ({items, activeType, changeActiveItem}) => {
    const [activeItem, setActiveItem] = useState(activeType);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const selectElem = useRef(null);

    const onChangeActiveElement = (evt, activeItem) => {
        evt.stopPropagation();
        changeActiveItem(activeItem);
        setActiveItem(activeItem);
        setIsSelectOpen(false);
    };

    useEffect(() => {
        const onClickOutside = (evt) => {
            if (!selectElem.current.contains(evt.target)) {
                setIsSelectOpen(false);
            }
        };
        document.addEventListener('click', onClickOutside);

        return () => document.removeEventListener('click', onClickOutside);
    }, []);

    const onSelectClick = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    return (
        <div
            ref={selectElem}
            className={`select ${isSelectOpen ? 'select--open' : ''}`}>
            <div className="select__placeholder">
                <input
                    onClick={onSelectClick}
                    onKeyPress={onSelectClick}
                    className="select__text"
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
                                onClick={(evt) => onChangeActiveElement(evt, item.key)}
                                onKeyPress={(evt) => onChangeActiveElement(evt, item.key)}
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
