import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {items, imageMap} from './items.js'
import { useNavigate } from 'react-router-dom';


export default function Timeline() {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="text-3xl text-center font-bold mt-5 mb-5">2055 Award History</div>
            <VerticalTimeline lineColor='gray'>
                {items.map((item, index) => (
                    <VerticalTimelineElement
                    key={index}
                    onTimelineElementClick={() => navigate(item.navigatePath)}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(245, 167, 66)', color: '#000000' }}
                    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={item.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)'}}
                    // icon={logo}
                    > 
                        <h3 className="vertical-timeline-element-title text-white">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.description}</h4>
                        <h4 className="vertical-timeline-element-subtitle">{item.award1}</h4>
                        <h4 className="vertical-timeline-element-subtitle">{item.award2}</h4>
                        <h4 className="vertical-timeline-element-subtitle">{item.award3}</h4>
                        {item.img && <img src={item.img} alt="" className="w-3/4 mt-2 mx-auto border-4"/>}

                        {item.imgKey && imageMap[item.imgKey] && (
                            <img
                            src={imageMap[item.imgKey]}
                            alt={item.title}
                            className='w-3/4 mt-2 mx-auto border-4'
                            />
                        )}

                    </VerticalTimelineElement>
                ))}
            
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />

            </VerticalTimeline>
        </div>
    )
}