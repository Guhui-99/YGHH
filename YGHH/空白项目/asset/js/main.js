
$(document).ready(function() {
	
	$(`<div class="ui-nav">
		<a class="item" href="">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-shangcheng"></use>
			</svg>
			<span class="item-text">首页</span>
		</a>
		<a class="item" href="">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-jifenfenlei"></use>
			</svg>
			<span class="item-text">分类</span>
		</a>
		<a class="item" href="">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-iconfontgouwuche"></use>
			</svg>
			<span class="item-text">购物车</span>
		</a>
		<a class="item" href="">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-fenxiang"></use>
			</svg>
			<span class="item-text">分享</span>
		</a>
		<a class="item" href="">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-wode4"></use>
			</svg>
			<span class="item-text">我的</span>
		</a>
	</div>`).insertBefore(".Nav");

	$(".header-button").on("click", function() {
		event.preventDefault();
		$(this).attr("href")? window.location.href = $(this).attr("href") : window.history.go(-1);
	});

	$("head").append(`<script src="https://at.alicdn.com/t/font_1717509_e7aydx6v07.js" type="text/javascript" charset="utf-8"></script>`);
	
	

	$(".ui-nav .item").on("click", function() {
		event.preventDefault();
		const target = $(this).index();
		window.sessionStorage.setItem("navItem", target);
		window.location.href = $(this).attr("href");
	});
	
	var currentIndex = window.sessionStorage.getItem("navItem") || 0;
	$($(".ui-nav .item")[currentIndex]).addClass("active").siblings().removeClass("active");
	
	$(".ui-shade,.modal-close").click(function(){
		$(".ui-shade").css("display","none");
	})
	
	$(".ui-modal").click(function(e){
		var ev = e || event;
		ev.stopPropagation();
	})
	
});
