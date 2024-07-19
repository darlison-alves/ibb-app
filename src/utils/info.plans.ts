export const getInfo = (tag: any) => {
    switch (tag) {
        case "PROTECAO_COMPACTA":
            return infos.PROTECAO_COMPACTA;
        case "PROTECAO_ESPECIAL":
            return infos.PROTECAO_ESPECIAL;

        case "PROTECAO_ESSENCIAL":
            return infos.PROTECAO_ESSENCIAL;
        case "PROTECAO_FAMILIAR_GOLD":
            return infos.PROTECAO_FAMILIAR_GOLD;
        case "PROTECAO_FAMILIAR_PREMIUM":
            return infos.PROTECAO_FAMILIAR_PREMIUM;
        default:
            return []
    }
}

export const infos = {
    PROTECAO_COMPACTA: [
        {
            title: "Seguro de Vida Causas Naturais",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 10.000,00 em caso de falecimento por causas naturais do associado.",
            has: true
        },

        {
            title: "Seguro de Vida Causas Acidentais",
            description: "A cobertura garante que a família do associado, irá a receber um valor de R$ 20.000,00 sendo assim a soma das duas coberturas R$ 10.000,00 do Seguro por morte natural e o valor de R$ 10.000,00 do Seguro por morte acidental garantindo que seja o dobro do valor do Seguro por morte natural.",
            has: false
        },
        {
            title: "Invalidez Total por Acidente",
            description: "Cobertura que garante que o associado, irá receber um valor de R$ 10.000,00 em caso de invalidez total por acidente.",
            has: false
        },
        {
            title: "Assistência Funeral Familiar",
            description: "Cobertura que garante, que caso o associado ou algum de seus beneficiários (filhos até 21 anos e cônjuge) venham a falecer, tenham direito a reembolso ou contratação do valor referente ao processo funeral de R$ 5.000,00 por pessoa.",
            has: false
        },
        {
            title: "Auxílio Alimentação",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 600,00 por mês, durante um ano, no caso de falecimento do associado.",
            has: true
        },
        {
            title: "Assistência 24h (Auto e Residencial)",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },

        {
            title: "Médico na Tela para Família",
            description: "A IBB Life oferece serviços de Assistência Pessoal e Residencial aos segurados, como envio de chaveiro, eletricista, limpeza, serviços domésticos provisórios, segurança e vigilância, baby-sitter, transporte escolar, remoção médica, Segunda Opinião Médica Internacional, Apoio Psicológico Pós luto, Assistência Nutricional e Personal Fitness.",
            has: true
        },
        {
            title: "Assistência Pessoal",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },
        {
            title: "Descontos em Medicamentos",
            description: "O associado tem direito a descontos Exclusivos em uma lista de medicamentos referenciados, em farmácias de redes credenciadas.",
            has: true
        },
        {
            title: "Sorteios Mensais",
            description: "",
            has: false
        },
        {
            title: "Total Pass",
            description: "",
            has: false
        },
        {
            title: "Programa de tira dúvidas financeiras",
            description: "O associado tem direito a um suporte tira dúvidas, com o auxílio de uma equipe especializada para ajudá-lo a se organizar financeiramente.",
            has: true
        },
        {
            title: "Programa de Renda Extra",
            description: "Conquiste sua liberdade financeira. O associado tem direito de participar do programa de indicação remunerada da IBB, podendo ter ganhos mensais e ganhos recorrentes com suas indicações que contratem o plano através deles.",
            has: true
        },
        {
            title: "Plataforma de Controle de Ganhos",
            description: "O Associado tem direito a uma plataforma exclusiva, para acompanhar seus ganhos, seus indicados e todos os gastos feitos na plataforma da IBB.",
            has: true
        },
        {
            title: "Clube de Benefícios (Em Breve)",
            description: "O associado IBB tem direito a participar do clube de benefícios IBB, onde pode comprar produtos e serviços de empresas parcerias da IBB, com descontos exclusivos.",
            has: true
        },
        {
            title: "Cash Back (Em Breve)",
            description: "O associado IBB participa de um programa de acúmulo de pontos digitais, que poderão ser utilizados nas compras feitas no clube de benefícios IBB.",
            has: true
        },
        {
            title: "Marketplace (Em Breve)",
            description: "Os associados podem indicar produtos e serviços de lojas parcerias, para terceiros, com descontos exclusivos para estes e serem comissionados por isso.",
            has: true
        },
    ],
    PROTECAO_ESPECIAL: [
        {
            title: "Seguro de Vida Causas Naturais",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 10.000,00 em caso de falecimento por causas naturais do associado.",
            has: true
        },

        {
            title: "Seguro de Vida Causas Acidentais",
            description: "A cobertura garante que a família do associado, irá a receber um valor de R$ 20.000,00 sendo assim a soma das duas coberturas R$ 10.000,00 do Seguro por morte natural e o valor de R$ 10.000,00 do Seguro por morte acidental garantindo que seja o dobro do valor do Seguro por morte natural.",
            has: true
        },
        {
            title: "Invalidez Total por Acidente",
            description: "Cobertura que garante que o associado, irá receber um valor de R$ 10.000,00 em caso de invalidez total por acidente.",
            has: true
        },
        {
            title: "Assistência Funeral Familiar",
            description: "Cobertura que garante, que caso o associado ou algum de seus beneficiários (filhos até 21 anos e cônjuge) venham a falecer, tenham direito a reembolso ou contratação do valor referente ao processo funeral de R$ 5.000,00 por pessoa.",
            has: true
        },
        {
            title: "Auxílio Alimentação",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 600,00 por mês, durante um ano, no caso de falecimento do associado.",
            has: true
        },
        {
            title: "Assistência 24h (Auto e Residencial)",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },

        {
            title: "Médico na Tela para Família",
            description: "A IBB Life oferece serviços de Assistência Pessoal e Residencial aos segurados, como envio de chaveiro, eletricista, limpeza, serviços domésticos provisórios, segurança e vigilância, baby-sitter, transporte escolar, remoção médica, Segunda Opinião Médica Internacional, Apoio Psicológico Pós luto, Assistência Nutricional e Personal Fitness.",
            has: true
        },
        {
            title: "Assistência Pessoal",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },
        {
            title: "Descontos em Medicamentos",
            description: "O associado tem direito a descontos Exclusivos em uma lista de medicamentos referenciados, em farmácias de redes credenciadas.",
            has: true
        },
        {
            title: "Sorteios Mensais",
            description: "O Associado participa de sorteios mensais no valor de R$20.000,00, todos os meses.",
            has: false
        },
        {
            title: "Total Pass",
            description: "A TOTAL PASS é um programa exclusivo de academias que oferece acesso a + 8.000 academias e + 250 modalidades. E agora, como associado da IBB Life, você pode aproveitar esse benefício exclusivo que só a IBB dá para você e +1 indicado no plano Proteção Familiar Gold",
            has: false
        },
        {
            title: "Programa de tira dúvidas financeiras",
            description: "O associado tem direito a um suporte tira dúvidas, com o auxílio de uma equipe especializada para ajudá-lo a se organizar financeiramente.",
            has: true
        },
        {
            title: "Programa de Renda Extra",
            description: "Conquiste sua liberdade financeira. O associado tem direito de participar do programa de indicação remunerada da IBB, podendo ter ganhos mensais e ganhos recorrentes com suas indicações que contratem o plano através deles.",
            has: true
        },
        {
            title: "Plataforma de Controle de Ganhos",
            description: "O Associado tem direito a uma plataforma exclusiva, para acompanhar seus ganhos, seus indicados e todos os gastos feitos na plataforma da IBB.",
            has: true
        },
        {
            title: "Clube de Benefícios (Em Breve)",
            description: "O associado IBB tem direito a participar do clube de benefícios IBB, onde pode comprar produtos e serviços de empresas parcerias da IBB, com descontos exclusivos.",
            has: true
        },
        {
            title: "Cash Back (Em Breve)",
            description: "O associado IBB participa de um programa de acúmulo de pontos digitais, que poderão ser utilizados nas compras feitas no clube de benefícios IBB.",
            has: true
        },
        {
            title: "Marketplace (Em Breve)",
            description: "Os associados podem indicar produtos e serviços de lojas parcerias, para terceiros, com descontos exclusivos para estes e serem comissionados por isso.",
            has: true
        },
    ],
    PROTECAO_ESSENCIAL: [
        {
            title: "Seguro de Vida Causas Naturais",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 10.000,00 em caso de falecimento por causas naturais do associado.",
            has: true
        },

        {
            title: "Seguro de Vida Causas Acidentais",
            description: "A cobertura garante que a família do associado, irá a receber um valor de R$ 20.000,00 sendo assim a soma das duas coberturas R$ 10.000,00 do Seguro por morte natural e o valor de R$ 10.000,00 do Seguro por morte acidental garantindo que seja o dobro do valor do Seguro por morte natural.",
            has: true
        },
        {
            title: "Invalidez Total por Acidente",
            description: "Cobertura que garante que o associado, irá receber um valor de R$ 10.000,00 em caso de invalidez total por acidente.",
            has: true
        },
        {
            title: "Assistência Funeral Familiar",
            description: "Cobertura que garante, que caso o associado ou algum de seus beneficiários (filhos até 21 anos e cônjuge) venham a falecer, tenham direito a reembolso ou contratação do valor referente ao processo funeral de R$ 5.000,00 por pessoa.",
            has: true
        },
        {
            title: "Auxílio Alimentação",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 600,00 por mês, durante um ano, no caso de falecimento do associado.",
            has: true
        },
        {
            title: "Assistência 24h (Auto e Residencial)",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },

        {
            title: "Médico na Tela para Família",
            description: "A IBB Life oferece serviços de Assistência Pessoal e Residencial aos segurados, como envio de chaveiro, eletricista, limpeza, serviços domésticos provisórios, segurança e vigilância, baby-sitter, transporte escolar, remoção médica, Segunda Opinião Médica Internacional, Apoio Psicológico Pós luto, Assistência Nutricional e Personal Fitness.",
            has: true
        },
        {
            title: "Assistência Pessoal",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },
        {
            title: "Descontos em Medicamentos",
            description: "O associado tem direito a descontos Exclusivos em uma lista de medicamentos referenciados, em farmácias de redes credenciadas.",
            has: true
        },
        {
            title: "Sorteios Mensais",
            description: "O Associado participa de sorteios mensais no valor de R$20.000,00, todos os meses.",
            has: false
        },
        {
            title: "Total Pass",
            description: "A TOTAL PASS é um programa exclusivo de academias que oferece acesso a + 8.000 academias e + 250 modalidades. E agora, como associado da IBB Life, você pode aproveitar esse benefício exclusivo que só a IBB dá para você e +1 indicado no plano Proteção Familiar Gold",
            has: true
        },
        {
            title: "Programa de tira dúvidas financeiras",
            description: "O associado tem direito a um suporte tira dúvidas, com o auxílio de uma equipe especializada para ajudá-lo a se organizar financeiramente.",
            has: true
        },
        {
            title: "Programa de Renda Extra",
            description: "Conquiste sua liberdade financeira. O associado tem direito de participar do programa de indicação remunerada da IBB, podendo ter ganhos mensais e ganhos recorrentes com suas indicações que contratem o plano através deles.",
            has: true
        },
        {
            title: "Plataforma de Controle de Ganhos",
            description: "O Associado tem direito a uma plataforma exclusiva, para acompanhar seus ganhos, seus indicados e todos os gastos feitos na plataforma da IBB.",
            has: true
        },
        {
            title: "Clube de Benefícios (Em Breve)",
            description: "O associado IBB tem direito a participar do clube de benefícios IBB, onde pode comprar produtos e serviços de empresas parcerias da IBB, com descontos exclusivos.",
            has: true
        },
        {
            title: "Cash Back (Em Breve)",
            description: "O associado IBB participa de um programa de acúmulo de pontos digitais, que poderão ser utilizados nas compras feitas no clube de benefícios IBB.",
            has: true
        },
        {
            title: "Marketplace (Em Breve)",
            description: "Os associados podem indicar produtos e serviços de lojas parcerias, para terceiros, com descontos exclusivos para estes e serem comissionados por isso.",
            has: true
        },
    ],
    PROTECAO_FAMILIAR_GOLD: [
        {
            title: "Seguro de Vida Causas Naturais",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 10.000,00 em caso de falecimento por causas naturais do associado.",
            has: true
        },

        {
            title: "Seguro de Vida Causas Acidentais",
            description: "A cobertura garante que a família do associado, irá a receber um valor de R$ 20.000,00 sendo assim a soma das duas coberturas R$ 10.000,00 do Seguro por morte natural e o valor de R$ 10.000,00 do Seguro por morte acidental garantindo que seja o dobro do valor do Seguro por morte natural.",
            has: true
        },
        {
            title: "Invalidez Total por Acidente",
            description: "Cobertura que garante que o associado, irá receber um valor de R$ 10.000,00 em caso de invalidez total por acidente.",
            has: true
        },
        {
            title: "Assistência Funeral Familiar",
            description: "Cobertura que garante, que caso o associado ou algum de seus beneficiários (filhos até 21 anos e cônjuge) venham a falecer, tenham direito a reembolso ou contratação do valor referente ao processo funeral de R$ 5.000,00 por pessoa.",
            has: true
        },
        {
            title: "Auxílio Alimentação",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 600,00 por mês, durante um ano, no caso de falecimento do associado.",
            has: true
        },
        {
            title: "Assistência 24h (Auto e Residencial)",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },

        {
            title: "Médico na Tela para Família",
            description: "A IBB Life oferece serviços de Assistência Pessoal e Residencial aos segurados, como envio de chaveiro, eletricista, limpeza, serviços domésticos provisórios, segurança e vigilância, baby-sitter, transporte escolar, remoção médica, Segunda Opinião Médica Internacional, Apoio Psicológico Pós luto, Assistência Nutricional e Personal Fitness.",
            has: true
        },
        {
            title: "Assistência Pessoal",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },
        {
            title: "Descontos em Medicamentos",
            description: "O associado tem direito a descontos Exclusivos em uma lista de medicamentos referenciados, em farmácias de redes credenciadas.",
            has: true
        },
        {
            title: "Sorteios Mensais",
            description: "O Associado participa de sorteios mensais no valor de R$20.000,00, todos os meses.",
            has: true
        },
        {
            title: "Total Pass",
            description: "A TOTAL PASS é um programa exclusivo de academias que oferece acesso a + 8.000 academias e + 250 modalidades. E agora, como associado da IBB Life, você pode aproveitar esse benefício exclusivo que só a IBB dá para você e +1 indicado no plano Proteção Familiar Gold",
            has: true
        },
        {
            title: "Programa de tira dúvidas financeiras",
            description: "O associado tem direito a um suporte tira dúvidas, com o auxílio de uma equipe especializada para ajudá-lo a se organizar financeiramente.",
            has: true
        },
        {
            title: "Programa de Renda Extra",
            description: "Conquiste sua liberdade financeira. O associado tem direito de participar do programa de indicação remunerada da IBB, podendo ter ganhos mensais e ganhos recorrentes com suas indicações que contratem o plano através deles.",
            has: true
        },
        {
            title: "Plataforma de Controle de Ganhos",
            description: "O Associado tem direito a uma plataforma exclusiva, para acompanhar seus ganhos, seus indicados e todos os gastos feitos na plataforma da IBB.",
            has: true
        },
        {
            title: "Clube de Benefícios (Em Breve)",
            description: "O associado IBB tem direito a participar do clube de benefícios IBB, onde pode comprar produtos e serviços de empresas parcerias da IBB, com descontos exclusivos.",
            has: true
        },
        {
            title: "Cash Back (Em Breve)",
            description: "O associado IBB participa de um programa de acúmulo de pontos digitais, que poderão ser utilizados nas compras feitas no clube de benefícios IBB.",
            has: true
        },
        {
            title: "Marketplace (Em Breve)",
            description: "Os associados podem indicar produtos e serviços de lojas parcerias, para terceiros, com descontos exclusivos para estes e serem comissionados por isso.",
            has: true
        },
    ],
    PROTECAO_FAMILIAR_PREMIUM: [
        {
            title: "Seguro de Vida Causas Naturais",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 10.000,00 em caso de falecimento por causas naturais do associado.",
            has: true
        },

        {
            title: "Seguro de Vida Causas Acidentais",
            description: "A cobertura garante que a família do associado, irá a receber um valor de R$ 20.000,00 sendo assim a soma das duas coberturas R$ 10.000,00 do Seguro por morte natural e o valor de R$ 10.000,00 do Seguro por morte acidental garantindo que seja o dobro do valor do Seguro por morte natural.",
            has: true
        },
        {
            title: "Invalidez Total por Acidente",
            description: "Cobertura que garante que o associado, irá receber um valor de R$ 10.000,00 em caso de invalidez total por acidente.",
            has: true
        },
        {
            title: "Assistência Funeral Familiar",
            description: "Cobertura que garante, que caso o associado ou algum de seus beneficiários (filhos até 21 anos e cônjuge) venham a falecer, tenham direito a reembolso ou contratação do valor referente ao processo funeral de R$ 5.000,00 por pessoa.",
            has: true
        },
        {
            title: "Auxílio Alimentação",
            description: "Cobertura que garante que a família do associado, irá receber um valor de R$ 600,00 por mês, durante um ano, no caso de falecimento do associado.",
            has: true
        },
        {
            title: "Assistência 24h (Auto e Residencial)",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },

        {
            title: "Médico na Tela para Família",
            description: "A IBB Life oferece serviços de Assistência Pessoal e Residencial aos segurados, como envio de chaveiro, eletricista, limpeza, serviços domésticos provisórios, segurança e vigilância, baby-sitter, transporte escolar, remoção médica, Segunda Opinião Médica Internacional, Apoio Psicológico Pós luto, Assistência Nutricional e Personal Fitness.",
            has: true
        },
        {
            title: "Assistência Pessoal",
            description: "O associado tem direito a um pacote exclusivo de assistências 24 horas, tanto para o seu veículo quanto para sua residência.",
            has: true
        },
        {
            title: "Descontos em Medicamentos",
            description: "O associado tem direito a descontos Exclusivos em uma lista de medicamentos referenciados, em farmácias de redes credenciadas.",
            has: true
        },
        {
            title: "Sorteios Mensais",
            description: "O Associado participa de sorteios mensais no valor de R$20.000,00, todos os meses.",
            has: true
        },
        {
            title: "Total Pass",
            description: "A TOTAL PASS é um programa exclusivo de academias que oferece acesso a + 8.000 academias e + 250 modalidades. E agora, como associado da IBB Life, você pode aproveitar esse benefício exclusivo que só a IBB dá para você e +1 indicado no plano Proteção Familiar Gold",
            has: true
        },
        {
            title: "Programa de tira dúvidas financeiras",
            description: "O associado tem direito a um suporte tira dúvidas, com o auxílio de uma equipe especializada para ajudá-lo a se organizar financeiramente.",
            has: true
        },
        {
            title: "Programa de Renda Extra",
            description: "Conquiste sua liberdade financeira. O associado tem direito de participar do programa de indicação remunerada da IBB, podendo ter ganhos mensais e ganhos recorrentes com suas indicações que contratem o plano através deles.",
            has: true
        },
        {
            title: "Plataforma de Controle de Ganhos",
            description: "O Associado tem direito a uma plataforma exclusiva, para acompanhar seus ganhos, seus indicados e todos os gastos feitos na plataforma da IBB.",
            has: true
        },
        {
            title: "Clube de Benefícios (Em Breve)",
            description: "O associado IBB tem direito a participar do clube de benefícios IBB, onde pode comprar produtos e serviços de empresas parcerias da IBB, com descontos exclusivos.",
            has: true
        },
        {
            title: "Cash Back (Em Breve)",
            description: "O associado IBB participa de um programa de acúmulo de pontos digitais, que poderão ser utilizados nas compras feitas no clube de benefícios IBB.",
            has: true
        },
        {
            title: "Marketplace (Em Breve)",
            description: "Os associados podem indicar produtos e serviços de lojas parcerias, para terceiros, com descontos exclusivos para estes e serem comissionados por isso.",
            has: true
        },
    ]


}