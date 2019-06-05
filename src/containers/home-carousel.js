import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class HomeCarousel extends React.Component {
    render() {
        var banner_list = this.props.state.banner_list
        var attr = this.props.state.attr
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {banner_list.map((item, i) => {
                        if(i>4) return null
                        return (
                            <li data-target="#carouselExampleIndicators" data-slide-to={i} className={(attr.banner_active == i ? "active" : "")} key={i}></li>
                        )
                    })}
                </ol>
                <div className="carousel-inner">
                    {banner_list.map((item, i) => {
                        if (i > 4) return null
                        return (
                            <a className={`carousel-item${(attr.banner_active == i ? " active" : "")}`} key={i} href={(item.url != undefined && item.url != "") ? item.url : null}
                                title={item.title}>
                                <img className="d-block w-100" src={`${item.image}`} alt="Slide" />
                            </a>
                        )
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
