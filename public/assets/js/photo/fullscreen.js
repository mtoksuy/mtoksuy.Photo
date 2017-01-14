$(function() {
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
			 	// ごにょごにょできる場所
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

			/*******
			ajax開始
			*******/
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
//					p(data);
					/********************
					// フルスクリーン関連
					********************/
					setTimeout(function() {
						// ローディング削除
						$('.fullscreen_ajax_loding').remove();
						// フルスクリーン画像変更
						$('.fullscreen_image').attr('src', image_url_data);
						$('.fullscreen_image').attr('full-image-href-data', image_url_data);
						$('.fullscreen_image').attr('title', data['article_data_array']['article_title']);
						$('.fullscreen_image').attr('alt', data['article_data_array']['article_title']);
					}, 1000);
					/***********************
					// 次のphotoがあった場合
					***********************/
					if(data['next']) {
						// ライトアローがなかった場合作る
						if(!($('.fullscreen_arrow_right').length)) {
							// フルスクリーン
							$('.fullscreen_arrow_left').after('<div class="fullscreen_arrow_right">\
	<a href="'+data['preview']+'" class="o_8" image-url-data="'+data['preview_image_url']+'" url-number-data="'+data['preview_url_number']+'" before-primary-id-data="'+url_number_data+'">\
		<img class="" src="'+http+'assets/img/common/fullscreen_arrow_right_1.png" width="15px" height="34px">\
	</a>\
</div>');
							// おもて面
							$('.arrow_left').before('<div class="arrow_right" style="visibility: visible;">\
	<a href="'+data['preview']+'" class="o_8">\
		<img class="" src="'+http+'assets/img/common/fullscreen_arrow_right_1.png" width="15px" height="34px">\
	</a>\
</div>');
						}
						// はじっこ対策として記述 ライトアロー表示
						$('.fullscreen_arrow_right').css( {
							'display' : 'block',
						});
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
					}
						/**********************
						次のphotoがなかった場合
						**********************/
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
					/********************
					// 内部情報の書き変え
					********************/
					// urlの置き換え
					history.replaceState('', '', url_data);
					/*************************************
					// urlの置き換え 
					// http://exapmple.com/xxx/123 → http://example.com/xxx/aiueo
					history.replaceState('','','aiueo');
					
					// urlの追加
					history.pushState('','','aiueo');
					*************************************/
					// title書き変え
					$('title').html(data['article_data_array']['article_title']);

					$('meta[name="twitter:url"]').attr('content', url_data);
					$('meta[name="twitter:title"]').attr('content', data['article_data_array']['article_title']);
					$('meta[name="twitter:description"]').attr('content', data['summary_contents']);
					$('meta[name="twitter:image"]').attr('content', http+'assets/img/'+'/article/'+data['article_data_array']['article_year_time']+'/facebook_ogp/'+data['article_data_array']['article_thumbnail_image']);

					$('meta[property="og:url"]').attr('content', url_data);
					$('meta[property="og:title"]').attr('content', data['article_data_array']['article_title']);
					$('meta[property="og:description"]').attr('content', data['summary_contents']);
					$('meta[property="og:image"]').attr('content', http+'assets/img/'+'/article/'+data['article_data_array']['article_year_time']+'/facebook_ogp/'+data['article_data_array']['article_thumbnail_image']);

					/*************
					表側の書き変え
					*************/
					// 書き換えるone_third取得
					one_third_image = image_url_data.replace(/original/,'one_third');
					// one_third画像情報書き変え
					$('.article_photo_image').attr('src', one_third_image);
					$('.article_photo_image').attr('title', data['article_data_array']['article_title']);
					$('.article_photo_image').attr('alt', data['article_data_array']['article_title']);
					$('.article_photo_image').attr('full-image-href-data', one_third_image);
					// レフトアロー書き変え
					$('.arrow_left a').attr('href', data['next']);
					// ライトアロー書き変え
					$('.arrow_right a').attr('href', data['preview']);
					// 記事情報全書き換え
					$('.main_contents').html(data['article_data_array']['article_html']);
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
			var url_number_data = parseInt($('.fullscreen_arrow_right a').attr('url-number-data'));
			var image_url_data  = $('.fullscreen_arrow_right a').attr('image-url-data');
			var url_data        = $('.fullscreen_arrow_right a').attr('href');

			// ローディング画像表示
			$('#fullscreen').append('<img class="fullscreen_ajax_loding" src="'+http+'assets/img/ajax/ajax_loader_5.gif">');

			/*******
			ajax開始
			*******/
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
//					p(data);
					/********************
					// フルスクリーン関連
					********************/
					setTimeout(function() {
						// ローディング削除
						$('.fullscreen_ajax_loding').remove();
						// フルスクリーン画像変更
						$('.fullscreen_image').attr('src', image_url_data);
						$('.fullscreen_image').attr('full-image-href-data', image_url_data);
						$('.fullscreen_image').attr('title', data['article_data_array']['article_title']);
						$('.fullscreen_image').attr('alt', data['article_data_array']['article_title']);
					}, 1000);
					/***********************
					// 次のphotoがあった場合
					***********************/
					if(data['preview']) {
						// レフトアローがなかった場合作る
						if(!($('.fullscreen_arrow_left').length)) {
							// フルスクリーン
							$('.fullscreen_arrow_right').before('<div class="fullscreen_arrow_left">\
	<a href="'+data['next']+'" class="o_8" image-url-data="'+data['next_image_url']+'" url-number-data="'+data['next_url_number']+'" before-primary-id-data="'+url_number_data+'">\
		<img class="" src="'+http+'assets/img/common/fullscreen_arrow_left_1.png" width="15px" height="34px">\
	</a>\
</div>');
							// おもて面
							$('.arrow_right').before('<div class="arrow_left" style="visibility: visible;">\
	<a href="'+data['next']+'" class="o_8">\
		<img class="" src="'+http+'assets/img/common/fullscreen_arrow_left_1.png" width="15px" height="34px">\
	</a>\
</div>');
						}
						// はじっこ対策として記述 レフトアロー表示
						$('.fullscreen_arrow_left').css( {
							'display' : 'block',
						});
						// リンク変更
						$('.fullscreen_arrow_right a').attr('href', data['preview']);
						// image-url-data変更
						$('.fullscreen_arrow_right a').attr('image-url-data', data['preview_image_url']);
						// url-number-data変更
						$('.fullscreen_arrow_right a').attr('url-number-data', data['preview_url_number']);
						// before-primary-id-data変更
						$('.fullscreen_arrow_right a').attr('before-primary-id-data', url_number_data);
						// リンク変更
						$('.fullscreen_arrow_left a').attr('href', data['next']);
						// image-url-data変更
						$('.fullscreen_arrow_left a').attr('image-url-data', data['next_image_url']);
						// url-number-data変更
						$('.fullscreen_arrow_left a').attr('url-number-data', data['next_url_number']);
						// before-primary-id-data変更
						$('.fullscreen_arrow_left a').attr('before-primary-id-data', url_number_data);
					}
						/**********************
						前のphotoがなかった場合
						**********************/
						else {
							// ライトアロー非表示
							$('.fullscreen_arrow_right').css( {
								'display' : 'none',
							});
							// リンク変更
							$('.fullscreen_arrow_left a').attr('href', data['next']);
							// image-url-data変更
							$('.fullscreen_arrow_left a').attr('image-url-data', data['next_image_url']);
							// url-number-data変更
							$('.fullscreen_arrow_left a').attr('url-number-data', data['next_url_number']);
							// before-primary-id-data変更
							$('.fullscreen_arrow_left a').attr('before-primary-id-data', url_number_data);
						}
					/********************
					// 内部情報の書き変え
					********************/
					// urlの置き換え
					history.replaceState('', '', url_data);
					/*************************************
					// urlの置き換え 
					// http://exapmple.com/xxx/123 → http://example.com/xxx/aiueo
					history.replaceState('','','aiueo');
					
					// urlの追加
					history.pushState('','','aiueo');
					*************************************/
					// title書き変え
					$('title').html(data['article_data_array']['article_title']);

					$('meta[name="twitter:url"]').attr('content', url_data);
					$('meta[name="twitter:title"]').attr('content', data['article_data_array']['article_title']);
					$('meta[name="twitter:description"]').attr('content', data['summary_contents']);
					$('meta[name="twitter:image"]').attr('content', http+'assets/img/'+'/article/'+data['article_data_array']['article_year_time']+'/facebook_ogp/'+data['article_data_array']['article_thumbnail_image']);

					$('meta[property="og:url"]').attr('content', url_data);
					$('meta[property="og:title"]').attr('content', data['article_data_array']['article_title']);
					$('meta[property="og:description"]').attr('content', data['summary_contents']);
					$('meta[property="og:image"]').attr('content', http+'assets/img/'+'/article/'+data['article_data_array']['article_year_time']+'/facebook_ogp/'+data['article_data_array']['article_thumbnail_image']);

					/*************
					表側の書き変え
					*************/
					// 書き換えるone_third取得
					one_third_image = image_url_data.replace(/original/,'one_third');
					// one_third画像情報書き変え
					$('.article_photo_image').attr('src', one_third_image);
					$('.article_photo_image').attr('title', data['article_data_array']['article_title']);
					$('.article_photo_image').attr('alt', data['article_data_array']['article_title']);
					$('.article_photo_image').attr('full-image-href-data', one_third_image);
					// ライトアロー書き変え
					$('.arrow_right a').attr('href', data['preview']);
					// レフトアロー書き変え
					$('.arrow_left a').attr('href', data['next']);
					// 記事情報全書き換え
					$('.main_contents').html(data['article_data_array']['article_html']);
			  },
				// エラー処理
			  error: function(data) {

			  },
			  complete: function(data) {

			  }
			}); // $.ajax({
			return false;
		}
	}, '.fullscreen_arrow_right');

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

	/*************************************
	// 主にタブレット&スマートフォン用制御
	*************************************/
	var photo_height = $(window).height() - $('#header').height();
	var photo_width  = $(window).width();
	image_hiritu = $('.article_photo_image').width()/$('.article_photo_image').height();
	window_hiritu = $(window).width()/$(window).height();

	if(image_hiritu > window_hiritu) {
		$('.fullscreen_image').css( {
			'width' : '100%',
			'height' : 'auto',
		});
		$('#fullscreen').css( {
			'display' : 'flex',
			'justify-content' : 'center',
			'align-items' : 'center',
		});
	}
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