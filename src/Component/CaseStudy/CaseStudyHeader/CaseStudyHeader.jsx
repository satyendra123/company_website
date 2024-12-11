import React from 'react';
import './CaseStudyHeader.css';

const CaseStudyHeader = () => {
    return (
        <div className='case-study-header-main' style={{ maxWidth: '100%' }}>
            <div className="case-study-header mt-5">
                <h2 className='case-study-header-text'>
                    CASE STUDIES
                </h2>

                <h2 className='case-study-sub-header-text'>
                    We have case studies for any  <span> environment </span>
                </h2>
            </div>
        </div>
    );
};

export default CaseStudyHeader;
