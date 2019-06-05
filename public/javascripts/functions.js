const Fnc = {

    formatPrice(number, decimal = 0) {
        var number = (number != undefined && number != "") ? number : 0
        number = Intl.NumberFormat('en-US', {currency: 'USD',minimumFractionDigits: parseInt(decimal), maximumFractionDigits : parseInt(decimal),}).format(parseFloat(number))
        return number
    },

    getYearList(endYear = (new Date()).getFullYear(), startYear = 2019){
        var yearList = []
        for(var i = startYear; i <= endYear; i++){
            yearList.unshift({year : i})
        }
        return yearList
    },

    formatDateTime(date = new Date()) {
        var dd = date.getDate()
        var mm = date.getMonth() + 1
        var yy = date.getFullYear()
        var hh = date.getHours()
        var MM = date.getMinutes()
        var ss = date.getSeconds()
        if(dd<10) dd = "0"+dd 
        if(mm<10) mm = "0"+mm 
        return dd+"/"+mm+"/"+yy+" "+hh+":"+MM+":"+ss
    }
    
}