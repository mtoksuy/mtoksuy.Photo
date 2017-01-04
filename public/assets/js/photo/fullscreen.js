$(function() {
	/*************************************
	フルスクリーン時でのネクストボタン挙動
	*************************************/
	$('#fullscreen').on( {
		'click': function() {
			var url_number_data = parseInt($('.fullscreen_arrow_left a').attr('url-number-data'));
			var image_url_data  = $('.fullscreen_arrow_left a').attr('image-url-data');
			var url_data        = $('.fullscreen_arrow_left a').attr('href');

			// ローディング画像表示
			$('#fullscreen').append('<img class="fullscreen_ajax_loding" src="'+http+'assets/img/ajax/ajax_loader_5.gif">');
			setTimeout(function() {
				// ローディング削除
				$('.fullscreen_ajax_loding').remove();
				// 画像変更
				$('.fullscreen_image').attr('src', image_url_data);
			}, 1000);

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
					// 次があった場合
					if(data['next']) {
						// ライトアローがなかった場合作る
						if(!($('.fullscreen_arrow_right').length)) {
							$('.fullscreen_arrow_left').after('<div class="fullscreen_arrow_right">\
	<a href="'+data['preview']+'" class="o_8" image-url-data="'+data['preview_image_url']+'" url-number-data="'+data['preview_url_number']+'" before-primary-id-data="'+url_number_data+'">\
		<img class="" src="http://localhost/suz/assets/img/common/fullscreen_arrow_right_1.png" width="15px" height="34px">\
	</a>\
</div>');
						}
						// リンク変更
						$('.fullscreen_arrow_left a').attr('href', data['next']);
						// image-url-data変更
						$('.fullscreen_arrow_left a').attr('image-url-data', data['next_image_url']);
						// url-number-data変更
						$('.fullscreen_arrow_left a').attr('url-number-data', data['next_url_number']);
						// before-primary-id-data変更
						$('.fullscreen_arrow_left a').attr('before-primary-id-data', url_number_data);
						// リンク変更
						$('.fullscreen_arrow_right a').attr('href', data['preview']);
						// image-url-data変更
						$('.fullscreen_arrow_right a').attr('image-url-data', data['preview_image_url']);
						// url-number-data変更
						$('.fullscreen_arrow_right a').attr('url-number-data', data['preview_url_number']);
						// before-primary-id-data変更
						$('.fullscreen_arrow_right a').attr('before-primary-id-data', url_number_data);


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
							// レフトアロー非表示
							$('.fullscreen_arrow_left').css( {
								'display' : 'none',
							});
							// リンク変更
							$('.fullscreen_arrow_right a').attr('href', data['preview']);
							// image-url-data変更
							$('.fullscreen_arrow_right a').attr('image-url-data', data['preview_image_url']);
							// url-number-data変更
							$('.fullscreen_arrow_right a').attr('url-number-data', data['preview_url_number']);
							// before-primary-id-data変更
							$('.fullscreen_arrow_right a').attr('before-primary-id-data', url_number_data);
						}
					// 表面の情報書き変え
					history.replaceState('', '', url_data);
					/*************************************
					// urlの置き換え 
					// http://exapmple.com/xxx/123 → http://example.com/xxx/aiueo
					history.replaceState('','','aiueo');
					
					// urlの追加
					history.pushState('','','aiueo');
					*************************************/
					// 書き換えるone_third取得
					one_third_image = image_url_data.replace(/original/,'one_third');
p(one_third_image);
					$('.article_photo_image').attr('src', one_third_image);
					$('.article_photo_image').attr('title', '');
					$('.article_photo_image').attr('alt', '');
					$('.article_photo_image').attr('full-image-href-data', '');
/*
photo
article_photo

main_contents clearfix
article_list
*/
/*
<img class="article_photo_image" title="ぶらぶらとぶらぶらさがり" alt="ぶらぶらとぶらぶらさがり" src="http://localhost/suz/assets/img/article/2016/one_third/22.jpg" full-image-href-data="http://localhost/suz/assets/img/article/2016/original/22.jpg" style="visibility: visible; height: 100%; width: auto;" width="auto" height="300">
*/





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