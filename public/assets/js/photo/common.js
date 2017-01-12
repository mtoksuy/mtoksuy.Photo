	//----------------
	//読み込み後の処理
	//----------------
	$(function() {
		//-------------------------------------------------------
		//全ページトップでトップにスクロールするボタン表示 非表示
		//-------------------------------------------------------
		$(window).scroll(function() {
		 if($(window).width() > 319 && $(this).scrollTop() > 700) {
			}
		});
	}); // $(function() {

	//----------------
	//読み込み後の処理
	//----------------
	$(function() {
		var photo_height = $(window).height() - $('#header').height();
		var photo_width  = $(window).width();
		// ヘッダー分短くする
		if(photo_width <= 768) {
			photo_height = photo_height - 51;
		}
		// 読み込んだ瞬間に一度背景の大きさを変えとく(chromeのチラチラする現象を抑えるため)
		$('.article_photo').css( {
			'height': photo_height+'px',
		});

		//
		// 縦画面のほうが長いデバイスの場合 要研究
		// iPhoneで閲覧すると画像が縦に伸びてしまったため
		if($(window).height() > $(window).width()) {
			// なおかつ立て画像の場合なにもしない
			if($('.article_photo .article_photo_image').width() < $('.article_photo .article_photo_image').height()) {
		
			}
				// 横画像の場合のみ変更する
				else {
					$('.article_photo_image').css( {
						'height' : 'auto',
						'width'  : '100%',
					});
				}
		}
	}); // $(function() {





/************************************
Photoを自動で適切な大きさに変える関数
************************************/
function photo_change() {
	var photo_height = $(window).height() - $('#header').height();
	var photo_width  = $(window).width();

  var article_photo_image = $('.photo .article_photo .article_photo_image');

	/* photo */
	article_photo_image.css( {
//		'display' : 'block',
		'visibility' : 'visible',
	});

	/* アローdiv */
	$('.photo .article_photo .before_next_link').css( {
		'z-index' : '34',
	});

	/* アローボタン */
	$('.arrow_left').css( {
		'visibility' : 'visible',	
		'z-index' : '33',
	});
	$('.arrow_right').css( {
		'visibility' : 'visible',	
		'z-index' : '33',
	});
/*
1280
609
*/
// ヘッダー分短くする
if(photo_width <= 768) {
	photo_height = photo_height - 51;
}

	$('.article_photo').css( {
		'height': photo_height+'px',
	});

/*
p(photo_height);// 519
p(photo_width); // 1020
p($('.article_photo img').width());// 1020
p($('.article_photo img').height());// 519
*/


	////////////
	//横長の場合
	////////////
	if($('.article_photo .article_photo_image').width() > $('.article_photo .article_photo_image').height()) {
		// ブラウザより横長な場合
		if(photo_width < $('.article_photo .article_photo_image').width()) {
			$('.article_photo .article_photo_image').css( {
				'height': 'auto',
				'width': '100%',
			});

			diff_photo_height      = photo_height- $('.article_photo .article_photo_image').height();
			diff_photo_height_half = diff_photo_height / 2;
			$('.article_photo .article_photo_image').css( {
				'top': diff_photo_height_half,
			});
		} // if(photo_width < $('.article_photo .article_photo_image').width()) {
		// ブラウザと同じサイズの場合
		if(photo_width == $('.article_photo .article_photo_image').width()) {
			$('.article_photo .article_photo_image').css( {
				'height': 'auto',
				'width': '100%',
			});
			diff_photo_height      = photo_height- $('.article_photo .article_photo_image').height();
			diff_photo_height_half = diff_photo_height / 2;
			$('.article_photo .article_photo_image').css( {
				'top': diff_photo_height_half,
			});
		}
			// それ以外の場合
			else {
				$('.article_photo .article_photo_image').css( {
					'height': '100%',
					'width': 'auto',
				});
			} // else
	} // if($('.article_photo .article_photo_image').width() > $('.article_photo .article_photo_image').height()) {
		////////////////
		//スクエアの場合
		////////////////
		else if($('.article_photo .article_photo_image').width() == $('.article_photo .article_photo_image').height()) {

		}
			////////////
			//縦長の場合
			////////////
			else if($('.article_photo .article_photo_image').width() < $('.article_photo .article_photo_image').height()) {
				// ブラウザより横長な場合
				if(photo_width < $('.article_photo .article_photo_image').width()) {
					$('.article_photo .article_photo_image').css( {
						'height': 'auto',
						'width': '100%',
					});
		
					diff_photo_height      = photo_height- $('.article_photo .article_photo_image').height();
					diff_photo_height_half = diff_photo_height / 2;
					$('.article_photo .article_photo_image').css( {
						'top': diff_photo_height_half,
					});
				} // if(photo_width < $('.article_photo .article_photo_image').width()) {
				// ブラウザと同じサイズの場合
				if(photo_width == $('.article_photo .article_photo_image').width()) {
					$('.article_photo .article_photo_image').css( {
						'height': 'auto',
						'width': '100%',
					});
					diff_photo_height      = photo_height- $('.article_photo .article_photo_image').height();
					diff_photo_height_half = diff_photo_height / 2;
					$('.article_photo .article_photo_image').css( {
						'top': diff_photo_height_half,
					});
				}
					// それ以外の場合
					else {
						$('.article_photo .article_photo_image').css( {
							'height': '100%',
							'width': 'auto',
						});
					} // else
			}
}

/*******************
HTML読み込み後に処理
*******************/
$(window).load(function(){
	/*********************************************
	クリックされたらオリジナル画像表示(現在不使用)
	*********************************************/
	$('.photo').on( {
		'click' : function() {
			full_image_href_data = $('.article_photo .article_photo_image').attr('full-image-href-data');
			window.open(full_image_href_data);
		}
	}, '.article_photo .article_photo_image');

	/* アローdiv */
	$('.photo .article_photo .before_next_link').css( {
		'z-index' : '34',
	});

	/* アローボタン */
	$('.arrow_left').css( {
		'visibility' : 'visible',	
		'z-index' : '33',
	});
	$('.arrow_right').css( {
		'visibility' : 'visible',	
		'z-index' : '33',
	});






	photo_change();
	//------------------
	//リサイズの時の参考
	//------------------
	$(window).resize(function() {
	photo_change();
	});
});
/*
//----------------
//ブラウザの大きさ
//----------------
$(window).width();
$(window).height();
//----------------------
//スクロールしている数値
//----------------------
$(window).scrollTop();
//------------
//一番底の数値
//------------
$('html').height()
*/