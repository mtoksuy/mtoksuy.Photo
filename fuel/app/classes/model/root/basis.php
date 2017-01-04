<?php 
/**
	トップページの基本モデル

*/
class Model_Root_Basis extends Model {
	//////////////////
	//最新の記事を取得
	//////////////////
	public static function newest_article_get() {
		$res = DB::query("
			SELECT *
			FROM article
			WHERE del = 0
			ORDER BY primary_id DESC
			LIMIT 0,1")->execute();
		foreach($res as $key => $value) {
			$newest_article_primary_id = (int)$value['primary_id'];
		}
		return $newest_article_primary_id;
	}
	///////////////
	//リストres取得
	///////////////
	public static function list_res_get($now_num = 0, $get_num = 3, $article_type = 'article') {
		$limit_num = '';
		// limitクエリ
		$start_num = $now_num;
		$limit_query = "LIMIT ".$start_num.", ".$get_num."";

		$list_query = DB::query("
			SELECT *
			FROM ".$article_type."
			WHERE del = 0
			".$and_query."
			".$and_2_query."
			ORDER BY ".$article_type.".primary_id DESC
			".$limit_query."")->cached(900)->execute();


		return $list_query;
	}
}