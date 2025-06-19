import React from 'react';

interface OverviewProps {
    title: string;
    introText: string;
}



const Overview: React.FC<OverviewProps> = ({ title, introText }) => {
    return (
        <section>
            <p><em>{title}</em></p>
            <p>{introText}</p>
        </section>
    );
};
export default Overview;