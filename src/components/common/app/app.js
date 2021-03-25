import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Main from "../main/main";
import Filter from "../filter/filter";
import {getLanguageMode} from "../../../reducers/states/selectors";
import {ActionCreatorByStates} from "../../../reducers/states/states";
import {LANGUAGE_MODE} from "../../../const";
import "../../../styles/main.scss";
import "../../../styles/toggle.scss";
import "../../../styles/_fonts.scss";

const App = () => {
    const languageMode = useSelector(getLanguageMode);

    const dispatch = useDispatch();
    const changeLanguageMode = (evt) => {
        const mode = evt.target.checked ? LANGUAGE_MODE.ENG : LANGUAGE_MODE.RU;
        dispatch(ActionCreatorByStates.changeLanguageMode(mode));
    };

    return (
        <React.Fragment>
            <section className="people">
                <div className="container">
                    <div className="toggle">
                        <input
                            onChange={(evt) => changeLanguageMode(evt)}
                            defaultChecked={languageMode === LANGUAGE_MODE.ENG}
                            id="language-mode" type="checkbox" name="language-mode"/>
                        <label className="toggle__label" htmlFor="language-mode">
                            <span className="toggle__variant">RU</span>
                            <span className="toggle__block" tabIndex="0"></span>
                            <span className="toggle__variant">ENG</span>
                        </label>
                    </div>
                    <Filter />
                    <Main />
                </div>
            </section>

        </React.Fragment>

    );
};

export default App;
