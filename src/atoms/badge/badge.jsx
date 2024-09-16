import React from "react";
import classNames from "classnames";

const Badge = ({ label, variant }) => {
    const mainClass = "badge";
    return (
        <>
            <span className={classNames({
                [`${mainClass}`]: true,
                [`${mainClass}--${variant}`]: variant,
            })}>
                {label}
            </span>

        </>
    )
};

export { Badge };
