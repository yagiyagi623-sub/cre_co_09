import p5 from "p5";

new p5((p: p5) => {
    // let img: p5.Image

    p.preload = () => {
        // p.loadImage(画像)
        // 画像を読み込む
        // img = p.loadImage("0.png");
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        // const x = (p.width - img.width) / 2;
        // const y = (p.height - img.height) / 2;

        // 実はこんなことをしなくても、p.imageMode(CENTER)で原点を中心にできる

        // p.image(Image, x座標, y座標, 幅, 高さ);
        // p.image(img, x, y);

        // p.noSmooth();
        // 画像の補間処理を無効にする

        // 画像から矩形領域sをとって、矩形領域dに描く
        // p.copy(Image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
})