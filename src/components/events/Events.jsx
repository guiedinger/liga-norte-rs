import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './Events.css'
import 'react-vertical-timeline-component/style.min.css';
import Icon from './../../assets/ping-pong.svg'
import Button from './../button/Button'

export default () => (
    <div style={{backgroundColor: '#eeeeee'}}>
        <h1 className="titleevent">Eventos</h1>
        <VerticalTimeline>
            <VerticalTimelineElement 
                date="22/09/2018"
                icon={<img className="event-icon" src={Icon} alt="Icon"/>}>
                <h3 className="vertical-timeline-element-title">Liga Norte RS</h3>
                <h4 className="vertical-timeline-element-subtitle">Etapa Lagoa Vermelha</h4>
                <Button color={'red'} >Ver Localização</Button>
                <p>Horário: </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{ background: '#424242', color: '#fff' }}
                icon={<img className="event-icon" src={Icon} alt="Icon"/>}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
)
