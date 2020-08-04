var ctx;

/**绘制网格总函数
 * 分别绘制
 * drawSmallGrid小网格
 * drawMediumGrid中网格
 * drawBigGrid大网格
 */
function drawgrid() {
    var c_canvas = document.getElementById("grids");
    //drawSmallGrid(c_canvas);
    drawMediumGrid(c_canvas);
    //drawBigGrid(c_canvas);
    return;
}

// /**绘制小网格
//  * 第一个for语句循环出纵向小方格细线条，间距为X轴方向3像素
//  * 第二个for语句循环出横向小方格细线条，间距为Y轴方向3像素
//  */
// function drawSmallGrid(c_canvas) {
//     ctx = c_canvas.getContext("2d");
//     ctx.strokeStyle = "#f1dedf";
//     ctx.strokeWidth = 1;
//     ctx.beginPath();
//     for (var x = 0.5; x < 750; x += 3) {
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, 750);
//         ctx.stroke();
//     }
//     for (var y = 0.5; y < 750; y += 3) {
//         ctx.moveTo(0, y);
//         ctx.lineTo(750, y);
//         ctx.stroke();
//     }
//     ctx.closePath();
//     return;
// }

/**绘制中型网格
 * 第一个for语句循环出纵向中方格中线条，间距为X轴方向15像素，小网格的5倍
 * 第二个for语句循环出横向中方格中线条，间距为Y轴方向15像素，小网格的5倍
 */
function drawMediumGrid(c_canvas) {
    ctx = c_canvas.getContext("2d");
    ctx.strokeStyle = "#add8e6";
    ctx.strokeWidth = 2;
    //宽度是小网格的2倍
    ctx.beginPath();
    for (var x = 0.5; x < 1350; x += 15) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 750);
        ctx.stroke();
    }
    for (var y = 0.5; y < 750; y += 15) {
        ctx.moveTo(0, y);
        ctx.lineTo(1750, y);
        ctx.stroke();
    }
    ctx.closePath();
    return;
}

// /**绘制大型网格
// * 第一个for语句循环出纵向大方格中线条，间距为X轴方向75像素，小网格的5倍
// * 第二个for语句循环出横向大方格中线条，间距为Y轴方向75像素，小网格的5倍
// */
// function drawBigGrid(c_canvas) {
//     ctx = c_canvas.getContext("2d");
//     ctx.strokeStyle = "#e0514b";
//     ctx.strokeWidth = 3;
//     ctx.beginPath();
//     for (var x = 0.5; x < 750; x += 75) {
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, 750);
//         ctx.stroke();
//     }
//     for (var y = 0.5; y < 750; y += 75) {
//         ctx.moveTo(0, y);
//         ctx.lineTo(750, y);
//         ctx.stroke();
//     }
//     ctx.closePath();
//     return;
// }

drawgrid();