import React from "react";

export const TextArea = ({input, meta, ...props}:any) => {
    return (
        <div>
            <textarea {...input} {...props}></textarea>
        </div>
    );
};
