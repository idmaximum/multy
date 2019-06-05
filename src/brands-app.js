import React from 'react'
import ReactDOM from 'react-dom'
import { MainLayout } from './components/main-layout'
import { BrandsUI } from './containers/brands-ui'
import CONS from './constants'

const LANGUAGE = localStorage.getItem('multy_language')

export class Brands extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.state = {
      attr: {
        language: (LANGUAGE == null ? "TH" : LANGUAGE),
      },
      page: {
        breadcrumb_list: [
          { title_th: 'หน้าแรก', title_en: "Home", url: '/home' },
          { title_th: 'แบรนด์', title_en: "Brands", url: '/Brands' },
        ]
      },
      brand_list: [
        { id:'1', title_th: 'AMC', title_en: "AMC", count: '56', url: '/brand-detail/1' },
        { id:'2', title_th: 'Aesop', title_en: "Aesop", count: '2', url: '/brand-detail/2' },
        { id:'3', title_th: 'Ajona', title_en: "Ajona", count: '3', url: '/brand-detail/3' },
        { id:'4', title_th: 'Anastasia', title_en: "Anastasia", count: '15', url: '/brand-detail/4' },
        { id:'5', title_th: 'Bio-Oil', title_en: "Bio-Oil", count: '25', url: '/brand-detail/5' },
        { id:'6', title_th: 'Biotherm', title_en: "Biotherm", count: '8', url: '/brand-detail/6' },
        { id:'7', title_th: 'Bisous Bisous', title_en: "Bisous Bisous", count: '34', url: '/brand-detail/7' },
        { id:'8', title_th: 'Black Peeler', title_en: "Black Peeler", count: '98', url: '/brand-detail/8' },
        { id:'9', title_th: 'Blackmores', title_en: "Blackmores", count: '27', url: '/brand-detail/9' },
        { id:'10', title_th: 'Bq Cover', title_en: "Bq Cover", count: '45', url: '/brand-detail/10' },
      ]
    }
  }

  handleChangeLanguage = (language) => {
    var attr = this.state.attr
    attr.language = language
    this.setState({ attr: attr })
  }

  render() {
    return (
      <MainLayout onChangeLanguage={this.handleChangeLanguage} ref={this.child}>
        <BrandsUI {...this} />
      </MainLayout>
    )
  }
}

ReactDOM.render(
  <Brands />, document.getElementById('content')
)

