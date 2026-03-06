function ePaisagem(largura, altura) {
    if (largura <= 1920 && altura <= 1080) {
        return true;
    }  
    return false;
}

console.log(ePaisagem(1920, 1081));

const ePaisagem2 = (largura, altura) => largura <= 1920 && altura <= 1080 ? true : false;

console.log(ePaisagem2(1920, 1080));
