
// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 250;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここま



// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});


//画像の設定

$('.slider').slick({
	fade:true,//切り替えをフェードで行う。初期値はfalse。
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
	speed:1000,//スライドの動きのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 1,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	dots: true,//下部ドットナビゲーションの表示
			pauseOnFocus: false,//フォーカスで一時停止を無効
			pauseOnHover: false,//マウスホバーで一時停止を無効
			pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
	$('.slider').slick('slickPlay');
});

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: '../img/hero.jpg'},
				{ src: '../img/about.jpg'},
				{ src: '../img/estate.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
			{ src: '../img/hero.jpg'},
			{ src: '../img/about.jpg'},
			{ src: '../img/estate.jpg'}
			];
		}



	// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

	// 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
	var elemPos = $(this).offset().top-50;//要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
	}else{
		$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
	}
});	

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
	var elemPos = $(this).offset().top-50;//要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
	}else{
		$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
	}
});		
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
	BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
	BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
	$('.timeline li').each(function(){// それぞれのli要素の
		var elemPos = $(this).offset().top;// 上からの高さ取得
		var scroll = $(window).scrollTop();// スクロール値取得
		var windowHeight = $(window).height();// windowの高さ取得
		var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
		if (scroll >= elemPos - windowHeight-startPoint){				
			var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
			//スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

			// 100% を超えたらずっと100%を入れ続ける
			if(percent  > 100){
				percent  = 100;
			}
			// ボーダーの長さをセット
			$(this).children('.border-line').css({
				height: percent + "%", //CSSでパーセント指定
			});
		} 
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});



$(window).scroll(function (){



$('.fadeInUpTrigger').each(function() {

var elemPos = $(this).offset().top-0;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();

if(scroll >= elemPos - windowHeight){
	$(this).addClass('fadeUp');
}else{
	$(this).removeClass('fadeUp');
} });


$(window).scroll(function (){



	$('.fadeUpTrigger').each(function() {
	
	var elemPos = $(this).offset().top-0;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	
	if(scroll >= elemPos - windowHeight){
		$(this).addClass('smooth');
	}else{
		$(this).removeClass('smooth');
	} });
	
	
	});


$(window).scroll(function (){



	$('.zoomUpTrigger').each(function() {
	
	var elemPos = $(this).offset().top-0;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	
	if(scroll >= elemPos - windowHeight){
		$(this).addClass('zoomIn');
	}else{
		$(this).removeClass('zoomIn');
	} });
	
	
	});


});


//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
		$('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
	}else{
		if(
			$('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
			$('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
			$('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});






//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash_text").fadeOut(10);//フェードアウトでローディングテキストを削除
	$(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
	$(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
	$("#splash").fadeOut();//#splashエリアをフェードアウト
});



$(function () {
  $(window).on('scroll', function () {
      if ($('.container').height() < $(this).scrollTop()) {
          $('.js-header').addClass('change-color');
    } else {
          $('.js-header').removeClass('change-color');
    }
  });



//ナビゲーションをクリックした際のスムーススクロール
$('#g-nav a').click(function () {
	var elmHash = $(this).attr('href'); //hrefの内容を取得
	var headerH = $("#header_inner").outerHeight(true);//追従するheader分の高さ（70px）を引く
	var pos = Math.round($(elmHash).offset().top-headerH);	//headerの高さを引き小数点を四捨五入
	$('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
	return false;//リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PositionCheck();/* 現在地を取得する関数を呼ぶ*/
	ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PositionCheck();/* 現在地を取得する関数を呼ぶ*/
	ScrollAnime();/* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
});

$(window).resize(function() {
  //リサイズされたときの処理
  PositionCheck()
});


});


