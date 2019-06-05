import React from 'react'
import ReactDOM from 'react-dom'
import { MainLayout } from './components/main-layout'
import { CategoryUI } from './containers/category-ui'
import CONS from './constants'

const LANGUAGE = localStorage.getItem('multy_language')

export class Category extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.state = {
      attr: {
        language: (LANGUAGE == null ? "TH" : LANGUAGE),
        enabled_btn_vm: true,
      },
      product_list: [
        { id: '1', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '2', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '3', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '4', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '5', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '6', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '7', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '8', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '9', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '10', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '11', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '12', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
      ],
      page: {
        title_th: 'โทนเนอร์',
        title_en: 'Toner',
        count: 103,
        page_image: CONS.URL_IMG + 'test-cate-img.png',
        breadcrumb_list: [
          { title_th: 'หน้าแรก', title_en: "Home", url: '/home' },
          { title_th: 'สกินแคร์', title_en: "Skin care", url: '/category/1' },
          { title_th: 'ทำความสะอาดผิว', title_en: "Clean the skin", url: '/category/1' },
          { title_th: 'โทนเนอร์', title_en: "Toner", url: '/category/1' },
        ],
        page_link_list: [
          { title_th: 'ผลิตภัณฑ์ล้างหน้า', title_en: "Face wash", count: 49, url: '/category/1' },
          { title_th: 'สครับ', title_en: "Scrub", count: 4, url: '/category/1' },
          { title_th: 'เมคอัพ รีมูฟเวอร์', title_en: "Makeup remover", count: 12, url: '/category/1' },
          { title_th: 'มาร์กทำความสะอาดผิว', title_en: "Cleansing mark", count: 31, url: '/category/1' },
          { title_th: 'อายเมคอัพรีมูฟเวอร์', title_en: "Eye Makeup Remover", count: 9, url: '/category/1' },
        ],
        filter_list: [
          {
            id: 1, title_th: 'ขนาด', title_en: "Size",
            list: [
              { list_id: 1, list_title_th: 'ขนาดทดลอง', list_title_en: "Trial size" },
              { list_id: 2, list_title_th: 'ขนาดปกติ', list_title_en: "Normal size" },
            ]
          },
          {
            id: 2, title_th: 'สภาพผิว', title_en: "Skin condition",
            list: [
              { list_id: 1, list_title_th: 'ผิวแพ้ง่าย', list_title_en: "Sensitiveky skin" },
              { list_id: 2, list_title_th: 'ผิวมัน', list_title_en: "Oily skin" },
              { list_id: 2, list_title_th: 'ผิวผสม', list_title_en: "Combination skin" },
            ]
          },
          {
            id: 3, title_th: 'ส่วนประกอบ', title_en: "Ingredient",
            list: [
              { list_id: 1, list_title_th: 'ออกานิค', list_title_en: "Organics" },
              { list_id: 2, list_title_th: 'ธรรมชาติ', list_title_en: "Natural" },
              { list_id: 2, list_title_th: 'ไม่มีแอลกอฮล', list_title_en: "Alcohol free" },
            ]
          },
          {
            id: 4, title_th: 'แบรนด์', title_en: "Brand",
            list: [
              { list_id: 1, list_title_th: 'Aesop', list_title_en: "Aesop" },
              { list_id: 2, list_title_th: 'Bioderma', list_title_en: "Bioderma" },
            ]
          },
        ]
      }
    }
  }

  handleChangeLanguage = (language) => {
    var attr = this.state.attr
    attr.language = language
    this.setState({ attr: attr })
  }

  handleLoad = () => {
    var state = this.state
    if(state.product_list.length < 50){
      state.product_list.push(
        { id: '1', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '2', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '3', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '4', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '5', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '6', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '7', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '8', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '9', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '10', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
        { id: '11', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '12', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
      )
    }
    if(state.product_list.length >= 50){
      state.attr.enabled_btn_vm = false
    }
    this.setState({ state })
  }

  render() {
    return (
      <MainLayout onChangeLanguage={this.handleChangeLanguage} ref={this.child}>
        <CategoryUI {...this} />
      </MainLayout>
    )
  }
}

ReactDOM.render(
  <Category />, document.getElementById('content')
)

