      function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 1; //The force of gravity
        this.lift = -25; //opposing the force of gravity
        this.velocity = 0; //Starting velocity of jumper
        
        this.show = function() {
          fill(255,0,0);
          rect(this.x, this.y, 50, 50);
        };
        
        this.up = function() {
          this.velocity += this.lift; //Jumping function
          this.velocity += this.gravity;
        };
        
        this.update = function() {
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.8;
          if (this.y > h-50) {
            this.y = h-50;
            this.velocity = 0;
          }
          if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
          }
          if (keyIsDown(37) && (this.x > 25)) {
            this.x -= 5;
          }
          if (keyIsDown(39) && (this.x < w-25)) {
            this.x += 5;
          }
        };
        
        this.left = function() {
          this.x -=5;
        }
        this.right = function() {
          this.x += 5;
        }
      }