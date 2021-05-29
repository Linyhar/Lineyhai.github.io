var particle = document.getElementById("particle");
var particledata = [];
var particlelife = 300;
window.addEventListener("mousemove", function (evt){
    var newspan = document.createElement("span");
    newspan.className = "pixal";
    particle.appendChild(newspan);
    particledata.push({
        age: 0,
        color:"rgba("+
            parseInt(Math.random()*255)+","+
            parseInt(Math.random()*255)+","+
            parseInt(Math.random()*255)+","+
            parseInt(Math.random()*255)+")",
        vx:Math.random()*0.5,
        vy:Math.random()*0.75,
        sx:evt.x,
        sy:evt.y
    });
})

function draw() { //绘制粒子
    for (var i = 0; i < particledata.length; i++) {
        pixal = particledata[i] //指定当前粒子属性
        children = particle.children[i] //指定当前子元素
        pixal.age++ //增加生命值
        pixal.sx += pixal.vx * 2 //设置位移距离
        pixal.sy += pixal.vy * 2
        children.style.background = pixal.color //设置背景颜色
        children.style.left = pixal.sx + "px" //根据位移值设置坐标
        children.style.top = pixal.sy + "px"
        if (pixal.age >= particlelife) { //判断生命值是否超过生命周期
            particledata.splice(i, 1) //删除数组元素
            particle.removeChild(particle.childNodes[i]) //删除子元素
        }
    }
}
setInterval(draw,1)