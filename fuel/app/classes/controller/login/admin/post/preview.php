<?php
/**
 * プレビューコントローラー
 * 
 * 下書きをプレビューする機能
 * 
 * 
 */

class Controller_Login_Admin_Post_Preview extends Controller_Login_Admin_Post_preview_Template {
	public function action_index() {
		session_start();
		$method = (int)$_GET["p"];
		// ログインチェック
		$login_check = Model_Login_Basis::login_check();
		if($login_check == true) {
			// 下書き記事取得
			$preview_article_res = Model_Login_Post_Preview_Basis::preview_article_get($method);

			// 記事のHTML生成
			$article_data_array = Model_Article_Html::article_html_create($preview_article_res, 'article', true);	
			// 記事メタセット
			$this->article_template->view_data["meta"]->set('meta_data', array(
				'meta_html' => '<meta name="robots" content="noindex">',
			), false);
			// 記事タイトルセット
			$this->article_template->view_data["title"] = $article_data_array["article_title"];
			// 記事コンテンツセット
			$this->article_template->view_data["content"]->set('content_data', array(
				'article_html' => $article_data_array["article_html"],
			), false);	
		}
			// ログインしてなかったらトップに飛ぶ
			else {
				header('Location: '.HTTP.'');
				exit;
			}
	}
}