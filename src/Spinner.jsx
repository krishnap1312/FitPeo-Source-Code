import React from 'react';
import styles from './ProgressCircle.module.css'; // Import the CSS module

const ProgressCircle = ({ percentage }) => {
    const validPercentage = Math.min(100, Math.max(0, percentage));
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (validPercentage / 100) * circumference;

    return (
        <div className={styles.container}>
        <div style={{margin:'.5vw',padding:'1vw', borderRadius:'.5vw', height:'20vh',width:'10vw', backgroundColor:"#1f2029"}}>
            <img style={{width:'3vw'}} src="logo192.png" alt="" />
            <h3 style={{fontSize:'.8vw'}}>Total Orders</h3>
            <h1>75 <span style={{fontSize:'1vw', marginLeft:'.5vw',color:'red'}}> 🔽 2%</span></h1>
        </div>
        <div style={{margin:'.5vw',padding:'1vw', borderRadius:'.5vw', height:'20vh',width:'10vw', backgroundColor:"#1f2029"}}>
            <img style={{width:'3vw'}} src="logo192.png" alt="" />
            <h3 style={{fontSize:'.8vw'}}>Total Delivered</h3>
            <h1>70 <span style={{fontSize:'1vw', marginLeft:'.5vw',color:'green'}}> 🔼 2%</span></h1>
        </div>
        <div style={{margin:'.5vw',padding:'1vw', borderRadius:'.5vw', height:'20vh',width:'10vw', backgroundColor:"#1f2029"}}>
            <img style={{width:'3vw'}} src="logo192.png" alt="" />
            <h3 style={{fontSize:'.8vw'}}>Total Cancelled</h3>
            <h1>75 <span style={{fontSize:'1vw', marginLeft:'.5vw',color:'green'}}> 🔼 2%</span></h1>
        </div>
        <div style={{margin:'.5vw',padding:'1vw', borderRadius:'.5vw', height:'20vh',width:'10vw', backgroundColor:"#1f2029"}}>
            <img style={{width:'3vw'}} src="logo192.png" alt="" />
            <h3 style={{fontSize:'.8vw'}}>Total Revenue</h3>
            <h1>75 <span style={{fontSize:'1vw', marginLeft:'.5vw',color:'green'}}> 🔼 $12k</span></h1>
        </div>

        
            <div className={styles.textContainer}>
                <p>Net Profit</p>
                <h1>$6759.25</h1>
                <p className={styles.green}>🔼 3%</p>
            </div>

            <div className={styles.circleContainer}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                >
                    <circle
                        className={styles.progressCircle}
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="#d3d3d3"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    <circle
                        className={styles.completedCircle}
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="#3498db"
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </svg>
                <div className={styles.progressText}>
                    {validPercentage}% <br />
                    <span>Goal<br />Completed</span>
                </div>
                <p className={styles.footerText}>
                    *The values here have been rounded off
                </p>
            </div>
        </div>
    );
};

export default ProgressCircle;
