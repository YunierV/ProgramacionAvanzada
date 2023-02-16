let conversion ={

    byteMB:function bytemb (num) {
        let conver = num * 1.0E-6
        return conver
    },

    byteGB:function bytegb (num) {
        let conver = num * 1.0E-9
        return conver
    }
}

module.exports = conversion