import type {FC} from "react";

export interface Job {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
}

interface WorkHistoryProps {
    jobs: Job[];
}

export const WorkHistory: FC<WorkHistoryProps> = ({jobs}) => {
    return (
        <section>
            <h2>Work History</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.company}</h3>
                        <p><strong>{job.role}</strong> ({job.period})</p>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};