<!doctype html>
<html>
    <head>
        <title>test</title>
    </head>
    <body>
        <canvas id="myCanvas" width="200" height="100" style="border:1px solid #123456;"></canvas>

        <script>
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.beginPath();
            ctx.arc(95,50,40,0,2*Math.PI);
            ctx.stroke();
            //ctx.moveTo(0,0);
            //ctx.lineTo(200,100);
            //ctx.stroke();

            //ctx.fillStyle="#FF0000";
            //ctx.fillRect(0,0,150,75);
        </script>
    </body>
</html>
