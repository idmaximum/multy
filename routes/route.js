var express = require('express')
var router = express.Router()
const CONF = require("./configs")

router.get(CONF.SUB_DOMAIN+'/', function(req, res, next) {
  res.render('template', { 
    TITLE: 'Home',
    URL: req.protocol + '://' + req.get('host')+ CONF.SUB_DOMAIN + req.originalUrl,
    KEYWORDS: '',
    DESC: '',
    IMAGE: '',
    LOADER: 'home' 
  })
})

router.get(CONF.SUB_DOMAIN+'/home', function(req, res, next) {
  res.render('template', { 
    TITLE: 'Home',
    URL: req.protocol + '://' + req.get('host')+ CONF.SUB_DOMAIN + req.originalUrl,
    KEYWORDS: '',
    DESC: '',
    IMAGE: '',
    LOADER: 'home' 
  })
})

router.get(CONF.SUB_DOMAIN+'/category/:id', function(req, res, next) {
  res.render('template', { 
    TITLE: 'Category',
    URL: req.protocol + '://' + req.get('host')+ CONF.SUB_DOMAIN + req.originalUrl,
    KEYWORDS: '',
    DESC: '',
    IMAGE: '',
    LOADER: 'category' 
  })
})

router.get(CONF.SUB_DOMAIN+'/product/:id', function(req, res, next) {
  res.render('template', { 
    TITLE: 'Product',
    URL: req.protocol + '://' + req.get('host')+ CONF.SUB_DOMAIN + req.originalUrl,
    KEYWORDS: '',
    DESC: '',
    IMAGE: '',
    LOADER: 'product' 
  })
})

router.get(CONF.SUB_DOMAIN+'/brands', function(req, res, next) {
  res.render('template', { 
    TITLE: 'Brands',
    URL: req.protocol + '://' + req.get('host')+ CONF.SUB_DOMAIN + req.originalUrl,
    KEYWORDS: '',
    DESC: '',
    IMAGE: '',
    LOADER: 'brands' 
  })
})

router.get(CONF.SUB_DOMAIN+'/profile', function(req, res, next) {
  res.render('template', { 
    TITLE: 'Profile',
    URL: req.protocol + '://' + req.get('host')+ CONF.SUB_DOMAIN + req.originalUrl,
    KEYWORDS: '',
    DESC: '',
    IMAGE: '',
    LOADER: 'profile' 
  })
})

module.exports = router
