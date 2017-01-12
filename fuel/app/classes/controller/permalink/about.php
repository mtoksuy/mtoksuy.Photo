<?php
/*
* アバウトコントローラー
* 
* 
* 
* 
*/

class Controller_Permalink_About extends Controller_Permalink_Template {
	// 親のbefore実行
	public function before() {
		parent::before();
	}
	//----------
	//アクション
	//----------
	public function action_index() {
		// タイトルセット
		$this->permalink_template->view_data["title"] = 'アバウト | '.TITLE;
		// CSSセット
		$this->permalink_template->view_data["external_css"] = View::forge('permalink/about/externalcss');



		// コンテンツデータセット
		$this->permalink_template->view_data["content"]->set('content_data', array(
			'content_html' => View::forge('permalink/about'),
		), false);























































































































	}
	//------------
	//エラーページ
	//------------
	public function action_404() {
		// 404ステータスにする
	$this->response_status                                      = 404;
	$this->active_request->response->status                     = 404;
	$this->active_request->controller_instance->response_status = 404;
		// 記事メタセット
		$this->permalink_template->view_data["meta"]->set('meta_data', array(
			'meta_html' => '<meta name="robots" content="noindex">',
		), false);

		// sp_thumbnailデータセット
		$this->permalink_template->view_data["sp_thumbnail"]->set('sp_thumbnail_data', array(
			'sp_thumbnail_html' => '',
		), false);

		// 記事コンテンツセット
		$this->permalink_template->view_data["content"]->set('content_data', array(
			'content_html' => 'エラーページ<br><br><br><br><br><br><br><br><br>',
		), false);

		// サイドバーコンテンツセット
		$this->permalink_template->view_data["sidebar"] = '';
		// スクリプトコンテンツセット
		$this->permalink_template->view_data["script"] = '';

	}
}
