const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const pastaImagens = path.join(__dirname, "..", "imagens");

const imagens = fs.readdirSync(pastaImagens)
    .filter(arquivo => /\.(jpg|jpeg|png)$/i.test(arquivo));

async function otimizarImagens() {
    for (const imagem of imagens) {
        const caminhoOriginal = path.join(pastaImagens, imagem);
        const nome = path.parse(imagem).name;
        const caminhoWebP = path.join(pastaImagens, `${nome}.webp`);

        await sharp(caminhoOriginal)
            .webp({ quality: 80 })
            .toFile(caminhoWebP);

        console.log(`${imagem} -> ${nome}.webp`);
    }

    console.log("Imagens otimizadas com sucesso!");
}

otimizarImagens();