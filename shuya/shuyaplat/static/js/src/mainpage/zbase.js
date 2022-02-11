class ShuyaPlatMainPage {
    constructor(root) {
        this.root = root;
        this.$mainpage = $(`
<!--姓名，微信号，QQ号，手机号,省份，教育-->
<div class="shuya-plat-edit">
        <div class="shuya-plat-edit-title">
            登记用户信息
        </div>
        <div class="shuya-plat-edit-name">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="姓名">
            </div>
        </div>
        <div class="shuya-plat-edit-wechat">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="微信号">
            </div>
        </div>
        <div class="shuya-plat-edit-qq">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="qq号">
            </div>
        </div>
        <div class="shuya-plat-edit-phone">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="手机号">
            </div>
        </div>
        <div class="shuya-plat-edit-place">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="所在省份">
            </div>
        </div>
        <div class="shuya-plat-edit-education">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="教育程度">
            </div>
        </div>
        <div class="shuya-plat-edit-option">
            保存
        </div>
        <br>
    </div>
`);
        this.$edit_name = this.$mainpage.find("shuya-plat-edit-name input");
        this.$edit_wechat = this.$mainpage.find("shuya-plat-edit-wechat input");
        this.$edit_qq = this.$mainpage.find("shuya-plat-edit-qq input");
        this.$edit_phone = this.$mainpage.find("shuya-plat-edit-phone input");
        this.$edit_place = this.$mainpage.find("shuya-plat-edit-place input");
        this.$edit_education = this.$mainpage.find("shuya-plat-edit-education input");
        // this.$login_submit = this.$login.find(".shuya-plat-settings-submit button");
        // this.$login_error_message = this.$login.find(".shuya-plat-settings-error-message");
        // this.$login_register = this.$login.find(".shuya-plat-settings-option");

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