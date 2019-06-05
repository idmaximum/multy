import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { Breadcrumb } from '../components/breadcrumb'
import { ProfileEntry } from './profile-entry'

export class ProfileUI extends React.Component {
    render() {
        var page = this.props.state.page
        var attr = this.props.state.attr
        return ([
            <Breadcrumb key={0} list={page.breadcrumb_list} language={attr.language} />,
            <ProfileEntry key={1} {...this.props} />
        ])
    }
}
