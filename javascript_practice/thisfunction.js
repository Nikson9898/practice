    const channel={
        title:"cyberdude",
        video_title:"javascript",
        languages:[tamil,malayalam,telungu],
        subscribe(){
            console.log(this);
          },
    showvideos(){
        this.languages.forEach(function (Lang){
            console.log(this.video_title + "-" + Lang.toUpperCase());
        }, this);
    },
};

channel.showvideos();