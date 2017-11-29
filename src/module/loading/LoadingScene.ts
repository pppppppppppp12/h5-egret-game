class LoadingScene extends eui.Component {
	public constructor() {
		super();
		this.skinName = 'LoadingSkin';
		// 初始化
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
	}

	private circle: eui.Image;
	private callback: Function;

	// 初始化时执行
	private addStage() {
		// loading 动画
		let tw = egret.Tween.get(this.circle, { loop: true });
		tw.to({ rotation: 360 }, 3000);
	}

	private loadGroups = [];
	private loadIndex;
	private loadLabel: eui.Label;

	public load(groups, callback?) {
		this.loadGroups = groups;
		this.loadIndex = 0;
		this.callback = callback;
		// 资源组加载进度事件
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.groupProgress, this);
		// 资源组加载完成事件
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.groupComplete, this);
		RES.loadGroup(this.loadGroups[this.loadIndex]);
	}

	// 资源组正在加载时执行
	private groupProgress(event: RES.ResourceEvent) {
		this.loadLabel.text = event.itemsLoaded + '/' + event.itemsTotal
	}

	// 资源组加载完成后执行
	private groupComplete(event: RES.ResourceEvent) { // 加载下一个资源组
		if(this.loadIndex >= this.loadGroups.length - 1) {
			// 全部资源组加载完成
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.groupProgress, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.groupComplete, this);
			if(this.callback) {
				this.callback();
			}
			return;
		}
		this.loadIndex ++;
		RES.loadGroup(this.loadGroups[this.loadIndex]);
	}
}