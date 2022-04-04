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

class ShuyaPlatMenu{
    constructor(root) {
        this.root = root ;
        this.$menu = $(`
    <div class="shuya-plat-menu">
    <div class="shuya-plat-menu-field">
        <div class="shuya-plat-menu-field-item shuya-plat-menu-field-item-chat">
            编辑个人信息
        </div>
        <br>
        <div class="shuya-plat-menu-field-item shuya-plat-menu-field-item-video">
            视频
        </div>
        <br>
        <div class="shuya-plat-menu-field-item shuya-plat-menu-field-item-settings">
            退出
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
            outer.root.settings.logout_on_remote();
        });
    }

    show() {  // 显示menu界面
        this.$menu.show();
    }

    hide() {  // 关闭menu界面
        this.$menu.hide();
    }
}

class Settings{
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        this.username = ""

        this.$settings = $(`
<div class="shuya-plat-settings">
    <form class="shuya-plat-settings-register">
        <div class="shuya-plat-settings-title">
            注册
        </div>
        <div class="shuya-plat-settings-username">
            <div class="shuya-plat-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="shuya-plat-settings-password shuya-plat-settings-password-first">
            <div class="shuya-plat-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>
        <div class="shuya-plat-settings-password shuya-plat-settings-password-second">
            <div class="shuya-plat-settings-item">
                <input type="password" placeholder="确认密码">
            </div>
        </div>
        <div class="shuya-plat-settings-submit">
            <div class="shuya-plat-settings-item">
                <button>注册</button>
            </div>
        </div>
        <div class="shuya-plat-settings-error-message">
        </div>
        <div class="shuya-plat-settings-option">
            登录
        </div>
        <br>
        <div class="shuya-plat-settings-acwing">
            <img width="30" src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7acb0a46f21fbe096ec2c53866600c338744ad79.jpg">
            <br>
            <div>
                AcWing一键登录
            </div>
        </div>
    </form>
</div>
`);

        this.$login = this.$settings.find(".shuya-plat-settings-login");
        this.$login_username = this.$login.find(".shuya-plat-settings-username input");
        this.$login_password = this.$login.find(".shuya-plat-settings-password input");
        this.$login_submit = this.$login.find(".shuya-plat-settings-submit button");
        this.$login_error_message = this.$login.find(".shuya-plat-settings-error-message");
        this.$login_register = this.$login.find(".shuya-plat-settings-option");

        this.$login.hide();

        this.$register = this.$settings.find(".shuya-plat-settings-register");
        this.$register_username = this.$register.find(".shuya-plat-settings-username input");
        this.$register_password = this.$register.find(".shuya-plat-settings-password-first input");
        this.$register_password_confirm = this.$register.find(".shuya-plat-settings-password-second input");
        this.$register_submit = this.$register.find(".shuya-plat-settings-submit button");
        this.$register_error_message = this.$register.find(".shuya-plat-settings-error-message");
        this.$register_login = this.$register.find(".shuya-plat-settings-option");

        this.$register.hide();

        this.root.$shuya_plat.append(this.$settings);

        this.start()
    }


    start() {
        this.getinfo();
        this.add_listening_events();//打开监听
    }

    add_listening_events() {// 监听登录和注册的时间
        //this.add_listening_events_login();
        //this.add_listening_events_register();
    }

    add_listening_events_login() {
        let outer = this;

        this.$login_register.click(function() {
            outer.register();
        });
        this.$login_submit.click(function() {
            outer.login_on_remote();
        });
    }

    add_listening_events_register() {
        let outer = this;
        this.$register_login.click(function() {
            outer.login();
        });
        this.$register_submit.click(function() {
            outer.register_on_remote();
        });
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
                        outer.username=resp.username
                        outer.hide();
                        outer.root.menu.show()
                    }
                    else {
                        outer.login();
                        console.log("not yet")
                    }
                }
            }
        )
    }
    register(){//打开注册界面
        this.$login.hide();
        this.$register.show();
    }
    login(){//打开登录界面
        this.$register.hide();
        this.$login.show();
    }
    hide(){
        this.$settings.hide();
    }
    show(){
        this.$settings.show();
    }
//    login_on_remote() {  // 在远程服务器上登录
//        let outer = this;
//        let username = this.$login_username.val();// 取出input的值
//        let password = this.$login_password.val();
//        this.$login_error_message.empty();
//
//        $.ajax({
//            url: "http://127.0.0.1:8000/settings/login/", //对该页面发送请求
//            type: "POST",
//            data: {
//                username: username,
//                password: password,
//            },
//            success: function(resp) {
//                console.log(resp);
//                if (resp.result === "success") {
//                    location.reload();
//                } else {
//                    outer.$login_error_message.html(resp.result);
//                }
//            }
//        });
//    }

    logout_on_remote() {  // 在远程服务器上登出
        $.ajax({
            url: "http://127.0.0.1:8000/settings/logout/",
            type: "GET",
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    location.reload();
                }
            }
        });
    }
    register_on_remote() {  // 在远程服务器上注册
        let outer = this;
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password_confirm = this.$register_password_confirm.val();
        this.$register_error_message.empty();

        $.ajax({
            url: "http://127.0.0.1:8000/settings/register/",
            type: "GET",
            data: {
                username: username,
                password: password,
                password_confirm: password_confirm,
            },
            success: function(resp) {
                console.log(resp);
                if (resp.result === "success") {
                    location.reload();  // 刷新页面
                } else {
                    outer.$register_error_message.html(resp.result);
                }
            }
        });
    }
}

class ShuyaPlat {
    constructor(id) {
        this.id = id;
        this.$shuya_plat = $('#' + id);
        this.settings = new Settings(this);
        //this.menu = new ShuyaPlatMenu(this);
        //this.mainpage = new ShuyaPlatMainPage(this);
        this.start();
    }
    start() {
    }
}