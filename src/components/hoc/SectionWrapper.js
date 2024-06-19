import React from "react";

const SectionWrapper = (WrappedComponent, sectionName) => {
    return (props) => (
        <div className={`section-wrapper ${sectionName}`}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default SectionWrapper;
