
			<!-- jQueryプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/common/jquery-1.9.1-min.js"></script>
			<!-- 自作プラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/common/common.js"></script>

			<!-- Photoプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/photo/common.js"></script>

			<!-- fullscreenプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/library/jquery.fullscreen.js"></script>

			<!-- Twitterscrapingプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/twitterscraping/common.js"></script>
			<!-- Twitter_image_viewプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/article/twitter_image_view.js"></script>



<script>
$(function() {
	/*************************************
	フルスクリーン時でのネクストボタン挙動
	*************************************/
	$('#fullscreen').on( {
		'click': function() {
			var url_number_data = parseInt($('.fullscreen_arrow_left a').attr('url-number-data'));
			var image_url_data  = $('.fullscreen_arrow_left a').attr('image-url-data');
			var url_data        = $('.fullscreen_arrow_left a').attr('href');
			// 画像変更
			$('.fullscreen_image').attr('src', image_url_data);
			/*
			ajax開始
			*/
			$.ajax({
				type: 'POST', 
				url: http + 'ajax/photo/fullscreen/nextpreviewget/',
				data: {
					url_number_data : url_number_data,
					image_url_data  : image_url_data,
					url_data        : url_data,
				},
				dataType: 'json',
				cache: false,
				// 成功処理
			  success: function(data) {
					p(data);
					if(data['next']) {
						$('.fullscreen_arrow_left a').attr('href', data['next']);
						$('.fullscreen_arrow_left a').attr('image-url-data', data['next_image_url']);
						$('.fullscreen_arrow_left a').attr('url-number-data', data['next_url_number']);
						$('.fullscreen_arrow_left a').attr('before-primary-id-data', url_number_data);
	/*
	<a href="http://localhost/suz/article/26/" class="o_8" image-url-data="http://localhost/suz/assets/img/article/2016/original/26.jpg" url-number-data="26" before-primary-id-data="25">
									<img class="" src="http://localhost/suz/assets/img/common/fullscreen_arrow_left_1.png" width="15px" height="34px">	
								</a>
	25
	*/
	/*
	 ["preview"]=>
	  string(32) "http://localhost/suz/article/25/"
	  ["next"]=>
	  string(32) "http://localhost/suz/article/27/"
	  ["preview_url_number"]=>
	  string(2) "25"
	  ["next_url_number"]=>
	  string(2) "27"
	  ["preview_image_url"]=>
	  string(60) "http://localhost/suz/assets/img/article/2016/original/25.jpg"
	  ["next_image_url"]=>
	  string(60) "http://localhost/suz/assets/img/article/2016/original/27.jpg"
	*/
					}
						else {
							$('.fullscreen_arrow_left').css( {
								'display' : 'none',
							});
						}





			  },
				// エラー処理
			  error: function(data) {

			  },
			  complete: function(data) {

			  }
			}); // $.ajax({
























			return false;
		}
	}, '.fullscreen_arrow_left');
	/***************************************
	フルスクリーン時でのプレビューボタン挙動
	***************************************/
	$('#fullscreen').on( {
		'click': function() {
			var url_number_data = $('.fullscreen_arrow_right a').attr('url-number-data');
			var image_url_data  = $('.fullscreen_arrow_right a').attr('image-url-data');
			var url_data        = $('.fullscreen_arrow_right a').attr('href');
			$('.fullscreen_image').attr('src', image_url_data);
			return false;
		}
	}, '.fullscreen_arrow_right');
		/***************************
		フルスクリーンイベントを検知
		***************************/
    document.addEventListener("webkitfullscreenchange", handleFSevent, false);
    document.addEventListener("mozfullscreenchange", handleFSevent, false);
    document.addEventListener("MSFullscreenChange", handleFSevent, false);
    document.addEventListener("fullscreenchange", handleFSevent, false);
    function handleFSevent() {
    	if( (document.webkitFullscreenElement && document.webkitFullscreenElement !== null)
    	 || (document.mozFullScreenElement && document.mozFullScreenElement !== null)
    	 || (document.msFullscreenElement && document.msFullscreenElement !== null)
    	 || (document.fullScreenElement && document.fullScreenElement !== null) ) {

    	}
				// フルスクリーン画像非表示
				else {
			    $.fullscreen.exit();
						$('#fullscreen').css( {
							'display' : 'none',
						});
			    return false;
    		}
    }

	/*****************
	フルスクリーン表示
	*****************/
  $('.full_screen a').click(function() {

/*
// 履歴エントリの置き換え 
// http://exapmple.com/xxx/123 → http://example.com/xxx/aiueo
history.replaceState('','','aiueo');

// http://exapmple.com/xxx/123 → http://example.com/aiueo
//history.replaceState('','','/aiueo');

// 履歴エントリの追加
//history.pushState('','','aiueo');
*/


    $('#fullscreen').fullscreen();
			// オリジナル画像url取得
			var full_image_href_data = $('.fullscreen_image').attr('full-image-href-data');
			// オリジナル画像表示
			$('.fullscreen_image').attr('src', full_image_href_data);
			// フルスクリーンdiv表示
			$('#fullscreen').css( {
				'display' : 'block',
			});
    return false;
  });
	/*******************
	フルスクリーン非表示
	*******************/
  $('#fullscreen .exitfullscreen').click(function() {
    $.fullscreen.exit();
			$('#fullscreen').css( {
				'display' : 'none',
			});
    return false;
  });
	/*********************
	なんかしらんが一番大事
	*********************/
  $(document).bind('fscreenchange', function(e, state, elem) {
/*
p(e);
p(state);
p(elem);
p($.fullscreen.isFullScreen());

p($('#fullscreen .requestfullscreen').hide());
p($('#fullscreen .requestfullscreen').show());
*/
    if ($.fullscreen.isFullScreen()) {
      $('#fullscreen .requestfullscreen').hide();
      $('#fullscreen .exitfullscreen').show();
    } else {
      $('#fullscreen .requestfullscreen').show();
      $('#fullscreen .exitfullscreen').hide();
    }
  });
});
</script>


			<?php 
			if($_SERVER["HTTP_HOST"] == "localhost") {
				
			}
				else {?>
					<!-- アナリティクス -->

		<?php 
				} ?>
