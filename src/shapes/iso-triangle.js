var drawIsoTriangle = function(p) {
    var ctx = p.ion.context;
       ctx.translate(p.x, p.y);
       ctx.moveTo(p.x, p.y);
       if(p.orient) {
          ctx.rotate(p.orient*Math.PI/180);
       }
       ctx.moveTo(p.x-p.size*0.5, p.y-p.size*0.5);
       ctx.beginPath();
       ctx.lineTo(p.size*0.5, p.size*0.5);
       ctx.lineTo(-p.size*0.5, p.size*0.5);
       ctx.lineTo(0, -p.size*0.5);
       ctx.closePath();
       ctx.fill();
       if(p.strokeWidth) {
        ctx.stroke();
       }
       
}