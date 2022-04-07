const initializer = {
   Extends: Phaser.Scene,
   initialize:function boot (){
      Phaser.Scene.call(this, { key: 'boot', active: true });
   },
   preload: function preload() {   },
   create: function(){
      this.scene.start('preloadScene')
   }
}

var boot = new Phaser.Class(initializer);
export default boot;