import React, { Fragment } from "react";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

const BenefitsTimeline = () => {
    return (
        <div>
            <Timeline className="m-0 p-0">
                <TimelineItem className="timeline-item">
                    <TimelineSeparator>
                    <TimelineDot className="timeline-dot">
                        1
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3 className="benefits-title-timeline">Beginning</h3>
                        <p className="benefits-timeline-body">First thing you determina the concepto and model you want, then choose what colors and materials you want to use in your place
                        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator>
                    <TimelineDot className="timeline-dot">
                        2
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3 className="benefits-title-timeline">Process</h3>
                        <p className="benefits-timeline-body">When the briefing process is completed and what the client wants has been achieved. then we carry out the execution of the desired
                        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className="timeline-item">
                    <TimelineSeparator>
                    <TimelineDot className="timeline-dot">
                        3
                    </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3 className="benefits-title-timeline">Ending</h3>
                        <p className="benefits-timeline-body">After the process is completed, we will immediately  carry out the finishing stage  and we do it carefully and make sure there are no mistakes
                        </p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default BenefitsTimeline;
