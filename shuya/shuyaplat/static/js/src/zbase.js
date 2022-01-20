class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.mainpage = new AcGameMainPage(this);

        this.start();
    }

    start() {
    }
}