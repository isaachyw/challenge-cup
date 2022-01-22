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
}class Settings{
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        this.start()
    }


    start(){
        this.getinfo();
    }
    getinfo(){
        let outer = this;
        $.ajax(
            {
                url:"http://127.0.0.1:8000/settings/getinfo/",
                type:"GET",
                data:{
                    platform:outer.platform
                },
                success:function (resp) {
                    console.log(resp);
                    if(resp.result==="success"){
                        outer.hide();
                        outer.root.menu.show()
                    }
                    else {
                        outer.login();
                        console.log("fail")
                    }
                }
            }
        )
    }
    register(){

    }
    login(){

    }
    hide(){

    }
    show(){

    }

}

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
class ShuyaPlat {
    constructor(id) {
        this.id = id;
        this.$shuya_plat = $('#' + id);
        this.settings = new Settings(this);
        this.menu = new ShuyaPlatMenu(this);
        this.mainpage = new ShuyaPlatMainPage(this);
        this.start();
    }

    start() {
    }
}