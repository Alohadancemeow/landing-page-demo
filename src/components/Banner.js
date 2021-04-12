import React from 'react'
import './Banner.css'


let bannerData = {
    title: "React landing page",
    desc: "Minim ex labore proident elit ex veniam sunt cupidatat et cillum. Id sint dolor amet duis deserunt eiusmod magna ea aute veniam ut minim amet. Commodo quis nisi nulla adipisicing ea labore consequat aute laborum magna amet. Exercitation non enim est laborum magna pariatur. Consequat qui elit dolor magna sunt id ipsum excepteur incididunt labore qui."
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title.toUpperCase()}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href="#" className="banner-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

