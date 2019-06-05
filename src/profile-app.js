import React from 'react'
import ReactDOM from 'react-dom'
import { MainLayout } from './components/main-layout'
import { ProfileUI } from './containers/profile-ui'
import CONS from './constants'

const LANGUAGE = localStorage.getItem('multy_language')

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.state = {
      attr: {
        language: (LANGUAGE == null ? "TH" : LANGUAGE),
        menu_active: 'main'
      },
      page: {
        breadcrumb_list: [
          { title_th: 'หน้าแรก', title_en: "Home", url: '/home' },
          { title_th: 'ข้อมูลส่วนตัว', title_en: "Profile", url: '/profile' },
        ]
      },
      data: {
        member_img : "",
        member_img_upload: "",
        member_fb_img : "",
        member_name : "",
        member_email : "",
        member_tel : "",
        member_gender : "",
        member_fb_name : "",
        old_password : "",
        password : "",
        re_password : "",
      },
    }
  }

  handleChangeLanguage = (language) => {
    var attr = this.state.attr
    attr.language = language
    this.setState({ attr: attr })
  }

  clickMenu = () => {
      
  }

  render() {
    return (
      <MainLayout onChangeLanguage={this.handleChangeLanguage} ref={this.child}>
        <ProfileUI {...this} />
      </MainLayout>
    )
  }
}

ReactDOM.render(
  <Profile />, document.getElementById('content')
)

