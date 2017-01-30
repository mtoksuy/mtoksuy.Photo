<?php
/**
	Rootコントローラー
	トップページコントロールファイル

*/

class Controller_Root extends Controller_Basic_Template {
	// 親のbefore実行
	public function before() {
		parent::before();
	}
	// 基本アクション
	public function action_index() {
		// トップページ判定取得
		$top_check_data = Model_Info_Basis::top_check_data_get();
		// トップページだった場合
		if($top_check_data == true) {
			// メタセット
			$this->basic_template->view_data["meta"] = View::forge('root/meta');
		}


		// 最新の記事を取得
		$newest_article_primary_id = Model_Root_Basis::newest_article_get();

		// リストres取得
		$list_res        = Model_Root_Basis::list_res_get(0, 50, 'article');
//pre_var_dump($list_res);


		// リストHTML生成
		$photo_list_html = Model_Root_Html::root_photo_list_html_get($list_res);

		// コンテンツデータセット
		$this->basic_template->view_data["content"]->set('content_data', array(
			'content_html' => $photo_list_html,
		), false);
	}
}
