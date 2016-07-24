/**
 * Created by Administrator on 2016/7/19.
 */
FastClick.attach(document.body);
//动态设定rem的根值
~function (desW) {
    var winW = document.documentElement.clientWidth;
    if (winW > desW) {
        var oMain = document.querySelector('.swiper-container');
        oMain.style.margin = "0 auto";
        oMain.style.width = desW + 'px';
        //oMain.style.height = document.documentElement.clientHidth+'px';
        return;
    }
    document.documentElement.style.fontSize = (winW / desW) * 100 + 'px';
}(640);//
//->初始化Swiper
new Swiper(".swiper-container", {
    direction: "vertical",/*纵向（垂直）方向*/
    loop: false,/*开启无缝轮播*/
    //effect: "fade",/*默认值是 slide 位移切换 */
    //pagination: ".swiper-pagination",/*.onlazyImageReasy*//*延迟加载图片*/
    onSlideChangeEnd: function (swipe) {
        console.log(swipe);
        var n = swipe.activeIndex,//->获取当前活动块(当前展示的)的索引
            slideAry = swipe.slides;//->当前容器中所有的slider(包含loop模式下克隆的那两个)-它是一个类数组集合
        //->让当前展示的那个有ID，其余的都移除ID
        [].forEach.call(slideAry, function (item, index) {
            if (index == n) {
                console.log(index);
                item.id = index == 0?"page_1":index == 1? "page_2" : index==2?'page_3':index==3?'page_4':index==4?'page_5':index==5?'page_6':null;
                return;
            }
            item.id = null;
        });
    }
});
