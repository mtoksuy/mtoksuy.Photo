<?php
/*
* Ajax フルスクリーンネクストプレビューゲットコントローラー
* 
* 
* 
*/
class Controller_Ajax_Photo_Fullscreen_Nextpreviewget extends Controller {
	// アクション
	public function action_index() {
		$_POST['url_number_data'] = (int)$_POST['url_number_data'];
		// 前のまとめ、次のまとめTML生成
		$previous_next_array = Model_Article_Html::photo_previous_next_array_create($_POST['url_number_data'], 'article');
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
		header('Content-Type: text/javascript; charset=utf-8');
		$json_data = array(
					'preview'            => $previous_next_array['preview'],
					'next'               => $previous_next_array['next'],
					'preview_url_number' => $previous_next_array['preview_url_number'],
					'next_url_number'    => $previous_next_array['next_url_number'],
					'preview_image_url'  => $previous_next_array['preview_image_url'],
					'next_image_url'     => $previous_next_array['next_image_url'],
		);
		return json_encode($json_data);
	}
}