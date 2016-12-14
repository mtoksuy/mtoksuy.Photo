<?php
/**




**/
class Controller_Root extends Controller {
	public function action_index() {
		return 'テスト';

//		return Response::forge(View::forge('welcome/index'));
	}
}
