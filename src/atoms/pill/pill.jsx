import React, { Fragment } from "react";
import classNames from "classnames";
import { Badge } from "../badge/badge";

const Pill = ({
    variant,
    label,
    selected,
    badge,
    onClick,
    key,
    id,
    aria_selected
}) => {
    const mainClass = "pill";
    console.log(key, id)
    return (
        <button
            aria-selected={aria_selected}
            key={key}
            id={id}
            onClick={onClick}
            className={classNames({
                [`${mainClass}`]: true,
                [`${mainClass}--selected`]: selected,
            })}>{label}
            {badge ? <Badge {...badge} /> : null}
        </button>
    )
};

export { Pill };
