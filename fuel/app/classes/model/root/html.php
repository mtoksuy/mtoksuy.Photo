<?php
/*
* 
* 記事HTML関連クラス
* 
* 
* 
*/

class Model_Root_Html extends Model {
	//////////////////////////////////
	//トップページの写真listのHTML生成
	//////////////////////////////////
	public static function root_photo_list_html_get($list_res, $column = 3) {
		$list_key++;
		$column_array=array();
		$swith_column=$column;
		$repeat_column=$column;
		$column_count=0;
		for($i = 0; $i < $column; $i++) {
			$column_array[$i] = array();
		}
		foreach($list_res as $key => $value) {
			// ターゲット画像
			$targetImage = (PATH.'assets/img/article/'.date('Y',strtotime($value['create_time'])).'/detail/'.$value["thumbnail_image"]);

			// コピー元画像のファイルサイズを取得
			list($image_w, $image_h) = getimagesize($targetImage);
			// 縦画像のみレイヤーを前に押し出す
			if($image_w < $image_h) {
				$z_index_css = 'z-index: 3;';
			}
				else {
					$z_index_css = 'z-index: 2;';
				}

			 $li_html .= '
			<li class="grid-item shown o_8" style="'.$z_index_css.'">
				<article>
					<a href="'.HTTP.'article/'.$value['primary_id'].'/" class="clearfix">
						<figure>
							<img class="" src="'.HTTP.'assets/img/article/'.date('Y',strtotime($value['create_time'])).'/detail/'.$value['thumbnail_image'].'" title="'.$value['title'].'" alt="'.$value['title'].'" height="200" width="200">

						</figure>
					</a>
				</article>
			</li>';
	$li_htmll = $column_count;
	$column_array[$column_count][] = $li_html;
	$column_count++;
	if($column_count == $repeat_column) { $column_count=0; }
}
//pre_var_dump($column_array);
foreach($column_array as $key_1 => $value_1) {
	foreach($value_1 as $key_2 => $value_2) {
		$li_list_html .= $value_2;
	}
}

$photo_list_html = 
'<div class="card_photo">
	<div class="card_photo_content">
		<div class="card_photo_header">
			<span class="typcn typcn typcn-bookmark"></span>
			<span>Photo Collection</span>
		</div>
		<ul class="grid effect-1 clearfix" id="grid">
			'.$li_html.'
		</ul>
	</div>
</div>';

return $photo_list_html;
	}
}