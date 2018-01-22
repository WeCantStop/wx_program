var users =  [
    { id: 1, name: 'Will', nickName: '哥哥，饼哥', age: 27, gender: 'male',
     imgIcon: '/assets/imgs/user/male.png', userImg: 'http://m.qpic.cn/psb?/V13sys0K3RoUvw/H1EQloL39m8KmPAhz6Xdmmv7Vzej5S7PJ1ktB3R6*L0!/b/dPQAAAAAAAAA&bo=VQOAAgAAAAARB.Q!&rf=viewer_4' },
    { id: 2, name: 'Min', age: 22, nickName: '宝宝，小可爱，小仙女', gender: 'female',
     imgIcon: '/assets/imgs/user/female.png', userImg: 'http://m.qpic.cn/psb?/V13sys0K3RoUvw/.zX7Z3HUgTb5talB4Hd1uWes7bW6Z3xdMgbgFDP1pTg!/b/dPQAAAAAAAAA&bo=gAJXAwAAAAARB.Y!&rf=viewer_4' },
    { id: 3, name: 'HuaHua', age: 4, nickName: '花花狗', gender: 'female', imgIcon: '/assets/imgs/user/dog.png', userImg: 'http://m.qpic.cn/psb?/V13sys0K3RoUvw/xxPKzFfqnMzmtEx6rsEqF.n4Skdh16Nlhc6mDSpgbbQ!/b/dI4BAAAAAAAA&bo=gAJVAwAAAAARB.Q!&rf=viewer_4' }
  ];

var honeyDesc = `这是我的大宝贝，也是我的小仙女，爱好是喜欢刷微博，看综艺。有时候像是个机灵的小鬼，有时候像是个成熟的大妹纸，有时候像是个美丽的小仙女，有时候又像是个脆弱的小女孩！
              我喜欢她的简单，我喜欢她的笑容，喜欢她的傻傻的感觉，哈哈，喜欢她对我认真时候的感觉，喜欢她在每次我们发生争吵、矛盾之后，在争吵着、闹着要分之后，还是一如既往的静下来和我互相数着各自的问题，还是相互依偎在了一起。
              哈哈，不管怎么样，她都是我的大宝贝，我爱我的大宝贝。
              我答应了大宝贝许多，说要带她去重庆，说要带她去上海中心，说要带她去泰国，等等...
              在之后的日子里，这些地方我们都会一个个去完结的~
              ^_^ ^_^ ^_^
              `;

var myDesc = `这是我，大宝贝的哥哥，平时爱好比较单一，除了研究代码框架之外，就是玩玩游戏啦~
              经常游戏玩多了而忽略宝宝，而导致宝宝生气，所以宝宝不喜欢哥哥玩游戏。
              以后哥哥会再游戏和宝宝之间做好分寸哒~
              哥哥永远是宝宝的哥哥，是宝宝的大白，守护者宝宝，
              也希望宝宝对哥哥好点，不要对哥哥急，好好和哥哥说话，哥哥都会采纳宝宝的意见滴。
              ^_^ ^_^ ^_^
              `;

var dog = `这是我们家花花，已经四岁啦，喜欢叫唤个不停，也是个吃货。
          一双大大的眼睛和大大的黑鼻子很好玩，哥哥特喜欢逗它，
          宝宝第一次去哥哥家得时候，这货也对宝宝叫了会，但明显嗅出了什么，后面就不叫唤了，嘿嘿。
          虽然宝宝和花花接触的时间少，但是我也希望宝宝能喜欢花花你。
          宝宝说也想养只狗狗，哥哥也想养，但是现在我们都没时间去照顾狗狗，养的狗狗一定会很孤独，
          以后有时间了，我们一定要养只我们俩的狗狗，
          就像花花你一样那么幸福的狗狗~
          ^_^ ^_^ ^_^`;

users[0].personDesc = myDesc;
users[1].personDesc = honeyDesc;
users[2].personDesc = dog;

module.exports = {
  users: users
}