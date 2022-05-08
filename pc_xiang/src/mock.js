import Mock from 'mockjs' // 引入mockjs
 
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
 
let data = [] // 用于接受生成数据的数组
let template={
"list":[
    {
        "imgs":"https://thirdqq.qlogo.cn/g?b=oidb&k=r4g7GfIL8EW8OTyF4WarYQ&s=100&t=1556408114",
        "tu":"https://tse2-mm.cn.bing.net/th/id/OIP-C.2IJU4C9as2ZKQX5pCI3-3wHaG4?w=199&h=185&c=7&r=0&o=5&pid=1.7",
        "zi":"我是一只猫"
    },
    {
        "imgs":"https://thirdqq.qlogo.cn/g?b=oidb&k=h7ZicwS7u4Ybs24ichrF2vDg&s=100&t=1611997279",
        "tu":"https://tse4-mm.cn.bing.net/th/id/OIP-C.Dq5dhQAKkuOmc6rkCk0A3AHaHT?w=188&h=185&c=7&r=0&o=5&pid=1.7",
        "zi":"别看了还是我"
    },
    {
        "imgs":"https://thirdqq.qlogo.cn/g?b=oidb&k=iagJqBROicbxEuibFz4ibTHEYw&s=100&t=1587048569",
        "tu":"https://tse3-mm.cn.bing.net/th/id/OIP-C.NLzb9FCPVVCy1hGnSXZBKgHaJD?w=152&h=185&c=7&r=0&o=5&pid=1.7",
        "zi":"我是一只猫,一只猫是我"
    },
    {
        "imgs":"https://thirdqq.qlogo.cn/g?b=oidb&k=UrsRLvfibtgkIUeypR6V2sQ&s=100&t=1588771083",
        "tu":"https://tse3-mm.cn.bing.net/th/id/OIP-C.QyRI2-vHaqAKE1wPjojaJAHaJQ?w=145&h=181&c=7&r=0&o=5&pid=1.7",
        "zi":"我是一只猫,不知道写点啥"
    },

]
}
data.push(template)
Mock.mock('/data/index', 'get', data) // 根据数据模板生成模拟数据
