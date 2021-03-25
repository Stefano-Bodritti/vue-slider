var app = new Vue(
  {
    el: "#app",
    data: {
      images: [
        "https://www.100torri.it/newsite/wp-content/uploads/2017/06/chieri-centro.jpg",
        "http://files.spazioweb.it/aruba101855/image/chieripanorama1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Chieri_duomo.jpg"
      ],
      imageIndex: 0
    },
    methods: {
      imageRight: function() {
        this.imageIndex++;
        if (this.imageIndex >= this.images.length) {
          this.imageIndex = 0;
        }
      },
      imageLeft: function() {
        this.imageIndex--;
        if (this.imageIndex < 0) {
          this.imageIndex = this.images.length - 1;
        }
      },
      bulletClick: function(index) {
        this.imageIndex = index;
      }
    }
  }
);
