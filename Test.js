$(".ing-select "). find("ing").on("click", function () {

$(this).each(function () {
var $this = $(this);
var $img = $this.attr("src");//鉄取当前点img的src的値
$("#img-box").find("img").attr("src", $img);//将获取的当前点击img的src赋值
$("#dialog-bg").show();//弹出层显示
});
});

$("#dialog-bg").on("click",funtion(){
    $(this).hide();//
})