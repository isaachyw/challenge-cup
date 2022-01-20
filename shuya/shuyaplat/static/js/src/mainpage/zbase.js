class ShuyaPlatMainPage {
    constructor(root) {
        this.root = root;
        this.$mainpage = $(`<div>这里是聊天界面</div>`);

        this.hide();
        this.root.$shuya_plat.append(this.$mainpage);

        this.start();
    }

    start() {
    }

    show() {  // 打开playground界面
        this.$mainpage.show();
    }

    hide() {  // 关闭playground界面
        this.$mainpage.hide();
    }
}