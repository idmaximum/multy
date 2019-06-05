import React from 'react'
import ReactDOM from 'react-dom'
import { MainLayout } from './components/main-layout'
import { HomeUI } from './containers/home-ui'
import CONS from './constants'

const LANGUAGE = localStorage.getItem('multy_language')

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.state = {
      attr: {
        language: (LANGUAGE == null ? "TH" : LANGUAGE),
        banner_active: 0
      },
      banner_list: [
        { title: 'Banner test 1', image: CONS.URL_IMG + 'test-banner.png', url: '' },
        { title: 'Banner test 2', image: CONS.URL_IMG + 'test-banner.png', url: '' },
        { title: 'Banner test 3', image: CONS.URL_IMG + 'test-banner.png', url: '' },
      ],
      best_seller_list: [
        { id: '1', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '790', },
        { id: '2', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '790', },
        { id: '3', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '790', },
        { id: '4', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '790', },
        { id: '5', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '790', },
        { id: '6', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '7', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '8', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '9', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '10', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
      ],
      recommend_list: [
        { id: '1', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product2.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '2', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product2.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '3', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product2.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '4', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product2.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '5', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product2.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
      ],
      sale_list: [
        { id: '1', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product3.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '2', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product3.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '3', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product3.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '4', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product3.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '5', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product3.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
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
        <HomeUI {...this} />
      </MainLayout>
    )
  }
}

ReactDOM.render(
  <Home />, document.getElementById('content')
)

