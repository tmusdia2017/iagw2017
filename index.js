
    $(document).ready(function() {
    $('.drawer').drawer();
    });
    
    $(function(){
        
        // ヘッダーのリンクをクリックした場合に処理
        $('.header_content').click(function() {
            
            var y = $("#wrapper").scrollTop();
            
            //href内を確認して取得
            var target= $(this).attr("href");
            console.log(target);
            // 移動先を取得
            var position = $(target).offset().top;
            console.log("position " + position);
 
            console.log("y " +y);
            
            var pos = y + position;
            
            // スムーススクロール
            $('#wrapper').animate({scrollTop:pos}, 1000);

            return false;
        });
    });
    
    
    //研究室クリックしたら
    $(function(){
        
        // ヘッダーのリンクをクリックした場合に処理
        $('.lavolatories').click(function() {
            
            var y = $("#wrapper").scrollTop();
            
            //href内を確認して取得
            var target= $(this).attr("href");
            console.log(target);
            // 移動先を取得
            var position = $(target).offset().top;
            console.log("position " + position);
 
            console.log("y " +y);
            
            var pos = y + position;
            
            // スムーススクロール
            $('#wrapper').animate({scrollTop:pos}, 1000);

            return false;
        });
    });
    
    
    var sW,sH,pieceSize;
    
    //ウィンドウサイズを取得する
    function getWindowSize() {   
        sW = window.innerWidth;
        sH = window.innerHeight;
        
        pieceSize = sW / 13;
        
        if(pieceSize < 74 ){
            pieceSize = 74;
        }
    }
    
    //ウィンドウサイズの取得
    getWindowSize();
    
    //ピースを降らせる記述(後)
    $(window).load(function(){
        $("#firstview").snowfall({
            flakeColor:"#ffffff", //色を指定
            round:false,   //丸くする、丸が嫌ならfalseを入れる
            shadow:false,  //影をつける、影を付けたければtrueを入れる
            minSize:pieceSize,     //好みで最小の大きさを指定
            maxSize:pieceSize,    //好みで最大の大きさを指定
            flakeCount:4, //表示数
            minspeed:3,    //最小落下速度
            maxSpeed:3,  //最大落下速度
            //collection : "#norunoruwarota", //積もる要素を指定
            image : ["img/piece/piece-w1.png",
                    "img/piece/piece-w2.png",
                    "img/piece/piece-w3.png",
                    "img/piece/piece-w4.png",
                    "img/piece/piece-w5.png",
                    "img/piece/piece-w6.png",
                    "img/piece/piece-w7.png",
                    "img/piece/piece-w8.png",
                    "img/piece/piece-w9.png",
                    "img/piece/piece-w10.png",
                    "img/piece/piece-w11.png",
                    "img/piece/piece-b1.png",
                    "img/piece/piece-b2.png",
                    "img/piece/piece-b3.png",
                    "img/piece/piece-b4.png",],// オリジナル画像を使用する場合    
            flakeIndex :"5",
        });  
           
    });
    
    //ピースを降らせる記述(前)
    $(window).load(function(){
        $("#firstview").snowfall({
            flakeColor:"#ffffff", //色を指定
            round:false,   //丸くする、丸が嫌ならfalseを入れる
            shadow:false,  //影をつける、影を付けたければtrueを入れる
            minSize:pieceSize,     //好みで最小の大きさを指定
            maxSize:pieceSize,    //好みで最大の大きさを指定
            flakeCount:2, //表示数
            minspeed:3,    //最小落下速度
            maxSpeed:3,  //最大落下速度
            //collection : "#norunoruwarota", //積もる要素を指定
            image : ["img/piece/piece-w1.png",
                    "img/piece/piece-w2.png",
                    "img/piece/piece-w3.png",
                    "img/piece/piece-w4.png",
                    "img/piece/piece-w5.png",
                    "img/piece/piece-w6.png",
                    "img/piece/piece-w7.png",
                    "img/piece/piece-w8.png",
                    "img/piece/piece-w9.png",
                    "img/piece/piece-w10.png",
                    "img/piece/piece-w11.png",
                    "img/piece/piece-b1.png",
                    "img/piece/piece-b2.png",
                    "img/piece/piece-b3.png",
                    "img/piece/piece-b4.png",],// オリジナル画像を使用する場合
            flakeIndex :"888",
        });  
           
    });
    
    
    
    $(function(){
        
        $("#exhibitors-info").hide();
        
        $(".lavolatories").click(function(){
            $("#exhibitors-info").fadeIn(1000);
            var position = $("#exhibitors").offset().top;
            $("html,body").animate({scrollTop: position},1000);
        });
        
        
        
        //exhibitors一覧を表示する処理
        $("#transportation").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/trance.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/2016/12/blog-post_19.html");
            $("#exhibitors-info h3").html("トランスポーテーションデザインスタジオ");
            $("#labo-name-en").html("Transportation Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>小金丸朗生</span><span>後藤千尋</span>");
            $("#bachelors").html("<span>秋山大輝</span><span>佐野友優</span><span>和田遥菜</span><span>小笠原菜摘</span><span>池田政也</span>");
        });
        
        $("#equip").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/equip.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("製品・サービスデザインスタジオ");
            $("#labo-name-en").html("Equipment Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>狩野亜門</span><span>何煦</span><span>栗原徹</span><span>徳山義介</span><span>南澤沙良</span>");
            $("#bachelors").html("<span>岩岡勇樹</span><span>小田倉早紀</span><span>岸本玲</span><span>齋藤和花</span><span>武田真衣</span><span>堤隆寛</span>");  
        });
        
        $("#interface").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/interface.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("インターフェースデザインスタジオ");
            $("#labo-name-en").html("Interface Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>庭田凪沙</span><span>横溝有希子</span>");
            $("#bachelors").html("<span>岩村槙一郎</span><span>塚本裕介</span><span>宮脇愛良</span>");  
        });

        $("#space").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/space.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/2016/12/blog-post_26.html");
            $("#exhibitors-info h3").html("空間デザインスタジオ");
            $("#labo-name-en").html("Spacial Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>飯島好美</span><span>高橋幸典</span><span>林怡均</span>");
            $("#bachelors").html("<span>阿山航</span><span>尾澤陽一郎</span><span>田辺皐</span>");  
        });

        $("#interior").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/int.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("インテリアデザインスタジオ");
            $("#labo-name-en").html("Interior Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>小林空</span><span>高澤龍一</span><span>當摩桜</span><span>冨永弘太郎</span><span>村山雄太</span>");
            $("#bachelors").html("<span>秋山琴美</span><span>犬塚友理恵</span><span>高橋梨佳</span><span>奈良匠</span><span>藤澤駿</span><span>吉永久美子</span>");  
        });
        
        $("#ergonomic").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/elgo.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("エルゴノミックデザインスタジオ");
            $("#labo-name-en").html("Ergonomic Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>山口真理子</span>");
            $("#bachelors").html("<span>柴尾美音</span><span>下園克</span><span>須田絵里花</span><span>津守一樹</span><span>山本祐邦子</span>");  
        });
        
        $("#visual").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/visual.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("ヴィジュアルコミュニケーションデザインスタジオ");
            $("#labo-name-en").html("Visual Communication Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>池上夏未</span><span>本山真帆</span><span>矢崎裕二</span>");
            $("#bachelors").html("<span>大竹真由</span><span>岡本朱未</span><span>菊池アルトゥール</span><span>國廣一輝</span><span>保科耀介</span><span>柳原彩</span>");     
        });
        
        $("#network").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/net.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/2016/12/blog-post.html");
            $("#exhibitors-info h3").html("ネットワークデザインスタジオ");
            $("#labo-name-en").html("Network Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>井口香穂</span><span>金含</span><span>木村汐里</span><span>小宮慎之介</span><span>佐野大河</span><span>ヒルラ オルカシ</span>");
            $("#bachelors").html("<span>佐野千秋</span><span>中原貴文</span><span>秦那実</span><span>原ひかり</span><span>山浦徹也</span><span>山下悠介</span>");  
        });
        
        $("#interactive").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/intractive.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("インタラクティブアートスタジオ");
            $("#labo-name-en").html("Interactive Art Studio");
            $("#masters-title").html("");
            $("#masters").html("");
            $("#bachelors").html("<span>小幡朱</span><span>黒崎美聡</span><span>國友美世子</span><span>永井歩</span><span>宮下恵太</span>");  
        });

        $("#software").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/soft.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/2016/12/blog-post_22.html");
            $("#exhibitors-info h3").html("ソフトウェアデザインスタジオ");
            $("#labo-name-en").html("Software Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>三善優紀</span>");
            $("#bachelors").html("<span>磯野優夏</span><span>岩田裕里子</span><span>工藤正堯</span><span>矢追那実</span>");  
        });
        
        $("#kinematograph").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/mov.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("映像デザインスタジオ");
            $("#labo-name-en").html("kinematograph Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>平川有香</span><span>張琨</span>");
            $("#bachelors").html("<span>鈴木理紗</span><span>片山めぐみ</span><span>等々力菜月</span><span>平山慶吾</span><span>松本侑</span><span>柳町空</span>");  
        });
        
        $("#editorial").click(function() {
            $("#exhibitors-info img").attr("src","img/lavo/edit.png");
            $("#readmore-button a").attr("href","https://iagw2017-blog.blogspot.jp/");
            $("#exhibitors-info h3").html("エディティングデザインスタジオ");
            $("#labo-name-en").html("Editorial Design Studio");
            $("#masters-title").html("修士");
            $("#masters").html("<span>趙</span>");
            $("#bachelors").html("<span>石橋弓子</span><span>小野寺蛍</span><span>佐々木淑子</span><span>関香月</span><span>船越草馬</span>");  
        });

    });