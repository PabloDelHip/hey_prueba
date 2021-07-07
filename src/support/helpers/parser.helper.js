function responseOf(httpStatus, responseData, field = 'data') {
    return  { status: httpStatus, data:  { data: responseData }  };   
}

module.exports = {
    responseOf
}

