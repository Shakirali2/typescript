let yourName = Math.random() > 0.6 ? "Shakir" : undefined;

if (yourName) {
    yourName.toLowerCase(); //ok string
}

yourName?.toUpperCase()