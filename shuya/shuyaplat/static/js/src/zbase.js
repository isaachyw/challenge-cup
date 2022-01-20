class ShuyaPlat {
    constructor(id) {
        this.id = id;
        this.$shuya_plat = $('#' + id);
        this.menu = new ShuyaPlatMenu(this);
        this.mainpage = new ShuyaPlatMainPage(this);

        this.start();
    }

    start() {
    }
}