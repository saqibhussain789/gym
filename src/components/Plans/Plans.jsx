import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData.jsx'
import whiteTick from "../../assets/whiteTick.png"
export const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stroke-text' >Ready to Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        <div className='plans'>
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <spna>$ {plan.price}</spna>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits </span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}
