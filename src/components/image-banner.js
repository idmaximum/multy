import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class ImageBanner extends React.Component {
    render() {
        if(this.props.image !== '' && this.props.image !== undefined){
            return (
                <div key={0} id='image-banner'>
                    <img className='w-100' src={this.props.image} />
                </div>
            )
        } else {
            return null
        }
    }
}
