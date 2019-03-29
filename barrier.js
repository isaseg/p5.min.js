      function barrier() {
        this.x = w + 50;
        this.y = Math.floor(Math.random()*h*9/10);
        this.gravity = 0.5; //The force of gravity
        this.lift = -10; //opposing the force of gravity
        this.velocity = 0; //Starting velocity of jumper
        var size = Math.floor(Math.random()*200) + 100;
        
        this.show = function() {
          fill(255);
          rect(this.x, this.y, 50, size);
          if (this.x < 0) {
            size = Math.floor(Math.random()*200) + 100;
            this.x = w;
            this.y = Math.floor(Math.random()*h*9/10);
          }
        };
        
        this.update = function() {
          this.velocity = 15;
          this.x -= this.velocity;
          this.velocity *= 1;
          if (this.y > h) {
            this.y = h;
          }
          if (this.y < 0) {
            this.y = 0;
          }
        };
      }