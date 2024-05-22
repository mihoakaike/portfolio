// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  var elemPos = $(this).offset().top-50; //要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll > elemPos - windowHeight + 230){
  $(this).addClass('fadeUp');
  // 画面内に入ったらfadeUpというクラス名を追記
  }else{
  $(this).removeClass('fadeUp');
  // 画面外に出たらfadeUpというクラス名を外す
  }
  });
  
  
  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述