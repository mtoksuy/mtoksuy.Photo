<?php
/*
* 写真コントローラー
* 
* 
* 
* 
*/

class Controller_Article extends Controller_Article_Template {
	// ルーター
	public function router($method, $params) {
		// セグメント審査と軽い記事審査
		if (!$params && preg_match('/^[0-9]+$/', $method, $method_array)) {
			// 記事があるかどうかを検査する
			$is_article = Model_Info_Basis::is_article($method);
			// 作成されたまとめ かつ削除されたまとめか調べる
			$is_article_delete = Model_Info_Basis::is_article_delete($method);
			// 記事がある場合
			if($is_article) {
				return $this->action_index($method);
			}
				// エラー
				else {
					return $this->action_404($is_article_delete);
				}
		}
			// エラー
			else {
				$is_article_delete = false;
				return $this->action_404($is_article_delete);
			}
	}
	// 親のbefore実行
	public function before() {
		parent::before();
	}
	//----------
	//アクション
	//----------
	public function action_index($method) {
		// intに戻す
		$method = (int)$method;
		// ユーザー情報取得
		$user_data_array = Model_Info_Basis::user_data_get();
		// 変数をエンティティ化する
		$user_data_array = Library_Security_Basis::variable_security_entity($user_data_array);

		// 記事データ取得
		$article_res = Model_Article_Basis::article_get('article', $method);
		// 一番ややこしい場所なのでまたトラブルがあるかもしれないので監視をする 2015.08.25 松岡
		// アクセスDB追加 & all_page_view & pay_pv をプラス & アクセスサマリー書き込み
		Model_Article_Basis::article_access_writing_and_all_page_view_plus($method, $user_data_array, $article_res);


		// スマホ用サムネイルHTML生成
		$sp_thumbnail_html = Model_Article_Html::sp_thumbnail_html_create($article_res);

		// sp_thumbnailデータセット
		$this->article_template->view_data["sp_thumbnail"]->set('sp_thumbnail_data', array(
//			'sp_thumbnail_html' => $sp_thumbnail_html,
		), false);


		// 記事のメタ生成
		$meta_html          = Model_Article_Html::article_meta_html_create($article_data_array, 168);
		// 記事メタセット
		$this->article_template->view_data["meta"]->set('meta_data', array(
			'meta_html' => $meta_html,
		), false);


		// 記事のHTML生成
		$article_data_array = Model_Article_Html::article_html_create($article_res);
		// 記事タイトルセット
		$this->article_template->view_data["title"] = $article_data_array["article_title"];

		// 記事コンテンツセット
		$this->article_template->view_data["content"]->set('content_data', array(
			'article_html' => $article_data_array["article_html"],
		), false);


		// 年取得
		$year = $article_data_array['article_year_time'];
		// PhotoのHTML生成
		$photo_html = Model_Article_Html::photo_html_create($article_data_array, $year, false);
		// Photoセット
		$this->article_template->view_data['photo']->set('content_data', array(
			'photo_html' => $photo_html,
		), false);

	}
	//------------
	//エラーページ
	//------------
	public function action_404($is_article_delete) {
		if($is_article_delete) {
			$error_word = 'このまとめは作成者の操作により、または<a href="'.HTTP.'rule/rule/">利用規約</a>違反で運営から削除されました。<br><br><br><br><br><br><br>';
		}
			else {
				$error_word = 'エラーページ<br><br><br><br><br><br><br><br><br>';
			}
//		var_dump($this);
		// 404ステータスにする
	$this->response_status                                      = 404;
	$this->active_request->response->status                     = 404;
	$this->active_request->controller_instance->response_status = 404;
		// 記事メタセット
		$this->article_template->view_data["meta"]->set('meta_data', array(
			'meta_html' => '<meta name="robots" content="noindex">',
		), false);

		// sp_thumbnailデータセット
		$this->article_template->view_data["sp_thumbnail"]->set('sp_thumbnail_data', array(
			'sp_thumbnail_html' => '',
		), false);

		// 記事コンテンツセット
		$this->article_template->view_data["content"]->set('content_data', array(
			'article_html' => $error_word,
		), false);

		// サイドバーコンテンツセット
		$this->article_template->view_data["sidebar"] = '';
		// スクリプトコンテンツセット
		$this->article_template->view_data["script"] = '';

	}
}
