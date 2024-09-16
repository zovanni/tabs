import React, { Fragment, useState } from "react";
import { Pill } from "../../atoms/pill/pill";
import classNames from "classnames";

const Tab = ({ content, active, pill }, props) => {
    const mainClass = "tabs__tab"
    return (
        <div
            key={pill.key}
            id={pill.id}
            role="tabpanel"
            aria-labelledby={pill.id}
            className={classNames({
                [`${mainClass}`]: true,
                [`${mainClass}--active`]: !!active,
            })}
            {...props}
        >
            {content}
        </div>
    )
}

const Tabs = ({ variant = 'pill' || 'underline', pills = [] }) => {
    let mainClass = 'tabs';
    const [activeTab, setActiveTab] = useState(0);
    return (
        <Fragment>
            <div className={classNames({
                [`${mainClass}`]: true,
                [`${mainClass}--${variant}`]: variant,
            })}
                key={mainClass}
            >
                <div className="tabs__pills">
                    {pills?.length > 0 && Object.values(pills)?.map((pill, idx) => {
                        return (
                            <>
                                <Pill
                                    key={pill.id}
                                    id={pill.id}
                                    role="tab"
                                    aria_selected={activeTab === idx}
                                    selected={activeTab === idx}
                                    onClick={() => {
                                        // console.log(idx, activeTab, setActiveTab)
                                        setActiveTab(idx)
                                    }}
                                    variant={variant}
                                    label={pill?.label ? pill?.label : '•'}
                                    badge={pill?.badge}
                                >
                                </Pill>
                            </>
                        )
                    })}
                </div>
            </div>
            {pills?.length > 0 &&
                <div className="tabs_tabs">
                    {
                        Object.values(pills)?.map((pill, idx) => {
                            return (
                                <>
                                    <Tab
                                        pill={pill}
                                        active={activeTab === idx}
                                        content={pill.content}
                                        {...pill.content}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            }
        </Fragment>
    )
};

export { Tabs };
