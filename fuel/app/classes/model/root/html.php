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
	public static function root_photo_list_html_get($list_res) {
		foreach($list_res as $key => $value) {
			 $li_html .= '
			<li class="o_8">
				<article>
					<a href="'.HTTP.'article/'.$value['primary_id'].'/" class="clearfix">
						<figure>
							<img class="" src="'.HTTP.'assets/img/article/'.date('Y',strtotime($value['create_time'])).'/detail/'.$value['thumbnail_image'].'" title="'.$value['title'].'" alt="'.$value['title'].'" height="200" width="200">

						</figure>
					</a>
				</article>
			</li>';
		}



$photo_list_html = 
'<div class="card_photo">
	<div class="card_photo_content">
		<div class="card_photo_header">
			<span class="typcn typcn typcn-bookmark"></span>
			<span>Photo Collection</span>
		</div>
		<ul class="clearfix">
			'.$li_html.'
		</ul>
	</div>
</div>';

return $photo_list_html;
	}





}