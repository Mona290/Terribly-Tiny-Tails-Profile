import React from 'react';
import data from  '../data.json';    
import './subinfo.css';
import star from '../symbols/star.png'
import likes from '../symbols/like.png'
import view from '../symbols/view.png'
import heart from '../symbols/heart.png'


const subinfo = () => {
    return (
        <div>
            <div className='info-place'>
                <p>{data.profile.Bio}</p>
                <a href={data.profile.link}>{data.profile.link}</a>
            </div>
            <div className='info-detail-place'>
                <div className='info-detail-arrange'> 
                    <img src={star} alt='like' />
                    <p> {data.profile.star} </p>
                </div>
                <div className='info-detail-arrange'> 
                    <img src={likes} alt='like' />
                    <p> {data.profile['profile-likes']} </p>
                </div>
                <div className='info-detail-arrange'> 
                    <img src={view} alt='like' />
                    <p> {data.profile['profile-view']} </p>
                </div>
                <div className='info-detail-arrange'> 
                    <img src={heart} alt='like' />
                    <p> {data.profile.loves} </p>
                </div>
            </div>
            <div className='post-place'>
                    <span className='posts'>{data.profile.posts} Posts</span>
            </div>
            <div className='post-bottom-line'>
            </div>
            <div className='sub'>
                <div className='matter'>
                    <h2>TTT Collaborated with biggest brands..</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>We have successfully collaborated with some of the world's biggest brands to co-create content, like Cornetto, Tinder, United Colors of Benetton, Amnesty International, Stayfree, Dell, and many more. We have also creatively produced multiple short films (see our youtube channel), some of which were hailed as the best to come out of India...</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>musing by</span> {data.profile.firstname} </p>
                    <p className='sub-m-info-2'>Feb 20 . 2 mins Read . 200 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>

            <div className='sub'>
                <div className='matter'>
                    <h2>Join Terribly Tiny Tales</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>Join us on this journey of technological marvels where every line of code, just like a tiny tale, narrates a story of innovation and excellence. Let's rewrite the narrative of software development, embracing the elegance and impact of Terribly Tiny Tales Tech. 🌟💻✨...</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>musing by</span> {data.profile.firstname} </p>
                    <p className='sub-m-info-2'>Feb 20 . 2 mins Read . 200 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>

            <div className='sub'>
                <div className='matter'>
                    <h2>Terribly Tiny Tales</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>Terribly Tiny Tales (TTT) is India's most celebrated micro-fiction platform reaching millions of readers, every week. Started as a Facebook page with tweet-sized fiction in March 2013...</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>thought by</span> {data.profile.firstname} </p>
                    <p className='sub-m-info-2'>Jan 31 . 1 min Read . 156 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>

            <div className='sub'>
                <div className='matter'>
                    <h2>Write To Build</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>Writing is the first step to create: <br/><br/>-stories <br/>-products <br/>-companies</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>thought by</span> {data.profile.firstname} </p>
                    <p className='sub-m-info-2'>Nov 29. 2 min Read . 800 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>
        </div>
    );
}

export default subinfo;