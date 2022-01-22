class Settings{
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
                url:"127.0.0.1:8000/settings/getinfo/",
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
                        console.log("not yet")
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

