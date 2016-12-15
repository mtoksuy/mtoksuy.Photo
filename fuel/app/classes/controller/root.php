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


$photo_list_html = '

<div class="card_photo">
	<div class="card_photo_content">
		<div class="card_photo_header">
			<span class="typcn typcn typcn-bookmark"></span>
			<span>Photo Collection</span>
		</div>
		<ul class="clearfix">

			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0051.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0051.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>


			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0084.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0084.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>






			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0057.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0057.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>



			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0067.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0067.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>



			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0070.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0070.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>



			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0083.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0083.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>



			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0106.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0106.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>



			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0121.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0121.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>




			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0126.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0126.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>




			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0131.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0131.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>




			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0138.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0138.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>




			<li class="o_8">
				<article>
					<a href="http://localhost/mtoksuy/assets/img/photo/DSCF0167.jpg" class="clearfix">
						<figure>
							<img class="" src="http://localhost/mtoksuy/assets/img/photo/DSCF0167.jpg" title="" alt="" height="200" width="200">
							<figcaption>挿絵の例</figcaption>
						</figure>
					</a>
				</article>
			</li>


		</ul>
	</div>
</div>


';


		// コンテンツデータセット
		$this->basic_template->view_data["content"]->set('content_data', array(
			'content_html' => $photo_list_html,
		), false);
	}
}
