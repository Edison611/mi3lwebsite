import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { items, imageMap } from './items'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

export default function Timeline() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-3xl text-center font-bold mt-5">Timeline (Under Construction)</div>
      <VerticalTimeline lineColor='gray'>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index} // Ensure key is unique
            onTimelineElementClick={() => navigate(item.navigatePath)}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(245, 167, 66)', color: '#000000' }}
            date={item.date}
            iconStyle={{ background: 'rgb(33, 150, 243)' }}
          > 
            <h3 className="vertical-timeline-element-title text-[#000080] font-bold">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
            <h1 className="vertical-timeline-element-title">{item.description}</h1>
            <h5 className="vertical-timeline-element-title">{item.description2}</h5>
            
            {item.imgKey && imageMap[item.imgKey] && (
              <img 
                src={imageMap[item.imgKey]} 
                alt={item.title} 
                className="w-3/4 mt-2 mx-auto border-4"
              />
            )}
          </VerticalTimelineElement>
        ))}
        
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </div>
  );
}
