
const partidos = [
    {
        'codigo': -1,
        'descPartido': 'SIN GANADOR DEFINIDO',
        'posicion': 0,
        'iniciales': '',
        'divisa': '',
        'c1': '#cccccc',
        'c2': '#ffffff',
        'c3': '#ffffff'
    },
    {
        'codigo': 4,
        'descPartido': 'LIBERACIÓN NACIONAL',
        'posicion': 15,
        'iniciales': 'PLN',
        'divisa': '4.jpg',
        'c1': '#04a94d',
        'c2': '#04a94d',
        'c3': '#ffffff'
    },
    {
        'codigo': 6,
        'descPartido': 'UNIDAD SOCIAL CRISTIANA',
        'posicion': 63,
        'iniciales': 'PUSC',
        'divisa': '6.jpg',
        'c1': '#0062aa',
        'c2': '#ea2127',
        'c3': '#0062aa'
    },
    {
        'codigo': 11,
        'descPartido': 'ACCIÓN CIUDADANA',
        'posicion': 64,
        'iniciales': 'PAC',
        'divisa': '11.jpg',
        'c1': '#fbed1f',
        'c2': '#fbed1f',
        'c3': '#ea2127'
    },
    {
        'codigo': 39,
        'descPartido': 'AUTÓNOMO OROMONTANO',
        'posicion': 53,
        'iniciales': 'PAO',
        'divisa': '39.jpg',
        'c1': '#fde500',
        'c2': '#fde500',
        'c3': '#028744'
    },
    {
        'codigo': 43,
        'descPartido': 'YUNTA PROGRESISTA ESCAZUCEÑA',
        'posicion': 52,
        'iniciales': 'YUNTA',
        'divisa': '43.jpg',
        'c1': '#0066b3',
        'c2': '#ffffff',
        'c3': '#27a64a'
    },
    {
        'codigo': 45,
        'descPartido': 'DEL SOL',
        'posicion': 6,
        'iniciales': 'PDS',
        'divisa': '45.jpg',
        'c1': '#008dd3',
        'c2': '#ffffff',
        'c3': '#f58757'
    },
    {
        'codigo': 47,
        'descPartido': 'CURRIDABAT SIGLO XXI',
        'posicion': 7,
        'iniciales': 'CSXXI',
        'divisa': '47.jpg',
        'c1': '#ffe800',
        'c2': '#ffe800',
        'c3': '#0062ab'
    },
    {
        'codigo': 52,
        'descPartido': 'ACCIÓN CANTONAL SIQUIRRES INDEPENDIENTE',
        'posicion': 59,
        'iniciales': 'PACSI',
        'divisa': '52.jpg',
        'c1': '#000000',
        'c2': '#000000',
        'c3': '#ffffff'
    },
    {
        'codigo': 53,
        'descPartido': 'AUTÉNTICO SARAPIQUEÑO',
        'posicion': 12,
        'iniciales': 'PASP1',
        'divisa': '53.jpg',
        'c1': '#346632',
        'c2': '#669cd3',
        'c3': '#fff452'
    },
    {
        'codigo': 59,
        'descPartido': 'ALIANZA POR SAN JOSÉ',
        'posicion': 74,
        'iniciales': 'PASJ',
        'divisa': '59.jpg',
        'c1': '#009bdf',
        'c2': '#009bdf',
        'c3': '#ffffff'
    },
    {
        'codigo': 73,
        'descPartido': 'FRENTE AMPLIO',
        'posicion': 56,
        'iniciales': 'FA',
        'divisa': '73.jpg',
        'c1': '#fceb06',
        'c2': '#fceb06',
        'c3': '#000000'
    },
    {
        'codigo': 76,
        'descPartido': 'GENTE PRO-CURRI',
        'posicion': 26,
        'iniciales': 'PCPC',
        'divisa': '76.jpg',
        'c1': '#f89217',
        'c2': '#dcddde',
        'c3': '#000000'
    },
    {
        'codigo': 82,
        'descPartido': 'AUTÉNTICO LABRADOR DE CORONADO',
        'posicion': 76,
        'iniciales': 'PALABRA',
        'divisa': '82.jpg',
        'c1': '#066cb4',
        'c2': '#fbed1f',
        'c3': '#00a44f'
    },
    {
        'codigo': 104,
        'descPartido': 'MOVIMIENTO AVANCE SANTO DOMINGO',
        'posicion': 44,
        'iniciales': 'MAS',
        'divisa': '104.jpg',
        'c1': '#faed36',
        'c2': '#ffffff',
        'c3': '#29aae1'
    },
    {
        'codigo': 107,
        'descPartido': 'RENOVEMOS ALAJUELA',
        'posicion': 1,
        'iniciales': 'PRA',
        'divisa': '107.jpg',
        'c1': '#ef1d26',
        'c2': '#000000',
        'c3': '#ffffff'
    },
    {
        'codigo': 111,
        'descPartido': 'ORGANIZACIÓN SOCIAL ACTIVA',
        'posicion': 33,
        'iniciales': 'OSA',
        'divisa': '111.jpg',
        'c1': '#0071bc',
        'c2': '#ffffff',
        'c3': '#0071bc'
    },
    {
        'codigo': 112,
        'descPartido': 'ÚNICO ABANGAREÑO',
        'posicion': 19,
        'iniciales': 'PUA',
        'divisa': '112.jpg',
        'c1': '#f6ed08',
        'c2': '#4db848',
        'c3': '#4db848'
    },
    {
        'codigo': 149,
        'descPartido': 'NUEVA GENERACIÓN',
        'posicion': 42,
        'iniciales': 'PNG',
        'divisa': '149.jpg',
        'c1': '#0066b3',
        'c2': '#e86425',
        'c3': '#e1e9f6'
    },
    {
        'codigo': 164,
        'descPartido': 'REPUBLICANO SOCIAL CRISTIANO',
        'posicion': 51,
        'iniciales': 'PRSC',
        'divisa': '164.jpg',
        'c1': '#25247b',
        'c2': '#fff200',
        'c3': '#ed1c24'
    },
    {
        'codigo': 175,
        'descPartido': 'AUTÉNTICO LIMONENSE',
        'posicion': 66,
        'iniciales': 'PAL',
        'divisa': '175.jpg',
        'c1': '#4da09e',
        'c2': '#4db848',
        'c3': '#f6ed08'
    },
    {
        'codigo': 176,
        'descPartido': 'NUEVA MAYORÍA GRIEGA',
        'posicion': 32,
        'iniciales': 'PNM',
        'divisa': '176.jpg',
        'c1': '#0060af',
        'c2': '#ffffff',
        'c3': '#0060af'
    },
    {
        'codigo': 177,
        'descPartido': 'AUTÉNTICO SIQUIRREÑO',
        'posicion': 21,
        'iniciales': 'PAS',
        'divisa': '177.jpg',
        'c1': '#f6ed08',
        'c2': '#90b83e',
        'c3': '#f6ed08'
    },
    {
        'codigo': 178,
        'descPartido': 'ECOLÓGICO COMUNAL COSTARRICENSE',
        'posicion': 40,
        'iniciales': 'PAEC',
        'divisa': '178.jpg',
        'c1': '#a7499b',
        'c2': '#bed62f',
        'c3': '#30a4dc'
    },
    {
        'codigo': 185,
        'descPartido': 'UNIÓN GUARQUEÑO',
        'posicion': 27,
        'iniciales': 'UG',
        'divisa': '185.jpg',
        'c1': '#f05623',
        'c2': '#0054a6',
        'c3': '#ffffff'
    },
    {
        'codigo': 189,
        'descPartido': 'RECUPERANDO VALORES',
        'posicion': 25,
        'iniciales': 'PAREVA',
        'divisa': '189.jpg',
        'c1': '#db581e',
        'c2': '#09428f',
        'c3': '#db581e'
    },
    {
        'codigo': 193,
        'descPartido': 'PUEBLO GARABITO',
        'posicion': 30,
        'iniciales': 'PG',
        'divisa': '193.jpg',
        'c1': '#3b71b8',
        'c2': '#71bf44',
        'c3': '#ece810'
    },
    {
        'codigo': 196,
        'descPartido': 'YO SOY EL CAMBIO',
        'posicion': 28,
        'iniciales': 'YSEC',
        'divisa': '196.jpg',
        'c1': '#00a6dc',
        'c2': '#000000',
        'c3': '#00a6dc'
    },
    {
        'codigo': 221,
        'descPartido': 'LIBERAL PROGRESISTA',
        'posicion': 39,
        'iniciales': 'PLP',
        'divisa': '221.jpg',
        'c1': '#f36428',
        'c2': '#fefefe',
        'c3': '#fefefe'
    },
    {
        'codigo': 232,
        'descPartido': 'ACTUEMOS YA',
        'posicion': 16,
        'iniciales': 'PAY',
        'divisa': '232.jpg',
        'c1': '#f36c21',
        'c2': '#21409a',
        'c3': '#f36c21'
    },
    {
        'codigo': 233,
        'descPartido': 'UNIÓN GUANACASTECA',
        'posicion': 62,
        'iniciales': 'PUG',
        'divisa': '233.jpg',
        'c1': '#d87a25',
        'c2': '#fff200',
        'c3': '#d87a25'
    },
    {
        'codigo': 240,
        'descPartido': 'UNIÓN DE PUNTARENENSES EMPRENDEDORES',
        'posicion': 60,
        'iniciales': 'PUPE',
        'divisa': '240.jpg',
        'c1': '#2b3484',
        'c2': '#f05123',
        'c3': '#fed104'
    },
    {
        'codigo': 241,
        'descPartido': 'UNIDOS PODEMOS',
        'posicion': 41,
        'iniciales': 'UP',
        'divisa': '241.jpg',
        'c1': '#704199',
        'c2': '#f7941d',
        'c3': '#704199'
    },
    {
        'codigo': 245,
        'descPartido': 'PROGRESO SOCIAL DEMOCRÁTICO',
        'posicion': 3,
        'iniciales': 'PSD',
        'divisa': '245.jpg',
        'c1': '#57ba47',
        'c2': '#29348f',
        'c3': '#ffffff'
    },
    {
        'codigo': 249,
        'descPartido': 'AQUÍ COSTA RICA MANDA',
        'posicion': 75,
        'iniciales': 'PFN',
        'divisa': '249.jpg',
        'c1': '#252f56',
        'c2': '#ce7c4c',
        'c3': '#ce7c4c'
    },
    {
        'codigo': 250,
        'descPartido': 'PURISCAL EN MARCHA',
        'posicion': 70,
        'iniciales': 'PM',
        'divisa': '250.jpg',
        'c1': '#ffdb00',
        'c2': '#0097c9',
        'c3': '#ffdb00'
    },
    {
        'codigo': 253,
        'descPartido': 'UNIDOS POR ESCAZÚ',
        'posicion': 68,
        'iniciales': 'UPES',
        'divisa': '253.jpg',
        'c1': '#f58220',
        'c2': '#007278',
        'c3': '#f58220'
    },
    {
        'codigo': 255,
        'descPartido': 'PALMARES PRIMERO',
        'posicion': 29,
        'iniciales': 'PPP',
        'divisa': '255.jpg',
        'c1': '#445fa9',
        'c2': '#69b053',
        'c3': '#445fa9'
    },
    {
        'codigo': 259,
        'descPartido': 'ALIANZA POR SARCHÍ',
        'posicion': 57,
        'iniciales': 'APS',
        'divisa': '259.jpg',
        'c1': '#0fa14a',
        'c2': '#1d2e5b',
        'c3': '#ed1c24'
    },
    {
        'codigo': 260,
        'descPartido': 'SENTIR HEREDIA',
        'posicion': 10,
        'iniciales': 'SH',
        'divisa': '260.jpg',
        'c1': '#669cd3',
        'c2': '#346632',
        'c3': '#fff452'
    },
    {
        'codigo': 265,
        'descPartido': 'DESPERTAR ALAJUELENSE',
        'posicion': 9,
        'iniciales': 'DA',
        'divisa': '265.jpg',
        'c1': '#c9d24d',
        'c2': '#00a84f',
        'c3': '#c9d24d'
    },
    {
        'codigo': 267,
        'descPartido': 'NUEVA REPÚBLICA',
        'posicion': 46,
        'iniciales': 'PNR',
        'divisa': '267.jpg',
        'c1': '#9bdae8',
        'c2': '#458bbf',
        'c3': '#5cc1da'
    },
    {
        'codigo': 268,
        'descPartido': 'PROGRESER',
        'posicion': 35,
        'iniciales': 'PGS',
        'divisa': '268.jpg',
        'c1': '#ee3043',
        'c2': '#ee3043',
        'c3': '#ffffff'
    },
    {
        'codigo': 270,
        'descPartido': 'LA GRAN NICOYA',
        'posicion': 34,
        'iniciales': 'LGN',
        'divisa': '270.jpg',
        'c1': '#0b8743',
        'c2': '#ef3d2b',
        'c3': '#0b8743'
    },
    {
        'codigo': 273,
        'descPartido': 'NUESTRO PUEBLO',
        'posicion': 54,
        'iniciales': 'PNP',
        'divisa': '273.jpg',
        'c1': '#85449a',
        'c2': '#2a3588',
        'c3': '#85449a'
    },
    {
        'codigo': 276,
        'descPartido': 'UNIDOS PARA EL DESARROLLO',
        'posicion': 69,
        'iniciales': 'PUEDE',
        'divisa': '276.jpg',
        'c1': '#f47728',
        'c2': '#f47728',
        'c3': '#ffffff'
    },
    {
        'codigo': 280,
        'descPartido': 'JUSTICIA SOCIAL COSTARRICENSE',
        'posicion': 5,
        'iniciales': 'PJSC',
        'divisa': '280.jpg',
        'c1': '#f58120',
        'c2': '#019548',
        'c3': '#f58120'
    },
    {
        'codigo': 284,
        'descPartido': 'TURRIALBA PRIMERO',
        'posicion': 2,
        'iniciales': 'TP',
        'divisa': '284.jpg',
        'c1': '#204888',
        'c2': '#62bb46',
        'c3': '#204888'
    },
    {
        'codigo': 286,
        'descPartido': 'SOMOS',
        'posicion': 8,
        'iniciales': 'PPS',
        'divisa': '286.jpg',
        'c1': '#3cae49',
        'c2': '#ee2837',
        'c3': '#f58d17'
    },
    {
        'codigo': 290,
        'descPartido': 'NANDAYURE PROGRESA',
        'posicion': 71,
        'iniciales': 'PNI',
        'divisa': '290.jpg',
        'c1': '#3ec0e4',
        'c2': '#f3ea23',
        'c3': '#3ec0e4'
    },
    {
        'codigo': 295,
        'descPartido': 'JUNTOS SAN JOSÉ',
        'posicion': 65,
        'iniciales': 'PJSJ',
        'divisa': '295.jpg',
        'c1': '#611b55',
        'c2': '#611b55',
        'c3': '#ffffff'
    },
    {
        'codigo': 296,
        'descPartido': 'AVANCE ISIDREÑO',
        'posicion': 43,
        'iniciales': 'PAI',
        'divisa': '296.jpg',
        'c1': '#62bb46',
        'c2': '#204888',
        'c3': '#62bb46'
    },
    {
        'codigo': 297,
        'descPartido': 'TERRA ESCAZÚ',
        'posicion': 36,
        'iniciales': 'TE',
        'divisa': '297.jpg',
        'c1': '#db581e',
        'c2': '#ffffff',
        'c3': '#db581e'
    },
    {
        'codigo': 298,
        'descPartido': 'ANTICORRUPCIÓN COSTARRICENSE',
        'posicion': 48,
        'iniciales': 'PACO',
        'divisa': '298.jpg',
        'c1': '#0d4d8c',
        'c2': '#f3cf56',
        'c3': '#0d4d8c'
    },
    {
        'codigo': 301,
        'descPartido': 'AUTÉNTICO SANTACRUCEÑO',
        'posicion': 61,
        'iniciales': 'PASC',
        'divisa': '301.jpg',
        'c1': '#fbd708',
        'c2': '#008448',
        'c3': '#fbd708'
    },
    {
        'codigo': 304,
        'descPartido': 'UNIÓN GRIEGA',
        'posicion': 18,
        'iniciales': 'PUNG',
        'divisa': '304.jpg',
        'c1': '#fbd708',
        'c2': '#ffffff',
        'c3': '#fbd708'
    },
    {
        'codigo': 305,
        'descPartido': 'UNIÓN DOMINGUEÑA',
        'posicion': 50,
        'iniciales': 'PUD',
        'divisa': '305.jpg',
        'c1': '#1e439b',
        'c2': '#1e439b',
        'c3': '#ffffff'
    },
    {
        'codigo': 306,
        'descPartido': 'SOMOS MORAVIA',
        'posicion': 38,
        'iniciales': 'PSM',
        'divisa': '306.jpg',
        'c1': '#00847e',
        'c2': '#ffffff',
        'c3': '#00847e'
    },
    {
        'codigo': 341,
        'descPartido': 'AGENDA DEMOCRÁTICA NACIONAL',
        'posicion': 13,
        'iniciales': 'ADN',
        'divisa': '341.jpg',
        'c1': '#28c0d4',
        'c2': '#ef4a20',
        'c3': '#ef4a20'
    },
    {
        'codigo': 342,
        'descPartido': 'ALIANZA COSTA RICA PRIMERO',
        'posicion': 14,
        'iniciales': 'CR1',
        'divisa': '342.jpg',
        'c1': '#ee2979',
        'c2': '#ee2979',
        'c3': '#ffffff'
    },
    {
        'codigo': 368,
        'descPartido': 'RECICLADORES Y VISIONARIOS',
        'posicion': 58,
        'iniciales': 'REYVI',
        'divisa': '368.jpg',
        'c1': '#ed2024',
        'c2': '#ed2024',
        'c3': '#ed2024'
    },
    {
        'codigo': 373,
        'descPartido': 'PUEBLO SOBERANO',
        'posicion': 20,
        'iniciales': 'PPSO',
        'divisa': '373.jpg',
        'c1': '#0da5b5',
        'c2': '#0da5b5',
        'c3': '#ffffff'
    },
    {
        'codigo': 374,
        'descPartido': 'MÁS SAN JOSÉ',
        'posicion': 37,
        'iniciales': 'PMAS',
        'divisa': '374.jpg',
        'c1': '#ee313e',
        'c2': '#ee313e',
        'c3': '#84d4f3'
    },
    {
        'codigo': 376,
        'descPartido': 'COLECTIVO CONVERGENCIA',
        'posicion': 22,
        'iniciales': 'PCCO',
        'divisa': '376.jpg',
        'c1': '#666ab0',
        'c2': '#49b848',
        'c3': '#f04e36'
    },
    {
        'codigo': 377,
        'descPartido': 'BIENESTAR JOSEFINO',
        'posicion': 4,
        'iniciales': 'PBJ',
        'divisa': '377.jpg',
        'c1': '#0595d5',
        'c2': '#68bb38',
        'c3': '#ffffff'
    },
    {
        'codigo': 379,
        'descPartido': 'POPULAR CRISTIANO',
        'posicion': 73,
        'iniciales': 'PPCR',
        'divisa': '379.jpg',
        'c1': '#a94d29',
        'c2': '#ffffff',
        'c3': '#a94d29'
    },
    {
        'codigo': 381,
        'descPartido': 'EN COMÚN',
        'posicion': 67,
        'iniciales': 'PEC',
        'divisa': '381.jpg',
        'c1': '#eb058c',
        'c2': '#ffffff',
        'c3': '#eae71b'
    },
    {
        'codigo': 382,
        'descPartido': 'LIBERIA UNIDA',
        'posicion': 47,
        'iniciales': 'PLAN',
        'divisa': '382.jpg',
        'c1': '#130f0e',
        'c2': '#ffcf06',
        'c3': '#130f0e'
    },
    {
        'codigo': 384,
        'descPartido': 'ALMA FLOREÑA',
        'posicion': 11,
        'iniciales': 'AF',
        'divisa': '384.jpg',
        'c1': '#9ca76e',
        'c2': '#d49761',
        'c3': '#ffe794'
    },
    {
        'codigo': 385,
        'descPartido': 'NUEVA LIBERIA',
        'posicion': 72,
        'iniciales': 'NL1',
        'divisa': '385.jpg',
        'c1': '#f5d211',
        'c2': '#fbfbfa',
        'c3': '#f5d211'
    },
    {
        'codigo': 389,
        'descPartido': 'UNIÓN OROMONTANA',
        'posicion': 55,
        'iniciales': 'UNO',
        'divisa': '389.jpg',
        'c1': '#f3ae3b',
        'c2': '#ffffff',
        'c3': '#257247'
    },
    {
        'codigo': 391,
        'descPartido': 'LA ESPERANZA DESAMPARADEÑA',
        'posicion': 45,
        'iniciales': 'PED1',
        'divisa': '391.jpg',
        'c1': '#095b99',
        'c2': '#edd47d',
        'c3': '#edd47d'
    },
    {
        'codigo': 392,
        'descPartido': 'BIENESTAR RAFAELEÑO',
        'posicion': 49,
        'iniciales': 'PABIRA',
        'divisa': '392.jpg',
        'c1': '#2c2251',
        'c2': '#f3e725',
        'c3': '#f3e725'
    },
    {
        'codigo': 393,
        'descPartido': 'ECOLÓGICO ESCAZUCEÑO',
        'posicion': 24,
        'iniciales': 'PEE',
        'divisa': '393.jpg',
        'c1': '#5b4ea1',
        'c2': '#23afe4',
        'c3': '#47b852'
    },
    {
        'codigo': 399,
        'descPartido': 'COALICIÓN SOMOS MONTES DE OCA',
        'posicion': 23,
        'iniciales': 'CSMDO',
        'divisa': '399.jpg',
        'c1': '#cc785a',
        'c2': '#ffffff',
        'c3': '#ffffff'
    },
    {
        'codigo': 400,
        'descPartido': 'COALICIÓN CAMBIO CIUDADANO',
        'posicion': 77,
        'iniciales': 'CCAC',
        'divisa': '400.jpg',
        'c1': '#0a1a30',
        'c2': '#e8e7ea',
        'c3': '#f0544d'
    },
    {
        'codigo': 401,
        'descPartido': 'COALICIÓN UNIÓN BELEMITA',
        'posicion': 31,
        'iniciales': 'CUBE',
        'divisa': '401.jpg',
        'c1': '#38b86c',
        'c2': '#f8d91b',
        'c3': '#ee2937'
    },
    {
        'codigo': 402,
        'descPartido': 'COALICIÓN GENTE MONTES DE OCA',
        'posicion': 17,
        'iniciales': 'CGMO24',
        'divisa': '402.jpg',
        'c1': '#f8de08',
        'c2': '#3a97cd',
        'c3': '#f8de08'
    }
];

export { partidos };