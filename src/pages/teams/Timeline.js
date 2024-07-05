import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from 'react-router-dom';

export default function Timeline() {
    const navigate = useNavigate()
    const data = [
        {
            title: "VEX AI World Skills Champions",
            location: "Houston, TX",
            date: "June 5th, 2024",
            img: "https://static.wixstatic.com/media/3042d1_9365a367093746aa959ab7df7a3eaa13~mv2.jpg/v1/fill/w_700,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3042d1_9365a367093746aa959ab7df7a3eaa13~mv2.jpg",
            description: "",
            navigatePath: ""
        },
        {
            title: "VEX AI World Skills Champions",
            location: "Houston, TX",
            date: "2011",
            img: "",
            description: "",
            navigatePath: ""
        },
        
    ]
    return (
        <div>
            <div className="text-3xl text-center font-bold mt-5">Timeline</div>
            <VerticalTimeline lineColor='gray'>
                {data.map((item) => (
                    <VerticalTimelineElement
                
                    onTimelineElementClick={() => navigate(item.navigatePath)}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(245, 167, 66)', color: '#000000' }}
                    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={item.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)'}}
                    // icon={logo}
                    > 
                        <h3 className="vertical-timeline-element-title text-white">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                        {item.img && <img src={item.img} alt="" className="w-3/4 mt-2 mx-auto border-4"/>}
                    </VerticalTimelineElement>
                ))}
            
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />

            </VerticalTimeline>
        </div>
    )
}