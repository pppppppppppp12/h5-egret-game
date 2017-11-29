class IndexScene extends eui.Component {
	public constructor() {
		super();
		this.skinName = 'IndexSkin';
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
	}

	private btnGroup = [];
	private btnGroupPos = [];
	private indexContainer: eui.Group;

	private selectBtn: LevelBtn; // 当前点击的按钮

	private addStage() {
		this.btnGroupPos = [
			{ x: 285, y: 160 },
			{ x: 403, y: 337 },
			{ x: 213, y: 463 },
			{ x: 387, y: 640 },
			{ x: 230, y: 777 },
			{ x: 358, y: 984 },
			{ x: 230, y: 1210 },
			{ x: 358, y: 1404 },
			{ x: 258, y: 1642 },
			{ x: 420, y: 1826 },
			{ x: 180, y: 1950 },
		]
		// 添加按钮
		this.btnGroupPos.forEach((val, key) => {
			let btn = new LevelBtn();
			btn.levelNum = key + 1;
			btn.x = val.x;
			btn.y = val.y;
			this.indexContainer.addChild(btn);
			btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouch_begin, this);
			btn.addEventListener(egret.TouchEvent.TOUCH_END, this.ontouch_end, this);
			btn.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.ontouch_end, this);
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch_tap, this)
		})
	}

	private ontouch_begin(event: egret.TouchEvent) {
		event.currentTarget.getChildAt(0).alpha = 0.9; // event.currentTarget 为触摸点，event.currentTarget.getChildAt(0) 为按钮
	}

	private ontouch_end(event: egret.TouchEvent) {
		event.currentTarget.getChildAt(0).alpha = 1;
	}

	private ontouch_tap(event: egret.TouchEvent) {
		let levelNum = event.currentTarget.levelNum;
		if(levelNum == 1) {
			SceneManager.gotoGame(levelNum);
		}
	}

}