class ShuyaPlatMenu{
    constructor(root) {
        this.root = root ;
        this.$menu = $(`
    <div class="shuya-plat-menu">
    <div class="shuya-plat-menu-field">
        <div class="shuya-plat-menu-field-item shuya-plat-menu-field-item-chat">
            交流
        </div>
        <br>
        <div class="shuya-plat-menu-field-item shuya-plat-menu-field-item-video">
            视频
        </div>
        <br>
        <div class="shuya-plat-menu-field-item shuya-plat-menu-field-item-settings">
            设置（修改信息）
        </div>
    </div>
</div>     
        `);
        this.$menu.hide();
        this.root.$shuya_plat.append(this.$menu);
        this.$chat = this.$menu.find('.shuya-plat-menu-field-item-chat');
        this.$video = this.$menu.find('.shuya-plat-menu-field-item-video');
        this.$settings = this.$menu.find('.shuya-plat-menu-field-item-settings');

        this.start();
    }
        start(){
            this.add_listening_events();
        }

        add_listening_events() {
        let outer = this;
        this.$chat.click(function(){
            outer.hide();
            outer.root.mainpage.show();
        });
        this.$video.click(function(){
            console.log("click video");
        });
        this.$settings.click(function(){
            console.log("click settings");
        });
    }

    show() {  // 显示menu界面
        this.$menu.show();
    }

    hide() {  // 关闭menu界面
        this.$menu.hide();
    }
}