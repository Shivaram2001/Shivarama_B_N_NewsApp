const { response } = require("express");

const getNews=async(req,res)=>{
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9a42fcddf870486988f7e91ff721ce07";
    const response=await fetch(url);
    const data=await response.json();
    res.send(data);
}

module.exports={
    getNews
}