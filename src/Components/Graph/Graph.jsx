import React from 'react';
import styles from './ProgressCircle.module.css';
import parcelImage from './parcel.png';
import shoppingBagImage from './shopping-bag.png';
import returnImage from './Return.png';
import increaseImage from './increase.png';


function Graph({ percentage = 0 }) {
    const validPercentage = Math.min(100, Math.max(0, percentage));
    const radius = 60; // Increased radius for a larger circle
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (validPercentage / 100) * circumference;

    return (
        <div className={styles.GraphDiv}>
        <div className={styles.DashboardTitle}  ><h1 >Dashboard</h1></div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img className={styles.icon} src={parcelImage} alt="" />
                    <h3 className={styles.title}>Total Orders</h3>
                    <h1 className={styles.number}>75 <span className={styles.decrease}> 🔽 2%</span></h1>
                </div>
                <div className={styles.card}>
                    <img className={styles.icon} src={shoppingBagImage} alt="" />
                    <h3 className={styles.title}>Total Delivered</h3>
                    <h1 className={styles.number}>70 <span className={styles.increase}> 🔼 2%</span></h1>
                </div>
                <div className={styles.card}>
                    <img className={styles.icon} src={returnImage} alt="" />
                    <h3 className={styles.title}>Total Cancelled</h3>
                    <h1 className={styles.number}>75 <span className={styles.increase}> 🔼 2%</span></h1>
                </div>
                <div className={styles.card}>
                    <img className={styles.icon} src={increaseImage} alt="" />
                    <h3 className={styles.title}>Total Revenue</h3>
                    <h1 className={styles.number}>75 <span className={styles.increase}> 🔼 $12k</span></h1>
                </div>

                <div className={styles.combinedContainer}>
                    <div className={styles.content}>
                        <div className={styles.textContainer}>
                            <p>Net Profit</p>
                            <h1>$6759.25</h1>
                            <p className={styles.green}>🔼 3%</p>
                        </div>
                        <div className={styles.circleContainer}>
                            <svg  viewBox="0 0 195 140">
                                <circle
                                    className={styles.progressCircle}
                                    cx="70"
                                    cy="70"
                                    r={radius}
                                    stroke="#d3d3d3"
                                    strokeWidth={strokeWidth}
                                    fill="none"
                                />
                                <circle
                                    className={styles.completedCircle}
                                    cx="70"
                                    cy="70"
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
                        </div>
                    </div>
                    <div className='footerContainer'>
                    <p className={styles.footerText}>
                        *The values here have been rounded off
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Graph;
