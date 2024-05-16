let copyText = document.querySelector(".copy-link");

copyText.querySelector("button").addEventListener("click", function() {
//アイコンをクリックしたら、下記を実行
 let input = copyText.querySelector("input.link");
 input.select(); //select()メソッドはinput or textareaのテキストを選択します
 document.execCommand("copy") //document.execCommand("copy")は任意の値をクリップボードにコピーするJSのコマンド
 copyText.classList.add("active"); //activeクラスを付与し、吹き出しを表示させます
 window.getSelection().removeAllRanges(); //range(範囲)を削除します

 setTimeout(function() {
  copyText.classList.remove("active");
 }, 2500)  //2.5秒後に吹き出しを非表示にします
})