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







/*
$('.article_photo').css( {
	'height' : photo_height+'px',
});
*/
/*
		p($('.photo .article_photo .article_photo_image'));
		var article_photo_image = $('.photo .article_photo .article_photo_image');
    for (var i = 0; i < article_photo_image.length; i++) {
        article_photo_image.load(function() {
					console.log('読み込み完了');
					article_photo_image.css( {
						'display' : 'block',
					});
        });
        img.attr('src', img.eq(i).attr('src'));
    };
*/
	}); // $(function() {





/************************************
Photoを自動で適切な大きさに変える関数
************************************/
function photo_change() {
	var photo_height = $(window).height() - $('#header').height();
	var photo_width  = $(window).width();

  var article_photo_image = $('.photo .article_photo .article_photo_image');
	// 非表示にしていたアイテムを表示する
	article_photo_image.css( {
//		'display' : 'block',
		'visibility' : 'visible',
	});

	$('.photo .article_photo .before_next_link').css( {
//		'z-index' : '34',
	});

	$('.arrow_left').css( {
		'visibility' : 'visible',	
//		'z-index' : '33',
	});
	$('.arrow_right').css( {
		'visibility' : 'visible',	
//		'z-index' : '33',
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

/*
  var allImage = $('.photo .article_photo .article_photo_image');
  var allImageCount = allImage.length;
  var completeImageCount = 0;

  for(var i = 0; i < allImageCount; i++){
    $(allImage[i]).bind("load", function(){
      completeImageCount ++;
      if (allImageCount == completeImageCount) {
        // 処理
        alert('ready!');
      }
    });
  }
*/



/*
<div class="photo clearfix">
				<!-- photoコンテンツ -->
					
			<div class="article_photo" style="height: 398px;">
					<img class="article_photo_image" title="" alt="" src="http://localhost/suz/assets/img/article/2016/one_third/33.jpg" full-image-href-data="http://localhost/suz//assets/img/article/2016/original/33.jpg" style="height: 100%; width: auto;" width="" height="">

				<div class="before_next_link">
					
						<div class="arrow_left">
							<a href="http://localhost/suz/article/35/" class="o_8">
								<img class="" src="http://localhost/suz/assets/img/common/arrow_left_1.png" width="15px" height="34px">	
							</a>
						</div>
					
				<div class="arrow_right">
					<a href="http://localhost/suz/article/32/" class="o_8">
						<img class="" src="http://localhost/suz/assets/img/common/arrow_right_1.png" width="15px" height="34px">	
					</a>
				</div>
				</div>
			</div>			</div>
*/


/*******************
HTML読み込み後に処理
*******************/
$(window).load(function(){
	/*****************
	オリジナル画像表示
	*****************/
	$('.photo').on( {
		'click' : function() {
			full_image_href_data = $('.article_photo .article_photo_image').attr('full-image-href-data');
//			window.location.href = full_image_href_data;
			window.open(full_image_href_data);
		}
}, '.article_photo .article_photo_image');
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