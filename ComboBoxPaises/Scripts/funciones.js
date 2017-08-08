/*
Se tomo como base la estructuración a partir de esta página: https://codepen.io/nhernandezt222/pen/WoJBqr?editors=1010
El resto de modificaciones y el llenado de Países, estados y comunidades además de la adaptación de las necesidades
es por autoría de: Lluvia Mishal Melgarejo Durán
El código puede ser utilziado para sistemas de tipo web o readaptados a una aplicación de escritorio.
*/

angular.module('mySuperApp', ['ionic'])
.controller('PopupCtrl', function ($scope, $ionicPopup, $timeout, $filter) {
    $scope.paises = [
        { paisCodigo: 'AF',  paisNombre: 'Afganistán' },
        { paisCodigo: 'AL',  paisNombre: 'Albania' },
        { paisCodigo: 'ALE', paisNombre: 'Alemania' },
        { paisCodigo: 'AND', paisNombre: 'Andorra' },
        { paisCodigo: 'ANG', paisNombre: 'Angola' },
        { paisCodigo: 'AYB', paisNombre: 'Antigua y Barbuda' },
        { paisCodigo: 'AS',  paisNombre: 'Arabia Saudita' },
		    { paisCodigo: 'ARG', paisNombre: 'Argelia' },
        { paisCodigo: 'ART', paisNombre: 'Argentina' },
        { paisCodigo: 'ARM', paisNombre: 'Armenia' },
        { paisCodigo: 'AUS', paisNombre: 'Australia' },
        { paisCodigo: 'AZE', paisNombre: 'Azerbaiyán' },
        { paisCodigo: 'BA',  paisNombre: 'Bahamas' },
        { paisCodigo: 'BAN', paisNombre: 'Bangladés' },
        { paisCodigo: 'BAR', paisNombre: 'Barbados' },
        { paisCodigo: 'BAE', paisNombre: 'Baréin' },
        { paisCodigo: 'BEL', paisNombre: 'Bélgica' },
        { paisCodigo: 'BEC', paisNombre: 'Belice' },
        { paisCodigo: 'BNN', paisNombre: 'Benín' },
        { paisCodigo: 'BRR', paisNombre: 'Bielorrusia' },
        { paisCodigo: 'BIR', paisNombre: 'Birmania' },
        { paisCodigo: 'BOL', paisNombre: 'Bolivia' },
        { paisCodigo: 'BSH', paisNombre: 'Bosnia-Herzegovina' },
        { paisCodigo: 'BOT', paisNombre: 'Botsuana' },
        { paisCodigo: 'BRA', paisNombre: 'Brasil' },
        { paisCodigo: 'BRU', paisNombre: 'Brunéi' },
        { paisCodigo: 'BUL', paisNombre: 'Bulgaria' },
        { paisCodigo: 'BUK', paisNombre: 'Burkina Faso' },
        { paisCodigo: 'BUR', paisNombre: 'Burundi' },
        { paisCodigo: 'BUT', paisNombre: 'Bután' },
        { paisCodigo: 'CAV', paisNombre: 'Cabo Verde' },
        { paisCodigo: 'CAM', paisNombre: 'Camboya' },
        { paisCodigo: 'CAU', paisNombre: 'Camerún' },
        { paisCodigo: 'CAN', paisNombre: 'Canadá' },
        { paisCodigo: 'CAT', paisNombre: 'Catar' },
        { paisCodigo: 'CHA', paisNombre: 'Chad' },
        { paisCodigo: 'CHI', paisNombre: 'Chile' },
        { paisCodigo: 'CHN', paisNombre: 'China' },
        { paisCodigo: 'CHP', paisNombre: 'Chipre' },
        { paisCodigo: 'COL', paisNombre: 'Colombia' },
        { paisCodigo: 'COR', paisNombre: 'Comoras' },
        { paisCodigo: 'COG', paisNombre: 'Congo' },
        { paisCodigo: 'CNO', paisNombre: 'Corea del Norte' },
        { paisCodigo: 'CSU', paisNombre: 'Corea del Sur' },
        { paisCodigo: 'CMA', paisNombre: 'Costa de Marfil' },
        { paisCodigo: 'CRI', paisNombre: 'Costa Rica' },
        { paisCodigo: 'CRO', paisNombre: 'Croacia' },
        { paisCodigo: 'CUB', paisNombre: 'Cuba' },
        { paisCodigo: 'DIN', paisNombre: 'Dinamarca' },
        { paisCodigo: 'DOM', paisNombre: 'Dominica' },
        { paisCodigo: 'ECU', paisNombre: 'Ecuador' },
        { paisCodigo: 'EGP', paisNombre: 'Egipto' },
        { paisCodigo: 'ELS', paisNombre: 'El Salvador' },
        { paisCodigo: 'EAU', paisNombre: 'Emiratos Árabes Unidos' },
        { paisCodigo: 'ERI', paisNombre: 'Eritrea' },
        { paisCodigo: 'ESL', paisNombre: 'Eslovaquia' },
        { paisCodigo: 'ESV', paisNombre: 'Eslovenia' },
        { paisCodigo: 'ESP', paisNombre: 'España' },
        { paisCodigo: 'EUA', paisNombre: 'Estados Unidos' },
		    { paisCodigo: 'EST', paisNombre: 'Estonia' },
        { paisCodigo: 'ETI', paisNombre: 'Etiopía' },
        { paisCodigo: 'FIL', paisNombre: 'Filipinas' },
        { paisCodigo: 'FIN', paisNombre: 'Finlandia' },
        { paisCodigo: 'FIY', paisNombre: 'Fiyi' },
        { paisCodigo: 'FRA', paisNombre: 'Francia' },
        { paisCodigo: 'GAB', paisNombre: 'Gabón' },
        { paisCodigo: 'GAM', paisNombre: 'Gambia' },
        { paisCodigo: 'GEO', paisNombre: 'Georgia' },
        { paisCodigo: 'GHA', paisNombre: 'Ghana' },
        { paisCodigo: 'GRA', paisNombre: 'Granada' },
        { paisCodigo: 'GRE', paisNombre: 'Grecia' },
        { paisCodigo: 'GUA', paisNombre: 'Guatemala' },
        { paisCodigo: 'GUI', paisNombre: 'Guinea' },
        { paisCodigo: 'GUE', paisNombre: 'Guinea Ecuatorial' },
        { paisCodigo: 'GUB', paisNombre: 'Guinea-Bisáu' },
        { paisCodigo: 'GUY', paisNombre: 'Guyana' },
        { paisCodigo: 'HAI', paisNombre: 'Haití' },
        { paisCodigo: 'HON', paisNombre: 'Honduras' },
        { paisCodigo: 'HUN', paisNombre: 'Hungría' },
        { paisCodigo: 'IND', paisNombre: 'India' },
        { paisCodigo: 'IDS', paisNombre: 'Indonesia' },
        { paisCodigo: 'IRK', paisNombre: 'Irak' },
        { paisCodigo: 'IRN', paisNombre: 'Irán' },
        { paisCodigo: 'IRL', paisNombre: 'Irlanda' },
        { paisCodigo: 'ISL', paisNombre: 'Islandia' },
        { paisCodigo: 'ISM', paisNombre: 'Islas Marshall' },
        { paisCodigo: 'ISS', paisNombre: 'Islas Salomón' },
        { paisCodigo: 'ISR', paisNombre: 'Israel' },
        { paisCodigo: 'ITA', paisNombre: 'Italia' },
        { paisCodigo: 'JAM', paisNombre: 'Jamaica' },
        { paisCodigo: 'JAP', paisNombre: 'Japón' },
        { paisCodigo: 'JOR', paisNombre: 'Jordania' },
        { paisCodigo: 'KAZ', paisNombre: 'Kazajistán' },
        { paisCodigo: 'KEN', paisNombre: 'Kenia' },
        { paisCodigo: 'KIR', paisNombre: 'Kirguistán' },
        { paisCodigo: 'KIB', paisNombre: 'Kiribati' },
        { paisCodigo: 'KOS', paisNombre: 'Kosovo' },
        { paisCodigo: 'KUW', paisNombre: 'Kuwait' },
        { paisCodigo: 'LAO', paisNombre: 'Laos' },
        { paisCodigo: 'LES', paisNombre: 'Lesoto' },
        { paisCodigo: 'LET', paisNombre: 'Letonia' },
        { paisCodigo: 'LIB', paisNombre: 'Líbano' },
        { paisCodigo: 'LIA', paisNombre: 'Liberia' },
        { paisCodigo: 'LII', paisNombre: 'Libia' },
        { paisCodigo: 'LIE', paisNombre: 'Liechtenstein' },
        { paisCodigo: 'LIT', paisNombre: 'Lituania' },
        { paisCodigo: 'LUX', paisNombre: 'Luxemburgo' },
        { paisCodigo: 'MAC', paisNombre: 'Macedonia' },
        { paisCodigo: 'MAD', paisNombre: 'Madagascar' },
        { paisCodigo: 'MAL', paisNombre: 'Malasia' },
        { paisCodigo: 'MAU', paisNombre: 'Malaui' },
        { paisCodigo: 'MAV', paisNombre: 'Maldivas' },
        { paisCodigo: 'MAI', paisNombre: 'Malí' },
        { paisCodigo: 'MAT', paisNombre: 'Malta' },
        { paisCodigo: 'MRR', paisNombre: 'Marruecos' },
        { paisCodigo: 'MAR', paisNombre: 'Mauricio' },
        { paisCodigo: 'MTA', paisNombre: 'Mauritania' },
        { paisCodigo: 'MEX', paisNombre: 'México' },
        { paisCodigo: 'MIC', paisNombre: 'Micronesia' },
        { paisCodigo: 'MOL', paisNombre: 'Moldavia' },
        { paisCodigo: 'MON', paisNombre: 'Mónaco' },
        { paisCodigo: 'MOG', paisNombre: 'Mongolia' },
        { paisCodigo: 'MOT', paisNombre: 'Montenegro' },
        { paisCodigo: 'MOZ', paisNombre: 'Mozambique' },
        { paisCodigo: 'NAM', paisNombre: 'Namibia' },
        { paisCodigo: 'NAU', paisNombre: 'Nauru' },
        { paisCodigo: 'NEP', paisNombre: 'Nepal' },
        { paisCodigo: 'NIC', paisNombre: 'Nicaragua' },
        { paisCodigo: 'NIG', paisNombre: 'Níger' },
        { paisCodigo: 'NIR', paisNombre: 'Nigeria' },
        { paisCodigo: 'NRE', paisNombre: 'Noruega' },
        { paisCodigo: 'NZE', paisNombre: 'Nueva Zelanda' },
        { paisCodigo: 'OMN', paisNombre: 'Omán' },
        { paisCodigo: 'PBA', paisNombre: 'Países Bajos' },
        { paisCodigo: 'PAK', paisNombre: 'Pakistán' },
        { paisCodigo: 'PAO', paisNombre: 'Palaos' },
        { paisCodigo: 'PAN', paisNombre: 'Panamá' },
        { paisCodigo: 'PNG', paisNombre: 'Papúa Nueva Guinea' },
        { paisCodigo: 'PAR', paisNombre: 'Paraguay' },
        { paisCodigo: 'PER', paisNombre: 'Perú' },
        { paisCodigo: 'POL', paisNombre: 'Polonia' },
        { paisCodigo: 'POR', paisNombre: 'Portugal' },
        { paisCodigo: 'REU', paisNombre: 'Reino Unido' },
        { paisCodigo: 'RCE', paisNombre: 'República Centroafricana' },
        { paisCodigo: 'RCH', paisNombre: 'República Checa' },
        { paisCodigo: 'RDC', paisNombre: 'República Democrática del Congo' },
        { paisCodigo: 'RDO', paisNombre: 'República Dominicana' },
        { paisCodigo: 'RUA', paisNombre: 'Ruanda' },
        { paisCodigo: 'RUM', paisNombre: 'Rumania' },
        { paisCodigo: 'RUS', paisNombre: 'Rusia' },
        { paisCodigo: 'SAO', paisNombre: 'Samoa' },
        { paisCodigo: 'SCN', paisNombre: 'San Cristóbal y Nieves' },
        { paisCodigo: 'SAM', paisNombre: 'San Marino' },
        { paisCodigo: 'SVG', paisNombre: 'San Vicente y las Granadinas' },
        { paisCodigo: 'SLU', paisNombre: 'Santa Lucía' },
        { paisCodigo: 'STP', paisNombre: 'Santo Tomé y Príncipe' },
        { paisCodigo: 'SEG', paisNombre: 'Senegal' },
        { paisCodigo: 'SER', paisNombre: 'Serbia' },
        { paisCodigo: 'SEY', paisNombre: 'Seychelles' },
        { paisCodigo: 'SLE', paisNombre: 'Sierra Leona' },
        { paisCodigo: 'SIN', paisNombre: 'Singapur' },
        { paisCodigo: 'SRI', paisNombre: 'Siria' },
        { paisCodigo: 'SOM', paisNombre: 'Somalia' },
        { paisCodigo: 'SLA', paisNombre: 'Sri Lanka' },
        { paisCodigo: 'SUA', paisNombre: 'Suazilandia' },
        { paisCodigo: 'SUD', paisNombre: 'Sudáfrica' },
        { paisCodigo: 'SUN', paisNombre: 'Sudán' },
        { paisCodigo: 'SUS', paisNombre: 'Sudán del Sur' },
        { paisCodigo: 'SUE', paisNombre: 'Suecia' },
        { paisCodigo: 'SUI', paisNombre: 'Suiza' },
        { paisCodigo: 'SUM', paisNombre: 'Surinam' },
        { paisCodigo: 'TAI', paisNombre: 'Tailandia' },
        { paisCodigo: 'TAZ', paisNombre: 'Tanzania' },
        { paisCodigo: 'TAY', paisNombre: 'Tayikistán' },
        { paisCodigo: 'TOR', paisNombre: 'Timor Oriental' },
        { paisCodigo: 'TOG', paisNombre: 'Togo' },
        { paisCodigo: 'TOA', paisNombre: 'Tonga' },
        { paisCodigo: 'TYT', paisNombre: 'Trinidad y Tobago' },
        { paisCodigo: 'TUZ', paisNombre: 'Túnez' },
        { paisCodigo: 'TUK', paisNombre: 'Turkmenistán' },
        { paisCodigo: 'TAR', paisNombre: 'Turquía' },
        { paisCodigo: 'TUV', paisNombre: 'Tuvalu' },
        { paisCodigo: 'UCR', paisNombre: 'Ucrania' },
        { paisCodigo: 'UGA', paisNombre: 'Uganda' },
        { paisCodigo: 'URG', paisNombre: 'Uruguay' },
        { paisCodigo: 'UZB', paisNombre: 'Uzbekistán' },
        { paisCodigo: 'VAN', paisNombre: 'Vanuatu' },
        { paisCodigo: 'VAT', paisNombre: 'Vaticano' },
        { paisCodigo: 'VEN', paisNombre: 'Venezuela' },
        { paisCodigo: 'VIT', paisNombre: 'Vietnam' },
        { paisCodigo: 'YEM', paisNombre: 'Yemen' },
        { paisCodigo: 'YIB', paisNombre: 'Yibuti' },
        { paisCodigo: 'ZAM', paisNombre: 'Zambia' },
        { paisCodigo: 'ZIM', paisNombre: 'Zimbabue' }

    ];
    $scope.departamentos = [
        //AFGANISTAN
        {
            deptoId: 1,
            deptoNombre: 'Afganistán',
            deptoPais: 'AF'
        },
        //ALBANIA
        {
            deptoId: 2,
            deptoNombre: 'Berat',
            deptoPais: 'AL'
        },
        {
            deptoId: 3,
            deptoNombre: 'Dibër',
            deptoPais: 'AL'
        },
       {
           deptoId: 4,
           deptoNombre: 'Durrës',
           deptoPais: 'AL'
       },
       {
           deptoId: 5,
           deptoNombre: 'Elbasan',
           deptoPais: 'AL'
       },
       {
           deptoId: 6,
           deptoNombre: 'Fier',
           deptoPais: 'AL'
       },
       {
           deptoId: 7,
           deptoNombre: 'Gjirokastër',
           deptoPais: 'AL'
       },
       {
           deptoId: 8,
           deptoNombre: 'Korçë',
           deptoPais: 'AL'
       },
       {
           deptoId: 9,
           deptoNombre: 'Kukës',
           deptoPais: 'AL'
       },
       {
           deptoId: 10,
           deptoNombre: 'Lezhë',
           deptoPais: 'AL'
       },
       {
           deptoId: 11,
           deptoNombre: 'Shkodër',
           deptoPais: 'AL'
       },
       {
           deptoId: 12,
           deptoNombre: 'Tirana',
           deptoPais: 'AL'
       },
       {
           deptoId: 13,
           deptoNombre: 'Vlorë',
           deptoPais: 'AL'
       },
       //ALEMANIA
       {
           deptoId: 14,
           deptoNombre: 'Baden-Wurtemberg',
           deptoPais: 'ALE'
       },

    {
        deptoId: 15,
        deptoNombre: 'Baviera',
        deptoPais: 'ALE'
    },
   {
       deptoId: 16,
       deptoNombre: 'Berlín',
       deptoPais: 'ALE'
   },
   {
       deptoId: 17,
       deptoNombre: 'Brandeburgo',
       deptoPais: 'ALE'
   },
   {
       deptoId: 18,
       deptoNombre: 'Bremen',
       deptoPais: 'ALE'
   },
   {
       deptoId: 19,
       deptoNombre: 'Hamburgo',
       deptoPais: 'ALE'
   },
   {
       deptoId: 20,
       deptoNombre: 'Hesse',
       deptoPais: 'ALE'
   },
   {
       deptoId: 21,
       deptoNombre: 'Mecklemburgo-Pomerania Occidental',
       deptoPais: 'ALE'
   },
   {
       deptoId: 22,
       deptoNombre: 'Baja Sajonia',
       deptoPais: 'ALE'
   },
   {
       deptoId: 23,
       deptoNombre: 'Renania del Norte-Westfalia',
       deptoPais: 'ALE'
   },
   {
       deptoId: 24,
       deptoNombre: 'Renania-Palatinado',
       deptoPais: 'ALE'
   },
   {
       deptoId: 25,
       deptoNombre: 'Sarre',
       deptoPais: 'ALE'
   },
   {
       deptoId: 26,
       deptoNombre: 'Sajonia',
       deptoPais: 'ALE'
   },
   {
       deptoId: 27,
       deptoNombre: 'Sajonia-Anhalt',
       deptoPais: 'ALE'
   },
   {
       deptoId: 28,
       deptoNombre: 'Schleswig-Holstein',
       deptoPais: 'ALE'
   },
   {
       deptoId: 29,
       deptoNombre: 'Turingia',
       deptoPais: 'ALE'
   },
   {
       deptoId: 30,
       deptoNombre: 'Canillo',
       deptoPais: 'AND'
   },
   {
       deptoId: 31,
       deptoNombre: 'Encamp',
       deptoPais: 'AND'
   },
   {
       deptoId: 32,
       deptoNombre: 'Ordino',
       deptoPais: 'AND'
   },
   {
       deptoId: 33,
       deptoNombre: 'La massana',
       deptoPais: 'AND'
   },
   {
       deptoId: 34,
       deptoNombre: 'Andorra la Vieja',
       deptoPais: 'AND'
   },
   {
       deptoId: 35,
       deptoNombre: 'San Julián de Loria',
       deptoPais: 'AND'
   },
   {
       deptoId: 36,
       deptoNombre: 'Escaldes-Engordany',
       deptoPais: 'AND'
   },
   //ANGOLA
       {
           deptoId: 37,
           deptoNombre: 'Bengo',
           deptoPais: 'ANG'
       },
       {
           deptoId: 38,
           deptoNombre: 'Benguela',
           deptoPais: 'ANG'
       },
       {
           deptoId: 39,
           deptoNombre: 'Bié',
           deptoPais: 'ANG'
       },
       {
           deptoId: 40,
           deptoNombre: 'Cabinda',
           deptoPais: 'ANG'
       },
       {
           deptoId: 41,
           deptoNombre: 'Cuando-Cubango',
           deptoPais: 'ANG'
       },
       {
           deptoId: 42,
           deptoNombre: 'Cuanza Norte',
           deptoPais: 'ANG'
       },
       {
           deptoId: 43,
           deptoNombre: 'Cuanza Sur',
           deptoPais: 'ANG'
       },
       {
           deptoId: 44,
           deptoNombre: 'Cunene',
           deptoPais: 'ANG'
       },
       {
           deptoId: 45,
           deptoNombre: 'Huambo',
           deptoPais: 'ANG'
       },
       {
           deptoId: 46,
           deptoNombre: 'Huíla',
           deptoPais: 'ANG'
       },
       {
           deptoId: 47,
           deptoNombre: 'Luanda',
           deptoPais: 'ANG'
       },
       {
           deptoId: 48,
           deptoNombre: 'Lunda Norte',
           deptoPais: 'ANG'
       },
       {
           deptoId: 49,
           deptoNombre: 'Lunda Sur',
           deptoPais: 'ANG'
       },
       {
           deptoId: 50,
           deptoNombre: 'Malanje',
           deptoPais: 'ANG'
       },
       {
           deptoId: 51,
           deptoNombre: 'Moxico',
           deptoPais: 'ANG'
       },
       {
           deptoId: 52,
           deptoNombre: 'Namibe',
           deptoPais: 'ANG'
       },
       {
           deptoId: 53,
           deptoNombre: 'Uíge',
           deptoPais: 'ANG'
       },
       {
           deptoId: 54,
           deptoNombre: 'Zaire',
           deptoPais: 'ANG'
       },
       //ANTIGUA Y BARBUDA
       {
           deptoId: 55,
           deptoNombre: 'Saint George',
           deptoPais: 'AYB'
       },
       {
            deptoId: 56,
            deptoNombre: "Saint John's",
            deptoPais: 'AYB'
        }, 
        {
            deptoId: 57,
            deptoNombre: 'Saint Mary',
            deptoPais: 'AYB'
        },
        {
            deptoId: 58,
            deptoNombre: 'Saint Paul',
            deptoPais: 'AYB'
        },
        {
            deptoId: 59,
            deptoNombre: 'Saint Peter',
            deptoPais: 'AYB'
        },
        {
            deptoId: 60,
            deptoNombre: 'Saint Philip',
            deptoPais: 'AYB'
        },
    //ARABIA SAUDITA
        {
            deptoId: 61,
            deptoNombre: 'Provincia de Asir',
            deptoPais: 'AS'
        },
        {
            deptoId: 62,
            deptoNombre: 'Provincia de Baha',
            deptoPais: 'AS'
        },
        {
            deptoId: 63,
            deptoNombre: 'Casim',
            deptoPais: 'AS'
        },
        {
            deptoId: 64,
            deptoNombre: 'Provincia de la Frontera del Norte',
            deptoPais: 'AS'
        },
        {
            deptoId: 65,
            deptoNombre: 'Provincia de Haíl',
            deptoPais: 'AS'
        },
        {
            deptoId: 66,
            deptoNombre: 'Provincia de Jizán',
            deptoPais: 'AS'
        },
        {
            deptoId: 67,
            deptoNombre: 'Provincia de La Meca',
            deptoPais: 'AS'
        },
        {
            deptoId: 68,
            deptoNombre: 'Provincia de Medina',
            deptoPais: 'AS'
        },
        {
            deptoId: 69,
            deptoNombre: 'Provincia de Najrán',
            deptoPais: 'AS'
        },
        {
            deptoId: 70,
            deptoNombre: 'Provincia Oriental',
            deptoPais: 'AS'
        },
        {
            deptoId: 71,
            deptoNombre: 'Provincia de Riad',
            deptoPais: 'AS'
        },
        {
            deptoId: 72,
            deptoNombre: 'Provincia de Tabuk',
            deptoPais: 'AS'
        },
        {
            deptoId: 73,
            deptoNombre: 'Provincia de Yauf',
            deptoPais: 'AS'
        },
    //ARGELIA
        {
            deptoId: 74,
            deptoNombre: 'Adrar',
            deptoPais: 'ARG'
        },
        {
            deptoId: 75,
            deptoNombre: 'Ain Defla',
            deptoPais: 'ARG'
        },
        {
            deptoId: 76,
            deptoNombre: 'Ain Temouchent',
            deptoPais: 'ARG'
        },
        {
            deptoId: 77,
            deptoNombre: 'Annaba',
            deptoPais: 'ARG'
        },
        {
            deptoId: 78,
            deptoNombre: 'Argel',
            deptoPais: 'ARG'
        },
        {
            deptoId: 79,
            deptoNombre: 'Batna',
            deptoPais: 'ARG'
        },
        {
            deptoId: 80,
            deptoNombre: 'Béjaia',
            deptoPais: 'ARG'
        },
        {
            deptoId: 81,
            deptoNombre: 'Biskra',
            deptoPais: 'ARG'
        },
        {
            deptoId: 82,
            deptoNombre: 'Blida',
            deptoPais: 'ARG'
        },
        {
            deptoId: 83,
            deptoNombre: 'Bordj Bou Arréridj',
            deptoPais: 'ARG'
        },
        {
            deptoId: 84,
            deptoNombre: 'Bouira',
            deptoPais: 'ARG'
        },
        {
            deptoId: 85,
            deptoNombre: 'Boumerdès',
            deptoPais: 'ARG'
        },
        {
            deptoId: 86,
            deptoNombre: 'Chlef',
            deptoPais: 'ARG'
        },
        {
            deptoId: 87,
            deptoNombre: 'Constantina',
            deptoPais: 'ARG'
        },
        {
            deptoId: 88,
            deptoNombre: 'Djelfa',
            deptoPais: 'ARG'
        },
        {
            deptoId: 89,
            deptoNombre: 'El Bayadh',
            deptoPais: 'ARG'
        },
        {
            deptoId: 90,
            deptoNombre: 'El Oued',
            deptoPais: 'ARG'
        },
        {
            deptoId: 91,
            deptoNombre: 'El Tarf',
            deptoPais: 'ARG'
        },
        {
            deptoId: 92,
            deptoNombre: 'Ghardaia',
            deptoPais: 'ARG'
        },
        {
            deptoId: 93,
            deptoNombre: 'Guelma',
            deptoPais: 'ARG'
        },
        {
            deptoId: 94,
            deptoNombre: 'Illizi',
            deptoPais: 'ARG'
        },
        {
            deptoId: 95,
            deptoNombre: 'Jijel',
            deptoPais: 'ARG'
        },
        {
            deptoId: 96,
            deptoNombre: 'Khenchela',
            deptoPais: 'ARG'
        },
        {
            deptoId: 97,
            deptoNombre: 'Skikda',
            deptoPais: 'ARG'
        },
        {
            deptoId: 98,
            deptoNombre: 'Laghouat',
            deptoPais: 'ARG'
        },
        {
            deptoId: 99,
            deptoNombre: 'Médéa',
            deptoPais: 'ARG'
        },
        {
            deptoId: 100,
            deptoNombre: 'Mila',
            deptoPais: 'ARG'
        },
        {
            deptoId: 101,
            deptoNombre: 'Mostaganem',
            deptoPais: 'ARG'
        },
        {
            deptoId: 102,
            deptoNombre: 'Msila',
            deptoPais: 'ARG'
        },
        {
            deptoId: 103,
            deptoNombre: 'Muaskar',
            deptoPais: 'ARG'
        },
        {
            deptoId: 104,
            deptoNombre: 'Naama',
            deptoPais: 'ARG'
        },
        {
            deptoId: 105,
            deptoNombre: 'Orán',
            deptoPais: 'ARG'
        },
        {
            deptoId: 106,
            deptoNombre: 'Ouargla',
            deptoPais: 'ARG'
        },
        {
            deptoId: 107,
            deptoNombre: 'Oum El Bouaghi',
            deptoPais: 'ARG'
        },
        {
            deptoId: 108,
            deptoNombre: 'Relizan',
            deptoPais: 'ARG'
        },
        {
            deptoId: 109,
            deptoNombre: 'Saida',
            deptoPais: 'ARG'
        },
        {
            deptoId: 110,
            deptoNombre: 'Sétif',
            deptoPais: 'ARG'
        },
        {
            deptoId: 111,
            deptoNombre: 'Sidi Bel Abbès',
            deptoPais: 'ARG'
        },
        {
            deptoId: 112,
            deptoNombre: 'Souk Ahras',
            deptoPais: 'ARG'
        },
        {
            deptoId: 113,
            deptoNombre: 'Tamanrasset',
            deptoPais: 'ARG'
        },
        {
            deptoId: 114,
            deptoNombre: 'Tébessa',
            deptoPais: 'ARG'
        },
        {
            deptoId: 115,
            deptoNombre: 'Tiaret',
            deptoPais: 'ARG'
        },
        {
            deptoId: 116,
            deptoNombre: 'Tinduf',
            deptoPais: 'ARG'
        },
        {
            deptoId: 117,
            deptoNombre: 'Tipasa',
            deptoPais: 'ARG'
        },
        {
            deptoId: 118,
            deptoNombre: 'Tissemsilt',
            deptoPais: 'ARG'
        },
        {
            deptoId: 119,
            deptoNombre: 'Tizi Ouzou',
            deptoPais: 'ARG'
        },
        {
            deptoId: 120,
            deptoNombre: 'Tlemcen',
            deptoPais: 'ARG'
        },
        //ARGENTINA
        {
            deptoId: 121,
            deptoNombre: 'Buenos Aires',
            deptoPais: 'ART'
        },
        {
            deptoId: 122,
            deptoNombre: 'Catamarca',
            deptoPais: 'ART'
        },
        {
            deptoId: 123,
            deptoNombre: 'Chaco',
            deptoPais: 'ART'
        },
        {
            deptoId: 124,
            deptoNombre: 'Chubut',
            deptoPais: 'ART'
        },
        {
            deptoId: 125,
            deptoNombre: 'Córdoba',
            deptoPais: 'ART'
        },
        {
            deptoId: 126,
            deptoNombre: 'Corrientes',
            deptoPais: 'ART'
        },
        {
            deptoId: 127,
            deptoNombre: 'Entre Ríos',
            deptoPais: 'ART'
        },
        {
            deptoId: 128,
            deptoNombre: 'Formosa',
            deptoPais: 'ART'
        },
        {
            deptoId: 129,
            deptoNombre: 'Jujuy',
            deptoPais: 'ART'
        },
        {
            deptoId: 130,
            deptoNombre: 'La Pampa',
            deptoPais: 'ART'
        },
        {
            deptoId: 131,
            deptoNombre: 'La Rioja',
            deptoPais: 'ART'
        },
        {
            deptoId: 132,
            deptoNombre: 'Mendoza',
            deptoPais: 'ART'
        },
        {
            deptoId: 133,
            deptoNombre: 'Misiones',
            deptoPais: 'ART'
        },
        {
            deptoId: 134,
            deptoNombre: 'Neuquén',
            deptoPais: 'ART'
        },
        {
            deptoId: 135,
            deptoNombre: 'Río Negro',
            deptoPais: 'ART'
        },
        {
            deptoId: 136,
            deptoNombre: 'Salta',
            deptoPais: 'ART'
        },
        {
            deptoId: 137,
            deptoNombre: 'San Juan',
            deptoPais: 'ART'
        },
        {
            deptoId: 138,
            deptoNombre: 'San Luis',
            deptoPais: 'ART'
        },
        {
            deptoId: 139,
            deptoNombre: 'Santa Cruz',
            deptoPais: 'ART'
        },
        {
            deptoId: 140,
            deptoNombre: 'Santa Fe',
            deptoPais: 'ART'
        },
        {
            deptoId: 141,
            deptoNombre: 'Santiago del Estero',
            deptoPais: 'ART'
        },
        {
            deptoId: 142,
            deptoNombre: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
            deptoPais: 'ART'
        },
        {
            deptoId: 143,
            deptoNombre: 'Tucumán',
            deptoPais: 'ART'
        },
        //ARMENIA
        {
            deptoId: 144,
            deptoNombre: 'Aragatsotn (Արագածոտն)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 145,
            deptoNombre: 'Ararat (Արարատ)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 146,
            deptoNombre: 'Armavir (Արմավիր)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 147,
            deptoNombre: 'Gegharkunik (Գեղարքունիք)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 148,
            deptoNombre: 'Kotayk (Կոտայք)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 149,
            deptoNombre: 'Lorri (Լոռի)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 150,
            deptoNombre: 'Shirak (Շիրակ)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 151,
            deptoNombre: 'Syunik (Սյունիք)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 152,
            deptoNombre: 'Tavush (Տավուշ)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 153,
            deptoNombre: 'Vayots Dzor (Վայոց Ձոր)',
            deptoPais: 'ARM'
        },
        {
            deptoId: 154,
            deptoNombre: 'Yereván (Երևան)',
            deptoPais: 'ARM'
        },
        //AUSTRALIA
        {
            deptoId: 155,
            deptoNombre: 'Australia Meridional ',
            deptoPais: 'AUS'
        },
        {
            deptoId: 156,
            deptoNombre: 'Australia Occidental',
            deptoPais: 'AUS'
        },
        {
            deptoId: 157,
            deptoNombre: 'Nueva Gales del Sur',
            deptoPais: 'AUS'
        },
        {
            deptoId: 158,
            deptoNombre: 'Queensland',
            deptoPais: 'AUS'
        },
        {
            deptoId: 159,
            deptoNombre: 'Victoria',
            deptoPais: 'AUS'
        },
        {
            deptoId: 160,
            deptoNombre: 'Tasmania',
            deptoPais: 'AUS'
        },
        {
            deptoId: 161,
            deptoNombre: 'Territorio de la Capital Australiana',
            deptoPais: 'AUS'
        },
        {
            deptoId: 162,
            deptoNombre: 'Territorio del Norte',
            deptoPais: 'AUS'
        },
        //AZERBAIYÁN
        {
            deptoId: 163,
            deptoNombre: 'Abşeron',
            deptoPais: 'AZE'
        },
        {
            deptoId: 164,
            deptoNombre: 'Aran',
            deptoPais: 'AZE'
        },
        {
            deptoId: 165,
            deptoNombre: 'Daghlig Shirvan',
            deptoPais: 'AZE'
        },
        {
            deptoId: 166,
            deptoNombre: 'Ganja-Qazax',
            deptoPais: 'AZE'
        },
        {
            deptoId: 167,
            deptoNombre: 'Kəlbəcər-Laçın',
            deptoPais: 'AZE'
        },
        {
            deptoId: 168,
            deptoNombre: 'Lənkəran',
            deptoPais: 'AZE'
        },
        {
            deptoId: 169,
            deptoNombre: 'Najicheván',
            deptoPais: 'AZE'
        },
        {
            deptoId: 170,
            deptoNombre: 'Quba-Xaçmaz',
            deptoPais: 'AZE'
        },
        {
            deptoId: 171,
            deptoNombre: 'Şəki-Zaqatala',
            deptoPais: 'AZE'
        },
        {
            deptoId: 172,
            deptoNombre: 'Yukhari Garabaj',
            deptoPais: 'AZE'
        },
        //BAHAMAS
        {
            deptoId: 173,
            deptoNombre: 'Acklins (Mason Bay)',
            deptoPais: 'BA'
        },
        {
            deptoId: 174,
            deptoNombre: 'Islas Berry (Berry Islands)',
            deptoPais: 'BA'
        },
        {
            deptoId: 175,
            deptoNombre: 'Bimini (Alice Town)',
            deptoPais: 'BA'
        },
        {
            deptoId: 176,
            deptoNombre: 'Black Point (Black Point)',
            deptoPais: 'BA'
        },
        {
            deptoId: 177,
            deptoNombre: 'Isla Cat (Cat Island) (The Bight)',
            deptoPais: 'BA'
        },
        {
            deptoId: 178,
            deptoNombre: 'Central Abaco (Marsh Harbour)',
            deptoPais: 'BA'
        },
        {
            deptoId: 179,
            deptoNombre: 'Central Andros (Fresh Creek )',
            deptoPais: 'BA'
        },
        {
            deptoId: 180,
            deptoNombre: "Central Eleuthera (Governor's Harbour)",
            deptoPais: 'BA'
        },
        {
            deptoId: 181,
            deptoNombre: 'Ciudad de Freeport (City of Freeport) (Freeport)',
            deptoPais: 'BA'
        },
        {
            deptoId: 182,
            deptoNombre: 'Isla de Crooked (Crooked Island) (Moss Town, Long Cay)',
            deptoPais: 'BA'
        },
        {
            deptoId: 183,
            deptoNombre: 'East Grand Bahama (High Rock)',
            deptoPais: 'BA'
        },
        {
            deptoId: 184,
            deptoNombre: 'Exuma',
            deptoPais: 'BA'
        },
        {
            deptoId: 185,
            deptoNombre: 'Cayo Grande, Abaco',
            deptoPais: 'BA'
        },
        {
            deptoId: 186,
            deptoNombre: 'Isla Harbour',
            deptoPais: 'BA'
        },
        {
            deptoId: 187,
            deptoNombre: 'Hope Town, Abaco',
            deptoPais: 'BA'
        },
        {
            deptoId: 188,
            deptoNombre: 'Inagua (Matthew Town)',
            deptoPais: 'BA'
        },
        {
            deptoId: 189,
            deptoNombre: 'Isla Larga',
            deptoPais: 'BA'
        },
        {
            deptoId: 190,
            deptoNombre: 'Cayo Mangrove, Andros',
            deptoPais: 'BA'
        },
        {
            deptoId: 191,
            deptoNombre: 'Mayaguana',
            deptoPais: 'BA'
        },
        {
            deptoId: 192,
            deptoNombre: 'Isla de Moore, Abaco',
            deptoPais: 'BA'
        },
        {
            deptoId: 193,
            deptoNombre: 'Abaco Norte',
            deptoPais: 'BA'
        },
        {
            deptoId: 194,
            deptoNombre: 'Andros Norte',
            deptoPais: 'BA'
        },
        {
            deptoId: 195,
            deptoNombre: 'Eleuthera Norte',
            deptoPais: 'BA'
        },
        {
            deptoId: 196,
            deptoNombre: 'Isla Ragged',
            deptoPais: 'BA'
        },
        {
            deptoId: 197,
            deptoNombre: 'Cayo Rum',
            deptoPais: 'BA'
        },
        {
            deptoId: 198,
            deptoNombre: 'San Salvador',
            deptoPais: 'BA'
        },
        {
            deptoId: 199,
            deptoNombre: 'Abaco Sur',
            deptoPais: 'BA'
        },
        {
            deptoId: 200,
            deptoNombre: 'Andros Sur',
            deptoPais: 'BA'
        },
        {
            deptoId: 201,
            deptoNombre: 'Eleuthera Sur ',
            deptoPais: 'BA'
        },
        {
            deptoId: 202,
            deptoNombre: 'Spanish Wells',
            deptoPais: 'BA'
        },
        {
            deptoId: 203,
            deptoNombre: 'West Grand Bahama',
            deptoPais: 'BA'
        },
        {
            deptoId: 204,
            deptoNombre: 'Nueva Providencia',
            deptoPais: 'BA'
        },
        {
            deptoId: 205,
            deptoNombre: 'Placer de los Roques',
            deptoPais: 'BA'
        },
        //BANGLADÉS
        {
            deptoId: 206,
            deptoNombre: 'Borişal',
            deptoPais: 'BAN'
        },
        {
            deptoId: 207,
            deptoNombre: 'Chitagong',
            deptoPais: 'BAN'
        },
        {
            deptoId: 208,
            deptoNombre: 'Daca',
            deptoPais: 'BAN'
        },
        {
            deptoId: 209,
            deptoNombre: 'Khulna',
            deptoPais: 'BAN'
        },
        {
            deptoId: 210,
            deptoNombre: 'Rajshahi',
            deptoPais: 'BAN'
        },
        {
            deptoId: 211,
            deptoNombre: 'Rongpur',
            deptoPais: 'BAN'
        },
        {
            deptoId: 212,
            deptoNombre: 'Silet',
            deptoPais: 'BAN'
        },
        //BARBADOS
        {
            deptoId: 213,
            deptoNombre: 'Parroquia de Christ Church',
            deptoPais: 'BAR'
        },
        {
            deptoId: 214,
            deptoNombre: 'Parroquia de Saint Andrew',
            deptoPais: 'BAR'
        },
        {
            deptoId: 215,
            deptoNombre: 'Parroquia de Saint George',
            deptoPais: 'BAR'
        },
        {
            deptoId: 216,
            deptoNombre: 'Parroquia de Saint James',
            deptoPais: 'BAR'
        },
        {
            deptoId: 217,
            deptoNombre: 'Parroquia de Saint John',
            deptoPais: 'BAR'
        },
        {
            deptoId: 218,
            deptoNombre: 'Parroquia de Saint Joseph',
            deptoPais: 'BAR'
        },
        {
            deptoId: 219,
            deptoNombre: 'Parroquia de Saint Lucy',
            deptoPais: 'BAR'
        },
        {
            deptoId: 220,
            deptoNombre: 'Parroquia de Saint Michael',
            deptoPais: 'BAR'
        },
        {
            deptoId: 221,
            deptoNombre: 'Parroquia de Saint Peter',
            deptoPais: 'BAR'
        },
        {
            deptoId: 222,
            deptoNombre: 'Parroquia de Saint Philip',
            deptoPais: 'BAR'
        },
        {
            deptoId: 223,
            deptoNombre: 'Parroquia de Saint Thomas',
            deptoPais: 'BAR'
        },
        //BARÉIN
        {
            deptoId: 224,
            deptoNombre: 'Capital',
            deptoPais: 'BAE'
        },
        {
            deptoId: 225,
            deptoNombre: 'Central',
            deptoPais: 'BAE'
        },
        {
            deptoId: 226,
            deptoNombre: 'Muharraq',
            deptoPais: 'BAE'
        },
        {
            deptoId: 227,
            deptoNombre: 'Norte',
            deptoPais: 'BAE'
        },
        {
            deptoId: 228,
            deptoNombre: 'Sur',
            deptoPais: 'BAE'
        },
        //BÉLGICA
        {
            deptoId: 229,
            deptoNombre: 'Región de Bruselas',
            deptoPais: 'BEL'
        },
        {
            deptoId: 230,
            deptoNombre: 'Región Flamenca',
            deptoPais: 'BEL'
        },
        {
            deptoId: 231,
            deptoNombre: 'Región Valona',
            deptoPais: 'BEL'
        },
        //BELICE
        {
            deptoId: 232,
            deptoNombre: 'Distrito de Belice',
            deptoPais: 'BEC'
        },
        {
            deptoId: 233,
            deptoNombre: 'Distrito de Cayo',
            deptoPais: 'BEC'
        },
        {
            deptoId: 234,
            deptoNombre: 'Distrito de Corozal',
            deptoPais: 'BEC'
        },
        {
            deptoId: 235,
            deptoNombre: 'Distrito de Orange Walk',
            deptoPais: 'BEC'
        },
        {
            deptoId: 236,
            deptoNombre: 'Distrito de Stann Creek',
            deptoPais: 'BEC'
        },
        {
            deptoId: 237,
            deptoNombre: 'Distrito de Toledo',
            deptoPais: 'BEC'
        },
        //BENÍN
        {
            deptoId: 238,
            deptoNombre: 'Alibori',
            deptoPais: 'BNN'
        },
        {
            deptoId: 239,
            deptoNombre: 'Atakora',
            deptoPais: 'BNN'
        },
        {
            deptoId: 240,
            deptoNombre: 'Atlantique',
            deptoPais: 'BNN'
        },
        {
            deptoId: 241,
            deptoNombre: 'Borgou',
            deptoPais: 'BNN'
        },
        {
            deptoId: 242,
            deptoNombre: 'Collines',
            deptoPais: 'BNN'
        },
        {
            deptoId: 243,
            deptoNombre: 'Donga',
            deptoPais: 'BNN'
        },
        {
            deptoId: 244,
            deptoNombre: 'Kouffo',
            deptoPais: 'BNN'
        },
        {
            deptoId: 245,
            deptoNombre: 'Littoral',
            deptoPais: 'BNN'
        },
        {
            deptoId: 246,
            deptoNombre: 'Mono',
            deptoPais: 'BNN'
        },
        {
            deptoId: 247,
            deptoNombre: 'Ouémé',
            deptoPais: 'BNN'
        },
        {
            deptoId: 248,
            deptoNombre: 'Plateau',
            deptoPais: 'BNN'
        },
        {
            deptoId: 249,
            deptoNombre: 'Zou',
            deptoPais: 'BNN'
        },
        //BIELORRUSIA
        {
            deptoId: 250,
            deptoNombre: 'Brest',
            deptoPais: 'BRR'
        },
        {
            deptoId: 251,
            deptoNombre: 'Ciudad de Minsk',
            deptoPais: 'BRR'
        },
        {
            deptoId: 252,
            deptoNombre: 'Gómel',
            deptoPais: 'BRR'
        },
        {
            deptoId: 253,
            deptoNombre: 'Goradnia',
            deptoPais: 'BRR'
        },
        {
            deptoId: 254,
            deptoNombre: 'Maguiliu',
            deptoPais: 'BRR'
        },
        {
            deptoId: 255,
            deptoNombre: 'Minsk',
            deptoPais: 'BRR'
        },
        {
            deptoId: 256,
            deptoNombre: 'Vítebsk',
            deptoPais: 'BRR'
        },
        //BIRMANIA
        {
            deptoId: 257,
            deptoNombre: 'Región de Ayeyarwady',
            deptoPais: 'BIR'
        },
        {
            deptoId: 258,
            deptoNombre: 'Región de Bago',
            deptoPais: 'BIR'
        },
        {
            deptoId: 259,
            deptoNombre: 'Estado de Chin',
            deptoPais: 'BIR'
        },
        {
            deptoId: 260,
            deptoNombre: 'Estado Kachin',
            deptoPais: 'BIR'
        },
        {
            deptoId: 262,
            deptoNombre: 'Kayin',
            deptoPais: 'BIR'
        },
        {
            deptoId: 263,
            deptoNombre: 'Región de Magway',
            deptoPais: 'BIR'
        },
        {
            deptoId: 264,
            deptoNombre: 'Región de Mandalay',
            deptoPais: 'BIR'
        },
        {
            deptoId: 265,
            deptoNombre: 'Mon',
            deptoPais: 'BIR'
        },
        {
            deptoId: 266,
            deptoNombre: 'Estado de Rakhine',
            deptoPais: 'BIR'
        },
        {
            deptoId: 267,
            deptoNombre: 'Estado Shan',
            deptoPais: 'BIR'
        },
        {
            deptoId: 268,
            deptoNombre: 'Región de Sagaing',
            deptoPais: 'BIR'
        },
        {
            deptoId: 269,
            deptoNombre: 'Región de Tanintharyi',
            deptoPais: 'BIR'
        },
        {
            deptoId: 270,
            deptoNombre: 'Región de Rangún',
            deptoPais: 'BIR'
        },
        {
            deptoId: 271,
            deptoNombre: 'Territorio de la Unión de Naypyidaw',
            deptoPais: 'BIR'
        },
        //BOLIVIA
        {
            deptoId: 272,
            deptoNombre: 'Beni',
            deptoPais: 'BOL'
        },
        {
            deptoId: 273,
            deptoNombre: 'Chuquisaca',
            deptoPais: 'BOL'
        },
        {
            deptoId: 274,
            deptoNombre: 'Cochabamba',
            deptoPais: 'BOL'
        },
        {
            deptoId: 275,
            deptoNombre: 'La Paz',
            deptoPais: 'BOL'
        },
        {
            deptoId: 276,
            deptoNombre: 'Oruro',
            deptoPais: 'BOL'
        },
        {
            deptoId: 277,
            deptoNombre: 'Pando',
            deptoPais: 'BOL'
        },
        {
            deptoId: 278,
            deptoNombre: 'Potosí',
            deptoPais: 'BOL'
        },
        {
            deptoId: 279,
            deptoNombre: 'Santa Cruz',
            deptoPais: 'BOL'
        },
        {
            deptoId: 280,
            deptoNombre: 'Tarija',
            deptoPais: 'BOL'
        },
        //BOSNIA-HERZEGOVINA
        {
            deptoId: 281,
            deptoNombre: 'Federación de Bosnia y Herzegovina',
            deptoPais: 'BSH'
        },
        {
            deptoId: 282,
            deptoNombre: 'República Srpska',
            deptoPais: 'BSH'
        },
        {
            deptoId: 283,
            deptoNombre: 'Distrito de Brčko',
            deptoPais: 'BSH'
        },
        //BOTSUANA
        {
            deptoId: 284,
            deptoNombre: 'Central',
            deptoPais: 'BOT'
        },
        {
            deptoId: 285,
            deptoNombre: 'Ghanzi',
            deptoPais: 'BOT'
        },
        {
            deptoId: 286,
            deptoNombre: 'Kgalagadi',
            deptoPais: 'BOT'
        },
        {
            deptoId: 287,
            deptoNombre: 'Kgatleng',
            deptoPais: 'BOT'
        },
        {
            deptoId: 288,
            deptoNombre: 'Kweneng',
            deptoPais: 'BOT'
        },
        {
            deptoId: 289,
            deptoNombre: 'Noreste',
            deptoPais: 'BOT'
        },
        {
            deptoId: 290,
            deptoNombre: 'Noroeste',
            deptoPais: 'BOT'
        },
        {
            deptoId: 291,
            deptoNombre: 'Sudeste',
            deptoPais: 'BOT'
        },
        {
            deptoId: 292,
            deptoNombre: 'Sur',
            deptoPais: 'BOT'
        },
        //BRASIL
        {
            deptoId: 293,
            deptoNombre: 'Estado de Acre',
            deptoPais: 'BRA'
        },
        {
            deptoId: 294,
            deptoNombre: 'Estado de Alagoas',
            deptoPais: 'BRA'
        },
        {
            deptoId: 295,
            deptoNombre: 'Estado de Amapá',
            deptoPais: 'BRA'
        },
        {
            deptoId: 296,
            deptoNombre: 'Estado de Amazonas ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 297,
            deptoNombre: 'Estado de Bahía',
            deptoPais: 'BRA'
        },
        {
            deptoId: 298,
            deptoNombre: 'Estado de Ceará',
            deptoPais: 'BRA'
        },
        {
            deptoId: 299,
            deptoNombre: 'Estado de Espírito Santo',
            deptoPais: 'BRA'
        },
        {
            deptoId: 300,
            deptoNombre: 'Estado de Goiás',
            deptoPais: 'BRA'
        },
        {
            deptoId: 301,
            deptoNombre: 'Estado de Maranhão ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 302,
            deptoNombre: 'Estado de Mato Grosso ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 303,
            deptoNombre: 'Estado de Mato Grosso del Sur',
            deptoPais: 'BRA'
        },
        {
            deptoId: 304,
            deptoNombre: 'Estado de Minas Gerais',
            deptoPais: 'BRA'
        },
        {
            deptoId: 305,
            deptoNombre: 'Estado de Pará',
            deptoPais: 'BRA'
        },
        {
            deptoId: 306,
            deptoNombre: 'Estado de Paraíba',
            deptoPais: 'BRA'
        },
        {
            deptoId: 307,
            deptoNombre: 'Estado de Paraná',
            deptoPais: 'BRA'
        },
        {
            deptoId: 308,
            deptoNombre: 'Estado de Pernambuco ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 309,
            deptoNombre: 'Estado de Piauí',
            deptoPais: 'BRA'
        },
        {
            deptoId: 310,
            deptoNombre: 'Estado de Río de Janeiro',
            deptoPais: 'BRA'
        },
        {
            deptoId: 311,
            deptoNombre: 'Estado de Río Grande del Norte ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 312,
            deptoNombre: 'Estado de Río Grande del Sur',
            deptoPais: 'BRA'
        },
        {
            deptoId: 313,
            deptoNombre: 'Estado de Rondônia ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 314,
            deptoNombre: 'Estado de Roraima ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 315,
            deptoNombre: 'Estado de Santa Catarina ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 316,
            deptoNombre: 'Estado de São Paulo ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 317,
            deptoNombre: 'Estado de Sergipe',
            deptoPais: 'BRA'
        },
        {
            deptoId: 318,
            deptoNombre: 'Estado de Tocantins ',
            deptoPais: 'BRA'
        },
        {
            deptoId: 319,
            deptoNombre: 'Distrito Federal',
            deptoPais: 'BRA'
        },
        //BRUNÉI
        {
            deptoId: 320,
            deptoNombre: 'Belait (Kuala Belait)',
            deptoPais: 'BRU'
        },
        {
            deptoId: 321,
            deptoNombre: 'Brunéi y Muara (Bandar Seri Begawan)',
            deptoPais: 'BRU'
        },
        {
            deptoId: 322,
            deptoNombre: 'Temburong (Bangar)',
            deptoPais: 'BRU'
        },
        {
            deptoId: 323,
            deptoNombre: 'Tutong (Tutong)',
            deptoPais: 'BRU'
        },
        //BULGARIA
        {
            deptoId: 324,
            deptoNombre: 'Blagoevgrad',
            deptoPais: 'BUL'
        },
        {
            deptoId: 325,
            deptoNombre: 'Burgas',
            deptoPais: 'BUL'
        },
        {
            deptoId: 326,
            deptoNombre: 'Dobrich',
            deptoPais: 'BUL'
        },
        {
            deptoId: 327,
            deptoNombre: 'Gabrovo',
            deptoPais: 'BUL'
        },
        {
            deptoId: 328,
            deptoNombre: 'Haskovo',
            deptoPais: 'BUL'
        },
        {
            deptoId: 329,
            deptoNombre: 'Kardzhali',
            deptoPais: 'BUL'
        },
        {
            deptoId: 330,
            deptoNombre: 'Kyustendil',
            deptoPais: 'BUL'
        },
        {
            deptoId: 331,
            deptoNombre: 'Lovech',
            deptoPais: 'BUL'
        },
        {
            deptoId: 332,
            deptoNombre: 'Montana',
            deptoPais: 'BUL'
        },
        {
            deptoId: 333,
            deptoNombre: 'Pazardzhik',
            deptoPais: 'BUL'
        },
        {
            deptoId: 334,
            deptoNombre: 'Pernik',
            deptoPais: 'BUL'
        },
        {
            deptoId: 335,
            deptoNombre: 'Pleven',
            deptoPais: 'BUL'
        },
        {
            deptoId: 336,
            deptoNombre: 'Plovdiv',
            deptoPais: 'BUL'
        },
        {
            deptoId: 337,
            deptoNombre: 'Razgrad',
            deptoPais: 'BUL'
        },
        {
            deptoId: 338,
            deptoNombre: 'Ruse',
            deptoPais: 'BUL'
        },
        {
            deptoId: 339,
            deptoNombre: 'Shumen',
            deptoPais: 'BUL'
        },
        {
            deptoId: 340,
            deptoNombre: 'Silistra',
            deptoPais: 'BUL'
        },
        {
            deptoId: 341,
            deptoNombre: 'Sliven',
            deptoPais: 'BUL'
        },
        {
            deptoId: 342,
            deptoNombre: 'Smolyan',
            deptoPais: 'BUL'
        },
        {
            deptoId: 343,
            deptoNombre: 'Sofía',
            deptoPais: 'BUL'
        },
        {
            deptoId: 344,
            deptoNombre: 'Sofía-Ciudad',
            deptoPais: 'BUL'
        },
        {
            deptoId: 345,
            deptoNombre: 'Stara Zagora',
            deptoPais: 'BUL'
        },
        {
            deptoId: 346,
            deptoNombre: 'Targovishte',
            deptoPais: 'BUL'
        },
        {
            deptoId: 347,
            deptoNombre: 'Veliko Tarnovo',
            deptoPais: 'BUL'
        },
        {
            deptoId: 348,
            deptoNombre: 'Varna',
            deptoPais: 'BUL'
        },
        {
            deptoId: 349,
            deptoNombre: 'Vidin',
            deptoPais: 'BUL'
        },
        {
            deptoId: 350,
            deptoNombre: 'Vratsa',
            deptoPais: 'BUL'
        },
        {
            deptoId: 351,
            deptoNombre: 'Yambol',
            deptoPais: 'BUL'
        },
        //BURKINA FASO
        {
            deptoId: 352,
            deptoNombre: 'Boucle du Mouhoun (Dédougou)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 353,
            deptoNombre: 'Cascades (Banfora)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 354,
            deptoNombre: 'Centro (Uagadugú)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 355,
            deptoNombre: 'Centro-Este (Tenkodogo)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 356,
            deptoNombre: 'Centro-Norte (Kaya)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 357,
            deptoNombre: 'Centro-Oeste (Koudougou)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 358,
            deptoNombre: 'Centro-Sur (Manga)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 359,
            deptoNombre: "Este (Fada N'gourma)",
            deptoPais: 'BUK'
        },
        {
            deptoId: 360,
            deptoNombre: 'Hauts-Bassins (Bobo Dioulasso)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 361,
            deptoNombre: 'Norte (Ouahigouya)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 362,
            deptoNombre: 'Plateau-Central (Ziniaré)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 363,
            deptoNombre: 'Sahel (Dori)',
            deptoPais: 'BUK'
        },
        {
            deptoId: 364,
            deptoNombre: 'Suroeste (Gaoua)',
            deptoPais: 'BUK'
        },
        //BURUNDI
        {
            deptoId: 365,
            deptoNombre: 'Bubanza',
            deptoPais: 'BUR'
        },
        {
            deptoId: 366,
            deptoNombre: 'Buyumbura Mairie',
            deptoPais: 'BUR'
        },
        {
            deptoId: 367,
            deptoNombre: 'Buyumbura Rural',
            deptoPais: 'BUR'
        },
        {
            deptoId: 368,
            deptoNombre: 'Bururi',
            deptoPais: 'BUR'
        },
        {
            deptoId: 369,
            deptoNombre: 'Cankuzo',
            deptoPais: 'BUR'
        },
        {
            deptoId: 370,
            deptoNombre: 'Cibitoke',
            deptoPais: 'BUR'
        },
        {
            deptoId: 371,
            deptoNombre: 'Gitega',
            deptoPais: 'BUR'
        },
        {
            deptoId: 372,
            deptoNombre: 'Karuzi',
            deptoPais: 'BUR'
        },
        {
            deptoId: 373,
            deptoNombre: 'Kayanza',
            deptoPais: 'BUR'
        },
        {
            deptoId: 374,
            deptoNombre: 'Kirundo',
            deptoPais: 'BUR'
        },
        {
            deptoId: 375,
            deptoNombre: 'Makamba',
            deptoPais: 'BUR'
        },
        {
            deptoId: 376,
            deptoNombre: 'Muramvya',
            deptoPais: 'BUR'
        },
        {
            deptoId: 377,
            deptoNombre: 'Muyinga',
            deptoPais: 'BUR'
        },
        {
            deptoId: 378,
            deptoNombre: 'Mwaro',
            deptoPais: 'BUR'
        },
        {
            deptoId: 379,
            deptoNombre: 'Ngozi',
            deptoPais: 'BUR'
        },
        {
            deptoId: 380,
            deptoNombre: 'Rutana',
            deptoPais: 'BUR'
        },
        {
            deptoId: 381,
            deptoNombre: 'Ruyigi',
            deptoPais: 'BUR'
        },
        //BUTÁN
        {
            deptoId: 382,
            deptoNombre: 'Zona Central',
            deptoPais: 'BUT'
        },
        {
            deptoId: 383,
            deptoNombre: 'Zona Este',
            deptoPais: 'BUT'
        },
        {
            deptoId: 384,
            deptoNombre: 'Zona Oeste',
            deptoPais: 'BUT'
        },
        {
            deptoId: 385,
            deptoNombre: 'Zona Sur',
            deptoPais: 'BUT'
        },
        //CABO VERDE
        {
            deptoId: 386,
            deptoNombre: 'Boavista',
            deptoPais: 'CAV'
        },
        {
            deptoId: 387,
            deptoNombre: 'Brava',
            deptoPais: 'CAV'
        },
        {
            deptoId: 388,
            deptoNombre: 'Fogo',
            deptoPais: 'CAV'
        },
        {
            deptoId: 389,
            deptoNombre: 'Maio',
            deptoPais: 'CAV'
        },
        {
            deptoId: 390,
            deptoNombre: 'Sal',
            deptoPais: 'CAV'
        },
        {
            deptoId: 391,
            deptoNombre: 'Santa Luzia',
            deptoPais: 'CAV'
        },
        {
            deptoId: 392,
            deptoNombre: 'Santiago',
            deptoPais: 'CAV'
        },
        {
            deptoId: 393,
            deptoNombre: 'Santo Antão',
            deptoPais: 'CAV'
        },
        {
            deptoId: 394,
            deptoNombre: 'São Nicolau',
            deptoPais: 'CAV'
        },
        {
            deptoId: 395,
            deptoNombre: 'São Vicente',
            deptoPais: 'CAV'
        },
        //CAMBOYA
        {
            deptoId: 396,
            deptoNombre: 'Banteay Mean Chey',
            deptoPais: 'CAM'
        },
        {
            deptoId: 397,
            deptoNombre: 'Battambang',
            deptoPais: 'CAM'
        },
        {
            deptoId: 398,
            deptoNombre: 'Kampong Cham',
            deptoPais: 'CAM'
        },
        {
            deptoId: 399,
            deptoNombre: 'Kampong Chhnang',
            deptoPais: 'CAM'
        },
        {
            deptoId: 400,
            deptoNombre: 'Kampong Speu',
            deptoPais: 'CAM'
        },
        {
            deptoId: 401,
            deptoNombre: 'Kampong Thom',
            deptoPais: 'CAM'
        },
        {
            deptoId: 402,
            deptoNombre: 'Kampot',
            deptoPais: 'CAM'
        },
        {
            deptoId: 403,
            deptoNombre: 'Kandal',
            deptoPais: 'CAM'
        },
        {
            deptoId: 404,
            deptoNombre: 'Koh Kong',
            deptoPais: 'CAM'
        },
        {
            deptoId: 405,
            deptoNombre: 'Kratié',
            deptoPais: 'CAM'
        },
        {
            deptoId: 406,
            deptoNombre: 'Mondulkiri',
            deptoPais: 'CAM'
        },
        {
            deptoId: 407,
            deptoNombre: 'Oddar Meancheay',
            deptoPais: 'CAM'
        },
        {
            deptoId: 408,
            deptoNombre: 'Preah Vihear',
            deptoPais: 'CAM'
        },
        {
            deptoId: 409,
            deptoNombre: 'Pursat',
            deptoPais: 'CAM'
        },
        {
            deptoId: 410,
            deptoNombre: 'Prey Veng',
            deptoPais: 'CAM'
        },
        {
            deptoId: 411,
            deptoNombre: 'Ratanakiri',
            deptoPais: 'CAM'
        },
        {
            deptoId: 412,
            deptoNombre: 'Siem Reap',
            deptoPais: 'CAM'
        },
        {
            deptoId: 413,
            deptoNombre: 'Stung Treng',
            deptoPais: 'CAM'
        },
        {
            deptoId: 414,
            deptoNombre: 'Svay Rieng',
            deptoPais: 'CAM'
        },
        {
            deptoId: 415,
            deptoNombre: 'Takéo',
            deptoPais: 'CAM'
        },
        {
            deptoId: 416,
            deptoNombre: 'Kep',
            deptoPais: 'CAM'
        },
        {
            deptoId: 417,
            deptoNombre: 'Pailin',
            deptoPais: 'CAM'
        },
        {
            deptoId: 418,
            deptoNombre: 'Phnom Penh',
            deptoPais: 'CAM'
        },
        {
            deptoId: 419,
            deptoNombre: 'Preah Sihanouk',
            deptoPais: 'CAM'
        },
        //CAMERÚN
        {
            deptoId: 420,
            deptoNombre: 'Adamawa',
            deptoPais: 'CAU'
        },
        {
            deptoId: 421,
            deptoNombre: 'Centro',
            deptoPais: 'CAU'
        },
        {
            deptoId: 422,
            deptoNombre: 'Este',
            deptoPais: 'CAU'
        },
        {
            deptoId: 423,
            deptoNombre: 'Extremo Norte',
            deptoPais: 'CAU'
        },
        {
            deptoId: 424,
            deptoNombre: 'Litoral',
            deptoPais: 'CAU'
        },
        {
            deptoId: 425,
            deptoNombre: 'Norte',
            deptoPais: 'CAU'
        },
        {
            deptoId: 426,
            deptoNombre: 'Noroeste',
            deptoPais: 'CAU'
        },
        {
            deptoId: 427,
            deptoNombre: 'Sur',
            deptoPais: 'CAU'
        },
        {
            deptoId: 428,
            deptoNombre: 'Sudoeste',
            deptoPais: 'CAU'
        },
        {
            deptoId: 429,
            deptoNombre: 'Oeste',
            deptoPais: 'CAU'
        },
        //CANADÁ
        {
            deptoId: 430,
            deptoNombre: 'Alberta ',
            deptoPais: 'CAN'
        },
        {
            deptoId: 431,
            deptoNombre: 'Columbia Británica',
            deptoPais: 'CAN'
        },
        {
            deptoId: 432,
            deptoNombre: 'Isla del Príncipe Eduardo',
            deptoPais: 'CAN'
        },
        {
            deptoId: 433,
            deptoNombre: 'Manitoba',
            deptoPais: 'CAN'
        },
        {
            deptoId: 434,
            deptoNombre: 'Nueva Escocia',
            deptoPais: 'CAN'
        },
        {
            deptoId: 435,
            deptoNombre: 'Nuevo Brunswick',
            deptoPais: 'CAN'
        },
        {
            deptoId: 436,
            deptoNombre: 'Nunavut',
            deptoPais: 'CAN'
        },
        {
            deptoId: 437,
            deptoNombre: 'Ontario',
            deptoPais: 'CAN'
        },
        {
            deptoId: 438,
            deptoNombre: 'Quebec',
            deptoPais: 'CAN'
        },
        {
            deptoId: 439,
            deptoNombre: 'Saskatchewan',
            deptoPais: 'CAN'
        },
        {
            deptoId: 440,
            deptoNombre: 'Terranova y Labrador',
            deptoPais: 'CAN'
        },
        {
            deptoId: 441,
            deptoNombre: 'Territorios del Noroeste',
            deptoPais: 'CAN'
        },
        {
            deptoId: 442,
            deptoNombre: 'Yukón',
            deptoPais: 'CAN'
        },
        //CATAR
        {
            deptoId: 443,
            deptoNombre: 'Al Daayen',
            deptoPais: 'CAT'
        },
        {
            deptoId: 444,
            deptoNombre: 'Al Khor',
            deptoPais: 'CAT'
        },
        {
            deptoId: 445,
            deptoNombre: 'Ar Rayyan',
            deptoPais: 'CAT'
        },
        {
            deptoId: 446,
            deptoNombre: 'Al Wakrah',
            deptoPais: 'CAT'
        },
        {
            deptoId: 447,
            deptoNombre: 'Doha',
            deptoPais: 'CAT'
        },
        {
            deptoId: 448,
            deptoNombre: 'Madinat ash Shamal',
            deptoPais: 'CAT'
        },
        {
            deptoId: 449,
            deptoNombre: 'Umm Salal',
            deptoPais: 'CAT'
        },
        //CHAD
        {
            deptoId: 450,
            deptoNombre: 'Batha',
            deptoPais: 'CHA'
        },
        {
            deptoId: 451,
            deptoNombre: 'Chari-Baguirmi',
            deptoPais: 'CHA'
        },
        //{
        //    deptoId: 452,
        //    deptoNombre: 'Hadjer-Lamis',
        //    deptoPais: 'CHA'
        //},
        {
            deptoId: 453,
            deptoNombre: 'Hadjer-Lamis',
            deptoPais: 'CHA'
        },
        {
            deptoId: 454,
            deptoNombre: 'Wadi Fira',
            deptoPais: 'CHA'
        },
        {
            deptoId: 455,
            deptoNombre: 'Barh El Gazel',
            deptoPais: 'CHA'
        },
        {
            deptoId: 456,
            deptoNombre: 'Borkou',
            deptoPais: 'CHA'
        },
        {
            deptoId: 457,
            deptoNombre: 'Ennedi',
            deptoPais: 'CHA'
        },
        {
            deptoId: 458,
            deptoNombre: 'Guéra',
            deptoPais: 'CHA'
        },
        {
            deptoId: 459,
            deptoNombre: 'Kanem',
            deptoPais: 'CHA'
        },
        {
            deptoId: 460,
            deptoNombre: 'Lac',
            deptoPais: 'CHA'
        },
        {
            deptoId: 461,
            deptoNombre: 'Logone Occidental',
            deptoPais: 'CHA'
        },
        {
            deptoId: 462,
            deptoNombre: 'Logone Oriental',
            deptoPais: 'CHA'
        },
        {
            deptoId: 463,
            deptoNombre: 'Mandoul',
            deptoPais: 'CHA'
        },
        {
            deptoId: 464,
            deptoNombre: 'Mayo-Kebbi Este',
            deptoPais: 'CHA'
        },
        {
            deptoId: 465,
            deptoNombre: 'Mayo-Kebbi Oeste',
            deptoPais: 'CHA'
        },
        {
            deptoId: 466,
            deptoNombre: 'Moyen-Chari',
            deptoPais: 'CHA'
        },
        {
            deptoId: 467,
            deptoNombre: 'Ouaddaï',
            deptoPais: 'CHA'
        },
        {
            deptoId: 468,
            deptoNombre: 'Salamat',
            deptoPais: 'CHA'
        },
        {
            deptoId: 469,
            deptoNombre: 'Sila',
            deptoPais: 'CHA'
        },
        {
            deptoId: 470,
            deptoNombre: 'Tandjilé',
            deptoPais: 'CHA'
        },
        {
            deptoId: 471,
            deptoNombre: 'Tibesti',
            deptoPais: 'CHA'
        },
        {
            deptoId: 472,
            deptoNombre: 'Ndjamena',
            deptoPais: 'CHA'
        },
        //CHILE
        {
            deptoId: 473,
            deptoNombre: 'Antofagasta',
            deptoPais: 'CHI'
        },
        {
            deptoId: 474,
            deptoNombre: 'Araucanía',
            deptoPais: 'CHI'
        },
        {
            deptoId: 475,
            deptoNombre: 'Arica y Parinacota',
            deptoPais: 'CHI'
        },
        {
            deptoId: 476,
            deptoNombre: 'Atacama',
            deptoPais: 'CHI'
        },
        {
            deptoId: 477,
            deptoNombre: 'Aysén del General Carlos Ibáñez del Campo',
            deptoPais: 'CHI'
        },
        {
            deptoId: 478,
            deptoNombre: 'Biobío',
            deptoPais: 'CHI'
        },
        {
            deptoId: 479,
            deptoNombre: 'Coquimbo',
            deptoPais: 'CHI'
        },
        {
            deptoId: 480,
            deptoNombre: "Libertador General Bernardo O'Higgins",
            deptoPais: 'CHI'
        },
        {
            deptoId: 481,
            deptoNombre: 'Los Lagos',
            deptoPais: 'CHI'
        },
        {
            deptoId: 482,
            deptoNombre: 'Los Ríos',
            deptoPais: 'CHI'
        },
        {
            deptoId: 483,
            deptoNombre: 'Magallanes y de la Antártica Chilena',
            deptoPais: 'CHI'
        },
        {
            deptoId: 484,
            deptoNombre: 'Maule',
            deptoPais: 'CHI'
        },
        {
            deptoId: 485,
            deptoNombre: 'Metropolitana de Santiago',
            deptoPais: 'CHI'
        },
        {
            deptoId: 486,
            deptoNombre: 'Tarapacá',
            deptoPais: 'CHI'
        },
        {
            deptoId: 487,
            deptoNombre: 'Valparaíso',
            deptoPais: 'CHI'
        },
        //CHINA
        {
            deptoId: 488,
            deptoNombre: 'Anhui',
            deptoPais: 'CHN'
        },
        {
            deptoId: 489,
            deptoNombre: 'Chongqing',
            deptoPais: 'CHN'
        },
        {
            deptoId: 490,
            deptoNombre: 'Fujian',
            deptoPais: 'CHN'
        },
        {
            deptoId: 491,
            deptoNombre: 'Gansu',
            deptoPais: 'CHN'
        },
        {
            deptoId: 492,
            deptoNombre: 'Guangdong',
            deptoPais: 'CHN'
        },
        {
            deptoId: 493,
            deptoNombre: 'Guangxi',
            deptoPais: 'CHN'
        },
        {
            deptoId: 494,
            deptoNombre: 'Guizhou',
            deptoPais: 'CHN'
        },
        {
            deptoId: 495,
            deptoNombre: 'Hainan',
            deptoPais: 'CHN'
        },
        {
            deptoId: 496,
            deptoNombre: 'Hebei',
            deptoPais: 'CHN'
        },
        {
            deptoId: 497,
            deptoNombre: 'Heilongjiang',
            deptoPais: 'CHN'
        },
        {
            deptoId: 498,
            deptoNombre: 'Henan',
            deptoPais: 'CHN'
        },
        {
            deptoId: 499,
            deptoNombre: 'Hong Kong',
            deptoPais: 'CHN'
        },
        {
            deptoId: 500,
            deptoNombre: 'Hubei',
            deptoPais: 'CHN'
        },
        {
            deptoId: 501,
            deptoNombre: 'Hunan',
            deptoPais: 'CHN'
        },
        {
            deptoId: 502,
            deptoNombre: 'Jiangsu',
            deptoPais: 'CHN'
        },
        {
            deptoId: 503,
            deptoNombre: 'Jiangxi',
            deptoPais: 'CHN'
        },
        {
            deptoId: 504,
            deptoNombre: 'Jilin',
            deptoPais: 'CHN'
        },
        {
            deptoId: 505,
            deptoNombre: 'Liaoning',
            deptoPais: 'CHN'
        },
        {
            deptoId: 506,
            deptoNombre: 'Macao',
            deptoPais: 'CHN'
        },
        {
            deptoId: 507,
            deptoNombre: 'Mongolia Interior',
            deptoPais: 'CHN'
        },
        {
            deptoId: 508,
            deptoNombre: 'Ningxia',
            deptoPais: 'CHN'
        },
        {
            deptoId: 509,
            deptoNombre: 'Pekín',
            deptoPais: 'CHN'
        },
        {
            deptoId: 510,
            deptoNombre: 'Qinghai',
            deptoPais: 'CHN'
        },
        {
            deptoId: 511,
            deptoNombre: 'Shaanxi',
            deptoPais: 'CHN'
        },
        {
            deptoId: 512,
            deptoNombre: 'Shandong',
            deptoPais: 'CHN'
        },
        {
            deptoId: 513,
            deptoNombre: 'Shanghái',
            deptoPais: 'CHN'
        },
        {
            deptoId: 514,
            deptoNombre: 'Shanxi',
            deptoPais: 'CHN'
        },
        {
            deptoId: 515,
            deptoNombre: 'Sichuan',
            deptoPais: 'CHN'
        },
        {
            deptoId: 516,
            deptoNombre: 'Taiwán',
            deptoPais: 'CHN'
        },
        {
            deptoId: 517,
            deptoNombre: 'Tianjin',
            deptoPais: 'CHN'
        },
        {
            deptoId: 518,
            deptoNombre: 'Tíbet',
            deptoPais: 'CHN'
        },
        {
            deptoId: 519,
            deptoNombre: 'Xinjiang',
            deptoPais: 'CHN'
        },
        {
            deptoId: 520,
            deptoNombre: 'Yunnan',
            deptoPais: 'CHN'
        },
        {
            deptoId: 521,
            deptoNombre: 'Zhejiang',
            deptoPais: 'CHN'
        },
        //CHIPRE
        {
            deptoId: 522,
            deptoNombre: 'Distrito de Famagusta',
            deptoPais: 'CHP'
        },
        {
            deptoId: 523,
            deptoNombre: 'Distrito de Kyrenia',
            deptoPais: 'CHP'
        },
        {
            deptoId: 524,
            deptoNombre: 'Distrito de Lárnaca',
            deptoPais: 'CHP'
        },
        {
            deptoId: 525,
            deptoNombre: 'Distrito de Limassol',
            deptoPais: 'CHP'
        },
        {
            deptoId: 526,
            deptoNombre: 'Distrito de Nicosia',
            deptoPais: 'CHP'
        },
        {
            deptoId: 527,
            deptoNombre: 'Distrito de Pafos',
            deptoPais: 'CHP'
        },
        //COLOMBIA
        {
            deptoId: 528,
            deptoNombre: 'Antioquia',
            deptoPais: 'COL'
        },
        {
            deptoId: 529,
            deptoNombre: 'Bogotá (D. F.)',
            deptoPais: 'COL'
        },
        {
            deptoId: 530,
            deptoNombre: 'Bolívar',
            deptoPais: 'COL'
        },
        {
            deptoId: 531,
            deptoNombre: 'Boyacá',
            deptoPais: 'COL'
        },
        {
            deptoId: 532,
            deptoNombre: 'Cauca',
            deptoPais: 'COL'
        },
        {
            deptoId: 533,
            deptoNombre: 'Cundinamarca',
            deptoPais: 'COL'
        },
        {
            deptoId: 534,
            deptoNombre: 'Magdalena',
            deptoPais: 'COL'
        },
        {
            deptoId: 535,
            deptoNombre: 'Santander',
            deptoPais: 'COL'
        },
        {
            deptoId: 536,
            deptoNombre: 'Tolima',
            deptoPais: 'COL'
        },
        //COMORAS
        {
            deptoId: 537,
            deptoNombre: 'Gran Comora',
            deptoPais: 'COR'
        },
        {
            deptoId: 538,
            deptoNombre: 'Anjouan',
            deptoPais: 'COR'
        },
        {
            deptoId: 539,
            deptoNombre: 'Mohéli',
            deptoPais: 'COR'
        },
        //CONGO
        {
            deptoId: 540,
            deptoNombre: 'Kinshasa',
            deptoPais: 'COG'
        },
        {
            deptoId: 541,
            deptoNombre: 'Congo Central',
            deptoPais: 'COG'
        },
        {
            deptoId: 542,
            deptoNombre: 'Kwango',
            deptoPais: 'COG'
        },
        {
            deptoId: 543,
            deptoNombre: 'Kwilu',
            deptoPais: 'COG'
        },
        {
            deptoId: 544,
            deptoNombre: 'Mai-Ndombe',
            deptoPais: 'COG'
        },
        {
            deptoId: 545,
            deptoNombre: 'Kasaï',
            deptoPais: 'COG'
        },
        {
            deptoId: 546,
            deptoNombre: 'Lulua',
            deptoPais: 'COG'
        },
        {
            deptoId: 547,
            deptoNombre: 'Kasaï Oriental',
            deptoPais: 'COG'
        },
        {
            deptoId: 548,
            deptoNombre: 'Lomami',
            deptoPais: 'COG'
        },
        {
            deptoId: 549,
            deptoNombre: 'Sankuru',
            deptoPais: 'COG'
        },
        {
            deptoId: 550,
            deptoNombre: 'Maniema',
            deptoPais: 'COG'
        },
        {
            deptoId: 551,
            deptoNombre: 'Kivu del Sur',
            deptoPais: 'COG'
        },
        {
            deptoId: 552,
            deptoNombre: 'Kivu del Norte',
            deptoPais: 'COG'
        },
        {
            deptoId: 553,
            deptoNombre: 'Ituri',
            deptoPais: 'COG'
        },
        {
            deptoId: 554,
            deptoNombre: 'Alto Uele',
            deptoPais: 'COG'
        },
        {
            deptoId: 555,
            deptoNombre: 'Tshopo',
            deptoPais: 'COG'
        },
        {
            deptoId: 556,
            deptoNombre: 'Bajo Uele',
            deptoPais: 'COG'
        },
        {
            deptoId: 557,
            deptoNombre: 'Ubangi del Norte',
            deptoPais: 'COG'
        },
        {
            deptoId: 558,
            deptoNombre: 'Mongala',
            deptoPais: 'COG'
        },
        {
            deptoId: 559,
            deptoNombre: 'Ubangi del Su',
            deptoPais: 'COG'
        },
        {
            deptoId: 560,
            deptoNombre: 'Équateur',
            deptoPais: 'COG'
        },
        {
            deptoId: 561,
            deptoNombre: 'Tshuapa',
            deptoPais: 'COG'
        },
        {
            deptoId: 562,
            deptoNombre: 'Tanganyika',
            deptoPais: 'COG'
        },
        {
            deptoId: 563,
            deptoNombre: 'Alto Lomami',
            deptoPais: 'COG'
        },
        {
            deptoId: 564,
            deptoNombre: 'Lualaba',
            deptoPais: 'COG'
        },
        {
            deptoId: 565,
            deptoNombre: 'Alto Katanga',
            deptoPais: 'COG'
        },
        //COREA DEL NORTE
        {
            deptoId: 566,
            deptoNombre: 'Pionyang',
            deptoPais: 'CNO'
        },
        {
            deptoId: 567,
            deptoNombre: 'Rasŏn',
            deptoPais: 'CNO'
        },
        {
            deptoId: 568,
            deptoNombre: 'Sinŭiju',
            deptoPais: 'CNO'
        },
        {
            deptoId: 569,
            deptoNombre: 'Kaesong',
            deptoPais: 'CNO'
        },
        {
            deptoId: 570,
            deptoNombre: 'Kŭmgangsan',
            deptoPais: 'CNO'
        },
        {
            deptoId: 571,
            deptoNombre: "P'yŏngan del Sur",
            deptoPais: 'CNO'
        },
        {
            deptoId: 572,
            deptoNombre: "P'yŏngan del Norte",
            deptoPais: 'CNO'
        },
        {
            deptoId: 573,
            deptoNombre: 'Chagang',
            deptoPais: 'CNO'
        },
        {
            deptoId: 574,
            deptoNombre: 'Hwanghae del Sur',
            deptoPais: 'CNO'
        },
        {
            deptoId: 575,
            deptoNombre: 'Hwanghae del Norte',
            deptoPais: 'CNO'
        },
        {
            deptoId: 576,
            deptoNombre: 'Kangwon',
            deptoPais: 'CNO'
        },
        {
            deptoId: 577,
            deptoNombre: 'Hamgyŏng del Sur',
            deptoPais: 'CNO'
        },
        {
            deptoId: 578,
            deptoNombre: 'Hamgyŏng del Norte',
            deptoPais: 'CNO'
        },
        {
            deptoId: 579,
            deptoNombre: 'Ryanggang',
            deptoPais: 'CNO'
        },
        //COREA DEL SUR
        {
            deptoId: 580,
            deptoNombre: ' Seúl',
            deptoPais: 'CSU'
        },
        {
            deptoId: 581,
            deptoNombre: 'Daejeon',
            deptoPais: 'CSU'
        },
        {
            deptoId: 582,
            deptoNombre: 'Gwangju',
            deptoPais: 'CSU'
        },
        {
            deptoId: 583,
            deptoNombre: 'Incheon',
            deptoPais: 'CSU'
        },
        {
            deptoId: 584,
            deptoNombre: 'Busán',
            deptoPais: 'CSU'
        },
        {
            deptoId: 585,
            deptoNombre: 'Daegu',
            deptoPais: 'CSU'
        },
        {
            deptoId: 586,
            deptoNombre: 'Ulsan',
            deptoPais: 'CSU'
        },
        {
            deptoId: 587,
            deptoNombre: 'Jeju',
            deptoPais: 'CSU'
        },
        //COSTA DE MARFIL
        {
            deptoId: 588,
            deptoNombre: 'Denguélé',
            deptoPais: 'CMA'
        },
        {
            deptoId: 589,
            deptoNombre: 'Savanes',
            deptoPais: 'CMA'
        },
        {
            deptoId: 590,
            deptoNombre: 'Bafing',
            deptoPais: 'CMA'
        },
        {
            deptoId: 591,
            deptoNombre: 'Worodougou',
            deptoPais: 'CMA'
        },
        {
            deptoId: 592,
            deptoNombre: 'Vallée du Bandama',
            deptoPais: 'CMA'
        },
        {
            deptoId: 593,
            deptoNombre: 'Zanzan',
            deptoPais: 'CMA'
        },
        {
            deptoId: 594,
            deptoNombre: 'Dix-Huit Montagnes',
            deptoPais: 'CMA'
        },
        {
            deptoId: 595,
            deptoNombre: 'Haut-Sassandra',
            deptoPais: 'CMA'
        },
        {
            deptoId: 596,
            deptoNombre: 'Marahoué',
            deptoPais: 'CMA'
        },
        {
            deptoId: 597,
            deptoNombre: 'Lacs',
            deptoPais: 'CMA'
        },
        {
            deptoId: 598,
            deptoNombre: "N'zi-Comoé",
            deptoPais: 'CMA'
        },
        {
            deptoId: 599,
            deptoNombre: 'Moyen-Comoé',
            deptoPais: 'CMA'
        },
        {
            deptoId: 600,
            deptoNombre: 'Moyen-Cavally',
            deptoPais: 'CMA'
        },
        {
            deptoId: 601,
            deptoNombre: 'Fromager',
            deptoPais: 'CMA'
        },
        {
            deptoId: 602,
            deptoNombre: 'Agnéby',
            deptoPais: 'CMA'
        },
        {
            deptoId: 603,
            deptoNombre: 'Bas-Sassandra',
            deptoPais: 'CMA'
        },
        {
            deptoId: 604,
            deptoNombre: 'Sud-Bandama',
            deptoPais: 'CMA'
        },
        {
            deptoId: 605,
            deptoNombre: 'Lagunes',
            deptoPais: 'CMA'
        },
        {
            deptoId: 606,
            deptoNombre: 'Sud-Comoé',
            deptoPais: 'CMA'
        },
        //CRI
        {
            deptoId: 607,
            deptoNombre: 'San José',
            deptoPais: 'CRI'
        },
        {
            deptoId: 608,
            deptoNombre: 'Alajuela',
            deptoPais: 'CRI'
        },
        {
            deptoId: 609,
            deptoNombre: 'Cartago',
            deptoPais: 'CRI'
        },
        {
            deptoId: 610,
            deptoNombre: 'Heredia',
            deptoPais: 'CRI'
        },
        {
            deptoId: 611,
            deptoNombre: 'Guanacaste',
            deptoPais: 'CRI'
        },
        {
            deptoId: 612,
            deptoNombre: 'Puntarenas',
            deptoPais: 'CRI'
        },
        {
            deptoId: 613,
            deptoNombre: ' Limón',
            deptoPais: 'CRI'
        },
        //CROACIA
        {
            deptoId: 614,
            deptoNombre: 'Condado de Zagreb',
            deptoPais: 'CRO'
        },
        {
            deptoId: 615,
            deptoNombre: 'Condado de Krapina-Zagorje',
            deptoPais: 'CRO'
        },
        {
            deptoId: 616,
            deptoNombre: 'Condado de Sisak-Moslavina',
            deptoPais: 'CRO'
        },
        {
            deptoId: 617,
            deptoNombre: 'Condado de Karlovac',
            deptoPais: 'CRO'
        },
        {
            deptoId: 618,
            deptoNombre: 'Condado de Varaždin',
            deptoPais: 'CRO'
        },
        {
            deptoId: 619,
            deptoNombre: 'Condado de Koprivnica-Križevci',
            deptoPais: 'CRO'
        },
        {
            deptoId: 620,
            deptoNombre: 'Condado de Bjelovar-Bilogora',
            deptoPais: 'CRO'
        },
        {
            deptoId: 621,
            deptoNombre: 'Condado de Primorje-Gorski Kotar',
            deptoPais: 'CRO'
        },
        {
            deptoId: 622,
            deptoNombre: 'Condado de Lika-Senj',
            deptoPais: 'CRO'
        },
        {
            deptoId: 623,
            deptoNombre: 'Condado de Virovitica-Podravina',
            deptoPais: 'CRO'
        },
        {
            deptoId: 624,
            deptoNombre: 'Condado de Požega-Eslavonia',
            deptoPais: 'CRO'
        },
        {
            deptoId: 625,
            deptoNombre: 'Condado de Brod-Posavina',
            deptoPais: 'CRO'
        },
        {
            deptoId: 626,
            deptoNombre: 'Condado de Zadar',
            deptoPais: 'CRO'
        },
        {
            deptoId: 627,
            deptoNombre: 'Condado de Osijek-Baranja',
            deptoPais: 'CRO'
        },
        {
            deptoId: 628,
            deptoNombre: 'Condado de Šibenik-Knin',
            deptoPais: 'CRO'
        },
        {
            deptoId: 629,
            deptoNombre: 'Condado de Vukovar-Srijem',
            deptoPais: 'CRO'
        },
        {
            deptoId: 630,
            deptoNombre: 'Condado de Split-Dalmacia',
            deptoPais: 'CRO'
        },
        {
            deptoId: 631,
            deptoNombre: 'Condado de Istria',
            deptoPais: 'CRO'
        },
        {
            deptoId: 632,
            deptoNombre: 'Condado de Dubrovnik-Neretva',
            deptoPais: 'CRO'
        },
        {
            deptoId: 633,
            deptoNombre: 'Condado de Međimurje',
            deptoPais: 'CRO'
        },
        {
            deptoId: 634,
            deptoNombre: 'Zagreb',
            deptoPais: 'CRO'
        },
        //CUBA
        {
            deptoId: 635,
            deptoNombre: 'Pinar del Río',
            deptoPais: 'CUB'
        },
        {
            deptoId: 636,
            deptoNombre: 'Artemisa',
            deptoPais: 'CUB'
        },
        {
            deptoId: 637,
            deptoNombre: 'La Habana',
            deptoPais: 'CUB'
        },
        {
            deptoId: 638,
            deptoNombre: 'Mayabeque',
            deptoPais: 'CUB'
        },
        {
            deptoId: 639,
            deptoNombre: 'Matanzas',
            deptoPais: 'CUB'
        },
        {
            deptoId: 640,
            deptoNombre: 'Cienfuegos',
            deptoPais: 'CUB'
        },
        {
            deptoId: 641,
            deptoNombre: 'Villa Clara',
            deptoPais: 'CUB'
        },
        {
            deptoId: 642,
            deptoNombre: 'Sancti Spíritus',
            deptoPais: 'CUB'
        },
        {
            deptoId: 643,
            deptoNombre: 'Ciego de Ávila',
            deptoPais: 'CUB'
        },
        {
            deptoId: 644,
            deptoNombre: 'Camagüey',
            deptoPais: 'CUB'
        },
        {
            deptoId: 645,
            deptoNombre: 'Las Tunas',
            deptoPais: 'CUB'
        },
        {
            deptoId: 646,
            deptoNombre: 'Granma',
            deptoPais: 'CUB'
        },
        {
            deptoId: 647,
            deptoNombre: 'Holguín',
            deptoPais: 'CUB'
        },
        {
            deptoId: 648,
            deptoNombre: 'Santiago de Cuba',
            deptoPais: 'CUB'
        },
        {
            deptoId: 649,
            deptoNombre: 'Guantánamo',
            deptoPais: 'CUB'
        },
        {
            deptoId: 650,
            deptoNombre: 'Municipio Especial Isla de la Juventud',
            deptoPais: 'CUB'
        },
        //DINAMARCA
        {
            deptoId: 651,
            deptoNombre: 'Región Capital',
            deptoPais: 'DIN'
        },
        {
            deptoId: 652,
            deptoNombre: 'Jutlandia Central',
            deptoPais: 'DIN'
        },
        {
            deptoId: 653,
            deptoNombre: 'Dinamarca Meridional',
            deptoPais: 'DIN'
        },
        {
            deptoId: 654,
            deptoNombre: 'Región de Selandia',
            deptoPais: 'DIN'
        },
        {
            deptoId: 655,
            deptoNombre: 'Jutlandia Septentrional',
            deptoPais: 'DIN'
        },
        //DOMINICA
        {
            deptoId: 656,
            deptoNombre: 'Parroquia de Saint Andrew',
            deptoPais: 'DOM'
        },
        {
            deptoId: 657,
            deptoNombre: 'Parroquia de Saint David',
            deptoPais: 'DOM'
        },
        {
            deptoId: 658,
            deptoNombre: 'Parroquia de Saint George',
            deptoPais: 'DOM'
        },
        {
            deptoId: 659,
            deptoNombre: 'Parroquia de Saint John',
            deptoPais: 'DOM'
        },
        {
            deptoId: 660,
            deptoNombre: 'Parroquia de Saint Joseph',
            deptoPais: 'DOM'
        },
        {
            deptoId: 661,
            deptoNombre: 'Parroquia de Saint Luke',
            deptoPais: 'DOM'
        },
        {
            deptoId: 662,
            deptoNombre: 'Parroquia de Saint Mark',
            deptoPais: 'DOM'
        },
        {
            deptoId: 663,
            deptoNombre: 'Parroquia de Saint Patrick',
            deptoPais: 'DOM'
        },
        {
            deptoId: 664,
            deptoNombre: 'Parroquia de Saint Paul',
            deptoPais: 'DOM'
        },
        {
            deptoId: 665,
            deptoNombre: 'Parroquia de Saint Peter',
            deptoPais: 'DOM'
        },
        //ECUADOR
        {
            deptoId: 666,
            deptoNombre: 'Azuay',
            deptoPais: 'ECU'
        },
        {
            deptoId: 667,
            deptoNombre: 'Bolívar',
            deptoPais: 'ECU'
        },
        {
            deptoId: 668,
            deptoNombre: 'Cañar',
            deptoPais: 'ECU'
        },
        {
            deptoId: 669,
            deptoNombre: 'Carchi',
            deptoPais: 'ECU'
        },
        {
            deptoId: 670,
            deptoNombre: 'Chimborazo',
            deptoPais: 'ECU'
        },
        {
            deptoId: 671,
            deptoNombre: 'Cotopaxi',
            deptoPais: 'ECU'
        },
        {
            deptoId: 672,
            deptoNombre: 'El Oro',
            deptoPais: 'ECU'
        },
        {
            deptoId: 673,
            deptoNombre: 'Esmeraldas',
            deptoPais: 'ECU'
        },
        {
            deptoId: 674,
            deptoNombre: 'Galápagos',
            deptoPais: 'ECU'
        },
        {
            deptoId: 675,
            deptoNombre: 'Guayas',
            deptoPais: 'ECU'
        },
        {
            deptoId: 676,
            deptoNombre: 'Imbabura',
            deptoPais: 'ECU'
        },
        {
            deptoId: 677,
            deptoNombre: 'Loja',
            deptoPais: 'ECU'
        },
        {
            deptoId: 678,
            deptoNombre: 'Los Ríos',
            deptoPais: 'ECU'
        },
        {
            deptoId: 679,
            deptoNombre: 'Manabí',
            deptoPais: 'ECU'
        },
        {
            deptoId: 680,
            deptoNombre: 'Morona Santiago',
            deptoPais: 'ECU'
        },
        {
            deptoId: 681,
            deptoNombre: 'Napo',
            deptoPais: 'ECU'
        },
        {
            deptoId: 682,
            deptoNombre: 'Orellana',
            deptoPais: 'ECU'
        },
        {
            deptoId: 683,
            deptoNombre: 'Pastaza',
            deptoPais: 'ECU'
        },
        {
            deptoId: 684,
            deptoNombre: 'Pichincha',
            deptoPais: 'ECU'
        },
        {
            deptoId: 685,
            deptoNombre: 'Santa Elena',
            deptoPais: 'ECU'
        },
        {
            deptoId: 686,
            deptoNombre: 'Santo Domingo de los Tsáchilas',
            deptoPais: 'ECU'
        },
        {
            deptoId: 687,
            deptoNombre: 'Sucumbíos',
            deptoPais: 'ECU'
        },
        {
            deptoId: 688,
            deptoNombre: 'Tungurahua',
            deptoPais: 'ECU'
        },
        {
            deptoId: 689,
            deptoNombre: 'Zamora Chinchipe',
            deptoPais: 'ECU'
        },
        //EGIPTO
        {
            deptoId: 690,
            deptoNombre: 'Alejandría',
            deptoPais: 'EGP'
        },
        {
            deptoId: 691,
            deptoNombre: 'Asuán',
            deptoPais: 'EGP'
        },
        {
            deptoId: 692,
            deptoNombre: 'Asiut',
            deptoPais: 'EGP'
        },
        {
            deptoId: 693,
            deptoNombre: 'Behera',
            deptoPais: 'EGP'
        },
        {
            deptoId: 694,
            deptoNombre: 'Beni Suef',
            deptoPais: 'EGP'
        },
        {
            deptoId: 695,
            deptoNombre: 'El Cairo',
            deptoPais: 'EGP'
        },
        {
            deptoId: 696,
            deptoNombre: 'Dacalia',
            deptoPais: 'EGP'
        },
        {
            deptoId: 697,
            deptoNombre: 'Damieta',
            deptoPais: 'EGP'
        },
        {
            deptoId: 698,
            deptoNombre: 'Fayún',
            deptoPais: 'EGP'
        },
        {
            deptoId: 699,
            deptoNombre: 'Occidental',
            deptoPais: 'EGP'
        },
        {
            deptoId: 700,
            deptoNombre: 'Guiza',
            deptoPais: 'EGP'
        },
        {
            deptoId: 701,
            deptoNombre: 'Ismailia',
            deptoPais: 'EGP'
        },
        {
            deptoId: 702,
            deptoNombre: 'Kafr el Sheij',
            deptoPais: 'EGP'
        },
        {
            deptoId: 703,
            deptoNombre: 'Matrú',
            deptoPais: 'EGP'
        },
        {
            deptoId: 704,
            deptoNombre: 'Menia',
            deptoPais: 'EGP'
        },
        {
            deptoId: 705,
            deptoNombre: 'Menufia',
            deptoPais: 'EGP'
        },
        {
            deptoId: 706,
            deptoNombre: 'Nuevo Valle',
            deptoPais: 'EGP'
        },
        {
            deptoId: 707,
            deptoNombre: 'Sinaí del Norte',
            deptoPais: 'EGP'
        },
        {
            deptoId: 708,
            deptoNombre: 'Puerto Saíd',
            deptoPais: 'EGP'
        },
        {
            deptoId: 709,
            deptoNombre: 'Caliubia',
            deptoPais: 'EGP'
        },
        {
            deptoId: 710,
            deptoNombre: 'Quena',
            deptoPais: 'EGP'
        },
        {
            deptoId: 711,
            deptoNombre: 'Mar Rojo',
            deptoPais: 'EGP'
        },
        {
            deptoId: 712,
            deptoNombre: 'Oriental',
            deptoPais: 'EGP'
        },
        {
            deptoId: 713,
            deptoNombre: 'Suhag',
            deptoPais: 'EGP'
        },
        {
            deptoId: 714,
            deptoNombre: 'Sinaí del Sur',
            deptoPais: 'EGP'
        },
        {
            deptoId: 715,
            deptoNombre: 'Suez',
            deptoPais: 'EGP'
        },
        {
            deptoId: 716,
            deptoNombre: 'Luxor',
            deptoPais: 'EGP'
        },
        //EL SALVADOR
        {
            deptoId: 717,
            deptoNombre: 'Ahuachapán',
            deptoPais: 'ELS'
        },
        {
            deptoId: 718,
            deptoNombre: 'Santa Ana',
            deptoPais: 'ELS'
        },
        {
            deptoId: 719,
            deptoNombre: 'Sonsonate',
            deptoPais: 'ELS'
        },
        {
            deptoId: 720,
            deptoNombre: 'Usulután',
            deptoPais: 'ELS'
        },
        {
            deptoId: 721,
            deptoNombre: 'San Miguel',
            deptoPais: 'ELS'
        },
        {
            deptoId: 722,
            deptoNombre: 'Morazán',
            deptoPais: 'ELS'
        },
        {
            deptoId: 723,
            deptoNombre: 'La Unión',
            deptoPais: 'ELS'
        },
        {
            deptoId: 724,
            deptoNombre: 'La Libertad',
            deptoPais: 'ELS'
        },
        {
            deptoId: 725,
            deptoNombre: 'Chalatenango',
            deptoPais: 'ELS'
        },
        {
            deptoId: 726,
            deptoNombre: 'Cuscatlán',
            deptoPais: 'ELS'
        },
        {
            deptoId: 727,
            deptoNombre: 'San Salvador',
            deptoPais: 'ELS'
        },
        {
            deptoId: 728,
            deptoNombre: 'La Paz',
            deptoPais: 'ELS'
        },
        {
            deptoId: 729,
            deptoNombre: 'Cabañas',
            deptoPais: 'ELS'
        },
        {
            deptoId: 730,
            deptoNombre: 'San Vicente',
            deptoPais: 'ELS'
        },
        //EMIRATOS ARABES UNIDOS
        {
            deptoId: 731,
            deptoNombre: 'Abu Dabi',
            deptoPais: 'EAU'
        },
        {
            deptoId: 732,
            deptoNombre: 'Ajmán',
            deptoPais: 'EAU'
        },
        {
            deptoId: 733,
            deptoNombre: 'Fujaira',
            deptoPais: 'EAU'
        },
        {
            deptoId: 734,
            deptoNombre: 'Sarja',
            deptoPais: 'EAU'
        },
        {
            deptoId: 735,
            deptoNombre: 'Dubái',
            deptoPais: 'EAU'
        },
        {
            deptoId: 736,
            deptoNombre: 'Ras el Jaima',
            deptoPais: 'EAU'
        },
        {
            deptoId: 737,
            deptoNombre: 'Um el Kaiwain',
            deptoPais: 'EAU'
        },
        //ERITREA
        {
            deptoId: 738,
            deptoNombre: 'Anseba',
            deptoPais: 'ERI'
        },
        {
            deptoId: 739,
            deptoNombre: 'Maakel',
            deptoPais: 'ERI'
        },
        {
            deptoId: 740,
            deptoNombre: 'Gash-Barka',
            deptoPais: 'ERI'
        },
        {
            deptoId: 741,
            deptoNombre: 'Semenawi Keyih Bahri ',
            deptoPais: 'ERI'
        },
        {
            deptoId: 742,
            deptoNombre: 'Debub',
            deptoPais: 'ERI'
        },
        {
            deptoId: 743,
            deptoNombre: 'Debubawi Keyih Bahri ',
            deptoPais: 'ERI'
        },
        //ESLOVAQUIA
        {
            deptoId: 744,
            deptoNombre: 'Región de Bratislava',
            deptoPais: 'ESL'
        },
        {
            deptoId: 745,
            deptoNombre: 'Región de Trnava',
            deptoPais: 'ESL'
        },
        {
            deptoId: 746,
            deptoNombre: 'Región de Trenčín',
            deptoPais: 'ESL'
        },
        {
            deptoId: 747,
            deptoNombre: 'Región de Nitra',
            deptoPais: 'ESL'
        },
        {
            deptoId: 748,
            deptoNombre: 'Región de Žilina',
            deptoPais: 'ESL'
        },
        {
            deptoId: 749,
            deptoNombre: 'Región de Banská Bystrica',
            deptoPais: 'ESL'
        },
        {
            deptoId: 750,
            deptoNombre: 'Región de Prešov',
            deptoPais: 'ESL'
        },
        {
            deptoId: 751,
            deptoNombre: 'Región de Košice',
            deptoPais: 'ESL'
        },
        //ESLOVENIA
        {
            deptoId: 752,
            deptoNombre: 'Región del Mura',
            deptoPais: 'ESV'
        },
        {
            deptoId: 753,
            deptoNombre: 'Región del Drava',
            deptoPais: 'ESV'
        },
        {
            deptoId: 754,
            deptoNombre: 'Carintia eslovena',
            deptoPais: 'ESV'
        },
        {
            deptoId: 755,
            deptoNombre: 'Savinia',
            deptoPais: 'ESV'
        },
        {
            deptoId: 756,
            deptoNombre: 'Zasavie',
            deptoPais: 'ESV'
        },
        {
            deptoId: 757,
            deptoNombre: 'Posavina',
            deptoPais: 'ESV'
        },
        {
            deptoId: 758,
            deptoNombre: 'Eslovenia Sudoriental',
            deptoPais: 'ESV'
        },
        {
            deptoId: 759,
            deptoNombre: 'Eslovenia Central',
            deptoPais: 'ESV'
        },
        {
            deptoId: 761,
            deptoNombre: 'Alta Carniola',
            deptoPais: 'ESV'
        },
        {
            deptoId: 762,
            deptoNombre: 'Baja Carniola-Karst',
            deptoPais: 'ESV'
        },
        {
            deptoId: 763,
            deptoNombre: 'Región de Gorizia',
            deptoPais: 'ESV'
        },
        {
            deptoId: 764,
            deptoNombre: 'Litoral-Karst',
            deptoPais: 'ESV'
        },
        //ESPAÑA
        {
            deptoId: 765,
            deptoNombre: 'Andalucía',
            deptoPais: 'ESP'
        },
        {
            deptoId: 766,
            deptoNombre: 'Cataluña',
            deptoPais: 'ESP'
        },
        {
            deptoId: 767,
            deptoNombre: 'Comunidad de Madrid',
            deptoPais: 'ESP'
        },
        {
            deptoId: 768,
            deptoNombre: ' Comunidad Valenciana',
            deptoPais: 'ESP'
        },
        {
            deptoId: 769,
            deptoNombre: 'Galicia',
            deptoPais: 'ESP'
        },
        {
            deptoId: 770,
            deptoNombre: 'Castilla y León',
            deptoPais: 'ESP'
        },
        {
            deptoId: 771,
            deptoNombre: 'País Vasco',
            deptoPais: 'ESP'
        },
        {
            deptoId: 772,
            deptoNombre: 'Canarias',
            deptoPais: 'ESP'
        },
        {
            deptoId: 773,
            deptoNombre: 'Castilla-La Mancha',
            deptoPais: 'ESP'
        },
        {
            deptoId: 774,
            deptoNombre: 'Región de Murcia',
            deptoPais: 'ESP'
        },
        {
            deptoId: 775,
            deptoNombre: 'Aragón',
            deptoPais: 'ESP'
        },
        {
            deptoId: 776,
            deptoNombre: 'Islas Baleares',
            deptoPais: 'ESP'
        },
        {
            deptoId: 777,
            deptoNombre: 'Extremadura',
            deptoPais: 'ESP'
        },
        {
            deptoId: 778,
            deptoNombre: 'Asturias',
            deptoPais: 'ESP'
        },
        {
            deptoId: 779,
            deptoNombre: 'Navarra',
            deptoPais: 'ESP'
        },
        {
            deptoId: 780,
            deptoNombre: 'Cantabria',
            deptoPais: 'ESP'
        },
        {
            deptoId: 781,
            deptoNombre: 'La Rioja',
            deptoPais: 'ESP'
        },
        {
            deptoId: 782,
            deptoNombre: 'Ceuta',
            deptoPais: 'ESP'
        },
        {
            deptoId: 783,
            deptoNombre: 'Melilla',
            deptoPais: 'ESP'
        },
        //ESTADOS UNIDOS DE AMERICA
        {
            deptoId: 784,
            deptoNombre: 'Alabama',
            deptoPais: 'EUA'
        },
        {
            deptoId: 785,
            deptoNombre: 'Alaska',
            deptoPais: 'EUA'
        },
        {
            deptoId: 786,
            deptoNombre: 'Arizona',
            deptoPais: 'EUA'
        },
        {
            deptoId: 787,
            deptoNombre: 'Arkansas',
            deptoPais: 'EUA'
        },
        {
            deptoId: 788,
            deptoNombre: 'California',
            deptoPais: 'EUA'
        },
        {
            deptoId: 789,
            deptoNombre: 'Carolina del Norte',
            deptoPais: 'EUA'
        },
        {
            deptoId: 790,
            deptoNombre: 'Carolina del Sur',
            deptoPais: 'EUA'
        },
        {
            deptoId: 791,
            deptoNombre: 'Colorado',
            deptoPais: 'EUA'
        },
        {
            deptoId: 792,
            deptoNombre: 'Connecticut',
            deptoPais: 'EUA'
        },
        {
            deptoId: 793,
            deptoNombre: 'Dakota del Norte',
            deptoPais: 'EUA'
        },
        {
            deptoId: 794,
            deptoNombre: 'Dakota del Sur',
            deptoPais: 'EUA'
        },
        {
            deptoId: 795,
            deptoNombre: 'Delaware',
            deptoPais: 'EUA'
        },
        {
            deptoId: 795,
            deptoNombre: 'Florida',
            deptoPais: 'EUA'
        },
        {
            deptoId: 797,
            deptoNombre: 'Georgia',
            deptoPais: 'EUA'
        },
        {
            deptoId: 798,
            deptoNombre: 'Hawái',
            deptoPais: 'EUA'
        },
        {
            deptoId: 799,
            deptoNombre: 'Idaho',
            deptoPais: 'EUA'
        },
        {
            deptoId: 800,
            deptoNombre: 'Illinois',
            deptoPais: 'EUA'
        },
        {
            deptoId: 801,
            deptoNombre: ' Indiana',
            deptoPais: 'EUA'
        },
        {
            deptoId: 802,
            deptoNombre: ' Iowa',
            deptoPais: 'EUA'
        },
        {
            deptoId: 803,
            deptoNombre: 'Kansas',
            deptoPais: 'EUA'
        },
        {
            deptoId: 804,
            deptoNombre: 'Kentucky',
            deptoPais: 'EUA'
        },
        {
            deptoId: 805,
            deptoNombre: 'Luisiana',
            deptoPais: 'EUA'
        },
        {
            deptoId: 806,
            deptoNombre: 'Maine',
            deptoPais: 'EUA'
        },
        {
            deptoId: 807,
            deptoNombre: 'Maryland',
            deptoPais: 'EUA'
        },
        {
            deptoId: 808,
            deptoNombre: 'Massachusetts',
            deptoPais: 'EUA'
        },
        {
            deptoId: 809,
            deptoNombre: 'Míchigan',
            deptoPais: 'EUA'
        },
        {
            deptoId: 810,
            deptoNombre: ' Minnesota',
            deptoPais: 'EUA'
        },
        {
            deptoId: 811,
            deptoNombre: 'Misisipi',
            deptoPais: 'EUA'
        },
        {
            deptoId: 812,
            deptoNombre: 'Misuri',
            deptoPais: 'EUA'
        },
        {
            deptoId: 813,
            deptoNombre: 'Montana',
            deptoPais: 'EUA'
        },
        {
            deptoId: 814,
            deptoNombre: 'Nebraska',
            deptoPais: 'EUA'
        },
        {
            deptoId: 815,
            deptoNombre: ' Nevada',
            deptoPais: 'EUA'
        },
        {
            deptoId: 816,
            deptoNombre: 'Nueva Jersey',
            deptoPais: 'EUA'
        },
        {
            deptoId: 817,
            deptoNombre: 'Nueva York',
            deptoPais: 'EUA'
        },
        {
            deptoId: 818,
            deptoNombre: 'Nuevo Hampshire',
            deptoPais: 'EUA'
        },
        {
            deptoId: 819,
            deptoNombre: ' Nuevo México',
            deptoPais: 'EUA'
        },
        {
            deptoId: 820,
            deptoNombre: 'Ohio',
            deptoPais: 'EUA'
        },
        {
            deptoId: 821,
            deptoNombre: 'Oklahoma',
            deptoPais: 'EUA'
        },
        {
            deptoId: 822,
            deptoNombre: 'Oregón',
            deptoPais: 'EUA'
        },
        {
            deptoId: 823,
            deptoNombre: 'Pensilvania',
            deptoPais: 'EUA'
        },
        {
            deptoId: 824,
            deptoNombre: 'Rhode Island',
            deptoPais: 'EUA'
        },
        {
            deptoId: 825,
            deptoNombre: 'Tennessee',
            deptoPais: 'EUA'
        },
        {
            deptoId: 826,
            deptoNombre: 'Texas',
            deptoPais: 'EUA'
        },
        {
            deptoId: 827,
            deptoNombre: 'Utah',
            deptoPais: 'EUA'
        },
        {
            deptoId: 828,
            deptoNombre: 'Vermont',
            deptoPais: 'EUA'
        },
        {
            deptoId: 829,
            deptoNombre: 'Virginia',
            deptoPais: 'EUA'
        },
        {
            deptoId: 830,
            deptoNombre: 'Virginia Occidental',
            deptoPais: 'EUA'
        },
        {
            deptoId: 831,
            deptoNombre: 'Washington',
            deptoPais: 'EUA'
        },
        {
            deptoId: 832,
            deptoNombre: 'Wisconsin',
            deptoPais: 'EUA'
        },
        {
            deptoId: 833,
            deptoNombre: 'Wyoming',
            deptoPais: 'EUA'
        },
        //ESTONIA
        {
            deptoId: 834,
            deptoNombre: 'Harju ',
            deptoPais: 'EST'
        },
        {
            deptoId: 835,
            deptoNombre: 'Hiiu ',
            deptoPais: 'EST'
        },
        {
            deptoId: 836,
            deptoNombre: 'Ida-Viru',
            deptoPais: 'EST'
        },
        {
            deptoId: 837,
            deptoNombre: 'Järva ',
            deptoPais: 'EST'
        },
        {
            deptoId: 838,
            deptoNombre: 'Jõgeva ',
            deptoPais: 'EST'
        },
        {
            deptoId: 839,
            deptoNombre: 'Lääne',
            deptoPais: 'EST'
        },
        {
            deptoId: 840,
            deptoNombre: 'Lääne-Viru',
            deptoPais: 'EST'
        },
        {
            deptoId: 841,
            deptoNombre: 'Pärnu',
            deptoPais: 'EST'
        },
        {
            deptoId: 842,
            deptoNombre: 'Põlva',
            deptoPais: 'EST'
        },
        {
            deptoId: 843,
            deptoNombre: 'Rapla',
            deptoPais: 'EST'
        },
        {
            deptoId: 844,
            deptoNombre: 'Saare',
            deptoPais: 'EST'
        },
        {
            deptoId: 845,
            deptoNombre: 'Tartu ',
            deptoPais: 'EST'
        },
        {
            deptoId: 846,
            deptoNombre: 'Valga ',
            deptoPais: 'EST'
        },
        {
            deptoId: 847,
            deptoNombre: 'Viljandi ',
            deptoPais: 'EST'
        },
        {
            deptoId: 848,
            deptoNombre: 'Võru ',
            deptoPais: 'EST'
        },
        //ETIOPÍA
        {
            deptoId: 849,
            deptoNombre: 'Adís Abeba',
            deptoPais: 'ETI'
        },
        {
            deptoId: 850,
            deptoNombre: 'Afar',
            deptoPais: 'ETI'
        },
        {
            deptoId: 851,
            deptoNombre: 'Amhara',
            deptoPais: 'ETI'
        },
        {
            deptoId: 852,
            deptoNombre: 'Benishangul-Gumaz',
            deptoPais: 'ETI'
        },
        {
            deptoId: 853,
            deptoNombre: 'Dire Dawa',
            deptoPais: 'ETI'
        },
        {
            deptoId: 854,
            deptoNombre: 'Gambela',
            deptoPais: 'ETI'
        },
        {
            deptoId: 855,
            deptoNombre: 'Harar',
            deptoPais: 'ETI'
        },
        {
            deptoId: 856,
            deptoNombre: 'Oromía',
            deptoPais: 'ETI'
        },
        {
            deptoId: 857,
            deptoNombre: 'Somali (Ogadén)',
            deptoPais: 'ETI'
        },
        {
            deptoId: 858,
            deptoNombre: 'Naciones y pueblos del sur',
            deptoPais: 'ETI'
        },
        {
            deptoId: 859,
            deptoNombre: 'Tigray',
            deptoPais: 'ETI'
        },
        //FILIPINAS
        {
            deptoId: 860,
            deptoNombre: 'Ilocos ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 861,
            deptoNombre: 'Cagayán ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 862,
            deptoNombre: 'Luzón Central',
            deptoPais: 'FIL'
        },
        {
            deptoId: 863,
            deptoNombre: 'Calabarzón',
            deptoPais: 'FIL'
        },
        {
            deptoId: 864,
            deptoNombre: 'Mimaropa',
            deptoPais: 'FIL'
        },
        {
            deptoId: 865,
            deptoNombre: 'Bícol',
            deptoPais: 'FIL'
        },
        {
            deptoId: 866,
            deptoNombre: 'La Cordillera',
            deptoPais: 'FIL'
        },
        {
            deptoId: 867,
            deptoNombre: 'Cabecera Nacional',
            deptoPais: 'FIL'
        },
        {
            deptoId: 868,
            deptoNombre: 'Bisayas Occidentales ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 869,
            deptoNombre: 'Bisayas Centrales',
            deptoPais: 'FIL'
        },
        {
            deptoId: 870,
            deptoNombre: 'Bisayas Orientales',
            deptoPais: 'FIL'
        },
        {
            deptoId: 871,
            deptoNombre: 'Zamboanga ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 872,
            deptoNombre: 'Mindanao del Norte',
            deptoPais: 'FIL'
        },
        {
            deptoId: 873,
            deptoNombre: 'Davao ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 874,
            deptoNombre: 'Soccsksargen ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 875,
            deptoNombre: 'Caraga ',
            deptoPais: 'FIL'
        },
        {
            deptoId: 876,
            deptoNombre: 'Región Autónoma del Mindanao Musulmán',
            deptoPais: 'FIL'
        },
        //FINLANDIA
        {
            deptoId: 877,
            deptoNombre: 'Finlandia Meridional',
            deptoPais: 'FIN'
        },
        {
            deptoId: 878,
            deptoNombre: 'Finlandia Occidental',
            deptoPais: 'FIN'
        },
        {
            deptoId: 879,
            deptoNombre: 'Finlandia Oriental',
            deptoPais: 'FIN'
        },
        {
            deptoId: 880,
            deptoNombre: 'Oulu',
            deptoPais: 'FIN'
        },
        {
            deptoId: 881,
            deptoNombre: 'Laponia',
            deptoPais: 'FIN'
        },
        {
            deptoId: 882,
            deptoNombre: 'Åland',
            deptoPais: 'FIN'
        },
        //FIJI
        {
            deptoId: 883,
            deptoNombre: 'División Central (Suva)',
            deptoPais: 'FIY'
        },
        {
            deptoId: 884,
            deptoNombre: 'División Norte (Labasa)',
            deptoPais: 'FIY'
        },
        {
            deptoId: 885,
            deptoNombre: 'División Este (Levuka)',
            deptoPais: 'FIY'
        },
        {
            deptoId: 886,
            deptoNombre: 'División Oeste (Lautoka)',
            deptoPais: 'FIY'
        },
        //FRANCIA
        {
            deptoId: 887,
            deptoNombre: 'Alta Francia',
            deptoPais: 'FRA'
        },
        {
            deptoId: 888,
            deptoNombre: 'Auvernia-Ródano-Alpes',
            deptoPais: 'FRA'
        },
        {
            deptoId: 889,
            deptoNombre: 'Borgoña-Franco Condado',
            deptoPais: 'FRA'
        },
        {
            deptoId: 890,
            deptoNombre: 'Bretaña',
            deptoPais: 'FRA'
        },
        {
            deptoId: 891,
            deptoNombre: 'Centro-Valle de Loira',
            deptoPais: 'FRA'
        },
        {
            deptoId: 892,
            deptoNombre: 'Córcega',
            deptoPais: 'FRA'
        },
        {
            deptoId: 893,
            deptoNombre: 'Gran Este',
            deptoPais: 'FRA'
        },
        {
            deptoId: 894,
            deptoNombre: 'Isla de Francia',
            deptoPais: 'FRA'
        },
        {
            deptoId: 895,
            deptoNombre: 'Normandía',
            deptoPais: 'FRA'
        },
        {
            deptoId: 896,
            deptoNombre: 'Nueva Aquitania',
            deptoPais: 'FRA'
        },
        {
            deptoId: 897,
            deptoNombre: 'Occitania',
            deptoPais: 'FRA'
        },
        {
            deptoId: 898,
            deptoNombre: 'País del Loira',
            deptoPais: 'FRA'
        },
        {
            deptoId: 899,
            deptoNombre: 'Provenza-Alpes-Costa Azul',
            deptoPais: 'FRA'
        },
        {
            deptoId: 900,
            deptoNombre: 'Guayana Francesa',
            deptoPais: 'FRA'
        },
        {
            deptoId: 901,
            deptoNombre: 'Nueva Caledonia',
            deptoPais: 'FRA'
        },
        {
            deptoId: 902,
            deptoNombre: 'Polinesia Francesa',
            deptoPais: 'FRA'
        },
        {
            deptoId: 903,
            deptoNombre: 'Reunión',
            deptoPais: 'FRA'
        },
        {
            deptoId: 904,
            deptoNombre: 'Guadalupe',
            deptoPais: 'FRA'
        },
        {
            deptoId: 905,
            deptoNombre: 'Martinica',
            deptoPais: 'FRA'
        },
        {
            deptoId: 906,
            deptoNombre: 'Mayotte',
            deptoPais: 'FRA'
        },
        {
            deptoId: 907,
            deptoNombre: 'Wallis y Futuna',
            deptoPais: 'FRA'
        },
        {
            deptoId: 908,
            deptoNombre: 'San Pedro y Miquelón',
            deptoPais: 'FRA'
        },
        {
            deptoId: 909,
            deptoNombre: 'San Martín',
            deptoPais: 'FRA'
        },
        {
            deptoId: 910,
            deptoNombre: 'San Bartolomé',
            deptoPais: 'FRA'
        },
        //GABÓN
        {
            deptoId: 911,
            deptoNombre: 'Estuaire',
            deptoPais: 'GAB'
        },
        {
            deptoId: 912,
            deptoNombre: 'Haut-Ogooué',
            deptoPais: 'GAB'
        },
        {
            deptoId: 913,
            deptoNombre: 'Moyen-Ogooué',
            deptoPais: 'GAB'
        },
        {
            deptoId: 914,
            deptoNombre: 'Ngounié',
            deptoPais: 'GAB'
        },
        {
            deptoId: 915,
            deptoNombre: 'Nyanga',
            deptoPais: 'GAB'
        },
        {
            deptoId: 916,
            deptoNombre: 'Ogooué-Ivindo',
            deptoPais: 'GAB'
        },
        {
            deptoId: 917,
            deptoNombre: 'Ogooué-Lolo',
            deptoPais: 'GAB'
        },
        {
            deptoId: 918,
            deptoNombre: 'Ogooué-Maritime',
            deptoPais: 'GAB'
        },
        {
            deptoId: 919,
            deptoNombre: 'Woleu-Ntem',
            deptoPais: 'GAB'
        },
        //GAMBIA
        {
            deptoId: 920,
            deptoNombre: 'Lower River',
            deptoPais: 'GAM'
        },
        {
            deptoId: 921,
            deptoNombre: 'Central River',
            deptoPais: 'GAM'
        },
        {
            deptoId: 922,
            deptoNombre: 'North Bank',
            deptoPais: 'GAM'
        },
        {
            deptoId: 923,
            deptoNombre: 'Upper River',
            deptoPais: 'GAM'
        },
        {
            deptoId: 924,
            deptoNombre: 'Western',
            deptoPais: 'GAM'
        },
        {
            deptoId: 925,
            deptoNombre: ' Banjul',
            deptoPais: 'GAM'
        },
        //GEORGIA
        {
            deptoId: 926,
            deptoNombre: 'Abjasia ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 927,
            deptoNombre: 'Samegrelo-Zemo Svaneti ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 928,
            deptoNombre: '	Guria ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 929,
            deptoNombre: 'Ayaria ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 930,
            deptoNombre: 'Racha-Lechjumi y Kvemo Svaneti ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 931,
            deptoNombre: 'Imereti ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 932,
            deptoNombre: 'Samtsje-Yavajeti ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 933,
            deptoNombre: 'Shida Kartli ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 934,
            deptoNombre: 'Mtsjeta-Mtianeti ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 935,
            deptoNombre: 'Kvemo Kartli ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 936,
            deptoNombre: 'Kajeti ',
            deptoPais: 'GEO'
        },
        {
            deptoId: 937,
            deptoNombre: 'Tiflis ',
            deptoPais: 'GEO'
        },
        //GHANA
        {
            deptoId: 938,
            deptoNombre: 'Ashanti',
            deptoPais: 'GHA'
        },
        {
            deptoId: 939,
            deptoNombre: 'Brong-Ahafo',
            deptoPais: 'GHA'
        },
        {
            deptoId: 940,
            deptoNombre: 'Central',
            deptoPais: 'GHA'
        },
        {
            deptoId: 941,
            deptoNombre: 'Oriental',
            deptoPais: 'GHA'
        },
        {
            deptoId: 942,
            deptoNombre: 'Gran Accra',
            deptoPais: 'GHA'
        },
        {
            deptoId: 943,
            deptoNombre: 'Septentrional',
            deptoPais: 'GHA'
        },
        {
            deptoId: 944,
            deptoNombre: 'Alta Oriental',
            deptoPais: 'GHA'
        },
        {
            deptoId: 945,
            deptoNombre: 'Alta Occidental',
            deptoPais: 'GHA'
        },
        {
            deptoId: 946,
            deptoNombre: 'Volta',
            deptoPais: 'GHA'
        },
        {
            deptoId: 947,
            deptoNombre: 'Occidental',
            deptoPais: 'GHA'
        },
        //GRANADA
        {
            deptoId: 948,
            deptoNombre: 'Saint Patrick',
            deptoPais: 'GRA'
        },
        {
            deptoId: 949,
            deptoNombre: 'Saint Andrew',
            deptoPais: 'GRA'
        },
        {
            deptoId: 950,
            deptoNombre: 'Saint David',
            deptoPais: 'GRA'
        },
        {
            deptoId: 951,
            deptoNombre: 'Saint George',
            deptoPais: 'GRA'
        },
        {
            deptoId: 952,
            deptoNombre: 'Saint John',
            deptoPais: 'GRA'
        },
        {
            deptoId: 953,
            deptoNombre: 'Saint Mark',
            deptoPais: 'GRA'
        },
        //GRECIA
        {
            deptoId: 954,
            deptoNombre: 'Administración del Ática',
            deptoPais: 'GRE'
        },
        {
            deptoId: 955,
            deptoNombre: 'Administración de Macedonia-Tracia',
            deptoPais: 'GRE'
        },
        {
            deptoId: 956,
            deptoNombre: 'Administración de Épiro-Macedonia Occidental',
            deptoPais: 'GRE'
        },
        {
            deptoId: 957,
            deptoNombre: 'Administración de Tesalia-Grecia Central',
            deptoPais: 'GRE'
        },
        {
            deptoId: 958,
            deptoNombre: 'Administración del Peloponeso-Grecia Occidental-Jónico',
            deptoPais: 'GRE'
        },
        {
            deptoId: 959,
            deptoNombre: 'Administración del Egeo',
            deptoPais: 'GRE'
        },
        {
            deptoId: 960,
            deptoNombre: 'Administración de Creta',
            deptoPais: 'GRE'
        },
        //GUATEMALA
        {
            deptoId: 961,
            deptoNombre: 'Alta Verapaz',
            deptoPais: 'GUA'
        },
        {
            deptoId: 962,
            deptoNombre: 'Baja Verapaz',
            deptoPais: 'GUA'
        },
        {
            deptoId: 963,
            deptoNombre: 'Chimaltenango',
            deptoPais: 'GUA'
        },
        {
            deptoId: 964,
            deptoNombre: 'Chiquimula',
            deptoPais: 'GUA'
        },
        {
            deptoId: 965,
            deptoNombre: '	Petén',
            deptoPais: 'GUA'
        },
        {
            deptoId: 966,
            deptoNombre: 'El Progreso',
            deptoPais: 'GUA'
        },
        {
            deptoId: 967,
            deptoNombre: 'Quiché',
            deptoPais: 'GUA'
        },
        {
            deptoId: 968,
            deptoNombre: 'Escuintla',
            deptoPais: 'GUA'
        },
        {
            deptoId: 969,
            deptoNombre: 'Guatemala',
            deptoPais: 'GUA'
        },
        {
            deptoId: 970,
            deptoNombre: 'Huehuetenango',
            deptoPais: 'GUA'
        },
        {
            deptoId: 971,
            deptoNombre: 'Izabal',
            deptoPais: 'GUA'
        },
        {
            deptoId: 972,
            deptoNombre: 'Jalapa',
            deptoPais: 'GUA'
        },
        {
            deptoId: 973,
            deptoNombre: 'Jutiapa',
            deptoPais: 'GUA'
        },
        {
            deptoId: 974,
            deptoNombre: 'Quetzaltenango',
            deptoPais: 'GUA'
        },
        {
            deptoId: 975,
            deptoNombre: 'Retalhuleu',
            deptoPais: 'GUA'
        },
        {
            deptoId: 976,
            deptoNombre: 'Sacatepéquez',
            deptoPais: 'GUA'
        },
        {
            deptoId: 977,
            deptoNombre: 'San Marcos',
            deptoPais: 'GUA'
        },
        {
            deptoId: 978,
            deptoNombre: 'Santa Rosa',
            deptoPais: 'GUA'
        },
        {
            deptoId: 979,
            deptoNombre: 'Sololá',
            deptoPais: 'GUA'
        },
        {
            deptoId: 980,
            deptoNombre: 'Suchitepéquez',
            deptoPais: 'GUA'
        },
        {
            deptoId: 981,
            deptoNombre: 'Totonicapán',
            deptoPais: 'GUA'
        },
        {
            deptoId: 982,
            deptoNombre: 'Zacapa',
            deptoPais: 'GUA'
        },
        //GUINEA
        {
            deptoId: 983,
            deptoNombre: 'Conakri',
            deptoPais: 'GUI'
        },
        {
            deptoId: 984,
            deptoNombre: 'Boké',
            deptoPais: 'GUI'
        },
        {
            deptoId: 985,
            deptoNombre: 'Faranah',
            deptoPais: 'GUI'
        },
        {
            deptoId: 986,
            deptoNombre: 'Kankan',
            deptoPais: 'GUI'
        },
        {
            deptoId: 987,
            deptoNombre: 'Kindia',
            deptoPais: 'GUI'
        },
        {
            deptoId: 988,
            deptoNombre: 'Labé',
            deptoPais: 'GUI'
        },
        {
            deptoId: 989,
            deptoNombre: 'Mamou',
            deptoPais: 'GUI'
        },
        {
            deptoId: 990,
            deptoNombre: 'Nzérékoré',
            deptoPais: 'GUI'
        },
        //GUINEA ECUATORIAL
        {
            deptoId: 991,
            deptoNombre: 'Bioko-Norte',
            deptoPais: 'GUE'
        },
        {
            deptoId: 992,
            deptoNombre: 'Bioko-Sur',
            deptoPais: 'GUE'
        },
        {
            deptoId: 993,
            deptoNombre: 'Centro-Sur',
            deptoPais: 'GUE'
        },
        {
            deptoId: 994,
            deptoNombre: 'Kié-Ntem',
            deptoPais: 'GUE'
        },
        {
            deptoId: 995,
            deptoNombre: 'Litoral',
            deptoPais: 'GUE'
        },
        {
            deptoId: 996,
            deptoNombre: 'Wele-Nzas',
            deptoPais: 'GUE'
        },
        //Guinea-Bisáu
        {
            deptoId: 997,
            deptoNombre: 'Bafatá',
            deptoPais: 'GUB'
        },
        {
            deptoId: 998,
            deptoNombre: 'Biombo',
            deptoPais: 'GUB'
        },
        {
            deptoId: 999,
            deptoNombre: 'Bisáu',
            deptoPais: 'GUB'
        },
        {
            deptoId: 1000,
            deptoNombre: 'Bolama',
            deptoPais: 'GUB'
        },
        {
            deptoId: 1001,
            deptoNombre: 'Cacheu',
            deptoPais: 'GUB'
        },
        {
            deptoId: 1002,
            deptoNombre: 'Gabu',
            deptoPais: 'GUB'
        },
        {
            deptoId: 1003,
            deptoNombre: 'Oio',
            deptoPais: 'GUB'
        },
        {
            deptoId: 1004,
            deptoNombre: 'Quinara',
            deptoPais: 'GUB'
        },
        {
            deptoId: 1005,
            deptoNombre: 'Tombali',
            deptoPais: 'GUB'
        },
        //GUYANA
        {
            deptoId: 1006,
            deptoNombre: 'Barima-Waini',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1007,
            deptoNombre: 'Pomeroon-Supenaam',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1008,
            deptoNombre: 'Islas Esequibo-Demerara Occidental',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1009,
            deptoNombre: 'Demerara-Mahaica',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1010,
            deptoNombre: 'Mahaica-Berbice',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1011,
            deptoNombre: 'Berbice Oriental-Corentyne',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1012,
            deptoNombre: 'Cuyuni-Mazaruni',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1013,
            deptoNombre: 'Potaro-Siparuni',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1014,
            deptoNombre: 'Alto Tacutu-Alto Esequibo',
            deptoPais: 'GUY'
        },
        {
            deptoId: 1015,
            deptoNombre: '	Alto Demerara-Berbice',
            deptoPais: 'GUY'
        },
        //HAITÍ
        {
            deptoId: 1016,
            deptoNombre: 'Artibonito',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1017,
            deptoNombre: 'Centro',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1018,
            deptoNombre: "Grand'Anse",
            deptoPais: 'HAI'
        },
        {
            deptoId: 1019,
            deptoNombre: 'Nippes',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1020,
            deptoNombre: 'Norte',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1021,
            deptoNombre: 'Nordeste',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1022,
            deptoNombre: 'Noroeste',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1023,
            deptoNombre: 'Oeste',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1024,
            deptoNombre: 'Sur',
            deptoPais: 'HAI'
        },
        {
            deptoId: 1025,
            deptoNombre: 'Sudeste',
            deptoPais: 'HAI'
        },
        //HONDURAS
        {
            deptoId: 1026,
            deptoNombre: 'Atlántida',
            deptoPais: 'HON'
        },
        {
            deptoId: 1027,
            deptoNombre: 'Colón',
            deptoPais: 'HON'
        },
        {
            deptoId: 1028,
            deptoNombre: 'Comayagua',
            deptoPais: 'HON'
        },
        {
            deptoId: 1029,
            deptoNombre: 'Copán',
            deptoPais: 'HON'
        },
        {
            deptoId: 1030,
            deptoNombre: 'Cortes',
            deptoPais: 'HON'
        },
        {
            deptoId: 1031,
            deptoNombre: 'Choluteca',
            deptoPais: 'HON'
        },
        {
            deptoId: 1032,
            deptoNombre: 'El Paraíso',
            deptoPais: 'HON'
        },
        {
            deptoId: 1033,
            deptoNombre: 'Francisco Morazán',
            deptoPais: 'HON'
        },
        {
            deptoId: 1034,
            deptoNombre: 'Gracias a Dios',
            deptoPais: 'HON'
        },
        {
            deptoId: 1035,
            deptoNombre: 'Intibucá',
            deptoPais: 'HON'
        },
        {
            deptoId: 1036,
            deptoNombre: 'Islas de la Bahía',
            deptoPais: 'HON'
        },
        {
            deptoId: 1037,
            deptoNombre: 'Islas de la Bahía',
            deptoPais: 'HON'
        },
        {
            deptoId: 1038,
            deptoNombre: '	Lempira',
            deptoPais: 'HON'
        },
        {
            deptoId: 1039,
            deptoNombre: 'Ocotepeque',
            deptoPais: 'HON'
        },
        {
            deptoId: 1040,
            deptoNombre: 'Olancho',
            deptoPais: 'HON'
        },
        {
            deptoId: 1041,
            deptoNombre: 'Santa Bárbara',
            deptoPais: 'HON'
        },
        {
            deptoId: 1042,
            deptoNombre: 'Valle',
            deptoPais: 'HON'
        },
        {
            deptoId: 1043,
            deptoNombre: 'Yoro',
            deptoPais: 'HON'
        },
        //HUNGRÍA
        {
            deptoId: 1044,
            deptoNombre: 'Borsod-Abaúj-Zemplén',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1045,
            deptoNombre: 'Heves',
            deptoPais: 'HUN'
        },

        {
            deptoId: 1046,
            deptoNombre: 'Hajdú-Bihar',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1047,
            deptoNombre: 'Szabolcs-Szatmár-Bereg',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1048,
            deptoNombre: 'Jász-Nagykun-Szolnok',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1049,
            deptoNombre: 'Csongrád',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1050,
            deptoNombre: 'Békés',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1051,
            deptoNombre: 'Bács-Kiskun',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1052,
            deptoNombre: 'Pest',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1053,
            deptoNombre: 'Budapest',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1054,
            deptoNombre: 'Fejér',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1055,
            deptoNombre: 'Komárom-Esztergom',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1056,
            deptoNombre: 'Veszprém',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1057,
            deptoNombre: 'Győr-Moson-Sopron',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1058,
            deptoNombre: 'Vas',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1059,
            deptoNombre: 'Zala',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1060,
            deptoNombre: 'Baranya',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1061,
            deptoNombre: 'Tolna',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1062,
            deptoNombre: 'Somogy',
            deptoPais: 'HUN'
        },
        {
            deptoId: 1063,
            deptoNombre: 'Nógrád',
            deptoPais: 'HUN'
        },
        //INDIA
        {
            deptoId: 1064,
            deptoNombre: 'Andamán y Nicobar (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1065,
            deptoNombre: 'Andhra Pradesh',
            deptoPais: 'IND'
        },
        {
            deptoId: 1066,
            deptoNombre: 'Arunachal Pradesh',
            deptoPais: 'IND'
        },
        {
            deptoId: 1067,
            deptoNombre: 'Assam',
            deptoPais: 'IND'
        },
        {
            deptoId: 1068,
            deptoNombre: 'Bengala Occidental',
            deptoPais: 'IND'
        },
        {
            deptoId: 1069,
            deptoNombre: 'Bihar',
            deptoPais: 'IND'
        },
        {
            deptoId: 1070,
            deptoNombre: 'Chandigarh (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1071,
            deptoNombre: 'Chhattisgarh',
            deptoPais: 'IND'
        },
        {
            deptoId: 1072,
            deptoNombre: 'Dadra y Nagar Haveli (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1073,
            deptoNombre: 'Damán y Diu (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1074,
            deptoNombre: 'Delhi (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1075,
            deptoNombre: 'Goa',
            deptoPais: 'IND'
        },
        {
            deptoId: 1076,
            deptoNombre: 'Gujarat',
            deptoPais: 'IND'
        },
        {
            deptoId: 1077,
            deptoNombre: 'Haryana',
            deptoPais: 'IND'
        },
        {
            deptoId: 1078,
            deptoNombre: 'Himachal Pradesh',
            deptoPais: 'IND'
        },
        {
            deptoId: 1079,
            deptoNombre: 'Jammu y Cachemira',
            deptoPais: 'IND'
        },
        {
            deptoId: 1080,
            deptoNombre: '	Jharkhand',
            deptoPais: 'IND'
        },
        {
            deptoId: 1081,
            deptoNombre: 'Karnataka',
            deptoPais: 'IND'
        },
        {
            deptoId: 1082,
            deptoNombre: 'Kerala',
            deptoPais: 'IND'
        },
        {
            deptoId: 1083,
            deptoNombre: 'Lakshadweep (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1084,
            deptoNombre: 'Madhya Pradesh',
            deptoPais: 'IND'
        },
        {
            deptoId: 1085,
            deptoNombre: 'Maharashtra',
            deptoPais: 'IND'
        },
        {
            deptoId: 1086,
            deptoNombre: 'Manipur',
            deptoPais: 'IND'
        },
        {
            deptoId: 1087,
            deptoNombre: 'Meghalaya',
            deptoPais: 'IND'
        },
        {
            deptoId: 1088,
            deptoNombre: 'Mizoram',
            deptoPais: 'IND'
        },
        {
            deptoId: 1089,
            deptoNombre: 'Mizoram',
            deptoPais: 'IND'
        },
        {
            deptoId: 1090,
            deptoNombre: 'Odisha',
            deptoPais: 'IND'
        },
        {
            deptoId: 1091,
            deptoNombre: 'Puducherry (UT)',
            deptoPais: 'IND'
        },
        {
            deptoId: 1092,
            deptoNombre: 'Punyab',
            deptoPais: 'IND'
        },
        {
            deptoId: 1093,
            deptoNombre: 'Rajasthan',
            deptoPais: 'IND'
        },
        {
            deptoId: 1094,
            deptoNombre: 'Sikkim',
            deptoPais: 'IND'
        },
        {
            deptoId: 1095,
            deptoNombre: 'Tamil Nadu',
            deptoPais: 'IND'
        },
        {
            deptoId: 1096,
            deptoNombre: '	Telangana',
            deptoPais: 'IND'
        },
        {
            deptoId: 1097,
            deptoNombre: 'Tripura',
            deptoPais: 'IND'
        },
        {
            deptoId: 1098,
            deptoNombre: 'Uttar Pradesh',
            deptoPais: 'IND'
        },
        {
            deptoId: 1099,
            deptoNombre: 'Uttarakhand',
            deptoPais: 'IND'
        },
        //INDONESIA
        {
            deptoId: 1100,
            deptoNombre: 'Aceh',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1101,
            deptoNombre: 'Sumatra Septentrional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1102,
            deptoNombre: 'Sumatra Occidental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1103,
            deptoNombre: 'Riau',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1104,
            deptoNombre: 'Islas Riau',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1105,
            deptoNombre: 'Jambi',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1106,
            deptoNombre: 'Bengkulu',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1107,
            deptoNombre: 'Sumatra Meridional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1108,
            deptoNombre: 'Bangka-Belitung',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1109,
            deptoNombre: 'Lampung',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1110,
            deptoNombre: 'Región de Yakarta',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1111,
            deptoNombre: 'Bantén',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1112,
            deptoNombre: 'Java Occidental ',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1113,
            deptoNombre: 'Java Central',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1114,
            deptoNombre: 'Región de Yogyakarta',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1115,
            deptoNombre: 'Java Oriental ',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1116,
            deptoNombre: 'Bali',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1117,
            deptoNombre: 'Nusatenggara Occidental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1118,
            deptoNombre: 'Nusatenggara Oriental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1119,
            deptoNombre: 'Borneo Septentrional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1120,
            deptoNombre: 'Borneo Occidental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1121,
            deptoNombre: 'Borneo Central',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1122,
            deptoNombre: 'Borneo Meridional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1123,
            deptoNombre: 'Borneo Oriental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1124,
            deptoNombre: 'Célebes Septentrional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1125,
            deptoNombre: 'Gorontalo',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1126,
            deptoNombre: 'Célebes Central',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1127,
            deptoNombre: 'Célebes Suroriental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1128,
            deptoNombre: 'Célebes Meridional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1129,
            deptoNombre: 'Célebes Occidental',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1130,
            deptoNombre: 'Molucas',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1131,
            deptoNombre: 'Molucas Septentrional',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1132,
            deptoNombre: 'Papúa',
            deptoPais: 'IDS'
        },
        {
            deptoId: 1133,
            deptoNombre: 'Provincia de Papúa Occidental ',
            deptoPais: 'IDS'
        },
        //IRAK
        {
            deptoId: 1134,
            deptoNombre: 'Bagdad',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1135,
            deptoNombre: 'Saladino',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1136,
            deptoNombre: 'Diyala',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1137,
            deptoNombre: 'Wasit',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1138,
            deptoNombre: 'Mesena',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1139,
            deptoNombre: 'Basora',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1140,
            deptoNombre: 'Di Car',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1141,
            deptoNombre: 'Mutanna',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1142,
            deptoNombre: 'Cadisia',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1143,
            deptoNombre: 'Babilonia',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1144,
            deptoNombre: 'Kerbala',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1145,
            deptoNombre: 'Nayaf ',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1146,
            deptoNombre: 'Anbar',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1147,
            deptoNombre: 'Nínive',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1148,
            deptoNombre: 'Dahuk',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1149,
            deptoNombre: 'Erbil',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1150,
            deptoNombre: 'Kirkuk',
            deptoPais: 'IRK'
        },
        {
            deptoId: 1151,
            deptoNombre: 'Solimania ',
            deptoPais: 'IRK'
        },
        //IRÁN
        {
            deptoId: 1152,
            deptoNombre: 'Teherán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1153,
            deptoNombre: 'Qom',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1154,
            deptoNombre: 'Markazi',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1155,
            deptoNombre: 'Qazvin',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1156,
            deptoNombre: 'Guilán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1157,
            deptoNombre: 'Ardabil',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1158,
            deptoNombre: 'Zanyán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1159,
            deptoNombre: 'Azerbaiyán Oriental',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1160,
            deptoNombre: 'Azerbaiyán Occidental',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1161,
            deptoNombre: 'Kurdistán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1162,
            deptoNombre: 'Hamadán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1163,
            deptoNombre: 'Kermanshah',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1164,
            deptoNombre: 'Ilam',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1165,
            deptoNombre: 'Lorestán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1166,
            deptoNombre: 'Juzestán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1167,
            deptoNombre: 'Chahar Mahal y Bajtiarí',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1168,
            deptoNombre: 'Kohkiluyeh y Buyer Ahmad',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1169,
            deptoNombre: 'Bushehr',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1170,
            deptoNombre: 'Fars',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1171,
            deptoNombre: 'Hormozgan',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1172,
            deptoNombre: 'Elburz',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1173,
            deptoNombre: 'Sistán y Baluchistán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1174,
            deptoNombre: 'Kermán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1175,
            deptoNombre: 'Yazd',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1176,
            deptoNombre: 'Isfahán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1177,
            deptoNombre: 'Semnán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1178,
            deptoNombre: 'Mazandarán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1179,
            deptoNombre: 'Golestán',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1180,
            deptoNombre: 'Jorasán del Norte',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1181,
            deptoNombre: 'Jorasán Razaví',
            deptoPais: 'IRN'
        },
        {
            deptoId: 1182,
            deptoNombre: 'Jorasán Sur',
            deptoPais: 'IRN'
        },
        //IRLANDA
        {
            deptoId: 1183,
            deptoNombre: 'Leinster',
            deptoPais: 'IRL'
        },
        {
            deptoId: 1184,
            deptoNombre: 'Úlster',
            deptoPais: 'IRL'
        },
        {
            deptoId: 1185,
            deptoNombre: 'Munster',
            deptoPais: 'IRL'
        },
        {
            deptoId: 1186,
            deptoNombre: 'Connacht',
            deptoPais: 'IRL'
        },
        //ISLANDIA
        {
            deptoId: 1187,
            deptoNombre: 'Árnessýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1188,
            deptoNombre: 'Austur-Barðastrandarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1189,
            deptoNombre: 'Austur-Húnavatnssýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1190,
            deptoNombre: 'Austur-Skaftafellssýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1191,
            deptoNombre: 'Borgarfjarðarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1192,
            deptoNombre: 'Dalasýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1193,
            deptoNombre: 'Eyjafjarðarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1194,
            deptoNombre: 'Gullbringusýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1195,
            deptoNombre: 'Kjósarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1196,
            deptoNombre: 'Mýrasýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1197,
            deptoNombre: 'Norður-Ísafjarðarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1198,
            deptoNombre: 'Norður-Múlasýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1199,
            deptoNombre: 'Norður-Þingeyjarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1200,
            deptoNombre: 'Rangárvallasýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1201,
            deptoNombre: 'Skagafjarðarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1202,
            deptoNombre: 'Snæfellsnes-og Hnappadalssýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1203,
            deptoNombre: 'Strandasýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1204,
            deptoNombre: 'Suður-Múlasýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1205,
            deptoNombre: 'Suður-Þingeyjarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1206,
            deptoNombre: 'Vestur-Barðastrandarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1207,
            deptoNombre: 'Vestur-Húnavatnssýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1208,
            deptoNombre: 'Vestur-Ísafjarðarsýsla',
            deptoPais: 'ISL'
        },
        {
            deptoId: 1209,
            deptoNombre: 'Vestur-Skaftafellssýsla',
            deptoPais: 'ISL'
        },
       // ISLAS MARSHALL
        {
            deptoId: 1210,
            deptoNombre: 'Ailinglaplap',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1211,
            deptoNombre: 'Ailuk',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1212,
            deptoNombre: 'Arno',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1213,
            deptoNombre: 'Aur',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1214,
            deptoNombre: 'Bikar',
            deptoPais: 'ISM'
        },
        //{
        //    deptoId: 1215,
        //    deptoNombre: 'Bokak',
        //    deptoPais: 'ISM'
        //},
        {
            deptoId: 1216,
            deptoNombre: 'Ebon',
            deptoPais: 'ISM'
        },
        //{
        //    deptoId: 1217,
        //    deptoNombre: 'Enewetak',
        //    deptoPais: 'ISM'
        //},
        //{
        //    deptoId: 1218,
        //    deptoNombre: 'Erikub',
        //    deptoPais: 'ISM'
        //},
        {
            deptoId: 1219,
            deptoNombre: 'Jabat',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1220,
            deptoNombre: 'Jaluit',
            deptoPais: 'ISM'
        },
        //{
        //    deptoId: 1221,
        //    deptoNombre: 'Jemo',
        //    deptoPais: 'ISM'
        //},
        {
            deptoId: 1222,
            deptoNombre: 'Kili',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1223,
            deptoNombre: 'Kwajalein',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1224,
            deptoNombre: 'Lae',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1225,
            deptoNombre: 'Lib',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1226,
            deptoNombre: 'Likiep',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1227,
            deptoNombre: 'Majuro',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1228,
            deptoNombre: 'Maloelap',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1229,
            deptoNombre: 'Mejit',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1230,
            deptoNombre: 'Mili',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1231,
            deptoNombre: 'Namorik',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1232,
            deptoNombre: 'Namu',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1233,
            deptoNombre: 'Rongelap',
            deptoPais: 'ISM'
        },
        //{
        //    deptoId: 1234,
        //    deptoNombre: 'Rongrik',
        //    deptoPais: 'ISM'
        //},
        //{
        //    deptoId: 1235,
        //    deptoNombre: 'Toke',
        //    deptoPais: 'ISM'
        //},
        {
            deptoId: 1236,
            deptoNombre: 'Ujae',
            deptoPais: 'ISM'
        },
        //{
        //    deptoId: 1237,
        //    deptoNombre: 'Ujelang',
        //    deptoPais: 'ISM'
        //},
        {
            deptoId: 1238,
            deptoNombre: 'Utirik',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1239,
            deptoNombre: 'Wotho',
            deptoPais: 'ISM'
        },
        {
            deptoId: 1240,
            deptoNombre: 'Wotje',
            deptoPais: 'ISM'
        },
        //ISLAS SALOMON
        {
            deptoId: 1241,
            deptoNombre: 'Provincia Central	',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1242,
            deptoNombre: 'Choiseul',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1243,
            deptoNombre: 'Guadalcanal',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1244,
            deptoNombre: 'Isabel',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1245,
            deptoNombre: 'Makira-Ulawa',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1246,
            deptoNombre: 'Malaita',
            deptoPais: 'ISS'
        },
        {
            deptoId:1247 ,
            deptoNombre: 'Rennell y Bellona',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1248,
            deptoNombre: 'Temotu',
            deptoPais: 'ISS'
        },
        {
            deptoId: 1249,
            deptoNombre: 'Occidental',
            deptoPais: 'ISS'
        },
        //ISRAEL
        {
            deptoId: 1250,
            deptoNombre: 'Distrito Central',
            deptoPais: 'ISR'
        },
        {
            deptoId: 1251,
            deptoNombre: 'Distrito de Haifa',
            deptoPais: 'ISR'
        },
        {
            deptoId: 1252,
            deptoNombre: 'Distrito de Jerusalén',
            deptoPais: 'ISR'
        },
        {
            deptoId: 1253,
            deptoNombre: 'Distrito Meridional',
            deptoPais: 'ISR'
        },
        {
            deptoId: 1254,
            deptoNombre: 'Distrito Norte',
            deptoPais: 'ISR'
        },
        {
            deptoId: 1255,
            deptoNombre: 'Distrito de Tel Aviv',
            deptoPais: 'ISR'
        },
        //ITALIA
        {
            deptoId: 1256,
            deptoNombre: 'Abruzos',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1257,
            deptoNombre: 'Apulia',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1258,
            deptoNombre: 'Basilicata',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1259,
            deptoNombre: 'Calabria',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1260,
            deptoNombre: 'Campania',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1261,
            deptoNombre: 'Cerdeña',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1262,
            deptoNombre: 'Emilia-Romaña',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1263,
            deptoNombre: 'Friuli-Venecia Julia',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1264,
            deptoNombre: 'Lacio',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1265,
            deptoNombre: 'Liguria',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1266,
            deptoNombre: 'Lombardía',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1267,
            deptoNombre: 'Marcas',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1268,
            deptoNombre: 'Molise',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1269,
            deptoNombre: 'Piamonte',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1270,
            deptoNombre: 'Sicilia',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1271,
            deptoNombre: 'Toscana',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1272,
            deptoNombre: 'Trentino-Alto Adigio',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1273,
            deptoNombre: 'Umbría',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1274,
            deptoNombre: 'Valle de Aosta',
            deptoPais: 'ITA'
        },
        {
            deptoId: 1275,
            deptoNombre: 'Véneto',
            deptoPais: 'ITA'
        },
        //JAMAICA
        {
            deptoId: 1276,
            deptoNombre: 'Condado de Cornwall',
            deptoPais: 'JAM'
        },
        {
            deptoId: 1277,
            deptoNombre: 'Condado de Middlesex',
            deptoPais: 'JAM'
        },
        {
            deptoId: 1278,
            deptoNombre: 'Condado de Surrey',
            deptoPais: 'JAM'
        },
        //JAPON
        {
            deptoId: 1279,
            deptoNombre: 'Prefectura de Aichi',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1280,
            deptoNombre: 'Prefectura de Akita',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1281,
            deptoNombre: 'Prefectura de Aomori',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1282,
            deptoNombre: 'Prefectura de Chiba',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1283,
            deptoNombre: 'Prefectura de Ehime',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1284,
            deptoNombre: 'Prefectura de Fukui',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1285,
            deptoNombre: 'Prefectura de Fukuoka',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1286,
            deptoNombre: 'Prefectura de Fukushima',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1287,
            deptoNombre: 'Prefectura de Gifu',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1288,
            deptoNombre: 'Prefectura de Gunma',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1289,
            deptoNombre: 'Prefectura de Hiroshima',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1290,
            deptoNombre: 'Prefectura de Hokkaidō',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1291,
            deptoNombre: 'Prefectura de Hyōgo',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1292,
            deptoNombre: 'Prefectura de Ibaraki',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1293,
            deptoNombre: 'Prefectura de Ishikawa',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1294,
            deptoNombre: 'Prefectura de Iwate',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1295,
            deptoNombre: 'Prefectura de Kagawa',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1296,
            deptoNombre: 'Prefectura de Kagoshima',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1297,
            deptoNombre: 'Prefectura de Kanagawa',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1298,
            deptoNombre: 'Prefectura de Kioto',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1299,
            deptoNombre: 'Prefectura de Kōchi',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1300,
            deptoNombre: 'Prefectura de Kumamoto',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1301,
            deptoNombre: 'Prefectura de Mie',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1302,
            deptoNombre: 'Prefectura de Miyagi',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1303,
            deptoNombre: 'Prefectura de Miyazaki',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1304,
            deptoNombre: 'Prefectura de Nagano',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1305,
            deptoNombre: 'Prefectura de Nagasaki',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1306,
            deptoNombre: 'Prefectura de Nara',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1307,
            deptoNombre: 'Prefectura de Niigata',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1308,
            deptoNombre: 'Prefectura de Ōita',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1309,
            deptoNombre: 'Prefectura de Okayama',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1310,
            deptoNombre: 'Prefectura de Okinawa',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1311,
            deptoNombre: 'Prefectura de Osaka',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1312,
            deptoNombre: 'Prefectura de Saga',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1313,
            deptoNombre: 'Prefectura de Saitama',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1314,
            deptoNombre: 'Prefectura de Shiga',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1315,
            deptoNombre: 'Prefectura de Shimane',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1316,
            deptoNombre: 'Prefectura de Shizuoka',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1317,
            deptoNombre: 'Prefectura de Tochigi',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1318,
            deptoNombre: 'Prefectura de Tokushima',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1319,
            deptoNombre: 'Prefectura de Tottori',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1320,
            deptoNombre: 'Prefectura de Toyama',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1321,
            deptoNombre: 'Prefectura de Wakayama',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1322,
            deptoNombre: 'Prefectura de Yamagata',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1323,
            deptoNombre: 'Prefectura de Yamaguchi',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1324,
            deptoNombre: 'Prefectura de Yamanashi',
            deptoPais: 'JAP'
        },
        {
            deptoId: 1325,
            deptoNombre: 'Tokio',
            deptoPais: 'JAP'
        },
        //JORDANIA
        {
            deptoId: 1326,
            deptoNombre: 'Gobernación de Ammán',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1327,
            deptoNombre: 'Gobernación de Irbid	',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1328,
            deptoNombre: 'Gobernación de Zarqa	',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1329,
            deptoNombre: "Gobernación de Al Balqa'",
            deptoPais: 'JOR'
        },
        {
            deptoId: 1330,
            deptoNombre: 'Gobernación de Al Mafraq',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1331,
            deptoNombre: 'Gobernación de Al Karak',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1332,
            deptoNombre: 'Gobernación de Jarash',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1333,
            deptoNombre: 'Gobernación de Madaba',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1334,
            deptoNombre: 'Gobernación de Ajlun	',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1335,
            deptoNombre: 'Gobernación de Aqaba	',
            deptoPais: 'JOR'
        },
        {
            deptoId: 1336,
            deptoNombre: "Gobernación de Ma'an",
            deptoPais: 'JOR'
        },
        {
            deptoId: 1337,
            deptoNombre: 'Gobernación de At Tafilah',
            deptoPais: 'JOR'
        },
        //KAZAJISTAN
        {
            deptoId: 1338,
            deptoNombre: 'Akmola ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1339,
            deptoNombre: 'Aktobé ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1340,
            deptoNombre: ' Almatý',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1341,
            deptoNombre: 'Almatý ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1342,
            deptoNombre: 'Astana ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1343,
            deptoNombre: 'Atyrau ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1344,
            deptoNombre: 'Baikonur ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1345,
            deptoNombre: 'Karagandá ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1346,
            deptoNombre: 'Kazajistán Meridional ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1347,
            deptoNombre: 'Kazajistán Occidental ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1348,
            deptoNombre: 'Kazajistán Oriental ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1349,
            deptoNombre: 'Kazajistán Septentrional ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1350,
            deptoNombre: 'Kostanay ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1351,
            deptoNombre: 'Kyzylorda ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1352,
            deptoNombre: 'Mangystau ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1353,
            deptoNombre: 'Pavlodar ',
            deptoPais: 'KAZ'
        },
        {
            deptoId: 1354,
            deptoNombre: 'Zhambyl ',
            deptoPais: 'KAZ'
        },
        //KENIA
        {
            deptoId: 1355,
            deptoNombre: 'Baringo',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1356,
            deptoNombre: 'Bomet',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1357,
            deptoNombre: 'Bungoma',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1358,
            deptoNombre: 'Busia',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1359,
            deptoNombre: 'Elgeyo-Marakwet',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1360,
            deptoNombre: 'Embu',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1361,
            deptoNombre: 'Garissa',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1362,
            deptoNombre: 'Homa Bay',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1363,
            deptoNombre: 'Isiolo',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1364,
            deptoNombre: 'Kajiado',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1365,
            deptoNombre: 'Kakamega',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1366,
            deptoNombre: 'Kericho',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1367,
            deptoNombre: 'Kiambu',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1368,
            deptoNombre: 'Kilifi',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1369,
            deptoNombre: 'Kirinyaga',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1370,
            deptoNombre: 'Kisii',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1371,
            deptoNombre: 'Kisumu',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1372,
            deptoNombre: 'Kitui',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1373,
            deptoNombre: 'Kwale',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1374,
            deptoNombre: 'Laikipia',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1375,
            deptoNombre: 'Lamu',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1376,
            deptoNombre: 'Machakos',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1377,
            deptoNombre: 'Makueni',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1378,
            deptoNombre: 'Mandera',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1379,
            deptoNombre: 'Marsabit',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1380,
            deptoNombre: '	Meru',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1381,
            deptoNombre: 'Migori',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1382,
            deptoNombre: 'Mombasa',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1383,
            deptoNombre: "Murang'a",
            deptoPais: 'KEN'
        },
        {
            deptoId: 1384,
            deptoNombre: 'Nairobi',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1385,
            deptoNombre: 'Nakuru',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1386,
            deptoNombre: 'Nandi',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1387,
            deptoNombre: 'Narok',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1388,
            deptoNombre: 'Nyamira',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1389,
            deptoNombre: 'Nyandarua',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1390,
            deptoNombre: 'Nyeri',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1391,
            deptoNombre: 'Río Tana',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1392,
            deptoNombre: '	Samburu',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1393,
            deptoNombre: 'Siaya',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1394,
            deptoNombre: 'Taita-Taveta',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1395,
            deptoNombre: 'Tharaka-Nithi',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1396,
            deptoNombre: 'Trans-Nzoia',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1397,
            deptoNombre: 'Turkana',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1398,
            deptoNombre: 'Uasin Gishu',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1399,
            deptoNombre: 'Vihiga',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1400,
            deptoNombre: 'Wajir',
            deptoPais: 'KEN'
        },
        {
            deptoId: 1401,
            deptoNombre: 'West Pokot',
            deptoPais: 'KEN'
        },
        //KIRGUISTÁN
        {
            deptoId: 1402,
            deptoNombre: 'Biskek',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1403,
            deptoNombre: 'Batken',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1404,
            deptoNombre: 'Chuy',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1405,
            deptoNombre: 'Jalal-Abad',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1406,
            deptoNombre: 'Naryn',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1407,
            deptoNombre: 'Osh',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1408,
            deptoNombre: 'Talas',
            deptoPais: 'KIR'
        },
        {
            deptoId: 1409,
            deptoNombre: 'Ysyk-Kol',
            deptoPais: 'KIR'
        },
        //KIRIBATI
        {
            deptoId: 1410,
            deptoNombre: 'Islas Gilbert',
            deptoPais: 'KIB'
        },
        {
            deptoId: 1411,
            deptoNombre: 'Islas de la Línea',
            deptoPais: 'KIB'
        },
        {
            deptoId: 1412,
            deptoNombre: 'Islas Fénix',
            deptoPais: 'KIB'
        },
        //KOSOVO
        {
            deptoId: 1413,
            deptoNombre: 'Distrito de Dakovica',
            deptoPais: 'KOS'
        },
        {
            deptoId: 1414,
            deptoNombre: 'Distrito de Gnjilane',
            deptoPais: 'KOS'
        },
        {
            deptoId: 1415,
            deptoNombre: 'Distrito de Kosovo Mitrovica',
            deptoPais: 'KOS'
        },
        {
            deptoId: 1416,
            deptoNombre: 'Distrito de Peć',
            deptoPais: 'KOS'
        },
        {
            deptoId: 1417,
            deptoNombre: 'Distrito de Pristina',
            deptoPais: 'KOS'
        },
        {
            deptoId: 1418,
            deptoNombre: 'Distrito de Prizren',
            deptoPais: 'KOS'
        },
        {
            deptoId: 1419,
            deptoNombre: 'Distrito de Uroševac',
            deptoPais: 'KOS'
        },
        //KUWAIT
        {
            deptoId: 1420,
            deptoNombre: 'Ahmadí',
            deptoPais: 'KUW'
        },
        {
            deptoId: 1421,
            deptoNombre: 'Al Asimah',
            deptoPais: 'KUW'
        },
        {
            deptoId: 1422,
            deptoNombre: 'Farwaniya',
            deptoPais: 'KUW'
        },
        {
            deptoId: 1423,
            deptoNombre: 'Yahra',
            deptoPais: 'KUW'
        },
        {
            deptoId: 1424,
            deptoNombre: 'Hawalli',
            deptoPais: 'KUW'
        },
        {
            deptoId: 1425,
            deptoNombre: 'Mubarak Al-Kabeer',
            deptoPais: 'KUW'
        },
        //LAOS
        {
            deptoId: 1426,
            deptoNombre: 'Provincia de Attapu',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1427,
            deptoNombre: 'Provincia de Bokeo',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1428,
            deptoNombre: 'Provincia de Bolikhamxai',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1429,
            deptoNombre: 'Provincia de Champasak',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1430,
            deptoNombre: 'Provincia de Houaphan',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1431,
            deptoNombre: 'Provincia de Khammouan',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1432,
            deptoNombre: 'Provincia de Luang Namtha',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1433,
            deptoNombre: 'Provincia de Luang Prabang',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1434,
            deptoNombre: 'Provincia de Oudomxai',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1435,
            deptoNombre: 'Provincia de Phongsali',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1436,
            deptoNombre: 'Provincia de Sainyabuli',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1437,
            deptoNombre: 'Provincia de Salavan',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1438,
            deptoNombre: 'Provincia de Savannakhet',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1439,
            deptoNombre: 'Provincia de Sekong',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1440,
            deptoNombre: 'Prefectura de Vientián',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1441,
            deptoNombre: 'Provincia de Vientián',
            deptoPais: 'LAO'
        },
        {
            deptoId: 1442,
            deptoNombre: 'Provincia de Xiangkhoang',
            deptoPais: 'LAO'
        },
        //LESOTO
        {
            deptoId: 1443,
            deptoNombre: 'Berea',
            deptoPais: 'LES'
        },
        {
            deptoId: 1444,
            deptoNombre: 'Butha-Buthe',
            deptoPais: 'LES'
        },
        {
            deptoId: 1445,
            deptoNombre: 'Leribe',
            deptoPais: 'LES'
        },
        {
            deptoId: 1446,
            deptoNombre: 'Mafeteng',
            deptoPais: 'LES'
        },
        {
            deptoId: 1447,
            deptoNombre: 'Maseru',
            deptoPais: 'LES'
        },
        {
            deptoId: 1448,
            deptoNombre: "Mohale's Hoek",
            deptoPais: 'LES'
        },
        {
            deptoId: 1449,
            deptoNombre: 'Mokhotlong',
            deptoPais: 'LES'
        },
        {
            deptoId: 1450,
            deptoNombre: "Qacha's Nek",
            deptoPais: 'LES'
        },
        {
            deptoId: 1451,
            deptoNombre: 'Quthing',
            deptoPais: 'LES'
        },
        {
            deptoId: 1452,
            deptoNombre: 'Thaba-Tseka',
            deptoPais: 'LES'
        },
        //LETONIA
        {
            deptoId: 1453,
            deptoNombre: 'Aglona',
            deptoPais: 'LET'
        },
        {
            deptoId: 1454,
            deptoNombre: 'Aizkraukle',
            deptoPais: 'LET'
        },
        {
            deptoId: 1455,
            deptoNombre: 'Aizpute',
            deptoPais: 'LET'
        },
        {
            deptoId: 1456,
            deptoNombre: 'Aknīste',
            deptoPais: 'LET'
        },
        {
            deptoId: 1457,
            deptoNombre: 'Aloja',
            deptoPais: 'LET'
        },
        {
            deptoId: 1458,
            deptoNombre: 'Alsunga',
            deptoPais: 'LET'
        },
        {
            deptoId: 1459,
            deptoNombre: 'Alūksne',
            deptoPais: 'LET'
        },
        {
            deptoId: 1460,
            deptoNombre: 'Amata',
            deptoPais: 'LET'
        },
        {
            deptoId: 1461,
            deptoNombre: 'Ape',
            deptoPais: 'LET'
        },
        {
            deptoId: 1462,
            deptoNombre: 'Auce',
            deptoPais: 'LET'
        },
        {
            deptoId: 1463,
            deptoNombre: 'Ādaži',
            deptoPais: 'LET'
        },
        {
            deptoId: 1464,
            deptoNombre: 'Babīte',
            deptoPais: 'LET'
        },
        {
            deptoId: 1465,
            deptoNombre: 'Baldone',
            deptoPais: 'LET'
        },
        {
            deptoId: 1466,
            deptoNombre: 'Baltinava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1467,
            deptoNombre: 'Balvi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1468,
            deptoNombre: 'Bauska',
            deptoPais: 'LET'
        },
        {
            deptoId: 1469,
            deptoNombre: 'Beverīna',
            deptoPais: 'LET'
        },
        {
            deptoId: 1470,
            deptoNombre: 'Brocēni',
            deptoPais: 'LET'
        },
        {
            deptoId: 1471,
            deptoNombre: 'Burtnieki',
            deptoPais: 'LET'
        },
        {
            deptoId: 1472,
            deptoNombre: 'Carnikava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1473,
            deptoNombre: 'Cēsis',
            deptoPais: 'LET'
        },
        {
            deptoId: 1474,
            deptoNombre: 'Cesvaine',
            deptoPais: 'LET'
        },
        {
            deptoId: 1475,
            deptoNombre: 'Cibla',
            deptoPais: 'LET'
        },
        {
            deptoId: 1476,
            deptoNombre: 'Dagda',
            deptoPais: 'LET'
        },
        {
            deptoId: 1477,
            deptoNombre: 'Daugavpils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1478,
            deptoNombre: 'Dobele',
            deptoPais: 'LET'
        },
        {
            deptoId: 1479,
            deptoNombre: 'Dundaga',
            deptoPais: 'LET'
        },
        {
            deptoId: 1480,
            deptoNombre: 'Durbe',
            deptoPais: 'LET'
        },
        {
            deptoId: 1481,
            deptoNombre: 'Engure',
            deptoPais: 'LET'
        },
        {
            deptoId: 1482,
            deptoNombre: 'Ērgļi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1483,
            deptoNombre: 'Garkalne',
            deptoPais: 'LET'
        },
        {
            deptoId: 1484,
            deptoNombre: 'Grobiņa',
            deptoPais: 'LET'
        },
        {
            deptoId: 1485,
            deptoNombre: 'Gulbene',
            deptoPais: 'LET'
        },
        {
            deptoId: 1486,
            deptoNombre: 'Iecava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1487,
            deptoNombre: 'Ikšķile',
            deptoPais: 'LET'
        },
        {
            deptoId: 1488,
            deptoNombre: 'Inčukalns',
            deptoPais: 'LET'
        },
        {
            deptoId: 1489,
            deptoNombre: 'Ilūkste',
            deptoPais: 'LET'
        },
        {
            deptoId: 1490,
            deptoNombre: 'Jaunjelgava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1491,
            deptoNombre: 'Jaunpiebalga',
            deptoPais: 'LET'
        },
        {
            deptoId: 1492,
            deptoNombre: 'Jaunpils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1493,
            deptoNombre: 'Jēkabpils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1494,
            deptoNombre: 'Jelgava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1495,
            deptoNombre: 'Kandava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1496,
            deptoNombre: 'Kārsava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1497,
            deptoNombre: 'Koknese',
            deptoPais: 'LET'
        },
        {
            deptoId: 1498,
            deptoNombre: 'Krāslava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1499,
            deptoNombre: 'Krimulda',
            deptoPais: 'LET'
        },
        {
            deptoId: 1500,
            deptoNombre: 'Krustpils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1501,
            deptoNombre: 'Kuldīga',
            deptoPais: 'LET'
        },
        {
            deptoId: 1502,
            deptoNombre: 'Ķegums',
            deptoPais: 'LET'
        },
        {
            deptoId: 1503,
            deptoNombre: 'Ķekava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1504,
            deptoNombre: 'Lielvārde',
            deptoPais: 'LET'
        },
        {
            deptoId: 1505,
            deptoNombre: 'Līgatne',
            deptoPais: 'LET'
        },
        {
            deptoId: 1506,
            deptoNombre: 'Limbaži',
            deptoPais: 'LET'
        },
        {
            deptoId: 1507,
            deptoNombre: 'Līvāni',
            deptoPais: 'LET'
        },
        {
            deptoId: 1508,
            deptoNombre: 'Lubāna',
            deptoPais: 'LET'
        },
        {
            deptoId: 1509,
            deptoNombre: 'Ludza',
            deptoPais: 'LET'
        },
        {
            deptoId: 1510,
            deptoNombre: 'Madona',
            deptoPais: 'LET'
        },
        {
            deptoId: 1511,
            deptoNombre: 'Mālpils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1512,
            deptoNombre: 'Mārupe',
            deptoPais: 'LET'
        },
        {
            deptoId: 1513,
            deptoNombre: 'Mazsalaca',
            deptoPais: 'LET'
        },
        {
            deptoId: 1514,
            deptoNombre: 'Mērsrags',
            deptoPais: 'LET'
        },
        {
            deptoId: 1515,
            deptoNombre: 'Naukšēni',
            deptoPais: 'LET'
        },
        {
            deptoId: 1516,
            deptoNombre: 'Nereta',
            deptoPais: 'LET'
        },
        {
            deptoId: 1517,
            deptoNombre: 'Nīca',
            deptoPais: 'LET'
        },
        {
            deptoId: 1518,
            deptoNombre: 'Ogre',
            deptoPais: 'LET'
        },
        {
            deptoId: 1519,
            deptoNombre: 'Olaine',
            deptoPais: 'LET'
        },
        {
            deptoId: 1520,
            deptoNombre: 'Ozolnieki',
            deptoPais: 'LET'
        },
        {
            deptoId: 1521,
            deptoNombre: 'Pārgauja',
            deptoPais: 'LET'
        },
        {
            deptoId: 1522,
            deptoNombre: 'Pāvilosta',
            deptoPais: 'LET'
        },
        {
            deptoId: 1523,
            deptoNombre: 'Pļaviņas',
            deptoPais: 'LET'
        },
        {
            deptoId: 1524,
            deptoNombre: 'Preiļi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1525,
            deptoNombre: 'Priekule',
            deptoPais: 'LET'
        },
        {
            deptoId: 1526,
            deptoNombre: 'Priekuļi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1527,
            deptoNombre: 'Rauna',
            deptoPais: 'LET'
        },
        {
            deptoId: 1528,
            deptoNombre: 'Rēzekne',
            deptoPais: 'LET'
        },
        {
            deptoId: 1529,
            deptoNombre: 'Riebiņi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1530,
            deptoNombre: 'Roja',
            deptoPais: 'LET'
        },
        {
            deptoId: 1531,
            deptoNombre: 'Ropaži',
            deptoPais: 'LET'
        },
        {
            deptoId: 1532,
            deptoNombre: 'Rucava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1533,
            deptoNombre: 'Rugāji',
            deptoPais: 'LET'
        },
        {
            deptoId: 1534,
            deptoNombre: 'Rundāle',
            deptoPais: 'LET'
        },
        {
            deptoId: 1535,
            deptoNombre: 'Rūjiena',
            deptoPais: 'LET'
        },
        {
            deptoId: 1536,
            deptoNombre: 'Salacgrīva',
            deptoPais: 'LET'
        },
        {
            deptoId: 1537,
            deptoNombre: 'Sala',
            deptoPais: 'LET'
        },
        {
            deptoId: 1538,
            deptoNombre: 'Salaspils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1539,
            deptoNombre: 'Saldus',
            deptoPais: 'LET'
        },
        {
            deptoId: 1540,
            deptoNombre: 'Saulkrasti',
            deptoPais: 'LET'
        },
        {
            deptoId: 1541,
            deptoNombre: 'Sēja',
            deptoPais: 'LET'
        },
        {
            deptoId: 1542,
            deptoNombre: 'Sigulda',
            deptoPais: 'LET'
        },
        {
            deptoId: 1543,
            deptoNombre: 'Skrīveri',
            deptoPais: 'LET'
        },
        {
            deptoId: 1544,
            deptoNombre: 'Skrunda',
            deptoPais: 'LET'
        },
        {
            deptoId: 1545,
            deptoNombre: 'Smiltene',
            deptoPais: 'LET'
        },
        {
            deptoId: 1546,
            deptoNombre: 'Stopiņi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1547,
            deptoNombre: 'Strenči',
            deptoPais: 'LET'
        },
        {
            deptoId: 1548,
            deptoNombre: 'Talsi',
            deptoPais: 'LET'
        },
        {
            deptoId: 1549,
            deptoNombre: 'Tērvete',
            deptoPais: 'LET'
        },
        {
            deptoId: 1550,
            deptoNombre: 'Tukums',
            deptoPais: 'LET'
        },
        {
            deptoId: 1551,
            deptoNombre: 'Vaiņode',
            deptoPais: 'LET'
        },
        {
            deptoId: 1552,
            deptoNombre: 'Valka',
            deptoPais: 'LET'
        },
        {
            deptoId: 1553,
            deptoNombre: 'Valmiera',
            deptoPais: 'LET'
        },
        {
            deptoId: 1554,
            deptoNombre: 'Varakļāni',
            deptoPais: 'LET'
        },
        {
            deptoId: 1555,
            deptoNombre: 'Vārkava',
            deptoPais: 'LET'
        },
        {
            deptoId: 1556,
            deptoNombre: 'Vecpiebalga',
            deptoPais: 'LET'
        },
        {
            deptoId: 1557,
            deptoNombre: 'Vecumnieki',
            deptoPais: 'LET'
        },
        {
            deptoId: 1558,
            deptoNombre: 'Ventspils',
            deptoPais: 'LET'
        },
        {
            deptoId: 1559,
            deptoNombre: 'Viesīte',
            deptoPais: 'LET'
        },
        {
            deptoId: 1560,
            deptoNombre: 'Viļaka',
            deptoPais: 'LET'
        },
        {
            deptoId: 1561,
            deptoNombre: 'Viļāni',
            deptoPais: 'LET'
        },
        {
            deptoId: 1562,
            deptoNombre: 'Zilupe',
            deptoPais: 'LET'
        },
        //LÍBANO
        {
            deptoId: 1563,
            deptoNombre: 'Akkar ',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1564,
            deptoNombre: 'Baalbeck-Hermel',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1565,
            deptoNombre: 'Beirut ',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1566,
            deptoNombre: 'Bekaa ',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1567,
            deptoNombre: 'Líbano-Norte',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1568,
            deptoNombre: 'Líbano-Sur ',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1569,
            deptoNombre: 'Monte Líbano',
            deptoPais: 'LIB'
        },
        {
            deptoId: 1570,
            deptoNombre: 'Nabatiye',
            deptoPais: 'LIB'
        },
        //LIBERIA
        {
            deptoId: 1571,
            deptoNombre: 'Bomi',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1572,
            deptoNombre: 'Bong',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1573,
            deptoNombre: 'Gbarpolu',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1574,
            deptoNombre: 'Grand Bassa',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1575,
            deptoNombre: 'Grand Cape Mount',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1576,
            deptoNombre: 'Grand Gedeh',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1577,
            deptoNombre: 'Grand Kru',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1578,
            deptoNombre: 'Lofa',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1579,
            deptoNombre: 'Margibi',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1580,
            deptoNombre: 'Maryland',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1581,
            deptoNombre: 'Montserrado',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1582,
            deptoNombre: 'Nimba',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1583,
            deptoNombre: 'River Cess',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1584,
            deptoNombre: 'River Gee',
            deptoPais: 'LIA'
        },
        {
            deptoId: 1585,
            deptoNombre: 'Sinoe',
            deptoPais: 'LIA'
        },
        //LIBIA
        {
            deptoId: 1586,
            deptoNombre: 'Al Butnan	',
            deptoPais: 'LII'
        },
        {
            deptoId: 1587,
            deptoNombre: 'Derna',
            deptoPais: 'LII'
        },
        {
            deptoId: 1588,
            deptoNombre: 'Al Jabal al Akhdar',
            deptoPais: 'LII'
        },
        {
            deptoId: 1589,
            deptoNombre: 'Al Marj',
            deptoPais: 'LII'
        },
        {
            deptoId: 1590,
            deptoNombre: 'Bengasi',
            deptoPais: 'LII'
        },
        {
            deptoId: 1591,
            deptoNombre: 'Al Wahat',
            deptoPais: 'LII'
        },
        {
            deptoId: 1592,
            deptoNombre: 'Al Kufrah',
            deptoPais: 'LII'
        },
        {
            deptoId: 1593,
            deptoNombre: 'Sirte',
            deptoPais: 'LII'
        },
        {
            deptoId: 1594,
            deptoNombre: 'Misurata',
            deptoPais: 'LII'
        },
        {
            deptoId: 1595,
            deptoNombre: 'Al Murgub	',
            deptoPais: 'LII'
        },
        {
            deptoId: 1596,
            deptoNombre: 'Trípoli',
            deptoPais: 'LII'
        },
        {
            deptoId: 1597,
            deptoNombre: 'Al Jfara	',
            deptoPais: 'LII'
        },
        {
            deptoId: 1598,
            deptoNombre: 'Zauiya',
            deptoPais: 'LII'
        },
        {
            deptoId: 1599,
            deptoNombre: 'An Nuqat al Khams	',
            deptoPais: 'LII'
        },
        {
            deptoId: 1600,
            deptoNombre: 'Al Jabal al Gharbi',
            deptoPais: 'LII'
        },
        {
            deptoId: 1601,
            deptoNombre: 'Nalut',
            deptoPais: 'LII'
        },
        {
            deptoId: 1602,
            deptoNombre: 'Al Jufrah	',
            deptoPais: 'LII'
        },
        {
            deptoId: 1603,
            deptoNombre: 'Wadi Al Shatii',
            deptoPais: 'LII'
        },
        {
            deptoId: 1604,
            deptoNombre: 'Sabha',
            deptoPais: 'LII'
        },
        {
            deptoId: 1605,
            deptoNombre: 'Wadi Al Hayaa	',
            deptoPais: 'LII'
        },
        {
            deptoId: 1606,
            deptoNombre: 'Ghat',
            deptoPais: 'LII'
        },
        {
            deptoId: 1607,
            deptoNombre: 'Murzuq',
            deptoPais: 'LII'
        },
        //LIECHTENSTEIN
        {
            deptoId: 1608,
            deptoNombre: 'Vaduz',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1609,
            deptoNombre: 'Schaan',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1610,
            deptoNombre: 'Balzers',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1611,
            deptoNombre: 'Triesen',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1612,
            deptoNombre: 'Eschen',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1613,
            deptoNombre: 'Mauren',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1614,
            deptoNombre: 'Triesenberg',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1615,
            deptoNombre: 'Ruggell',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1616,
            deptoNombre: 'Gamprin',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1617,
            deptoNombre: 'Schellenberg',
            deptoPais: 'LIE'
        },
        {
            deptoId: 1618,
            deptoNombre: 'Planken',
            deptoPais: 'LIE'
        },
        //LITUANIA
        {
            deptoId: 1619,
            deptoNombre: 'Alytus',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1620,
            deptoNombre: 'Kaunas',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1621,
            deptoNombre: 'Klaipėda',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1622,
            deptoNombre: 'Marijampolė',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1623,
            deptoNombre: 'Panevėžys',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1624,
            deptoNombre: 'Šiauliai',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1625,
            deptoNombre: 'Tauragė',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1626,
            deptoNombre: 'Telšiai',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1627,
            deptoNombre: 'Utena',
            deptoPais: 'LIT'
        },
        {
            deptoId: 1628,
            deptoNombre: 'Vilna ',
            deptoPais: 'LIT'
        },
        //LUXEMBURGO
        {
            deptoId: 1629,
            deptoNombre: 'Cantón de Clervaux',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1630,
            deptoNombre: 'Cantón de Diekirch',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1631,
            deptoNombre: 'Cantón de Redange',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1632,
            deptoNombre: 'Cantón de Vianden',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1633,
            deptoNombre: 'Cantón de Wiltz',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1634,
            deptoNombre: 'Cantón de Echternach',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1635,
            deptoNombre: 'Cantón de Grevenmacher',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1636,
            deptoNombre: 'Cantón de Remich',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1637,
            deptoNombre: 'Cantón de Capellen',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1638,
            deptoNombre: 'Cantón de Esch-sur-Alzette',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1639,
            deptoNombre: 'Cantón de Luxemburgo',
            deptoPais: 'LUX'
        },
        {
            deptoId: 1640,
            deptoNombre: 'Cantón de Mersch',
            deptoPais: 'LUX'
        },
        //MACEDONIA
        {
            deptoId: 1641,
            deptoNombre: 'Aerodrom (Аеродром)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1642,
            deptoNombre: 'Aračinovo (Арачиново)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1643,
            deptoNombre: 'Berovo (Берово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1644,
            deptoNombre: 'Bitola (Битола)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1645,
            deptoNombre: '	Bogdanci (Богданци)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1646,
            deptoNombre: '	Bogovinje (Боговиње)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1647,
            deptoNombre: 'Bosilovo (Босилово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1648,
            deptoNombre: 'Brvenica (Брвеница)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1649,
            deptoNombre: '	Butel (Бутел)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1650,
            deptoNombre: 'Čair (Чаир)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1651,
            deptoNombre: 'Čaška (Чашка)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1652,
            deptoNombre: '	Centar (Центар)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1653,
            deptoNombre: '	Centar Župa (Центар Жупа)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1654,
            deptoNombre: 'Češinovo-Obleševo (Чешиново-Облешево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1655,
            deptoNombre: 'Čučer-Sandevo (Чучер Сандево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1656,
            deptoNombre: 'Debar (Дебар)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1657,
            deptoNombre: 'Debarca (Дебарца)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1658,
            deptoNombre: '	Delčevo (Делчево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1659,
            deptoNombre: '	Demir Hisar (Демир Хисар)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1660,
            deptoNombre: 'Demir Kapija (Демир Капија)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1661,
            deptoNombre: '	Dojran (Дојран)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1662,
            deptoNombre: 'Dolneni (Долнени)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1663,
            deptoNombre: 'Gazi Baba (Гази Баба)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1664,
            deptoNombre: 'Gevgelija (Гевгелија)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1665,
            deptoNombre: '	Gjorče Petrov (Ѓорче Петров)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1666,
            deptoNombre: '	Gostivar (Гостивар)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1667,
            deptoNombre: 'Gradsko (Градско)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1668,
            deptoNombre: '	Ilinden (Илинден)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1669,
            deptoNombre: '	Jegunovce (Јегуновце)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1670,
            deptoNombre: 'Karbinci (Карбинци)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1671,
            deptoNombre: 'Karpoš (Карпош)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1672,
            deptoNombre: '	Kavadarci (Кавадарци)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1673,
            deptoNombre: '	Kičevo (Кичево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1674,
            deptoNombre: 'Kisela Voda (Кисела Вода)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1675,
            deptoNombre: 'Kočani (Кочани)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1676,
            deptoNombre: 'Konče (Конче)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1677,
            deptoNombre: 'Kratovo (Кратово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1678,
            deptoNombre: 'Kriva Palanka (Крива Паланка)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1679,
            deptoNombre: 'Krivogaštani (Кривогаштани)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1680,
            deptoNombre: 'Kruševo (Крушево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1681,
            deptoNombre: 'Kumanovo (Куманово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1682,
            deptoNombre: 'Lipkovo (Липково)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1683,
            deptoNombre: 'Lozovo (Лозово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1684,
            deptoNombre: 'Makedonska Kamenica (Македонска каменица)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1685,
            deptoNombre: 'Makedonski Brod (Македонски Брод)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1686,
            deptoNombre: 'Mavrovo y Rostuša (Маврово и Ростуша)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1687,
            deptoNombre: 'Mogila (Могила)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1688,
            deptoNombre: 'Negotino (Неготино)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1689,
            deptoNombre: 'Novaci (Новаци)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1690,
            deptoNombre: 'Resen (Ресен)	',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1691,
            deptoNombre: '	Rosoman (Росоман)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1692,
            deptoNombre: 'Saraj (Сарај)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1693,
            deptoNombre: 'Sopište (Сопиште)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1694,
            deptoNombre: 'Staro Nagoričane (Старо Нагоричане)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1695,
            deptoNombre: 'Štip (Штип)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1696,
            deptoNombre: 'Struga (Струга)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1697,
            deptoNombre: 'Strumica (Струмица)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1698,
            deptoNombre: 'Studeničani (Студеничани)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1699,
            deptoNombre: 'Šuto Orizari (Шуто Оризари)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1700,
            deptoNombre: 'Sveti Nikole (Свети Николе)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1701,
            deptoNombre: 'Tearce (Теарце)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1702,
            deptoNombre: 'Tetovo (Тетово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1703,
            deptoNombre: 'Valandovo (Валандово)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1704,
            deptoNombre: '	Vasilevo (Василево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1705,
            deptoNombre: '	Veles (Велес)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1706,
            deptoNombre: 'Vevčani (Вевчани)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1707,
            deptoNombre: 'Vinica (Виница)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1708,
            deptoNombre: 'Vrapčište (Врапчиште)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1709,
            deptoNombre: 'Zelenikovo (Зелениково)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1710,
            deptoNombre: '	Želino (Желино)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1711,
            deptoNombre: 'Zrnovci (Зрновци)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1712,
            deptoNombre: 'Novo Selo (Ново Село)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1713,
            deptoNombre: 'Ocrida (Охрид) ',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1714,
            deptoNombre: 'Pehčevo (Пехчево)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1715,
            deptoNombre: '	Petrovec (Петровец)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1716,
            deptoNombre: 'Plasnica (Пласница)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1717,
            deptoNombre: 'Prilep (Прилеп)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1718,
            deptoNombre: 'Probištip (Пробиштип)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1719,
            deptoNombre: 'Radoviš (Радовиш)',
            deptoPais: 'MAC'
        },
        {
            deptoId: 1720,
            deptoNombre: 'Rankovce (Ранковце)',
            deptoPais: 'MAC'
        },
        //MADAGASCAR
        {
            deptoId: 1721,
            deptoNombre: '	Alaotra-Mangoro',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1722,
            deptoNombre: "Amoron'i Mania",
            deptoPais: 'MAD'
        },
        {
            deptoId: 1723,
            deptoNombre: 'Analamanga',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1743,
            deptoNombre: 'Analanjirofo',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1725,
            deptoNombre: 'Androy',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1726,
            deptoNombre: 'Anosy',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1727,
            deptoNombre: 'Atsimo-Andrefana',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1728,
            deptoNombre: 'Atsimo-Atsinanana',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1729,
            deptoNombre: 'Atsinanana ',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1730,
            deptoNombre: 'Betsiboka',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1731,
            deptoNombre: 'Boeny',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1732,
            deptoNombre: 'Bongolava',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1733,
            deptoNombre: 'Diana',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1734,
            deptoNombre: 'Haute Matsiatra',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1735,
            deptoNombre: 'Ihorombe',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1736,
            deptoNombre: 'Itasy',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1737,
            deptoNombre: 'Melaky',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1738,
            deptoNombre: 'Menabe',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1739,
            deptoNombre: 'Sava',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1740,
            deptoNombre: 'Sofía',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1741,
            deptoNombre: 'Vakinankaratra',
            deptoPais: 'MAD'
        },
        {
            deptoId: 1742,
            deptoNombre: 'Vatovavy-Fitovinany',
            deptoPais: 'MAD'
        },
        //MALASIA
        {
            deptoId: 1743,
            deptoNombre: 'Sultanato de Johor',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1744,
            deptoNombre: 'Sultanato de Kedah',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1745,
            deptoNombre: 'Sultanato de Kelantan',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1746,
            deptoNombre: 'Sultanato de Pahang',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1747,
            deptoNombre: 'Sultanato de Perak',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1748,
            deptoNombre: 'Sultanato de Selangor',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1749,
            deptoNombre: 'Sultanato de Terengganu',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1750,
            deptoNombre: 'Monarquía de Negeri Sembilan',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1751,
            deptoNombre: 'Reino de Perlis',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1752,
            deptoNombre: 'Malaca',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1753,
            deptoNombre: 'Pulau Pinang',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1754,
            deptoNombre: 'Territorio Federal de Putrajaya',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1755,
            deptoNombre: 'Territorio Federal de Kuala Lumpur',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1756,
            deptoNombre: 'Sabah',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1757,
            deptoNombre: 'Sarawak',
            deptoPais: 'MAL'
        },
        {
            deptoId: 1758,
            deptoNombre: 'Territorio Federal de Labuan',
            deptoPais: 'MAL'
        },
        //MALAUI
        {
            deptoId: 1759,
            deptoNombre: 'Región Central',
            deptoPais: 'MAU'
        },
        {
            deptoId: 1760,
            deptoNombre: 'Región del Norte',
            deptoPais: 'MAU'
        },
        {
            deptoId: 1761,
            deptoNombre: 'Región del Sur',
            deptoPais: 'MAU'
        },
        //MALDIVAS
        {
            deptoId: 1762,
            deptoNombre: 'Thiladhunmathi',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1763,
            deptoNombre: 'Miladhunmadulu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1764,
            deptoNombre: 'Maalhosmadulu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1765,
            deptoNombre: 'Faadhippolhu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1766,
            deptoNombre: 'Malé',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1767,
            deptoNombre: 'Ari',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1768,
            deptoNombre: 'Felidhu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1769,
            deptoNombre: 'Mulaku',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1770,
            deptoNombre: 'Nilandhé',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1771,
            deptoNombre: 'Kolhumadulu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1772,
            deptoNombre: 'Haddhunmathi',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1773,
            deptoNombre: 'Huvadhu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1774,
            deptoNombre: 'Fuvammulah',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1775,
            deptoNombre: 'Addu',
            deptoPais: 'MAV'
        },
        {
            deptoId: 1776,
            deptoNombre: 'Maale Uthuruburi',
            deptoPais: 'MAV'
        },
        //MALÍ
        {
            deptoId: 1777,
            deptoNombre: 'Gao',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1778,
            deptoNombre: 'Kayes',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1779,
            deptoNombre: 'Kidal',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1780,
            deptoNombre: 'Kulikoró',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1781,
            deptoNombre: 'Mopti',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1782,
            deptoNombre: 'Segú',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1783,
            deptoNombre: 'Sikasso',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1784,
            deptoNombre: 'Tombuctú',
            deptoPais: 'MAI'
        },
        {
            deptoId: 1785,
            deptoNombre: 'Distrito de Bamako',
            deptoPais: 'MAI'
        },
        //MALTA
        {
            deptoId: 1786,
            deptoNombre: 'Distrito de Gozo y Comino',
            deptoPais: 'MAT'
        },
        {
            deptoId: 1787,
            deptoNombre: 'Distrito del Norte',
            deptoPais: 'MAT'
        },
        {
            deptoId: 1788,
            deptoNombre: 'Distrito del Oeste',
            deptoPais: 'MAT'
        },
        {
            deptoId: 1789,
            deptoNombre: 'Distrito del Puerto Meridional',
            deptoPais: 'MAT'
        },
        {
            deptoId: 1790,
            deptoNombre: 'Distrito del Puerto Septentrional',
            deptoPais: 'MAT'
        },
        {
            deptoId: 1791,
            deptoNombre: 'Distrito del Sudeste',
            deptoPais: 'MAT'
        },
        //MARRRUECOS
        {
            deptoId: 1792,
            deptoNombre: 'Chauía-Uardiga',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1793,
            deptoNombre: '	Dukala-Abda',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1794,
            deptoNombre: 'Fez-Bulmán',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1795,
            deptoNombre: 'Garb-Chrarda-Beni Hsen',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1796,
            deptoNombre: '	Gran Casablanca',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1797,
            deptoNombre: 'Guelmim-Esmara',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1798,
            deptoNombre: '	El Aaiún-Bojador-Saguia el Hamra',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1799,
            deptoNombre: 'Marrakech-Tensift-Al Hauz',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1800,
            deptoNombre: 'Mequinez-Tafilalet',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1801,
            deptoNombre: 'La Oriental',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1802,
            deptoNombre: '	Río de Oro-La Güera',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1803,
            deptoNombre: 'Rabat-Salé-Zemur-Zaer',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1804,
            deptoNombre: 'Sus-Masa-Draa',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1805,
            deptoNombre: 'Tadla-Azilal',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1806,
            deptoNombre: 'Tánger-Tetuán',
            deptoPais: 'MRR'
        },
        {
            deptoId: 1807,
            deptoNombre: 'Taza-Alhucemas-Taunat',
            deptoPais: 'MRR'
        },
        //MAURICIO
        {
            deptoId: 1808,
            deptoNombre: 'Black River',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1809,
            deptoNombre: 'Flacq',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1810,
            deptoNombre: 'Grand Port',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1811,
            deptoNombre: 'Moka',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1812,
            deptoNombre: 'Pamplemousses',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1813,
            deptoNombre: 'Plaines Wilhems',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1814,
            deptoNombre: 'Port Louis',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1815,
            deptoNombre: 'Rivière du Rempart',
            deptoPais: 'MAR'
        },
        {
            deptoId: 1816,
            deptoNombre: 'Savanne',
            deptoPais: 'MAR'
        },
        //MAURITANIA
        {
            deptoId: 1817,
            deptoNombre: 'Adrar ',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1818,
            deptoNombre: 'Assaba',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1819,
            deptoNombre: 'Brakna',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1820,
            deptoNombre: 'Dajlet Nuadibú',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1821,
            deptoNombre: 'Gorgol',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1822,
            deptoNombre: 'Guidimaka',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1823,
            deptoNombre: 'Hod Oriental',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1824,
            deptoNombre: 'Hod Occidental',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1825,
            deptoNombre: 'Inchiri',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1826,
            deptoNombre: 'Nuakchot',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1827,
            deptoNombre: 'Tagant',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1828,
            deptoNombre: 'Tiris Zemmur',
            deptoPais: 'MTA'
        },
        {
            deptoId: 1829,
            deptoNombre: 'Trarza',
            deptoPais: 'MTA'
        },
        //MÉXICO
        {
            deptoId: 1830,
            deptoNombre: 'Aguascalientes',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1831,
            deptoNombre: 'Baja California',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1832,
            deptoNombre: '	Baja California Sur',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1833,
            deptoNombre: 'Campeche',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1834,
            deptoNombre: 'Chiapas',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1835,
            deptoNombre: 'Chihuahua',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1836,
            deptoNombre: 'Ciudad de México',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1837,
            deptoNombre: 'Coahuila de Zaragoza',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1838,
            deptoNombre: 'Colima',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1839,
            deptoNombre: 'Durango',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1840,
            deptoNombre: 'Guanajuato',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1841,
            deptoNombre: 'Guerrero',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1842,
            deptoNombre: 'Hidalgo',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1843,
            deptoNombre: 'Jalisco',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1844,
            deptoNombre: 'México',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1845,
            deptoNombre: 'Michoacán de Ocampo',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1846,
            deptoNombre: 'Morelos',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1847,
            deptoNombre: 'Nayarit',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1848,
            deptoNombre: 'Nuevo León',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1849,
            deptoNombre: 'Oaxaca',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1850,
            deptoNombre: 'Puebla',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1851,
            deptoNombre: 'Querétaro de Arteaga',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1852,
            deptoNombre: '	Quintana Roo',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1853,
            deptoNombre: 'San Luis Potosí',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1854,
            deptoNombre: 'Sinaloa',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1855,
            deptoNombre: 'Sonora',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1856,
            deptoNombre: 'Tabasco',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1857,
            deptoNombre: 'Tamaulipas',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1858,
            deptoNombre: 'Tlaxcala',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1859,
            deptoNombre: 'Veracruz de Ignacio de la Llave',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1860,
            deptoNombre: 'Yucatán',
            deptoPais: 'MEX'
        },
        {
            deptoId: 1861,
            deptoNombre: 'Zacatecas',
            deptoPais: 'MEX'
        },
        //MICRONESIA
        {
            deptoId: 1862,
            deptoNombre: 'Chuuk',
            deptoPais: 'MIC'
        },
        {
            deptoId: 1863,
            deptoNombre: 'Kosrae',
            deptoPais: 'MIC'
        },
        {
            deptoId: 1864,
            deptoNombre: 'Pohnpei',
            deptoPais: 'MIC'
        },
        {
            deptoId: 1865,
            deptoNombre: 'Yap',
            deptoPais: 'MIC'
        },
        //MOLDAVIA
        {
            deptoId: 1866,
            deptoNombre: 'Anenii Noi',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1867,
            deptoNombre: 'Bălți',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1868,
            deptoNombre: 'Basarabeasca',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1869,
            deptoNombre: 'Briceni',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1870,
            deptoNombre: 'Cahul ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1871,
            deptoNombre: 'Cantemir',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1872,
            deptoNombre: 'Călărași',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1873,
            deptoNombre: 'Căușeni',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1874,
            deptoNombre: 'Chisinau',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1875,
            deptoNombre: 'Cimișlia',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1876,
            deptoNombre: 'Criuleni',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1877,
            deptoNombre: 'Dondușeni',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1878,
            deptoNombre: 'Drochia',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1879,
            deptoNombre: 'Dubăsari ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1880,
            deptoNombre: 'Edineț ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1881,
            deptoNombre: 'Fălești ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1882,
            deptoNombre: 'Florești ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1883,
            deptoNombre: 'Găgăuzia ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1884,
            deptoNombre: 'Glodeni ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1885,
            deptoNombre: 'Hîncești ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1886,
            deptoNombre: 'Ialoveni ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1887,
            deptoNombre: 'Leova ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1888,
            deptoNombre: 'Nisporeni ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1889,
            deptoNombre: 'Ocnița ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1890,
            deptoNombre: 'Orhei ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1891,
            deptoNombre: 'Rezina ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1892,
            deptoNombre: 'Rîșcani ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1893,
            deptoNombre: 'Sîngerei ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1894,
            deptoNombre: 'Soroca ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1895,
            deptoNombre: 'Strășeni ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1896,
            deptoNombre: 'Șoldănești ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1897,
            deptoNombre: 'Ștefan Vodă ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1898,
            deptoNombre: 'Taraclia ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1899,
            deptoNombre: 'Telenești ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1900,
            deptoNombre: 'Bender ',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1901,
            deptoNombre: 'Stânga Nistrului',
            deptoPais: 'MOL'
        },
        {
            deptoId: 1902,
            deptoNombre: 'Ungheni',
            deptoPais: 'MOL'
        },
        //MÓNACO
        {
            deptoId: 1903,
            deptoNombre: 'Larvotto',
            deptoPais: 'MON'
        },
        {
            deptoId: 1904,
            deptoNombre: 'Fontvieille',
            deptoPais: 'MON'
        },
        {
            deptoId: 1905,
            deptoNombre: 'Montecarlo',
            deptoPais: 'MON'
        },
        {
            deptoId: 1906,
            deptoNombre: 'La Condamine',
            deptoPais: 'MON'
        },
        {
            deptoId: 1907,
            deptoNombre: 'La Colle',
            deptoPais: 'MON'
        },
        {
            deptoId: 1908,
            deptoNombre: 'Monaco-Ville',
            deptoPais: 'MON'
        },
        {
            deptoId: 1909,
            deptoNombre: 'San Miguel',
            deptoPais: 'MON'
        },
        {
            deptoId: 1910,
            deptoNombre: 'Moneghetti',
            deptoPais: 'MON'
        },
        {
            deptoId: 1911,
            deptoNombre: 'La Rousse S.R',
            deptoPais: 'MON'
        },
        {
            deptoId: 1912,
            deptoNombre: 'Les Révoires',
            deptoPais: 'MON'
        },
        //MONGOLIA
        {
            deptoId: 1913,
            deptoNombre: 'Arhangay',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1914,
            deptoNombre: 'Bayan-Ölgiy',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1915,
            deptoNombre: 'Bayanhongor',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1916,
            deptoNombre: 'Bulgan',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1917,
            deptoNombre: 'Darhan-Uul',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1918,
            deptoNombre: 'Dornod',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1919,
            deptoNombre: 'Dornogovĭ',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1920,
            deptoNombre: 'Dundgovĭ',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1921,
            deptoNombre: 'Govĭ-Altay',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1922,
            deptoNombre: 'Govĭsümber',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1923,
            deptoNombre: 'Hentiy',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1924,
            deptoNombre: 'Hovd',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1925,
            deptoNombre: 'Hövsgöl',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1926,
            deptoNombre: 'Ömnögovĭ',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1927,
            deptoNombre: 'Orhon',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1928,
            deptoNombre: 'Övörhangay',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1929,
            deptoNombre: 'Selenge',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1930,
            deptoNombre: 'Sühbaatar',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1931,
            deptoNombre: 'Töv',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1932,
            deptoNombre: 'Ulán Bator',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1933,
            deptoNombre: 'Uvs',
            deptoPais: 'MOG'
        },
        {
            deptoId: 1934,
            deptoNombre: 'Zavhan',
            deptoPais: 'MOG'
        },
        //MONTENEGRO
        {
            deptoId: 1935,
            deptoNombre: 'Andrijevica',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1936,
            deptoNombre: 'Bar',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1937,
            deptoNombre: 'Berane',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1938,
            deptoNombre: 'Bijelo Polje',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1939,
            deptoNombre: 'Budva',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1940,
            deptoNombre: 'Cetinje',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1941,
            deptoNombre: 'Danilovgrad',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1942,
            deptoNombre: 'Gusinje',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1943,
            deptoNombre: 'Herceg Novi',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1944,
            deptoNombre: 'Kolašin',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1945,
            deptoNombre: 'Kotor',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1946,
            deptoNombre: 'Mojkovac',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1947,
            deptoNombre: 'Nikšić',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1948,
            deptoNombre: 'Petnjica',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1949,
            deptoNombre: 'Plav',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1950,
            deptoNombre: 'Plužine',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1951,
            deptoNombre: 'Pljevlja',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1952,
            deptoNombre: 'Podgorica',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1953,
            deptoNombre: 'Rožaje',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1954,
            deptoNombre: 'Šavnik',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1955,
            deptoNombre: 'Tivat',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1956,
            deptoNombre: 'Ulcinj',
            deptoPais: 'MOT'
        },
        {
            deptoId: 1957,
            deptoNombre: 'Žabljak',
            deptoPais: 'MOT'
        },
        //MOZAMBIQUE
        {
            deptoId: 1958,
            deptoNombre: 'Cabo Delgado',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1959,
            deptoNombre: 'Gaza',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1960,
            deptoNombre: 'Inhambane',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1961,
            deptoNombre: 'Manica',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1962,
            deptoNombre: 'Maputo (ciudad)',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1963,
            deptoNombre: 'Maputo (provincia)',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1964,
            deptoNombre: 'Nampula',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1965,
            deptoNombre: 'Niassa',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1966,
            deptoNombre: 'Sofala',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1967,
            deptoNombre: 'Tete',
            deptoPais: 'MOZ'
        },
        {
            deptoId: 1968,
            deptoNombre: 'Zambezia',
            deptoPais: 'MOZ'
        },
        //NAMIBIA
        {
            deptoId: 1969,
            deptoNombre: 'Kunene',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1970,
            deptoNombre: 'Omusati',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1971,
            deptoNombre: 'Oshana',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1972,
            deptoNombre: 'Ohangwena',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1973,
            deptoNombre: 'Oshikoto',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1974,
            deptoNombre: 'Kavango del Oeste',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1975,
            deptoNombre: 'Kavango del Este',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1976,
            deptoNombre: 'Zambezi',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1977,
            deptoNombre: 'Erongo',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1978,
            deptoNombre: 'Otjozondjupa',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1979,
            deptoNombre: 'Omaheke',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1980,
            deptoNombre: 'Khomas',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1981,
            deptoNombre: 'Hardap',
            deptoPais: 'NAM'
        },
        {
            deptoId: 1982,
            deptoNombre: 'Karas',
            deptoPais: 'NAM'
        },
        //NAURU
        {
            deptoId: 1983,
            deptoNombre: 'Aiwo',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1984,
            deptoNombre: 'Anabar',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1985,
            deptoNombre: 'Anetan',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1986,
            deptoNombre: 'Anibare',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1987,
            deptoNombre: 'Baiti',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1988,
            deptoNombre: 'Boe',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1989,
            deptoNombre: 'Buada',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1990,
            deptoNombre: 'Denigomodu',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1991,
            deptoNombre: 'Ewa',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1992,
            deptoNombre: 'Ijuw',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1993,
            deptoNombre: 'Meneng',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1994,
            deptoNombre: 'Nibok',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1995,
            deptoNombre: 'Uaboe',
            deptoPais: 'NAU'
        },
        {
            deptoId: 1996,
            deptoNombre: 'Yaren',
            deptoPais: 'NAU'
        },
        //NEPAL
        {
            deptoId: 1997,
            deptoNombre: 'Kosi',
            deptoPais: 'NEP'
        },
        {
            deptoId: 1998,
            deptoNombre: 'Mechi',
            deptoPais: 'NEP'
        },
        {
            deptoId: 1999,
            deptoNombre: 'Sagarmatha',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2000,
            deptoNombre: 'Bagmati',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2001,
            deptoNombre: 'Janakpur',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2002,
            deptoNombre: 'Narayani',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2003,
            deptoNombre: 'Dhawalagiri',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2004,
            deptoNombre: 'Gandaki',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2005,
            deptoNombre: 'Lumbini',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2006,
            deptoNombre: 'Bheri',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2007,
            deptoNombre: 'Karnali',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2008,
            deptoNombre: 'Rapti',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2009,
            deptoNombre: 'Mahakali',
            deptoPais: 'NEP'
        },
        {
            deptoId: 2010,
            deptoNombre: 'Seti',
            deptoPais: 'NEP'
        },
        //NICARAGUA 
        {
            deptoId: 2011,
            deptoNombre: 'Boaco',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2012,
            deptoNombre: 'Carazo',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2013,
            deptoNombre: 'Chinandega',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2014,
            deptoNombre: 'Chontales',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2015,
            deptoNombre: 'Estelí',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2016,
            deptoNombre: 'Granada',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2017,
            deptoNombre: 'Jinotega',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2018,
            deptoNombre: 'León',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2019,
            deptoNombre: 'Madriz',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2020,
            deptoNombre: 'Managua',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2021,
            deptoNombre: 'Masaya',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2022,
            deptoNombre: 'Matagalpa',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2023,
            deptoNombre: 'Nueva Segovia',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2024,
            deptoNombre: 'Rivas',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2025,
            deptoNombre: 'Río San Juan',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2026,
            deptoNombre: 'Región Autónoma de la Costa Caribe Norte',
            deptoPais: 'NIC'
        },
        {
            deptoId: 2027,
            deptoNombre: 'Región Autónoma de la Costa Caribe Sur',
            deptoPais: 'NIC'
        },
        //NÍGER
        {
            deptoId: 2028,
            deptoNombre: 'Agadez',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2029,
            deptoNombre: 'Diffa',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2030,
            deptoNombre: 'Dosso',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2031,
            deptoNombre: 'Maradi',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2032,
            deptoNombre: 'Niamey',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2033,
            deptoNombre: 'Tahoua',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2034,
            deptoNombre: 'Tillabéri',
            deptoPais: 'NIG'
        },
        {
            deptoId: 2035,
            deptoNombre: 'Zinder',
            deptoPais: 'NIG'
        },
        //NIGERIA
        {
            deptoId: 2036,
            deptoNombre: 'Abia',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2037,
            deptoNombre: 'Adamawa',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2038,
            deptoNombre: 'Akwa Ibom',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2039,
            deptoNombre: 'Anambra',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2040,
            deptoNombre: 'Bauchi',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2041,
            deptoNombre: 'Bayelsa',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2042,
            deptoNombre: 'Benue',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2043,
            deptoNombre: 'Borno',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2044,
            deptoNombre: 'Cross River',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2045,
            deptoNombre: 'Delta',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2046,
            deptoNombre: 'Ebonyi',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2047,
            deptoNombre: 'Edo',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2048,
            deptoNombre: 'Ekiti',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2049,
            deptoNombre: 'Enugu',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2050,
            deptoNombre: 'Gombe',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2051,
            deptoNombre: 'Imo',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2052,
            deptoNombre: 'Jigawa',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2053,
            deptoNombre: 'Kaduna',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2054,
            deptoNombre: 'Kano',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2055,
            deptoNombre: 'Katsina',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2056,
            deptoNombre: 'Kebbi',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2057,
            deptoNombre: 'Kogi',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2058,
            deptoNombre: 'Kwara',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2059,
            deptoNombre: 'Lagos	',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2060,
            deptoNombre: 'Nasarawa',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2061,
            deptoNombre: 'Níger',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2062,
            deptoNombre: 'Ogun',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2063,
            deptoNombre: 'Ondo',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2064,
            deptoNombre: 'Osun',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2065,
            deptoNombre: 'Oyo',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2066,
            deptoNombre: 'Plateau',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2067,
            deptoNombre: 'Rivers',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2068,
            deptoNombre: 'Sokoto',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2069,
            deptoNombre: 'Taraba',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2070,
            deptoNombre: 'Yobe',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2071,
            deptoNombre: 'Zamfara',
            deptoPais: 'NIR'
        },
        {
            deptoId: 2072,
            deptoNombre: 'Territorio de la Capital Federal',
            deptoPais: 'NIR'
        },
        //NORUEGA
        {
            deptoId: 2073,
            deptoNombre: 'Nordland',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2074,
            deptoNombre: 'Troms',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2075,
            deptoNombre: 'Finnmark',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2076,
            deptoNombre: 'Nord-Trøndelag',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2077,
            deptoNombre: 'Sør-Trøndelag',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2078,
            deptoNombre: 'Møre og Romsdal',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2079,
            deptoNombre: ' Sogn og Fjordane',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2080,
            deptoNombre: 'Hordaland',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2081,
            deptoNombre: 'Rogaland',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2082,
            deptoNombre: 'Aust-Agder',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2083,
            deptoNombre: 'Vest-Agder',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2084,
            deptoNombre: 'Oslo',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2085,
            deptoNombre: 'Akershus',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2086,
            deptoNombre: 'Østfold',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2087,
            deptoNombre: 'Vestfold',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2088,
            deptoNombre: 'Telemark',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2089,
            deptoNombre: 'Buskerud',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2090,
            deptoNombre: 'Oppland',
            deptoPais: 'NRE'
        },
        {
            deptoId: 2091,
            deptoNombre: 'Hedmark',
            deptoPais: 'NRE'
        },
        //NUEVA ZELANDA
        {
            deptoId: 2092,
            deptoNombre: 'Northland',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2093,
            deptoNombre: 'Auckland',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2094,
            deptoNombre: 'Waikato',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2095,
            deptoNombre: 'Bay of Plenty	',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2096,
            deptoNombre: 'Gisborne ',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2097,
            deptoNombre: "Hawke's Bay",
            deptoPais: 'NZE'
        },
        {
            deptoId: 2098,
            deptoNombre: 'Taranaki',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2099,
            deptoNombre: 'Manawatu-Wanganui',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2100,
            deptoNombre: 'Wellington',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2101,
            deptoNombre: 'Tasman ',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2102,
            deptoNombre: 'Nelson ',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2103,
            deptoNombre: 'Marlborough',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2104,
            deptoNombre: 'West Coast',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2105,
            deptoNombre: 'Canterbury',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2106,
            deptoNombre: 'Otago',
            deptoPais: 'NZE'
        },
        {
            deptoId: 2107,
            deptoNombre: 'Southland',
            deptoPais: 'NZE'
        },
        //OMÁN
        {
            deptoId: 2108,
            deptoNombre: 'Batina',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2109,
            deptoNombre: 'Buraimi',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2110,
            deptoNombre: 'Central ',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2111,
            deptoNombre: 'Dhahirah',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2112,
            deptoNombre: 'Dhofar',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2113,
            deptoNombre: '	Interior',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2114,
            deptoNombre: 'Mascate',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2115,
            deptoNombre: 'Musandam',
            deptoPais: 'OMN'
        },
        {
            deptoId: 2116,
            deptoNombre: 'Oriental ',
            deptoPais: 'OMN'
        },
        //PAISES BAJOS
        {
            deptoId: 2117,
            deptoNombre: 'Brabante Septentrional',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2118,
            deptoNombre: 'Drente',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2119,
            deptoNombre: 'Flevoland',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2120,
            deptoNombre: 'Frisia',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2121,
            deptoNombre: 'Groninga',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2122,
            deptoNombre: 'Güeldres',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2123,
            deptoNombre: 'Holanda Meridional',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2124,
            deptoNombre: 'Holanda Septentrional',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2125,
            deptoNombre: 'Limburgo',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2126,
            deptoNombre: 'Overijssel',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2127,
            deptoNombre: 'Utrecht',
            deptoPais: 'PBA'
        },
        {
            deptoId: 2128,
            deptoNombre: 'Zelanda',
            deptoPais: 'PBA'
        },
        //PAKISTAN
        {
            deptoId: 2129,
            deptoNombre: 'Baluchistán',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2130,
            deptoNombre: 'Jaiber Pajtunjuá',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2131,
            deptoNombre: 'Panyab',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2132,
            deptoNombre: 'Sind',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2133,
            deptoNombre: 'Islamabad',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2134,
            deptoNombre: 'Áreas tribales',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2135,
            deptoNombre: 'Azad Cachemira',
            deptoPais: 'PAK'
        },
        {
            deptoId: 2136,
            deptoNombre: 'Gilgit-Baltistán',
            deptoPais: 'PAK'
        },
        //PALAOS
        {
            deptoId: 2137,
            deptoNombre: 'Aimeliik',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2138,
            deptoNombre: 'Airai',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2139,
            deptoNombre: 'Angaur',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2140,
            deptoNombre: 'Hatohobei',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2141,
            deptoNombre: 'Kayangel',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2142,
            deptoNombre: 'Koror',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2143,
            deptoNombre: 'Melekeok',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2144,
            deptoNombre: 'Ngaraard',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2145,
            deptoNombre: 'Ngarchelong',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2146,
            deptoNombre: 'Ngardmau',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2147,
            deptoNombre: 'Ngeremlengui',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2148,
            deptoNombre: 'Ngatpang',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2149,
            deptoNombre: 'Ngchesar',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2150,
            deptoNombre: 'Ngiwal',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2151,
            deptoNombre: 'Peleliu',
            deptoPais: 'PAO'
        },
        {
            deptoId: 2152,
            deptoNombre: 'Sonsorol',
            deptoPais: 'PAO'
        },
        //PANAMÁ
        {
            deptoId: 2153,
            deptoNombre: 'Bocas del Toro',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2154,
            deptoNombre: 'Chiriquí',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2155,
            deptoNombre: 'Coclé',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2156,
            deptoNombre: 'Colón',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2157,
            deptoNombre: 'Darién',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2158,
            deptoNombre: 'Herrera',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2159,
            deptoNombre: 'Los Santos',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2160,
            deptoNombre: 'Panamá',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2161,
            deptoNombre: 'Panamá Oeste',
            deptoPais: 'PAN'
        },
        {
            deptoId: 2162,
            deptoNombre: 'Veraguas',
            deptoPais: 'PAN'
        },
        //PAPÚA NUEVA GUINEA
        {
            deptoId: 2163,
            deptoNombre: 'Región de las Tierras Altas',
            deptoPais: 'PNG'
        },
        {
            deptoId: 2164,
            deptoNombre: 'Región de las Islas',
            deptoPais: 'PNG'
        },
        {
            deptoId: 2165,
            deptoNombre: 'Región de Momase',
            deptoPais: 'PNG'
        },
        {
            deptoId: 2166,
            deptoNombre: 'Región de Papúa',
            deptoPais: 'PNG'
        },
        //PARAGUAY
        {
            deptoId: 2167,
            deptoNombre: 'Asunción',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2168,
            deptoNombre: 'Central',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2169,
            deptoNombre: 'Boquerón',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2170,
            deptoNombre: 'Alto Paraná',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2171,
            deptoNombre: 'Amambay',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2172,
            deptoNombre: 'Alto Paraguay',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2173,
            deptoNombre: 'Caaguazú',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2174,
            deptoNombre: 'Caazapá',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2175,
            deptoNombre: 'Canindeyú',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2176,
            deptoNombre: 'Concepción',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2177,
            deptoNombre: 'Cordillera',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2178,
            deptoNombre: 'Guairá',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2179,
            deptoNombre: 'Itapúa',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2180,
            deptoNombre: 'Misiones',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2181,
            deptoNombre: 'Ñeembucú',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2182,
            deptoNombre: 'Paraguarí',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2183,
            deptoNombre: 'Presidente Hayes',
            deptoPais: 'PAR'
        },
        {
            deptoId: 2184,
            deptoNombre: 'San Pedro',
            deptoPais: 'PAR'
        },
        //PERÚ
        {
            deptoId: 2185,
            deptoNombre: 'Apurimac',
            deptoPais: 'PER'
        },
        {
            deptoId: 2186,
            deptoNombre: 'Ayacucho',
            deptoPais: 'PER'
        },
        {
            deptoId: 2187,
            deptoNombre: 'Callao',
            deptoPais: 'PER'
        },
        {
            deptoId: 2188,
            deptoNombre: 'Cusco',
            deptoPais: 'PER'
        },
        {
            deptoId: 2189,
            deptoNombre: 'Huancavelica',
            deptoPais: 'PER'
        },
        {
            deptoId: 2190,
            deptoNombre: 'Huánuco',
            deptoPais: 'PER'
        },
        {
            deptoId: 2191,
            deptoNombre: 'Junín',
            deptoPais: 'PER'
        },
        {
            deptoId: 2192,
            deptoNombre: 'Loreto',
            deptoPais: 'PER'
        },
        {
            deptoId: 2193,
            deptoNombre: 'Pasco',
            deptoPais: 'PER'
        },
        {
            deptoId: 2194,
            deptoNombre: 'Piura',
            deptoPais: 'PER'
        },
        {
            deptoId: 2195,
            deptoNombre: 'Puno',
            deptoPais: 'PER'
        },
        {
            deptoId: 2196,
            deptoNombre: 'Tacna',
            deptoPais: 'PER'
        },
        {
            deptoId: 2197,
            deptoNombre: 'Ucayali',
            deptoPais: 'PER'
        },
        //POLONIA
        {
            deptoId: 2198,
            deptoNombre: 'Gran Polonia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2199,
            deptoNombre: 'Cuyavia y Pomerania',
            deptoPais: 'POL'
        },
        {
            deptoId: 2200,
            deptoNombre: 'Pequeña Polonia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2201,
            deptoNombre: 'Łódź',
            deptoPais: 'POL'
        },
        {
            deptoId: 2202,
            deptoNombre: 'Baja Silesia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2203,
            deptoNombre: 'Lublin',
            deptoPais: 'POL'
        },
        {
            deptoId: 2204,
            deptoNombre: 'Lubusz',
            deptoPais: 'POL'
        },
        {
            deptoId: 2205,
            deptoNombre: 'Mazovia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2206,
            deptoNombre: 'Opole',
            deptoPais: 'POL'
        },
        {
            deptoId: 2207,
            deptoNombre: 'Podlaquia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2208,
            deptoNombre: 'Pomerania',
            deptoPais: 'POL'
        },
        {
            deptoId: 2209,
            deptoNombre: 'Silesia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2210,
            deptoNombre: 'Subcarpacia',
            deptoPais: 'POL'
        },
        {
            deptoId: 2211,
            deptoNombre: 'Santa Cruz',
            deptoPais: 'POL'
        },
        {
            deptoId: 2212,
            deptoNombre: 'Varmia y Masuria',
            deptoPais: 'POL'
        },
        {
            deptoId: 2213,
            deptoNombre: 'Pomerania Occidental',
            deptoPais: 'POL'
        },
        //PORTUGAL
        {
            deptoId: 2214,
            deptoNombre: 'Lisboa',
            deptoPais: 'POR'
        },
        {
            deptoId: 2215,
            deptoNombre: 'Leiria',
            deptoPais: 'POR'
        },
        {
            deptoId: 2216,
            deptoNombre: 'Santarém',
            deptoPais: 'POR'
        },
        {
            deptoId: 2217,
            deptoNombre: 'Setúbal',
            deptoPais: 'POR'
        },
        {
            deptoId: 2218,
            deptoNombre: 'Beja',
            deptoPais: 'POR'
        },
        {
            deptoId: 2219,
            deptoNombre: 'Faro',
            deptoPais: 'POR'
        },
        {
            deptoId: 2220,
            deptoNombre: 'Évora',
            deptoPais: 'POR'
        },
        {
            deptoId: 2221,
            deptoNombre: 'Portalegre',
            deptoPais: 'POR'
        },
        {
            deptoId: 2222,
            deptoNombre: 'Castelo Branco',
            deptoPais: 'POR'
        },
        {
            deptoId: 2223,
            deptoNombre: 'Guarda',
            deptoPais: 'POR'
        },
        {
            deptoId: 2224,
            deptoNombre: 'Coimbra',
            deptoPais: 'POR'
        },
        {
            deptoId: 2225,
            deptoNombre: 'Aveiro',
            deptoPais: 'POR'
        },
        {
            deptoId: 2226,
            deptoNombre: 'Viseu',
            deptoPais: 'POR'
        },
        {
            deptoId: 2227,
            deptoNombre: 'Braganza',
            deptoPais: 'POR'
        },
        {
            deptoId: 2228,
            deptoNombre: 'Vila Real',
            deptoPais: 'POR'
        },
        {
            deptoId: 2229,
            deptoNombre: 'Oporto',
            deptoPais: 'POR'
        },
        {
            deptoId: 2230,
            deptoNombre: 'Braga',
            deptoPais: 'POR'
        },
        {
            deptoId: 2231,
            deptoNombre: 'Viana do Castelo',
            deptoPais: 'POR'
        },
        //REINO UNIDO
        {
            deptoId: 2232,
            deptoNombre: 'Gran Londres (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2233,
            deptoNombre: 'Sudeste de Inglaterra (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2234,
            deptoNombre: 'Sudoeste de Inglaterra (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2235,
            deptoNombre: 'Midlands del Oeste (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2236,
            deptoNombre: 'Noroeste de Inglaterra (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2237,
            deptoNombre: 'Nordeste de Inglaterra (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2238,
            deptoNombre: 'Yorkshire y Humber (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2239,
            deptoNombre: 'Midlands Oriental (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2240,
            deptoNombre: 'Este de Inglaterra (Inglaterra)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2241,
            deptoNombre: 'Strathclyde (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2242,
            deptoNombre: 'Dumfries and Galloway (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2243,
            deptoNombre: 'Scottish Borders (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2244,
            deptoNombre: '	Lothian (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2245,
            deptoNombre: 'Central Scotland (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2246,
            deptoNombre: 'Fife (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2247,
            deptoNombre: 'Tayside (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2248,
            deptoNombre: 'Grampian (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2249,
            deptoNombre: 'Highland (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2250,
            deptoNombre: 'Western Isles (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2251,
            deptoNombre: 'Shetland (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2252,
            deptoNombre: 'Orkney (Escocia)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2253,
            deptoNombre: 'Merthyr Tydfil (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2254,
            deptoNombre: 'Caerphilly (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2255,
            deptoNombre: 'Blaenau Gwent (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2256,
            deptoNombre: 'Torfaen (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2257,
            deptoNombre: 'Monmouthshire (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2258,
            deptoNombre: 'Newport (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2259,
            deptoNombre: 'Cardiff (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2260,
            deptoNombre: 'Vale of Glamorgan (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2261,
            deptoNombre: 'Bridgend (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2262,
            deptoNombre: 'Rhondda Cynon Taf (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2263,
            deptoNombre: 'Neath Port Talbot (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2264,
            deptoNombre: 'Swansea (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2265,
            deptoNombre: 'Carmarthenshire (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2266,
            deptoNombre: 'Ceredigion (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2267,
            deptoNombre: 'Powys (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2268,
            deptoNombre: 'Wrexham (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2269,
            deptoNombre: 'Flintshire (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2270,
            deptoNombre: 'Denbighshire (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2271,
            deptoNombre: 'Conwy (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2272,
            deptoNombre: 'Gwynedd (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2273,
            deptoNombre: 'Anglesey (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2274,
            deptoNombre: 'Pembrokeshire (Gales)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2275,
            deptoNombre: 'Condado de Londonderry (Irlanda del Norte)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2276,
            deptoNombre: 'Condado de Tyrone (Irlanda del Norte)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2277,
            deptoNombre: 'Condado de Fermanagh (Irlanda del Norte)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2278,
            deptoNombre: 'Condado de Down (Irlanda del Norte)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2279,
            deptoNombre: 'Condado de Antrim (Irlanda del Norte)',
            deptoPais: 'REU'
        },
        {
            deptoId: 2280,
            deptoNombre: 'Condado de Armagh (Irlanda del Norte)',
            deptoPais: 'REU'
        },
        //REPUBLICA CENTROAMERICANA
        {
            deptoId: 2281,
            deptoNombre: 'Bamingui-Bangoran',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2282,
            deptoNombre: 'Basse-Kotto',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2283,
            deptoNombre: 'Haute-Kotto',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2284,
            deptoNombre: 'Haut-Mbomou',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2285,
            deptoNombre: 'Kémo ',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2286,
            deptoNombre: 'Lobaye ',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2287,
            deptoNombre: 'Mambéré-Kadéï',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2288,
            deptoNombre: 'Mbomou ',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2289,
            deptoNombre: 'Nana-Mambéré',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2290,
            deptoNombre: "Ombella-M'Poko",
            deptoPais: 'RCE'
        },
        {
            deptoId: 2291,
            deptoNombre: 'Ouaka ',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2292,
            deptoNombre: 'Ouham ',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2293,
            deptoNombre: 'Ouham-Pendé',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2294,
            deptoNombre: 'Vakaga',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2295,
            deptoNombre: 'Nana-Grébizi',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2296,
            deptoNombre: 'Sangha-Mbaéré',
            deptoPais: 'RCE'
        },
        {
            deptoId: 2297,
            deptoNombre: 'Bangui ',
            deptoPais: 'RCE'
        },
        //REPÚBLICA CHECA
        {
            deptoId: 2298,
            deptoNombre: 'Praga',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2299,
            deptoNombre: 'Bohemia Meridional',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2300,
            deptoNombre: 'Moravia Meridional',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2301,
            deptoNombre: 'Karlovy Vary',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2302,
            deptoNombre: 'Hradec Králové',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2303,
            deptoNombre: 'Liberec ',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2304,
            deptoNombre: 'Moravia-Silesia',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2305,
            deptoNombre: 'Olomouc ',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2306,
            deptoNombre: 'Pardubice ',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2307,
            deptoNombre: 'Pilsen ',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2308,
            deptoNombre: 'Bohemia Central',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2309,
            deptoNombre: 'Ústí nad Labem',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2310,
            deptoNombre: 'Vysočina ',
            deptoPais: 'RCH'
        },
        {
            deptoId: 2311,
            deptoNombre: 'Zlín ',
            deptoPais: 'RCH'
        },
        //REPÚBLICA DEMOCRÁTICA DEL CONGO
        {
            deptoId: 2312,
            deptoNombre: '	Alto Katanga ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2313,
            deptoNombre: 'Alto Lomami ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2314,
            deptoNombre: ' Alto Uele',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2315,
            deptoNombre: 'Bajo Uele ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2316,
            deptoNombre: '	Congo Central ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2317,
            deptoNombre: 'Équateur ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2318,
            deptoNombre: 'Ituri ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2319,
            deptoNombre: 'Kasaï ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2320,
            deptoNombre: '	Kasai Oriental ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2321,
            deptoNombre: ' Kinshasa',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2322,
            deptoNombre: 'Kivu del Norte ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2323,
            deptoNombre: 'Kivu del Sur ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2324,
            deptoNombre: ' Kwango',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2325,
            deptoNombre: 'Kwilu ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2326,
            deptoNombre: 'Lomami ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2327,
            deptoNombre: 'Lualaba ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2328,
            deptoNombre: 'Lulua ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2329,
            deptoNombre: ' Mai-Ndombe',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2330,
            deptoNombre: 'Maniema ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2331,
            deptoNombre: 'Mongala ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2332,
            deptoNombre: 'Sankuru ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2333,
            deptoNombre: 'Tanganyika ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2334,
            deptoNombre: 'Tshopo ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2335,
            deptoNombre: ' Tshuapa',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2336,
            deptoNombre: 'Ubangi del Norte ',
            deptoPais: 'RDC'
        },
        {
            deptoId: 2337,
            deptoNombre: 'Ubangi del Sur ',
            deptoPais: 'RDC'
        },
        //REPÚBLICA DOMINICANA
        {
            deptoId: 2338,
            deptoNombre: 'Azua',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2339,
            deptoNombre: 'Bahoruco',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2340,
            deptoNombre: 'Barahona',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2341,
            deptoNombre: 'Dajabón',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2342,
            deptoNombre: 'Distrito Nacional',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2343,
            deptoNombre: 'Duarte',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2344,
            deptoNombre: 'El Seibo',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2345,
            deptoNombre: 'Elías Piña',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2346,
            deptoNombre: 'Espaillat',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2347,
            deptoNombre: 'Hato Mayor',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2348,
            deptoNombre: 'Hermanas Mirabal',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2349,
            deptoNombre: 'Independencia',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2350,
            deptoNombre: 'La Altagracia',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2351,
            deptoNombre: 'La Romana',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2352,
            deptoNombre: 'La Vega',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2353,
            deptoNombre: 'María Trinidad Sánchez',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2354,
            deptoNombre: 'Monseñor Nouel',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2355,
            deptoNombre: 'Monte Cristi',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2356,
            deptoNombre: 'Monte Plata',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2357,
            deptoNombre: 'Pedernales',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2358,
            deptoNombre: 'Peravia',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2359,
            deptoNombre: 'Puerto Plata',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2360,
            deptoNombre: 'Samaná',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2361,
            deptoNombre: 'San Cristóbal',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2362,
            deptoNombre: 'San José de Ocoa',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2363,
            deptoNombre: 'San Juan',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2364,
            deptoNombre: 'San Pedro de Macorís',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2365,
            deptoNombre: 'Sánchez Ramírez',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2366,
            deptoNombre: 'Santiago',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2367,
            deptoNombre: 'Santiago Rodríguez',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2368,
            deptoNombre: 'Santo Domingo',
            deptoPais: 'RDO'
        },
        {
            deptoId: 2369,
            deptoNombre: 'Valverde',
            deptoPais: 'RDO'
        },
        //RUANDA
        {
            deptoId: 2370,
            deptoNombre: 'Provincia Norte',
            deptoPais: 'RUA'
        },
        {
            deptoId: 2371,
            deptoNombre: 'Provincia Sur',
            deptoPais: 'RUA'
        },
        {
            deptoId: 2372,
            deptoNombre: 'Provincia Este',
            deptoPais: 'RUA'
        },
        {
            deptoId: 2373,
            deptoNombre: 'Provincia Oeste',
            deptoPais: 'RUA'
        },
        {
            deptoId: 2374,
            deptoNombre: 'Provincia de Kigali',
            deptoPais: 'RUA'
        },
        //RUMANIA
        {
            deptoId: 2375,
            deptoNombre: 'Alba',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2376,
            deptoNombre: 'Arad ',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2377,
            deptoNombre: 'Argeș',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2378,
            deptoNombre: 'Bacău',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2379,
            deptoNombre: 'Bihor',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2380,
            deptoNombre: 'Bistrița-Năsăud',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2381,
            deptoNombre: 'Botoșani',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2382,
            deptoNombre: 'Brașov',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2883,
            deptoNombre: 'Brăila',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2384,
            deptoNombre: 'Buzău',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2385,
            deptoNombre: 'Caraș-Severin',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2386,
            deptoNombre: 'Călărași',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2387,
            deptoNombre: 'Cluj',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2388,
            deptoNombre: 'Constanța',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2389,
            deptoNombre: 'Covasna',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2390,
            deptoNombre: 'Dâmbovița',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2391,
            deptoNombre: 'Dolj',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2392,
            deptoNombre: 'Galați',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2393,
            deptoNombre: 'Giurgiu',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2394,
            deptoNombre: 'Gorj',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2395,
            deptoNombre: 'Harghita',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2396,
            deptoNombre: 'Hunedoara',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2397,
            deptoNombre: 'Ialomița',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2398,
            deptoNombre: 'Iași',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2399,
            deptoNombre: 'Ilfov',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2400,
            deptoNombre: 'Maramureș',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2401,
            deptoNombre: 'Mehedinți',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2402,
            deptoNombre: 'Mureș',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2403,
            deptoNombre: 'Neamț',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2404,
            deptoNombre: 'Olt',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2405,
            deptoNombre: 'Prahova',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2406,
            deptoNombre: 'Satu Mare',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2407,
            deptoNombre: 'Sălaj',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2408,
            deptoNombre: 'Sibiu',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2409,
            deptoNombre: 'Suceava',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2410,
            deptoNombre: 'Teleorman',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2411,
            deptoNombre: 'Timiș',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2412,
            deptoNombre: 'Tulcea',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2413,
            deptoNombre: 'Vaslui',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2414,
            deptoNombre: 'Vâlcea',
            deptoPais: 'RUM'
        },
        {
            deptoId: 2415,
            deptoNombre: 'Vrancea',
            deptoPais: 'RUM'
        },
        //RUSIA
        {
            deptoId: 2416,
            deptoNombre: 'Cáucaso Norte',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2417,
            deptoNombre: 'Central',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2418,
            deptoNombre: 'Lejano Oriente	',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2419,
            deptoNombre: 'Noroeste',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2420,
            deptoNombre: 'Siberia',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2421,
            deptoNombre: 'Sur',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2422,
            deptoNombre: 'Ural',
            deptoPais: 'RUS'
        },
        {
            deptoId: 2423,
            deptoNombre: 'Volga',
            deptoPais: 'RUS'
        },
        //SAMOA
        {
            deptoId: 2424,
            deptoNombre: 'Isla Upolu',
            deptoPais: 'SAO'
        },
        {
            deptoId: 2425,
            deptoNombre: "Isla Savai'i",
            deptoPais: 'SAO'
        },
        //SAN CRISTÓBAL Y NIEVES
        {
            deptoId: 2426,
            deptoNombre: 'Isla de San Cristóbal',
            deptoPais: 'SCN'
        },
        {
            deptoId: 2427,
            deptoNombre: 'Isla Nieves',
            deptoPais: 'SCN'
        },
        //SAN MARINO
        {
            deptoId: 2428,
            deptoNombre: ' Acquaviva',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2429,
            deptoNombre: 'Borgo Maggiore ',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2430,
            deptoNombre: 'Chiesanuova ',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2431,
            deptoNombre: 'Montegiardino ',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2432,
            deptoNombre: 'Domagnano ',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2433,
            deptoNombre: 'Faetano ',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2434,
            deptoNombre: 'Fiorentino ',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2435,
            deptoNombre: ' San Marino',
            deptoPais: 'SAM'
        },
        {
            deptoId: 2436,
            deptoNombre: 'Serravalle',
            deptoPais: 'SAM'
        },
        //SAN VICENTE Y LAS GRANADINAS
        {
            deptoId: 2437,
            deptoNombre: 'Carlota',
            deptoPais: 'SVG'
        },
        {
            deptoId: 2438,
            deptoNombre: 'Granadinas',
            deptoPais: 'SVG'
        },
        {
            deptoId: 2439,
            deptoNombre: 'San Andrés',
            deptoPais: 'SVG'
        },
        {
            deptoId: 2440,
            deptoNombre: 'San David',
            deptoPais: 'SVG'
        },
        {
            deptoId: 2441,
            deptoNombre: 'San Jorge',
            deptoPais: 'SVG'
        },
        {
            deptoId: 2442,
            deptoNombre: 'San Patricio',
            deptoPais: 'SVG'
        },
        //SANTA LUCÍA
        {
            deptoId: 2443,
            deptoNombre: 'Anse La Raye',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2444,
            deptoNombre: 'Castries',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2445,
            deptoNombre: 'Choiseul',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2446,
            deptoNombre: 'Dauphin',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2447,
            deptoNombre: 'Dennery',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2448,
            deptoNombre: 'Gros Islet',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2449,
            deptoNombre: 'Laborie',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2450,
            deptoNombre: 'Micoud',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2451,
            deptoNombre: 'Praslin',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2452,
            deptoNombre: 'Soufrière',
            deptoPais: 'SLU'
        },
        {
            deptoId: 2453,
            deptoNombre: 'Vieux Fort',
            deptoPais: 'SLU'
        },
        //SANTO TOMÉ Y PRÍNCIPE
        {
            deptoId: 2454,
            deptoNombre: 'Água Grande ',
            deptoPais: 'STP'
        },
        {
            deptoId: 2455,
            deptoNombre: 'Cantagalo ',
            deptoPais: 'STP'
        },
        {
            deptoId: 2456,
            deptoNombre: 'Caué ',
            deptoPais: 'STP'
        },
        {
            deptoId: 2457,
            deptoNombre: 'Lembá ',
            deptoPais: 'STP'
        },
        {
            deptoId: 2458,
            deptoNombre: 'Lobata ',
            deptoPais: 'STP'
        },
        {
            deptoId: 2459,
            deptoNombre: 'Mé-Zóchi ',
            deptoPais: 'STP'
        },
        {
            deptoId: 2460,
            deptoNombre: 'Pagué ',
            deptoPais: 'STP'
        },
        //SENEGAL
        {
            deptoId: 2461,
            deptoNombre: 'Dakar',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2462,
            deptoNombre: 'Diourbel',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2463,
            deptoNombre: 'Fatick',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2464,
            deptoNombre: 'Kaffrine',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2465,
            deptoNombre: 'Kolda',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2466,
            deptoNombre: 'Kédougou',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2467,
            deptoNombre: 'Louga',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2468,
            deptoNombre: 'Matam',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2469,
            deptoNombre: 'Saint-Louis',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2470,
            deptoNombre: 'Tambacounda',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2471,
            deptoNombre: 'Kaolack',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2472,
            deptoNombre: 'Sédhiou',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2473,
            deptoNombre: 'Thiès',
            deptoPais: 'SEG'
        },
        {
            deptoId: 2474,
            deptoNombre: 'Ziguinchor',
            deptoPais: 'SEG'
        },
        //SERBIA
        {
            deptoId: 2475,
            deptoNombre: 'Bačka del Norte',
            deptoPais: 'SER'
        },
        {
            deptoId: 2476,
            deptoNombre: 'Bačka del Oeste',
            deptoPais: 'SER'
        },
        {
            deptoId: 2477,
            deptoNombre: 'Bačka del Sur',
            deptoPais: 'SER'
        },
        {
            deptoId: 2478,
            deptoNombre: '	Banato Central',
            deptoPais: 'SER'
        },
        {
            deptoId: 2479,
            deptoNombre: 'Banato del Norte',
            deptoPais: 'SER'
        },
        {
            deptoId: 2480,
            deptoNombre: 'Banato del Sur',
            deptoPais: 'SER'
        },
        {
            deptoId: 2481,
            deptoNombre: 'Bor',
            deptoPais: 'SER'
        },
        {
            deptoId: 2482,
            deptoNombre: 'Braničevo',
            deptoPais: 'SER'
        },
        {
            deptoId: 2483,
            deptoNombre: '	Ciudad de Belgrado',
            deptoPais: 'SER'
        },
        {
            deptoId: 2484,
            deptoNombre: 'Jablanica',
            deptoPais: 'SER'
        },
        {
            deptoId: 2485,
            deptoNombre: 'Kolubara',
            deptoPais: 'SER'
        },
        {
            deptoId: 2486,
            deptoNombre: 'Kosovo',
            deptoPais: 'SER'
        },
        {
            deptoId: 2487,
            deptoNombre: 'Kosovo-Pomoravlje',
            deptoPais: 'SER'
        },
        {
            deptoId: 2488,
            deptoNombre: 'Mačva',
            deptoPais: 'SER'
        },
        {
            deptoId: 2489,
            deptoNombre: 'Mitrovica',
            deptoPais: 'SER'
        },
        {
            deptoId: 2490,
            deptoNombre: 'Moravica',
            deptoPais: 'SER'
        },
        {
            deptoId: 2491,
            deptoNombre: '	Nišava',
            deptoPais: 'SER'
        },
        {
            deptoId: 2492,
            deptoNombre: 'Pčinja',
            deptoPais: 'SER'
        },
        {
            deptoId: 2493,
            deptoNombre: 'Peć',
            deptoPais: 'SER'
        },
        {
            deptoId: 2494,
            deptoNombre: 'Pirot',
            deptoPais: 'SER'
        },
        {
            deptoId: 2495,
            deptoNombre: 'Podunavlje',
            deptoPais: 'SER'
        },
        {
            deptoId: 2496,
            deptoNombre: 'Pomoravlje',
            deptoPais: 'SER'
        },
        {
            deptoId: 2497,
            deptoNombre: 'Prizren',
            deptoPais: 'SER'
        },
        {
            deptoId: 2498,
            deptoNombre: 'Rasina',
            deptoPais: 'SER'
        },
        {
            deptoId: 2499,
            deptoNombre: 'Raška',
            deptoPais: 'SER'
        },
        {
            deptoId: 2500,
            deptoNombre: 'Sirmia',
            deptoPais: 'SER'
        },
        {
            deptoId: 2501,
            deptoNombre: 'Šumadija',
            deptoPais: 'SER'
        },
        {
            deptoId: 2502,
            deptoNombre: 'Toplica',
            deptoPais: 'SER'
        },
        {
            deptoId: 2503,
            deptoNombre: 'Zaječar',
            deptoPais: 'SER'
        },
        {
            deptoId: 2504,
            deptoNombre: 'Zlatibor',
            deptoPais: 'SER'
        },
        //SEYCHELLES
        {
            deptoId: 2505,
            deptoNombre: 'Anse aux Pins',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2506,
            deptoNombre: 'Anse Boileau',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2507,
            deptoNombre: 'Anse Etoile',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2508,
            deptoNombre: 'Anse Royale',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2509,
            deptoNombre: 'Au Cap',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2510,
            deptoNombre: 'Baie Lazare',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2511,
            deptoNombre: 'Baie Sainte Anne',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2512,
            deptoNombre: 'Beau Vallon',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2513,
            deptoNombre: 'Bel Air',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2514,
            deptoNombre: 'Bel Ombre',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2515,
            deptoNombre: 'Cascade',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2516,
            deptoNombre: 'Glacis',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2517,
            deptoNombre: "Grand' Anse (Mahe)",
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2518,
            deptoNombre: "Grand' Anse (Praslin)",
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2519,
            deptoNombre: 'La Digue',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2520,
            deptoNombre: 'La Riviere Anglaise',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2521,
            deptoNombre: 'Les Mamelles',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2522,
            deptoNombre: 'Mont Buxton',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2523,
            deptoNombre: 'Mont Fleuri',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2524,
            deptoNombre: 'Plaisance',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2525,
            deptoNombre: 'Pointe La Rue',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2526,
            deptoNombre: 'Port Glaud',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2527,
            deptoNombre: 'Roche Caiman',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2528,
            deptoNombre: 'Saint Louis',
            deptoPais: 'SEY'
        },       
        {
            deptoId: 2529,
            deptoNombre: 'Takamaka',
            deptoPais: 'SEY'
        },       
        //SIERRA LEONA
        {
            deptoId: 2530,
            deptoNombre: 'Provincia del Este',
            deptoPais: 'SLE'
        }, 
        {
            deptoId: 2531,
            deptoNombre: ' Provincia del Norte',
            deptoPais: 'SLE'
        }, 
        {
            deptoId: 2532,
            deptoNombre: ' Provincia del Sur',
            deptoPais: 'SLE'
        }, 
        {
            deptoId: 2533,
            deptoNombre: ' Área Occidental',
            deptoPais: 'SLE'
        }, 
        //SINGAPUR
         {
            deptoId: 2534,
            deptoNombre: 'Consejo Central',
            deptoPais: 'SIN'
        },        
         {
            deptoId: 2535,
            deptoNombre: 'Consejo del Noreste',
            deptoPais: 'SIN'
        },        
         {
            deptoId: 2536,
            deptoNombre: 'Consejo del Noroeste',
            deptoPais: 'SIN'
        },        
         {
            deptoId: 2537,
            deptoNombre: 'Consejo del Sudeste',
            deptoPais: 'SIN'
        },        
         {
            deptoId: 2538,
            deptoNombre: 'Consejo del Sudoeste',
            deptoPais: 'SIN'
        },        
        //SIRIA
         {
            deptoId: 2539,
            deptoNombre: 'Gobernación de Hasaka',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2540,
            deptoNombre: 'Gobernación de Alepo',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2541,
            deptoNombre: 'Gobernación de Ar-Raqqa',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2542,
            deptoNombre: 'Gobernación de Sueida',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2543,
            deptoNombre: 'Gobernación de Daraa',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2544,
            deptoNombre: 'Gobernación de Deir ez-Zor',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2545,
            deptoNombre: 'Gobernación de Hama',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2546,
            deptoNombre: 'Gobernación de Homs',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2547,
            deptoNombre: 'Gobernación de Idlib',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2548,
            deptoNombre: 'Gobernación de Latakia',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2549,
            deptoNombre: 'Gobernación de Quneitra',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2550,
            deptoNombre: 'Rif Dimashq',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2551,
            deptoNombre: 'Damasco',
            deptoPais: 'SRI'
        },  
         {
            deptoId: 2552,
            deptoNombre: 'Gobernación de Tartus',
            deptoPais: 'SRI'
        },  
        //SOMALIA
         {
            deptoId: 2553,
            deptoNombre: 'Awdal',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2554,
            deptoNombre: 'Bakool',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2555,
            deptoNombre: 'Banaadir',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2556,
            deptoNombre: 'Bari',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2557,
            deptoNombre: 'Bay',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2558,
            deptoNombre: 'Galguduud',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2559,
            deptoNombre: 'Gedo',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2560,
            deptoNombre: 'Hiiraan',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2561,
            deptoNombre: 'Jubbada Dhexe',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2562,
            deptoNombre: 'Jubbada Hoose',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2563,
            deptoNombre: 'Mudug',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2564,
            deptoNombre: 'Nugaal',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2565,
            deptoNombre: 'Sanaag',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2566,
            deptoNombre: 'Shabeellaha Dhexe',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2567,
            deptoNombre: 'Shabeellaha Hoose',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2568,
            deptoNombre: 'Sool',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2569,
            deptoNombre: 'Togdheer',
            deptoPais: 'SOM'
        },          
         {
            deptoId: 2570,
            deptoNombre: 'Woqooyi Galbeed',
            deptoPais: 'SOM'
        },          
        //SRI LANKA
         {
            deptoId: 2571,
            deptoNombre: 'Central',
            deptoPais: 'SLA'
        }, 
          {
            deptoId: 2572,
            deptoNombre: 'Este  ',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2573,
            deptoNombre: 'Central del Norte',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2574,
            deptoNombre: 'Norte',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2575,
            deptoNombre: 'Noroeste',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2576,
            deptoNombre: 'Sabaragamuwa',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2577,
            deptoNombre: 'Sur',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2578,
            deptoNombre: 'Uva',
            deptoPais: 'SLA'
        }, 
           {
            deptoId: 2579,
            deptoNombre: 'Oeste',
            deptoPais: 'SLA'
        }, 
        //  SUAZILANDIA
           {
            deptoId: 2580,
            deptoNombre: 'Hhohho',
            deptoPais: 'SUA'
        }, 
           {
            deptoId: 2581,
            deptoNombre: 'Lubombo',
            deptoPais: 'SUA'
        }, 
           {
            deptoId: 2582,
            deptoNombre: 'Manzini',
            deptoPais: 'SUA'
        }, 
           {
            deptoId: 2583,
            deptoNombre: 'Shishelweni',
            deptoPais: 'SUA'
        }, 
        //SUDÁFRICA
           {
            deptoId: 2584,
            deptoNombre: 'Cabo del Norte',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2585,
            deptoNombre: 'Cabo Occidental',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2586,
            deptoNombre: 'Cabo Oriental',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2587,
            deptoNombre: 'Estado Libre',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2588,
            deptoNombre: 'Gauteng',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2589,
            deptoNombre: 'KwaZulu-Natal',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2590,
            deptoNombre: 'Limpopo',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2591,
            deptoNombre: 'Mpumalanga',
            deptoPais: 'SUD'
        }, 
           {
            deptoId: 2592,
            deptoNombre: 'Noroeste',
            deptoPais: 'SUD'
        }, 
        //SUDÁN
            {
            deptoId: 2593,
            deptoNombre: 'Darfur del Norte',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2594,
            deptoNombre: 'Darfur del Oeste',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2595,
            deptoNombre: 'Darfur del Sur',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2596,
            deptoNombre: 'Darfur del Este',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2597,
            deptoNombre: 'Darfur Central',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2598,
            deptoNombre: 'Gadarif',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2599,
            deptoNombre: 'Gezira',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2600,
            deptoNombre: 'Jartum',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2601,
            deptoNombre: 'Kassala',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2602,
            deptoNombre: 'Sennar',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2603,
            deptoNombre: 'Kordofán del Sur',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2604,
            deptoNombre: 'Kordofán del Norte',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2605,
            deptoNombre: 'Kordofán del Oeste',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2606,
            deptoNombre: 'Mar Rojo',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2607,
            deptoNombre: 'Nilo Azul / Central',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2608,
            deptoNombre: 'Nilo Blanco',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2609,
            deptoNombre: 'Norte',
            deptoPais: 'SUN'
        },        
            {
            deptoId: 2610,
            deptoNombre: 'Río Nilo',
            deptoPais: 'SUN'
        },        
        //SUDÁN DEL SUR
            {
            deptoId: 2611,
            deptoNombre: 'Alto Nilo',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2612,
            deptoNombre: 'Bahr el-Ghazal del Norte',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2613,
            deptoNombre: 'Bahr el-Ghazal Occidental',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2614,
            deptoNombre: 'Ecuatoria Central',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2615,
            deptoNombre: 'Ecuatoria Occidental',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2616,
            deptoNombre: 'Ecuatoria Oriental',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2617,
            deptoNombre: 'Junqali',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2618,
            deptoNombre: 'Lagos',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2619,
            deptoNombre: 'Unidad',
            deptoPais: 'SUS'
        }, 
            {
            deptoId: 2620,
            deptoNombre: 'Warab',
            deptoPais: 'SUS'
        }, 

        //SUECIA
            {
            deptoId: 2621,
            deptoNombre: 'Provincia de Blekinge',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2622,
            deptoNombre: 'Provincia de Dalarna',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2623,
            deptoNombre: 'Provincia de Escania',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2624,
            deptoNombre: 'Provincia de Estocolmo',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2625,
            deptoNombre: 'Provincia de Gävleborg',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2626,
            deptoNombre: 'Provincia de Gotland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2627,
            deptoNombre: 'Provincia de Halland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2628,
            deptoNombre: 'Provincia de Jämtland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2629,
            deptoNombre: 'Provincia de Jönköping',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2630,
            deptoNombre: 'Provincia de Kalmar',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2631,
            deptoNombre: 'Provincia de Kronoberg',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2632,
            deptoNombre: 'Provincia de Norrbotten',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2633,
            deptoNombre: 'Provincia de Örebro',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2634,
            deptoNombre: 'Provincia de Östergötland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2635,
            deptoNombre: '  Provincia de Södermanland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2636,
            deptoNombre: 'Provincia de Upsala',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2637,
            deptoNombre: 'Provincia de Värmland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2638,
            deptoNombre: 'Provincia de Västerbotten',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2639,
            deptoNombre: 'Provincia de Västernorrland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2640,
            deptoNombre: '  Provincia de Västmanland',
            deptoPais: 'SUE'
        }, 
            {
            deptoId: 2641,
            deptoNombre: 'Provincia de Västra Götaland',
            deptoPais: 'SUE'
        }, 
        //SUIZA
            {
            deptoId: 2642,
            deptoNombre: 'Appenzell Rodas Exteriores',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2643,
            deptoNombre: '  Appenzell Rodas Interiores',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2644,
            deptoNombre: 'Argovia',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2645,
            deptoNombre: '  Basilea-Campiña',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2646,
            deptoNombre: 'Basilea-Ciudad',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2647,
            deptoNombre: 'Berna',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2648,
            deptoNombre: 'Friburgo',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2649,
            deptoNombre: '  Ginebra',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2650,
            deptoNombre: 'Glaris',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2651,
            deptoNombre: 'Grisones',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2652,
            deptoNombre: 'Jura',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2653,
            deptoNombre: 'Lucerna',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2654,
            deptoNombre: 'Neuchâtel',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2655,
            deptoNombre: 'Nidwalden',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2656,
            deptoNombre: 'Obwalden',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2657,
            deptoNombre: 'San Galo',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2658,
            deptoNombre: 'Schaffhausen',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2659,
            deptoNombre: 'Schwyz',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2660,
            deptoNombre: 'Soleura',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2662,
            deptoNombre: 'Tesino',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2663,
            deptoNombre: 'Turgovia',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2664,
            deptoNombre: 'Uri',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2665,
            deptoNombre: 'Valais',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2666,
            deptoNombre: 'Vaud',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2667,
            deptoNombre: 'Zug',
            deptoPais: 'SUI'
        }, 
            {
            deptoId: 2668,
            deptoNombre: 'Zúrich',
            deptoPais: 'SUI'
        }, 
        //SURINAM
            {
            deptoId: 2669,
            deptoNombre: 'Brokopondo',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2670,
            deptoNombre: 'Commewijne',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2671,
            deptoNombre: 'Coronie',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2672,
            deptoNombre: 'Marowijne',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2673,
            deptoNombre: 'Nickerie',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2674,
            deptoNombre: 'Para',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2675,
            deptoNombre: 'Paramaribo',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2676,
            deptoNombre: 'Saramacca',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2677,
            deptoNombre: 'Sipaliwini',
            deptoPais: 'SUM'
        }, 
            {
            deptoId: 2678,
            deptoNombre: 'Wanica',
            deptoPais: 'SUM'
        }, 
        //TAILANDIA
            {
            deptoId: 2679,
            deptoNombre: 'Provincia del Norte',
            deptoPais: 'TAI'
        },         
            {
            deptoId: 2680,
            deptoNombre: 'Provincia Central',
            deptoPais: 'TAI'
        },         
            {
            deptoId: 2681,
            deptoNombre: 'Provincia Noroeste',
            deptoPais: 'TAI'
        },         
            {
            deptoId: 2682,
            deptoNombre: 'Provincia del Este',
            deptoPais: 'TAI'
        },         
            {
            deptoId: 2683,
            deptoNombre: 'Provincia del sur',
            deptoPais: 'TAI'
        },         
        //TANZANIA
            {
            deptoId: 2684,
            deptoNombre: 'Arusha',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2685,
            deptoNombre: 'Dar es Salaam',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2686,
            deptoNombre: 'Dodoma',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2687,
            deptoNombre: 'Geita',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2688,
            deptoNombre: 'Iringa',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2689,
            deptoNombre: 'Kagera',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2690,
            deptoNombre: 'Katavi',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2691,
            deptoNombre: 'Kigoma',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2692,
            deptoNombre: 'Kilimanjaro',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2693,
            deptoNombre: 'Lindi',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2694,
            deptoNombre: 'Manyara',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2695,
            deptoNombre: 'Mara',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2696,
            deptoNombre: 'Mbeya',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2697,
            deptoNombre: 'Morogoro',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2698,
            deptoNombre: 'Mtwara',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2699,
            deptoNombre: 'Mwanza',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2700,
            deptoNombre: 'Njombe',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2701,
            deptoNombre: 'Pemba Norte',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2702,
            deptoNombre: 'Pemba Sur',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2703,
            deptoNombre: 'Pwani',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2704,
            deptoNombre: 'Rukwa',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2705,
            deptoNombre: 'Ruvuma',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2706,
            deptoNombre: 'Shinyanga',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2707,
            deptoNombre: 'Simiyu',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2708,
            deptoNombre: 'Singida',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2709,
            deptoNombre: 'Tabora',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2710,
            deptoNombre: 'Tanga',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2711,
            deptoNombre: 'Zanzíbar Central/Sur',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2712,
            deptoNombre: 'Zanzíbar Ciudad/Oeste',
            deptoPais: 'TAZ'
        },
            {
            deptoId: 2713,
            deptoNombre: 'Zanzíbar Norte',
            deptoPais: 'TAZ'
        },
        //TAYIKISTAN
            {
            deptoId: 2714,
            deptoNombre: 'Provincia de Sughd (Khujand)',
            deptoPais: 'TAY'
        },
            {
            deptoId: 2715,
            deptoNombre: 'Provincia de Karotegin (Dusambé)',
            deptoPais: 'TAY'
        },
            {
            deptoId: 2716,
            deptoNombre: 'Provincia de Khatlon (Qurghonteppa)',
            deptoPais: 'TAY'
        },
            {
            deptoId: 2717,
            deptoNombre: 'Alto Badajshán (Khorugh)',
            deptoPais: 'TAY'
        },
        //TIMOR ORIENTAL
            {
            deptoId: 2718,
            deptoNombre: 'Oecusse',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2719,
            deptoNombre: 'Liquiçá',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2720,
            deptoNombre: 'Dili',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2721,
            deptoNombre: 'Manatuto',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2722,
            deptoNombre: 'Baucau',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2723,
            deptoNombre: 'Lautem',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2724,
            deptoNombre: 'Bobonaro',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2725,
            deptoNombre: 'Ermera',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2726,
            deptoNombre: 'Aileu',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2727,
            deptoNombre: 'Viqueque',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2728,
            deptoNombre: 'Cova-Lima',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2729,
            deptoNombre: 'Ainaro',
            deptoPais: 'TOR'
        },        
            {
            deptoId: 2730,
            deptoNombre: 'Manufahi',
            deptoPais: 'TOR'
        },        
        //TOGO
            {
            deptoId: 2731,
            deptoNombre: 'Altiplano',
            deptoPais: 'TOG'
        }, 

            {
            deptoId: 2732,
            deptoNombre: 'Central',
            deptoPais: 'TOG'
        }, 

            {
            deptoId: 2733,
            deptoNombre: 'Kara',
            deptoPais: 'TOG'
        }, 

            {
            deptoId: 2734,
            deptoNombre: 'Marítima',
            deptoPais: 'TOG'
        }, 

            {
            deptoId: 2735,
            deptoNombre: 'Sabana',
            deptoPais: 'TOG'
        }, 
        //TONGA
             {
            deptoId: 2736,
            deptoNombre: 'ʻEua',
            deptoPais: 'TOA'
        },        
             {
            deptoId: 2737,
            deptoNombre: "Ha'apai",
            deptoPais: 'TOA'
        },        
             {
            deptoId: 2738,
            deptoNombre: 'Niuas',
            deptoPais: 'TOA'
        },        
             {
            deptoId: 2739,
            deptoNombre: 'Tongatapu',
            deptoPais: 'TOA'
        },        
             {
            deptoId: 2740,
            deptoNombre: "Vava'u",
            deptoPais: 'TOA'
        },        
        //TRINIDAD Y TOBAGO
              {
            deptoId: 2741,
            deptoNombre: "Couva-Tabaquite-Talparo",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2742,
            deptoNombre: "Diego Martín",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2743,
            deptoNombre: "Penal-Debe",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2744,
            deptoNombre: "Princes Town",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2745,
            deptoNombre: "Río Claro-Mayaro",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2746,
            deptoNombre: "San Juan-Laventille",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2747,
            deptoNombre: "Sangre Grande",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2748,
            deptoNombre: "Siparia",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2749,
            deptoNombre: "Tunapuna-Piarco",
            deptoPais: 'TYT'
        },           
              {
            deptoId: 2750,
            deptoNombre: "Tobago",
            deptoPais: 'TYT'
        },           
        //TÚNEZ
              {
            deptoId: 2751,
            deptoNombre: "Ariana",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2752,
            deptoNombre: "Béja",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2753,
            deptoNombre: "Ben Arous",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2754,
            deptoNombre: "Bizerta",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2755,
            deptoNombre: "Gabes",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2756,
            deptoNombre: "Gafsa",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2757,
            deptoNombre: "Jendouba",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2758,
            deptoNombre: "Kairuán",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2759,
            deptoNombre: "Kasserine",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2760,
            deptoNombre: "Kebili",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2761,
            deptoNombre: "Kef",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2762,
            deptoNombre: "Mahdia",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2763,
            deptoNombre: "Manouba",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2764,
            deptoNombre: "Medenine",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2765,
            deptoNombre: "Monastir",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2766,
            deptoNombre: "Nabeul",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2767,
            deptoNombre: "Sfax",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2768,
            deptoNombre: "Sidi Bou Said",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2769,
            deptoNombre: "Siliana",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2770,
            deptoNombre: "Susa",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2771,
            deptoNombre: "Tataouine",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2772,
            deptoNombre: "Tozeur",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2773,
            deptoNombre: "Túnez",
            deptoPais: 'TUZ'
        },
              {
            deptoId: 2774,
            deptoNombre: "Zaghouan",
            deptoPais: 'TUZ'
        },
        //TURKMENISTÁN
              {
            deptoId: 2775,
            deptoNombre: "Ahal",
            deptoPais: 'TUK'
        },
              {
            deptoId: 2776,
            deptoNombre: "Balkan",
            deptoPais: 'TUK'
        },
              {
            deptoId: 2777,
            deptoNombre: "Daşoguz",
            deptoPais: 'TUK'
        },
              {
            deptoId: 2778,
            deptoNombre: "Lebap",
            deptoPais: 'TUK'
        },
              {
            deptoId: 2779,
            deptoNombre: " Mary",
            deptoPais: 'TUK'
        },
        //TURQUÍA
              {
            deptoId: 2780,
            deptoNombre: "Provincia de Adana ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2781,
            deptoNombre: " Provincia de Adıyaman",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2782,
            deptoNombre: "Provincia de Afyonkarahisar ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2783,
            deptoNombre: "Provincia de Ağrı  ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2784,
            deptoNombre: "Provincia de Amasya ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2785,
            deptoNombre: "Provincia de Ankara ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2786,
            deptoNombre: "  Provincia de Antalya ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2787,
            deptoNombre: " Provincia de Artvin",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2788,
            deptoNombre: "Provincia de Aydın ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2789,
            deptoNombre: "Provincia de Balıkesir ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2790,
            deptoNombre: "Provincia de Bilecik ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2791,
            deptoNombre: "Provincia de Bingöl ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2792,
            deptoNombre: "Provincia de Bitlis ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2793,
            deptoNombre: " Provincia de Bolu",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2794,
            deptoNombre: "Provincia de Burdur ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2795,
            deptoNombre: "Provincia de Bursa ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2796,
            deptoNombre: "Provincia de Çanakkale ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2797,
            deptoNombre: "Provincia de Cankiri ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2798,
            deptoNombre: "Provincia de Çorum ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2799,
            deptoNombre: "Provincia de Denizli ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 27800,
            deptoNombre: "Provincia de Diyarbakır ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2801,
            deptoNombre: "Provincia de Edirne ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2802,
            deptoNombre: "Provincia de Elazığ ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2803,
            deptoNombre: "Provincia de Erzincan ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2804,
            deptoNombre: "Provincia de Erzurum ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2805,
            deptoNombre: "Provincia de Eskişehir ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2806,
            deptoNombre: "Provincia de Gaziantep ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2807,
            deptoNombre: "Provincia de Giresun ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2808,
            deptoNombre: "Provincia de Gümüşhane ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2809,
            deptoNombre: "Provincia de Hakkâri ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2810,
            deptoNombre: " Provincia de Hatay",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2811,
            deptoNombre: "Provincia de Isparta ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2812,
            deptoNombre: "Provincia de Mersin ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2813,
            deptoNombre: "Provincia de Estambul ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2814,
            deptoNombre: " Provincia de Esmirna ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2815,
            deptoNombre: "Provincia de Kars ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2816,
            deptoNombre: "Provincia de Kastamonu ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2817,
            deptoNombre: "Provincia de Kayseri ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2818,
            deptoNombre: "Provincia de Kirklareli ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2819,
            deptoNombre: "Provincia de Kırşehir ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2820,
            deptoNombre: " Provincia de Kocaeli",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2821,
            deptoNombre: " Provincia de Konya",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2822,
            deptoNombre: "Provincia de Kütahya ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2823,
            deptoNombre: "Provincia de Malatya ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2824,
            deptoNombre: "Provincia de Manisa ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2825,
            deptoNombre: "Provincia de Kahramanmaraş ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2826,
            deptoNombre: "Provincia de Mardin ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2827,
            deptoNombre: "Provincia de Muğla ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2828,
            deptoNombre: "Provincia de Mus ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2829,
            deptoNombre: "Provincia de Nevsehir ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2830,
            deptoNombre: "Provincia de Niğde ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2831,
            deptoNombre: "Provincia de Ordu ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2832,
            deptoNombre: "Provincia de Rize ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2833,
            deptoNombre: "Provincia de Sakarya ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2834,
            deptoNombre: " Provincia de Samsun",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2835,
            deptoNombre: "Provincia de Siirt ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2836,
            deptoNombre: "Provincia de Sinope ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2837,
            deptoNombre: "Provincia de Sivas ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2838,
            deptoNombre: "Provincia de Tekirdağ ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2839,
            deptoNombre: "Provincia de Tokat ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2840,
            deptoNombre: " Provincia de Trebisonda",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2841,
            deptoNombre: "Provincia de Tunceli ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2842,
            deptoNombre: "Provincia de Şanlıurfa ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2843,
            deptoNombre: " Provincia de Uşak",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2844,
            deptoNombre: "Provincia de Van ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2845,
            deptoNombre: " Provincia de Yozgat",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2846,
            deptoNombre: " Provincia de Zonguldak",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2847,
            deptoNombre: " Provincia de Aksaray",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2848,
            deptoNombre: "Provincia de Bayburt ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2849,
            deptoNombre: " Provincia de Karaman",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2850,
            deptoNombre: "Provincia de Kırıkkale ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2851,
            deptoNombre: "Provincia de Batman ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2852,
            deptoNombre: " Provincia de Şırnak",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2853,
            deptoNombre: "Provincia de Bartın ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2854,
            deptoNombre: " Provincia de Ardahan",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2855,
            deptoNombre: " Provincia de Iğdır",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2856,
            deptoNombre: "Provincia de Yalova ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2857,
            deptoNombre: "Provincia de Karabük ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2858,
            deptoNombre: "Provincia de Kilis ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2859,
            deptoNombre: "Provincia de Osmaniye ",
            deptoPais: 'TAR'
        },
              {
            deptoId: 2860,
            deptoNombre: "Provincia de Düzce ",
            deptoPais: 'TAR'
        },
        //TUVALU
              {
            deptoId: 2861,
            deptoNombre: "Fongafale",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2862,
            deptoNombre: "Nanumea",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2863,
            deptoNombre: "Nui",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2864,
            deptoNombre: "Nukufetau",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2865,
            deptoNombre: "Nukulaelae",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2866,
            deptoNombre: "Vaitupu",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2867,
            deptoNombre: "Nanumanga",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2868,
            deptoNombre: "Niulakita",
            deptoPais: 'TUV'
        },
              {
            deptoId: 2869,
            deptoNombre: "Niutao",
            deptoPais: 'TUV'
        },
        //UCRANIA
              {
            deptoId: 2870,
            deptoNombre: "Cherkasy",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2871,
            deptoNombre: "Chernihiv",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2872,
            deptoNombre: "Chernivtsi",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2873,
            deptoNombre: "Dnipropetrovsk",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2874,
            deptoNombre: "Donetsk",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2875,
            deptoNombre: "Ivano-Frankivsk",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2876,
            deptoNombre: "Járkov",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2877,
            deptoNombre: "Jersón",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2878,
            deptoNombre: "Jmelnitski",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2879,
            deptoNombre: "Kirovogrado",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2880,
            deptoNombre: "Kiev",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2881,
            deptoNombre: "Lugansk",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2882,
            deptoNombre: "Leópolis",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2883,
            deptoNombre: "Mykolaiv",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2884,
            deptoNombre: "Odesa",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2885,
            deptoNombre: "Poltava",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2886,
            deptoNombre: "Rivne",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2887,
            deptoNombre: "Sumy",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2888,
            deptoNombre: "Ternópil",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2889,
            deptoNombre: "Transcarpacia",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2890,
            deptoNombre: "Volinia",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2891,
            deptoNombre: "Vinnytsia",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2892,
            deptoNombre: "Zaporizhia",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2893,
            deptoNombre: "Zhytomyr",
            deptoPais: 'UCR'
        },
              {
            deptoId: 2894,
            deptoNombre: "República Autónoma de Crimea",
            deptoPais: 'UCR'
        },
        //UCRANIA
              {
            deptoId: 2894,
            deptoNombre: "República Autónoma de Crimea",
            deptoPais: 'UCR'
        },
        //UGANDA
               {
            deptoId: 2895,
            deptoNombre: "Norte",
            deptoPais: 'UGA'
        },                   
               {
            deptoId: 2896,
            deptoNombre: "Este",
            deptoPais: 'UGA'
        },                   
               {
            deptoId: 2897,
            deptoNombre: "Central",
            deptoPais: 'UGA'
        },                   
               {
            deptoId: 2898,
            deptoNombre: "Oeste",
            deptoPais: 'UGA'
        },                   
        //URUGUAY
               {
            deptoId: 2899,
            deptoNombre: "Artigas",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2900,
            deptoNombre: "Canelones",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2901,
            deptoNombre: "Cerro Largo",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2902,
            deptoNombre: "Colonia",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2903,
            deptoNombre: "Durazno",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2904,
            deptoNombre: "Flores",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2905,
            deptoNombre: "Florida",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2906,
            deptoNombre: "Lavalleja",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2907,
            deptoNombre: "Maldonado",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2908,
            deptoNombre: "Montevideo",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2909,
            deptoNombre: "Paysandú",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2910,
            deptoNombre: "Río Negro",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2911,
            deptoNombre: "Rivera",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2912,
            deptoNombre: "Rocha",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2913,
            deptoNombre: "Salto",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2914,
            deptoNombre: "San José",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2915,
            deptoNombre: "Soriano",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2916,
            deptoNombre: "Tacuarembó",
            deptoPais: 'URG'
        },   
               {
            deptoId: 2917,
            deptoNombre: "Treinta y Tres",
            deptoPais: 'URG'
        },   
        //UZBEKISTÁN
               {
            deptoId: 2918,
            deptoNombre: "Andillán",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2919,
            deptoNombre: "Bujará",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2920,
            deptoNombre: "Ferganá",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2921,
            deptoNombre: "Djizaks",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2922,
            deptoNombre: "Corasmia",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2923,
            deptoNombre: "Namangán",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2924,
            deptoNombre: "Navoi",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2925,
            deptoNombre: "Kashkadar",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2926,
            deptoNombre: "Rep. Autónoma Karakalpakistá",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2927,
            deptoNombre: "Samarcanda",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2928,
            deptoNombre: "Sirdarín",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2929,
            deptoNombre: "Surjandarín",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2930,
            deptoNombre: "Taskent",
            deptoPais: 'UZB'
        },         
               {
            deptoId: 2931,
            deptoNombre: "Taskent (ciudad)",
            deptoPais: 'UZB'
        },         
        //VANUATU
               {
            deptoId: 2932,
            deptoNombre: "Malampa ",
            deptoPais: 'VAN'
        },        
               {
            deptoId: 2933,
            deptoNombre: "Penama ",
            deptoPais: 'VAN'
        },        
               {
            deptoId: 2934,
            deptoNombre: "Sanma ",
            deptoPais: 'VAN'
        },        
               {
            deptoId: 2935,
            deptoNombre: "Shefa ",
            deptoPais: 'VAN'
        },        
               {
            deptoId: 2936,
            deptoNombre: "Tafea ",
            deptoPais: 'VAN'
        },        
               {
            deptoId: 2937,
            deptoNombre: "Torba ",
            deptoPais: 'VAN'
        },        
        //VATICANO
               {
            deptoId: 2938,
            deptoNombre: "Ciudad del Vaticano",
            deptoPais: 'VAT'
        },          
        //VENEZUELA
               {
            deptoId: 2939,
            deptoNombre: "Amazonas",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2940,
            deptoNombre: "Anzoátegui",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2941,
            deptoNombre: "Apure",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2942,
            deptoNombre: "Aragua",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2943,
            deptoNombre: "Barinas",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2944,
            deptoNombre: "Bolívar",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2945,
            deptoNombre: "Carabobo",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2946,
            deptoNombre: "Cojedes",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2947,
            deptoNombre: "Distrito Capital",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2948,
            deptoNombre: "Delta Amacuro",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2949,
            deptoNombre: "Falcón",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2950,
            deptoNombre: "Guárico",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2951,
            deptoNombre: "Lara",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2952,
            deptoNombre: "Mérida",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2953,
            deptoNombre: "Miranda",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2954,
            deptoNombre: "Monagas",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2955,
            deptoNombre: "Nueva Esparta",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2956,
            deptoNombre: "Portuguesa",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2957,
            deptoNombre: "Sucre",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2958,
            deptoNombre: "Táchira",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2959,
            deptoNombre: "Trujillo",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2960,
            deptoNombre: "Vargas",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2961,
            deptoNombre: "Yaracuy",
            deptoPais: 'VEN'
        },
               {
            deptoId: 2962,
            deptoNombre: "Zulia",
            deptoPais: 'VEN'
        },
        //VIETNAM
               {
            deptoId: 2963,
            deptoNombre: "Delta del Río Rojo (Đồng Bằng Sông Hồng)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2964,
            deptoNombre: "Costa Central del Norte (Bắc Trung Bộ)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2965,
            deptoNombre: "Noreste (Đông Bắc)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2966,
            deptoNombre: "Noroeste (Tây Bắc)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2967,
            deptoNombre: "Tierras Altas Centrales (Tây Nguyên)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2968,
            deptoNombre: "Costa Central del Sur (Nam Trung Bộ)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2969,
            deptoNombre: "Sureste (Đông Nam Bộ)",
            deptoPais: 'VIT'
        },
               {
            deptoId: 2970,
            deptoNombre: "Delta del Río Mekong",
            deptoPais: 'VIT'
        },
        //YEMEN
               {
            deptoId: 2971,
            deptoNombre: "Abyan",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2972,
            deptoNombre: "Adén",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2973,
            deptoNombre: "Ad Dali'",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2974,
            deptoNombre: "Al Bayda'",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2975,
            deptoNombre: "Al Hudayda",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2976,
            deptoNombre: "Al Jawf",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2977,
            deptoNombre: "Al Mahrah",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2978,
            deptoNombre: "Al Mahwit",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2979,
            deptoNombre: "Amanat Al Asimah",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2980,
            deptoNombre: "'Amran",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2981,
            deptoNombre: "Dhamar",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2982,
            deptoNombre: "Hadramaut",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2983,
            deptoNombre: "Hajjah",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2984,
            deptoNombre: "Ibb",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2985,
            deptoNombre: "Lahij",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2986,
            deptoNombre: "Marib",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2987,
            deptoNombre: "Raymah",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2988,
            deptoNombre: "Sa'dah",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2989,
            deptoNombre: "Saná",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2990,
            deptoNombre: "Shabwah",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2991,
            deptoNombre: "Socotra",
            deptoPais: 'YEM'
        },
               {
            deptoId: 2992,
            deptoNombre: "Taiz",
            deptoPais: 'YEM'
        },
        //YIBUTI
               {
            deptoId: 2993,
            deptoNombre: "Ciudad de Djibouti",
            deptoPais: 'YIB'
        },
               {
            deptoId: 2994,
            deptoNombre: "Región de Arta",
            deptoPais: 'YIB'
        },
               {
            deptoId: 2995,
            deptoNombre: "Región de Ali Sabieh",
            deptoPais: 'YIB'
        },
               {
            deptoId: 2996,
            deptoNombre: "Región de Dikhil",
            deptoPais: 'YIB'
        },
               {
            deptoId: 2997,
            deptoNombre: "Región de Tadjoura",
            deptoPais: 'YIB'
        },
               {
            deptoId: 2998,
            deptoNombre: "Región de Obock",
            deptoPais: 'YIB'
        },
        //ZAMBIA
               {
            deptoId: 2999,
            deptoNombre: "Provincia Central",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3000,
            deptoNombre: "Provincia de Copperbelt",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3001,
            deptoNombre: "Provincia del Este",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3002,
            deptoNombre: "Provincia de Luapula",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3003,
            deptoNombre: "Provincia de Lusaka",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3004,
            deptoNombre: "Provincia de Muchinga",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3005,
            deptoNombre: "Provincia del Noroeste",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3006,
            deptoNombre: "Provincia del Norte",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3007,
            deptoNombre: "Provincia del Oeste",
            deptoPais: 'ZAM'
        },
               {
            deptoId: 3008,
            deptoNombre: "Provincia del Sur",
            deptoPais: 'ZAM'
        },
        //ZIMBABUE
                {
            deptoId: 3009,
            deptoNombre: "Bulawayo ",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3010,
            deptoNombre: "Harare ",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3011,
            deptoNombre: "Manicalandia",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3012,
            deptoNombre: "Mashonalandia Central",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3013,
            deptoNombre: "Mashonalandia Oriental",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3014,
            deptoNombre: "Mashonalandia Occidental",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3015,
            deptoNombre: "Masvingo",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3016,
            deptoNombre: "Matabelelandia Septentrional",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3017,
            deptoNombre: "Matabelelandia Meridional",
            deptoPais: 'ZIM'
        },       
                {
            deptoId: 3018,
            deptoNombre: "Midlands",
            deptoPais: 'ZIM'
        },       


    ];
    $scope.provincias = [
	{
	    proNombre: '`Alāqehdārī Deh-e Shū',
	    deptoId: 1
	},
    {
        proNombre: 'Āchīn',
        deptoId: 1
    },
    {
        proNombre: 'Anār Darreh',
        deptoId: 1
    },
    {
        proNombre: 'Andkhvoy',
        deptoId: 1
    },
    {
        proNombre: 'Ashkāsham',
        deptoId: 1
    },
    {
        proNombre: 'Asmar',
        deptoId: 1
    },
    {
        proNombre: 'Āt Khvājeh',
        deptoId: 1
    },
    {
        proNombre: 'Baghlan',
        deptoId: 1
    },
    {
        proNombre: 'Balkh',
        deptoId: 1
    },
    {
        proNombre: 'Barakī Barak',
        deptoId: 1
    },
    {
        proNombre: 'Chār Burj',
        deptoId: 1
    },
    {
        proNombre: 'Charikar',
        deptoId: 1
    },
    {
        proNombre: 'Chīras',
        deptoId: 1
    },
    {
        proNombre: 'Darvīshān',
        deptoId: 1
    },
    {
        proNombre: 'Darẕāb',
        deptoId: 1
    },
    {
        proNombre: 'Dasht-e Archī',
        deptoId: 1
    },
    {
        proNombre: 'Emām Şāḩeb',
        deptoId: 1
    },
    {
        proNombre: 'Eslām Qal`eh',
        deptoId: 1
    },
    {
        proNombre: 'Farakh',
        deptoId: 1
    },
    {
        proNombre: 'Farkhār',
        deptoId: 1
    },
    {
        proNombre: 'Feyẕābād',
        deptoId: 1
    },
   {
       proNombre: 'Gardez',
       deptoId: 1
   },
   {
       proNombre: 'Gereshk',
       deptoId: 1
   },
   {
       proNombre: 'Ghazni',
       deptoId: 1
   },
   {
       proNombre: 'Ḩokūmatī Azṟaw',
       deptoId: 1
   },
   {
       proNombre: 'Jabal os Saraj',
       deptoId: 1
   },
   {
       proNombre: 'Jalalabad',
       deptoId: 1
   },
   {
       proNombre: 'Jorm',
       deptoId: 1
   },
   {
       proNombre: 'Kabul',
       deptoId: 1
   },
   {
       proNombre: 'Kalāt-i-Ghilzai',
       deptoId: 1
   },
   {
       proNombre: 'Kandahar',
       deptoId: 1
   },
   {
       proNombre: 'Karokh',
       deptoId: 1
   },
   {
       proNombre: 'Khanabad',
       deptoId: 1
   },
   {
       proNombre: 'Khandūd',
       deptoId: 1
   },
   {
       proNombre: 'Khāsh',
       deptoId: 1
   },
   {
       proNombre: 'Khōst',
       deptoId: 1
   },
   {
       proNombre: 'Kondūz',
       deptoId: 1
   },
   {
       proNombre: 'Kūhestān',
       deptoId: 1
   },
   {
       proNombre: 'Kūshk',
       deptoId: 1
   },
   {
       proNombre: 'Lar Gerd',
       deptoId: 1
   },
   {
       proNombre: 'Mazār-e Sharīf',
       deptoId: 1
   },
   {
       proNombre: 'Mehtar Lām',
       deptoId: 1
   },
   {
       proNombre: 'Mīr Bachcheh Kowt',
       deptoId: 1
   },
   {
       proNombre: 'Mīrābād',
       deptoId: 1
   },
   {
       proNombre: 'Mohmand Darrah',
       deptoId: 1
   },
   {
       proNombre: 'Nahrīn',
       deptoId: 1
   },
   {
       proNombre: 'Nawab City',
       deptoId: 1
   },
   {
       proNombre: 'Paghmān',
       deptoId: 1
   },
   {
       proNombre: 'Panjāb',
       deptoId: 1
   },
   {
       proNombre: 'Qal`eh Shahr',
       deptoId: 1
   },
   {
       proNombre: 'Qarāvol',
       deptoId: 1
   },
   {
       proNombre: 'Qarchī Gak',
       deptoId: 1
   },
   {
       proNombre: 'Qareh Bāgh',
       deptoId: 1
   },
   {
       proNombre: 'Qarqīn',
       deptoId: 1
   },
   {
       proNombre: 'Rostāq',
       deptoId: 1
   },
   {
       proNombre: 'Rūdbār',
       deptoId: 1
   },
   {
       proNombre: 'Samangān',
       deptoId: 1
   },
   {
       proNombre: 'Sang-e Chārak',
       deptoId: 1
   },
   {
       proNombre: 'Sangīn',
       deptoId: 1
   },
   {
       proNombre: 'Sar-e Pol',
       deptoId: 1
   },
   {
       proNombre: 'Shāhrag',
       deptoId: 1
   },
   {
       proNombre: 'Sheberghān',
       deptoId: 1
   },
   {
       proNombre: 'Šīndand',
       deptoId: 1
   },
   {
       proNombre: 'Tagao',
       deptoId: 1
   },
   {
       proNombre: 'Tagow Bāy',
       deptoId: 1
   },
   {
       proNombre: 'Taloqan',
       deptoId: 1
   },
   {
       proNombre: 'Tāshqorghān',
       deptoId: 1
   },
   {
       proNombre: 'Tīr Pol',
       deptoId: 1
   },
   {
       proNombre: 'Tokzār',
       deptoId: 1
   },
   {
       proNombre: 'Uruzgan',
       deptoId: 1
   },
   {
       proNombre: 'Yengī Qal`eh',
       deptoId: 1
   },
   {
       proNombre: 'Zareh Sharan',
       deptoId: 1
   },
   {
       proNombre: 'Zarghūn Shahr',
       deptoId: 1
   },
   {
       proNombre: 'Zendeh Jān',
       deptoId: 1
   },
   {
       proNombre: 'Berat',
       deptoId: 2
   },
   {
       proNombre: 'Kuçovë',
       deptoId: 2
   },
   {
       proNombre: ' Poliçan',
       deptoId: 2
   },
   {
       proNombre: ' Skrapar',
       deptoId: 2
   },
   {
       proNombre: 'Ura Vajgugore',
       deptoId: 2
   },
   {
       proNombre: 'Bulqizë',
       deptoId: 3
   },
   {
       proNombre: 'Dibër',
       deptoId: 3
   },
   {
       proNombre: 'Klos',
       deptoId: 3
   },
   {
       proNombre: 'Mat',
       deptoId: 3
   },
   {
       proNombre: 'Durrës',
       deptoId: 4
   },
   {
       proNombre: 'Krujë',
       deptoId: 4
   },
   {
       proNombre: 'Shijak',
       deptoId: 4
   },
   {
       proNombre: 'Belsh',
       deptoId: 5
   },
   {
       proNombre: 'Cërrik',
       deptoId: 5
   },
   {
       proNombre: ' Elbasan',
       deptoId: 5
   },
   {
       proNombre: 'Gramsh',
       deptoId: 5
   },
   {
       proNombre: 'Librazhd',
       deptoId: 5
   },
   {
       proNombre: 'Peqin',
       deptoId: 5
   },
   {
       proNombre: 'Prrenjas',
       deptoId: 5
   },
   {
       proNombre: 'Divjake',
       deptoId: 6
   },
   {
       proNombre: 'Fier',
       deptoId: 6
   },
   {
       proNombre: 'Lushnjë',
       deptoId: 6
   },
   {
       proNombre: 'Mallakastër',
       deptoId: 6
   },
   {
       proNombre: 'Patos',
       deptoId: 6
   },
   {
       proNombre: 'Roskovec',
       deptoId: 6
   },
   {
       proNombre: 'Dropull',
       deptoId: 7
   },
   {
       proNombre: 'Gjirokastër',
       deptoId: 7
   },
   {
       proNombre: 'Kelcyre',
       deptoId: 7
   },
   {
       proNombre: ' Libohove',
       deptoId: 7
   },
   {
       proNombre: 'Memaliaj',
       deptoId: 7
   },
   {
       proNombre: 'Përmet',
       deptoId: 7
   },
   {
       proNombre: 'Tepelenë',
       deptoId: 7
   },
   {
       proNombre: 'Devoll',
       deptoId: 8
   },
   {
       proNombre: 'Kolonjë',
       deptoId: 8
   },
   {
       proNombre: 'Korçë',
       deptoId: 8
   },
   {
       proNombre: 'Maliq',
       deptoId: 8
   },
   {
       proNombre: 'Pogradec',
       deptoId: 8
   },
   {
       proNombre: ' Pustec',
       deptoId: 8
   },
   {
       proNombre: 'Has',
       deptoId: 9
   },
   {
       proNombre: 'Kukës',
       deptoId: 9
   },
   {
       proNombre: 'Tropojë',
       deptoId: 9
   },
   {
       proNombre: 'Kurbin',
       deptoId: 10
   },
   {
       proNombre: 'Lezhë',
       deptoId: 10
   },
   {
       proNombre: 'Mirditë',
       deptoId: 10
   },
  {
      proNombre: 'Fushë-Arrëz',
      deptoId: 11
  },
   {
       proNombre: 'Malësi e Madhe',
       deptoId: 11
   },
   {
       proNombre: ' Pukë',
       deptoId: 11
   },
   {
       proNombre: 'Shkodër',
       deptoId: 11
   },
   {
       proNombre: 'Vau-Dejës',
       deptoId: 11
   },
  {
      proNombre: 'Kamëz',
      deptoId: 12
  },
   {
       proNombre: 'Kavajë',
       deptoId: 12
   },
   {
       proNombre: 'Rrogozhinë',
       deptoId: 12
   },
   {
       proNombre: 'Tirana',
       deptoId: 12
   },
   {
       proNombre: 'Vorë',
       deptoId: 12
   },
   {
       proNombre: 'Delvinë',
       deptoId: 13
   },
   {
       proNombre: 'Finiq',
       deptoId: 13
   },
   {
       proNombre: 'Himarë',
       deptoId: 13
   },
   {
       proNombre: 'Konispol',
       deptoId: 13
   },
   {
       proNombre: 'Sarandë',
       deptoId: 13
   },
   {
       proNombre: 'Selenicë',
       deptoId: 13
   },
   {
       proNombre: 'Vlorë',
       deptoId: 13
   },
   {
       proNombre: 'Alb-Donau-Kreis',
       deptoId: 14
   },
   {
       proNombre: 'Baden-Baden',
       deptoId: 14
   },
   {
       proNombre: 'Biberach',
       deptoId: 14
   },
   {
       proNombre: 'Bodensee',
       deptoId: 14
   },
   {
       proNombre: 'Böblingen',
       deptoId: 14
   },
   {
       proNombre: 'Brisgovia-Alta Selva Negra',
       deptoId: 14
   },
   {
       proNombre: 'Calw',
       deptoId: 14
   },
   {
       proNombre: 'Emmendingen',
       deptoId: 14
   },
   {
       proNombre: 'Enz',
       deptoId: 14
   },
   {
       proNombre: 'Esslingen',
       deptoId: 14
   },
   {
       proNombre: 'Freudenstadt',
       deptoId: 14
   },
   {
       proNombre: 'Friburgo de Brisgovia',
       deptoId: 14
   },
   {
       proNombre: 'Göppingen',
       deptoId: 14
   },
   {
       proNombre: 'Heidelberg',
       deptoId: 14
   },
   {
       proNombre: 'Heidenheim',
       deptoId: 14
   },
   {
       proNombre: 'Heilbronn',
       deptoId: 14
   },
   {
       proNombre: 'Heilbronn',
       deptoId: 14
   },
   {
       proNombre: 'Karlsruhe',
       deptoId: 14
   },
   {
       proNombre: 'Konstanz',
       deptoId: 14
   },
   {
       proNombre: 'Lörrach',
       deptoId: 14
   },
   {
       proNombre: 'Ludwigsburg',
       deptoId: 14
   },
   {
       proNombre: 'Main-Tauber-Kreis',
       deptoId: 14
   },
   {
       proNombre: 'Mannheim',
       deptoId: 14
   },
   {
       proNombre: 'Neckar-Odenwald-Kreis',
       deptoId: 14
   },
   {
       proNombre: 'Ortenaukreis',
       deptoId: 14
   },
   {
       proNombre: 'Ostalbkreis',
       deptoId: 14
   },
   {
       proNombre: 'Pforzheim',
       deptoId: 14
   },
   {
       proNombre: 'Rastatt',
       deptoId: 14
   },
   {
       proNombre: 'Ravensburg',
       deptoId: 14
   },
   {
       proNombre: 'Rems-Murr-Kreis',
       deptoId: 14
   },
   {
       proNombre: 'Reutlingen',
       deptoId: 14
   },
   {
       proNombre: 'Rhein-Neckar-Kreis',
       deptoId: 14
   },
   {
       proNombre: 'Rottweil',
       deptoId: 14
   },
   {
       proNombre: 'Schwäbisch Hall',
       deptoId: 14
   },
   {
       proNombre: 'Selva Negra-Baar',
       deptoId: 14
   },
   {
       proNombre: 'Sigmaringen',
       deptoId: 14
   },
   {
       proNombre: 'Stuttgart',
       deptoId: 14
   },
   {
       proNombre: 'Tubinga',
       deptoId: 14
   },
   {
       proNombre: 'Tübingen',
       deptoId: 14
   },
   {
       proNombre: 'Tuttlingen',
       deptoId: 14
   },
   {
       proNombre: 'Ulm',
       deptoId: 14
   },
   {
       proNombre: 'Waldshut',
       deptoId: 14
   },
   {
       proNombre: 'Zollernalbkreis',
       deptoId: 14
   },
   {
       proNombre: 'Aichach-Friedberg',
       deptoId: 15
   },
   {
       proNombre: 'Altötting',
       deptoId: 15
   },
   {
       proNombre: 'Amberg',
       deptoId: 15
   },
   {
       proNombre: 'Ansbach',
       deptoId: 15
   },
   {
       proNombre: 'Aschaffenburgo',
       deptoId: 15
   },
   {
       proNombre: 'Augsburgo',
       deptoId: 15
   },
   {
       proNombre: 'Bad Kissingen',
       deptoId: 15
   },
   {
       proNombre: 'Bad Tölz',
       deptoId: 15
   },
   {
       proNombre: 'Bamberg',
       deptoId: 15
   },
   {
       proNombre: 'Bayreuth',
       deptoId: 15
   },
   {
       proNombre: 'Berchtesgadener',
       deptoId: 15
   },
   {
       proNombre: 'Cham',
       deptoId: 15
   },
   {
       proNombre: 'Coburgo',
       deptoId: 15
   },
   {
       proNombre: 'Dachau',
       deptoId: 15
   },
   {
       proNombre: 'Deggendorf',
       deptoId: 15
   },
   {
       proNombre: 'Dilinga',
       deptoId: 15
   },
   {
       proNombre: 'Dingolfing',
       deptoId: 15
   },
   {
       proNombre: 'Danubio-Ries',
       deptoId: 15
   },
   {
       proNombre: 'Ebersberg',
       deptoId: 15
   },
   {
       proNombre: 'Eichstätt',
       deptoId: 15
   },
   {
       proNombre: 'Erding',
       deptoId: 15
   },
   {
       proNombre: 'Erlangen-Höchstadt',
       deptoId: 15
   },
   {
       proNombre: 'Forchheim',
       deptoId: 15
   },
   {
       proNombre: 'Frisinga',
       deptoId: 15
   },
   {
       proNombre: 'Freyung',
       deptoId: 15
   },
   {
       proNombre: 'Fürstenfeldbruck',
       deptoId: 15
   },
   {
       proNombre: 'Fürth',
       deptoId: 15
   },
   {
       proNombre: 'Garmisch',
       deptoId: 15
   },
   {
       proNombre: 'Gunzburgo',
       deptoId: 15
   },
   {
       proNombre: 'Haßberge',
       deptoId: 15
   },
   {
       proNombre: 'Hof',
       deptoId: 15
   },
   {
       proNombre: 'Kelheim',
       deptoId: 15
   },
   {
       proNombre: 'Kitzingen',
       deptoId: 15
   },
   {
       proNombre: 'Kronach',
       deptoId: 15
   },
   {
       proNombre: 'Kulmbach',
       deptoId: 15
   },
   {
       proNombre: 'Landsberg',
       deptoId: 15
   },
   {
       proNombre: 'Landshut',
       deptoId: 15
   },
   {
       proNombre: 'Lichtenfels',
       deptoId: 15
   },
   {
       proNombre: 'Lindau',
       deptoId: 15
   },
   {
       proNombre: 'Main-Spessart',
       deptoId: 15
   },
   {
       proNombre: 'Miesbach',
       deptoId: 15
   },
   {
       proNombre: 'Miltenberg',
       deptoId: 15
   },
   {
       proNombre: 'Mühldorf',
       deptoId: 15
   },
   {
       proNombre: 'Múnich',
       deptoId: 15
   },
   {
       proNombre: 'Neuburg',
       deptoId: 15
   },
   {
       proNombre: 'Neumarkt (AP)',
       deptoId: 15
   },
   {
       proNombre: 'Neustadt',
       deptoId: 15
   },
   {
       proNombre: 'Neustadt',
       deptoId: 15
   },
   {
       proNombre: 'Nuevo Ulm',
       deptoId: 15
   },
   {
       proNombre: 'País de Núremberg',
       deptoId: 15
   },
   {
       proNombre: 'Alta Algovia',
       deptoId: 15
   },
   {
       proNombre: 'Algovia Oriental',
       deptoId: 15
   },
   {
       proNombre: 'Passau',
       deptoId: 15
   },
   {
       proNombre: 'Pfaffenhofen',
       deptoId: 15
   },
   {
       proNombre: 'Regen',
       deptoId: 15
   },
   {
       proNombre: 'Ratisbona',
       deptoId: 15
   },
   {
       proNombre: 'Rhön',
       deptoId: 15
   },
   {
       proNombre: 'Rosenheim',
       deptoId: 15
   },
   {
       proNombre: 'Roth',
       deptoId: 15
   },
   {
       proNombre: 'Rottal-Inn',
       deptoId: 15
   },
   {
       proNombre: 'Schwandorf',
       deptoId: 15
   },
   {
       proNombre: 'Schweinfurt',
       deptoId: 15
   },
   {
       proNombre: 'Starnberg',
       deptoId: 15
   },
   {
       proNombre: 'Straubing',
       deptoId: 15
   },
   {
       proNombre: 'Tirschenreuth',
       deptoId: 15
   },
   {
       proNombre: 'Traunstein',
       deptoId: 15
   },
   {
       proNombre: 'Baja Algovia',
       deptoId: 15
   },
   {
       proNombre: 'Weilheim',
       deptoId: 15
   },
   {
       proNombre: 'Weißenburg',
       deptoId: 15
   },
   {
       proNombre: 'Wunsiedel',
       deptoId: 15
   },
   {
       proNombre: 'Wurzburgo',
       deptoId: 15
   },
   {
       proNombre: 'Charlottenburg-Wilmersdorf',
       deptoId: 16
   },
   {
       proNombre: 'Friedrichshain-Kreuzberg',
       deptoId: 16
   },
   {
       proNombre: 'Lichtenberg',
       deptoId: 16
   },
   {
       proNombre: 'Marzahn-Hellersdorf',
       deptoId: 16
   },
   {
       proNombre: 'Mitte',
       deptoId: 16
   },
   {
       proNombre: 'Neukölln',
       deptoId: 16
   },
   {
       proNombre: 'Pankow',
       deptoId: 16
   },
   {
       proNombre: 'Reinickendorf',
       deptoId: 16
   },
   {
       proNombre: 'Spandau',
       deptoId: 16
   },
   {
       proNombre: 'Steglitz-Zehlendorf',
       deptoId: 16
   },
   {
       proNombre: 'Tempelhof-Schöneberg',
       deptoId: 16
   },
   {
       proNombre: 'Treptow-Köpenick',
       deptoId: 16
   },
   {
       proNombre: 'Barnim',
       deptoId: 17
   },
   {
       proNombre: 'Cottbus',
       deptoId: 17
   },
   {
       proNombre: 'Dahme-Spreewald',
       deptoId: 17
   },
   {
       proNombre: 'Elbe-Elster',
       deptoId: 17
   },
   {
       proNombre: 'Fráncfort del Oder',
       deptoId: 17
   },
   {
       proNombre: 'Havelland',
       deptoId: 17
   },
   {
       proNombre: 'Märkisch-Oderland',
       deptoId: 17
   },
   {
       proNombre: 'Overhavel',
       deptoId: 17
   },
   {
       proNombre: 'Oberspreewald-Lausitz',
       deptoId: 17
   },
   {
       proNombre: 'Óder-Spree',
       deptoId: 17
   },
   {
       proNombre: 'Ostprignitz-Ruppin',
       deptoId: 17
   },
   {
       proNombre: 'Potsdam',
       deptoId: 17
   },
   {
       proNombre: 'Potsdam-Mittelmark',
       deptoId: 17
   },
   {
       proNombre: 'Prignitz',
       deptoId: 17
   },
   {
       proNombre: 'Spree-Neiße',
       deptoId: 17
   },
   {
       proNombre: 'Teltow-Fläming',
       deptoId: 17
   },
   {
       proNombre: 'Uckermark',
       deptoId: 17
   },
   {
       proNombre: 'Häfen',
       deptoId: 18
   },
   {
       proNombre: 'Blockland',
       deptoId: 18
   },
   {
       proNombre: 'Blumenthal',
       deptoId: 18
   },
   {
       proNombre: 'Borgfeld',
       deptoId: 18
   },
   {
       proNombre: 'Burglesum',
       deptoId: 18
   },
   {
       proNombre: 'Findorff',
       deptoId: 18
   },
   {
       proNombre: 'Gröpelingen',
       deptoId: 18
   },
   {
       proNombre: 'Hemelingen',
       deptoId: 18
   },
   {
       proNombre: 'Horn-Lehe',
       deptoId: 18
   },
   {
       proNombre: 'Huchting',
       deptoId: 18
   },
   {
       proNombre: 'Mitte',
       deptoId: 18
   },
   {
       proNombre: 'Neustadt',
       deptoId: 18
   },
   {
       proNombre: 'Oberneuland',
       deptoId: 18
   },
   {
       proNombre: 'Obervieland',
       deptoId: 18
   },
   {
       proNombre: 'Osterholz',
       deptoId: 18
   },
   {
       proNombre: 'Östliche Vorstadt',
       deptoId: 18
   },
   {
       proNombre: 'Schwachhausen',
       deptoId: 18
   },
   {
       proNombre: 'Seehausen',
       deptoId: 18
   },
   {
       proNombre: 'Strom',
       deptoId: 18
   },
   {
       proNombre: 'Vahr',
       deptoId: 18
   },
   {
       proNombre: 'Vegesack',
       deptoId: 18
   },
   {
       proNombre: 'Walle',
       deptoId: 18
   },
   {
       proNombre: 'Woltmershausen',
       deptoId: 18
   },
   {
       proNombre: 'Altona',
       deptoId: 19
   },
   {
       proNombre: 'Bergedorf',
       deptoId: 19
   },
   {
       proNombre: 'Eims-büttel',
       deptoId: 19
   },
   {
       proNombre: 'Hamburg-Nord',
       deptoId: 19
   },
   {
       proNombre: 'Harburg',
       deptoId: 19
   },
   {
       proNombre: 'Harburg-Mitte',
       deptoId: 19
   },
   {
       proNombre: 'Wandsbek',
       deptoId: 19
   },
   {
       proNombre: 'Bad Homburg v. d. Höhe',
       deptoId: 20
   },
   {
       proNombre: 'Bergstraße',
       deptoId: 20
   },
   {
       proNombre: 'Darmstadt',
       deptoId: 20
   },
   {
       proNombre: 'Darmstadt-Dieburg',
       deptoId: 20
   },
   {
       proNombre: 'Fráncfort del Meno',
       deptoId: 20
   },
   {
       proNombre: 'Fulda',
       deptoId: 20
   },
   {
       proNombre: 'Gießen',
       deptoId: 20
   },
   {
       proNombre: 'Groß-Gerau',
       deptoId: 20
   },
   {
       proNombre: 'Hanau',
       deptoId: 20
   },
   {
       proNombre: 'Hersfeld-Rotenburg',
       deptoId: 20
   },
   {
       proNombre: 'Hochtaunuskreis',
       deptoId: 20
   },
   {
       proNombre: 'Kassel',
       deptoId: 20
   },
   {
       proNombre: 'Lahn-Dill-Kreis',
       deptoId: 20
   },
   {
       proNombre: 'Limburg-Weilburg',
       deptoId: 20
   },
   {
       proNombre: 'Main-Kinzig-Kreis',
       deptoId: 20
   },
   {
       proNombre: 'Main-Taunus-Kreis',
       deptoId: 20
   },
   {
       proNombre: 'Marburg',
       deptoId: 20
   },
   {
       proNombre: 'Marburg-Biedenkopf',
       deptoId: 20
   },
   {
       proNombre: 'Odenwaldkreis',
       deptoId: 20
   },
   {
       proNombre: 'Offenbach',
       deptoId: 20
   },
   {
       proNombre: 'Offenbach am Main',
       deptoId: 20
   },
   {
       proNombre: 'Rheingau-Taunus-Kreis',
       deptoId: 20
   },
   {
       proNombre: 'Rüsselsheim',
       deptoId: 20
   },
   {
       proNombre: 'Schwalm-Eder-Kreis',
       deptoId: 20
   },
   {
       proNombre: 'Vogelsbergkreis',
       deptoId: 20
   },
   {
       proNombre: 'Waldeck-Frankenberg',
       deptoId: 20
   },
   {
       proNombre: 'Werra-Meißner-Kreis',
       deptoId: 20
   },
   {
       proNombre: 'Wetteraukreis',
       deptoId: 20
   },
   {
       proNombre: 'Wetzlar',
       deptoId: 20
   },
   {
       proNombre: 'Bad Doberan',
       deptoId: 21
   },
   {
       proNombre: 'Demmin',
       deptoId: 21
   },
   {
       proNombre: 'Greifswald',
       deptoId: 21
   },
   {
       proNombre: 'Güstrow',
       deptoId: 21
   },
   {
       proNombre: 'Ludwigslust',
       deptoId: 21
   },
   {
       proNombre: 'Mecklemburgo-Strelitz',
       deptoId: 21
   },
   {
       proNombre: 'Mecklemburgo Noroccidental',
       deptoId: 21
   },
   {
       proNombre: 'Müritz',
       deptoId: 21
   },
   {
       proNombre: 'Pomerania Anterior del Norte',
       deptoId: 21
   },
   {
       proNombre: 'Pomerania Anterior Oriental',
       deptoId: 21
   },
   {
       proNombre: 'Parchim',
       deptoId: 21
   },
   {
       proNombre: 'Rostock',
       deptoId: 21
   },
   {
       proNombre: 'Rügen',
       deptoId: 21
   },
   {
       proNombre: 'Schwerin',
       deptoId: 21
   },
   {
       proNombre: 'Stralsund',
       deptoId: 21
   },
   {
       proNombre: 'Uecker-Randow',
       deptoId: 21
   },
   {
       proNombre: 'Wismar',
       deptoId: 21
   },
   {
       proNombre: 'Ammerland',
       deptoId: 22
   },
   {
       proNombre: 'Aurich',
       deptoId: 22
   },
   {
       proNombre: 'Braunschweig',
       deptoId: 22
   },
   {
       proNombre: 'Delmenhorst',
       deptoId: 22
   },
   {
       proNombre: 'Emden',
       deptoId: 22
   },
   {
       proNombre: 'Grafschaft Bentheim',
       deptoId: 22
   },
   {
       proNombre: 'Celle',
       deptoId: 22
   },
   {
       proNombre: 'Cloppenburg',
       deptoId: 22
   },
   {
       proNombre: 'Cuxhaven',
       deptoId: 22
   },
   {
       proNombre: 'Diepholz',
       deptoId: 22
   },
   {
       proNombre: 'Emsland',
       deptoId: 22
   },
   {
       proNombre: 'Driesland',
       deptoId: 22
   },
   {
       proNombre: 'Gifhorn',
       deptoId: 22
   },
   {
       proNombre: 'Goslar',
       deptoId: 22
   },
   {
       proNombre: 'Göttingen',
       deptoId: 22
   },
   {
       proNombre: 'Hameln-Pyrmont',
       deptoId: 22
   },
   {
       proNombre: 'Región Hannover',
       deptoId: 22
   },
   {
       proNombre: 'Harburg',
       deptoId: 22
   },
   {
       proNombre: 'Helmstedt',
       deptoId: 22
   },
   {
       proNombre: 'Hildesheim',
       deptoId: 22
   },
   {
       proNombre: 'Holzminden',
       deptoId: 22
   },
   {
       proNombre: 'Leer',
       deptoId: 22
   },
   {
       proNombre: 'Lüchow-Dannenberg',
       deptoId: 22
   },
   {
       proNombre: 'Lüneburg',
       deptoId: 22
   },
   {
       proNombre: 'Nienburg/Weser',
       deptoId: 22
   },
   {
       proNombre: 'Northeim',
       deptoId: 22
   },
   {
       proNombre: 'Oldenburg',
       deptoId: 22
   },
   {
       proNombre: 'Osnabrück',
       deptoId: 22
   },
   {
       proNombre: 'Osterholz',
       deptoId: 22
   },
   {
       proNombre: 'Osterode am Harz',
       deptoId: 22
   },
   {
       proNombre: 'Peine',
       deptoId: 22
   },
   {
       proNombre: 'Rotenburg',
       deptoId: 22
   },
   {
       proNombre: 'Salzgitter',
       deptoId: 22
   },
   {
       proNombre: 'Distrito de Schaumburg',
       deptoId: 22
   },
   {
       proNombre: 'Soltau-Fallingbostel',
       deptoId: 22
   },
   {
       proNombre: 'Stade',
       deptoId: 22
   },
   {
       proNombre: 'Uelzen',
       deptoId: 22
   },
   {
       proNombre: 'Vechta',
       deptoId: 22
   },
   {
       proNombre: 'Verden',
       deptoId: 22
   },
   {
       proNombre: 'Wesermarsch',
       deptoId: 22
   },
   {
       proNombre: 'Wilhelmshaven',
       deptoId: 22
   },
   {
       proNombre: 'Wittmund',
       deptoId: 22
   },
   {
       proNombre: 'Wolfenbüttel',
       deptoId: 22
   },
   {
       proNombre: 'Wolfsburg',
       deptoId: 22
   },
   {
       proNombre: 'Bergisches Land',
       deptoId: 23
   },
   {
       proNombre: 'Eifel',
       deptoId: 23
   },
   {
       proNombre: 'Hochstift Paderborn',
       deptoId: 23
   },
   {
       proNombre: 'Lipper Land',
       deptoId: 23
   },
   {
       proNombre: 'Münsterland',
       deptoId: 23
   },
   {
       proNombre: 'Minden-Ravensberg',
       deptoId: 23
   },
   {
       proNombre: 'Niederrhein',
       deptoId: 23
   },
   {
       proNombre: 'Región de Aquisgrán',
       deptoId: 23
   },
   {
       proNombre: 'Región de Colonia/Bonn',
       deptoId: 23
   },
   {
       proNombre: 'Rheinschiene',
       deptoId: 23
   },
   {
       proNombre: 'Sauerland',
       deptoId: 23
   },
   {
       proNombre: 'Siegerland',
       deptoId: 23
   },
   {
       proNombre: 'Ahrweiler',
       deptoId: 24
   },
   {
       proNombre: 'Altenkirchen ',
       deptoId: 24
   },
   {
       proNombre: 'Alzey-Worms',
       deptoId: 24
   },
   {
       proNombre: 'Bad Dürkheim',
       deptoId: 24
   },
   {
       proNombre: 'Bad Kreuznach',
       deptoId: 24
   },
   {
       proNombre: 'Bernkastel-Wittlich',
       deptoId: 24
   },
   {
       proNombre: 'Birkenfeld',
       deptoId: 24
   },
   {
       proNombre: 'Bitburg-Prüm ',
       deptoId: 24
   },
   {
       proNombre: 'Coblenza',
       deptoId: 24
   },
   {
       proNombre: 'Cochem-Zell ',
       deptoId: 24
   },
   {
       proNombre: 'Donnersbergkreis ',
       deptoId: 24
   },
   {
       proNombre: 'Espira',
       deptoId: 24
   },
   {
       proNombre: 'Frankenthal ',
       deptoId: 24
   },
   {
       proNombre: 'Germersheim',
       deptoId: 24
   },

   {
       proNombre: 'Kaiserslautern',
       deptoId: 24
   },
   {
       proNombre: 'Kusel',
       deptoId: 24
   },
   {
       proNombre: 'Landau in der Pfalz',
       deptoId: 24
   },
   {
       proNombre: 'Ludwigshafen am Rhein',
       deptoId: 24
   },
   {
       proNombre: 'Maguncia',
       deptoId: 24
   },
   {
       proNombre: 'Maguncia-Bingen',
       deptoId: 24
   },
   {
       proNombre: 'Mayen-Coblenza ',
       deptoId: 24
   },
   {
       proNombre: 'Neustadt an der Weinstraße',
       deptoId: 24
   },
   {
       proNombre: 'Neuwied',
       deptoId: 24
   },
   {
       proNombre: 'Pirmasens',
       deptoId: 24
   },

   {
       proNombre: 'Rhein-Hunsrück-Kreis',
       deptoId: 24
   },
   {
       proNombre: 'Rhein-Lahn-Kreis ',
       deptoId: 24
   },
   {
       proNombre: 'Distrito de Rhein-Pfalz-Kreis',
       deptoId: 24
   },
   {
       proNombre: 'Südliche Weinstraße',
       deptoId: 24
   },
   {
       proNombre: 'Südwestpfalz',
       deptoId: 24
   },
   {
       proNombre: 'Tréveris',
       deptoId: 24
   },
   {
       proNombre: 'Trier-Saarburg',
       deptoId: 24
   },
   {
       proNombre: 'Vulkaneifel',
       deptoId: 24
   },
   {
       proNombre: 'Westerwaldkreis',
       deptoId: 24
   },
   {
       proNombre: 'Worms',
       deptoId: 24
   },
   {
       proNombre: 'Zweibrücken',
       deptoId: 24
   },
   {
       proNombre: 'Merzig-Wadern',
       deptoId: 25
   },
   {
       proNombre: 'Neunkirchen',
       deptoId: 25
   },
   {
       proNombre: 'Saarbrücken',
       deptoId: 25
   },
   {
       proNombre: 'Saarlouis',
       deptoId: 25
   },
   {
       proNombre: 'Saarpfalz',
       deptoId: 25
   },
   {
       proNombre: 'Sankt Wendel',
       deptoId: 25
   },
   {
       proNombre: 'Bautzen',
       deptoId: 26
   },
   {
       proNombre: 'Chemnitz ',
       deptoId: 26
   },
   {
       proNombre: 'Dresde ',
       deptoId: 26
   },
   {
       proNombre: 'Erzgebirgskreis',
       deptoId: 26
   },
   {
       proNombre: 'Görlitz',
       deptoId: 26
   },
   {
       proNombre: 'Leipzig',
       deptoId: 26
   },
   {
       proNombre: 'Meißen',
       deptoId: 26
   },
   {
       proNombre: 'Mittelsachsen',
       deptoId: 26
   },
   {
       proNombre: 'Nordsachsen',
       deptoId: 26
   },
   {
       proNombre: 'Sächsische Schweiz-Osterzgebirge',
       deptoId: 26
   },
   {
       proNombre: 'Vogtlandkreis',
       deptoId: 26
   },
   {
       proNombre: 'Zwickau',
       deptoId: 26
   },
   {
       proNombre: 'Altmarkkreis Salzwedel',
       deptoId: 27
   },
   {
       proNombre: 'Anhalt-Bitterfeld',
       deptoId: 27
   },
   {
       proNombre: 'Burgenlandkreis',
       deptoId: 27
   },
   {
       proNombre: 'Börde',
       deptoId: 27
   },
   {
       proNombre: 'Dessau-Roßlau',
       deptoId: 27
   },
   {
       proNombre: 'Halle (Saale)',
       deptoId: 27
   },
   {
       proNombre: 'Harz',
       deptoId: 27
   },
   {
       proNombre: 'Jerichower Land',
       deptoId: 27
   },
   {
       proNombre: 'Magdeburgo',
       deptoId: 27
   },
   {
       proNombre: 'Mansfeld-Südharz',
       deptoId: 27
   },
   {
       proNombre: 'Saalekreis',
       deptoId: 27
   },
   {
       proNombre: 'Salzlandkreis',
       deptoId: 27
   },
   {
       proNombre: 'Stendal',
       deptoId: 27
   },
   {
       proNombre: 'Wittenberg',
       deptoId: 27
   },
   {
       proNombre: 'Dithmarschen',
       deptoId: 28
   },
   {
       proNombre: 'Flensburg',
       deptoId: 28
   },
   {
       proNombre: 'Herzogtum Lauenburg',
       deptoId: 28
   },
   {
       proNombre: 'Kiel',
       deptoId: 28
   },
   {
       proNombre: 'Lübeck',
       deptoId: 28
   },
   {
       proNombre: 'Neumünster',
       deptoId: 28
   },
   {
       proNombre: 'Nordfriesland',
       deptoId: 28
   },
   {
       proNombre: 'Ostholstein',
       deptoId: 28
   },
   {
       proNombre: 'Pinneberg',
       deptoId: 28
   },
   {
       proNombre: 'Plön',
       deptoId: 28
   },
   {
       proNombre: 'Rendsburg-Eckernförde',
       deptoId: 28
   },
   {
       proNombre: 'Schleswig-Flensburg',
       deptoId: 28
   },
   {
       proNombre: 'Segeberg',
       deptoId: 28
   },
   {
       proNombre: 'Steinburg',
       deptoId: 28
   },
   {
       proNombre: 'Stormarn',
       deptoId: 28
   },
   {
       proNombre: 'Altenburger Land',
       deptoId: 29
   },
   {
       proNombre: 'Eichsfeld',
       deptoId: 29
   },
   {
       proNombre: 'Eisenach',
       deptoId: 29
   },
   {
       proNombre: 'Erfurt',
       deptoId: 29
   },
   {
       proNombre: 'Gera',
       deptoId: 29
   },
   {
       proNombre: 'Gotha',
       deptoId: 29
   },
   {
       proNombre: 'Greiz',
       deptoId: 29
   },
   {
       proNombre: 'Hildburghausen',
       deptoId: 29
   },
   {
       proNombre: 'Ilm-Kreis',
       deptoId: 29
   },
   {
       proNombre: 'Kyffhäuserkreis',
       deptoId: 29
   },
   {
       proNombre: 'Nordhausen',
       deptoId: 29
   },
   {
       proNombre: 'Saale-Holzland-Kreis',
       deptoId: 29
   },
   {
       proNombre: 'Saale-Orla-Kreis',
       deptoId: 29
   },
   {
       proNombre: 'Saalfeld-Rudolstadt',
       deptoId: 29
   },
   {
       proNombre: 'Schmalkalden-Meiningen',
       deptoId: 29
   },
   {
       proNombre: 'Sömmerda',
       deptoId: 29
   },
   {
       proNombre: 'Sonneberg',
       deptoId: 29
   },
   {
       proNombre: 'Suhl',
       deptoId: 29
   },
   {
       proNombre: 'Unstrut-Hainich-Kreis',
       deptoId: 29
   },
   {
       proNombre: 'Wartburgkreis',
       deptoId: 29
   },
   {
       proNombre: 'Weimar',
       deptoId: 29
   },
   {
       proNombre: 'Weimarer Land',
       deptoId: 29
   },
   {
       proNombre: 'Canillo',
       deptoId: 30
   },
   {
       proNombre: 'El Forn',
       deptoId: 30
   },
   {
       proNombre: 'El Tarter',
       deptoId: 30
   },
   {
       proNombre: 'El Vilar',
       deptoId: 30
   },
   {
       proNombre: 'Els Plans',
       deptoId: 30
   },
   {
       proNombre: 'Incles',
       deptoId: 30
   },
   {
       proNombre: 'L Aldosa',
       deptoId: 30
   },
   {
       proNombre: 'Meritxell',
       deptoId: 30
   },
   {
       proNombre: 'Prats',
       deptoId: 30
   },
   {
       proNombre: 'Ransol',
       deptoId: 30
   },
   {
       proNombre: 'Soldeu',
       deptoId: 30
   },
   {
       proNombre: 'El Pas de la Casa',
       deptoId: 31
   },
   {
       proNombre: 'Les Bons, Vila',
       deptoId: 31
   },
   {
       proNombre: 'Ansalonga',
       deptoId: 32
   },
   {
       proNombre: 'Arans',
       deptoId: 32
   },
   {
       proNombre: 'El Serrat',
       deptoId: 32
   },
   {
       proNombre: 'La Cortinada',
       deptoId: 32
   },
   {
       proNombre: 'Llorts',
       deptoId: 32
   },
   {
       proNombre: 'Ordino',
       deptoId: 32
   },
   {
       proNombre: 'Segudet',
       deptoId: 32
   },
   {
       proNombre: 'Sornàs',
       deptoId: 32
   },
   {
       proNombre: 'l Aldosa',
       deptoId: 33
   },
   {
       proNombre: 'Anyós',
       deptoId: 33
   },
   {
       proNombre: ' Arinsal',
       deptoId: 33
   },
  {
      proNombre: 'El Pui',
      deptoId: 33
  },
   {
       proNombre: 'El Mas de Ribafeta',
       deptoId: 33
   },
   {
       proNombre: 'El Pujol del Piu',
       deptoId: 33
   },
   {
       proNombre: 'Erts',
       deptoId: 33
   },
   {
       proNombre: 'Escàs',
       deptoId: 33
   },
   {
       proNombre: 'Escàs',
       deptoId: 33
   },
   {
       proNombre: 'La Massana',
       deptoId: 33
   },
   {
       proNombre: 'Pal',
       deptoId: 33
   },

   {
       proNombre: 'Sispony',
       deptoId: 33
   },
   {
       proNombre: 'Xixerella',
       deptoId: 33
   },
   {
       proNombre: 'Andorra La Vella',
       deptoId: 34
   },
   {
       proNombre: 'La Margineda',
       deptoId: 34
   },
   {
       proNombre: 'Santa Coloma',
       deptoId: 34
   },
   {
       proNombre: 'Aixirivall',
       deptoId: 35
   },
   {
       proNombre: 'Aixovall',
       deptoId: 35
   },
   {
       proNombre: 'Auvinyà',
       deptoId: 35
   },
   {
       proNombre: 'Bixessarri',
       deptoId: 35
   },
   {
       proNombre: 'Certers',
       deptoId: 35
   },
   {
       proNombre: 'Fontaneda',
       deptoId: 35
   },
   {
       proNombre: 'Juberri',
       deptoId: 35
   },
   {
       proNombre: 'Llumeneres',
       deptoId: 35
   },
   {
       proNombre: 'Nagol',
       deptoId: 35
   },
   {
       proNombre: 'Escaldes',
       deptoId: 36
   },
   {
       proNombre: 'Ambriz',
       deptoId: 37
   },
   {
       proNombre: 'Bula Atumba',
       deptoId: 37
   },
   {
       proNombre: 'Dande',
       deptoId: 37
   },
   {
       proNombre: 'Dembos',
       deptoId: 37
   },
   {
       proNombre: 'Icolo y Bengo',
       deptoId: 37
   },
   {
       proNombre: 'Nambuangongo',
       deptoId: 37
   },
   {
       proNombre: 'Pango-Aluquém',
       deptoId: 37
   },
   {
       proNombre: 'Quisama',
       deptoId: 37
   },
   {
       proNombre: 'Bahía Farta',
       deptoId: 38
   },
  {
      proNombre: 'Balombo',
      deptoId: 38
  },
  {
      proNombre: 'Bocoio',
      deptoId: 38
  },
  {
      proNombre: 'Chongorói',
      deptoId: 38
  },
  {
      proNombre: 'Cubal',
      deptoId: 38
  },
  {
      proNombre: 'Caimbambo',
      deptoId: 38
  },
  {
      proNombre: 'Ganda',
      deptoId: 38
  },
  {
      proNombre: 'Lobito',
      deptoId: 38
  },
  {
      proNombre: 'Benguela',
      deptoId: 38
  },
  {
      proNombre: 'Andulo',
      deptoId: 39
  },
  {
      proNombre: 'Nharea',
      deptoId: 39
  },
  {
      proNombre: 'Cunhinga',
      deptoId: 39
  },
  {
      proNombre: 'Chinguar',
      deptoId: 39
  },
  {
      proNombre: 'Chitembo',
      deptoId: 39
  },
  {
      proNombre: 'Catabola',
      deptoId: 39
  },
  {
      proNombre: 'Camacupa',
      deptoId: 39
  },
  {
      proNombre: 'Cuemba',
      deptoId: 39
  },
  {
      proNombre: 'Kuito',
      deptoId: 39
  },
  {
      proNombre: 'Belice',
      deptoId: 40
  },
  {
      proNombre: 'Buco Zau',
      deptoId: 40
  },
  {
      proNombre: 'Cabinda',
      deptoId: 40
  },
  {
      proNombre: 'Cacongo (Villa Guillermo Capelo)',
      deptoId: 40
  },
  {
      proNombre: 'Landana',
      deptoId: 40
  },
  {
      proNombre: 'Calai',
      deptoId: 41
  },
  {
      proNombre: 'Cuangar',
      deptoId: 41
  },
  {
      proNombre: 'Cuchi',
      deptoId: 41
  },
  {
      proNombre: 'Cuito Cuanavale',
      deptoId: 41
  },
  {
      proNombre: 'Dirico',
      deptoId: 41
  },
  {
      proNombre: 'Mavinga',
      deptoId: 41
  },
  {
      proNombre: 'Menongue',
      deptoId: 41
  },
  {
      proNombre: 'Nancova, (Vilanova da Armada)',
      deptoId: 41
  },
  {
      proNombre: 'Rivungo,(Santa Cruz do Cuando)',
      deptoId: 41
  },
  {
      proNombre: 'Ambaca',
      deptoId: 42
  },
  {
      proNombre: 'Banga',
      deptoId: 42
  },
  {
      proNombre: 'Bolongongo',
      deptoId: 42
  },
  {
      proNombre: 'Cambambe',
      deptoId: 42
  },
  {
      proNombre: 'Cazengo',
      deptoId: 42
  },
  {
      proNombre: 'Golungo Alto',
      deptoId: 42
  },
  {
      proNombre: 'Gonguembo, (Quilombo dos Dembos)',
      deptoId: 42
  },
  {
      proNombre: 'Lucala',
      deptoId: 42
  },
  {
      proNombre: 'Quiculungo',
      deptoId: 42
  },
  {
      proNombre: 'Samba Caju',
      deptoId: 42
  },
  {
      proNombre: 'Amboim',
      deptoId: 43
  },
  {
      proNombre: 'Cassongue',
      deptoId: 43
  },
  {
      proNombre: 'Conda',
      deptoId: 43
  },
  {
      proNombre: 'Ebo',
      deptoId: 43
  },
  {
      proNombre: 'Libolo',
      deptoId: 43
  },
  {
      proNombre: 'Mussende',
      deptoId: 43
  },
  {
      proNombre: 'Porto Amboim',
      deptoId: 43
  },
  {
      proNombre: 'Quilenda',
      deptoId: 43
  },
  {
      proNombre: 'Quibala',
      deptoId: 43
  },
  {
      proNombre: 'Seles',
      deptoId: 43
  },
  {
      proNombre: 'Sumbe',
      deptoId: 43
  },
  {
      proNombre: 'Waku Kungo',
      deptoId: 43
  },
  {
      proNombre: 'Kahama',
      deptoId: 44
  },
  {
      proNombre: 'Kuroca',
      deptoId: 44
  },
  {
      proNombre: 'Kuvelay',
      deptoId: 44
  },
  {
      proNombre: 'Kwanhama',
      deptoId: 44
  },
  {
      proNombre: 'Namacunde',
      deptoId: 44
  },
  {
      proNombre: 'Ombadja',
      deptoId: 44
  },
  {
      proNombre: 'Huambo',
      deptoId: 45
  },
  {
      proNombre: 'Bailundo',
      deptoId: 45
  },
  {
      proNombre: 'Caála',
      deptoId: 45
  },
  {
      proNombre: 'Ecunha',
      deptoId: 45
  },
  {
      proNombre: 'Londuimbale',
      deptoId: 45
  },
  {
      proNombre: 'Katchiungo',
      deptoId: 45
  },
  {
      proNombre: 'Tchinjenje',
      deptoId: 45
  },
  {
      proNombre: 'Mungo',
      deptoId: 45
  },
  {
      proNombre: 'Ucuma',
      deptoId: 45
  },
  {
      proNombre: 'Tchicala-Tcholohanga',
      deptoId: 45
  },
  {
      proNombre: 'Longonjo',
      deptoId: 45
  },
  {
      proNombre: 'Caconda',
      deptoId: 46
  },
  {
      proNombre: 'Cacula',
      deptoId: 46
  },
  {
      proNombre: 'Caluquembe',
      deptoId: 46
  },
  {
      proNombre: 'Chiange',
      deptoId: 46
  },
  {
      proNombre: 'Chibia',
      deptoId: 46
  },
  {
      proNombre: 'Chicomba',
      deptoId: 46
  },
  {
      proNombre: 'Chipindo',
      deptoId: 46
  },
  {
      proNombre: 'Cuvango',
      deptoId: 46
  },
  {
      proNombre: 'Humpata',
      deptoId: 46
  },
  {
      proNombre: 'Jamba',
      deptoId: 46
  },
  {
      proNombre: 'Lubango,',
      deptoId: 46
  },
  {
      proNombre: 'Matala',
      deptoId: 46
  },
  {
      proNombre: 'Quilengues',
      deptoId: 46
  },
  {
      proNombre: 'Quipungo',
      deptoId: 46
  },
  {
      proNombre: 'Cacuaco',
      deptoId: 47
  },
  {
      proNombre: 'Cazenga',
      deptoId: 47
  },
  {
      proNombre: 'Ingombota',
      deptoId: 47
  },
  {
      proNombre: 'Kilamba Kiaxi',
      deptoId: 47
  },
  {
      proNombre: 'Maianga',
      deptoId: 47
  },
  {
      proNombre: 'Rangel',
      deptoId: 47
  },
  {
      proNombre: 'Samba',
      deptoId: 47
  },
  {
      proNombre: 'Sambizanga',
      deptoId: 47
  },
  {
      proNombre: 'Viana',
      deptoId: 47
  },
  {
      proNombre: 'Cambulo',
      deptoId: 48
  },
  {
      proNombre: 'Capenda-Camulemba',
      deptoId: 48
  },
  {
      proNombre: 'Caungula',
      deptoId: 48
  },
  {
      proNombre: 'Chitato',
      deptoId: 48
  },
  {
      proNombre: 'Cuango',
      deptoId: 48
  },
  {
      proNombre: 'Cuílo',
      deptoId: 48
  },
  {
      proNombre: 'Lubalo',
      deptoId: 48
  },
  {
      proNombre: 'Lucapa (Verissimo Sarmento)',
      deptoId: 48
  },
  {
      proNombre: 'Xá-Muteba',
      deptoId: 48
  },
  {
      proNombre: 'Cacolo',
      deptoId: 49
  },
  {
      proNombre: 'Dala',
      deptoId: 49
  },
  {
      proNombre: 'Muconda',
      deptoId: 49
  },
  {
      proNombre: 'Saurimo',
      deptoId: 49
  },
  {
      proNombre: 'Cacuso',
      deptoId: 50
  },
  {
      proNombre: 'Calandula',
      deptoId: 50
  },
  {
      proNombre: 'Cambundi-Catembo',
      deptoId: 50
  },
  {
      proNombre: 'Cangandala',
      deptoId: 50
  },
  {
      proNombre: 'Caombo',
      deptoId: 50
  },
  {
      proNombre: 'Cuaba Nzogo',
      deptoId: 50
  },
  {
      proNombre: 'Cunda-Dia-Baze',
      deptoId: 50
  },
  {
      proNombre: 'Luquembo',
      deptoId: 50
  },
  {
      proNombre: 'Malanje',
      deptoId: 50
  },
  {
      proNombre: 'Marimba',
      deptoId: 50
  },
  {
      proNombre: 'Massango',
      deptoId: 50
  },
  {
      proNombre: 'Mucari',
      deptoId: 50
  },
  {
      proNombre: 'Quela',
      deptoId: 50
  },
  {
      proNombre: 'Quirima',
      deptoId: 50
  },
  {
      proNombre: 'Moxico',
      deptoId: 51
  },
  {
      proNombre: 'Camanongue',
      deptoId: 51
  },
  {
      proNombre: 'Léua',
      deptoId: 51
  },
  {
      proNombre: 'Lumeje',
      deptoId: 51
  },
  {
      proNombre: 'Luau, (Teixeira de Sousa)',
      deptoId: 51
  },
  {
      proNombre: 'Luacano',
      deptoId: 51
  },
  {
      proNombre: 'Alto Zambeze',
      deptoId: 51
  },
  {
      proNombre: 'Luchazes',
      deptoId: 51
  },
  {
      proNombre: 'Bundas',
      deptoId: 51
  },
  {
      proNombre: 'Bibala, (Villa Arriaga)',
      deptoId: 52
  },
  {
      proNombre: 'Camacuyo',
      deptoId: 52
  },
  {
      proNombre: 'Namibe',
      deptoId: 52
  },
  {
      proNombre: 'Tombua',
      deptoId: 52
  },
  {
      proNombre: 'Virey',
      deptoId: 52
  },
  {
      proNombre: 'Ambuíla',
      deptoId: 53
  },
  {
      proNombre: 'Bembe',
      deptoId: 53
  },
  {
      proNombre: 'Buengas',
      deptoId: 53
  },
  {
      proNombre: 'Bungo',
      deptoId: 53
  },
  {
      proNombre: 'Cangola',
      deptoId: 53
  },
  {
      proNombre: 'Damba',
      deptoId: 53
  },
  {
      proNombre: 'Maquela de Zombo',
      deptoId: 53
  },
  {
      proNombre: 'Milunga',
      deptoId: 53
  },
  {
      proNombre: 'Mucaba',
      deptoId: 53
  },
  {
      proNombre: 'Negage',
      deptoId: 53
  },
  {
      proNombre: 'Puri',
      deptoId: 53
  },
  {
      proNombre: 'Quimbele',
      deptoId: 53
  },
  {
      proNombre: 'Quitexe',
      deptoId: 53
  },
  {
      proNombre: 'Sanza Pombo',
      deptoId: 53
  },
  {
      proNombre: 'Songo',
      deptoId: 53
  },
  {
      proNombre: 'Uíge',
      deptoId: 53
  },
  {
      proNombre: "M' Banza Kongo",
      deptoId: 54
  },
  {
      proNombre: 'Soyo',
      deptoId: 54
  },
  {
      proNombre: 'Tomboco',
      deptoId: 54
  },
  {
      proNombre: "N'Zeto",
      deptoId: 54
  },
  {
      proNombre: 'Noqui',
      deptoId: 54
  },
  {
      proNombre: 'Cuimba',
      deptoId: 54
  },
  {
      proNombre: 'Barnes Hill',
      deptoId: 55
  },
  {
      proNombre: 'Carlisle',
      deptoId: 55
  },
  {
      proNombre: 'Fitches Creek',
      deptoId: 55
  },
  {
      proNombre: 'Gunthorpes',
      deptoId: 55
  },
  {
      proNombre: 'New Winthorpes',
      deptoId: 55
  },
  {
      proNombre: 'Osbourn',
      deptoId: 55
  },
  {
      proNombre: 'Paynters',
      deptoId: 55
  },
  {
      proNombre: 'Piggotts',
      deptoId: 55
  },
  {
      proNombre: 'Sea View Farm',
      deptoId: 55
  },
  {
      proNombre: 'Aberdeen',
      deptoId: 56
  },
  {
      proNombre: 'Belmont',
      deptoId: 56
  },
  {
      proNombre: 'Bendals',
      deptoId: 56
  },
  {
      proNombre: 'Boon House',
      deptoId: 56
  },
  {
      proNombre: 'Branns Hamlet',
      deptoId: 56
  },
  {
      proNombre: 'Buckleys',
      deptoId: 56
  },
  {
      proNombre: 'Cedar Grove',
      deptoId: 56
  },
  {
      proNombre: 'Cedar Valley Mill',
      deptoId: 56
  },
  {
      proNombre: 'Clare Hall',
      deptoId: 56
  },
  {
      proNombre: 'Creekside',
      deptoId: 56
  },
  {
      proNombre: 'Crosbies',
      deptoId: 56
  },
  {
      proNombre: 'Emanuel',
      deptoId: 56
  },
  {
      proNombre: 'Five Islands Village',
      deptoId: 56
  },
  {
      proNombre: 'Gambles',
      deptoId: 56
  },
  {
      proNombre: 'Golden Grove',
      deptoId: 56
  },
  {
      proNombre: 'Grays Hill',
      deptoId: 56
  },
  {
      proNombre: 'Green Bay',
      deptoId: 56
  },
  {
      proNombre: 'Hamiltons',
      deptoId: 56
  },
  {
      proNombre: 'Herberts',
      deptoId: 56
  },
  {
      proNombre: 'Potters Village',
      deptoId: 56
  },
  {
      proNombre: 'Renfrew',
      deptoId: 56
  },
  {
      proNombre: 'Saint Johnston Village',
      deptoId: 56
  },
  {
      proNombre: 'Saint John’s',
      deptoId: 56
  },
  {
      proNombre: 'Saint Lukes',
      deptoId: 56
  },
  {
      proNombre: 'Sutherlands Development',
      deptoId: 56
  },
  {
      proNombre: 'Tomlinson',
      deptoId: 56
  },
  {
      proNombre: 'Weatherills',
      deptoId: 56
  },
  {
      proNombre: 'Woods',
      deptoId: 56
  },
  {
      proNombre: 'Bishops',
      deptoId: 57
  },
  {
      proNombre: 'Blubber Valley',
      deptoId: 57
  },
  {
      proNombre: 'Bolands',
      deptoId: 57
  },
  {
      proNombre: 'Cades Bay',
      deptoId: 57
  },
  {
      proNombre: 'Cedar Hall',
      deptoId: 57
  },
  {
      proNombre: 'Claremont',
      deptoId: 57
  },
  {
      proNombre: 'Crab Hill',
      deptoId: 57
  },
  {
      proNombre: 'Ebenezer',
      deptoId: 57
  },
  {
      proNombre: 'Guadeloupe',
      deptoId: 57
  },
  {
      proNombre: 'Harveys',
      deptoId: 57
  },
  {
      proNombre: 'John Hughes',
      deptoId: 57
  },
  {
      proNombre: 'Johnsons Point',
      deptoId: 57
  },
  {
      proNombre: 'New Division',
      deptoId: 57
  },
  {
      proNombre: 'Old Road',
      deptoId: 57
  },
  {
      proNombre: 'Orange Valley Mill',
      deptoId: 57
  },
  {
      proNombre: 'Sawcolts',
      deptoId: 57
  },
  {
      proNombre: 'Seaforths',
      deptoId: 57
  },
  {
      proNombre: 'Urlings',
      deptoId: 57
  },
  {
      proNombre: 'Yorks',
      deptoId: 57
  },
  {
      proNombre: 'Bats Cave',
      deptoId: 58
  },
  {
      proNombre: 'Bethesda',
      deptoId: 58
  },
  {
      proNombre: 'Blakes',
      deptoId: 58
  },
  {
      proNombre: 'Burkes',
      deptoId: 58
  },
  {
      proNombre: 'Christian Hill',
      deptoId: 58
  },
  {
      proNombre: 'Clarence House',
      deptoId: 58
  },
  {
      proNombre: 'Cobbs Cross',
      deptoId: 58
  },
  {
      proNombre: 'Delaps',
      deptoId: 58
  },
  {
      proNombre: 'Doigs',
      deptoId: 58
  },
  {
      proNombre: 'English Harbour Town',
      deptoId: 58
  },
  {
      proNombre: 'Falmouth',
      deptoId: 58
  },
  {
      proNombre: 'Liberta',
      deptoId: 58
  },
  {
      proNombre: 'Matthews',
      deptoId: 58
  },
  {
      proNombre: 'Morris Loobys',
      deptoId: 58
  },
  {
      proNombre: 'Mount William',
      deptoId: 58
  },
  {
      proNombre: 'Pattersons',
      deptoId: 58
  },
  {
      proNombre: 'Pattersons Dwelling House',
      deptoId: 58
  },
  {
      proNombre: 'Swetes',
      deptoId: 58
  },
  {
      proNombre: 'Table Hill Gordon',
      deptoId: 58
  },
  {
      proNombre: 'Willis Freemans',
      deptoId: 58
  },
  {
      proNombre: 'Big Duers',
      deptoId: 59
  },
  {
      proNombre: 'Cacao Hall',
      deptoId: 59
  },
  {
      proNombre: 'Freemans',
      deptoId: 59
  },
  {
      proNombre: 'Gilberts',
      deptoId: 59
  },
  {
      proNombre: 'Mercers Creek',
      deptoId: 59
  },
  {
      proNombre: 'Parrys',
      deptoId: 59
  },
  {
      proNombre: 'Vernons',
      deptoId: 59
  },
  {
      proNombre: 'Collins',
      deptoId: 60
  },
  {
      proNombre: 'Comfort Hall',
      deptoId: 60
  },
  {
      proNombre: 'Ffryes',
      deptoId: 60
  },
  {
      proNombre: 'Freetown',
      deptoId: 60
  },
  {
      proNombre: 'Gaynors',
      deptoId: 60
  },
  {
      proNombre: 'Glanvilles',
      deptoId: 60
  },
  {
      proNombre: 'Grants',
      deptoId: 60
  },
  {
      proNombre: 'Grays',
      deptoId: 60
  },
  {
      proNombre: 'Jennings',
      deptoId: 60
  },
  {
      proNombre: 'Lavingtons',
      deptoId: 60
  },
  {
      proNombre: 'Long Lane',
      deptoId: 60
  },
  {
      proNombre: 'Lower Lyons',
      deptoId: 60
  },
  {
      proNombre: 'Lyons',
      deptoId: 60
  },
  {
      proNombre: 'Mayers',
      deptoId: 60
  },
  {
      proNombre: 'Mill Reef Club',
      deptoId: 60
  },
  {
      proNombre: 'Montpelier',
      deptoId: 60
  },
  {
      proNombre: 'Newfield',
      deptoId: 60
  },
  {
      proNombre: 'Saint Philips',
      deptoId: 60
  },
  {
      proNombre: 'Seatons',
      deptoId: 60
  },
  {
      proNombre: 'Sign',
      deptoId: 60
  },
  {
      proNombre: 'Spencers',
      deptoId: 60
  },
  {
      proNombre: 'The Brook',
      deptoId: 60
  },
  {
      proNombre: 'Watsons',
      deptoId: 60
  },
  {
      proNombre: 'Willikies',
      deptoId: 60
  },
  {
      proNombre: 'Willoughby',
      deptoId: 60
  },
  {
      proNombre: 'Abha',
      deptoId: 61
  },
  {
      proNombre: 'Al-Namas',
      deptoId: 61
  },
  {
      proNombre: 'Bareg',
      deptoId: 61
  },
  {
      proNombre: 'Bisha',
      deptoId: 61
  },
    {
      proNombre: 'Dhahran Aljanoub',
      deptoId: 61
    },
  {
      proNombre: 'Khamis Mushait',
      deptoId: 61
  },
  {
      proNombre: 'Tanomah',
      deptoId: 61
  },

  {
      proNombre: 'Tathlith',
      deptoId: 61
  },
  {
      proNombre: 'Sarat Ubaida',
      deptoId: 61
  },
  {
      proNombre: 'Al Bahah',
      deptoId: 62
  },
  {
      proNombre: 'Almandaq',
      deptoId: 62
  },
  {
      proNombre: 'Baljorashi',
      deptoId: 62
  },
  {
      proNombre: 'Rahwat Albar',
      deptoId: 62
  },
  {
      proNombre: 'Sabt Alalaya',
      deptoId: 62
  },
  {
      proNombre: 'Al-bukariyah',
      deptoId: 63
  },
  {
      proNombre: 'Albadaya',
      deptoId: 63
  },
  {
      proNombre: 'Ar Rass',
      deptoId: 63
  },
  {
      proNombre: 'Buraidá',
      deptoId: 63
  },
  {
      proNombre: 'Unaizah',
      deptoId: 63
  },
  {
      proNombre: 'Arar',
      deptoId: 64
  },
  {
      proNombre: 'Haíl',
      deptoId: 65
   },
   {
      proNombre: 'Abu Arish',
      deptoId: 66
   },
   {
      proNombre: 'Alddair',
      deptoId: 66
   },
   {
      proNombre: 'Alddarb',
      deptoId: 66
   },
   {
      proNombre: 'Ahad Almasarihah',
      deptoId: 66
   },
   {
      proNombre: 'Alaridah',
      deptoId: 66
   },
   {
      proNombre: 'Alaydabi',
      deptoId: 66
   },
   {
      proNombre: 'Alharth',
      deptoId: 66
   },
   {
      proNombre: 'Alraith',
      deptoId: 66
   },
   {
      proNombre: 'Baish',
      deptoId: 66
   },
   {
      proNombre: 'Damad',
      deptoId: 66
   },
   {
      proNombre: 'Farasan',
      deptoId: 66
   },
   {
      proNombre: 'Jazan',
      deptoId: 66
   },
   {
      proNombre: 'Sabya',
      deptoId: 66
   },
   {
      proNombre: 'Samtah',
      deptoId: 66
   },
   {
       proNombre: 'La Meca',
       deptoId: 67
   },
   {
       proNombre: 'Yeda',
       deptoId: 67
   },
   {
       proNombre: ' al Bahr de Yanbu',
       deptoId: 68
   },
   {
       proNombre: ' Badr Hunayn',
       deptoId: 68
   },
   {
       proNombre: 'Medina',
       deptoId: 68
   },
   {
       proNombre: 'Najrán',
       deptoId: 69
   },
   {
       proNombre: 'Abqaiq',
       deptoId: 70
   },
   {
       proNombre: 'Al-Hasa',
       deptoId: 70
   },
   {
       proNombre: 'Dammam',
       deptoId: 70
   },
   {
       proNombre: 'Dhahran',
       deptoId: 70
   },
   {
       proNombre: 'Hafar Al-Batin',
       deptoId: 70
   },
   {
       proNombre: 'Khafji',
       deptoId: 70
   },
   {
       proNombre: 'Khobar',
       deptoId: 70
   },
   {
       proNombre: 'Jubail',
       deptoId: 70
   },
   {
       proNombre: 'Ras Tanura',
       deptoId: 70
   },
   {
       proNombre: "Shayba in the Rub' al Khali",
       deptoId: 70
   },
   {
       proNombre: 'Qatif',
       deptoId: 70
   },
   {
       proNombre: 'Udhailiyah',
       deptoId: 70
   },
   {
       proNombre: 'Afif',
       deptoId: 71
   },
   {
       proNombre: "Al Majma'ah",
       deptoId: 71
   },
   {
       proNombre: 'As Sulayyil',
       deptoId: 71
   },
   {
       proNombre: 'Diriyah',
       deptoId: 71
   },
   {
       proNombre: 'Layla',
       deptoId: 71
   },
   {
       proNombre: 'Riad',
       deptoId: 71
   },
   {
       proNombre: 'Thadiq',
       deptoId: 71
   },
   {
       proNombre: 'Riad',
       deptoId: 71
   },
   {
       proNombre: 'Tabuk',
       deptoId: 72
   },
   {
       proNombre: 'Sakaka',
       deptoId: 73
   },
   {
       proNombre: 'Qurayyat',
       deptoId: 73
   },
   {
       proNombre: 'Dumat Al-Jandal',
       deptoId: 73
   },
   {
       proNombre: 'Adrar',
       deptoId: 74
   },
   {
       proNombre: 'Akabli',
       deptoId: 74
   },
   {
       proNombre: 'Aougrout',
       deptoId: 74
   },
   {
       proNombre: '	Aoulef',
       deptoId: 74
   },
   {
       proNombre: 'Bordj Badji Mokhtar',
       deptoId: 74
   },
   {
       proNombre: 'Bouda',
       deptoId: 74
   },
   {
       proNombre: 'Charouine',
       deptoId: 74
   },
   {
       proNombre: 'Deldoul',
       deptoId: 74
   },
   {
       proNombre: 'Fenoughil',
       deptoId: 74
   },
   {
       proNombre: 'In Zghmir',
       deptoId: 74
   },
   {
       proNombre: 'Ksar Kaddour',
       deptoId: 74
   },
   {
       proNombre: 'Metarfa',
       deptoId: 74
   },
   {
       proNombre: 'Ouled Ahmed Timmi',
       deptoId: 74
   },
   {
       proNombre: 'Ouled Aissa',
       deptoId: 74
   },
   {
       proNombre: 'Ouled Said',
       deptoId: 74
   },
   {
       proNombre: 'Reggane',
       deptoId: 74
   },
   {
       proNombre: 'Sali',
       deptoId: 74
   },
   {
       proNombre: 'Sebaa',
       deptoId: 74
   },
   {
       proNombre: 'Talmine',
       deptoId: 74
   },
   {
       proNombre: 'Tamentit',
       deptoId: 74
   },
   {
       proNombre: 'Tamest',
       deptoId: 74
   },
   {
       proNombre: 'Timiaouine',
       deptoId: 74
   },
   {
       proNombre: 'Timimoun',
       deptoId: 74
   },
   {
       proNombre: 'Timokten',
       deptoId: 74
   },
   {
       proNombre: 'Tinerkouk',
       deptoId: 74
   },
   {
       proNombre: 'Tit',
       deptoId: 74
   },
   {
       proNombre: 'Tsabit',
       deptoId: 74
   },
   {
       proNombre: 'Zaouiet Kounta',
       deptoId: 74
   },
   {
       proNombre: 'Ain Torki',
       deptoId: 75
   },
   {
       proNombre: 'Hammam Righa',
       deptoId: 75
   },
   {
       proNombre: 'Miliana',
       deptoId: 75
   },
    {
       proNombre: 'Ain el-Arba',
       deptoId: 76
    },
    {
        proNombre: 'Aïn Kihal',
        deptoId: 76
    },
    {
        proNombre: 'Aïn Témouchent',
        deptoId: 76
    },
    {
        proNombre: 'Beni Saf',
        deptoId: 76
    },
    {
        proNombre: 'El Amria',
        deptoId: 76
    },
    {
        proNombre: 'El Malah',
        deptoId: 76
    },
    {
        proNombre: 'Hammam Bouhadjar',
        deptoId: 76
    },
    {
        proNombre: 'Oulhaca el-Gherraba',
        deptoId: 76
    },
    {
        proNombre: 'Annaba',
        deptoId: 77
    },
    {
        proNombre: 'Ain El Berda',
        deptoId: 77
    },
    {
        proNombre: 'Berrahal',
        deptoId: 77
    },
    {
        proNombre: 'Chetaibi',
        deptoId: 77
    },
    {
        proNombre: 'El Buni',
        deptoId: 77
    },
    {
        proNombre: 'El Hadjar',
        deptoId: 77
    },
    {
        proNombre: 'No estan disponibles',
        deptoId: 78
    },
    {
        proNombre: 'Arris',
        deptoId: 79
    },
    {
        proNombre: 'Barika',
        deptoId: 79
    },
    {
        proNombre: 'Batna',
        deptoId: 79
    },
    {
        proNombre: 'Merouana',
        deptoId: 79
    },
    {
        proNombre: 'Timgad',
        deptoId: 79
    },
    {
        proNombre: 'Akbou',
        deptoId: 80
    },
    {
        proNombre: 'Amizour',
        deptoId: 80
    },
    {
        proNombre: 'Béjaïa',
        deptoId: 80
    },
    {
        proNombre: 'Kherrata',
        deptoId: 80
    },
    {
        proNombre: ' El-Kantara',
        deptoId: 81
    },
    {
        proNombre: 'Lichoua',
        deptoId: 81
    },
    {
        proNombre: 'Ourlala',
        deptoId: 81
    },
    {
        proNombre: 'Ouled Djellal',
        deptoId: 81
    },
    {
        proNombre: 'Sidi Khaled',
        deptoId: 81
    },
    {
        proNombre: 'Sidi Okba',
        deptoId: 81
    },
    {
        proNombre: 'Tolga',
        deptoId: 81
    },
    {
        proNombre: 'Beni Mered',
        deptoId: 82
    },
    {
        proNombre: 'Blida',
        deptoId: 82
    },
    {
        proNombre: ' Boufarik',
        deptoId: 82
    },
    {
        proNombre: 'Bougara',
        deptoId: 82
    },
    {
        proNombre: 'Chréa',
        deptoId: 82
    },
    {
        proNombre: 'El Affroun',
        deptoId: 82
    },
    {
        proNombre: 'Hammam Melouane',
        deptoId: 82
    },
    {
        proNombre: 'Larbaa',
        deptoId: 82
    },
    {
        proNombre: 'Mouzaia',
        deptoId: 82
    },
    {
        proNombre: 'Ouled Yaich',
        deptoId: 82
    },
    {
        proNombre: ' Bir-Kasd-Ali',
        deptoId: 83
    },
    {
        proNombre: 'Bordj Bou Arréridj',
        deptoId: 83
    },
    {
        proNombre: 'Glela',
        deptoId: 83
    },
    {
        proNombre: 'Bouira',
        deptoId: 84
    },
    {
        proNombre: 'Afir',
        deptoId: 85
    },
    {
        proNombre: 'Ammal',
        deptoId: 85
    },
    {
        proNombre: 'Baghlia',
        deptoId: 85
    },
    {
        proNombre: 'Beni Amrane',
        deptoId: 85
    },
    {
        proNombre: 'Ben Choud',
        deptoId: 85
    },
    {
        proNombre: 'Beni Amrane',
        deptoId: 85
    },
    {
        proNombre: 'Bordj Menaiel ',
        deptoId: 85
    },
    {
        proNombre: 'Boudouaou',
        deptoId: 85
    },
    {
        proNombre: 'Boudouaou El Bahri',
        deptoId: 85
    },
    {
        proNombre: 'Chabet El Ameur',
        deptoId: 85
    },
    {
        proNombre: 'Corso',
        deptoId: 85
    },
    {
        proNombre: 'Dellys',
        deptoId: 85
    },
    {
        proNombre: 'Djinet',
        deptoId: 85
    },
    {
        proNombre: 'Hammadi',
        deptoId: 85
    },
    {
        proNombre: 'Isser',
        deptoId: 85
    },
    {
        proNombre: 'Keddara',
        deptoId: 85
    },
    {
        proNombre: 'Kharrouba',
        deptoId: 85
    },
    {
        proNombre: 'Khemis El Khechna',
        deptoId: 85
    },
    {
        proNombre: 'Laghata',
        deptoId: 85
    },
    {
        proNombre: 'Larbatache',
        deptoId: 85
    },
    {
        proNombre: 'Naciria',
        deptoId: 85
    },
    {
        proNombre: 'Ouled Aissa',
        deptoId: 85
    },
    {
        proNombre: 'Ouled Haddadj',
        deptoId: 85
    },
    {
        proNombre: 'Ouled Moussa',
        deptoId: 85
    },
    {
        proNombre: 'Si Mustapha',
        deptoId: 85
    },
    {
        proNombre: 'Sidi Daoud',
        deptoId: 85
    },
    {
        proNombre: 'Souk El Had',
        deptoId: 85
    },
    {
        proNombre: 'Taourga',
        deptoId: 85
    },
    {
        proNombre: 'Thenia',
        deptoId: 85
    },
    {
        proNombre: 'Tidjelabine',
        deptoId: 85
    },
    {
        proNombre: 'Timezrit',
        deptoId: 85
    },
    {
        proNombre: 'Zemmouri',
        deptoId: 85
    },
    {
        proNombre: 'Breira',
        deptoId: 86
    },
    {
        proNombre: 'Chlef',
        deptoId: 86
    },
    {
        proNombre: 'Ténès',
        deptoId: 86
    },
    {
        proNombre: 'Ain Abid',
        deptoId: 87
    },
    {
        proNombre: 'Ain-Smara',
        deptoId: 87
    },
    {
        proNombre: 'Ben Badis',
        deptoId: 87
    },
    {
        proNombre: "Beni H'midene",
        deptoId: 87
    },
    {
        proNombre: 'Constantina',
        deptoId: 87
    },
    {
        proNombre: 'Didouche Mourad',
        deptoId: 87
    },
    {
        proNombre: 'El Khroub',
        deptoId: 87
    },
    {
        proNombre: 'Hamma Bouziane',
        deptoId: 87
    },
    {
        proNombre: 'Ibn Ziad',
        deptoId: 87
    },
    {
        proNombre: 'Messaoud Boudjerou',
        deptoId: 87
    },
    {
        proNombre: 'Ouled Rahmoune',
        deptoId: 87
    },
    {
        proNombre: 'Zighoud Youcef',
        deptoId: 87
    },
    {
        proNombre: 'Djelfa',
        deptoId: 88
    },
    {
        proNombre: 'Boussemghoun',
        deptoId: 89
    },
    {
        proNombre: 'El Bayadh',
        deptoId: 89
    },
    {
        proNombre: 'Rogassa',
        deptoId: 89
    },
    {
        proNombre: 'El Oued',
        deptoId: 90
    },
    {
        proNombre: 'Debila',
        deptoId: 90
    },
    {
        proNombre: 'Guémar',
        deptoId: 90
    },
    {
        proNombre: 'Robbah',
        deptoId: 90
    },
    {
        proNombre: 'El Tarf',
        deptoId: 91
    },
    {
        proNombre: 'Berriane',
        deptoId: 92
    },
    {
        proNombre: 'El-Goléa (El Menia)',
        deptoId: 92
    },
    {
        proNombre: 'Metlili',
        deptoId: 92
    },
    {
        proNombre: 'Guelma',
        deptoId: 93
    },
    {
        proNombre: 'daira de Djanet',
        deptoId: 94
    },
    {
        proNombre: 'daira de In Aménas',
        deptoId: 94
    },
    {
        proNombre: 'daira de Illizi',
        deptoId: 94
    },
    {
        proNombre: 'Cavallo',
        deptoId: 95
    },
    {
        proNombre: 'Chekfa',
        deptoId: 95
    },
    {
        proNombre: 'El Ouana',
        deptoId: 95
    },
    {
        proNombre: 'Texenna',
        deptoId: 95
    },
    {
        proNombre: 'Ziama Mansouriah',
        deptoId: 95
    },
    {
        proNombre: 'Bou Zabène',
        deptoId: 96
    },
    {
        proNombre: 'Djellal',
        deptoId: 96
    },
    {
        proNombre: 'Jenchela',
        deptoId: 96
    },
    {
        proNombre: 'Khirane',
        deptoId: 96
    },
    {
        proNombre: 'Azzaba',
        deptoId: 97
    },
    {
        proNombre: 'Collo',
        deptoId: 97
    },
    {
        proNombre: 'El Harouch',
        deptoId: 97
    },
    {
        proNombre: 'Skikda',
        deptoId: 97
    },
    {
        proNombre: 'Tamalous',
        deptoId: 97
    },
    {
        proNombre: 'Aflou',
        deptoId: 98
    },
    {
        proNombre: 'Ain Madhi',
        deptoId: 98
    },
    {
        proNombre: 'Kourdane',
        deptoId: 98
    },
    {
        proNombre: 'Laghouat',
        deptoId: 98
    },
    {
        proNombre: 'Makhareg',
        deptoId: 98
    },
    {
        proNombre: 'Aïn Boucif',
        deptoId: 99
    },
    {
        proNombre: 'Aziz',
        deptoId: 99
    },
    {
        proNombre: 'Béni Slimane',
        deptoId: 99
    },
    {
        proNombre: 'Berrouaghia',
        deptoId: 99
    },
    {
        proNombre: 'Chahbounia',
        deptoId: 99
    },
    {
        proNombre: 'Chellalat El Adhaoura',
        deptoId: 99
    },
    {
        proNombre: 'El Azizia',
        deptoId: 99
    },
    {
        proNombre: 'El Omaria',
        deptoId: 99
    },
    {
        proNombre: 'Guelb El Kébir',
        deptoId: 99
    },
    {
        proNombre: 'Ksar El Boukhari',
        deptoId: 99
    },
    {
        proNombre: 'Médéa',
        deptoId: 99
    },
    {
        proNombre: 'Ouamri',
        deptoId: 99
    },
    {
        proNombre: 'Ouled Antar',
        deptoId: 99
    },
    {
        proNombre: 'Ouzera',
        deptoId: 99
    },
    {
        proNombre: 'Seghouane',
        deptoId: 99
    },
    {
        proNombre: 'Si Mahdjoub',
        deptoId: 99
    },
    {
        proNombre: 'Sidi Naâmane',
        deptoId: 99
    },
    {
        proNombre: 'Souaghi',
        deptoId: 99
    },
    {
        proNombre: 'Tablat',
        deptoId: 99
    },
    {
        proNombre: 'Argelia',
        deptoId: 100
    },
    {
        proNombre: 'Grarem',
        deptoId: 100
    },
    {
        proNombre: 'Hamala',
        deptoId: 100
    },
    {
        proNombre: 'Mila',
        deptoId: 100
    },
    {
        proNombre: 'Rouached',
        deptoId: 100
    },
    {
        proNombre: 'Achacha',
        deptoId: 101
    },
    {
        proNombre: 'Aïn Nouïssy',
        deptoId: 101
    },
    {
        proNombre: 'Aïn Tédelès',
        deptoId: 101
    },
    {
        proNombre: 'Bouguirat',
        deptoId: 101
    },
    {
        proNombre: 'Hassi Mamèche',
        deptoId: 101
    },
    {
        proNombre: 'Kheïr Eddine',
        deptoId: 101
    },
    {
        proNombre: 'Masra',
        deptoId: 101
    },
    {
        proNombre: 'Sidi Ali',
        deptoId: 101
    },
    {
        proNombre: 'Sidi Lakhdar',
        deptoId: 101
    },
    {
        proNombre: 'municipalidad distrital: Mostaganem',
        deptoId: 101
    },
    {
        proNombre: ' Bou Saada',
        deptoId: 102
    },
    {
        proNombre: 'Maadid',
        deptoId: 102
    },
    {
        proNombre: "M'Sila",
        deptoId: 102
    },
    {
        proNombre: 'Muaskar',
        deptoId: 103
    },
    {
        proNombre: 'Ain Ben Khelil',
        deptoId: 104
    },
    {
        proNombre: 'Aïn Séfra',
        deptoId: 104
    },
    {
        proNombre: 'Assela',
        deptoId: 104
    },
    {
        proNombre: 'Djeniane Bourzeg',
        deptoId: 104
    },
    {
        proNombre: 'El Biod',
        deptoId: 104
    },
    {
        proNombre: 'Kasdir',
        deptoId: 104
    },
    {
        proNombre: 'Makman Ben Amer',
        deptoId: 104
    },
    {
        proNombre: 'Mecheria',
        deptoId: 104
    },
    {
        proNombre: 'Moghrara',
        deptoId: 104
    },
    {
        proNombre: 'Naama',
        deptoId: 104
    },
    {
        proNombre: 'Sfissifa',
        deptoId: 104
    },
    {
        proNombre: 'Tiout',
        deptoId: 104
    },
    {
        proNombre: 'Ain El Turck',
        deptoId: 105
    },
    {
        proNombre: 'Arzew',
        deptoId: 105
    },
    {
        proNombre: 'Bethioua',
        deptoId: 105
    },

    {
        proNombre: 'Bir El Djir',
        deptoId: 105
    },
    {
        proNombre: 'Boutlélis',
        deptoId: 105
    },
    {
        proNombre: 'Es Sénia',
        deptoId: 105
    },
    {
        proNombre: 'Gydel',
        deptoId: 105
    },
    {
        proNombre: 'Orán',
        deptoId: 105
    },
    {
        proNombre: 'Oued Tlélat',
        deptoId: 105
    },
    {
        proNombre: 'Hassi Messaoud',
        deptoId: 106
    },
    {
        proNombre: 'Ouargla',
        deptoId: 106
    },
    {
        proNombre: 'Temacine',
        deptoId: 106
    },
    {
        proNombre: 'Touggourt',
        deptoId: 106
    },
    {
        proNombre: ' Ain Babouche',
        deptoId: 107
    },
    {
        proNombre: 'Ain Beïda',
        deptoId: 107
    },
    {
        proNombre: ' Ain Fakroun',
        deptoId: 107
    },
    {
        proNombre: "Ain M'lila",
        deptoId: 107
    },
    {
        proNombre: ' Ain Zitoun',
        deptoId: 107
    },
    {
        proNombre: 'Oum el-Bouaghi',
        deptoId: 107
    },
    {
        proNombre: 'Bendaoud',
        deptoId: 108
    },
    {
        proNombre: 'Bouzegza',
        deptoId: 108
    },
    {
        proNombre: 'Hamri',
        deptoId: 108
    },
    {
        proNombre: 'Kalaa',
        deptoId: 108
    },
    {
        proNombre: 'Mazouna',
        deptoId: 108
    },
    {
        proNombre: 'Relizane',
        deptoId: 108
    },
    {
        proNombre: 'Zemmoura',
        deptoId: 108
    },
    {
        proNombre: 'Maamora',
        deptoId: 109
    },
    {
        proNombre: 'Saida',
        deptoId: 109
    },
    {
        proNombre: 'Youb',
        deptoId: 109
    },
    {
        proNombre: 'Ain-El-Kébira',
        deptoId: 110
    },
    {
        proNombre: 'Bougaa',
        deptoId: 110
    },
    {
        proNombre: 'Djémila',
        deptoId: 110
    },
    {
        proNombre: 'El Eulma',
        deptoId: 110
    },
    {
        proNombre: 'Hammam Guergour',
        deptoId: 110
    },
    {
        proNombre: 'Sétif',
        deptoId: 110
    },
    {
        proNombre: 'Sidi Bel Abbes',
        deptoId: 111
    },
    {
        proNombre: 'Sidi Ali Benyoub',
        deptoId: 111
    },
    {
        proNombre: 'Sidi-Brahim',
        deptoId: 111
    },
    {
        proNombre: 'Tessala',
        deptoId: 111
    },
    {
        proNombre: 'Khemissa',
        deptoId: 112
    },
    {
        proNombre: 'Sedrata',
        deptoId: 112
    },
    {
        proNombre: 'Souk Ahras',
        deptoId: 112
    },
    {
        proNombre: 'Tamanghasset',
        deptoId: 113
    },
    {
        proNombre: 'Bir El Ater',
        deptoId: 114
    },
    {
        proNombre: ' Negrine',
        deptoId: 114
    },
    {
        proNombre: 'Ouenza',
        deptoId: 114
    },
    {
        proNombre: 'Tébessa',
        deptoId: 114
    },
    {
        proNombre: 'Tiaret',
        deptoId: 115
    },
    {
        proNombre: 'Tinduf',
        deptoId: 116
    },
    {
        proNombre: 'Attatba',
        deptoId: 117
    },
    {
        proNombre: ' Cheraga',
        deptoId: 117
    },
    {
        proNombre: ' Cherchell',
        deptoId: 117
    },
    {
        proNombre: 'Draria',
        deptoId: 117
    },
    {
        proNombre: ' Kolea',
        deptoId: 117
    },
    {
        proNombre: 'Menaceur',
        deptoId: 117
    },
    {
        proNombre: 'Messelmoun',
        deptoId: 117
    },
    {
        proNombre: ' Staoueli',
        deptoId: 117
    },
    {
        proNombre: 'Tipasa',
        deptoId: 117
    },
    {
        proNombre: 'Larbaa',
        deptoId: 118
    },
    {
        proNombre: 'Théniet-El-Had',
        deptoId: 118
    },
    {
        proNombre: 'Aghrib',
        deptoId: 119
    },
    {
        proNombre: 'Azazga',
        deptoId: 119
    },
    {
        proNombre: 'Mizrana',
        deptoId: 119
    },
    {
        proNombre: 'Soumaa',
        deptoId: 119
    },
    {
        proNombre: 'Tadmait',
        deptoId: 119
    },
    {
        proNombre: 'Tizi Ouzou',
        deptoId: 119
    },
    {
        proNombre: 'Ain Talout',
        deptoId: 120
    },
    {
        proNombre: 'Bab el Assa',
        deptoId: 120
    },
    {
        proNombre: 'Beni Boussaid',
        deptoId: 120
    },
    {
        proNombre: 'Beni Snous',
        deptoId: 120
    },
    {
        proNombre: 'Bensekrane',
        deptoId: 120
    },
    {
        proNombre: 'Chatouane',
        deptoId: 120
    },
    {
        proNombre: 'Felaoucene',
        deptoId: 120
    },
    {
        proNombre: 'Gazaouet',
        deptoId: 120
    },
    {
        proNombre: 'Hennaya',
        deptoId: 120
    },
    {
        proNombre: 'Houanaine',
        deptoId: 120
    },
    {
        proNombre: 'Magnia',
        deptoId: 120
    },
    {
        proNombre: 'Mansura',
        deptoId: 120
    },
    {
        proNombre: "Marsa Ben M'Hidi",
        deptoId: 120
    },
    {
        proNombre: 'Nedroma',
        deptoId: 120
    },
    {
        proNombre: 'Ouled Mimoun',
        deptoId: 120
    },
    {
        proNombre: 'Remchi',
        deptoId: 120
    },
    {
        proNombre: 'Sabdou',
        deptoId: 120
    },
    {
        proNombre: 'Sabra',
        deptoId: 120
    },
    {
        proNombre: 'Sidi Djillali',
        deptoId: 120
    },
    {
        proNombre: '25 de Mayo',
        deptoId: 121
    },
    {
        proNombre: '9 de Julio',
        deptoId: 121
    },
    {
        proNombre: 'Adolfo Alsina',
        deptoId: 121
    },
    {
        proNombre: 'Adolfo Gonzales Chaves',
        deptoId: 121
    },
    {
        proNombre: 'Alberti',
        deptoId: 121
    },
    {
        proNombre: 'Arrecifes',
        deptoId: 121
    },
    {
        proNombre: 'Ayacucho',
        deptoId: 121
    },
    {
        proNombre: 'Azul',
        deptoId: 121
    },
    {
        proNombre: 'Bahía Blanca',
        deptoId: 121
    },
    {
        proNombre: 'Balcarce',
        deptoId: 121
    },
    {
        proNombre: 'Baradero',
        deptoId: 121
    },
    {
        proNombre: 'Benito Juárez',
        deptoId: 121
    },
    {
        proNombre: 'Berisso',
        deptoId: 121
    },
    {
        proNombre: 'Bolívar',
        deptoId: 121
    },
    {
        proNombre: 'Bragado',
        deptoId: 121
    },
    {
        proNombre: 'Brandsen',
        deptoId: 121
    },
    {
        proNombre: 'Campana',
        deptoId: 121
    },
    {
        proNombre: 'Cañuelas',
        deptoId: 121
    },
    {
        proNombre: 'Capitán Sarmiento',
        deptoId: 121
    },
    {
        proNombre: 'Carlos Casares',
        deptoId: 121
    },
    {
        proNombre: 'Carlos Tejedor',
        deptoId: 121
    },
    {
        proNombre: 'Carmen de Areco',
        deptoId: 121
    },
    {
        proNombre: 'Castelli',
        deptoId: 121
    },
    {
        proNombre: 'Chacabuco',
        deptoId: 121
    },
    {
        proNombre: 'Chascomús',
        deptoId: 121
    },
    {
        proNombre: 'Chivilcoy',
        deptoId: 121
    },
    {
        proNombre: 'Colón',
        deptoId: 121
    },
    {
        proNombre: 'Coronel de Marina L. Rosales',
        deptoId: 121
    },
    {
        proNombre: 'Coronel Dorrego',
        deptoId: 121
    },
    {
        proNombre: 'Coronel Pringles',
        deptoId: 121
    },
    {
        proNombre: 'Coronel Suárez',
        deptoId: 121
    },
    {
        proNombre: 'Daireaux',
        deptoId: 121
    },
    {
        proNombre: 'Dolores',
        deptoId: 121
    },
    {
        proNombre: 'Ensenada',
        deptoId: 121
    },
    {
        proNombre: 'Escobar',
        deptoId: 121
    },
    {
        proNombre: 'Exaltación de la Cruz',
        deptoId: 121
    },
    {
        proNombre: 'Florentino Ameghino',
        deptoId: 121
    },
    {
        proNombre: 'General Alvarado',
        deptoId: 121
    },
    {
        proNombre: 'General Alvear',
        deptoId: 121
    },
    {
        proNombre: 'General Arenales',
        deptoId: 121
    },
    {
        proNombre: 'General Belgrano',
        deptoId: 121
    },
    {
        proNombre: 'General Guido',
        deptoId: 121
    },
    {
        proNombre: 'General La Madrid',
        deptoId: 121
    },
    {
        proNombre: 'General Las Heras',
        deptoId: 121
    },
    {
        proNombre: 'General Lavalle',
        deptoId: 121
    },
    {
        proNombre: 'General Madariaga',
        deptoId: 121
    },
    {
        proNombre: 'General Paz',
        deptoId: 121
    },
    {
        proNombre: 'General Pinto',
        deptoId: 121
    },
    {
        proNombre: 'General Pueyrredón',
        deptoId: 121
    },
    {
        proNombre: 'General Rodríguez',
        deptoId: 121
    },
    {
        proNombre: 'General Villegas',
        deptoId: 121
    },
    {
        proNombre: 'Guaminí',
        deptoId: 121
    },
    {
        proNombre: 'Hipólito Yrigoyen',
        deptoId: 121
    },
    {
        proNombre: 'Junín',
        deptoId: 121
    },
    {
        proNombre: 'La Costa',
        deptoId: 121
    },
    {
        proNombre: 'La Plata',
        deptoId: 121
    },
    {
        proNombre: 'Laprida',
        deptoId: 121
    },
    {
        proNombre: 'Las Flores',
        deptoId: 121
    },
    {
        proNombre: 'Leandro N. Alem',
        deptoId: 121
    },
    {
        proNombre: 'Lincoln',
        deptoId: 121
    },
    {
        proNombre: 'Lobería',
        deptoId: 121
    },
    {
        proNombre: 'Lobos',
        deptoId: 121
    },
    {
        proNombre: 'Luján',
        deptoId: 121
    },
    {
        proNombre: 'Magdalena',
        deptoId: 121
    },
    {
        proNombre: 'Maipú',
        deptoId: 121
    },
    {
        proNombre: 'Mar Chiquita',
        deptoId: 121
    },
    {
        proNombre: 'Marcos Paz',
        deptoId: 121
    },
    {
        proNombre: 'Mercedes',
        deptoId: 121
    },
    {
        proNombre: 'Monte',
        deptoId: 121
    },
    {
        proNombre: 'Monte Hermoso',
        deptoId: 121
    },
    {
        proNombre: 'Navarro',
        deptoId: 121
    },
    {
        proNombre: 'Necochea',
        deptoId: 121
    },
    {
        proNombre: 'Olavarría',
        deptoId: 121
    },
    {
        proNombre: 'Patagones',
        deptoId: 121
    },
    {
        proNombre: 'Pehuajó',
        deptoId: 121
    },
    {
        proNombre: 'Pellegrini',
        deptoId: 121
    },
    {
        proNombre: 'Pergamino',
        deptoId: 121
    },
    {
        proNombre: 'Pila',
        deptoId: 121
    },
    {
        proNombre: 'Pilar',
        deptoId: 121
    },
    {
        proNombre: 'Pinamar',
        deptoId: 121
    },
    {
        proNombre: 'Presidente Perón',
        deptoId: 121
    },
    {
        proNombre: 'Puán',
        deptoId: 121
    },
    {
        proNombre: 'Punta Indio',
        deptoId: 121
    },
    {
        proNombre: 'Ramallo',
        deptoId: 121
    },
    {
        proNombre: 'Rauch',
        deptoId: 121
    },
    {
        proNombre: 'Rivadavia',
        deptoId: 121
    },
    {
        proNombre: 'Rojas',
        deptoId: 121
    },
    {
        proNombre: 'Roque Pérez',
        deptoId: 121
    },
    {
        proNombre: 'Saavedra',
        deptoId: 121
    },
    {
        proNombre: 'Saladillo',
        deptoId: 121
    },
    {
        proNombre: 'Salliqueló',
        deptoId: 121
    },
    {
        proNombre: 'Salto',
        deptoId: 121
    },
    {
        proNombre: 'San Andrés de Giles',
        deptoId: 121
    },
    {
        proNombre: 'San Antonio de Areco',
        deptoId: 121
    },
    {
        proNombre: 'San Cayetano',
        deptoId: 121
    },
    {
        proNombre: 'San Nicolás',
        deptoId: 121
    },
    {
        proNombre: 'San Pedro',
        deptoId: 121
    },
    {
        proNombre: 'San Vicente',
        deptoId: 121
    },
    {
        proNombre: 'Suipacha',
        deptoId: 121
    },
    {
        proNombre: 'Tandil',
        deptoId: 121
    },
    {
        proNombre: 'Tapalqué',
        deptoId: 121
    },
    {
        proNombre: 'Tordillo',
        deptoId: 121
    },
    {
        proNombre: 'Tornquist',
        deptoId: 121
    },
    {
        proNombre: 'Trenque Lauquen',
        deptoId: 121
    },
    {
        proNombre: 'Tres Arroyos',
        deptoId: 121
    },
    {
        proNombre: 'Tres Lomas',
        deptoId: 121
    },
    {
        proNombre: 'Villa Gesell',
        deptoId: 121
    },
    {
        proNombre: 'Villarino',
        deptoId: 121
    },
    {
        proNombre: 'Zárate',
        deptoId: 121
    },
    {
        proNombre: 'Ambato',
        deptoId: 122
    },
    {
        proNombre: 'Ancasti',
        deptoId: 122
    },
    {
        proNombre: 'Andalgalá',
        deptoId: 122
    },
    {
        proNombre: 'Antofagasta de la Sierra',
        deptoId: 122
    },
    {
        proNombre: 'Belén',
        deptoId: 122
    },
    {
        proNombre: 'Capayán',
        deptoId: 122
    },
    {
        proNombre: 'Capital',
        deptoId: 122
    },
    {
        proNombre: 'El Alto',
        deptoId: 122
    },
    {
        proNombre: 'Fray Mamerto Esquiú',
        deptoId: 122
    },
    {
        proNombre: 'La Paz',
        deptoId: 122
    },
    {
        proNombre: 'Paclín',
        deptoId: 122
    },
    {
        proNombre: 'Pomán',
        deptoId: 122
    },
    {
        proNombre: 'Santa María',
        deptoId: 122
    },
    {
        proNombre: 'Santa Rosa',
        deptoId: 122
    },
    {
        proNombre: 'Tinogasta',
        deptoId: 122
    },
    {
        proNombre: 'Valle Viejo',
        deptoId: 122
    },
    {
        proNombre: 'Almirante Brown',
        deptoId: 123
    },
    {
        proNombre: 'Chacabuco',
        deptoId: 123
    },
    {
        proNombre: 'Comandante Fernández',
        deptoId: 123
    },
    {
        proNombre: 'Doce de Octubre (12 de Octubre)',
        deptoId: 123
    },
    {
        proNombre: 'Dos de Abril (2 de Abril)',
        deptoId: 123
    },
    {
        proNombre: 'Fray Justo Santa María de Oro',
        deptoId: 123
    },
    {
        proNombre: 'General Belgrano',
        deptoId: 123
    },
    {
        proNombre: 'General Donovan',
        deptoId: 123
    },
    {
        proNombre: 'General Güemes',
        deptoId: 123
    },
    {
        proNombre: 'Independencia',
        deptoId: 123
    },
    {
        proNombre: 'Libertad',
        deptoId: 123
    },
    {
        proNombre: 'Libertador General San Martín',
        deptoId: 123
    },
    {
        proNombre: 'Maipú',
        deptoId: 123
    },
    {
        proNombre: 'Mayor Luis Jorge Fontana',
        deptoId: 123
    },
    {
        proNombre: 'Nueve de Julio (9 de Julio)',
        deptoId: 123
    },
    {
        proNombre: "O'Higgins",
        deptoId: 123
    },
    {
        proNombre: 'Presidencia de la Plaza',
        deptoId: 123
    },
    {
        proNombre: 'Primero de Mayo (1º de Mayo)',
        deptoId: 123
    },
    {
        proNombre: 'Quitilipi',
        deptoId: 123
    },
    {
        proNombre: 'San Fernando',
        deptoId: 123
    },
    {
        proNombre: 'San Lorenzo',
        deptoId: 123
    },
    {
        proNombre: 'Sargento Cabral',
        deptoId: 123
    },
    {
        proNombre: 'Tapenagá',
        deptoId: 123
    },
    {
        proNombre: 'Veinticinco de Mayo (25 de Mayo)',
        deptoId: 123
    },
    {
        proNombre: 'Atlántico',
        deptoId: 124
    },
    {
        proNombre: 'Biedma',
        deptoId: 124
    },
    {
        proNombre: 'Cushamen',
        deptoId: 124
    },
    {
        proNombre: 'Escalante',
        deptoId: 124
    },
    {
        proNombre: 'Florentino Ameghino',
        deptoId: 124
    },
    {
        proNombre: 'Futaleufú',
        deptoId: 124
    },
    {
        proNombre: 'Gaiman',
        deptoId: 124
    },
    {
        proNombre: 'Gastre',
        deptoId: 124
    },
    {
        proNombre: 'Languiñeo',
        deptoId: 124
    },
    {
        proNombre: 'Mártires',
        deptoId: 124
    },
    {
        proNombre: 'Paso de Indios',
        deptoId: 124
    },
    {
        proNombre: 'Rawson',
        deptoId: 124
    },
    {
        proNombre: 'Río Senguer',
        deptoId: 124
    },
    {
        proNombre: 'Sarmiento',
        deptoId: 124
    },
    {
        proNombre: 'Tehuelches',
        deptoId: 124
    },
    {
        proNombre: 'Telsen',
        deptoId: 124
    },
    {
        proNombre: 'Calamuchita',
        deptoId: 125
    },
    {
        proNombre: 'Capital',
        deptoId: 125
    },
    {
        proNombre: 'Colón',
        deptoId: 125
    },
    {
        proNombre: 'Cruz del Eje',
        deptoId: 125
    },
    {
        proNombre: 'General Roca',
        deptoId: 125
    },
    {
        proNombre: 'General San Martín',
        deptoId: 125
    },
    {
        proNombre: 'Ischilín',
        deptoId: 125
    },
    {
        proNombre: 'Juárez Celman',
        deptoId: 125
    },
    {
        proNombre: 'Marcos Juárez',
        deptoId: 125
    },
    {
        proNombre: 'Minas',
        deptoId: 125
    },
    {
        proNombre: 'Pocho',
        deptoId: 125
    },
    {
        proNombre: 'Presidente Roque Sáenz Peña',
        deptoId: 125
    },
    {
        proNombre: 'Punilla',
        deptoId: 125
    },
    {
        proNombre: 'Río Cuarto',
        deptoId: 125
    },
    {
        proNombre: 'Río Primero',
        deptoId: 125
    },
    {
        proNombre: 'Río Seco',
        deptoId: 125
    },
    {
        proNombre: 'Río Segundo',
        deptoId: 125
    },
    {
        proNombre: 'San Alberto',
        deptoId: 125
    },
    {
        proNombre: 'San Javier',
        deptoId: 125
    },
    {
        proNombre: 'San Justo',
        deptoId: 125
    },
    {
        proNombre: 'Santa María',
        deptoId: 125
    },
    {
        proNombre: 'Sobremonte',
        deptoId: 125
    },
    {
        proNombre: 'Tercero Arriba',
        deptoId: 125
    },
    {
        proNombre: 'Totoral',
        deptoId: 125
    },
    {
        proNombre: 'Tulumba',
        deptoId: 125
    },
    {
        proNombre: 'Unión',
        deptoId: 125
    },
    {
        proNombre: 'Bella Vista',
        deptoId: 126
    },
    {
        proNombre: 'Berón de Astrada',
        deptoId: 126
    },
    {
        proNombre: 'Capital',
        deptoId: 126
    },
    {
        proNombre: 'Concepción',
        deptoId: 126
    },
    {
        proNombre: 'Curuzú Cuatiá',
        deptoId: 126
    },
    {
        proNombre: 'Empedrado',
        deptoId: 126
    },
    {
        proNombre: 'Esquina',
        deptoId: 126
    },
    {
        proNombre: 'General Alvear',
        deptoId: 126
    },
    {
        proNombre: 'General Paz',
        deptoId: 126
    },
    {
        proNombre: 'Goya',
        deptoId: 126
    },
    {
        proNombre: 'Itatí',
        deptoId: 126
    },
    {
        proNombre: 'Ituzaingó',
        deptoId: 126
    },
    {
        proNombre: 'Lavalle',
        deptoId: 126
    },
    {
        proNombre: 'Mburucuyá',
        deptoId: 126
    },
    {
        proNombre: 'Mercedes',
        deptoId: 126
    },
    {
        proNombre: 'Monte Caseros',
        deptoId: 126
    },
    {
        proNombre: 'Paso de los Libres',
        deptoId: 126
    },
    {
        proNombre: 'Saladas',
        deptoId: 126
    },
    {
        proNombre: 'San Cosme',
        deptoId: 126
    },
    {
        proNombre: 'San Luis del Palmar',
        deptoId: 126
    },
    {
        proNombre: 'San Martín',
        deptoId: 126
    },
    {
        proNombre: 'San Miguel',
        deptoId: 126
    },
    {
        proNombre: 'San Roque',
        deptoId: 126
    },
    {
        proNombre: 'Santo Tomé',
        deptoId: 126
    },
    {
        proNombre: 'Sauce',
        deptoId: 126
    },
    {
        proNombre: 'Colón',
        deptoId: 127
    },
    {
        proNombre: 'Concordia',
        deptoId: 127
    },
    {
        proNombre: 'Diamante',
        deptoId: 127
    },
    {
        proNombre: 'Federación',
        deptoId: 127
    },
    {
        proNombre: 'Federal',
        deptoId: 127
    },
    {
        proNombre: 'Feliciano',
        deptoId: 127
    },
    {
        proNombre: 'Gualeguay',
        deptoId: 127
    },
    {
        proNombre: 'Gualeguaychú',
        deptoId: 127
    },
    {
        proNombre: 'Islas del Ibicuy',
        deptoId: 127
    },
    {
        proNombre: 'La Paz',
        deptoId: 127
    },
    {
        proNombre: 'Nogoyá',
        deptoId: 127
    },
    {
        proNombre: 'Paraná',
        deptoId: 127
    },
    {
        proNombre: 'San Salvador',
        deptoId: 127
    },
    {
        proNombre: 'Tala',
        deptoId: 127
    },
    {
        proNombre: 'Uruguay',
        deptoId: 127
    },
    {
        proNombre: 'Victoria',
        deptoId: 127
    },
    {
        proNombre: 'Villaguay',
        deptoId: 127
    },
    {
        proNombre: 'Bermejo',
        deptoId: 128
    },
    {
        proNombre: 'Formosa',
        deptoId: 128
    },
    {
        proNombre: 'Laishí',
        deptoId: 128
    },
    {
        proNombre: 'Matacos',
        deptoId: 128
    },
    {
        proNombre: 'Patiño',
        deptoId: 128
    },
    {
        proNombre: 'Pilagás',
        deptoId: 128
    },
    {
        proNombre: 'Pilcomayo',
        deptoId: 128
    },
    {
        proNombre: 'Pirané',
        deptoId: 128
    },
    {
        proNombre: 'Ramón Lista',
        deptoId: 128
    },
    {
        proNombre: 'Cochinoca',
        deptoId: 129
    },
    {
        proNombre: 'Dr. Manuel Belgrano',
        deptoId: 129
    },
    {
        proNombre: 'El Carmen',
        deptoId: 129
    },
    {
        proNombre: 'Humahuaca',
        deptoId: 129
    },
    {
        proNombre: 'Ledesma',
        deptoId: 129
    },
    {
        proNombre: 'Palpalá',
        deptoId: 129
    },
    {
        proNombre: 'Rinconada',
        deptoId: 129
    },
    {
        proNombre: 'San Antonio',
        deptoId: 129
    },
    {
        proNombre: 'San Pedro',
        deptoId: 129
    },
    {
        proNombre: 'Santa Bárbara',
        deptoId: 129
    },
    {
        proNombre: 'Santa Catalina',
        deptoId: 129
    },
    {
        proNombre: 'Susques',
        deptoId: 129
    },
    {
        proNombre: 'Tilcara',
        deptoId: 129
    },
    {
        proNombre: 'Tumbaya',
        deptoId: 129
    },
    {
        proNombre: 'Valle Grande',
        deptoId: 129
    },
    {
        proNombre: 'Yavi',
        deptoId: 129
    },
    {
        proNombre: 'Atreucó',
        deptoId: 130
    },
    {
        proNombre: 'Caleu Caleu',
        deptoId: 130
    },
    {
        proNombre: 'Capital',
        deptoId: 130
    },
    {
        proNombre: 'Catriló',
        deptoId: 130
    },
    {
        proNombre: 'Chalileo',
        deptoId: 130
    },
    {
        proNombre: 'Chapaleufú',
        deptoId: 130
    },
    {
        proNombre: 'Conhelo',
        deptoId: 130
    },
    {
        proNombre: 'Curacó',
        deptoId: 130
    },
    {
        proNombre: 'Guatraché',
        deptoId: 130
    },
    {
        proNombre: 'Hucal',
        deptoId: 130
    },
    {
        proNombre: 'Lihuel Calel',
        deptoId: 130
    },
    {
        proNombre: 'Limay Mahuida',
        deptoId: 130
    },
    {
        proNombre: 'Loventué',
        deptoId: 130
    },
    {
        proNombre: 'Maracó',
        deptoId: 130
    },
    {
        proNombre: 'Puelén',
        deptoId: 130
    },
    {
        proNombre: 'Quemú Quemú',
        deptoId: 130
    },
    {
        proNombre: 'Rancul',
        deptoId: 130
    },
    {
        proNombre: 'Realicó',
        deptoId: 130
    },
    {
        proNombre: 'Toay',
        deptoId: 130
    },
    {
        proNombre: 'Trenel',
        deptoId: 130
    },
    {
        proNombre: 'Utracán',
        deptoId: 130
    },
    {
        proNombre: 'Arauco',
        deptoId: 131
    },
    {
        proNombre: 'Capital',
        deptoId: 131
    },
    {
        proNombre: 'Castro Barros',
        deptoId: 131
    },
    {
        proNombre: 'Chamical',
        deptoId: 131
    },
    {
        proNombre: 'Chilecito',
        deptoId: 131
    },
    {
        proNombre: 'Coronel Felipe Varela',
        deptoId: 131
    },
    {
        proNombre: 'Famatina',
        deptoId: 131
    },
    {
        proNombre: 'General Ángel V. Peñaloza',
        deptoId: 131
    },
    {
        proNombre: 'General Belgrano',
        deptoId: 131
    },
    {
        proNombre: 'General Juan Facundo Quiroga',
        deptoId: 131
    },
    {
        proNombre: 'General Lamadrid',
        deptoId: 131
    },
    {
        proNombre: 'General Ocampo',
        deptoId: 131
    },
    {
        proNombre: 'General San Martín',
        deptoId: 131
    },
    {
        proNombre: 'Independencia',
        deptoId: 131
    },
    {
        proNombre: 'Rosario Vera Peñaloza',
        deptoId: 131
    },
    {
        proNombre: 'San Blas de los Sauces',
        deptoId: 131
    },
    {
        proNombre: 'Sanagasta',
        deptoId: 131
    },
    {
        proNombre: 'Vinchina',
        deptoId: 131
    },
    {
        proNombre: 'Capital',
        deptoId: 132
    },
    {
        proNombre: 'General Alvear',
        deptoId: 132
    },
    {
        proNombre: 'Godoy Cruz',
        deptoId: 132
    },
    {
        proNombre: 'Guaymallén',
        deptoId: 132
    },
    {
        proNombre: 'Junín',
        deptoId: 132
    },
    {
        proNombre: 'La Paz',
        deptoId: 132
    },
    {
        proNombre: 'Las Heras',
        deptoId: 132
    },
    {
        proNombre: 'Lavalle',
        deptoId: 132
    },
    {
        proNombre: 'Luján de Cuyo',
        deptoId: 132
    },
    {
        proNombre: 'Maipú',
        deptoId: 132
    },
    {
        proNombre: 'Malargüe',
        deptoId: 132
    },
    {
        proNombre: 'Rivadavia',
        deptoId: 132
    },
    {
        proNombre: 'San Carlos',
        deptoId: 132
    },
    {
        proNombre: 'General San Martín',
        deptoId: 132
    },
    {
        proNombre: 'San Rafael',
        deptoId: 132
    },
    {
        proNombre: 'Santa Rosa',
        deptoId: 132
    },
    {
        proNombre: 'Tunuyán',
        deptoId: 132
    },
    {
        proNombre: 'Tupungato',
        deptoId: 132
    },
    {
        proNombre: '25 de Mayo',
        deptoId: 133
    },
    {
        proNombre: 'Apóstoles',
        deptoId: 133
    },
    {
        proNombre: 'Cainguás',
        deptoId: 133
    },
    {
        proNombre: 'Candelaria',
        deptoId: 133
    },
    {
        proNombre: 'Capital',
        deptoId: 133
    },
    {
        proNombre: 'Concepción',
        deptoId: 133
    },
    {
        proNombre: 'Eldorado',
        deptoId: 133
    },
    {
        proNombre: 'General Manuel Belgrano',
        deptoId: 133
    },
    {
        proNombre: 'Iguazú',
        deptoId: 133
    },
    {
        proNombre: 'Leandro N. Alem',
        deptoId: 133
    },
    {
        proNombre: 'Libertador General San Martín',
        deptoId: 133
    },
    {
        proNombre: 'Montecarlo',
        deptoId: 133
    },
    {
        proNombre: 'Oberá',
        deptoId: 133
    },
    {
        proNombre: 'San Ignacio',
        deptoId: 133
    },
    {
        proNombre: 'San Javier',
        deptoId: 133
    },
    {
        proNombre: 'San Pedro',
        deptoId: 133
    },
    {
        proNombre: 'Aluminé',
        deptoId: 134
    },
    {
        proNombre: 'Añelo',
        deptoId: 134
    },
    {
        proNombre: 'Catán Lil',
        deptoId: 134
    },
    {
        proNombre: 'Chos Malal',
        deptoId: 134
    },
    {
        proNombre: 'Collón Curá',
        deptoId: 134
    },
    {
        proNombre: 'Confluencia',
        deptoId: 134
    },
    {
        proNombre: 'Huiliches',
        deptoId: 134
    },
    {
        proNombre: 'Lácar',
        deptoId: 134
    },
    {
        proNombre: 'Loncopué',
        deptoId: 134
    },
    {
        proNombre: 'Los Lagos',
        deptoId: 134
    },
    {
        proNombre: 'Minas',
        deptoId: 134
    },
    {
        proNombre: 'Ñorquín',
        deptoId: 134
    },
    {
        proNombre: 'Pehuenches',
        deptoId: 134
    },
    {
        proNombre: 'Picunches',
        deptoId: 134
    },
    {
        proNombre: 'Picún Leufú',
        deptoId: 134
    },
    {
        proNombre: 'Zapala',
        deptoId: 134
    },
    {
        proNombre: 'Adolfo Alsina (Viedma)',
        deptoId: 135
    },
    {
        proNombre: 'Avellaneda (Choele Choel)',
        deptoId: 135
    },
    {
        proNombre: 'Bariloche (San Carlos de Bariloche)',
        deptoId: 135
    },
    {
        proNombre: 'Conesa (General Conesa)',
        deptoId: 135
    },
    {
        proNombre: 'El Cuy (El Cuy)',
        deptoId: 135
    },
    {
        proNombre: 'General Roca (General Roca)',
        deptoId: 135
    },
    {
        proNombre: 'Nueve de Julio (Sierra Colorada)',
        deptoId: 135
    },
    {
        proNombre: 'Ñorquincó (Ñorquincó)',
        deptoId: 135
    },
    {
        proNombre: 'Pichi Mahuida (Río Colorado)',
        deptoId: 135
    },
    {
        proNombre: 'Pilcaniyeu (Pilcaniyeu)',
        deptoId: 135
    },
    {
        proNombre: 'San Antonio (San Antonio Oeste)',
        deptoId: 135
    },
    {
        proNombre: 'Valcheta (Valcheta)',
        deptoId: 135
    },
    {
        proNombre: 'Veinticinco de Mayo (Maquinchao)',
        deptoId: 135
    },
    {
        proNombre: 'Anta',
        deptoId: 136
    },
    {
        proNombre: 'Cachi',
        deptoId: 136
    },
    {
        proNombre: 'Cafayate',
        deptoId: 136
    },
    {
        proNombre: 'Capital',
        deptoId: 136
    },
    {
        proNombre: 'Cerrillos',
        deptoId: 136
    },
    {
        proNombre: 'Chicoana',
        deptoId: 136
    },
    {
        proNombre: 'General Güemes',
        deptoId: 136
    },
    {
        proNombre: 'General José de San Martín',
        deptoId: 136
    },
    {
        proNombre: 'Guachipas',
        deptoId: 136
    },
    {
        proNombre: 'Iruya',
        deptoId: 136
    },
    {
        proNombre: 'La Caldera',
        deptoId: 136
    },
    {
        proNombre: 'La Candelaria',
        deptoId: 136
    },
    {
        proNombre: 'La Poma',
        deptoId: 136
    },
    {
        proNombre: 'La Viña',
        deptoId: 136
    },
    {
        proNombre: 'Los Andes',
        deptoId: 136
    },
    {
        proNombre: 'Metán',
        deptoId: 136
    },
    {
        proNombre: 'Molinos',
        deptoId: 136
    },
    {
        proNombre: 'Orán',
        deptoId: 136
    },
    {
        proNombre: 'Rivadavia',
        deptoId: 136
    },
    {
        proNombre: 'Rosario de la Frontera',
        deptoId: 136
    },
    {
        proNombre: 'Rosario de Lerma',
        deptoId: 136
    },
    {
        proNombre: 'San Carlos',
        deptoId: 136
    },
    {
        proNombre: 'Santa Victoria',
        deptoId: 136
    },
    {
        proNombre: '9 de julio',
        deptoId: 137
    },
    {
        proNombre: '25 de mayo',
        deptoId: 137
    },
    {
        proNombre: 'Albardón',
        deptoId: 137
    },
    {
        proNombre: 'Angaco',
        deptoId: 137
    },
    {
        proNombre: 'Calingasta',
        deptoId: 137
    },
    {
        proNombre: 'Capital',
        deptoId: 137
    },
    {
        proNombre: 'Caucete',
        deptoId: 137
    },
    {
        proNombre: 'Chimbas',
        deptoId: 137
    },
    {
        proNombre: 'Iglesia',
        deptoId: 137
    },
    {
        proNombre: 'Jáchal',
        deptoId: 137
    },
    {
        proNombre: 'Pocito',
        deptoId: 137
    },
    {
        proNombre: 'Rawson',
        deptoId: 137
    },
    {
        proNombre: 'Rivadavia',
        deptoId: 137
    },
    {
        proNombre: 'San Martín',
        deptoId: 137
    },
    {
        proNombre: 'Santa Lucía',
        deptoId: 137
    },
    {
        proNombre: 'Sarmiento',
        deptoId: 137
    },
    {
        proNombre: 'Ullum',
        deptoId: 137
    },
    {
        proNombre: 'Valle Fértil',
        deptoId: 137
    },
    {
        proNombre: 'Zonda',
        deptoId: 137
    },
    {
        proNombre: 'Ayacucho (San Francisco del Monte de Oro)',
        deptoId: 138
    },
    {
        proNombre: 'Belgrano (Villa General Roca)',
        deptoId: 138
    },
    {
        proNombre: 'Chacabuco (Concarán)',
        deptoId: 138
    },
    {
        proNombre: 'Coronel Pringles (La Toma)',
        deptoId: 138
    },
    {
        proNombre: 'General Pedernera (Villa Mercedes)',
        deptoId: 138
    },
    {
        proNombre: 'Gobernador Dupuy (Buena Esperanza)',
        deptoId: 138
    },
    {
        proNombre: 'Junín (Santa Rosa de Conlara)',
        deptoId: 138
    },
    {
        proNombre: 'Juan Martín de Pueyrredón (San Luis)',
        deptoId: 138
    },
    {
        proNombre: 'Libertador General San Martín (San Martín)',
        deptoId: 138
    },
    {
        proNombre: 'Corpen Aike',
        deptoId: 139
    },
    {
        proNombre: 'Deseado',
        deptoId: 139
    },
    {
        proNombre: 'Güer Aike',
        deptoId: 139
    },
    {
        proNombre: 'Lago Argentino',
        deptoId: 139
    },
    {
        proNombre: 'Lago Buenos Aires',
        deptoId: 139
    },
    {
        proNombre: 'Magallanes',
        deptoId: 139
    },
    {
        proNombre: 'Río Chico',
        deptoId: 139
    },
    {
        proNombre: 'Rosario',
        deptoId: 140
    },
    {
        proNombre: 'La Capital',
        deptoId: 140
    },
    {
        proNombre: 'General López',
        deptoId: 140
    },
    {
        proNombre: 'Castellanos',
        deptoId: 140
    },
    {
        proNombre: 'General Obligado',
        deptoId: 140
    },
    {
        proNombre: 'San Lorenzo',
        deptoId: 140
    },
    {
        proNombre: 'Las Colonias',
        deptoId: 140
    },
    {
        proNombre: 'Constitución',
        deptoId: 140
    },
    {
        proNombre: 'Caseros',
        deptoId: 140
    },
    {
        proNombre: 'San Jerónimo',
        deptoId: 140
    },
    {
        proNombre: 'San Cristóbal',
        deptoId: 140
    },
    {
        proNombre: 'Iriondo',
        deptoId: 140
    },
    {
        proNombre: 'San Martín',
        deptoId: 140
    },
    {
        proNombre: 'Vera',
        deptoId: 140
    },
    {
        proNombre: 'Belgrano',
        deptoId: 140
    },
    {
        proNombre: 'San Justo',
        deptoId: 140
    },
    {
        proNombre: 'San Javier',
        deptoId: 140
    },
    {
        proNombre: '9 de Julio',
        deptoId: 140
    },
    {
        proNombre: 'Garay',
        deptoId: 140
    },
    {
        proNombre: 'Aguirre',
        deptoId: 141
    },
    {
        proNombre: 'Alberdi',
        deptoId: 141
    },
    {
        proNombre: 'Atamisqui',
        deptoId: 141
    },
    {
        proNombre: 'Avellaneda',
        deptoId: 141
    },
    {
        proNombre: 'Banda',
        deptoId: 141
    },
    {
        proNombre: 'Belgrano',
        deptoId: 141
    },
    {
        proNombre: 'Capital',
        deptoId: 141
    },
    {
        proNombre: 'Choya',
        deptoId: 141
    },
    {
        proNombre: 'Copo',
        deptoId: 141
    },
    {
        proNombre: 'Figueroa',
        deptoId: 141
    },
    {
        proNombre: 'General Taboada',
        deptoId: 141
    },
    {
        proNombre: 'Guasayán',
        deptoId: 141
    },
    {
        proNombre: 'Jiménez',
        deptoId: 141
    },
    {
        proNombre: 'Juan Felipe Ibarra',
        deptoId: 141
    },
    {
        proNombre: 'Loreto',
        deptoId: 141
    },
    {
        proNombre: 'Mitre',
        deptoId: 141
    },
    {
        proNombre: 'Moreno',
        deptoId: 141
    },
    {
        proNombre: 'Ojo de Agua',
        deptoId: 141
    },
    {
        proNombre: 'Pellegrini',
        deptoId: 141
    },
    {
        proNombre: 'Quebrachos',
        deptoId: 141
    },
    {
        proNombre: 'Río Hondo',
        deptoId: 141
    },
    {
        proNombre: 'Rivadavia',
        deptoId: 141
    },
    {
        proNombre: 'Robles',
        deptoId: 141
    },
    {
        proNombre: 'Salavina',
        deptoId: 141
    },
    {
        proNombre: 'San Martín',
        deptoId: 141
    },
    {
        proNombre: 'Sarmiento',
        deptoId: 141
    },
    {
        proNombre: 'Silípica',
        deptoId: 141
    },
    {
        proNombre: 'Antártida Argentina',
        deptoId: 142
    },
    {
        proNombre: 'Islas del Atlántico Sur',
        deptoId: 142
    },
    {
        proNombre: 'Río Grande',
        deptoId: 142
    },
    {
        proNombre: 'Ushuaia',
        deptoId: 142
    },
    {
        proNombre: 'Burruyacú',
        deptoId: 143
    },
    {
        proNombre: 'Capital',
        deptoId: 143
    },
    {
        proNombre: 'Chicligasta',
        deptoId: 143
    },
    {
        proNombre: 'Cruz Alta',
        deptoId: 143
    },
    {
        proNombre: 'Famaillá',
        deptoId: 143
    },
    {
        proNombre: 'Graneros',
        deptoId: 143
    },
    {
        proNombre: 'Juan Bautista Alberdi',
        deptoId: 143
    },
    {
        proNombre: 'La Cocha',
        deptoId: 143
    },
    {
        proNombre: 'Leales',
        deptoId: 143
    },
    {
        proNombre: 'Lules',
        deptoId: 143
    },
    {
        proNombre: 'Monteros',
        deptoId: 143
    },
    {
        proNombre: 'Río Chico',
        deptoId: 143
    },
    {
        proNombre: 'Simoca',
        deptoId: 143
    },
    {
        proNombre: 'Tafí del Valle',
        deptoId: 143
    },
    {
        proNombre: 'Tafí Viejo',
        deptoId: 143
    },
    {
        proNombre: 'Trancas',
        deptoId: 143
    },
    {
        proNombre: 'Yerba Buena',
        deptoId: 143
    },
    {
        proNombre: 'Ashtarak',
        deptoId: 144
    },
    {
        proNombre: 'Aparan',
        deptoId: 144
    },
    {
        proNombre: 'Aragats',
        deptoId: 144
    },
    {
        proNombre: 'Talin',
        deptoId: 144
    },
    {
        proNombre: 'Ararat',
        deptoId: 145
    },
    {
        proNombre: 'Artashat',
        deptoId: 145
    },
    {
        proNombre: 'Masis',
        deptoId: 145
    },
    {
        proNombre: 'Vedi',
        deptoId: 145
    },
    {
        proNombre: 'Armavir',
        deptoId: 146
    },
    {
        proNombre: 'Metsamor',
        deptoId: 146
    },
    {
        proNombre: 'Vagharshapat (Etchmiadzin)',
        deptoId: 146
    },
    {
        proNombre: 'Chambarak',
        deptoId: 147
    },
    {
        proNombre: 'Gavar',
        deptoId: 147
    },
    {
        proNombre: 'Martuni',
        deptoId: 147
    },
    {
        proNombre: 'Sevan',
        deptoId: 147
    },
    {
        proNombre: 'Vardenis',
        deptoId: 147
    },
    {
        proNombre: 'Abovyan',
        deptoId: 148
    },
    {
        proNombre: 'Charentsavan',
        deptoId: 148
    },
    {
        proNombre: 'Hrazdan',
        deptoId: 148
    },
    {
        proNombre: 'Yeghvard',
        deptoId: 148
    },
    {
        proNombre: 'Akhtala',
        deptoId: 149
    },
    {
        proNombre: 'Alaverdi',
        deptoId: 149
    },
    {
        proNombre: 'Shamlugh',
        deptoId: 149
    },
    {
        proNombre: 'Spitak',
        deptoId: 149
    },
    {
        proNombre: 'Stepanavan',
        deptoId: 149
    },
    {
        proNombre: 'Tashir',
        deptoId: 149
    },
    {
        proNombre: 'Tumanyan',
        deptoId: 149
    },
    {
        proNombre: 'Vanadzor',
        deptoId: 149
    },
    {
        proNombre: 'Artik',
        deptoId: 150
    },
    {
        proNombre: 'Gyumri',
        deptoId: 150
    },
    {
        proNombre: 'Maralik',
        deptoId: 150
    },
    {
        proNombre: "Angeghatok'",
        deptoId: 151
    },
    {
        proNombre: "Gorayk'",
        deptoId: 151
    },
    {
        proNombre: 'Goris',
        deptoId: 151
    },
    {
        proNombre: 'Kapan',
        deptoId: 151
    },
    {
        proNombre: 'K`jarqn',
        deptoId: 151
    },
    {
        proNombre: 'Meghri',
        deptoId: 151
    },
    {
        proNombre: 'Nyuvadi',
        deptoId: 151
    },
    {
        proNombre: 'Sisian',
        deptoId: 151
    },
    {
        proNombre: 'Dilijan',
        deptoId: 152
    },
    {
        proNombre: 'Ijevan',
        deptoId: 152
    },
    {
        proNombre: 'Noyemberyan',
        deptoId: 152
    },
    {
        proNombre: 'Tavush (Berd)',
        deptoId: 152
    },
    {
        proNombre: 'Yeghegnadzor',
        deptoId: 153
    },
    {
        proNombre: 'Demirbulagh',
        deptoId: 154
    },
    {
        proNombre: 'Kond',
        deptoId: 154
    },
    {
        proNombre: 'Shahar',
        deptoId: 154
    },
    {
        proNombre: 'Adelaida',
        deptoId: 155
    },
    {
        proNombre: 'Adelaide Hills',
        deptoId: 155
    },
    {
        proNombre: 'Alexandrina',
        deptoId: 155
    },
    {
        proNombre: 'Barmera',
        deptoId: 155
    },
    {
        proNombre: 'Burnside',
        deptoId: 155
    },
    {
        proNombre: 'Campbelltown',
        deptoId: 155
    },
    {
        proNombre: 'Charles Sturt',
        deptoId: 155
    },
    {
        proNombre: 'Clare and Gilbert Valleys',
        deptoId: 155
    },
    {
        proNombre: 'Gawler',
        deptoId: 155
    },
    {
        proNombre: 'Grant',
        deptoId: 155
    },
    {
        proNombre: 'Holdfast Bay',
        deptoId: 155
    },
    {
        proNombre: 'Light',
        deptoId: 155
    },
    {
        proNombre: 'Mallala',
        deptoId: 155
    },
    {
        proNombre: 'Marion',
        deptoId: 155
    },
    {
        proNombre: 'Mid Murray',
        deptoId: 155
    },
    {
        proNombre: 'Mitcham',
        deptoId: 155
    },
    {
        proNombre: 'Mt Barker',
        deptoId: 155
    },
    {
        proNombre: 'Mt Gambier',
        deptoId: 155
    },
    {
        proNombre: 'Murray Bridge',
        deptoId: 155
    },
    {
        proNombre: 'Naracoorte',
        deptoId: 155
    },
    {
        proNombre: 'Norwood',
        deptoId: 155
    },
    {
        proNombre: 'Onkaparinga',
        deptoId: 155
    },
    {
        proNombre: 'Playford',
        deptoId: 155
    },
    {
        proNombre: 'Port Adelaide Enfield',
        deptoId: 155
    },
    {
        proNombre: 'Port Lincoln',
        deptoId: 155
    },
    {
        proNombre: 'Port Pirie',
        deptoId: 155
    },
    {
        proNombre: 'Prospect',
        deptoId: 155
    },
    {
        proNombre: 'Puerto Augusta',
        deptoId: 155
    },
    {
        proNombre: 'Renmark',
        deptoId: 155
    },
    {
        proNombre: 'Salisbury',
        deptoId: 155
    },
    {
        proNombre: 'Tea Tree Gully',
        deptoId: 155
    },
    {
        proNombre: 'The Barossa',
        deptoId: 155
    },
    {
        proNombre: 'The Copper Coast',
        deptoId: 155
    },
    {
        proNombre: 'Unley',
        deptoId: 155
    },
    {
        proNombre: 'Victor Harbor',
        deptoId: 155
    },
    {
        proNombre: 'Waikerie',
        deptoId: 155
    },
    {
        proNombre: 'Wattle Range',
        deptoId: 155
    },
    {
        proNombre: 'West Torrens',
        deptoId: 155
    },
    {
        proNombre: 'Whyalla',
        deptoId: 155
    },
    {
        proNombre: 'Yorke Peninsula',
        deptoId: 155
    },
    {
        proNombre: 'Albany',
        deptoId: 156
    },
    {
        proNombre: 'Armadale',
        deptoId: 156
    },
    {
        proNombre: 'Augusta',
        deptoId: 156
    },
    {
        proNombre: 'Bassendean',
        deptoId: 156
    },
    {
        proNombre: 'Bayswater',
        deptoId: 156
    },
    {
        proNombre: 'Belmont',
        deptoId: 156
    },
    {
        proNombre: 'Boulder',
        deptoId: 156
    },
    {
        proNombre: 'Broome',
        deptoId: 156
    },
    {
        proNombre: 'Bunbury',
        deptoId: 156
    },
    {
        proNombre: 'Busselton',
        deptoId: 156
    },
    {
        proNombre: 'Cambridge',
        deptoId: 156
    },
    {
        proNombre: 'Canning',
        deptoId: 156
    },
    {
        proNombre: 'Capel',
        deptoId: 156
    },
    {
        proNombre: 'Cockburn',
        deptoId: 156
    },
    {
        proNombre: 'Dardanup',
        deptoId: 156
    },
    {
        proNombre: 'Esperance',
        deptoId: 156
    },
    {
        proNombre: 'Fremantle',
        deptoId: 156
    },
    {
        proNombre: 'Geraldton',
        deptoId: 156
    },
    {
        proNombre: 'Gosnells',
        deptoId: 156
    },
    {
        proNombre: 'Harvey',
        deptoId: 156
    },
    {
        proNombre: 'Joondalup',
        deptoId: 156
    },
    {
        proNombre: 'Kalamunda',
        deptoId: 156
    },
    {
        proNombre: 'Kwinana',
        deptoId: 156
    },
    {
        proNombre: 'Mandurah',
        deptoId: 156
    },
    {
        proNombre: 'Melville',
        deptoId: 156
    },
    {
        proNombre: 'Mundaring',
        deptoId: 156
    },
    {
        proNombre: 'Murray',
        deptoId: 156
    },
    {
        proNombre: 'Nedlands',
        deptoId: 156
    },
    {
        proNombre: 'Perth',
        deptoId: 156
    },
    {
        proNombre: 'Port Hedland',
        deptoId: 156
    },
    {
        proNombre: 'Rockingham',
        deptoId: 156
    },
    {
        proNombre: 'Roebourne',
        deptoId: 156
    },
    {
        proNombre: 'Serpentine',
        deptoId: 156
    },
    {
        proNombre: 'South Perth',
        deptoId: 156
    },
    {
        proNombre: 'Stirling',
        deptoId: 156
    },
    {
        proNombre: 'Subiaco',
        deptoId: 156
    },
    {
        proNombre: 'Swan',
        deptoId: 156
    },
    {
        proNombre: 'Victoria Park',
        deptoId: 156
    },
    {
        proNombre: 'Vincent',
        deptoId: 156
    },
    {
        proNombre: 'Wanneroo',
        deptoId: 156
    },
    {
        proNombre: 'Auburn',
        deptoId: 157
    },
    {
        proNombre: 'Bankstown',
        deptoId: 157
    },
    {
        proNombre: 'Blacktown',
        deptoId: 157
    },
    {
        proNombre: 'Blue Mountains',
        deptoId: 157
    },
    {
        proNombre: 'Campbelltown',
        deptoId: 157
    },
    {
        proNombre: 'Canada Bay',
        deptoId: 157
    },
    {
        proNombre: 'Canterbury',
        deptoId: 157
    },
    {
        proNombre: 'Coffs Harbour',
        deptoId: 157
    },
    {
        proNombre: 'Fairfield',
        deptoId: 157
    },
    {
        proNombre: 'Gosford',
        deptoId: 157
    },
    {
        proNombre: 'Hawkesbury Heights',
        deptoId: 157
    },
    {
        proNombre: 'Holroyd',
        deptoId: 157
    },
    {
        proNombre: 'Hornsby',
        deptoId: 157
    },
    {
        proNombre: 'Hurstville',
        deptoId: 157
    },
    {
        proNombre: 'Ku-ring-gai',
        deptoId: 157
    },
    {
        proNombre: 'Lake Macquarie',
        deptoId: 157
    },
    {
        proNombre: 'Liverpool',
        deptoId: 157
    },
    {
        proNombre: 'Maitland',
        deptoId: 157
    },
    {
        proNombre: 'Marrickville',
        deptoId: 157
    },
    {
        proNombre: 'Newcastle',
        deptoId: 157
    },
    {
        proNombre: 'North Sydney',
        deptoId: 157
    },
    {
        proNombre: 'Parramatta',
        deptoId: 157
    },
    {
        proNombre: 'Penrith',
        deptoId: 157
    },
    {
        proNombre: 'Port Macquarie',
        deptoId: 157
    },
    {
        proNombre: 'Port Stephens',
        deptoId: 157
    },
    {
        proNombre: 'Randwick',
        deptoId: 157
    },
    {
        proNombre: 'Rockdale',
        deptoId: 157
    },
    {
        proNombre: 'Ryde',
        deptoId: 157
    },
    {
        proNombre: 'Seven Hills',
        deptoId: 157
    },
    {
        proNombre: 'Shellharbour',
        deptoId: 157
    },
    {
        proNombre: 'Shoalhaven Heads',
        deptoId: 157
    },
    {
        proNombre: 'Sídney',
        deptoId: 157
    },
    {
        proNombre: 'Sutherland',
        deptoId: 157
    },
    {
        proNombre: 'Tweed',
        deptoId: 157
    },
    {
        proNombre: 'Wagga Wagga',
        deptoId: 157
    },
    {
        proNombre: 'Warringah',
        deptoId: 157
    },
    {
        proNombre: 'Waverley',
        deptoId: 157
    },
    {
        proNombre: 'Willoughby',
        deptoId: 157
    },
    {
        proNombre: 'Wollongong',
        deptoId: 157
    },
    {
        proNombre: 'Wyong',
        deptoId: 157
    },
    {
        proNombre: 'Balonne',
        deptoId: 158
    },
    {
        proNombre: 'Banana',
        deptoId: 158
    },
    {
        proNombre: 'Brisbane',
        deptoId: 158
    },
    {
        proNombre: 'Bundaberg',
        deptoId: 158
    },
    {
        proNombre: 'Burdekin',
        deptoId: 158
    },
    {
        proNombre: 'Cairns',
        deptoId: 158
    },
    {
        proNombre: 'Cassowary Coast',
        deptoId: 158
    },
    {
        proNombre: 'Central Highlands',
        deptoId: 158
    },
    {
        proNombre: 'Cook',
        deptoId: 158
    },
    {
        proNombre: 'Fraser Coast',
        deptoId: 158
    },
    {
        proNombre: 'Gladstone',
        deptoId: 158
    },
    {
        proNombre: 'Gold Coast',
        deptoId: 158
    },
    {
        proNombre: 'Goondiwindi',
        deptoId: 158
    },
    {
        proNombre: 'Gympie',
        deptoId: 158
    },
    {
        proNombre: 'Hinchinbrook Island',
        deptoId: 158
    },
    {
        proNombre: 'Ipswich',
        deptoId: 158
    },
    {
        proNombre: 'Isaac',
        deptoId: 158
    },
    {
        proNombre: 'Lockyer Valley',
        deptoId: 158
    },
    {
        proNombre: 'Logan',
        deptoId: 158
    },
    {
        proNombre: 'Longreach',
        deptoId: 158
    },
    {
        proNombre: 'Mackay',
        deptoId: 158
    },
    {
        proNombre: 'Maranoa',
        deptoId: 158
    },
    {
        proNombre: 'Moreton Bay',
        deptoId: 158
    },
    {
        proNombre: 'Mount Isa',
        deptoId: 158
    },
    {
        proNombre: 'Murweh',
        deptoId: 158
    },
    {
        proNombre: 'North Burnett',
        deptoId: 158
    },
    {
        proNombre: 'Redland',
        deptoId: 158
    },
    {
        proNombre: 'Rockhampton',
        deptoId: 158
    },
    {
        proNombre: 'Scenic Rim',
        deptoId: 158
    },
    {
        proNombre: 'Somerset',
        deptoId: 158
    },
    {
        proNombre: 'South Burnett',
        deptoId: 158
    },
    {
        proNombre: 'Southern Downs',
        deptoId: 158
    },
    {
        proNombre: 'Sunshine Coast',
        deptoId: 158
    },
    {
        proNombre: 'Tablelands',
        deptoId: 158
    },
    {
        proNombre: 'Toowoomba',
        deptoId: 158
    },
    {
        proNombre: 'Torres Strait Islands',
        deptoId: 158
    },
    {
        proNombre: 'Townsville',
        deptoId: 158
    },
    {
        proNombre: 'Western Downs',
        deptoId: 158
    },
    {
        proNombre: 'Whitsunday',
        deptoId: 158
    },
    {
        proNombre: 'Ballarat',
        deptoId: 159
    },
    {
        proNombre: 'Banyule',
        deptoId: 159
    },
    {
        proNombre: 'Bayside',
        deptoId: 159
    },
    {
        proNombre: 'Bendigo',
        deptoId: 159
    },
    {
        proNombre: 'Boroondara',
        deptoId: 159
    },
    {
        proNombre: 'Brimbank',
        deptoId: 159
    },
    {
        proNombre: 'Cardinia',
        deptoId: 159
    },
    {
        proNombre: 'Casey',
        deptoId: 159
    },
    {
        proNombre: 'Dandenong',
        deptoId: 159
    },
    {
        proNombre: 'Darebin',
        deptoId: 159
    },
    {
        proNombre: 'East Gippsland',
        deptoId: 159
    },
    {
        proNombre: 'Frankston',
        deptoId: 159
    },
    {
        proNombre: 'Glen Eira',
        deptoId: 159
    },
    {
        proNombre: 'Greater Geelong',
        deptoId: 159
    },
    {
        proNombre: 'Greater Shepparton',
        deptoId: 159
    },
    {
        proNombre: 'Hobsons Bay',
        deptoId: 159
    },
    {
        proNombre: 'Hume Lake',
        deptoId: 159
    },
    {
        proNombre: 'Kingston',
        deptoId: 159
    },
    {
        proNombre: 'Knox',
        deptoId: 159
    },
    {
        proNombre: 'Latrobe',
        deptoId: 159
    },
    {
        proNombre: 'Macedon Ranges',
        deptoId: 159
    },
    {
        proNombre: 'Manningham',
        deptoId: 159
    },
    {
        proNombre: 'Maribyrnong',
        deptoId: 159
    },
    {
        proNombre: 'Maroondah',
        deptoId: 159
    },
    {
        proNombre: 'Melbourne',
        deptoId: 159
    },
    {
        proNombre: 'Melton',
        deptoId: 159
    },
    {
        proNombre: 'Mildura',
        deptoId: 159
    },
    {
        proNombre: 'Monash',
        deptoId: 159
    },
    {
        proNombre: 'Moonee Valley',
        deptoId: 159
    },
    {
        proNombre: 'Moreland',
        deptoId: 159
    },
    {
        proNombre: 'Nillumbik',
        deptoId: 159
    },
    {
        proNombre: 'Península de Mornington',
        deptoId: 159
    },
    {
        proNombre: 'Port Phillip',
        deptoId: 159
    },
    {
        proNombre: 'Reefton',
        deptoId: 159
    },
    {
        proNombre: 'Toorak',
        deptoId: 159
    },
    {
        proNombre: 'Wellington',
        deptoId: 159
    },
    {
        proNombre: 'Whitehorse',
        deptoId: 159
    },
    {
        proNombre: 'Whittlesea',
        deptoId: 159
    },
    {
        proNombre: 'Wyndham',
        deptoId: 159
    },
    {
        proNombre: 'Yarra Glen',
        deptoId: 159
    },
    {
        proNombre: "Break O'Day",
        deptoId: 160
    },
    {
        proNombre: 'Brighton',
        deptoId: 160
    },
    {
        proNombre: 'Burnie',
        deptoId: 160
    },
    {
        proNombre: 'Central Coast',
        deptoId: 160
    },
    {
        proNombre: 'Central Highlands',
        deptoId: 160
    },
    {
        proNombre: 'Circular Head',
        deptoId: 160
    },
    {
        proNombre: 'Clarence',
        deptoId: 160
    },
    {
        proNombre: 'Derwent Valley',
        deptoId: 160
    },
    {
        proNombre: 'Devonport',
        deptoId: 160
    },
    {
        proNombre: 'Dorset',
        deptoId: 160
    },
    {
        proNombre: 'George Town',
        deptoId: 160
    },
    {
        proNombre: 'Glamorgan Spring Bay',
        deptoId: 160
    },
    {
        proNombre: 'Glenorchy',
        deptoId: 160
    },
    {
        proNombre: 'Hobart',
        deptoId: 160
    },
    {
        proNombre: 'Huon Valley',
        deptoId: 160
    },
    {
        proNombre: 'Isla de Flinders',
        deptoId: 160
    },
    {
        proNombre: 'Kentish',
        deptoId: 160
    },
    {
        proNombre: 'Kingborough',
        deptoId: 160
    },
    {
        proNombre: 'King Island',
        deptoId: 160
    },
    {
        proNombre: 'Latrobe',
        deptoId: 160
    },
    {
        proNombre: 'Launceston',
        deptoId: 160
    },
    {
        proNombre: 'Meander Valley',
        deptoId: 160
    },
    {
        proNombre: 'Northern Midlands',
        deptoId: 160
    },
    {
        proNombre: 'Sorell',
        deptoId: 160
    },
    {
        proNombre: 'Southern Midlands',
        deptoId: 160
    },
    {
        proNombre: 'Tasman',
        deptoId: 160
    },
    {
        proNombre: 'West Coast',
        deptoId: 160
    },
    {
        proNombre: 'West Tamar',
        deptoId: 160
    },
    {
        proNombre: 'Wynyard',
        deptoId: 160
    },
    {
        proNombre: 'Canberra',
        deptoId: 161
    },
    {
        proNombre: 'Alice Springs',
        deptoId: 162
    },
    {
        proNombre: 'Barkly',
        deptoId: 162
    },
    {
        proNombre: 'Belyuen',
        deptoId: 162
    },
    {
        proNombre: 'Central Desert',
        deptoId: 162
    },
    {
        proNombre: 'Coomalie Creek',
        deptoId: 162
    },
    {
        proNombre: 'Darwin',
        deptoId: 162
    },
    {
        proNombre: 'East Arnhem',
        deptoId: 162
    },
    {
        proNombre: 'Katherine',
        deptoId: 162
    },
    {
        proNombre: 'Litchfield',
        deptoId: 162
    },
    {
        proNombre: 'MacDonnell',
        deptoId: 162
    },
    {
        proNombre: 'Palmerston',
        deptoId: 162
    },
    {
        proNombre: 'Roper Gulf',
        deptoId: 162
    },
    {
        proNombre: 'Tiwi Islands',
        deptoId: 162
    },
    {
        proNombre: 'Victoria River-Daly',
        deptoId: 162
    },
    {
        proNombre: 'Wagait',
        deptoId: 162
    },
    {
        proNombre: 'West Arnhem',
        deptoId: 162
    },
    {
        proNombre: 'Xirdalan',
        deptoId: 163
    },
    {
        proNombre: 'Aghjabadi',
        deptoId: 164
    },
    {
        proNombre: 'Lerik',
        deptoId: 164
    },
    {
        proNombre: 'Shaki',
        deptoId: 164
    },
    {
        proNombre: 'Tovuz',
        deptoId: 164
    },
    {
        proNombre: 'Yevlakh',
        deptoId: 164
    },
    {
        proNombre: 'Ağsu',
        deptoId: 165
    },
    {
        proNombre: 'İsmayıllı',
        deptoId: 165
    },
    {
        proNombre: 'Qobustan',
        deptoId: 165
    },
    {
        proNombre: 'Şamaxı',
        deptoId: 165
    },
    {
        proNombre: 'Qazax',
        deptoId: 166
    },
    {
        proNombre: 'Kəlbəcər RRQ',
        deptoId: 167
    },
    {
        proNombre: 'Laçın RRQ',
        deptoId: 167
    },
    {
        proNombre: 'Qubadlı RRQ',
        deptoId: 167
    },
    {
        proNombre: 'Zəngilan RRQ',
        deptoId: 167
    },
    {
        proNombre: 'Lankaran',
        deptoId: 168
    },
    {
        proNombre: 'Babek Rayonu (Babək)',
        deptoId: 169
    },
    {
        proNombre: 'Julfa Rayonu (Culfa)',
        deptoId: 169
    },
    {
        proNombre: 'Kangarli Rayonu (Kəngərli)',
        deptoId: 169
    },
    {
        proNombre: 'Ordubad Rayonu (Ordubad)',
        deptoId: 169
    },
    {
        proNombre: 'Sadarak Rayonu (Sədərək)',
        deptoId: 169
    },
    {
        proNombre: 'Shahbuz Rayonu (Şahbuz)',
        deptoId: 169
    },
    {
        proNombre: 'Sharur Rayonu (Şərur)',
        deptoId: 169
    },
    {
        proNombre: 'Dəvəçi',
        deptoId: 170
    },
    {
        proNombre: 'Quba',
        deptoId: 170
    },
    {
        proNombre: 'Qusar',
        deptoId: 170
    },
    {
        proNombre: 'Siyəzən',
        deptoId: 170
    },
    {
        proNombre: 'Xaçmaz',
        deptoId: 170
    },
    {
        proNombre: 'Balakən',
        deptoId: 171
    },
    {
        proNombre: 'Oğuz',
        deptoId: 171
    },
    {
        proNombre: 'Qəbələ',
        deptoId: 171
    },
    {
        proNombre: 'Qax',
        deptoId: 171
    },
    {
        proNombre: 'Şəki',
        deptoId: 171
    },
    {
        proNombre: 'Zaqatala',
        deptoId: 171
    },
    {
        proNombre: 'Nagorno-Karabakh',
        deptoId: 172
    },
    {
        proNombre: 'Acklins',
        deptoId: 173
    },
    {
        proNombre: 'Great Harbour Cay',
        deptoId: 174
    },
    {
        proNombre: 'Bimini del Norte',
        deptoId: 175
    },
    {
        proNombre: 'Bimini del Sur',
        deptoId: 175
    },
    {
        proNombre: 'Placer de los Roques',
        deptoId: 175
    },
    {
        proNombre: 'Black No',
        deptoId: 176
    },
    {
        proNombre: "Farmer's Cay",
        deptoId: 176
    },
    {
        proNombre: 'Staniel Cay',
        deptoId: 176
    },
    {
        proNombre: 'Mount Alvernia',
        deptoId: 177
    },
    {
        proNombre: 'Marsh Harbour',
        deptoId: 178
    },
    {
        proNombre: 'Andros',
        deptoId: 179
    },
    {
        proNombre: 'Isla Eleuthera',
        deptoId: 180
    },
    {
        proNombre: 'Freeport',
        deptoId: 181
    },
    {
        proNombre: 'Coronel Hill',
        deptoId: 182
    },
    {
        proNombre: 'High Rock',
        deptoId: 183
    },
    {
        proNombre: 'Rocky Creek',
        deptoId: 183
    },
    {
        proNombre: 'Pelican Point',
        deptoId: 183
    },
    {
        proNombre: 'Gambier Point',
        deptoId: 183
    },
    {
        proNombre: 'Sweeting Cay',
        deptoId: 183
    },
    {
        proNombre: 'George Town',
        deptoId: 184
    },
    {
        proNombre: 'Cayo Grande',
        deptoId: 185
    },
    {
        proNombre: 'Dunmore City',
        deptoId: 186
    },
   {
       proNombre: 'Hope Town',
       deptoId: 187
   },
   {
       proNombre: 'Inagua',
       deptoId: 188
   },
   {
       proNombre: 'Clarence City',
       deptoId: 189
   },
   {
       proNombre: 'Burnt Rock',
       deptoId: 190
   },
   {
       proNombre: 'Dorsette',
       deptoId: 190
   },
   {
       proNombre: 'Grants',
       deptoId: 190
   },
   {
       proNombre: 'Lisbon Creek',
       deptoId: 190
   },
   {
       proNombre: 'Moxey Town',
       deptoId: 190
   },
   {
       proNombre: 'Orange Hilly Victoria Point',
       deptoId: 190
   },
   {
       proNombre: 'Peaks',
       deptoId: 190
   },
   {
       proNombre: 'Pinders',
       deptoId: 190
   },
   {
       proNombre: 'Swains',
       deptoId: 190
   },
   {
       proNombre: 'Bahía de Abraham',
       deptoId: 191
   },
   {
       proNombre: 'Bahía Betsy',
       deptoId: 191
   },
   {
       proNombre: 'Pozo del Pirata',
       deptoId: 191
   },
   {
       proNombre: 'Hard Bargain',
       deptoId: 192
   },
   {
       proNombre: 'Ábaco Norte',
       deptoId: 193
   },
   {
       proNombre: 'Andros Norte',
       deptoId: 194
   },
   {
       proNombre: 'Eleuthera Norte',
       deptoId: 195
   },
   {
       proNombre: 'Duncan',
       deptoId: 196
   },
   {
       proNombre: 'Cayo Rum',
       deptoId: 197
   },
   {
       proNombre: 'Cockburn Town',
       deptoId: 198
   },
   {
       proNombre: 'Ábaco Sur',
       deptoId: 199
   },
   {
       proNombre: 'Andros Sur',
       deptoId: 200
   },
   {
       proNombre: 'Eleuthera Sur',
       deptoId: 201
   },
   {
       proNombre: 'Spanish Wells',
       deptoId: 202
   },
   {
       proNombre: 'West Grand Bahama',
       deptoId: 203
   },
   {
       proNombre: 'Nueva Providencia',
       deptoId: 204
   },
   {
       proNombre: 'Placer de los Roques',
       deptoId: 205
   },
   {
       proNombre: 'Barguna',
       deptoId: 206
   },
   {
       proNombre: 'Barisal',
       deptoId: 206
   },
   {
       proNombre: 'Bhola',
       deptoId: 206
   },
   {
       proNombre: 'Jhalakati',
       deptoId: 206
   },
   {
       proNombre: 'Patuakhali',
       deptoId: 206
   },
   {
       proNombre: 'Pirojpur',
       deptoId: 206
   },
   {
       proNombre: 'Bandarban',
       deptoId: 207
   },
   {
       proNombre: 'Brahmanbaria',
       deptoId: 207
   },
   {
       proNombre: 'Chandpur',
       deptoId: 207
   },
   {
       proNombre: 'Chittagong',
       deptoId: 207
   },
   {
       proNombre: 'Comilla',
       deptoId: 207
   },
   {
       proNombre: "Cox's Bazar",
       deptoId: 207
   },
   {
       proNombre: 'Feni',
       deptoId: 207
   },
   {
       proNombre: 'Khagrachari',
       deptoId: 207
   },
   {
       proNombre: 'Lakshmipur',
       deptoId: 207
   },
   {
       proNombre: 'Noakhali',
       deptoId: 207
   },
   {
       proNombre: 'Rangamati',
       deptoId: 207
   },
   {
       proNombre: 'Dhaka',
       deptoId: 208
   },
   {
       proNombre: 'Gazipur',
       deptoId: 208
   },
   {
       proNombre: 'Narsingdi',
       deptoId: 208
   },
   {
       proNombre: 'Manikganj',
       deptoId: 208
   },
   {
       proNombre: 'Munshiganj',
       deptoId: 208
   },
   {
       proNombre: 'Narayanganj',
       deptoId: 208
   },
   {
       proNombre: 'Kishoreganj',
       deptoId: 208
   },
   {
       proNombre: 'Tangail',
       deptoId: 208
   },
   {
       proNombre: 'Faridpur',
       deptoId: 208
   },
   {
       proNombre: 'Maradipur',
       deptoId: 208
   },
   {
       proNombre: 'Shariatpur',
       deptoId: 208
   },
   {
       proNombre: 'Rajbari',
       deptoId: 208
   },
   {
       proNombre: 'Gopalganj',
       deptoId: 208
   },
   {
       proNombre: 'Bagerhat',
       deptoId: 209
   },
   {
       proNombre: 'Chuadanga',
       deptoId: 209
   },
   {
       proNombre: 'Jessore',
       deptoId: 209
   },
   {
       proNombre: 'Jessore',
       deptoId: 209
   },
   {
       proNombre: 'Khulna',
       deptoId: 209
   },
   {
       proNombre: 'Kushtia',
       deptoId: 209
   },
   {
       proNombre: 'Magura',
       deptoId: 209
   },
   {
       proNombre: 'Meherpur',
       deptoId: 209
   },
   {
       proNombre: 'Narail',
       deptoId: 209
   },
   {
       proNombre: 'Shatkhira',
       deptoId: 209
   },
   {
       proNombre: 'Bogra',
       deptoId: 210
   },
   {
       proNombre: 'Jaipurhat',
       deptoId: 210
   },
   {
       proNombre: 'Naogaon',
       deptoId: 210
   },
   {
       proNombre: 'Natore',
       deptoId: 210
   },
   {
       proNombre: 'Nawabganj',
       deptoId: 210
   },
   {
       proNombre: 'Pabna',
       deptoId: 210
   },
   {
       proNombre: 'Rajshahi',
       deptoId: 210
   },
   {
       proNombre: 'Sirajganj',
       deptoId: 210
   },
   {
       proNombre: 'Dinajpur',
       deptoId: 211
   },
   {
       proNombre: 'Kurigram',
       deptoId: 211
   },
   {
       proNombre: 'Gaibandha',
       deptoId: 211
   },
   {
       proNombre: 'Nilphamari',
       deptoId: 211
   },
   {
       proNombre: 'Panchagarh',
       deptoId: 211
   },
   {
       proNombre: 'Thakurgaon',
       deptoId: 211
   },
   {
       proNombre: 'Lalmonirhat',
       deptoId: 211
   },
   {
       proNombre: 'Habiganj',
       deptoId: 212
   },
   {
       proNombre: 'Maulvi Bazar',
       deptoId: 212
   },
   {
       proNombre: 'Sunamganj',
       deptoId: 212
   },
   {
       proNombre: 'Sylhet',
       deptoId: 212
   },
   {
       proNombre: 'Hastings',
       deptoId: 213
   },
   {
       proNombre: 'Oistins',
       deptoId: 213
   },
   {
       proNombre: 'Baxters',
       deptoId: 214
   },
   {
       proNombre: 'Belleplaine',
       deptoId: 214
   },
   {
       proNombre: 'Benab',
       deptoId: 214
   },
   {
       proNombre: 'Breedy’s',
       deptoId: 214
   },
   {
       proNombre: 'Bruce Vale',
       deptoId: 214
   },
   {
       proNombre: 'Cleland',
       deptoId: 214
   },
   {
       proNombre: 'Greenland',
       deptoId: 214
   },
   {
       proNombre: 'Gregg Farm',
       deptoId: 214
   },
   {
       proNombre: 'Hoytes',
       deptoId: 214
   },
   {
       proNombre: 'Indian Ground',
       deptoId: 214
   },
   {
       proNombre: 'Lakes',
       deptoId: 214
   },
   {
       proNombre: 'Less Beholden',
       deptoId: 214
   },
   {
       proNombre: 'Mangrove',
       deptoId: 214
   },
   {
       proNombre: 'Saint Andrews',
       deptoId: 214
   },
   {
       proNombre: 'Shorey',
       deptoId: 214
   },
   {
       proNombre: 'Swanns',
       deptoId: 214
   },
   {
       proNombre: 'Turners Hall',
       deptoId: 214
   },
   {
       proNombre: 'Welch Town',
       deptoId: 214
   },
   {
       proNombre: 'White Hill',
       deptoId: 214
   },
   {
       proNombre: 'Windy Hill',
       deptoId: 214
   },
   {
       proNombre: 'The Glebe',
       deptoId: 215
   },
   {
       proNombre: 'Holetown',
       deptoId: 216
   },
   {
       proNombre: 'Saint John',
       deptoId: 217
   },
   {
       proNombre: 'Bathsheba',
       deptoId: 218
   },
   {
       proNombre: 'Checker Hall',
       deptoId: 219
   },
   {
       proNombre: 'Bridgetown',
       deptoId: 220
   },
   {
       proNombre: 'Speightstown',
       deptoId: 221
   },
   {
       proNombre: 'Six Cross Roads',
       deptoId: 222
   },
   {
       proNombre: 'Sturges',
       deptoId: 223
   },
   {
       proNombre: 'Manama',
       deptoId: 224
   },
   {
       proNombre: 'Al Mintaqah al Wusta',
       deptoId: 225
   },
   {
       proNombre: "Ar Rifa' wa al Mintaqah al Janubiyah",
       deptoId: 225
   },
   {
       proNombre: "Madinat 'Isa",
       deptoId: 225
   },
   {
       proNombre: 'Sitrah',
       deptoId: 225
   },
   {
       proNombre: 'Al Hidd',
       deptoId: 226
   },
   {
       proNombre: 'Al Muharraq',
       deptoId: 226
   },
   {
       proNombre: 'Al Mintaqah al Gharbiyah',
       deptoId: 227
   },
   {
       proNombre: 'Al Mintaqah al Wusta',
       deptoId: 227
   },
   {
       proNombre: 'Al Mintaqah al Shamaliyah',
       deptoId: 227
   },
   {
       proNombre: 'Jidhafs',
       deptoId: 227
   },
   {
       proNombre: 'Madinat Hamad',
       deptoId: 227
   },
   {
       proNombre: 'Al Mintaqah al Gharbiyah',
       deptoId: 228
   },
   {
       proNombre: "Ar Rifa' wa al Mintaqah al Janubiyah",
       deptoId: 228
   },
   {
       proNombre: 'Juzur Hawar',
       deptoId: 228
   },
   {
       proNombre: 'Anderlecht',
       deptoId: 229
   },
   {
       proNombre: 'Auderghem',
       deptoId: 229
   },
   {
       proNombre: 'Berchem-Sainte-Agathe',
       deptoId: 229
   },
   {
       proNombre: 'Saint-Josse-ten-Noode',
       deptoId: 229
   },
   {
       proNombre: 'Etterbeek',
       deptoId: 229
   },
   {
       proNombre: 'Evere',
       deptoId: 229
   },
   {
       proNombre: 'Koekelberg',
       deptoId: 229
   },
   {
       proNombre: 'Ganshoren',
       deptoId: 229
   },
   {
       proNombre: 'Ixelles',
       deptoId: 229
   },
   {
       proNombre: 'Jette',
       deptoId: 229
   },
   {
       proNombre: 'Forest',
       deptoId: 229
   },
   {
       proNombre: 'Molenbeek-Saint-Jean',
       deptoId: 229
   },
   {
       proNombre: 'Saint-Gilles',
       deptoId: 229
   },
   {
       proNombre: 'Bruselas',
       deptoId: 229
   },
   {
       proNombre: 'Schaerbeek',
       deptoId: 229
   },
   {
       proNombre: 'Uccle',
       deptoId: 229
   },
   {
       proNombre: 'Watermaal-Bosvoorde',
       deptoId: 229
   },
   {
       proNombre: 'Woluwe-Saint-Lambert',
       deptoId: 229
   },
   {
       proNombre: 'Woluwe-Saint-Pierre',
       deptoId: 229
   },
   {
       proNombre: 'Amberes',
       deptoId: 230
   },
   {
       proNombre: 'Limburgo',
       deptoId: 230
   },
   {
       proNombre: 'Flandes Oriental',
       deptoId: 230
   },
   {
       proNombre: 'Brabante Flamenco',
       deptoId: 230
   },
   {
       proNombre: 'Flandes Occidental',
       deptoId: 230
   },
   {
       proNombre: 'Brabante Valón',
       deptoId: 231
   },
   {
       proNombre: 'Henao',
       deptoId: 231
   },
   {
       proNombre: 'Lieja',
       deptoId: 231
   },
   {
       proNombre: 'Luxemburgo',
       deptoId: 231
   },
   {
       proNombre: 'Namur',
       deptoId: 231
   },
   {
       proNombre: 'Ciudad de Belice',
       deptoId: 232
   },
   {
       proNombre: 'Albaina',
       deptoId: 233
   },
   {
       proNombre: 'Arenal',
       deptoId: 233
   },
   {
       proNombre: 'Belmopán',
       deptoId: 233
   },
   {
       proNombre: 'Benque Viejo del Carmen',
       deptoId: 233
   },
   {
       proNombre: 'Buena Vista',
       deptoId: 233
   },
   {
       proNombre: 'Bullet Tree Falls',
       deptoId: 233
   },
   {
       proNombre: 'Calla Creek',
       deptoId: 233
   },
   {
       proNombre: 'Chorro',
       deptoId: 233
   },
   {
       proNombre: 'Dry Creek Bank',
       deptoId: 233
   },
   {
       proNombre: "Garbutt's Falls",
       deptoId: 233
   },
   {
       proNombre: 'Providencien',
       deptoId: 233
   },
   {
       proNombre: 'Roaring Creek',
       deptoId: 233
   },
   {
       proNombre: 'San Antonio',
       deptoId: 233
   },
   {
       proNombre: 'San Ignacio',
       deptoId: 233
   },
   {
       proNombre: 'San José Succotz',
       deptoId: 233
   },
   {
       proNombre: 'Spanish Lookout',
       deptoId: 233
   },
   {
       proNombre: "St. Margret's",
       deptoId: 233
   },
   {
       proNombre: 'Toro',
       deptoId: 233
   },
   {
       proNombre: 'Vaca',
       deptoId: 233
   },
   {
       proNombre: 'Valle de Paz',
       deptoId: 233
   },
   {
       proNombre: 'Benque Viejo',
       deptoId: 234
   },
   {
       proNombre: 'Calcutta',
       deptoId: 234
   },
   {
       proNombre: 'Campa Pita',
       deptoId: 234
   },
   {
       proNombre: 'Chacan Chac Mol',
       deptoId: 234
   },
   {
       proNombre: 'Chan Chen',
       deptoId: 234
   },
   {
       proNombre: 'Chunch',
       deptoId: 234
   },
   {
       proNombre: 'Chunox',
       deptoId: 234
   },
   {
       proNombre: 'Cocos',
       deptoId: 234
   },
   {
       proNombre: 'Consejo',
       deptoId: 234
   },
   {
       proNombre: 'Copper Bank',
       deptoId: 234
   },
   {
       proNombre: 'Corozalito',
       deptoId: 234
   },
   {
       proNombre: 'Cowpen,',
       deptoId: 234
   },
   {
       proNombre: 'Estero',
       deptoId: 234
   },
   {
       proNombre: 'Laguna',
       deptoId: 234
   },
   {
       proNombre: 'Libertad',
       deptoId: 234
   },
   {
       proNombre: 'Little Belize',
       deptoId: 234
   },
   {
       proNombre: 'Louisville',
       deptoId: 234
   },
   {
       proNombre: 'Paraíso',
       deptoId: 234
   },
   {
       proNombre: 'Patchacan',
       deptoId: 234
   },
   {
       proNombre: 'Progreso',
       deptoId: 234
   },
   {
       proNombre: 'Puebla Nueva',
       deptoId: 234
   },
   {
       proNombre: 'Ranchito',
       deptoId: 234
   },
   {
       proNombre: 'Remate',
       deptoId: 234
   },
   {
       proNombre: 'San Joaquín',
       deptoId: 234
   },
   {
       proNombre: 'Saltillo',
       deptoId: 234
   },
   {
       proNombre: 'Sarteneja',
       deptoId: 234
   },
   {
       proNombre: 'Shipstern',
       deptoId: 234
   },
   {
       proNombre: 'Tacistal',
       deptoId: 234
   },
   {
       proNombre: 'Xaibe',
       deptoId: 234
   },
   {
       proNombre: 'Xcanluum',
       deptoId: 234
   },
   {
       proNombre: 'August Pine Ridge',
       deptoId: 235
   },
   {
       proNombre: 'Blue Creek Village',
       deptoId: 235
   },
   {
       proNombre: 'Carmelita',
       deptoId: 235
   },
   {
       proNombre: 'Esperanza',
       deptoId: 235
   },
   {
       proNombre: 'Indian Church',
       deptoId: 235
   },
   {
       proNombre: 'Guinea Grass Town',
       deptoId: 235
   },
   {
       proNombre: 'Little Bermudian Landing',
       deptoId: 235
   },
   {
       proNombre: 'Piedregal',
       deptoId: 235
   },
   {
       proNombre: 'Ramonal',
       deptoId: 235
   },
   {
       proNombre: 'Rancho',
       deptoId: 235
   },
   {
       proNombre: 'Rejolla',
       deptoId: 235
   },
   {
       proNombre: 'San Antonio',
       deptoId: 235
   },
   {
       proNombre: 'San Carlos',
       deptoId: 235
   },
   {
       proNombre: 'San Esteban',
       deptoId: 235
   },
   {
       proNombre: 'San Felipe',
       deptoId: 235
   },
   {
       proNombre: 'San José',
       deptoId: 235
   },
   {
       proNombre: 'San Juan Bank',
       deptoId: 235
   },
   {
       proNombre: 'San Lázaro',
       deptoId: 235
   },
   {
       proNombre: 'San Pablo',
       deptoId: 235
   },
   {
       proNombre: 'San Román',
       deptoId: 235
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 235
   },
   {
       proNombre: 'Shipyard',
       deptoId: 235
   },
   {
       proNombre: 'Trial Farm',
       deptoId: 235
   },
   {
       proNombre: 'Trinidad',
       deptoId: 235
   },
   {
       proNombre: 'Vaqueros',
       deptoId: 235
   },
   {
       proNombre: 'Wamil',
       deptoId: 235
   },
   {
       proNombre: 'Warrie Camp',
       deptoId: 235
   },
   {
       proNombre: 'Xcanha',
       deptoId: 235
   },
   {
       proNombre: 'Yo Creek',
       deptoId: 235
   },
   {
       proNombre: 'Alta Vista',
       deptoId: 236
   },
   {
       proNombre: 'Big Creek',
       deptoId: 236
   },
   {
       proNombre: 'Commerce Bight',
       deptoId: 236
   },
   {
       proNombre: 'Dancing Pool',
       deptoId: 236
   },
   {
       proNombre: 'Garífuna',
       deptoId: 236
   },
   {
       proNombre: 'Georgetown',
       deptoId: 236
   },
   {
       proNombre: 'Guana Church Bank',
       deptoId: 236
   },
   {
       proNombre: 'High Sand',
       deptoId: 236
   },
   {
       proNombre: 'Hopkins',
       deptoId: 236
   },
   {
       proNombre: 'Independence and Mango Creek',
       deptoId: 236
   },
   {
       proNombre: 'Kendal',
       deptoId: 236
   },
   {
       proNombre: 'Lagarto Bank',
       deptoId: 236
   },
   {
       proNombre: 'Maya Mopan',
       deptoId: 236
   },
   {
       proNombre: 'Middle Bank',
       deptoId: 236
   },
   {
       proNombre: 'Middlesex',
       deptoId: 236
   },
   {
       proNombre: 'Mullins River',
       deptoId: 236
   },
   {
       proNombre: 'New Home',
       deptoId: 236
   },
   {
       proNombre: 'Placencia',
       deptoId: 236
   },
   {
       proNombre: 'Pomona,',
       deptoId: 236
   },
   {
       proNombre: 'Quarry Hill',
       deptoId: 236
   },
   {
       proNombre: 'Rancho Grande',
       deptoId: 236
   },
   {
       proNombre: 'Red Bank',
       deptoId: 236
   },
   {
       proNombre: 'Regalía',
       deptoId: 236
   },
   {
       proNombre: 'Sarawina',
       deptoId: 236
   },
   {
       proNombre: 'Silver Creek Camp',
       deptoId: 236
   },
   {
       proNombre: 'Sittee',
       deptoId: 236
   },
   {
       proNombre: 'Punta Gorda',
       deptoId: 237
   },
   {
       proNombre: 'Silver Creek',
       deptoId: 237
   },
   {
       proNombre: 'Banikoara',
       deptoId: 238
   },
   {
       proNombre: 'Gogounou',
       deptoId: 238
   },
   {
       proNombre: 'Kandi',
       deptoId: 238
   },
   {
       proNombre: 'Karimama',
       deptoId: 238
   },
   {
       proNombre: 'Malanville',
       deptoId: 238
   },
   {
       proNombre: 'Segbana',
       deptoId: 238
   },
   {
       proNombre: 'Natitingou',
       deptoId: 239
   },
   {
       proNombre: 'Tanguietta',
       deptoId: 239
   },
   {
       proNombre: 'Ouidah',
       deptoId: 240
   },
   {
       proNombre: 'Parakou',
       deptoId: 241
   },
   {
       proNombre: 'Savalou',
       deptoId: 242
   },
   {
       proNombre: '	Djougou',
       deptoId: 243
   },
   {
       proNombre: 'Aplahoué',
       deptoId: 244
   },
   {
       proNombre: 'Cotonú',
       deptoId: 245
   },
   {
       proNombre: 'Lokossa',
       deptoId: 246
   },
   {
       proNombre: 'Porto Novo',
       deptoId: 247
   },
   {
       proNombre: 'Pobè',
       deptoId: 248
   },
   {
       proNombre: 'Abomey',
       deptoId: 249
   },
   {
       proNombre: 'Raión de Baranavičy',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Biaroza',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Brest',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Drahičyn',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Hancavičy',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Ivacevičy',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Janaŭ',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Kamianiec',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Kobryn',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Lachavičy',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Łuniniec',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Małaryta',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Pinsk',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Pružana ',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Stolin',
       deptoId: 250
   },
   {
       proNombre: 'Raión de Žabinka',
       deptoId: 250
   },
   {
       proNombre: 'Frunzenski',
       deptoId: 251
   },
   {
       proNombre: 'Kastrychnitski',
       deptoId: 251
   },
   {
       proNombre: 'Leninski',
       deptoId: 251
   },
   {
       proNombre: 'Maskouski',
       deptoId: 251
   },
   {
       proNombre: 'Partyzanski',
       deptoId: 251
   },
   {
       proNombre: 'Pershamayski',
       deptoId: 251
   },
   {
       proNombre: 'Savetski',
       deptoId: 251
   },
   {
       proNombre: 'Tsentralny',
       deptoId: 251
   },
   {
       proNombre: 'Zavodski',
       deptoId: 251
   },
   {
       proNombre: 'Aktsyabarski',
       deptoId: 252
   },
   {
       proNombre: 'Brahin',
       deptoId: 252
   },
   {
       proNombre: 'Buda-Kashalyowa',
       deptoId: 252
   },
   {
       proNombre: 'Chachersk',
       deptoId: 252
   },
   {
       proNombre: 'Dobrush',
       deptoId: 252
   },
   {
       proNombre: 'Gómel',
       deptoId: 252
   },
   {
       proNombre: 'Joiniki',
       deptoId: 252
   },
   {
       proNombre: 'Kalinkavichy',
       deptoId: 252
   },
   {
       proNombre: 'Karma',
       deptoId: 252
   },
   {
       proNombre: 'Lyelchytsy',
       deptoId: 252
   },
   {
       proNombre: 'Loyew',
       deptoId: 252
   },
   {
       proNombre: 'Mózyr',
       deptoId: 252
   },
   {
       proNombre: 'Naróulia',
       deptoId: 252
   },
   {
       proNombre: 'Petrikov',
       deptoId: 252
   },
   {
       proNombre: 'Rahachow',
       deptoId: 252
   },
   {
       proNombre: 'Rechytsa',
       deptoId: 252
   },
   {
       proNombre: 'Svetlahorsk',
       deptoId: 252
   },
   {
       proNombre: 'Vetka',
       deptoId: 252
   },
   {
       proNombre: 'Yelsk',
       deptoId: 252
   },
   {
       proNombre: 'Žłobin',
       deptoId: 252
   },
   {
       proNombre: 'Zhytkavichy',
       deptoId: 252
   },
   {
       proNombre: 'Raión de Ašmiany',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Astraviec',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Berestovitsa',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Dziatłava',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Grodno',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Iŭje',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Kareličy',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Lida',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Masty',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Navahrudak',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Ščučyn',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Słonim',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Smarhoń',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Śvisłač',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Vaŭkavysk',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Voranava',
       deptoId: 253
   },
   {
       proNombre: 'Raión de Zelva',
       deptoId: 253
   },
   {
       proNombre: 'Asipovichy',
       deptoId: 254
   },
   {
       proNombre: 'Bialynichy',
       deptoId: 254
   },
   {
       proNombre: 'Babruysk',
       deptoId: 254
   },
   {
       proNombre: 'Bychov',
       deptoId: 254
   },
   {
       proNombre: 'Chavusy',
       deptoId: 254
   },
   {
       proNombre: 'Cherykov',
       deptoId: 254
   },
   {
       proNombre: 'Glusk',
       deptoId: 254
   },
   {
       proNombre: 'Gorki',
       deptoId: 254
   },
   {
       proNombre: 'Drybin',
       deptoId: 254
   },
   {
       proNombre: 'Khotsimsk',
       deptoId: 254
   },
   {
       proNombre: 'Kirawsk',
       deptoId: 254
   },
   {
       proNombre: 'Klimavichy',
       deptoId: 254
   },
   {
       proNombre: 'Klichaw',
       deptoId: 254
   },
   {
       proNombre: 'Krasnapolle',
       deptoId: 254
   },
   {
       proNombre: 'Krychov',
       deptoId: 254
   },
   {
       proNombre: 'Kruhlaye',
       deptoId: 254
   },
   {
       proNombre: 'Kastsyukovichy',
       deptoId: 254
   },
   {
       proNombre: 'Maguilov',
       deptoId: 254
   },
   {
       proNombre: 'Mstsislov',
       deptoId: 254
   },
   {
       proNombre: 'Slawharad',
       deptoId: 254
   },
   {
       proNombre: 'Shklov',
       deptoId: 254
   },
   {
       proNombre: 'Raión de Barisov',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Berazino',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Chervyen',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Dzyarzhynsk',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Kapyl',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Kletsk',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Krupki',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Lagoysk',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Lyuban',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Maladzyechna',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Minsk',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Myadzel',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Nesvizh',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Pukhavichy',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Saligorsk',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Slutsk',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Smalyavichy',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Staryadarogui',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Stoŭbtsy',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Uzda',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Valozhyn',
       deptoId: 255
   },
   {
       proNombre: 'Raión de Vileyka',
       deptoId: 255
   },
   {
       proNombre: 'Beshankovichy',
       deptoId: 256
   },
   {
       proNombre: 'Braslov',
       deptoId: 256
   },
   {
       proNombre: 'Chashniki',
       deptoId: 256
   },
   {
       proNombre: 'Dokshytsy',
       deptoId: 256
   },
   {
       proNombre: 'Dubrovna',
       deptoId: 256
   },
   {
       proNombre: 'Garadok',
       deptoId: 256
   },
   {
       proNombre: 'Glybokaye',
       deptoId: 256
   },
   {
       proNombre: 'Lepiel',
       deptoId: 256
   },
   {
       proNombre: 'Liozna',
       deptoId: 256
   },
   {
       proNombre: 'Miory',
       deptoId: 256
   },
   {
       proNombre: 'Orsha',
       deptoId: 256
   },
   {
       proNombre: 'Pastavy',
       deptoId: 256
   },
   {
       proNombre: 'Polotsk',
       deptoId: 256
   },
   {
       proNombre: 'Rasony',
       deptoId: 256
   },
   {
       proNombre: 'Sharkavschina',
       deptoId: 256
   },
   {
       proNombre: 'Shumilina',
       deptoId: 256
   },
   {
       proNombre: 'Senna',
       deptoId: 256
   },
   {
       proNombre: 'Talachin',
       deptoId: 256
   },
   {
       proNombre: 'Ushachi',
       deptoId: 256
   },
   {
       proNombre: 'Vitebsk',
       deptoId: 256
   },
   {
       proNombre: 'Vierhniadzvinsk',
       deptoId: 256
   },
   {
       proNombre: 'Pathein',
       deptoId: 257
   },
   {
       proNombre: 'Bago',
       deptoId: 258
   },
   {
       proNombre: 'Cikha',
       deptoId: 259
   },
   {
       proNombre: 'Hakha',
       deptoId: 259
   },
   {
       proNombre: 'Falam',
       deptoId: 259
   },
   {
       proNombre: 'Kanpalet',
       deptoId: 259
   },
   {
       proNombre: 'Matupi',
       deptoId: 259
   },
   {
       proNombre: 'Mindat',
       deptoId: 259
   },
   {
       proNombre: 'Paletwa',
       deptoId: 259
   },
   {
       proNombre: 'Rihkhuadar',
       deptoId: 259
   },
   {
       proNombre: 'Thantlang',
       deptoId: 259
   },
   {
       proNombre: 'Tiddim',
       deptoId: 259
   },
   {
       proNombre: 'Tonzang',
       deptoId: 259
   },
   {
       proNombre: 'Bhamo',
       deptoId: 260
   },
   {
       proNombre: 'Myitkyina',
       deptoId: 260
   },
   {
       proNombre: 'Bawlake',
       deptoId: 261
   },
   {
       proNombre: 'Kantarawaddy',
       deptoId: 261
   },
   {
       proNombre: 'Kyebogyi',
       deptoId: 261
   },
   {
       proNombre: 'Mong Pai',
       deptoId: 261
   },
   {
       proNombre: 'Distrito de Hpa-an',
       deptoId: 262
   },
   {
       proNombre: 'Distrito de Hpapun',
       deptoId: 262
   },
   {
       proNombre: 'Distrito de Kawkareik',
       deptoId: 262
   },
   {
       proNombre: 'Distrito de Myawaddy',
       deptoId: 262
   },
   {
       proNombre: 'Magwe',
       deptoId: 263
   },
   {
       proNombre: 'Mandalay',
       deptoId: 264
   },
   {
       proNombre: 'Distrito de Mawlamyaing',
       deptoId: 265
   },
   {
       proNombre: 'Distrito de Thaton',
       deptoId: 265
   },
   {
       proNombre: 'Sittwe',
       deptoId: 266
   },
   {
       proNombre: 'Lashio',
       deptoId: 267
   },
   {
       proNombre: 'Taunggyi',
       deptoId: 267
   },
   {
       proNombre: 'Sagaing',
       deptoId: 268
   },
   {
       proNombre: 'Dawei',
       deptoId: 269
   },
   {
       proNombre: 'Rangún',
       deptoId: 270
   },
   {
       proNombre: 'Naypyidaw',
       deptoId: 271
   },
   {
       proNombre: 'Antonio Vaca Díez',
       deptoId: 272
   },
   {
       proNombre: 'Cercado',
       deptoId: 272
   },
   {
       proNombre: 'General José Ballivián Segurola',
       deptoId: 272
   },
   {
       proNombre: 'Iténez',
       deptoId: 272
   },
   {
       proNombre: 'Mamoré',
       deptoId: 272
   },
   {
       proNombre: 'Marbán',
       deptoId: 272
   },
   {
       proNombre: 'Moxos',
       deptoId: 272
   },
   {
       proNombre: 'Yacuma',
       deptoId: 272
   },
   {
       proNombre: 'Belisario Boeto',
       deptoId: 273
   },
   {
       proNombre: 'Hernando Siles',
       deptoId: 273
   },
   {
       proNombre: 'Jaime Zudáñez',
       deptoId: 273
   },
   {
       proNombre: 'Juana Azurduy de Padilla',
       deptoId: 273
   },
   {
       proNombre: 'Luis Calvo',
       deptoId: 273
   },
   {
       proNombre: 'Nor Cinti',
       deptoId: 273
   },
   {
       proNombre: 'Oropeza',
       deptoId: 273
   },
   {
       proNombre: 'Sud Cinti',
       deptoId: 273
   },
   {
       proNombre: 'Tomina',
       deptoId: 273
   },
   {
       proNombre: 'Yamparáez',
       deptoId: 273
   },
   {
       proNombre: 'Arani',
       deptoId: 274
   },
   {
       proNombre: 'Esteban Arce',
       deptoId: 274
   },
   {
       proNombre: 'Arque',
       deptoId: 274
   },
   {
       proNombre: 'Ayopaya',
       deptoId: 274
   },
   {
       proNombre: 'Campero',
       deptoId: 274
   },
   {
       proNombre: 'Capinota',
       deptoId: 274
   },
   {
       proNombre: 'Cercado',
       deptoId: 274
   },
   {
       proNombre: 'Carrasco',
       deptoId: 274
   },
   {
       proNombre: 'Chapare',
       deptoId: 274
   },
   {
       proNombre: 'Germán Jordán',
       deptoId: 274
   },
   {
       proNombre: 'Mizque',
       deptoId: 274
   },
   {
       proNombre: 'Punata',
       deptoId: 274
   },
   {
       proNombre: 'Quillacollo',
       deptoId: 274
   },
   {
       proNombre: 'Tapacarí',
       deptoId: 274
   },
   {
       proNombre: 'Bolívar',
       deptoId: 274
   },
   {
       proNombre: 'Tiraque',
       deptoId: 274
   },
   {
       proNombre: 'Aroma',
       deptoId: 275
   },
   {
       proNombre: 'Bautista Saavedra',
       deptoId: 275
   },
   {
       proNombre: 'Abel Iturralde',
       deptoId: 275
   },
   {
       proNombre: 'Caranavi',
       deptoId: 275
   },
   {
       proNombre: 'Eliodoro Camacho',
       deptoId: 275
   },
   {
       proNombre: 'Franz Tamayo',
       deptoId: 275
   },
   {
       proNombre: 'Gualberto Villaroel',
       deptoId: 275
   },
   {
       proNombre: 'Ingavi',
       deptoId: 275
   },
   {
       proNombre: 'Inquisivi',
       deptoId: 275
   },
   {
       proNombre: 'General José Manuel Pando',
       deptoId: 275
   },
   {
       proNombre: 'Larecaja',
       deptoId: 275
   },
   {
       proNombre: 'Loayza',
       deptoId: 275
   },
   {
       proNombre: 'Los Andes',
       deptoId: 275
   },
   {
       proNombre: 'Manco Kapac',
       deptoId: 275
   },
   {
       proNombre: 'Muñecas',
       deptoId: 275
   },
   {
       proNombre: 'Nor Yungas',
       deptoId: 275
   },
   {
       proNombre: 'Omasuyos',
       deptoId: 275
   },
   {
       proNombre: 'Pacajes',
       deptoId: 275
   },
   {
       proNombre: 'Pedro Domingo Murillo',
       deptoId: 275
   },
   {
       proNombre: 'Sud Yungas',
       deptoId: 275
   },
   {
       proNombre: 'Sabaya',
       deptoId: 276
   },
   {
       proNombre: 'Carangas',
       deptoId: 276
   },
   {
       proNombre: 'Cercado',
       deptoId: 276
   },
   {
       proNombre: 'Eduardo Abaroa',
       deptoId: 276
   },
   {
       proNombre: 'Ladislao Cabrera',
       deptoId: 276
   },
   {
       proNombre: 'Litoral',
       deptoId: 276
   },
   {
       proNombre: 'Mejillones',
       deptoId: 276
   },
   {
       proNombre: 'Nor Carangas',
       deptoId: 276
   },
   {
       proNombre: 'Pantaleón Dalence',
       deptoId: 276
   },
   {
       proNombre: 'Poopó',
       deptoId: 276
   },
   {
       proNombre: 'Sajama',
       deptoId: 276
   },
   {
       proNombre: 'San Pedro de Totora',
       deptoId: 276
   },
   {
       proNombre: 'Saucarí',
       deptoId: 276
   },
   {
       proNombre: 'Sebastián Pagador',
       deptoId: 276
   },
   {
       proNombre: 'Sud Carangas',
       deptoId: 276
   },
   {
       proNombre: 'Tomas Barrón',
       deptoId: 276
   },
   {
       proNombre: 'Abuná',
       deptoId: 277
   },
   {
       proNombre: 'Federico Román',
       deptoId: 277
   },
   {
       proNombre: 'Madre de Dios',
       deptoId: 277
   },
   {
       proNombre: 'Manuripi',
       deptoId: 277
   },
   {
       proNombre: 'Nicolás Suárez',
       deptoId: 277
   },
   {
       proNombre: 'Alonzo de Ibáñez',
       deptoId: 278
   },
   {
       proNombre: 'Antonio Quijarro',
       deptoId: 278
   },
   {
       proNombre: 'Bernardino Bilbao',
       deptoId: 278
   },
   {
       proNombre: 'Charcas',
       deptoId: 278
   },
   {
       proNombre: 'Chayanta',
       deptoId: 278
   },
   {
       proNombre: 'Cornelio Saavedra',
       deptoId: 278
   },
   {
       proNombre: 'Daniel Saavedra',
       deptoId: 278
   },
   {
       proNombre: 'Enrique Baldivieso',
       deptoId: 278
   },
   {
       proNombre: 'José María Linares',
       deptoId: 278
   },
   {
       proNombre: 'Modesto Omiste',
       deptoId: 278
   },
   {
       proNombre: 'Nor Chichas',
       deptoId: 278
   },
   {
       proNombre: 'Nor Lípez',
       deptoId: 278
   },
   {
       proNombre: 'Rafael Bustillo',
       deptoId: 278
   },
   {
       proNombre: 'Sud Chichas',
       deptoId: 278
   },
   {
       proNombre: 'Sud Lipez',
       deptoId: 278
   },
   {
       proNombre: 'Tomás Frías',
       deptoId: 278
   },
   {
       proNombre: 'Andrés Ibáñez',
       deptoId: 279
   },
   {
       proNombre: 'Ignacio Warnes',
       deptoId: 279
   },
   {
       proNombre: 'José Miguel de Velasco',
       deptoId: 279
   },
   {
       proNombre: 'Ichilo',
       deptoId: 279
   },
   {
       proNombre: 'Chiquitos',
       deptoId: 279
   },
   {
       proNombre: 'Sara',
       deptoId: 279
   },
   {
       proNombre: 'Cordillera',
       deptoId: 279
   },
   {
       proNombre: 'Vallegrande',
       deptoId: 279
   },
   {
       proNombre: 'Florida',
       deptoId: 279
   },
   {
       proNombre: 'Santistevan',
       deptoId: 279
   },
   {
       proNombre: 'Ñuflo de Chávez',
       deptoId: 279
   },
   {
       proNombre: 'Ángel Sandoval',
       deptoId: 279
   },
   {
       proNombre: 'Caballero',
       deptoId: 279
   },
   {
       proNombre: 'Germán Busch',
       deptoId: 279
   },
   {
       proNombre: 'Guarayos',
       deptoId: 279
   },
   {
       proNombre: 'Aniceto Arce',
       deptoId: 280
   },
   {
       proNombre: "Burdet O'Connor",
       deptoId: 280
   },
   {
       proNombre: 'Cercado',
       deptoId: 280
   },
   {
       proNombre: 'Eustaquio Méndez',
       deptoId: 280
   },
   {
       proNombre: 'Gran Chaco',
       deptoId: 280
   },
   {
       proNombre: 'José María Avilés',
       deptoId: 280
   },
   {
       proNombre: 'Bosnia Central',
       deptoId: 281
   },
   {
       proNombre: 'Cantón 10',
       deptoId: 281
   },
   {
       proNombre: 'Herzegovina-Neretva',
       deptoId: 281
   },
   {
       proNombre: 'Herzegovina Occidental',
       deptoId: 281
   },
   {
       proNombre: 'Podrinje Bosnio',
       deptoId: 281
   },
   {
       proNombre: 'Sarajevo',
       deptoId: 281
   },
   {
       proNombre: 'Posavina',
       deptoId: 281
   },
   {
       proNombre: 'Tuzla',
       deptoId: 281
   },
   {
       proNombre: 'Una-Sana',
       deptoId: 281
   },
   {
       proNombre: 'Zenica-Doboj',
       deptoId: 281
   },
   {
       proNombre: 'Banja Luka',
       deptoId: 282
   },
   {
       proNombre: 'Bijeljina',
       deptoId: 282
   },
   {
       proNombre: 'Bileća',
       deptoId: 282
   },
   {
       proNombre: 'Doboj',
       deptoId: 282
   },
   {
       proNombre: 'Gradiška',
       deptoId: 282
   },
   {
       proNombre: 'Foča',
       deptoId: 282
   },
   {
       proNombre: 'Modriča',
       deptoId: 282
   },
   {
       proNombre: 'Mrkonjić Grad',
       deptoId: 282
   },
   {
       proNombre: 'Novi Grad',
       deptoId: 282
   },
   {
       proNombre: 'Prijedor',
       deptoId: 282
   },
   {
       proNombre: 'Prnjavor',
       deptoId: 282
   },
   {
       proNombre: 'Sarajevo Oriental',
       deptoId: 282
   },
   {
       proNombre: 'Trebinje',
       deptoId: 282
   },
   {
       proNombre: 'Brčko',
       deptoId: 283
   },
   {
       proNombre: 'Bobirwa: Bobonong',
       deptoId: 284
   },
   {
       proNombre: 'Boteti: Letlhakane',
       deptoId: 284
   },
   {
       proNombre: 'Mahalapye',
       deptoId: 284
   },
   {
       proNombre: 'Serowe Palapye: Palapye',
       deptoId: 284
   },
   {
       proNombre: 'Tutume: Matobo',
       deptoId: 284
   },
   {
       proNombre: 'Tonota',
       deptoId: 284
   },
   {
       proNombre: 'Tswapong',
       deptoId: 284
   },
   {
       proNombre: 'Ghanzi',
       deptoId: 285
   },
   {
       proNombre: 'Tsabong',
       deptoId: 286
   },
   {
       proNombre: 'Mochudi',
       deptoId: 287
   },
   {
       proNombre: 'Molepolole',
       deptoId: 288
   },
   {
       proNombre: 'Botalaote',
       deptoId: 289
   },
   {
       proNombre: 'Butale,',
       deptoId: 289
   },
   {
       proNombre: 'Ditladi',
       deptoId: 289
   },
   {
       proNombre: 'Gambule',
       deptoId: 289
   },
   {
       proNombre: 'Gulubane',
       deptoId: 289
   },
   {
       proNombre: 'Gungwe',
       deptoId: 289
   },
   {
       proNombre: 'Jackalas 1',
       deptoId: 289
   },
   {
       proNombre: 'Jackalas No 2',
       deptoId: 289
   },
   {
       proNombre: 'Kalakamati',
       deptoId: 289
   },
   {
       proNombre: 'Kgari',
       deptoId: 289
   },
   {
       proNombre: 'Letsholathebe',
       deptoId: 289
   },
   {
       proNombre: 'Mabudzane',
       deptoId: 289
   },
   {
       proNombre: 'Makaleng',
       deptoId: 289
   },
   {
       proNombre: 'Mambo',
       deptoId: 289
   },
   {
       proNombre: 'Mapoka',
       deptoId: 289
   },
   {
       proNombre: 'Masingwaneng',
       deptoId: 289
   },
   {
       proNombre: 'Masukwane',
       deptoId: 289
   },
   {
       proNombre: 'Masunga',
       deptoId: 289
   },
   {
       proNombre: 'Matenge',
       deptoId: 289
   },
   {
       proNombre: 'Matopi',
       deptoId: 289
   },
   {
       proNombre: 'Matshelagabedi',
       deptoId: 289
   },
   {
       proNombre: 'Matsiloje',
       deptoId: 289
   },
   {
       proNombre: 'Mbalambi',
       deptoId: 289
   },
   {
       proNombre: 'Moroka',
       deptoId: 289
   },
   {
       proNombre: 'Mosojane',
       deptoId: 289
   },
   {
       proNombre: 'Mowana',
       deptoId: 289
   },
   {
       proNombre: 'Mulambakwena',
       deptoId: 289
   },
   {
       proNombre: 'Nlakhwane',
       deptoId: 289
   },
   {
       proNombre: 'Patayamatebele',
       deptoId: 289
   },
   {
       proNombre: 'Pole',
       deptoId: 289
   },
   {
       proNombre: 'Ramokgwebana',
       deptoId: 289
   },
   {
       proNombre: 'Sechele',
       deptoId: 289
   },
   {
       proNombre: 'Sekakangwe',
       deptoId: 289
   },
   {
       proNombre: 'Senyawe',
       deptoId: 289
   },
   {
       proNombre: 'Shashe Bridge',
       deptoId: 289
   },
   {
       proNombre: 'Siviya',
       deptoId: 289
   },
   {
       proNombre: 'Tati Siding',
       deptoId: 289
   },
   {
       proNombre: 'Themashanga',
       deptoId: 289
   },
   {
       proNombre: 'Toteng',
       deptoId: 289
   },
   {
       proNombre: 'Tsamaya',
       deptoId: 289
   },
   {
       proNombre: 'Tshesebe, ',
       deptoId: 289
   },
   {
       proNombre: 'Vukwi',
       deptoId: 289
   },
   {
       proNombre: 'Zwenshambe',
       deptoId: 289
   },
   {
       proNombre: 'Delta',
       deptoId: 290
   },
   {
       proNombre: 'Ngamiland Este',
       deptoId: 290
   },
   {
       proNombre: 'Ngamiland Oeste',
       deptoId: 290
   },
   {
       proNombre: 'Gaborone',
       deptoId: 291
   },
   {
       proNombre: 'Kanye',
       deptoId: 292
   },
   {
       proNombre: 'Acrelândia',
       deptoId: 293
   },
   {
       proNombre: 'Assis Brasil (Acre)',
       deptoId: 293
   },
   {
       proNombre: 'Brasiléia',
       deptoId: 293
   },
   {
       proNombre: 'Bujari',
       deptoId: 293
   },
   {
       proNombre: 'Capixaba',
       deptoId: 293
   },
   {
       proNombre: 'Cruzeiro do Sul',
       deptoId: 293
   },
   {
       proNombre: 'Epitaciolândia',
       deptoId: 293
   },
   {
       proNombre: 'Jordão',
       deptoId: 293
   },
   {
       proNombre: 'Feijó',
       deptoId: 293
   },
   {
       proNombre: 'Mâncio Lima',
       deptoId: 293
   },
   {
       proNombre: 'Manoel Urbano',
       deptoId: 293
   },
   {
       proNombre: 'Marechal Thaumaturgo',
       deptoId: 293
   },
   {
       proNombre: 'Plácido de Castro',
       deptoId: 293
   },
   {
       proNombre: 'Porto Acre',
       deptoId: 293
   },
   {
       proNombre: 'Porto Walter',
       deptoId: 293
   },
   {
       proNombre: 'Rio Branco',
       deptoId: 293
   },
   {
       proNombre: 'Rodrigues Alves',
       deptoId: 293
   },
   {
       proNombre: 'Santa Rosa do Purus',
       deptoId: 293
   },
   {
       proNombre: 'Sena Madureira',
       deptoId: 293
   },
   {
       proNombre: 'Senador Guiomard',
       deptoId: 293
   },
   {
       proNombre: 'Tarauacá',
       deptoId: 293
   },
   {
       proNombre: 'Xapuri',
       deptoId: 293
   },
   {
       proNombre: 'Água Branca',
       deptoId: 294
   },
   {
       proNombre: 'Anadia',
       deptoId: 294
   },
   {
       proNombre: 'Arapiraca',
       deptoId: 294
   },
   {
       proNombre: 'Atalaia',
       deptoId: 294
   },
   {
       proNombre: 'Barra de Santo Antônio',
       deptoId: 294
   },
   {
       proNombre: 'Barra de São Miguel',
       deptoId: 294
   },
   {
       proNombre: 'Batalha',
       deptoId: 294
   },
   {
       proNombre: 'Belém',
       deptoId: 294
   },
   {
       proNombre: 'Belo Monte',
       deptoId: 294
   },
   {
       proNombre: 'Boca da Mata',
       deptoId: 294
   },
   {
       proNombre: 'Branquinha',
       deptoId: 294
   },
   {
       proNombre: 'Cacimbinhas',
       deptoId: 294
   },
   {
       proNombre: 'Cajueiro',
       deptoId: 294
   },
   {
       proNombre: 'Campestre',
       deptoId: 294
   },
   {
       proNombre: 'Campo Alegre',
       deptoId: 294
   },
   {
       proNombre: '	Campo Grande',
       deptoId: 294
   },
   {
       proNombre: 'Canapi',
       deptoId: 294
   },
   {
       proNombre: 'Capela',
       deptoId: 294
   },
   {
       proNombre: 'Carneiros',
       deptoId: 294
   },
   {
       proNombre: 'Chã Preta',
       deptoId: 294
   },
   {
       proNombre: 'Coité do Nóia',
       deptoId: 294
   },
   {
       proNombre: 'Colônia Leopoldina',
       deptoId: 294
   },
   {
       proNombre: 'Coqueiro Seco',
       deptoId: 294
   },
   {
       proNombre: 'Coruripe',
       deptoId: 294
   },
   {
       proNombre: 'Craíbas',
       deptoId: 294
   },
   {
       proNombre: 'Delmiro Gouveia',
       deptoId: 294
   },
   {
       proNombre: 'Dois Riachos',
       deptoId: 294
   },
   {
       proNombre: 'Estrela de Alagoas',
       deptoId: 294
   },
   {
       proNombre: 'Feira Grande',
       deptoId: 294
   },
   {
       proNombre: 'Feliz Deserto',
       deptoId: 294
   },
   {
       proNombre: 'Flexeiras',
       deptoId: 294
   },
   {
       proNombre: 'Girau do Ponciano',
       deptoId: 294
   },
   {
       proNombre: 'Ibateguara',
       deptoId: 294
   },
   {
       proNombre: 'Igaci',
       deptoId: 294
   },
   {
       proNombre: 'Igreja Nova',
       deptoId: 294
   },
   {
       proNombre: 'Inhapi',
       deptoId: 294
   },
   {
       proNombre: 'Jacaré dos Homens',
       deptoId: 294
   },
   {
       proNombre: 'Jacuípe',
       deptoId: 294
   },
   {
       proNombre: 'Japaratinga',
       deptoId: 294
   },
   {
       proNombre: 'Jaramataia',
       deptoId: 294
   },
   {
       proNombre: 'Joaquim Gomes',
       deptoId: 294
   },
   {
       proNombre: 'Jundiá',
       deptoId: 294
   },
   {
       proNombre: 'Junqueiro',
       deptoId: 294
   },
   {
       proNombre: 'Lagoa da Canoa',
       deptoId: 294
   },
   {
       proNombre: 'Limoeiro de Anadia',
       deptoId: 294
   },
   {
       proNombre: 'Maceió',
       deptoId: 294
   },
   {
       proNombre: 'Major Isidoro',
       deptoId: 294
   },
   {
       proNombre: 'Mar Vermelho',
       deptoId: 294
   },
   {
       proNombre: 'Maragogi',
       deptoId: 294
   },
   {
       proNombre: 'Maravilha',
       deptoId: 294
   },
   {
       proNombre: 'Marechal Deodoro',
       deptoId: 294
   },
   {
       proNombre: 'Maribondo',
       deptoId: 294
   },
   {
       proNombre: 'Mata Grande',
       deptoId: 294
   },
   {
       proNombre: 'Matriz de Camaragibe',
       deptoId: 294
   },
   {
       proNombre: 'Messias',
       deptoId: 294
   },
   {
       proNombre: '	Minador do Negrão',
       deptoId: 294
   },
   {
       proNombre: 'Monteirópolis',
       deptoId: 294
   },
   {
       proNombre: 'Murici',
       deptoId: 294
   },
   {
       proNombre: 'Novo Lino',
       deptoId: 294
   },
   {
       proNombre: "Olho d'Água das Flores",
       deptoId: 294
   },
   {
proNombre: "Olho d'Água do Casado",
       deptoId: 294
   },
   {
       proNombre: "Olho d'Água Grande",
       deptoId: 294
   },
   {
       proNombre: 'Olivença',
       deptoId: 294
   },
   {
       proNombre: 'Ouro Branco',
       deptoId: 294
   },
   {
       proNombre: 'Palestina',
       deptoId: 294
   },
   {
       proNombre: 'Palmeira dos Índios',
       deptoId: 294
   },
   {
       proNombre: 'Pão de Açúcar',
       deptoId: 294
   },
   {
       proNombre: 'Pariconha',
       deptoId: 294
   },
   {
       proNombre: 'Paripueira',
       deptoId: 294
   },
   {
       proNombre: 'Passo de Camaragibe',
       deptoId: 294
   },
   {
       proNombre: 'Paulo Jacinto',
       deptoId: 294
   },
   {
       proNombre: 'Penedo',
       deptoId: 294
   },
   {
       proNombre: 'Piaçabuçu',
       deptoId: 294
   },
   {
       proNombre: 'Pilar',
       deptoId: 294
   },
   {
       proNombre: 'Pindoba',
       deptoId: 294
   },
   {
       proNombre: 'Piranhas',
       deptoId: 294
   },
   {
       proNombre: 'Poço das Trincheiras',
       deptoId: 294
   },
   {
       proNombre: 'Porto Calvo',
       deptoId: 294
   },
   {
       proNombre: 'Porto de Pedras',
       deptoId: 294
   },
   {
       proNombre: 'Porto Real do Colégio',
       deptoId: 294
   },
   {
       proNombre: 'Quebrangulo',
       deptoId: 294
   },
   {
       proNombre: 'Rio Largo',
       deptoId: 294
   },
   {
       proNombre: 'Roteiro',
       deptoId: 294
   },
   {
       proNombre: 'Santa Luzia do Norte',
       deptoId: 294
   },
   {
       proNombre: 'Santana do Ipanema',
       deptoId: 294
   },
   {
       proNombre: 'Santana do Mundaú',
       deptoId: 294
   },
   {
       proNombre: 'São Brás',
       deptoId: 294
   },
   {
       proNombre: 'São José da Laje',
       deptoId: 294
   },
   {
       proNombre: 'São José da Tapera',
       deptoId: 294
   },
   {
       proNombre: 'São Luís do Quitunde',
       deptoId: 294
   },
   {
       proNombre: 'Jequiá da Praia',
       deptoId: 294
   },
   {
       proNombre: 'São Miguel dos Campos',
       deptoId: 294
   },
   {
       proNombre: 'São Miguel dos Milagres',
       deptoId: 294
   },
   {
       proNombre: 'São Sebastião',
       deptoId: 294
   },
   {
       proNombre: 'Satuba',
       deptoId: 294
   },
   {
       proNombre: 'Senador Rui Palmeira',
       deptoId: 294
   },
   {
       proNombre: "Tanque d'Arca",
       deptoId: 294
   },
   {
       proNombre: 'Taquarana',
       deptoId: 294
   },
   {
       proNombre: 'Teotônio Vilela',
       deptoId: 294
   },
   {
       proNombre: 'Traipu',
       deptoId: 294
   },
   {
       proNombre: 'União dos Palmares',
       deptoId: 294
   },
   {
       proNombre: 'Viçosa',
       deptoId: 294
   },
   {
       proNombre: 'Amapá',
       deptoId: 295
   },
   {
       proNombre: 'Calçoene',
       deptoId: 295
   },
   {
       proNombre: 'Cutias',
       deptoId: 295
   },
   {
       proNombre: 'Ferreira Gomes',
       deptoId: 295
   },
   {
       proNombre: 'Itaubal',
       deptoId: 295
   },
   {
       proNombre: 'Laranjal do Jari',
       deptoId: 295
   },
   {
       proNombre: 'Macapá',
       deptoId: 295
   },
   {
       proNombre: 'Mazagão',
       deptoId: 295
   },
   {
       proNombre: 'Oiapoque',
       deptoId: 295
   },
   {
       proNombre: 'Pedra Branca do Amapari',
       deptoId: 295
   },
   {
       proNombre: 'Porto Grande',
       deptoId: 295
   },
   {
       proNombre: 'Pracuúba',
       deptoId: 295
   },
   {
       proNombre: 'Santana',
       deptoId: 295
   },
   {
       proNombre: 'Serra do Navio',
       deptoId: 295
   },
   {
       proNombre: 'Tartarugalzinho',
       deptoId: 295
   },
   {
       proNombre: 'Vitória do Jari',
       deptoId: 295
   },
   {
       proNombre: 'Alvarães',
       deptoId: 296
   },
   {
       proNombre: 'Amaturá',
       deptoId: 296
   },
   {
       proNombre: 'Anamã',
       deptoId: 296
   },
   {
       proNombre: 'Anori',
       deptoId: 296
   },
   {
       proNombre: 'Apuí',
       deptoId: 296
   },
   {
       proNombre: 'Atalaia do Norte',
       deptoId: 296
   },
   {
       proNombre: 'Autazes',
       deptoId: 296
   },
   {
       proNombre: 'Barcelos',
       deptoId: 296
   },
   {
       proNombre: 'Barreirinha',
       deptoId: 296
   },
   {
       proNombre: 'Benjamin Constant',
       deptoId: 296
   },
   {
       proNombre: 'Beruri',
       deptoId: 296
   },
   {
       proNombre: 'Boa Vista do Ramos',
       deptoId: 296
   },
   {
       proNombre: 'Boca do Acre',
       deptoId: 296
   },
   {
       proNombre: 'Borba',
       deptoId: 296
   },
   {
       proNombre: 'Caapiranga',
       deptoId: 296
   },
   {
       proNombre: 'Canutama',
       deptoId: 296
   },
   {
       proNombre: 'Carauari',
       deptoId: 296
   },
   {
       proNombre: 'Careiro',
       deptoId: 296
   },
   {
       proNombre: 'Careiro da Várzea',
       deptoId: 296
   },
   {
       proNombre: 'Coari',
       deptoId: 296
   },
   {
       proNombre: 'Codajás',
       deptoId: 296
   },
   {
       proNombre: 'Eirunepé',
       deptoId: 296
   },
   {
       proNombre: 'Envira',
       deptoId: 296
   },
   {
       proNombre: 'Fonte Boa',
       deptoId: 296
   },
   {
       proNombre: 'Guajará',
       deptoId: 296
   },
   {
       proNombre: 'Humaitá',
       deptoId: 296
   },
   {
       proNombre: 'Ipixuna',
       deptoId: 296
   },
   {
       proNombre: 'Iranduba',
       deptoId: 296
   },
   {
       proNombre: 'Itacoatiara',
       deptoId: 296
   },
   {
       proNombre: 'Itamarati',
       deptoId: 296
   },
   {
       proNombre: 'Itapiranga',
       deptoId: 296
   },
   {
       proNombre: 'Japurá',
       deptoId: 296
   },
   {
       proNombre: 'Juruá',
       deptoId: 296
   },
   {
       proNombre: 'Jutaí',
       deptoId: 296
   },
   {
       proNombre: 'Lábrea',
       deptoId: 296
   },
   {
       proNombre: 'Manacapuru',
       deptoId: 296
   },
   {
       proNombre: 'Manaos',
       deptoId: 296
   },
   {
       proNombre: 'Manaquiri',
       deptoId: 296
   },
   {
       proNombre: 'Manicoré',
       deptoId: 296
   },
   {
       proNombre: 'Maraã',
       deptoId: 296
   },
   {
       proNombre: 'Maués',
       deptoId: 296
   },
   {
       proNombre: 'Nhamundá',
       deptoId: 296
   },
   {
       proNombre: 'Nova Olinda do Norte',
       deptoId: 296
   },
   {
       proNombre: 'Novo Airão',
       deptoId: 296
   },
   {
       proNombre: 'Novo Aripuanã',
       deptoId: 296
   },
   {
       proNombre: 'Parintins',
       deptoId: 296
   },
   {
       proNombre: 'Pauini',
       deptoId: 296
   },
   {
       proNombre: 'Presidente Figueiredo',
       deptoId: 296
   },
   {
       proNombre: 'Rio Preto da Eva',
       deptoId: 296
   },
   {
       proNombre: 'Santa Isabel do Rio Negro',
       deptoId: 296
   },
   {
       proNombre: 'Santo Antônio do Içá',
       deptoId: 296
   },
   {
       proNombre: 'São Gabriel da Cachoeira',
       deptoId: 296
   },
   {
       proNombre: 'São Paulo de Olivença',
       deptoId: 296
   },
   {
       proNombre: 'São Sebastião do Uatumã',
       deptoId: 296
   },
   {
       proNombre: 'Silves',
       deptoId: 296
   },
   {
       proNombre: 'Tabatinga',
       deptoId: 296
   },
   {
       proNombre: 'Tapauá',
       deptoId: 296
   },
   {
       proNombre: 'Tefé',
       deptoId: 296
   },
   {
       proNombre: 'Tonantins',
       deptoId: 296
   },
   {
       proNombre: 'Uarini',
       deptoId: 296
   },
   {
       proNombre: 'Urucará',
       deptoId: 296
   },
   {
       proNombre: 'Urucurituba',
       deptoId: 296
   },
   {
       proNombre: '	Feira de Santana',
       deptoId: 297
   },
   {
       proNombre: 'Irecê',
       deptoId: 297
   },
   {
       proNombre: 'Itaberaba',
       deptoId: 297
   },
   {
       proNombre: 'Jacobina',
       deptoId: 297
   },
   {
       proNombre: 'Senhor do Bonfim',
       deptoId: 297
   },
   {
       proNombre: 'Boquira',
       deptoId: 297
   },
   {
       proNombre: 'Brumado',
       deptoId: 297
   },
   {
       proNombre: 'Guanambi',
       deptoId: 297
   },
   {
       proNombre: 'Itapetinga',
       deptoId: 297
   },
   {
       proNombre: 'Jequié',
       deptoId: 297
   },
   {
       proNombre: 'Livramento do Brumado',
       deptoId: 297
   },
   {
       proNombre: 'Seabra',
       deptoId: 297
   },
   {
       proNombre: 'Vitória da Conquista',
       deptoId: 297
   },
   {
       proNombre: 'Barreiras',
       deptoId: 297
   },
   {
       proNombre: 'Cotegipe',
       deptoId: 297
   },
   {
       proNombre: 'Santa Maria da Vitória',
       deptoId: 297
   },
   {
       proNombre: 'Catu',
       deptoId: 297
   },
   {
       proNombre: 'Salvador',
       deptoId: 297
   },
   {
       proNombre: 'Santo Antônio de Jesus',
       deptoId: 297
   },
   {
       proNombre: 'Alagoinhas',
       deptoId: 297
   },
   {
       proNombre: 'Entre Rios',
       deptoId: 297
   },
   {
       proNombre: 'Euclides da Cunha',
       deptoId: 297
   },
   {
       proNombre: 'Jeremoabo',
       deptoId: 297
   },
   {
       proNombre: 'Ribeira do Pombal',
       deptoId: 297
   },
   {
       proNombre: 'Serrinha',
       deptoId: 297
   },
   {
       proNombre: 'Ilhéus-Itabuna',
       deptoId: 297
   },
   {
       proNombre: 'Porto Seguro',
       deptoId: 297
   },
   {
       proNombre: 'Valença',
       deptoId: 297
   },
   {
       proNombre: 'Barra',
       deptoId: 297
   },
   {
       proNombre: 'Bom Jesus da Lapa',
       deptoId: 297
   },
   {
       proNombre: 'Juazeiro',
       deptoId: 297
   },
   {
       proNombre: 'Paulo Afonso',
       deptoId: 297
   },
   {
       proNombre: 'Abaiara',
       deptoId: 298
   },
   {
       proNombre: 'Acarapé',
       deptoId: 298
   },
   {
       proNombre: 'Acaraú',
       deptoId: 298
   },
   {
       proNombre: 'Acopiara',
       deptoId: 298
   },
   {
       proNombre: 'Aiuaba',
       deptoId: 298
   },
   {
       proNombre: 'Alcântaras',
       deptoId: 298
   },
   {
       proNombre: 'Altaneira',
       deptoId: 298
   },
   {
       proNombre: 'Alto Santo',
       deptoId: 298
   },
   {
       proNombre: 'Amontada',
       deptoId: 298
   },
   {
       proNombre: 'Antonina do Norte',
       deptoId: 298
   },
   {
       proNombre: 'Aquiraz',
       deptoId: 298
   },
   {
       proNombre: 'Aracati',
       deptoId: 298
   },
   {
       proNombre: 'Araçoiaba',
       deptoId: 298
   },
   {
       proNombre: 'Ararendá',
       deptoId: 298
   },
   {
       proNombre: 'Araripe',
       deptoId: 298
   },
   {
       proNombre: 'Aratuba',
       deptoId: 298
   },
   {
       proNombre: 'Arneiroz',
       deptoId: 298
   },
   {
       proNombre: 'Assaré',
       deptoId: 298
   },
   {
       proNombre: 'Aurora',
       deptoId: 298
   },
   {
       proNombre: 'Baixio',
       deptoId: 298
   },
   {
       proNombre: 'Banabuiú',
       deptoId: 298
   },
   {
       proNombre: 'Barbalha',
       deptoId: 298
   },
   {
       proNombre: 'Barreira',
       deptoId: 298
   },
   {
       proNombre: 'Barro',
       deptoId: 298
   },
   {
       proNombre: 'Barroquinha',
       deptoId: 298
   },
   {
       proNombre: 'Baturité',
       deptoId: 298
   },
   {
       proNombre: 'Beberibe',
       deptoId: 298
   },
   {
       proNombre: 'Bela Cruz',
       deptoId: 298
   },
   {
       proNombre: 'Boa Viagem',
       deptoId: 298
   },
   {
       proNombre: 'Brejo Santo',
       deptoId: 298
   },
   {
       proNombre: 'Camocim',
       deptoId: 298
   },
   {
       proNombre: '	Campos Sales',
       deptoId: 298
   },
   {
       proNombre: 'Canindé',
       deptoId: 298
   },
   {
       proNombre: 'Capistrano',
       deptoId: 298
   },
   {
       proNombre: 'Caridade',
       deptoId: 298
   },
   {
       proNombre: 'Cariré',
       deptoId: 298
   },
   {
       proNombre: 'Caririaçú',
       deptoId: 298
   },
   {
       proNombre: 'Cariús',
       deptoId: 298
   },
   {
       proNombre: 'Carnaubal',
       deptoId: 298
   },
   {
       proNombre: 'Cascavel',
       deptoId: 298
   },
   {
       proNombre: 'Catarina',
       deptoId: 298
   },
   {
       proNombre: 'Catunda',
       deptoId: 298
   },
   {
       proNombre: 'Caucaia',
       deptoId: 298
   },
   {
       proNombre: 'Cedro',
       deptoId: 298
   },
   {
       proNombre: 'Chaval',
       deptoId: 298
   },
   {
       proNombre: 'Choró',
       deptoId: 298
   },
   {
       proNombre: 'Chorozinho',
       deptoId: 298
   },
   {
       proNombre: 'Coreaú',
       deptoId: 298
   },
   {
       proNombre: 'Crateús',
       deptoId: 298
   },
   {
       proNombre: 'Crato',
       deptoId: 298
   },
   {
       proNombre: 'Croatá',
       deptoId: 298
   },
   {
       proNombre: 'Cruz',
       deptoId: 298
   },
   {
       proNombre: 'Deputado Irapuan Pinheiro',
       deptoId: 298
   },
   {
       proNombre: 'Ererê',
       deptoId: 298
   },
   {
       proNombre: 'Eusébio',
       deptoId: 298
   },
   {
       proNombre: 'Farias Brito',
       deptoId: 298
   },
   {
       proNombre: 'Forquilha',
       deptoId: 298
   },
   {
       proNombre: 'Fortaleza',
       deptoId: 298
   },
   {
       proNombre: 'Fortim',
       deptoId: 298
   },
   {
       proNombre: 'Frecheirinha',
       deptoId: 298
   },
   {
       proNombre: 'General Sampaio',
       deptoId: 298
   },
   {
       proNombre: 'Graça',
       deptoId: 298
   },
   {
       proNombre: 'Granja',
       deptoId: 298
   },
   {
       proNombre: 'Granjeiro',
       deptoId: 298
   },
   {
       proNombre: 'Groaíras',
       deptoId: 298
   },
   {
       proNombre: 'Guaiúba',
       deptoId: 298
   },
   {
       proNombre: 'Guaraciaba do Norte',
       deptoId: 298
   },
   {
       proNombre: 'Guaramiranga',
       deptoId: 298
   },
   {
       proNombre: 'Hidrolândia',
       deptoId: 298
   },
   {
       proNombre: 'Horizonte',
       deptoId: 298
   },
   {
       proNombre: 'Ibaretama',
       deptoId: 298
   },
   {
       proNombre: 'Ibiapina',
       deptoId: 298
   },
   {
       proNombre: 'Ibicuitinga',
       deptoId: 298
   },
   {
       proNombre: 'Icapuí',
       deptoId: 298
   },
   {
       proNombre: 'Icó',
       deptoId: 298
   },
   {
       proNombre: 'Iguatu',
       deptoId: 298
   },
   {
       proNombre: 'Independência',
       deptoId: 298
   },
   {
       proNombre: 'Ipaporanga',
       deptoId: 298
   },
   {
       proNombre: 'Ipaumirim',
       deptoId: 298
   },
   {
       proNombre: 'Ipú',
       deptoId: 298
   },
   {
       proNombre: 'Ipueiras',
       deptoId: 298
   },
   {
       proNombre: 'Iracema',
       deptoId: 298
   },
   {
       proNombre: 'Irauçuba',
       deptoId: 298
   },
   {
       proNombre: 'Itaiçaba',
       deptoId: 298
   },
   {
       proNombre: 'Itaitinga',
       deptoId: 298
   },
   {
       proNombre: 'Itapagé',
       deptoId: 298
   },
   {
       proNombre: 'Itapipoca',
       deptoId: 298
   },
   {
       proNombre: 'Itapiúna',
       deptoId: 298
   },
   {
       proNombre: 'Itarema',
       deptoId: 298
   },
   {
       proNombre: 'Itatira',
       deptoId: 298
   },
   {
       proNombre: 'Jaguaretama',
       deptoId: 298
   },
   {
       proNombre: 'Jaguaribara',
       deptoId: 298
   },
   {
       proNombre: 'Jaguaribe',
       deptoId: 298
   },
   {
       proNombre: 'Jaguaruana',
       deptoId: 298
   },
   {
       proNombre: 'Jardim',
       deptoId: 298
   },
   {
       proNombre: 'Jati',
       deptoId: 298
   },
   {
       proNombre: 'Jijoca de Jericoacoara',
       deptoId: 298
   },
   {
       proNombre: 'Juazeiro do Norte',
       deptoId: 298
   },
   {
       proNombre: 'Jucás',
       deptoId: 298
   },
   {
       proNombre: 'Lavras da Mangabeira',
       deptoId: 298
   },
   {
       proNombre: 'Limoeiro do Norte',
       deptoId: 298
   },
   {
       proNombre: 'Madalena',
       deptoId: 298
   },
   {
       proNombre: 'Maracanaú',
       deptoId: 298
   },
   {
       proNombre: 'Maranguape',
       deptoId: 298
   },
   {
       proNombre: 'Marco',
       deptoId: 298
   },
   {
       proNombre: 'Martinópole',
       deptoId: 298
   },
   {
       proNombre: 'Massapê',
       deptoId: 298
   },
   {
       proNombre: 'Mauriti',
       deptoId: 298
   },
   {
       proNombre: 'Meruoca',
       deptoId: 298
   },
   {
       proNombre: 'Milagres',
       deptoId: 298
   },
   {
       proNombre: 'Milhã',
       deptoId: 298
   },
   {
       proNombre: 'Miraíma',
       deptoId: 298
   },
   {
       proNombre: 'Missão Velha',
       deptoId: 298
   },
   {
       proNombre: 'Mombaça',
       deptoId: 298
   },
   {
       proNombre: 'Monsenhor Tabosa',
       deptoId: 298
   },
   {
       proNombre: 'Morada Nova',
       deptoId: 298
   },
   {
       proNombre: 'Moraújo',
       deptoId: 298
   },
   {
       proNombre: 'Morrinhos',
       deptoId: 298
   },
   {
       proNombre: 'Mucambo',
       deptoId: 298
   },
   {
       proNombre: 'Mulungu',
       deptoId: 298
   },
   {
       proNombre: 'Nova Olinda',
       deptoId: 298
   },
   {
       proNombre: 'Nova Russas',
       deptoId: 298
   },
   {
       proNombre: 'Novo Oriente',
       deptoId: 298
   },
   {
       proNombre: 'Ocara',
       deptoId: 298
   },
   {
       proNombre: 'Orós',
       deptoId: 298
   },
   {
       proNombre: 'Pacajús',
       deptoId: 298
   },
   {
       proNombre: 'Pacatuba',
       deptoId: 298
   },
   {
       proNombre: 'Pacoti',
       deptoId: 298
   },
   {
       proNombre: 'Pacujá',
       deptoId: 298
   },
   {
       proNombre: 'Palhano',
       deptoId: 298
   },
   {
       proNombre: 'Palmácia',
       deptoId: 298
   },
   {
       proNombre: 'Paracuru',
       deptoId: 298
   },
   {
       proNombre: 'Paraipaba',
       deptoId: 298
   },
   {
       proNombre: 'Parambu',
       deptoId: 298
   },
   {
       proNombre: 'Paramoti',
       deptoId: 298
   },
   {
       proNombre: 'Pedra Branca',
       deptoId: 298
   },
   {
       proNombre: 'Penaforte',
       deptoId: 298
   },
   {
       proNombre: 'Pentecoste',
       deptoId: 298
   },
   {
       proNombre: 'Pereiro',
       deptoId: 298
   },
   {
       proNombre: 'Pindoretama',
       deptoId: 298
   },
   {
       proNombre: 'Piquet Carneiro',
       deptoId: 298
   },
   {
       proNombre: 'Pires Ferreira',
       deptoId: 298
   },
   {
       proNombre: 'Poranga',
       deptoId: 298
   },
   {
       proNombre: 'Porteiras',
       deptoId: 298
   },
   {
       proNombre: 'Potengi',
       deptoId: 298
   },
   {
       proNombre: 'Potiretama',
       deptoId: 298
   },
   {
       proNombre: 'Quiterianópolis',
       deptoId: 298
   },
   {
       proNombre: 'Quixadá',
       deptoId: 298
   },
   {
       proNombre: 'Quixelô',
       deptoId: 298
   },
   {
       proNombre: 'Quixeramobim',
       deptoId: 298
   },
   {
       proNombre: 'Quixeré',
       deptoId: 298
   },
   {
       proNombre: 'Redenção',
       deptoId: 298
   },
   {
       proNombre: 'Reriutaba',
       deptoId: 298
   },
   {
       proNombre: 'Russas',
       deptoId: 298
   },
   {
       proNombre: 'Saboeiro',
       deptoId: 298
   },
   {
       proNombre: 'Salitre',
       deptoId: 298
   },
   {
       proNombre: 'Santa Quitéria',
       deptoId: 298
   },
   {
       proNombre: 'Santana do Acaraú',
       deptoId: 298
   },
   {
       proNombre: 'Santana do Cariri',
       deptoId: 298
   },
   {
       proNombre: 'São Benedito',
       deptoId: 298
   },
   {
       proNombre: 'São Gonçalo do Amarante',
       deptoId: 298
   },
   {
       proNombre: 'São João do Jaguaribe',
       deptoId: 298
   },
   {
       proNombre: '	São Luís do Curu',
       deptoId: 298
   },
   {
       proNombre: 'Senador Pompeu',
       deptoId: 298
   },
   {
       proNombre: 'Senador Sá',
       deptoId: 298
   },
   {
       proNombre: 'Sobral',
       deptoId: 298
   },
   {
       proNombre: 'Solonópole',
       deptoId: 298
   },
   {
       proNombre: 'Tabuleiro do Norte',
       deptoId: 298
   },
   {
       proNombre: 'Tamboril',
       deptoId: 298
   },
   {
       proNombre: 'Tarrafas',
       deptoId: 298
   },
   {
       proNombre: 'Tauá',
       deptoId: 298
   },
   {
       proNombre: 'Tejuçuoca',
       deptoId: 298
   },
   {
       proNombre: 'Tianguá',
       deptoId: 298
   },
   {
       proNombre: 'Trairi',
       deptoId: 298
   },
   {
       proNombre: 'Tururu',
       deptoId: 298
   },
   {
       proNombre: 'Ubajara',
       deptoId: 298
   },
   {
       proNombre: 'Umari',
       deptoId: 298
   },
   {
       proNombre: 'Umirim',
       deptoId: 298
   },
   {
       proNombre: 'Uruburetama',
       deptoId: 298
   },
   {
       proNombre: 'Uruoca',
       deptoId: 298
   },
   {
       proNombre: 'Varjota',
       deptoId: 298
   },
   {
       proNombre: 'Várzea Alegre',
       deptoId: 298
   },
   {
       proNombre: 'Viçosa do Ceará',
       deptoId: 298
   },
   {
       proNombre: 'Afonso Cláudio',
       deptoId: 299
   },
   {
       proNombre: 'Água Doce do Norte',
       deptoId: 299
   },
   {
       proNombre: 'Águia Branca',
       deptoId: 299
   },
   {
       proNombre: 'Alegre',
       deptoId: 299
   },
   {
       proNombre: 'Alfredo Chaves',
       deptoId: 299
   },
   {
       proNombre: 'Alto Rio Novo',
       deptoId: 299
   },
   {
       proNombre: 'Anchieta',
       deptoId: 299
   },
   {
       proNombre: 'Apiacá',
       deptoId: 299
   },
   {
       proNombre: 'Aracruz',
       deptoId: 299
   },
   {
       proNombre: 'Atilio Vivacqua',
       deptoId: 299
   },
   {
       proNombre: 'Baixo Guandu',
       deptoId: 299
   },
   {
       proNombre: 'Barra de São Francisco',
       deptoId: 299
   },
   {
       proNombre: 'Boa Esperança',
       deptoId: 299
   },
   {
       proNombre: 'Bom Jesus do Norte',
       deptoId: 299
   },
   {
       proNombre: 'Brejetuba',
       deptoId: 299
   },
   {
       proNombre: 'Cachoeiro de Itapemirim',
       deptoId: 299
   },
   {
       proNombre: 'Cariacica',
       deptoId: 299
   },
   {
       proNombre: 'Castelo',
       deptoId: 299
   },
   {
       proNombre: 'Colatina',
       deptoId: 299
   },
   {
       proNombre: 'Conceição da Barra',
       deptoId: 299
   },
   {
       proNombre: 'Conceição do Castelo',
       deptoId: 299
   },
   {
       proNombre: 'Divino de São Lourenço',
       deptoId: 299
   },
   {
       proNombre: 'Domingos Martins',
       deptoId: 299
   },
   {
       proNombre: '	Dores do Rio Preto',
       deptoId: 299
   },
   {
       proNombre: 'Ecoporanga',
       deptoId: 299
   },
   {
       proNombre: 'Fundão',
       deptoId: 299
   },
   {
       proNombre: 'Governador Lindenberg',
       deptoId: 299
   },
   {
       proNombre: 'Guaçuí',
       deptoId: 299
   },
   {
       proNombre: 'Guarapari',
       deptoId: 299
   },
   {
       proNombre: 'Ibatiba',
       deptoId: 299
   },
   {
       proNombre: 'Ibiraçu',
       deptoId: 299
   },
   {
       proNombre: 'Ibitirama',
       deptoId: 299
   },
   {
       proNombre: 'Iconha',
       deptoId: 299
   },
   {
       proNombre: 'Irupi',
       deptoId: 299
   },
   {
       proNombre: 'Itaguaçu',
       deptoId: 299
   },
   {
       proNombre: 'Itapemirim',
       deptoId: 299
   },
   {
       proNombre: 'Itarana',
       deptoId: 299
   },
   {
       proNombre: 'Iúna',
       deptoId: 299
   },
   {
       proNombre: 'Jaguaré',
       deptoId: 299
   },
   {
       proNombre: 'Jerônimo Monteiro',
       deptoId: 299
   },
   {
       proNombre: 'João Neiva',
       deptoId: 299
   },
   {
       proNombre: 'Laranja da Terra',
       deptoId: 299
   },
   {
       proNombre: 'Linhares',
       deptoId: 299
   },
   {
       proNombre: 'Mantenópolis',
       deptoId: 299
   },
   {
       proNombre: 'Marataízes',
       deptoId: 299
   },
   {
       proNombre: 'Marechal Floriano',
       deptoId: 299
   },
   {
       proNombre: 'Marilândia',
       deptoId: 299
   },
   {
       proNombre: 'Mimoso do Sul',
       deptoId: 299
   },
   {
       proNombre: 'Montanha',
       deptoId: 299
   },
   {
       proNombre: 'Mucurici',
       deptoId: 299
   },
   {
       proNombre: 'Muniz Freire',
       deptoId: 299
   },
   {
       proNombre: 'Muqui',
       deptoId: 299
   },
   {
       proNombre: 'Nova Venécia',
       deptoId: 299
   },
   {
       proNombre: 'Pancas',
       deptoId: 299
   },
   {
       proNombre: 'Pedro Canário',
       deptoId: 299
   },
   {
       proNombre: 'Pinheiros',
       deptoId: 299
   },
   {
       proNombre: 'Piúma',
       deptoId: 299
   },
   {
       proNombre: 'Ponto Belo',
       deptoId: 299
   },
   {
       proNombre: 'Presidente Kennedy',
       deptoId: 299
   },
   {
       proNombre: 'Rio Bananal',
       deptoId: 299
   },
   {
       proNombre: 'Rio Novo do Sul',
       deptoId: 299
   },
   {
       proNombre: 'Santa Leopoldina',
       deptoId: 299
   },
   {
       proNombre: 'Santa Maria do Jetibá',
       deptoId: 299
   },
   {
       proNombre: 'Santa Teresa',
       deptoId: 299
   },
   {
       proNombre: 'São Domingos do Norte',
       deptoId: 299
   },
   {
       proNombre: 'São Gabriel da Palha',
       deptoId: 299
   },
   {
       proNombre: 'São José do Calçado',
       deptoId: 299
   },
   {
       proNombre: 'São Mateus',
       deptoId: 299
   },
   {
       proNombre: 'São Roque do Canaã',
       deptoId: 299
   },
   {
       proNombre: 'Serra',
       deptoId: 299
   },
   {
       proNombre: 'Sooretama',
       deptoId: 299
   },
   {
       proNombre: 'Vargem Alta',
       deptoId: 299
   },
   {
       proNombre: 'Venda Nova do Imigrante',
       deptoId: 299
   },
   {
       proNombre: 'Viana',
       deptoId: 299
   },
   {
       proNombre: 'Vila Pavão',
       deptoId: 299
   },
   {
       proNombre: 'Vila Valério',
       deptoId: 299
   },
   {
       proNombre: 'Vila Velha',
       deptoId: 299
   },
   {
       proNombre: 'Vitória',
       deptoId: 299
   },
   {
       proNombre: 'Abadia de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Abadiânia',
       deptoId: 300
   },
   {
       proNombre: 'Acreúna',
       deptoId: 300
   },
   {
       proNombre: 'Adelândia',
       deptoId: 300
   },
   {
       proNombre: 'Água Fria de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Água Limpa',
       deptoId: 300
   },
   {
       proNombre: 'Águas Lindas de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Alexânia',
       deptoId: 300
   },
   {
       proNombre: 'Aloândia',
       deptoId: 300
   },
   {
       proNombre: 'Alto Horizonte',
       deptoId: 300
   },
   {
       proNombre: 'Alto Paraíso de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Alvorada do Norte',
       deptoId: 300
   },
   {
       proNombre: 'Amaralina',
       deptoId: 300
   },
   {
       proNombre: 'Americano do Brasil',
       deptoId: 300
   },
   {
       proNombre: 'Amorinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Anápolis',
       deptoId: 300
   },
   {
       proNombre: 'Anhanguera',
       deptoId: 300
   },
   {
       proNombre: 'Anicuns',
       deptoId: 300
   },
   {
       proNombre: 'Aparecida de Goiânia',
       deptoId: 300
   },
   {
       proNombre: 'Aparecida do Rio Doce',
       deptoId: 300
   },
   {
       proNombre: 'Aporé',
       deptoId: 300
   },
   {
       proNombre: 'Araçu',
       deptoId: 300
   },
   {
       proNombre: 'Aragarças',
       deptoId: 300
   },
   {
       proNombre: 'Aragoiânia',
       deptoId: 300
   },
   {
       proNombre: 'Araguapaz',
       deptoId: 300
   },
   {
       proNombre: 'Arenópolis',
       deptoId: 300
   },
   {
       proNombre: 'Aruanã',
       deptoId: 300
   },
   {
       proNombre: 'Aurilândia',
       deptoId: 300
   },
   {
       proNombre: 'Avelinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Baliza',
       deptoId: 300
   },
   {
       proNombre: 'Barro Alto',
       deptoId: 300
   },
   {
       proNombre: 'Bela Vista de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Bom Jardim de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Bom Jesus de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Bonfinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Bonópolis',
       deptoId: 300
   },
   {
       proNombre: 'Brazabrantes',
       deptoId: 300
   },
   {
       proNombre: 'Britânia',
       deptoId: 300
   },
   {
       proNombre: 'Buriti Alegre',
       deptoId: 300
   },
   {
       proNombre: 'Buriti de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Buritinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Cabeceiras',
       deptoId: 300
   },
   {
       proNombre: 'Cachoeira Alta',
       deptoId: 300
   },
   {
       proNombre: 'Cachoeira de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Cachoeira Dourada',
       deptoId: 300
   },
   {
       proNombre: 'Caçu',
       deptoId: 300
   },
   {
       proNombre: 'Caiapônia',
       deptoId: 300
   },
   {
       proNombre: 'Caldas Novas',
       deptoId: 300
   },
   {
       proNombre: 'Caldazinha',
       deptoId: 300
   },
   {
       proNombre: 'Campestre de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Campinaçu',
       deptoId: 300
   },
   {
       proNombre: 'Campinorte',
       deptoId: 300
   },
   {
       proNombre: 'Campo Alegre de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Campo Limpo de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Campos Belos',
       deptoId: 300
   },
   {
       proNombre: 'Campos Verdes',
       deptoId: 300
   },
   {
       proNombre: 'Carmo do Rio Verde',
       deptoId: 300
   },
   {
       proNombre: 'Castelândia',
       deptoId: 300
   },
   {
       proNombre: 'Catalão',
       deptoId: 300
   },
   {
       proNombre: 'Caturaí',
       deptoId: 300
   },
   {
       proNombre: 'Cavalcante',
       deptoId: 300
   },
   {
       proNombre: 'Ceres',
       deptoId: 300
   },
   {
       proNombre: 'Cezarina',
       deptoId: 300
   },
   {
       proNombre: 'Chapadão do Céu',
       deptoId: 300
   },
   {
       proNombre: 'Cidade Ocidental',
       deptoId: 300
   },
   {
       proNombre: 'Cocalzinho de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Colinas do Sul',
       deptoId: 300
   },
   {
       proNombre: 'Córrego do Ouro',
       deptoId: 300
   },
   {
       proNombre: 'Corumbá de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Corumbaíba',
       deptoId: 300
   },
   {
       proNombre: 'Cristalina',
       deptoId: 300
   },
   {
       proNombre: 'Cristianópolis',
       deptoId: 300
   },
   {
       proNombre: 'Crixás',
       deptoId: 300
   },
   {
       proNombre: 'Cromínia',
       deptoId: 300
   },
   {
       proNombre: 'Cumari',
       deptoId: 300
   },
   {
       proNombre: 'Damianópolis',
       deptoId: 300
   },
   {
       proNombre: 'Damolândia',
       deptoId: 300
   },
   {
       proNombre: 'Davinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Diorama',
       deptoId: 300
   },
   {
       proNombre: 'Divinópolis de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Doverlândia',
       deptoId: 300
   },
   {
       proNombre: 'Edealina',
       deptoId: 300
   },
   {
       proNombre: 'Edéia',
       deptoId: 300
   },
   {
       proNombre: 'Estrela do Norte',
       deptoId: 300
   },
   {
       proNombre: 'Faina',
       deptoId: 300
   },
   {
       proNombre: 'Fazenda Nova',
       deptoId: 300
   },
   {
       proNombre: 'Firminópolis',
       deptoId: 300
   },
   {
       proNombre: 'Firminópolis',
       deptoId: 300
   },
   {
       proNombre: 'Formosa',
       deptoId: 300
   },
   {
       proNombre: 'Formoso',
       deptoId: 300
   },
   {
       proNombre: 'Gameleira de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Goianápolis',
       deptoId: 300
   },
   {
       proNombre: 'Goiandira',
       deptoId: 300
   },
   {
       proNombre: 'Goianésia',
       deptoId: 300
   },
   {
       proNombre: 'Goiânia',
       deptoId: 300
   },
   {
       proNombre: 'Goianira',
       deptoId: 300
   },
   {
       proNombre: 'Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Goiatuba',
       deptoId: 300
   },
   {
       proNombre: 'Gouvelândia',
       deptoId: 300
   },
   {
       proNombre: 'Guapó',
       deptoId: 300
   },
   {
       proNombre: 'Guaraíta',
       deptoId: 300
   },
   {
       proNombre: 'Guarani de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Guarinos',
       deptoId: 300
   },
   {
       proNombre: 'Heitoraí',
       deptoId: 300
   },
   {
       proNombre: 'Hidrolândia',
       deptoId: 300
   },
   {
       proNombre: 'Hidrolina',
       deptoId: 300
   },
   {
       proNombre: 'Iaciara',
       deptoId: 300
   },
   {
       proNombre: 'Inaciolândia',
       deptoId: 300
   },
   {
       proNombre: 'Indiara',
       deptoId: 300
   },
   {
       proNombre: 'Inhumas',
       deptoId: 300
   },
   {
       proNombre: 'Ipameri',
       deptoId: 300
   },
   {
       proNombre: 'Ipiranga de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Iporá',
       deptoId: 300
   },
   {
       proNombre: 'Israelândia',
       deptoId: 300
   },
   {
       proNombre: 'Itaberaí',
       deptoId: 300
   },
   {
       proNombre: 'Itaguari',
       deptoId: 300
   },
   {
       proNombre: 'Itaguaru',
       deptoId: 300
   },
   {
       proNombre: 'Itajá',
       deptoId: 300
   },
   {
       proNombre: 'Itapaci',
       deptoId: 300
   },
   {
       proNombre: 'Itapirapuã',
       deptoId: 300
   },
   {
       proNombre: 'Itapuranga',
       deptoId: 300
   },
   {
       proNombre: 'Itarumã',
       deptoId: 300
   },
   {
       proNombre: 'Itauçu',
       deptoId: 300
   },
   {
       proNombre: 'Itumbiara',
       deptoId: 300
   },
   {
       proNombre: 'Ivolândia',
       deptoId: 300
   },
   {
       proNombre: 'Jandaia',
       deptoId: 300
   },
   {
       proNombre: 'Jaraguá',
       deptoId: 300
   },
   {
       proNombre: 'Jataí',
       deptoId: 300
   },
   {
       proNombre: 'Jaupaci',
       deptoId: 300
   },
   {
       proNombre: 'Jesúpolis',
       deptoId: 300
   },
   {
       proNombre: 'Joviânia',
       deptoId: 300
   },
   {
       proNombre: 'Jussara',
       deptoId: 300
   },
   {
       proNombre: 'Lagoa Santa',
       deptoId: 300
   },
   {
       proNombre: 'Leopoldo de Bulhões',
       deptoId: 300
   },
   {
       proNombre: 'Luziânia',
       deptoId: 300
   },
   {
       proNombre: 'Mairipotaba',
       deptoId: 300
   },
   {
       proNombre: 'Mambaí',
       deptoId: 300
   },
   {
       proNombre: 'Mara Rosa',
       deptoId: 300
   },
   {
       proNombre: 'Marzagão',
       deptoId: 300
   },
   {
       proNombre: 'Matrinchã',
       deptoId: 300
   },
   {
       proNombre: 'Maurilândia',
       deptoId: 300
   },
   {
       proNombre: 'Mimoso de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Minaçu',
       deptoId: 300
   },
   {
       proNombre: 'Mineiros',
       deptoId: 300
   },
   {
       proNombre: 'Moiporá',
       deptoId: 300
   },
   {
       proNombre: 'Monte Alegre de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Montes Claros de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Montividiu',
       deptoId: 300
   },
   {
       proNombre: 'Montividiu do Norte',
       deptoId: 300
   },
   {
       proNombre: 'Morrinhos',
       deptoId: 300
   },
   {
       proNombre: 'Morro Agudo de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Mossâmedes',
       deptoId: 300
   },
   {
       proNombre: 'Mozarlândia',
       deptoId: 300
   },
   {
       proNombre: 'Mundo Novo',
       deptoId: 300
   },
   {
       proNombre: 'Mutunópolis',
       deptoId: 300
   },
   {
       proNombre: 'Nazário',
       deptoId: 300
   },
   {
       proNombre: 'Nerópolis',
       deptoId: 300
   },
   {
       proNombre: 'Niquelândia',
       deptoId: 300
   },
   {
       proNombre: 'Nova América',
       deptoId: 300
   },
   {
       proNombre: 'Nova Aurora',
       deptoId: 300
   },
   {
       proNombre: 'Nova Crixás',
       deptoId: 300
   },
   {
       proNombre: 'Nova Glória',
       deptoId: 300
   },
   {
       proNombre: 'Nova Iguaçu de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Nova Roma',
       deptoId: 300
   },
   {
       proNombre: 'Nova Veneza',
       deptoId: 300
   },
   {
       proNombre: 'Novo Brasil',
       deptoId: 300
   },
   {
       proNombre: 'Novo Gama',
       deptoId: 300
   },
   {
       proNombre: 'Novo Planalto',
       deptoId: 300
   },
   {
       proNombre: 'Orizona',
       deptoId: 300
   },
   {
       proNombre: 'Ouro Verde de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Ouvidor',
       deptoId: 300
   },
   {
       proNombre: 'Padre Bernardo',
       deptoId: 300
   },
   {
       proNombre: 'Palestina de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Palmeiras de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Palmelo',
       deptoId: 300
   },
   {
       proNombre: 'Palminópolis',
       deptoId: 300
   },
   {
       proNombre: 'Panamá',
       deptoId: 300
   },
   {
       proNombre: 'Paranaiguara',
       deptoId: 300
   },
   {
       proNombre: 'Paraúna',
       deptoId: 300
   },
   {
       proNombre: 'Perolândia',
       deptoId: 300
   },
   {
       proNombre: 'Petrolina de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Pilar de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Piracanjuba',
       deptoId: 300
   },
   {
       proNombre: 'Piranhas',
       deptoId: 300
   },
   {
       proNombre: 'Pirenópolis',
       deptoId: 300
   },
   {
       proNombre: 'Pires do Rio',
       deptoId: 300
   },
   {
       proNombre: 'Planaltina',
       deptoId: 300
   },
   {
       proNombre: 'Pontalina',
       deptoId: 300
   },
   {
       proNombre: 'Porangatu',
       deptoId: 300
   },
   {
       proNombre: 'Porteirão',
       deptoId: 300
   },
   {
       proNombre: 'Portelândia',
       deptoId: 300
   },
   {
       proNombre: 'Posse',
       deptoId: 300
   },
   {
       proNombre: 'Professor Jamil',
       deptoId: 300
   },
   {
       proNombre: 'Quirinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Rialma',
       deptoId: 300
   },
   {
       proNombre: 'Rianápolis',
       deptoId: 300
   },
   {
       proNombre: 'Rio Quente',
       deptoId: 300
   },
   {
       proNombre: 'Rio Verde',
       deptoId: 300
   },
   {
       proNombre: 'Rubiataba',
       deptoId: 300
   },
   {
       proNombre: 'Sanclerlândia',
       deptoId: 300
   },
   {
       proNombre: 'Santa Bárbara de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santa Cruz de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santa Fé de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santa Helena de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santa Isabel',
       deptoId: 300
   },
   {
       proNombre: 'Santa Rita do Araguaia',
       deptoId: 300
   },
   {
       proNombre: 'Santa Rita do Novo Destino',
       deptoId: 300
   },
   {
       proNombre: 'Santa Rosa de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santa Tereza de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santa Terezinha de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santo Antônio da Barra',
       deptoId: 300
   },
   {
       proNombre: 'Santo Antônio de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Santo Antônio do Descoberto',
       deptoId: 300
   },
   {
       proNombre: 'São Domingos',
       deptoId: 300
   },
   {
       proNombre: 'São Francisco de Goiás',
       deptoId: 300
   },
   {
       proNombre: "São João d'Aliança",
       deptoId: 300
   },
   {
       proNombre: 'São João da Paraúna',
       deptoId: 300
   },
   {
       proNombre: 'São Luís de Montes Belos',
       deptoId: 300
   },
   {
       proNombre: 'São Luíz do Norte',
       deptoId: 300
   },
   {
       proNombre: 'São Miguel do Araguaias',
       deptoId: 300
   },
   {
       proNombre: 'São Miguel do Passa Quatro',
       deptoId: 300
   },
   {
       proNombre: 'São Patrício',
       deptoId: 300
   },
   {
       proNombre: 'São Simão',
       deptoId: 300
   },
   {
       proNombre: 'Senador Canedo',
       deptoId: 300
   },
   {
       proNombre: 'Serranópolis',
       deptoId: 300
   },
   {
       proNombre: 'Silvânia',
       deptoId: 300
   },
   {
       proNombre: 'Simolândia',
       deptoId: 300
   },
   {
       proNombre: "Sítio d'Abadia",
       deptoId: 300
   },
   {
       proNombre: 'Taquaral de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Teresina de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Terezópolis de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Três Ranchos',
       deptoId: 300
   },
   {
       proNombre: 'Trindade',
       deptoId: 300
   },
   {
       proNombre: 'Trombas',
       deptoId: 300
   },
   {
       proNombre: 'Turvânia',
       deptoId: 300
   },
   {
       proNombre: 'Turvelândia',
       deptoId: 300
   },
   {
       proNombre: 'Uirapuru',
       deptoId: 300
   },
   {
       proNombre: 'Uruaçu',
       deptoId: 300
   },
   {
       proNombre: 'Uruana',
       deptoId: 300
   },
   {
       proNombre: 'Urutaí',
       deptoId: 300
   },
   {
       proNombre: 'Valparaíso de Goiás',
       deptoId: 300
   },
   {
       proNombre: 'Varjão',
       deptoId: 300
   },
   {
       proNombre: 'Vianópolis',
       deptoId: 300
   },
   {
       proNombre: 'Vicentinópolis',
       deptoId: 300
   },
   {
       proNombre: 'Vila Boa',
       deptoId: 300
   },
   {
       proNombre: 'Vila Propício',
       deptoId: 300
   },
   {
       proNombre: 'Açailândia',
       deptoId: 301
   },
   {
       proNombre: 'Afonso Cunha',
       deptoId: 301
   },
   {
       proNombre: 'Água Doce do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Alcântara',
       deptoId: 301
   },
   {
       proNombre: 'Aldeias Altas',
       deptoId: 301
   },
   {
       proNombre: 'Altamira do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Alto Alegre do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Alto Alegre do Pindaré',
       deptoId: 301
   },
   {
       proNombre: 'Alto Parnaíba',
       deptoId: 301
   },
   {
       proNombre: 'Amapá do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Amarante do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Anajatuba',
       deptoId: 301
   },
   {
       proNombre: 'Anapurus',
       deptoId: 301
   },
   {
       proNombre: 'Apicum-Açu',
       deptoId: 301
   },
   {
       proNombre: 'Araguanã',
       deptoId: 301
   },
   {
       proNombre: 'Araioses',
       deptoId: 301
   },
   {
       proNombre: 'Arame',
       deptoId: 301
   },
   {
       proNombre: 'Arari',
       deptoId: 301
   },
   {
       proNombre: 'Axixá',
       deptoId: 301
   },
   {
       proNombre: 'Bacabal',
       deptoId: 301
   },
   {
       proNombre: 'Bacabeira',
       deptoId: 301
   },
   {
       proNombre: 'Bacuri',
       deptoId: 301
   },
   {
       proNombre: 'Bacurituba',
       deptoId: 301
   },
   {
       proNombre: 'Balsas',
       deptoId: 301
   },
   {
       proNombre: 'Barão de Grajaú',
       deptoId: 301
   },
   {
       proNombre: 'Barra do Corda',
       deptoId: 301
   },
   {
       proNombre: 'Barreirinhas',
       deptoId: 301
   },
   {
       proNombre: 'Bela Vista do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Belágua',
       deptoId: 301
   },
   {
       proNombre: 'Benedito Leite',
       deptoId: 301
   },
   {
       proNombre: 'Bequimão',
       deptoId: 301
   },
   {
       proNombre: 'Bernardo do Mearim',
       deptoId: 301
   },
   {
       proNombre: 'Boa Vista do Gurupi',
       deptoId: 301
   },
   {
       proNombre: 'Bom Jardim',
       deptoId: 301
   },
   {
       proNombre: 'Bom Jesus das Selvas',
       deptoId: 301
   },
   {
       proNombre: 'Bom Lugar',
       deptoId: 301
   },
   {
       proNombre: 'Brejo',
       deptoId: 301
   },
   {
       proNombre: 'Brejo de Areia',
       deptoId: 301
   },
   {
       proNombre: 'Buriti',
       deptoId: 301
   },
   {
       proNombre: 'Buriti Bravo',
       deptoId: 301
   },
   {
       proNombre: 'Buriticupu',
       deptoId: 301
   },
   {
       proNombre: 'Buritirana',
       deptoId: 301
   },
   {
       proNombre: 'Cachoeira Grande',
       deptoId: 301
   },
   {
       proNombre: 'Cajapió',
       deptoId: 301
   },
   {
       proNombre: 'Cajari',
       deptoId: 301
   },
   {
       proNombre: 'Campestre do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Cândido Mendes',
       deptoId: 301
   },
   {
       proNombre: 'Cantanhede',
       deptoId: 301
   },
   {
       proNombre: 'Capinzal do Norte',
       deptoId: 301
   },
   {
       proNombre: 'Carolina',
       deptoId: 301
   },
   {
       proNombre: 'Carutapera',
       deptoId: 301
   },
   {
       proNombre: 'Caxias',
       deptoId: 301
   },
   {
       proNombre: 'Cedral',
       deptoId: 301
   },
   {
       proNombre: 'Central do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Centro do Guilherme',
       deptoId: 301
   },
   {
       proNombre: 'Centro Novo do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Chapadinha',
       deptoId: 301
   },
   {
       proNombre: 'Cidelândia',
       deptoId: 301
   },
   {
       proNombre: 'Codó',
       deptoId: 301
   },
   {
       proNombre: 'Coelho Neto',
       deptoId: 301
   },
   {
       proNombre: 'Colinas',
       deptoId: 301
   },
   {
       proNombre: 'Conceição do Lago-Açu',
       deptoId: 301
   },
   {
       proNombre: 'Coroatá',
       deptoId: 301
   },
   {
       proNombre: 'Cururupu',
       deptoId: 301
   },
   {
       proNombre: 'Davinópolis',
       deptoId: 301
   },
   {
       proNombre: 'Dom Pedro',
       deptoId: 301
   },
   {
       proNombre: 'Duque Bacelar',
       deptoId: 301
   },
   {
       proNombre: 'Esperantinópolis',
       deptoId: 301
   },
   {
       proNombre: 'Estreito',
       deptoId: 301
   },
   {
       proNombre: 'Feira Nova do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Fernando Falcão',
       deptoId: 301
   },
   {
       proNombre: 'Formosa da Serra Negra',
       deptoId: 301
   },
   {
       proNombre: 'Fortaleza dos Nogueiras',
       deptoId: 301
   },
   {
       proNombre: 'Fortuna',
       deptoId: 301
   },
   {
       proNombre: 'Godofredo Viana',
       deptoId: 301
   },
   {
       proNombre: 'Gonçalves Dias',
       deptoId: 301
   },
   {
       proNombre: 'Governador Archer',
       deptoId: 301
   },
   {
       proNombre: 'Governador Edison Lobão',
       deptoId: 301
   },
   {
       proNombre: 'Governador Eugênio Barros',
       deptoId: 301
   },
   {
       proNombre: 'Governador Luiz Rocha',
       deptoId: 301
   },
   {
       proNombre: 'Governador Newton Bello',
       deptoId: 301
   },
   {
       proNombre: 'Governador Nunes Freire',
       deptoId: 301
   },
   {
       proNombre: 'Graça Aranha',
       deptoId: 301
   },
   {
       proNombre: 'Grajaú',
       deptoId: 301
   },
   {
       proNombre: 'Guimarães',
       deptoId: 301
   },
   {
       proNombre: 'Humberto de Campos',
       deptoId: 301
   },
   {
       proNombre: 'Icatu',
       deptoId: 301
   },
   {
       proNombre: 'Igarapé do Meio',
       deptoId: 301
   },
   {
       proNombre: 'Igarapé Grande',
       deptoId: 301
   },
   {
       proNombre: 'Imperatriz',
       deptoId: 301
   },
   {
       proNombre: 'Itaipava do Grajaú',
       deptoId: 301
   },
   {
       proNombre: 'Itapecuru Mirim',
       deptoId: 301
   },
   {
       proNombre: 'Itinga do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Jatobá',
       deptoId: 301
   },
   {
       proNombre: 'Jenipapo dos Vieiras',
       deptoId: 301
   },
   {
       proNombre: 'João Lisboa',
       deptoId: 301
   },
   {
       proNombre: 'Joselândia',
       deptoId: 301
   },
   {
       proNombre: 'Junco do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Lago da Pedra',
       deptoId: 301
   },
   {
       proNombre: 'Lago do Junco',
       deptoId: 301
   },
   {
       proNombre: 'Lago dos Rodrigues',
       deptoId: 301
   },
   {
       proNombre: 'Lago Verde',
       deptoId: 301
   },
   {
       proNombre: 'Lagoa do Mato',
       deptoId: 301
   },
   {
       proNombre: 'Lagoa Grande do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Lajeado Novo',
       deptoId: 301
   },
   {
       proNombre: 'Lima Campos',
       deptoId: 301
   },
   {
       proNombre: 'Loreto',
       deptoId: 301
   },
   {
       proNombre: 'Luís Domingues',
       deptoId: 301
   },
   {
       proNombre: 'Magalhães de Almeida',
       deptoId: 301
   },
   {
       proNombre: 'Maracaçumé',
       deptoId: 301
   },
   {
       proNombre: 'Marajá do Sena',
       deptoId: 301
   },
   {
       proNombre: 'Maranhãozinho',
       deptoId: 301
   },
   {
       proNombre: 'Mata Roma',
       deptoId: 301
   },
   {
       proNombre: 'Matinha',
       deptoId: 301
   },
   {
       proNombre: 'Matões',
       deptoId: 301
   },
   {
       proNombre: 'Matões do Norte',
       deptoId: 301
   },
   {
       proNombre: 'Milagres do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Mirador',
       deptoId: 301
   },
   {
       proNombre: 'Miranda do Norte',
       deptoId: 301
   },
   {
       proNombre: 'Mirinzal',
       deptoId: 301
   },
   {
       proNombre: 'Monção',
       deptoId: 301
   },
   {
       proNombre: 'Montes Altos',
       deptoId: 301
   },
   {
       proNombre: 'Morros',
       deptoId: 301
   },
   {
       proNombre: 'Nina Rodrigues',
       deptoId: 301
   },
   {
       proNombre: 'Nova Colinas',
       deptoId: 301
   },
   {
       proNombre: 'Nova Iorque',
       deptoId: 301
   },
   {
       proNombre: 'Nova Olinda do Maranhão',
       deptoId: 301
   },
   {
       proNombre: "Olho d'Água das Cunhãs",
       deptoId: 301
   },
   {
       proNombre: 'Olinda Nova do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Paço do Lumiar',
       deptoId: 301
   },
   {
       proNombre: 'Palmeirândia',
       deptoId: 301
   },
   {
       proNombre: 'Paraibano',
       deptoId: 301
   },
   {
       proNombre: 'Parnarama',
       deptoId: 301
   },
   {
       proNombre: 'Passagem Franca',
       deptoId: 301
   },
   {
       proNombre: 'Pastos Bons',
       deptoId: 301
   },
   {
       proNombre: 'Paulino Neves',
       deptoId: 301
   },
   {
       proNombre: 'Paulo Ramos',
       deptoId: 301
   },
   {
       proNombre: 'Pedreiras',
       deptoId: 301
   },
   {
       proNombre: 'Pedro do Rosário',
       deptoId: 301
   },
   {
       proNombre: 'Penalva',
       deptoId: 301
   },
   {
       proNombre: 'Peri Mirim',
       deptoId: 301
   },
   {
       proNombre: 'Peritoró',
       deptoId: 301
   },
   {
       proNombre: 'Pindaré-Mirim',
       deptoId: 301
   },
   {
       proNombre: 'Pinheiro',
       deptoId: 301
   },
   {
       proNombre: 'Pio XII',
       deptoId: 301
   },
   {
       proNombre: 'Pirapemas',
       deptoId: 301
   },
   {
       proNombre: 'Poção de Pedras',
       deptoId: 301
   },
   {
       proNombre: 'Porto Franco',
       deptoId: 301
   },
   {
       proNombre: 'Porto Rico do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Presidente Dutra',
       deptoId: 301
   },
   {
       proNombre: 'Presidente Juscelino',
       deptoId: 301
   },
   {
       proNombre: 'Presidente Médici',
       deptoId: 301
   },
   {
       proNombre: 'Presidente Sarney',
       deptoId: 301
   },
   {
       proNombre: 'Presidente Vargas',
       deptoId: 301
   },
   {
       proNombre: 'Primeira Cruz',
       deptoId: 301
   },
   {
       proNombre: 'Raposa',
       deptoId: 301
   },
   {
       proNombre: 'Riachão',
       deptoId: 301
   },
   {
       proNombre: 'Ribamar Fiquene',
       deptoId: 301
   },
   {
       proNombre: 'Rosário',
       deptoId: 301
   },
   {
       proNombre: 'Sambaíba',
       deptoId: 301
   },
   {
       proNombre: 'Santa Filomena do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Santa Helena',
       deptoId: 301
   },
   {
       proNombre: 'Santa Inês',
       deptoId: 301
   },
   {
       proNombre: 'Santa Luzia',
       deptoId: 301
   },
   {
       proNombre: 'Santa Luzia do Paruá',
       deptoId: 301
   },
   {
       proNombre: 'Santa Quitéria do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Santa Rita',
       deptoId: 301
   },
   {
       proNombre: 'Santana do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Santo Amaro do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Santo Antônio dos Lopes',
       deptoId: 301
   },
   {
       proNombre: 'São Benedito do Rio Preto',
       deptoId: 301
   },
   {
       proNombre: 'São Bento',
       deptoId: 301
   },
   {
       proNombre: 'São Bernardo',
       deptoId: 301
   },
   {
       proNombre: 'São Domingos do Azeitão',
       deptoId: 301
   },
   {
       proNombre: 'São Domingos do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'São Félix de Balsas',
       deptoId: 301
   },
   {
       proNombre: 'São Francisco do Brejão',
       deptoId: 301
   },
   {
       proNombre: 'São Francisco do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'São João Batista',
       deptoId: 301
   },
   {
       proNombre: 'São João do Carú',
       deptoId: 301
   },
   {
       proNombre: 'São João do Paraíso',
       deptoId: 301
   },
   {
       proNombre: 'São João do Soter',
       deptoId: 301
   },
   {
       proNombre: 'São João dos Patos',
       deptoId: 301
   },
   {
       proNombre: 'São José de Ribamar',
       deptoId: 301
   },
   {
       proNombre: 'São José dos Basílios',
       deptoId: 301
   },
   {
       proNombre: 'São Luís',
       deptoId: 301
   },
   {
       proNombre: 'São Luís Gonzaga do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'São Mateus do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'São Pedro da Água Branca',
       deptoId: 301
   },
   {
       proNombre: 'São Pedro dos Crentes',
       deptoId: 301
   },
   {
       proNombre: 'São Raimundo das Mangabeiras',
       deptoId: 301
   },
   {
       proNombre: 'São Raimundo do Doca Bezerra',
       deptoId: 301
   },
   {
       proNombre: 'São Roberto',
       deptoId: 301
   },
   {
       proNombre: 'São Vicente Ferrer',
       deptoId: 301
   },
   {
       proNombre: 'Satubinha',
       deptoId: 301
   },
   {
       proNombre: 'Senador Alexandre Costa',
       deptoId: 301
   },
   {
       proNombre: 'Senador La Rocque',
       deptoId: 301
   },
   {
       proNombre: 'Serrano do Maranhão',
       deptoId: 301
   },
   {
       proNombre: 'Sítio Novo',
       deptoId: 301
   },
   {
       proNombre: 'Sucupira do Norte',
       deptoId: 301
   },
   {
       proNombre: 'Sucupira do Riachão',
       deptoId: 301
   },
   {
       proNombre: 'Tasso Fragoso',
       deptoId: 301
   },
   {
       proNombre: 'Timbiras',
       deptoId: 301
   },
   {
       proNombre: 'Timon',
       deptoId: 301
   },
   {
       proNombre: 'Trizidela do Vale',
       deptoId: 301
   },
   {
       proNombre: 'Tufilândia',
       deptoId: 301
   },
   {
       proNombre: 'Tuntum',
       deptoId: 301
   },
   {
       proNombre: 'Turiaçu',
       deptoId: 301
   },
   {
       proNombre: 'Turilândia',
       deptoId: 301
   },
   {
       proNombre: 'Tutóia',
       deptoId: 301
   },
   {
       proNombre: 'Urbano Santos',
       deptoId: 301
   },
   {
       proNombre: 'Vargem Grande',
       deptoId: 301
   },
   {
       proNombre: 'Viana',
       deptoId: 301
   },
   {
       proNombre: 'Vila Nova dos Martírios',
       deptoId: 301
   },
   {
       proNombre: 'Vitória do Mearim',
       deptoId: 301
   },
   {
       proNombre: 'Vitorino Freire',
       deptoId: 301
   },
   {
       proNombre: 'Zé Doca',
       deptoId: 301
   },
   {
       proNombre: 'Acorizal',
       deptoId: 302
   },
   {
       proNombre: 'Água Boa',
       deptoId: 302
   },
   {
       proNombre: 'Alta Floresta',
       deptoId: 302
   },
   {
       proNombre: 'Alto Araguaia',
       deptoId: 302
   },
   {
       proNombre: 'Alto da Boa Vista',
       deptoId: 302
   },
   {
       proNombre: 'Alto Garças',
       deptoId: 302
   },
   {
       proNombre: 'Alto Paraguai',
       deptoId: 302
   },
   {
       proNombre: 'Alto Taquari',
       deptoId: 302
   },
   {
       proNombre: 'Apiacás',
       deptoId: 302
   },
   {
       proNombre: 'Araguaiana',
       deptoId: 302
   },
   {
       proNombre: 'Araguainha',
       deptoId: 302
   },
   {
       proNombre: 'Araputanga',
       deptoId: 302
   },
   {
       proNombre: 'Arenápolis',
       deptoId: 302
   },
   {
       proNombre: 'Aripuanã',
       deptoId: 302
   },
   {
       proNombre: 'Barão de Melgaço',
       deptoId: 302
   },
   {
       proNombre: 'Barra do Bugres',
       deptoId: 302
   },
   {
       proNombre: 'Barra do Garças',
       deptoId: 302
   },
   {
       proNombre: 'Bom Jesus do Araguaia',
       deptoId: 302
   },
   {
       proNombre: 'Brasnorte',
       deptoId: 302
   },
   {
       proNombre: 'Cáceres',
       deptoId: 302
   },
   {
       proNombre: 'Campinápolis',
       deptoId: 302
   },
   {
       proNombre: 'Campo Novo do Parecis',
       deptoId: 302
   },
   {
       proNombre: 'Campo Verde',
       deptoId: 302
   },
   {
       proNombre: 'Campos de Júlio',
       deptoId: 302
   },
   {
       proNombre: 'Canabrava do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Canarana',
       deptoId: 302
   },
   {
       proNombre: 'Carlinda',
       deptoId: 302
   },
   {
       proNombre: 'Castanheira',
       deptoId: 302
   },
   {
       proNombre: 'Chapada dos Guimarães',
       deptoId: 302
   },
   {
       proNombre: 'Cláudia',
       deptoId: 302
   },
   {
       proNombre: 'Cocalinho',
       deptoId: 302
   },
   {
       proNombre: 'Colíder',
       deptoId: 302
   },
   {
       proNombre: 'Colniza',
       deptoId: 302
   },
   {
       proNombre: 'Comodoro',
       deptoId: 302
   },
   {
       proNombre: 'Confresa',
       deptoId: 302
   },
   {
       proNombre: "Conquista d'Oeste",
       deptoId: 302
   },
   {
       proNombre: 'Cotriguaçu',
       deptoId: 302
   },
   {
       proNombre: 'Cuiabá',
       deptoId: 302
   },
   {
       proNombre: 'Curvelândia',
       deptoId: 302
   },
   {
       proNombre: 'Denise',
       deptoId: 302
   },
   {
       proNombre: 'Diamantino',
       deptoId: 302
   },
   {
       proNombre: 'Dom Aquino',
       deptoId: 302
   },
   {
       proNombre: 'Feliz Natal',
       deptoId: 302
   },
   {
       proNombre: "Figueirópolis d'Oeste",
       deptoId: 302
   },
   {
       proNombre: 'Gaúcha do Norte',
       deptoId: 302
   },
   {
       proNombre: 'General Carneiro',
       deptoId: 302
   },
   {
       proNombre: "Glória d'Oeste",
       deptoId: 302
   },
   {
       proNombre: 'Guarantã do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Guiratinga',
       deptoId: 302
   },
   {
       proNombre: 'Indiavaí',
       deptoId: 302
   },
   {
       proNombre: 'Ipiranga do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Itanhangá',
       deptoId: 302
   },
   {
       proNombre: 'Itaúba',
       deptoId: 302
   },
   {
       proNombre: 'Itiquira',
       deptoId: 302
   },
   {
       proNombre: 'Jaciara',
       deptoId: 302
   },
   {
       proNombre: 'Jangada',
       deptoId: 302
   },
   {
       proNombre: 'Jauru',
       deptoId: 302
   },
   {
       proNombre: 'Juara',
       deptoId: 302
   },
   {
       proNombre: 'Juína',
       deptoId: 302
   },
   {
       proNombre: 'Juruena',
       deptoId: 302
   },
   {
       proNombre: 'Juscimeira',
       deptoId: 302
   },
   {
       proNombre: "Lambari d'Oeste",
       deptoId: 302
   },
   {
       proNombre: 'Lucas do Rio Verde',
       deptoId: 302
   },
   {
       proNombre: 'Luciara',
       deptoId: 302
   },
   {
       proNombre: 'Marcelândia',
       deptoId: 302
   },
   {
       proNombre: 'Matupá',
       deptoId: 302
   },
   {
       proNombre: "Mirassol d'Oeste",
       deptoId: 302
   },
   {
       proNombre: 'Nobres',
       deptoId: 302
   },
   {
       proNombre: 'Nortelândia',
       deptoId: 302
   },
   {
       proNombre: 'Nossa Senhora do Livramento',
       deptoId: 302
   },
   {
       proNombre: 'Nova Bandeirantes',
       deptoId: 302
   },
   {
       proNombre: 'Nova Brasilândia',
       deptoId: 302
   },
   {
       proNombre: 'Nova Canaã do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Nova Fronteira',
       deptoId: 302
   },
   {
       proNombre: 'Nova Guarita',
       deptoId: 302
   },
   {
       proNombre: 'Nova Lacerda',
       deptoId: 302
   },
   {
       proNombre: 'Nova Marilândia',
       deptoId: 302
   },
   {
       proNombre: 'Nova Maringá',
       deptoId: 302
   },
   {
       proNombre: 'Nova Monte Verde',
       deptoId: 302
   },
   {
       proNombre: 'Nova Mutum',
       deptoId: 302
   },
   {
       proNombre: 'Nova Nazaré',
       deptoId: 302
   },
   {
       proNombre: 'Nova Olímpia',
       deptoId: 302
   },
   {
       proNombre: 'Nova Santa Helena',
       deptoId: 302
   },
   {
       proNombre: 'Nova Ubiratã',
       deptoId: 302
   },
   {
       proNombre: 'Nova Xavantina',
       deptoId: 302
   },
   {
       proNombre: 'Novo Horizonte do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Novo Mundo',
       deptoId: 302
   },
   {
       proNombre: 'Novo Santo Antônio',
       deptoId: 302
   },
   {
       proNombre: 'Novo São Joaquim',
       deptoId: 302
   },
   {
       proNombre: 'Paranaíta',
       deptoId: 302
   },
   {
       proNombre: 'Paranatinga',
       deptoId: 302
   },
   {
       proNombre: 'Pedra Preta',
       deptoId: 302
   },
   {
       proNombre: 'Peixoto de Azevedo',
       deptoId: 302
   },
   {
       proNombre: 'Planalto da Serra',
       deptoId: 302
   },
   {
       proNombre: 'Poconé',
       deptoId: 302
   },
   {
       proNombre: 'Pontal do Araguaia',
       deptoId: 302
   },
   {
       proNombre: 'Ponte Branca',
       deptoId: 302
   },
   {
       proNombre: 'Pontes e Lacerda',
       deptoId: 302
   },
   {
       proNombre: 'Porto Alegre do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Porto dos Gaúchos',
       deptoId: 302
   },
   {
       proNombre: 'Porto Esperidião',
       deptoId: 302
   },
   {
       proNombre: 'Porto Estrela',
       deptoId: 302
   },
   {
       proNombre: 'Poxoréu',
       deptoId: 302
   },
   {
       proNombre: 'Primavera do Leste',
       deptoId: 302
   },
   {
       proNombre: 'Querência',
       deptoId: 302
   },
   {
       proNombre: 'Reserva do Cabaçal',
       deptoId: 302
   },
   {
       proNombre: 'Ribeirão Cascalheira',
       deptoId: 302
   },
   {
       proNombre: 'Ribeirãozinho',
       deptoId: 302
   },
   {
       proNombre: 'Rio Branco',
       deptoId: 302
   },
   {
       proNombre: 'Rondolândia',
       deptoId: 302
   },
   {
       proNombre: 'Rondonópolis',
       deptoId: 302
   },
   {
       proNombre: 'Rosário Oeste',
       deptoId: 302
   },
   {
       proNombre: 'Salto do Céu',
       deptoId: 302
   },
   {
       proNombre: 'Santa Carmem',
       deptoId: 302
   },
   {
       proNombre: 'Santa Cruz do Xingu',
       deptoId: 302
   },
   {
       proNombre: 'Santa Rita do Trivelato',
       deptoId: 302
   },
   {
       proNombre: 'Santa Terezinha',
       deptoId: 302
   },
   {
       proNombre: 'Santo Afonso',
       deptoId: 302
   },
   {
       proNombre: 'Santo Antônio do Leste',
       deptoId: 302
   },
   {
       proNombre: 'Santo Antônio do Leverger',
       deptoId: 302
   },
   {
       proNombre: 'São Félix do Araguaia',
       deptoId: 302
   },
   {
       proNombre: 'São José do Povo',
       deptoId: 302
   },
   {
       proNombre: 'São José do Rio Claro',
       deptoId: 302
   },
   {
       proNombre: 'São José do Xingu',
       deptoId: 302
   },
   {
       proNombre: 'São José dos Quatro Marcos',
       deptoId: 302
   },
   {
       proNombre: 'São Pedro da Cipa',
       deptoId: 302
   },
   {
       proNombre: 'Sapezal',
       deptoId: 302
   },
   {
       proNombre: 'Serra Nova Dourada',
       deptoId: 302
   },
   {
       proNombre: 'Sinop',
       deptoId: 302
   },
   {
       proNombre: 'Sorriso',
       deptoId: 302
   },
   {
       proNombre: 'Tabaporã',
       deptoId: 302
   },
   {
       proNombre: 'Tangará da Serra',
       deptoId: 302
   },
   {
       proNombre: 'Tapurah',
       deptoId: 302
   },
   {
       proNombre: 'Terra Nova do Norte',
       deptoId: 302
   },
   {
       proNombre: 'Tesouro',
       deptoId: 302
   },
   {
       proNombre: 'Torixoréu',
       deptoId: 302
   },
   {
       proNombre: 'União do Sul',
       deptoId: 302
   },
   {
       proNombre: 'Vale de São Domingos',
       deptoId: 302
   },
   {
       proNombre: 'Vale de São Domingos',
       deptoId: 302
   },
   {
       proNombre: 'Vila Bela da Santíssima Trindade',
       deptoId: 302
   },
   {
       proNombre: 'Vila Rica',
       deptoId: 302
   },
   {
       proNombre: 'Água Clara',
       deptoId: 303
   },
   {
       proNombre: 'Alcinópolis',
       deptoId: 303
   },
   {
       proNombre: 'Amambai',
       deptoId: 303
   },
   {
       proNombre: 'Anastácio',
       deptoId: 303
   },
   {
       proNombre: 'Anaurilândia',
       deptoId: 303
   },
   {
       proNombre: 'Angélica',
       deptoId: 303
   },
   {
       proNombre: 'Antônio João',
       deptoId: 303
   },
   {
       proNombre: 'Aparecida do Taboado',
       deptoId: 303
   },
   {
       proNombre: 'Aquidauana',
       deptoId: 303
   },
   {
       proNombre: 'Aral Moreira',
       deptoId: 303
   },
   {
       proNombre: 'Bandeirantes',
       deptoId: 303
   },
   {
       proNombre: 'Bataguassu',
       deptoId: 303
   },
   {
       proNombre: 'Batayporã',
       deptoId: 303
   },
   {
       proNombre: 'Bela Vista',
       deptoId: 303
   },
   {
       proNombre: 'Bodoquena',
       deptoId: 303
   },
   {
       proNombre: 'Bonito',
       deptoId: 303
   },
   {
       proNombre: 'Brasilândia',
       deptoId: 303
   },
   {
       proNombre: 'Caarapó',
       deptoId: 303
   },
   {
       proNombre: 'Camapuã',
       deptoId: 303
   },
   {
       proNombre: 'Campo Grande',
       deptoId: 303
   },
   {
       proNombre: 'Caracol',
       deptoId: 303
   },
   {
       proNombre: 'Cassilândia',
       deptoId: 303
   },
   {
       proNombre: 'Chapadão do Sul',
       deptoId: 303
   },
   {
       proNombre: 'Corguinho',
       deptoId: 303
   },
   {
       proNombre: 'Coronel Sapucaia',
       deptoId: 303
   },
   {
       proNombre: 'Corumbá',
       deptoId: 303
   },
   {
       proNombre: 'Costa Rica',
       deptoId: 303
   },
   {
       proNombre: 'Coxim',
       deptoId: 303
   },
   {
       proNombre: 'Deodápolis',
       deptoId: 303
   },
   {
       proNombre: 'Dois Irmãos do Buriti',
       deptoId: 303
   },
   {
       proNombre: 'Douradina',
       deptoId: 303
   },
   {
       proNombre: 'Dourados',
       deptoId: 303
   },
   {
       proNombre: 'Eldorado',
       deptoId: 303
   },
   {
       proNombre: 'Fátima do Sul',
       deptoId: 303
   },
   {
       proNombre: 'Figueirão',
       deptoId: 303
   },
   {
       proNombre: 'Glória de Dourados',
       deptoId: 303
   },
   {
       proNombre: 'Guia Lopes da Laguna',
       deptoId: 303
   },
   {
       proNombre: 'Iguatemi',
       deptoId: 303
   },
   {
       proNombre: 'Inocência',
       deptoId: 303
   },
   {
       proNombre: 'Itaporã',
       deptoId: 303
   },
   {
       proNombre: 'Itaquiraí',
       deptoId: 303
   },
   {
       proNombre: 'Ivinhema',
       deptoId: 303
   },
   {
       proNombre: 'Japorã',
       deptoId: 303
   },
   {
       proNombre: 'Jaraguari',
       deptoId: 303
   },
   {
       proNombre: 'Jardim',
       deptoId: 303
   },
   {
       proNombre: 'Jateí',
       deptoId: 303
   },
   {
       proNombre: 'Juti',
       deptoId: 303
   },
   {
       proNombre: 'Ladário',
       deptoId: 303
   },
   {
       proNombre: 'Laguna Carapã',
       deptoId: 303
   },
   {
       proNombre: 'Maracaju',
       deptoId: 303
   },
   {
       proNombre: 'Miranda',
       deptoId: 303
   },
   {
       proNombre: 'Mundo Novo',
       deptoId: 303
   },
   {
       proNombre: 'Naviraí',
       deptoId: 303
   },
   {
       proNombre: 'Naviraí',
       deptoId: 303
   },
   {
       proNombre: 'Nova Alvorada do Sul',
       deptoId: 303
   },
   {
       proNombre: 'Nova Andradina',
       deptoId: 303
   },
   {
       proNombre: 'Novo Horizonte do Sul',
       deptoId: 303
   },
   {
       proNombre: 'Paraíso das Águas',
       deptoId: 303
   },
   {
       proNombre: 'Paranaíba',
       deptoId: 303
   },
   {
       proNombre: 'Paranhos',
       deptoId: 303
   },
   {
       proNombre: 'Ponta Porã',
       deptoId: 303
   },
   {
       proNombre: 'Ponta Porã',
       deptoId: 303
   },
   {
       proNombre: 'Ribas do Rio Pardo',
       deptoId: 303
   },
   {
       proNombre: 'Rio Brilhante',
       deptoId: 303
   },
   {
       proNombre: 'Rio Negro',
       deptoId: 303
   },
   {
       proNombre: 'Rio Verde de Mato Grosso',
       deptoId: 303
   },
   {
       proNombre: 'Rochedo',
       deptoId: 303
   },
   {
       proNombre: 'Santa Rita do Pardo',
       deptoId: 303
   },
   {
       proNombre: 'São Gabriel do Oeste',
       deptoId: 303
   },
   {
       proNombre: 'Selvíria',
       deptoId: 303
   },
   {
       proNombre: 'Sete Quedas',
       deptoId: 303
   },
   {
       proNombre: 'Sidrolândia',
       deptoId: 303
   },
   {
       proNombre: 'Sonora',
       deptoId: 303
   },
   {
       proNombre: 'Tacuru',
       deptoId: 303
   },
   {
       proNombre: 'Taquarussu',
       deptoId: 303
   },
   {
       proNombre: 'Terrenos',
       deptoId: 303
   },
   {
       proNombre: 'Três Lagoas',
       deptoId: 303
   },
   {
       proNombre: 'Vicentina',
       deptoId: 303
   },
   {
       proNombre: 'Campo das Vertentes',
       deptoId: 304
   },
   {
       proNombre: 'Central Mineira',
       deptoId: 304
   },
   {
       proNombre: 'Jequitinhonha',
       deptoId: 304
   },
   {
       proNombre: 'Metropolitana de Belo Horizonte',
       deptoId: 304
   },
   {
       proNombre: 'Noroeste de Minas',
       deptoId: 304
   },
   {
       proNombre: 'Norte de Minas',
       deptoId: 304
   },
   {
       proNombre: 'Oeste de Minas',
       deptoId: 304
   },
   {
       proNombre: 'Sur y Sudoeste de Minas',
       deptoId: 304
   },
   {
       proNombre: 'Triângulo Mineiro e Alto Paranaíba',
       deptoId: 304
   },
   {
       proNombre: 'Vale do Mucuri',
       deptoId: 304
   },
   {
       proNombre: 'Vale do Rio Doce',
       deptoId: 304
   },
   {
       proNombre: 'Zona da Mata',
       deptoId: 304
   },
   {
       proNombre: 'Abaetetuba',
       deptoId: 305
   },
   {
       proNombre: 'Abel Figueiredo',
       deptoId: 305
   },
   {
       proNombre: 'Acará',
       deptoId: 305
   },
   {
       proNombre: 'Afuá',
       deptoId: 305
   },
   {
       proNombre: 'Água Azul do Norte',
       deptoId: 305
   },
   {
       proNombre: 'Alenquer',
       deptoId: 305
   },
   {
       proNombre: 'Almeirim',
       deptoId: 305
   },
   {
       proNombre: 'Altamira',
       deptoId: 305
   },
   {
       proNombre: 'Anajás',
       deptoId: 305
   },
   {
       proNombre: 'Ananindeua',
       deptoId: 305
   },
   {
       proNombre: 'Anapu',
       deptoId: 305
   },
   {
       proNombre: 'Augusto Corrêa',
       deptoId: 305
   },
   {
       proNombre: 'Aurora do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Aveiro',
       deptoId: 305
   },
   {
       proNombre: 'Bagre',
       deptoId: 305
   },
   {
       proNombre: 'Baião',
       deptoId: 305
   },
   {
       proNombre: 'Bannach',
       deptoId: 305
   },
   {
       proNombre: 'Bannach',
       deptoId: 305
   },
   {
       proNombre: 'Barcarena',
       deptoId: 305
   },
   {
       proNombre: 'Belterra',
       deptoId: 305
   },
   {
       proNombre: 'Benevides',
       deptoId: 305
   },
   {
       proNombre: 'Bom Jesus do Tocantins',
       deptoId: 305
   },
   {
       proNombre: 'Breu Branco',
       deptoId: 305
   },
   {
       proNombre: 'Breves',
       deptoId: 305
   },
   {
       proNombre: 'Bujaru',
       deptoId: 305
   },
   {
       proNombre: 'Cachoeira do Arari',
       deptoId: 305
   },
   {
       proNombre: 'Cachoeira do Piriá',
       deptoId: 305
   },
   {
       proNombre: 'Cametá',
       deptoId: 305
   },
   {
       proNombre: 'Canaã dos Carajás',
       deptoId: 305
   },
   {
       proNombre: 'Capanema',
       deptoId: 305
   },
   {
       proNombre: 'Capitão Poço',
       deptoId: 305
   },
   {
       proNombre: 'Castanhal',
       deptoId: 305
   },
   {
       proNombre: 'Chaves',
       deptoId: 305
   },
   {
       proNombre: 'Colares',
       deptoId: 305
   },
   {
       proNombre: 'Conceição do Araguaia',
       deptoId: 305
   },
   {
       proNombre: 'Concórdia do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Cumaru do Norte',
       deptoId: 305
   },
   {
       proNombre: 'Curionópolis',
       deptoId: 305
   },
   {
       proNombre: 'Curralinho',
       deptoId: 305
   },
   {
       proNombre: 'Curuá',
       deptoId: 305
   },
   {
       proNombre: 'Curuçá',
       deptoId: 305
   },
   {
       proNombre: 'Dom Eliseu',
       deptoId: 305
   },
   {
       proNombre: 'Eldorado dos Carajás',
       deptoId: 305
   },
   {
       proNombre: 'Faro',
       deptoId: 305
   },
   {
       proNombre: 'Floresta do Araguaias',
       deptoId: 305
   },
   {
       proNombre: 'Garrafão do Norte',
       deptoId: 305
   },
   {
       proNombre: 'Goianésia do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Gurupá',
       deptoId: 305
   },
   {
       proNombre: 'Igarapé-Açu',
       deptoId: 305
   },
   {
       proNombre: 'Igarapé-Miri',
       deptoId: 305
   },
   {
       proNombre: 'Inhangapi',
       deptoId: 305
   },
   {
       proNombre: 'Ipixuna do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Irituia',
       deptoId: 305
   },
   {
       proNombre: 'Itaituba',
       deptoId: 305
   },
   {
       proNombre: 'Itupiranga',
       deptoId: 305
   },
   {
       proNombre: 'Jacareacanga',
       deptoId: 305
   },
   {
       proNombre: 'Jacundá',
       deptoId: 305
   },
   {
       proNombre: 'Juruti',
       deptoId: 305
   },
   {
       proNombre: 'Limoeiro do Ajuru',
       deptoId: 305
   },
   {
       proNombre: 'Mãe do Rio',
       deptoId: 305
   },
   {
       proNombre: 'Magalhães Barata',
       deptoId: 305
   },
   {
       proNombre: 'Marabá',
       deptoId: 305
   },
   {
       proNombre: 'Maracanã',
       deptoId: 305
   },
   {
       proNombre: 'Marapanim',
       deptoId: 305
   },
   {
       proNombre: 'Marituba',
       deptoId: 305
   },
   {
       proNombre: 'Medicilândia',
       deptoId: 305
   },
   {
       proNombre: 'Melgaço',
       deptoId: 305
   },
   {
       proNombre: 'Mocajuba',
       deptoId: 305
   },
   {
       proNombre: 'Moju',
       deptoId: 305
   },
   {
       proNombre: 'Monte Alegre',
       deptoId: 305
   },
   {
       proNombre: 'Muaná',
       deptoId: 305
   },
   {
       proNombre: 'Nova Esperança do Piriá',
       deptoId: 305
   },
   {
       proNombre: 'Nova Ipixuna',
       deptoId: 305
   },
   {
       proNombre: 'Nova Timboteua',
       deptoId: 305
   },
   {
       proNombre: 'Novo Repartimento',
       deptoId: 305
   },
   {
       proNombre: 'Óbidos',
       deptoId: 305
   },
   {
       proNombre: 'Oeiras do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Oriximiná',
       deptoId: 305
   },
   {
       proNombre: 'Ourém',
       deptoId: 305
   },
   {
       proNombre: 'Ourilândia do Norte',
       deptoId: 305
   },
   {
       proNombre: 'Pacajá',
       deptoId: 305
   },
   {
       proNombre: 'Palestina do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Paragominas',
       deptoId: 305
   },
   {
       proNombre: 'Parauapebas',
       deptoId: 305
   },
   {
       proNombre: "Pau D'Arco",
       deptoId: 305
   },
   {
       proNombre: 'Peixe-Boi',
       deptoId: 305
   },
   {
       proNombre: 'Piçarra',
       deptoId: 305
   },
   {
       proNombre: 'Placas',
       deptoId: 305
   },
   {
       proNombre: 'Ponta de Pedras',
       deptoId: 305
   },
   {
       proNombre: 'Portel',
       deptoId: 305
   },
   {
       proNombre: 'Porto de Moz',
       deptoId: 305
   },
   {
       proNombre: 'Prainha',
       deptoId: 305
   },
   {
       proNombre: 'Primavera',
       deptoId: 305
   },
   {
       proNombre: 'Quatipuru',
       deptoId: 305
   },
   {
       proNombre: 'Redenção',
       deptoId: 305
   },
   {
       proNombre: 'Rio Maria',
       deptoId: 305
   },
   {
       proNombre: 'Rondon do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Rurópolis',
       deptoId: 305
   },
   {
       proNombre: 'Salinópolis',
       deptoId: 305
   },
   {
       proNombre: 'Salvaterra',
       deptoId: 305
   },
   {
       proNombre: 'Santa Bárbara do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Santa Cruz do Arari',
       deptoId: 305
   },
   {
       proNombre: 'Santa Isabel do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Santa Luzia do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Santa Maria das Barreiras',
       deptoId: 305
   },
   {
       proNombre: 'Santa Maria do Pará',
       deptoId: 305
   },
   {
       proNombre: 'Santana do Araguaia',
       deptoId: 305
   },
   {
       proNombre: 'Santarém',
       deptoId: 305
   },
   {
       proNombre: 'Santarém Novo',
       deptoId: 305
   },
   {
       proNombre: 'Santo Antônio do Tauá',
       deptoId: 305
   },
   {
       proNombre: 'São Caetano de Odivelas',
       deptoId: 305
   },
   {
       proNombre: 'São Domingos do Araguaia',
       deptoId: 305
   },
   {
       proNombre: 'São Domingos do Capim',
       deptoId: 305
   },
   {
       proNombre: 'São Félix do Xingu',
       deptoId: 305
   },
   {
       proNombre: 'São Francisco do Pará',
       deptoId: 305
   },
   {
       proNombre: 'São Geraldo do Araguaia',
       deptoId: 305
   },
   {
       proNombre: 'São João da Ponta',
       deptoId: 305
   },
   {
       proNombre: 'São João de Pirabas',
       deptoId: 305
   },
   {
       proNombre: 'São João do Araguaia',
       deptoId: 305
   },
   {
       proNombre: 'São Miguel do Guamá',
       deptoId: 305
   },
   {
       proNombre: 'São Sebastião da Boa Vista',
       deptoId: 305
   },
   {
       proNombre: 'Sapucaia',
       deptoId: 305
   },
   {
       proNombre: 'Senador José Porfírio',
       deptoId: 305
   },
   {
       proNombre: 'Soure',
       deptoId: 305
   },
   {
       proNombre: 'Tailândia',
       deptoId: 305
   },
   {
       proNombre: 'Terra Alta',
       deptoId: 305
   },
   {
       proNombre: 'Terra Santa',
       deptoId: 305
   },
   {
       proNombre: 'Tomé-Açu',
       deptoId: 305
   },
   {
       proNombre: 'Tracuateua',
       deptoId: 305
   },
   {
       proNombre: 'Trairão',
       deptoId: 305
   },
   {
       proNombre: 'Tucumã',
       deptoId: 305
   },
   {
       proNombre: 'Tucuruí',
       deptoId: 305
   },
   {
       proNombre: 'Ulianópolis',
       deptoId: 305
   },
   {
       proNombre: 'Uruará',
       deptoId: 305
   },
   {
       proNombre: 'Vigia',
       deptoId: 305
   },
   {
       proNombre: 'Viseu',
       deptoId: 305
   },
   {
       proNombre: 'Vitória do Xingu',
       deptoId: 305
   },
   {
       proNombre: 'Xinguara',
       deptoId: 305
   },
   {
       proNombre: 'Água Branca',
       deptoId: 306
   },
   {
       proNombre: 'Aguiar',
       deptoId: 306
   },
   {
       proNombre: 'Alagoa Grande',
       deptoId: 306
   },
   {
       proNombre: 'Alagoa Nova',
       deptoId: 306
   },
   {
       proNombre: 'Alagoinha',
       deptoId: 306
   },
   {
       proNombre: 'Alahandra',
       deptoId: 306
   },
   {
       proNombre: 'Alcantil',
       deptoId: 306
   },
   {
       proNombre: 'Algodão de Jandaíra',
       deptoId: 306
   },
   {
       proNombre: 'Amparo',
       deptoId: 306
   },
   {
       proNombre: 'Aparecida',
       deptoId: 306
   },
   {
       proNombre: 'Araçagi',
       deptoId: 306
   },
   {
       proNombre: 'Arara',
       deptoId: 306
   },
   {
       proNombre: 'Araruna',
       deptoId: 306
   },
   {
       proNombre: 'Areia',
       deptoId: 306
   },
   {
       proNombre: 'Areia de Baraúnas',
       deptoId: 306
   },
   {
       proNombre: 'Areial',
       deptoId: 306
   },
   {
       proNombre: 'Aroeiras',
       deptoId: 306
   },
   {
       proNombre: 'Assunção',
       deptoId: 306
   },
   {
       proNombre: 'Baía da Traição',
       deptoId: 306
   },
   {
       proNombre: 'Bananeiras',
       deptoId: 306
   },
   {
       proNombre: 'Baraúna',
       deptoId: 306
   },
   {
       proNombre: 'Barra de Santa Rosa',
       deptoId: 306
   },
   {
       proNombre: 'Barra de Santana',
       deptoId: 306
   },
   {
       proNombre: 'Barra de São Miguel',
       deptoId: 306
   },
   {
       proNombre: 'Bayeux',
       deptoId: 306
   },
   {
       proNombre: 'Belém',
       deptoId: 306
   },
   {
       proNombre: 'Belém do Brejo do Cruz',
       deptoId: 306
   },
   {
       proNombre: 'Bernardino Batista',
       deptoId: 306
   },
   {
       proNombre: 'Boa Ventura',
       deptoId: 306
   },
   {
       proNombre: 'Boa Vista',
       deptoId: 306
   },
   {
       proNombre: 'Bom Jesus',
       deptoId: 306
   },
   {
       proNombre: 'Bom Sucesso',
       deptoId: 306
   },
   {
       proNombre: 'Bonito de Santa Fé',
       deptoId: 306
   },
   {
       proNombre: 'Boqueirão',
       deptoId: 306
   },
   {
       proNombre: 'Borborema',
       deptoId: 306
   },
   {
       proNombre: 'Brejo do Cruz',
       deptoId: 306
   },
   {
       proNombre: 'Brejo dos Santos',
       deptoId: 306
   },
   {
       proNombre: 'Caaporã',
       deptoId: 306
   },
   {
       proNombre: 'Cabaceiras',
       deptoId: 306
   },
   {
       proNombre: '',
       deptoId: 306
   },
   {
       proNombre: 'Cabedelo',
       deptoId: 306
   },
   {
       proNombre: 'Cachoeira dos Índios',
       deptoId: 306
   },
   {
       proNombre: 'Cacimba de Areia',
       deptoId: 306
   },
   {
       proNombre: 'Cacimba de Dentro',
       deptoId: 306
   },
   {
       proNombre: 'Cacimbas',
       deptoId: 306
   },
   {
       proNombre: 'Caiçara',
       deptoId: 306
   },
   {
       proNombre: 'Cajazeiras',
       deptoId: 306
   },
   {
       proNombre: 'Cajazeirinhas',
       deptoId: 306
   },
   {
       proNombre: 'Caldas Brandão',
       deptoId: 306
   },
   {
       proNombre: 'Camalaú',
       deptoId: 306
   },
   {
       proNombre: 'Campina Grande',
       deptoId: 306
   },
   {
       proNombre: 'Campo de Santana',
       deptoId: 306
   },
   {
       proNombre: 'Capim',
       deptoId: 306
   },
   {
       proNombre: 'Caraúbas',
       deptoId: 306
   },
   {
       proNombre: 'Carrapateira',
       deptoId: 306
   },
   {
       proNombre: 'Casserengue',
       deptoId: 306
   },
   {
       proNombre: 'Catingueira',
       deptoId: 306
   },
   {
       proNombre: 'Catolé do Rocha',
       deptoId: 306
   },
   {
       proNombre: 'Caturité',
       deptoId: 306
   },
   {
       proNombre: 'Conceição',
       deptoId: 306
   },
   {
       proNombre: 'Condado',
       deptoId: 306
   },
   {
       proNombre: 'Conde',
       deptoId: 306
   },
   {
       proNombre: 'Congo',
       deptoId: 306
   },
   {
       proNombre: 'Coremas',
       deptoId: 306
   },
   {
       proNombre: 'Coxixola',
       deptoId: 306
   },
   {
       proNombre: 'Cruz do Espírito Santo',
       deptoId: 306
   },
   {
       proNombre: 'Cubati',
       deptoId: 306
   },
   {
       proNombre: 'Cuité',
       deptoId: 306
   },
   {
       proNombre: 'Cuité de Mamanguape',
       deptoId: 306
   },
   {
       proNombre: 'Cuitegi',
       deptoId: 306
   },
   {
       proNombre: 'Curral de Cima',
       deptoId: 306
   },
   {
       proNombre: 'Curral Velho',
       deptoId: 306
   },
   {
       proNombre: 'Damião',
       deptoId: 306
   },
   {
       proNombre: 'Desterro',
       deptoId: 306
   },
   {
       proNombre: 'Diamante',
       deptoId: 306
   },
   {
       proNombre: 'Dona Inês',
       deptoId: 306
   },
   {
       proNombre: 'Duas Estradas',
       deptoId: 306
   },
   {
       proNombre: 'Emas',
       deptoId: 306
   },
   {
       proNombre: 'Esperança',
       deptoId: 306
   },
   {
       proNombre: 'Fagundes',
       deptoId: 306
   },
   {
       proNombre: 'Frei Martinho',
       deptoId: 306
   },
   {
       proNombre: 'Gado Bravo',
       deptoId: 306
   },
   {
       proNombre: 'Guarabira',
       deptoId: 306
   },
   {
       proNombre: 'Gurinhém',
       deptoId: 306
   },
   {
       proNombre: 'Gurjão',
       deptoId: 306
   },
   {
       proNombre: 'Ibiara',
       deptoId: 306
   },
   {
       proNombre: 'Igaracy',
       deptoId: 306
   },
   {
       proNombre: 'Imaculada',
       deptoId: 306
   },
   {
       proNombre: 'Ingá',
       deptoId: 306
   },
   {
       proNombre: 'Itabaiana',
       deptoId: 306
   },
   {
       proNombre: 'Itaporanga',
       deptoId: 306
   },
   {
       proNombre: 'Itapororoca',
       deptoId: 306
   },
   {
       proNombre: 'Itatuba',
       deptoId: 306
   },
   {
       proNombre: 'Jacaraú',
       deptoId: 306
   },
   {
       proNombre: 'Jericó',
       deptoId: 306
   },
   {
       proNombre: 'João Pessoa',
       deptoId: 306
   },
   {
       proNombre: 'Juarez Távora',
       deptoId: 306
   },
   {
       proNombre: 'Juazeirinho',
       deptoId: 306
   },
   {
       proNombre: 'Junco do Seridó',
       deptoId: 306
   },
   {
       proNombre: 'Juripiranga',
       deptoId: 306
   },
   {
       proNombre: 'Juru',
       deptoId: 306
   },
   {
       proNombre: 'Lagoa',
       deptoId: 306
   },
   {
       proNombre: 'Lagoa de Dentro',
       deptoId: 306
   },
   {
       proNombre: 'Lagoa Seca',
       deptoId: 306
   },
   {
       proNombre: 'Lastro',
       deptoId: 306
   },
   {
       proNombre: 'Livramento',
       deptoId: 306
   },
   {
       proNombre: 'Logradouro',
       deptoId: 306
   },
   {
       proNombre: 'Lucena',
       deptoId: 306
   },
   {
       proNombre: "Mãe d'Água",
       deptoId: 306
   },
   {
       proNombre: 'Malta',
       deptoId: 306
   },
   {
       proNombre: 'Mamanguape',
       deptoId: 306
   },
   {
       proNombre: 'Manaíra',
       deptoId: 306
   },
   {
       proNombre: 'Marcação',
       deptoId: 306
   },
   {
       proNombre: 'Mari',
       deptoId: 306
   },
   {
       proNombre: 'Marizópolis',
       deptoId: 306
   },
   {
       proNombre: 'Massaranduba',
       deptoId: 306
   },
   {
       proNombre: 'Mataraca',
       deptoId: 306
   },
   {
       proNombre: 'Matinhas',
       deptoId: 306
   },
   {
       proNombre: 'Mato Grosso',
       deptoId: 306
   },
   {
       proNombre: 'Maturéia',
       deptoId: 306
   },
   {
       proNombre: 'Mogeiro',
       deptoId: 306
   },
   {
       proNombre: 'Montadas',
       deptoId: 306
   },
   {
       proNombre: 'Monte Horebe',
       deptoId: 306
   },
   {
       proNombre: 'Monteiro',
       deptoId: 306
   },
   {
       proNombre: 'Mulungu',
       deptoId: 306
   },
   {
       proNombre: 'Natuba',
       deptoId: 306
   },
   {
       proNombre: 'Nazarezinho',
       deptoId: 306
   },
   {
       proNombre: 'Nova Floresta',
       deptoId: 306
   },
   {
       proNombre: 'Nova Olinda',
       deptoId: 306
   },
   {
       proNombre: 'Nova Palmeira',
       deptoId: 306
   },
   {
       proNombre: "Olho d'Água",
       deptoId: 306
   },
   {
       proNombre: 'Olivedos',
       deptoId: 306
   },
   {
       proNombre: 'Ouro Velho',
       deptoId: 306
   },
   {
       proNombre: 'Parari',
       deptoId: 306
   },
   {
       proNombre: 'Passagem',
       deptoId: 306
   },
   {
       proNombre: 'Patos',
       deptoId: 306
   },
   {
       proNombre: 'Paulista',
       deptoId: 306
   },
   {
       proNombre: 'Pedra Branca',
       deptoId: 306
   },
   {
       proNombre: 'Pedra Lavrada',
       deptoId: 306
   },
   {
       proNombre: 'Pedras de Fogo',
       deptoId: 306
   },
   {
       proNombre: 'Pedro Régis',
       deptoId: 306
   },
   {
       proNombre: 'Piancó',
       deptoId: 306
   },
   {
       proNombre: 'Picuí',
       deptoId: 306
   },
   {
       proNombre: 'Pilar',
       deptoId: 306
   },
   {
       proNombre: 'Pilões',
       deptoId: 306
   },
   {
       proNombre: 'Pilõezinhos',
       deptoId: 306
   },
   {
       proNombre: 'Pirpirituba',
       deptoId: 306
   },
   {
       proNombre: 'Pitimbu',
       deptoId: 306
   },
   {
       proNombre: 'Pocinhos',
       deptoId: 306
   },
   {
       proNombre: 'Poço Dantas',
       deptoId: 306
   },
   {
       proNombre: 'Poço de José de Moura',
       deptoId: 306
   },
   {
       proNombre: 'Pombal',
       deptoId: 306
   },
   {
       proNombre: 'Prata',
       deptoId: 306
   },
   {
       proNombre: 'Princesa Isabel',
       deptoId: 306
   },
   {
       proNombre: 'Puxinanã',
       deptoId: 306
   },
   {
       proNombre: 'Queimadas',
       deptoId: 306
   },
   {
       proNombre: 'Quixabá',
       deptoId: 306
   },
   {
       proNombre: 'Remígio',
       deptoId: 306
   },
   {
       proNombre: 'Riachão',
       deptoId: 306
   },
   {
       proNombre: 'Riachão do Bacamarte',
       deptoId: 306
   },
   {
       proNombre: 'Riachão do Poço',
       deptoId: 306
   },
   {
       proNombre: 'Riacho de Santo Antônio',
       deptoId: 306
   },
   {
       proNombre: 'Riacho dos Cavalos',
       deptoId: 306
   },
   {
       proNombre: 'Rio Tinto',
       deptoId: 306
   },
   {
       proNombre: 'Salgadinho',
       deptoId: 306
   },
   {
       proNombre: 'Salgado de São Félix',
       deptoId: 306
   },
   {
       proNombre: 'Santa Cecília',
       deptoId: 306
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 306
   },
   {
       proNombre: 'Santa Helena',
       deptoId: 306
   },
   {
       proNombre: 'Santa Inês',
       deptoId: 306
   },
   {
       proNombre: 'Santa Luzia',
       deptoId: 306
   },
   {
       proNombre: 'Santa Rita',
       deptoId: 306
   },
   {
       proNombre: 'Santa Teresinha',
       deptoId: 306
   },
   {
       proNombre: 'Santana de Mangueira',
       deptoId: 306
   },
   {
       proNombre: 'Santana dos Garrotes',
       deptoId: 306
   },
   {
       proNombre: '	Santarém',
       deptoId: 306
   },
   {
       proNombre: 'Santo André',
       deptoId: 306
   },
   {
       proNombre: 'São Bentinho',
       deptoId: 306
   },
   {
       proNombre: 'São Bento',
       deptoId: 306
   },
   {
       proNombre: 'São Domingos de Pombal',
       deptoId: 306
   },
   {
       proNombre: 'São Domingos do Cariri',
       deptoId: 306
   },
   {
       proNombre: 'São Francisco',
       deptoId: 306
   },
   {
       proNombre: 'São João do Cariri',
       deptoId: 306
   },
   {
       proNombre: 'São João do Rio do Peixe',
       deptoId: 306
   },
   {
       proNombre: 'São João do Tigre',
       deptoId: 306
   },
   {
       proNombre: 'São José da Lagoa Tapada',
       deptoId: 306
   },
   {
       proNombre: 'São José de Caiana',
       deptoId: 306
   },
   {
       proNombre: 'São José de Espinharas',
       deptoId: 306
   },
   {
       proNombre: 'São José de Piranhas',
       deptoId: 306
   },
   {
       proNombre: 'São José de Princesa',
       deptoId: 306
   },
   {
       proNombre: 'São José do Bonfim',
       deptoId: 306
   },
   {
       proNombre: 'São José do Brejo do Cruz',
       deptoId: 306
   },
   {
       proNombre: 'São José do Sabugi',
       deptoId: 306
   },
   {
       proNombre: 'São José dos Cordeiros',
       deptoId: 306
   },
   {
       proNombre: 'São José dos Ramos',
       deptoId: 306
   },
   {
       proNombre: 'São Mamede',
       deptoId: 306
   },
   {
       proNombre: 'São Miguel de Taipu',
       deptoId: 306
   },
   {
       proNombre: 'São Sebastião de Lagoa de Roça',
       deptoId: 306
   },
   {
       proNombre: 'São Sebastião do Umbuzeiro',
       deptoId: 306
   },
   {
       proNombre: 'Sapé',
       deptoId: 306
   },
   {
       proNombre: 'Seridó',
       deptoId: 306
   },
   {
       proNombre: 'Serra Branca',
       deptoId: 306
   },
   {
       proNombre: 'Serra da Raiz',
       deptoId: 306
   },
   {
       proNombre: 'Serra Grande',
       deptoId: 306
   },
   {
       proNombre: 'Serra Redonda',
       deptoId: 306
   },
   {
       proNombre: 'Serraria',
       deptoId: 306
   },
   {
       proNombre: 'Sertãozinho',
       deptoId: 306
   },
   {
       proNombre: 'Sobrado',
       deptoId: 306
   },
   {
       proNombre: 'Solânea',
       deptoId: 306
   },
   {
       proNombre: 'Soledade',
       deptoId: 306
   },
   {
       proNombre: 'Sossêgo',
       deptoId: 306
   },
   {
       proNombre: 'Sousa',
       deptoId: 306
   },
   {
       proNombre: 'Sumé',
       deptoId: 306
   },
   {
       proNombre: 'Taperoá',
       deptoId: 306
   },
   {
       proNombre: 'Tavares',
       deptoId: 306
   },
   {
       proNombre: 'Teixeira',
       deptoId: 306
   },
   {
       proNombre: 'Tenório',
       deptoId: 306
   },
   {
       proNombre: 'Triunfo',
       deptoId: 306
   },
   {
       proNombre: 'Uiraúna',
       deptoId: 306
   },
   {
       proNombre: 'Umbuzeiro',
       deptoId: 306
   },
   {
       proNombre: 'Várzea',
       deptoId: 306
   },
   {
       proNombre: 'Vieirópolis',
       deptoId: 306
   },
   {
       proNombre: 'Vista Serrana',
       deptoId: 306
   },
   {
       proNombre: 'Zabelê',
       deptoId: 306
   },
   {
       proNombre: 'Abatiá',
       deptoId: 307
   },
   {
       proNombre: 'Adrianópolis',
       deptoId: 307
   },
   {
       proNombre: 'Agudos do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Almirante Tamandaré',
       deptoId: 307
   },
   {
       proNombre: 'Altamira do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'Alto Paraíso',
       deptoId: 307
   },
   {
       proNombre: 'Alto Paraná',
       deptoId: 307
   },
   {
       proNombre: 'Alto Piquiri',
       deptoId: 307
   },
   {
       proNombre: 'Altônia',
       deptoId: 307
   },
   {
       proNombre: 'Alvorada do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Amaporã',
       deptoId: 307
   },
   {
       proNombre: 'Ampére',
       deptoId: 307
   },
   {
       proNombre: 'Anahy',
       deptoId: 307
   },
   {
       proNombre: 'Andirá',
       deptoId: 307
   },
   {
       proNombre: 'Ângulo',
       deptoId: 307
   },
   {
       proNombre: 'Antonina',
       deptoId: 307
   },
   {
       proNombre: 'Antônio Olinto',
       deptoId: 307
   },
   {
       proNombre: 'Apucarana',
       deptoId: 307
   },
   {
       proNombre: 'Arapongas',
       deptoId: 307
   },
   {
       proNombre: 'Arapoti',
       deptoId: 307
   },
   {
       proNombre: 'Arapuã',
       deptoId: 307
   },
   {
       proNombre: 'Araruna',
       deptoId: 307
   },
   {
       proNombre: 'Araucária',
       deptoId: 307
   },
   {
       proNombre: 'Ariranha do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'Assaí',
       deptoId: 307
   },
   {
       proNombre: 'Assis Chateaubriand',
       deptoId: 307
   },
   {
       proNombre: 'Astorga',
       deptoId: 307
   },
   {
       proNombre: 'Atalaia',
       deptoId: 307
   },
   {
       proNombre: 'Balsa Nova',
       deptoId: 307
   },
   {
       proNombre: 'Bandeirantes',
       deptoId: 307
   },
   {
       proNombre: 'Barbosa Ferraz',
       deptoId: 307
   },
   {
       proNombre: 'Barra do Jacaré',
       deptoId: 307
   },
   {
       proNombre: 'Barracão',
       deptoId: 307
   },
   {
       proNombre: 'Bela Vista da Caroba',
       deptoId: 307
   },
   {
       proNombre: 'Bela Vista do Paraíso',
       deptoId: 307
   },
   {
       proNombre: 'Bituruna',
       deptoId: 307
   },
   {
       proNombre: 'Boa Esperança',
       deptoId: 307
   },
   {
       proNombre: 'Boa Esperança do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Boa Ventura de São Roque',
       deptoId: 307
   },
   {
       proNombre: 'Boa Vista da Aparecida',
       deptoId: 307
   },
   {
       proNombre: 'Bocaiúva do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Bom Jesus do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Bom Sucesso',
       deptoId: 307
   },
   {
       proNombre: 'Bom Sucesso do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Borrazópolis',
       deptoId: 307
   },
   {
       proNombre: 'Braganey',
       deptoId: 307
   },
   {
       proNombre: 'Brasilândia do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Cafeara',
       deptoId: 307
   },
   {
       proNombre: 'Cafelândia',
       deptoId: 307
   },
   {
       proNombre: 'Cafezal do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Califórnia',
       deptoId: 307
   },
   {
       proNombre: 'Cambará',
       deptoId: 307
   },
   {
       proNombre: 'Cambé',
       deptoId: 307
   },
   {
       proNombre: 'Cambira',
       deptoId: 307
   },
   {
       proNombre: 'Campina da Lagoa',
       deptoId: 307
   },
   {
       proNombre: 'Campina do Simão',
       deptoId: 307
   },
   {
       proNombre: 'Campina Grande do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Campo Bonito',
       deptoId: 307
   },
   {
       proNombre: 'Campo do Tenente',
       deptoId: 307
   },
   {
       proNombre: 'Campo Largo',
       deptoId: 307
   },
   {
       proNombre: 'Campo Magro',
       deptoId: 307
   },
   {
       proNombre: 'Campo Mourão',
       deptoId: 307
   },
   {
       proNombre: 'Cândido de Abreu',
       deptoId: 307
   },
   {
       proNombre: 'Candói',
       deptoId: 307
   },
   {
       proNombre: 'Cantagalo',
       deptoId: 307
   },
   {
       proNombre: 'Capanema',
       deptoId: 307
   },
   {
       proNombre: 'Capitão Leônidas Marques',
       deptoId: 307
   },
   {
       proNombre: 'Carambeí',
       deptoId: 307
   },
   {
       proNombre: 'Carlópolis',
       deptoId: 307
   },
   {
       proNombre: 'Cascavel',
       deptoId: 307
   },
   {
       proNombre: 'Castro',
       deptoId: 307
   },
   {
       proNombre: 'Catanduvas',
       deptoId: 307
   },
   {
       proNombre: 'Centenário do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Cerro Azul',
       deptoId: 307
   },
   {
       proNombre: 'Céu Azul',
       deptoId: 307
   },
   {
       proNombre: 'Chopinzinho',
       deptoId: 307
   },
   {
       proNombre: 'Cianorte',
       deptoId: 307
   },
   {
       proNombre: 'Cidade Gaúcha',
       deptoId: 307
   },
   {
       proNombre: 'Clevelândia',
       deptoId: 307
   },
   {
       proNombre: 'Colombo',
       deptoId: 307
   },
   {
       proNombre: 'Colorado',
       deptoId: 307
   },
   {
       proNombre: 'Congonhinhas',
       deptoId: 307
   },
   {
       proNombre: 'Conselheiro Mairinck',
       deptoId: 307
   },
   {
       proNombre: 'Contenda',
       deptoId: 307
   },
   {
       proNombre: 'Corbélia',
       deptoId: 307
   },
   {
       proNombre: 'Cornélio Procópio',
       deptoId: 307
   },
   {
       proNombre: 'Coronel Domingos Soares',
       deptoId: 307
   },
   {
       proNombre: 'Coronel Vivida',
       deptoId: 307
   },
   {
       proNombre: 'Corumbataí do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Cruz Machado',
       deptoId: 307
   },
   {
       proNombre: 'Cruzeiro do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Cruzeiro do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Cruzeiro do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Cruzmaltina',
       deptoId: 307
   },
   {
       proNombre: 'Curitiba',
       deptoId: 307
   },
   {
       proNombre: 'Curiúva',
       deptoId: 307
   },
   {
       proNombre: "Diamante d'Oeste",
       deptoId: 307
   },
   {
       proNombre: 'Diamante do Norte',
       deptoId: 307
   },
   {
       proNombre: 'Diamante do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Dois Vizinhos',
       deptoId: 307
   },
   {
       proNombre: 'Douradina',
       deptoId: 307
   },
   {
       proNombre: 'Doutor Camargo',
       deptoId: 307
   },
   {
       proNombre: 'Doutor Ulysses',
       deptoId: 307
   },
   {
       proNombre: 'Enéas Marques',
       deptoId: 307
   },
   {
       proNombre: 'Engenheiro Beltrão',
       deptoId: 307
   },
   {
       proNombre: 'Entre Rios do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Esperança Nova',
       deptoId: 307
   },
   {
       proNombre: 'Espigão Alto do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Farol',
       deptoId: 307
   },
   {
       proNombre: 'Faxinal',
       deptoId: 307
   },
   {
       proNombre: 'Fazenda Rio Grande',
       deptoId: 307
   },
   {
       proNombre: 'Fênix',
       deptoId: 307
   },
   {
       proNombre: 'Fernandes Pinheiro',
       deptoId: 307
   },
   {
       proNombre: 'Figueira',
       deptoId: 307
   },
   {
       proNombre: 'Flor da Serra do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Floraí',
       deptoId: 307
   },
   {
       proNombre: 'Floresta',
       deptoId: 307
   },
   {
       proNombre: 'Florestópolis',
       deptoId: 307
   },
   {
       proNombre: 'Flórida',
       deptoId: 307
   },
   {
       proNombre: 'Formosa do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Foz do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Foz do Jordão',
       deptoId: 307
   },
   {
       proNombre: 'Francisco Alves',
       deptoId: 307
   },
   {
       proNombre: 'Francisco Beltrão',
       deptoId: 307
   },
   {
       proNombre: 'General Carneiro',
       deptoId: 307
   },
   {
       proNombre: 'Godoy Moreira',
       deptoId: 307
   },
   {
       proNombre: 'Goioerê',
       deptoId: 307
   },
   {
       proNombre: 'Goioxim',
       deptoId: 307
   },
   {
       proNombre: 'Grandes Rios',
       deptoId: 307
   },
   {
       proNombre: 'Guaíra',
       deptoId: 307
   },
   {
       proNombre: 'Guairaçá',
       deptoId: 307
   },
   {
       proNombre: 'Guamiranga',
       deptoId: 307
   },
   {
       proNombre: 'Guapirama',
       deptoId: 307
   },
   {
       proNombre: 'Guaporema',
       deptoId: 307
   },
   {
       proNombre: 'Guaraci',
       deptoId: 307
   },
   {
       proNombre: 'Guaraniaçu',
       deptoId: 307
   },
   {
       proNombre: 'Guarapuava',
       deptoId: 307
   },
   {
       proNombre: 'Guaraqueçaba',
       deptoId: 307
   },
   {
       proNombre: 'Guaratuba',
       deptoId: 307
   },
   {
       proNombre: 'Honório Serpa',
       deptoId: 307
   },
   {
       proNombre: 'Ibaiti',
       deptoId: 307
   },
   {
       proNombre: 'Ibema',
       deptoId: 307
   },
   {
       proNombre: 'Ibiporã',
       deptoId: 307
   },
   {
       proNombre: 'Icaraíma',
       deptoId: 307
   },
   {
       proNombre: 'Iguaraçu',
       deptoId: 307
   },
   {
       proNombre: 'Iguatu',
       deptoId: 307
   },
   {
       proNombre: 'Imbaú',
       deptoId: 307
   },
   {
       proNombre: 'Imbituva',
       deptoId: 307
   },
   {
       proNombre: 'Inácio Martins',
       deptoId: 307
   },
   {
       proNombre: 'Inajá',
       deptoId: 307
   },
   {
       proNombre: 'Indianópolis',
       deptoId: 307
   },
   {
       proNombre: 'Ipiranga',
       deptoId: 307
   },
   {
       proNombre: 'Iporã',
       deptoId: 307
   },
   {
       proNombre: 'Iracema do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Irati',
       deptoId: 307
   },
   {
       proNombre: 'Iretama',
       deptoId: 307
   },
   {
       proNombre: 'Itaguajé',
       deptoId: 307
   },
   {
       proNombre: 'Itaipulândia',
       deptoId: 307
   },
   {
       proNombre: 'Itambaracá',
       deptoId: 307
   },
   {
       proNombre: 'Itambé',
       deptoId: 307
   },
   {
       proNombre: "Itapejara d'Oeste",
       deptoId: 307
   },
   {
       proNombre: 'Itaperuçu',
       deptoId: 307
   },
   {
       proNombre: 'Itaúna do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'Ivaiporã',
       deptoId: 307
   },
   {
       proNombre: 'Ivaté',
       deptoId: 307
   },
   {
       proNombre: 'Ivatuba',
       deptoId: 307
   },
   {
       proNombre: 'Jaboti',
       deptoId: 307
   },
   {
       proNombre: 'Jacarezinho',
       deptoId: 307
   },
   {
       proNombre: 'Jaguapitã',
       deptoId: 307
   },
   {
       proNombre: 'Jaguariaíva',
       deptoId: 307
   },
   {
       proNombre: 'Jandaia do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Janiópolis',
       deptoId: 307
   },
   {
       proNombre: 'Japira',
       deptoId: 307
   },
   {
       proNombre: 'Japurá',
       deptoId: 307
   },
   {
       proNombre: 'Jardim Alegre',
       deptoId: 307
   },
   {
       proNombre: 'Jardim Olinda',
       deptoId: 307
   },
   {
       proNombre: 'Jataizinho',
       deptoId: 307
   },
   {
       proNombre: 'Jesuítas',
       deptoId: 307
   },
   {
       proNombre: 'Joaquim Távora',
       deptoId: 307
   },
   {
       proNombre: 'Jundiaí do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Juranda',
       deptoId: 307
   },
   {
       proNombre: 'Jussara',
       deptoId: 307
   },
   {
       proNombre: 'Kaloré',
       deptoId: 307
   },
   {
       proNombre: 'Lapa',
       deptoId: 307
   },
   {
       proNombre: 'Laranjal',
       deptoId: 307
   },
   {
       proNombre: 'Laranjeiras do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Leópolis',
       deptoId: 307
   },
   {
       proNombre: 'Lidianópolis',
       deptoId: 307
   },
   {
       proNombre: 'Lindoeste',
       deptoId: 307
   },
   {
       proNombre: 'Loanda',
       deptoId: 307
   },
   {
       proNombre: 'Lobato',
       deptoId: 307
   },
   {
       proNombre: 'Londrina',
       deptoId: 307
   },
   {
       proNombre: 'Luiziana',
       deptoId: 307
   },
   {
       proNombre: 'Lunardelli',
       deptoId: 307
   },
   {
       proNombre: 'Lupionópolis',
       deptoId: 307
   },
   {
       proNombre: 'Mallet',
       deptoId: 307
   },
   {
       proNombre: 'Mamborê',
       deptoId: 307
   },
   {
       proNombre: 'Mandaguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Mandaguari',
       deptoId: 307
   },
   {
       proNombre: 'Mandirituba',
       deptoId: 307
   },
   {
       proNombre: 'Manfrinópolis',
       deptoId: 307
   },
   {
       proNombre: 'Mangueirinha',
       deptoId: 307
   },
   {
       proNombre: 'Manoel Ribas',
       deptoId: 307
   },
   {
       proNombre: 'Marechal Cândido Rondon',
       deptoId: 307
   },
   {
       proNombre: 'Maria Helena',
       deptoId: 307
   },
   {
       proNombre: 'Marialva',
       deptoId: 307
   },
   {
       proNombre: 'Marilândia do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Marilena',
       deptoId: 307
   },
   {
       proNombre: 'Mariluz',
       deptoId: 307
   },
   {
       proNombre: 'Maringá',
       deptoId: 307
   },
   {
       proNombre: 'Mariópolis',
       deptoId: 307
   },
   {
       proNombre: 'Maripá',
       deptoId: 307
   },
   {
       proNombre: 'Marmeleiro',
       deptoId: 307
   },
   {
       proNombre: 'Marquinho',
       deptoId: 307
   },
   {
       proNombre: 'Marumbi',
       deptoId: 307
   },
   {
       proNombre: 'Matelândia',
       deptoId: 307
   },
   {
       proNombre: 'Matinhos',
       deptoId: 307
   },
   {
       proNombre: 'Mato Rico',
       deptoId: 307
   },
   {
       proNombre: 'Mauá da Serra',
       deptoId: 307
   },
   {
       proNombre: 'Medianeira',
       deptoId: 307
   },
   {
       proNombre: 'Mercedes',
       deptoId: 307
   },
   {
       proNombre: 'Mirador',
       deptoId: 307
   },
   {
       proNombre: 'Miraselva',
       deptoId: 307
   },
   {
       proNombre: 'Missal',
       deptoId: 307
   },
   {
       proNombre: 'Moreira Sales',
       deptoId: 307
   },
   {
       proNombre: 'Morretes',
       deptoId: 307
   },
   {
       proNombre: 'Munhoz de Melo',
       deptoId: 307
   },
   {
       proNombre: 'Nossa Senhora das Graças',
       deptoId: 307
   },
   {
       proNombre: 'Nova Aliança do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'Nova América da Colina',
       deptoId: 307
   },
   {
       proNombre: 'Nova Aurora',
       deptoId: 307
   },
   {
       proNombre: 'Nova Cantu',
       deptoId: 307
   },
   {
       proNombre: 'Nova Esperança',
       deptoId: 307
   },
   {
       proNombre: 'Nova Esperança do Sudoeste',
       deptoId: 307
   },
   {
       proNombre: 'Nova Fátima',
       deptoId: 307
   },
   {
       proNombre: 'Nova Laranjeiras',
       deptoId: 307
   },
   {
       proNombre: 'Nova Londrina',
       deptoId: 307
   },
   {
       proNombre: 'Nova Olímpia',
       deptoId: 307
   },
   {
       proNombre: 'Nova Prata do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Nova Santa Bárbara',
       deptoId: 307
   },
   {
       proNombre: 'Nova Santa Rosa',
       deptoId: 307
   },
   {
       proNombre: 'Nova Tebas',
       deptoId: 307
   },
   {
       proNombre: 'Novo Itacolomi',
       deptoId: 307
   },
   {
       proNombre: 'Ortigueira',
       deptoId: 307
   },
   {
       proNombre: 'Ourizona',
       deptoId: 307
   },
   {
       proNombre: 'Ouro Verde do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Paiçandu',
       deptoId: 307
   },
   {
       proNombre: 'Palmas',
       deptoId: 307
   },
   {
       proNombre: 'Palmeira',
       deptoId: 307
   },
   {
       proNombre: 'Palmital',
       deptoId: 307
   },
   {
       proNombre: 'Palotina',
       deptoId: 307
   },
   {
       proNombre: 'Paraíso do Norte',
       deptoId: 307
   },
   {
       proNombre: 'Paranacity',
       deptoId: 307
   },
   {
       proNombre: 'Paranaguá',
       deptoId: 307
   },
   {
       proNombre: 'Paranapoema',
       deptoId: 307
   },
   {
       proNombre: 'Paranavaí',
       deptoId: 307
   },
   {
       proNombre: 'Pato Bragado',
       deptoId: 307
   },
   {
       proNombre: 'Pato Branco',
       deptoId: 307
   },
   {
       proNombre: 'Paula Freitas',
       deptoId: 307
   },
   {
       proNombre: 'Paulo Frontin',
       deptoId: 307
   },
   {
       proNombre: 'Peabiru',
       deptoId: 307
   },
   {
       proNombre: 'Perobal',
       deptoId: 307
   },
   {
       proNombre: 'Pérola',
       deptoId: 307
   },
   {
       proNombre: "Pérola d'Oeste",
       deptoId: 307
   },
   {
       proNombre: 'Piên',
       deptoId: 307
   },
   {
       proNombre: 'Pinhais',
       deptoId: 307
   },
   {
       proNombre: 'Pinhal de São Bento',
       deptoId: 307
   },
   {
       proNombre: 'Pinhalão',
       deptoId: 307
   },
   {
       proNombre: 'Pinhão',
       deptoId: 307
   },
   {
       proNombre: 'Piraí do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Piraquara',
       deptoId: 307
   },
   {
       proNombre: 'Pitanga',
       deptoId: 307
   },
   {
       proNombre: 'Pitangueiras',
       deptoId: 307
   },
   {
       proNombre: 'Planaltina do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'Planalto',
       deptoId: 307
   },
   {
       proNombre: 'Ponta Grossa',
       deptoId: 307
   },
   {
       proNombre: 'Pontal do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'Porecatu',
       deptoId: 307
   },
   {
       proNombre: 'Porto Amazonas',
       deptoId: 307
   },
   {
       proNombre: 'Porto Barreiro',
       deptoId: 307
   },
   {
       proNombre: 'Porto Rico',
       deptoId: 307
   },
   {
       proNombre: 'Porto Vitória',
       deptoId: 307
   },
   {
       proNombre: 'Prado Ferreira',
       deptoId: 307
   },
   {
       proNombre: 'Pranchita',
       deptoId: 307
   },
   {
       proNombre: 'Presidente Castelo Branco',
       deptoId: 307
   },
   {
       proNombre: 'Primeiro de Maio',
       deptoId: 307
   },
   {
       proNombre: 'Prudentópolis',
       deptoId: 307
   },
   {
       proNombre: 'Quarto Centenário',
       deptoId: 307
   },
   {
       proNombre: 'Quatiguá',
       deptoId: 307
   },
   {
       proNombre: 'Quatro Barras',
       deptoId: 307
   },
   {
       proNombre: 'Quatro Pontes',
       deptoId: 307
   },
   {
       proNombre: 'Quedas do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Querência do Norte',
       deptoId: 307
   },
   {
       proNombre: 'Quinta do Sol',
       deptoId: 307
   },
   {
       proNombre: 'Quitandinha',
       deptoId: 307
   },
   {
       proNombre: 'Ramilândia',
       deptoId: 307
   },
   {
       proNombre: 'Rancho Alegre',
       deptoId: 307
   },
   {
       proNombre: "Rancho Alegre d'Oeste",
       deptoId: 307
   },
   {
       proNombre: 'Realeza',
       deptoId: 307
   },
   {
       proNombre: 'Rebouças',
       deptoId: 307
   },
   {
       proNombre: 'Renascença',
       deptoId: 307
   },
   {
       proNombre: 'Reserva',
       deptoId: 307
   },
   {
       proNombre: 'Reserva do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Ribeirão Claro',
       deptoId: 307
   },
   {
       proNombre: 'Ribeirão do Pinhal',
       deptoId: 307
   },
   {
       proNombre: 'Rio Azul',
       deptoId: 307
   },
   {
       proNombre: 'Rio Bom',
       deptoId: 307
   },
   {
       proNombre: 'Rio Bonito do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Rio Branco do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'Rio Branco do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Rio Negro',
       deptoId: 307
   },
   {
       proNombre: 'Rolândia',
       deptoId: 307
   },
   {
       proNombre: 'Roncador',
       deptoId: 307
   },
   {
       proNombre: 'Rondon',
       deptoId: 307
   },
   {
       proNombre: 'Rosário do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'Sabáudia',
       deptoId: 307
   },
   {
       proNombre: 'Salgado Filho',
       deptoId: 307
   },
   {
       proNombre: 'Salto do Itararé',
       deptoId: 307
   },
   {
       proNombre: 'Salto do Lontra',
       deptoId: 307
   },
   {
       proNombre: 'Santa Amélia',
       deptoId: 307
   },
   {
       proNombre: 'Santa Cecília do Pavão',
       deptoId: 307
   },
   {
       proNombre: 'Santa Cruz do Monte Castelo',
       deptoId: 307
   },
   {
       proNombre: 'Santa Fé',
       deptoId: 307
   },
   {
       proNombre: 'Santa Helena',
       deptoId: 307
   },
   {
       proNombre: 'Santa Inês',
       deptoId: 307
   },
   {
       proNombre: 'Santa Isabel do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'Santa Izabel do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Santa Lúcia',
       deptoId: 307
   },
   {
       proNombre: 'Santa Maria do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Santa Mariana',
       deptoId: 307
   },
   {
       proNombre: 'Santa Mônica',
       deptoId: 307
   },
   {
       proNombre: 'Santa Tereza do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Santa Terezinha de Itaipu',
       deptoId: 307
   },
   {
       proNombre: 'Santana do Itararé',
       deptoId: 307
   },
   {
       proNombre: 'Santo Antônio da Platina',
       deptoId: 307
   },
   {
       proNombre: 'Santo Antônio do Caiuá',
       deptoId: 307
   },
   {
       proNombre: 'Santo Antônio do Paraíso',
       deptoId: 307
   },
   {
       proNombre: 'Santo Antônio do Sudoeste',
       deptoId: 307
   },
   {
       proNombre: 'Santo Inácio',
       deptoId: 307
   },
   {
       proNombre: 'São Carlos do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'São Jerônimo da Serra',
       deptoId: 307
   },
   {
       proNombre: 'São João',
       deptoId: 307
   },
   {
       proNombre: 'São João do Caiuá',
       deptoId: 307
   },
   {
       proNombre: 'São João do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'São João do Triunfo',
       deptoId: 307
   },
   {
       proNombre: "São Jorge d'Oeste",
       deptoId: 307
   },
   {
       proNombre: 'São Jorge do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'São Jorge do Patrocínio',
       deptoId: 307
   },
   {
       proNombre: 'São José da Boa Vista',
       deptoId: 307
   },
   {
       proNombre: 'São José das Palmeiras',
       deptoId: 307
   },
   {
       proNombre: 'São José dos Pinhais',
       deptoId: 307
   },
   {
       proNombre: 'São Manoel do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'São Mateus do Sul',
       deptoId: 307
   },
   {
       proNombre: 'São Miguel do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'São Pedro do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'São Pedro do Ivaí',
       deptoId: 307
   },
   {
       proNombre: 'São Pedro do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'São Sebastião da Amoreira',
       deptoId: 307
   },
   {
       proNombre: 'São Tomé',
       deptoId: 307
   },
   {
       proNombre: 'Sapopema',
       deptoId: 307
   },
   {
       proNombre: 'Sarandi',
       deptoId: 307
   },
   {
       proNombre: 'Saudade do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Sengés',
       deptoId: 307
   },
   {
       proNombre: 'Serranópolis do Iguaçu',
       deptoId: 307
   },
   {
       proNombre: 'Sertaneja',
       deptoId: 307
   },
   {
       proNombre: 'Sertanópolis',
       deptoId: 307
   },
   {
       proNombre: 'Siqueira Campos',
       deptoId: 307
   },
   {
       proNombre: 'Sulina',
       deptoId: 307
   },
   {
       proNombre: 'Tamarana',
       deptoId: 307
   },
   {
       proNombre: 'Tamboara',
       deptoId: 307
   },
   {
       proNombre: 'Tapejara',
       deptoId: 307
   },
   {
       proNombre: 'Tapira',
       deptoId: 307
   },
   {
       proNombre: 'Teixeira Soares',
       deptoId: 307
   },
   {
       proNombre: 'Telêmaco Borba',
       deptoId: 307
   },
   {
       proNombre: 'Terra Boa',
       deptoId: 307
   },
   {
       proNombre: 'Terra Rica',
       deptoId: 307
   },
   {
       proNombre: 'Terra Roxa',
       deptoId: 307
   },
   {
       proNombre: 'Tibagi',
       deptoId: 307
   },
   {
       proNombre: 'Tijucas do Sul',
       deptoId: 307
   },
   {
       proNombre: 'Toledo',
       deptoId: 307
   },
   {
       proNombre: 'Tomazina',
       deptoId: 307
   },
   {
       proNombre: 'Três Barras do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'Tunas do Paraná',
       deptoId: 307
   },
   {
       proNombre: 'Tuneiras do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Tupãssi',
       deptoId: 307
   },
   {
       proNombre: 'Turvo',
       deptoId: 307
   },
   {
       proNombre: 'Ubiratã',
       deptoId: 307
   },
   {
       proNombre: 'Umuarama',
       deptoId: 307
   },
   {
       proNombre: 'União da Vitória',
       deptoId: 307
   },
   {
       proNombre: 'Uniflor',
       deptoId: 307
   },
   {
       proNombre: 'Uraí',
       deptoId: 307
   },
   {
       proNombre: 'Ventania',
       deptoId: 307
   },
   {
       proNombre: 'Vera Cruz do Oeste',
       deptoId: 307
   },
   {
       proNombre: 'Verê',
       deptoId: 307
   },
   {
       proNombre: 'Virmond',
       deptoId: 307
   },
   {
       proNombre: 'Vitorino',
       deptoId: 307
   },
   {
       proNombre: 'Wenceslau Braz',
       deptoId: 307
   },
   {
       proNombre: 'Xambrê',
       deptoId: 307
   },
   {
       proNombre: 'Abreu e Lima',
       deptoId: 308
   },
   {
       proNombre: 'Afogados da Ingazeira',
       deptoId: 308
   },
   {
       proNombre: 'Afrânio',
       deptoId: 308
   },
   {
       proNombre: 'Agrestina',
       deptoId: 308
   },
   {
       proNombre: 'Água Preta',
       deptoId: 308
   },
   {
       proNombre: 'Águas Belas',
       deptoId: 308
   },
   {
       proNombre: 'Alagoinha',
       deptoId: 308
   },
   {
       proNombre: 'Aliança',
       deptoId: 308
   },
   {
       proNombre: 'Altinho',
       deptoId: 308
   },
   {
       proNombre: 'Amaraji',
       deptoId: 308
   },
   {
       proNombre: 'Angelim',
       deptoId: 308
   },
   {
       proNombre: 'Araçoiaba',
       deptoId: 308
   },
   {
       proNombre: 'Araripina',
       deptoId: 308
   },
   {
       proNombre: 'Arcoverde',
       deptoId: 308
   },
   {
       proNombre: 'Barra de Guabiraba',
       deptoId: 308
   },
   {
       proNombre: 'Barreiros',
       deptoId: 308
   },
   {
       proNombre: 'Belém de Maria',
       deptoId: 308
   },
   {
       proNombre: 'Belém de São Francisco',
       deptoId: 308
   },
   {
       proNombre: 'Belo Jardim',
       deptoId: 308
   },
   {
       proNombre: 'Betânia',
       deptoId: 308
   },
   {
       proNombre: 'Bezerros',
       deptoId: 308
   },
   {
       proNombre: 'Bodocó',
       deptoId: 308
   },
   {
       proNombre: 'Bom Conselho',
       deptoId: 308
   },
   {
       proNombre: 'Bom Jardim',
       deptoId: 308
   },
   {
       proNombre: 'Bonito',
       deptoId: 308
   },
   {
       proNombre: 'Brejão',
       deptoId: 308
   },
   {
       proNombre: 'Brejinho',
       deptoId: 308
   },
   {
       proNombre: 'Brejo da Madre de Deus',
       deptoId: 308
   },
   {
       proNombre: 'Buenos Aires',
       deptoId: 308
   },
   {
       proNombre: 'Buíque',
       deptoId: 308
   },
   {
       proNombre: 'Cabo de Santo Agostinho',
       deptoId: 308
   },
   {
       proNombre: 'Cabrobó',
       deptoId: 308
   },
   {
       proNombre: 'Cachoeirinha',
       deptoId: 308
   },
   {
       proNombre: 'Caetés',
       deptoId: 308
   },
   {
       proNombre: 'Calçado',
       deptoId: 308
   },
   {
       proNombre: 'Calumbi',
       deptoId: 308
   },
   {
       proNombre: 'Camaragibe',
       deptoId: 308
   },
   {
       proNombre: 'Camocim de São Félix',
       deptoId: 308
   },
   {
       proNombre: 'Camutanga',
       deptoId: 308
   },
   {
       proNombre: 'Canhotinho',
       deptoId: 308
   },
   {
       proNombre: 'Capoeiras',
       deptoId: 308
   },
   {
       proNombre: 'Carnaíba',
       deptoId: 308
   },
   {
       proNombre: 'Carnaubeira da Penha',
       deptoId: 308
   },
   {
       proNombre: 'Carpina',
       deptoId: 308
   },
   {
       proNombre: 'Caruaru',
       deptoId: 308
   },
   {
       proNombre: 'Casinhas',
       deptoId: 308
   },
   {
       proNombre: 'Catende',
       deptoId: 308
   },
   {
       proNombre: 'Cedro',
       deptoId: 308
   },
   {
       proNombre: 'Chã de Alegria',
       deptoId: 308
   },
   {
       proNombre: 'Chã Grande',
       deptoId: 308
   },
   {
       proNombre: 'Condado',
       deptoId: 308
   },
   {
       proNombre: 'Correntes',
       deptoId: 308
   },
   {
       proNombre: 'Cortês',
       deptoId: 308
   },
   {
       proNombre: 'Cumaru',
       deptoId: 308
   },
   {
       proNombre: 'Cupira',
       deptoId: 308
   },
   {
       proNombre: 'Custódia',
       deptoId: 308
   },
   {
       proNombre: 'Dormentes',
       deptoId: 308
   },
   {
       proNombre: 'Escada',
       deptoId: 308
   },
   {
       proNombre: 'Exu',
       deptoId: 308
   },
   {
       proNombre: 'Feira Nova',
       deptoId: 308
   },
   {
       proNombre: 'Fernando de Noronha',
       deptoId: 308
   },
   {
       proNombre: 'Ferreiros',
       deptoId: 308
   },
   {
       proNombre: 'Flores',
       deptoId: 308
   },
   {
       proNombre: 'Floresta',
       deptoId: 308
   },
   {
       proNombre: 'Frei Miguelinho',
       deptoId: 308
   },
   {
       proNombre: 'Gameleira',
       deptoId: 308
   },
   {
       proNombre: 'Garanhuns',
       deptoId: 308
   },
   {
       proNombre: 'Glória do Goitá',
       deptoId: 308
   },
   {
       proNombre: 'Goiana',
       deptoId: 308
   },
   {
       proNombre: 'Granito',
       deptoId: 308
   },
   {
       proNombre: 'Gravatá',
       deptoId: 308
   },
   {
       proNombre: 'Iati',
       deptoId: 308
   },
   {
       proNombre: 'Ibimirim',
       deptoId: 308
   },
   {
       proNombre: 'Ibirajuba',
       deptoId: 308
   },
   {
       proNombre: 'Igarassu',
       deptoId: 308
   },
   {
       proNombre: 'Iguaraci',
       deptoId: 308
   },
   {
       proNombre: 'Inajá',
       deptoId: 308
   },
   {
       proNombre: 'Ingazeira',
       deptoId: 308
   },
   {
       proNombre: 'Ipojuca',
       deptoId: 308
   },
   {
       proNombre: 'Ipubi',
       deptoId: 308
   },
   {
       proNombre: 'Itacuruba',
       deptoId: 308
   },
   {
       proNombre: 'Itaíba',
       deptoId: 308
   },
   {
       proNombre: 'Itamaracá',
       deptoId: 308
   },
   {
       proNombre: 'Itambé',
       deptoId: 308
   },
   {
       proNombre: 'Itapetim',
       deptoId: 308
   },
   {
       proNombre: 'Itapissuma',
       deptoId: 308
   },
   {
       proNombre: 'Itaquitinga',
       deptoId: 308
   },
   {
       proNombre: 'Jaqueira',
       deptoId: 308
   },
   {
       proNombre: 'Jataúba',
       deptoId: 308
   },
   {
       proNombre: 'Jatobá',
       deptoId: 308
   },
   {
       proNombre: 'João Alfredo',
       deptoId: 308
   },
   {
       proNombre: 'Joaquim Nabuco',
       deptoId: 308
   },
   {
       proNombre: 'Jucati',
       deptoId: 308
   },
   {
       proNombre: 'Jupi',
       deptoId: 308
   },
   {
       proNombre: 'Jurema',
       deptoId: 308
   },
   {
       proNombre: 'Lagoa do Carro',
       deptoId: 308
   },
   {
       proNombre: 'Lagoa do Itaenga',
       deptoId: 308
   },
   {
       proNombre: 'Lagoa do Ouro',
       deptoId: 308
   },
   {
       proNombre: 'Lagoa dos Gatos',
       deptoId: 308
   },
   {
       proNombre: 'Lagoa Grande',
       deptoId: 308
   },
   {
       proNombre: 'Lajedo',
       deptoId: 308
   },
   {
       proNombre: 'Limoeiro',
       deptoId: 308
   },
   {
       proNombre: 'Macaparana',
       deptoId: 308
   },
   {
       proNombre: 'Machados',
       deptoId: 308
   },
   {
       proNombre: 'Manari',
       deptoId: 308
   },
   {
       proNombre: 'Maraial',
       deptoId: 308
   },
   {
       proNombre: 'Mirandiba',
       deptoId: 308
   },
   {
       proNombre: 'Moreilândia',
       deptoId: 308
   },
   {
       proNombre: 'Moreno',
       deptoId: 308
   },
   {
       proNombre: 'Nazaré da Mata',
       deptoId: 308
   },
   {
       proNombre: 'Olinda',
       deptoId: 308
   },
   {
       proNombre: 'Orobó',
       deptoId: 308
   },
   {
       proNombre: 'Orocó',
       deptoId: 308
   },
   {
       proNombre: 'Ouricuri',
       deptoId: 308
   },
   {
       proNombre: 'Palmares',
       deptoId: 308
   },
   {
       proNombre: 'Palmeirina',
       deptoId: 308
   },
   {
       proNombre: 'Panelas',
       deptoId: 308
   },
   {
       proNombre: 'Paranatama',
       deptoId: 308
   },
   {
       proNombre: 'Parnamirim',
       deptoId: 308
   },
   {
       proNombre: 'Passira',
       deptoId: 308
   },
   {
       proNombre: 'Paudalho',
       deptoId: 308
   },
   {
       proNombre: 'Paulista',
       deptoId: 308
   },
   {
       proNombre: 'Pedra',
       deptoId: 308
   },
   {
       proNombre: 'Pesqueira',
       deptoId: 308
   },
   {
       proNombre: 'Petrolândia',
       deptoId: 308
   },
   {
       proNombre: 'Petrolina',
       deptoId: 308
   },
   {
       proNombre: 'Poção',
       deptoId: 308
   },
   {
       proNombre: 'Pombos',
       deptoId: 308
   },
   {
       proNombre: 'Primavera',
       deptoId: 308
   },
   {
       proNombre: 'Quipapá',
       deptoId: 308
   },
   {
       proNombre: 'Quixaba',
       deptoId: 308
   },
   {
       proNombre: 'Recife',
       deptoId: 308
   },
   {
       proNombre: 'Riacho das Almas',
       deptoId: 308
   },
   {
       proNombre: 'Ribeirão',
       deptoId: 308
   },
   {
       proNombre: 'Rio Formoso',
       deptoId: 308
   },
   {
       proNombre: 'Sairé',
       deptoId: 308
   },
   {
       proNombre: 'Salgadinho',
       deptoId: 308
   },
   {
       proNombre: 'Salgueiro',
       deptoId: 308
   },
   {
       proNombre: 'Saloá',
       deptoId: 308
   },
   {
       proNombre: 'Sanharó',
       deptoId: 308
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 308
   },
   {
       proNombre: 'Santa Cruz da Baixa Verde',
       deptoId: 308
   },
   {
       proNombre: 'Santa Cruz do capibaribe',
       deptoId: 308
   },
   {
       proNombre: 'Santa Filomena',
       deptoId: 308
   },
   {
       proNombre: 'Santa Maria da Boa Vista',
       deptoId: 308
   },
   {
       proNombre: 'Santa Maria do Cambucá',
       deptoId: 308
   },
   {
       proNombre: 'Santa Terezinha',
       deptoId: 308
   },
   {
       proNombre: 'São Benedito do Sul',
       deptoId: 308
   },
   {
       proNombre: 'São Bento do Una',
       deptoId: 308
   },
   {
       proNombre: 'São Caitano',
       deptoId: 308
   },
   {
       proNombre: 'São João',
       deptoId: 308
   },
   {
       proNombre: 'São Joaquim do Monte',
       deptoId: 308
   },
   {
       proNombre: 'São Joaquim do Monte',
       deptoId: 308
   },
   {
       proNombre: 'São José da Coroa Grande',
       deptoId: 308
   },
   {
       proNombre: 'São José do Belmonte',
       deptoId: 308
   },
   {
       proNombre: 'São José do Egito',
       deptoId: 308
   },
   {
       proNombre: 'São Lourenço da Mata',
       deptoId: 308
   },
   {
       proNombre: 'São Vicente Ferrer',
       deptoId: 308
   },
   {
       proNombre: 'Serra Talhada',
       deptoId: 308
   },
   {
       proNombre: 'Serrita',
       deptoId: 308
   },
   {
       proNombre: 'Sertânia',
       deptoId: 308
   },
   {
       proNombre: 'Sirinhaém',
       deptoId: 308
   },
   {
       proNombre: 'Solidão',
       deptoId: 308
   },
   {
       proNombre: 'Surubim',
       deptoId: 308
   },
   {
       proNombre: 'Tabira',
       deptoId: 308
   },
   {
       proNombre: 'Tacaimbó',
       deptoId: 308
   },
   {
       proNombre: 'Tacaratu',
       deptoId: 308
   },
   {
       proNombre: 'Tamandaré',
       deptoId: 308
   },
   {
       proNombre: 'Taquaritinga do Norte',
       deptoId: 308
   },
   {
       proNombre: 'Terezinha',
       deptoId: 308
   },
   {
       proNombre: 'Terra Nova',
       deptoId: 308
   },
   {
       proNombre: 'Timbaúba',
       deptoId: 308
   },
   {
       proNombre: 'Toritama',
       deptoId: 308
   },
   {
       proNombre: 'Tracunhaém',
       deptoId: 308
   },
   {
       proNombre: 'Trindade',
       deptoId: 308
   },
   {
       proNombre: 'Triunfo',
       deptoId: 308
   },
   {
       proNombre: 'Tupanatinga',
       deptoId: 308
   },
   {
       proNombre: 'Tuparetama',
       deptoId: 308
   },
   {
       proNombre: 'Venturosa',
       deptoId: 308
   },
   {
       proNombre: 'Verdejante',
       deptoId: 308
   },
   {
       proNombre: 'Vertentes',
       deptoId: 308
   },
   {
       proNombre: 'Vertentes do Lério',
       deptoId: 308
   },
   {
       proNombre: 'Vicência',
       deptoId: 308
   },
   {
       proNombre: 'Vitória de Santo Antão',
       deptoId: 308
   },
   {
       proNombre: 'Xexéu',
       deptoId: 308
   },
   {
       proNombre: 'Acauã',
       deptoId: 309
   },
   {
       proNombre: 'Agricolândia',
       deptoId: 309
   },
   {
       proNombre: 'Água Branca',
       deptoId: 309
   },
   {
       proNombre: 'Alagoinha do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Alegrete do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Alto Longá',
       deptoId: 309
   },
   {
       proNombre: 'Altos',
       deptoId: 309
   },
   {
       proNombre: 'Alvorada do Gurguéia',
       deptoId: 309
   },
   {
       proNombre: 'Amarante',
       deptoId: 309
   },
   {
       proNombre: 'Angical do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Anísio de Abreu',
       deptoId: 309
   },
   {
       proNombre: 'Antônio Almeida',
       deptoId: 309
   },
   {
       proNombre: 'Aroazes',
       deptoId: 309
   },
   {
       proNombre: 'Aroeiras do Itaim',
       deptoId: 309
   },
   {
       proNombre: 'Arraial',
       deptoId: 309
   },
   {
       proNombre: 'Assunção do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Avelino Lopes',
       deptoId: 309
   },
   {
       proNombre: 'Baixa Grande do Ribeiro',
       deptoId: 309
   },
   {
       proNombre: "Barra d'Alcântara",
       deptoId: 309
   },
   {
       proNombre: 'Barras',
       deptoId: 309
   },
   {
       proNombre: 'Barreiras do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Barro Duro',
       deptoId: 309
   },
   {
       proNombre: 'Batalha',
       deptoId: 309
   },
   {
       proNombre: 'Bela Vista do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Belém do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Beneditinos',
       deptoId: 309
   },
   {
       proNombre: 'Bertolínia',
       deptoId: 309
   },
   {
       proNombre: 'Betânia do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Boa Hora',
       deptoId: 309
   },
   {
       proNombre: 'Bocaina',
       deptoId: 309
   },
   {
       proNombre: 'Bom Jesus',
       deptoId: 309
   },
   {
       proNombre: 'Bom Princípio do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Bonfim do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Boqueirão do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Brasileira',
       deptoId: 309
   },
   {
       proNombre: 'Brejo do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Buriti dos Lopes',
       deptoId: 309
   },
   {
       proNombre: 'Buriti dos Montes',
       deptoId: 309
   },
   {
       proNombre: 'Cabeceiras do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Cajazeiras do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Cajueiro da Praia',
       deptoId: 309
   },
   {
       proNombre: 'Caldeirão Grande do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Campinas do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Campo Alegre do Fidalgo',
       deptoId: 309
   },
   {
       proNombre: 'Campo Grande do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Campo Largo do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Campo Maior',
       deptoId: 309
   },
   {
       proNombre: 'Canavieira',
       deptoId: 309
   },
   {
       proNombre: 'Canto do Buriti',
       deptoId: 309
   },
   {
       proNombre: 'Capitão de Campos',
       deptoId: 309
   },
   {
       proNombre: 'Capitão Gervásio Oliveira',
       deptoId: 309
   },
   {
       proNombre: 'Caracol',
       deptoId: 309
   },
   {
       proNombre: 'Caraúbas do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Caridade do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Castelo do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Caxingó',
       deptoId: 309
   },
   {
       proNombre: 'Cocal',
       deptoId: 309
   },
   {
       proNombre: 'Cocal de Telha',
       deptoId: 309
   },
   {
       proNombre: 'Cocal dos Alves',
       deptoId: 309
   },
   {
       proNombre: 'Coivaras',
       deptoId: 309
   },
   {
       proNombre: 'Colônia do Gurguéia',
       deptoId: 309
   },
   {
       proNombre: 'Colônia do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Conceição do Canindé',
       deptoId: 309
   },
   {
       proNombre: 'Coronel José Dias',
       deptoId: 309
   },
   {
       proNombre: 'Corrente',
       deptoId: 309
   },
   {
       proNombre: 'Cristalândia do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Cristino Castro',
       deptoId: 309
   },
   {
       proNombre: 'Curimatá',
       deptoId: 309
   },
   {
       proNombre: 'Currais',
       deptoId: 309
   },
   {
       proNombre: 'Curral Novo do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Curralinhos',
       deptoId: 309
   },
   {
       proNombre: 'Demerval Lobão',
       deptoId: 309
   },
   {
       proNombre: 'Dirceu Arcoverde',
       deptoId: 309
   },
   {
       proNombre: 'Dom Expedito Lopes',
       deptoId: 309
   },
   {
       proNombre: 'Dom Inocêncio',
       deptoId: 309
   },
   {
       proNombre: 'Domingos Mourão',
       deptoId: 309
   },
   {
       proNombre: 'Elesbão Veloso',
       deptoId: 309
   },
   {
       proNombre: 'Eliseu Martins',
       deptoId: 309
   },
   {
       proNombre: 'Esperantina',
       deptoId: 309
   },
   {
       proNombre: 'Fartura do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Flores do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Floresta do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Floriano',
       deptoId: 309
   },
   {
       proNombre: 'Francinópolis',
       deptoId: 309
   },
   {
       proNombre: 'Francisco Ayres',
       deptoId: 309
   },
   {
       proNombre: 'Francisco Macêdo',
       deptoId: 309
   },
   {
       proNombre: 'Francisco Santos',
       deptoId: 309
   },
   {
       proNombre: 'Fronteiras',
       deptoId: 309
   },
   {
       proNombre: 'Geminiano',
       deptoId: 309
   },
   {
       proNombre: 'Gilbués',
       deptoId: 309
   },
   {
       proNombre: 'Guadalupe',
       deptoId: 309
   },
   {
       proNombre: 'Guaribas',
       deptoId: 309
   },
   {
       proNombre: 'Hugo Napoleão',
       deptoId: 309
   },
   {
       proNombre: 'Ilha Grande',
       deptoId: 309
   },
   {
       proNombre: 'Inhuma',
       deptoId: 309
   },
   {
       proNombre: 'Ipiranga do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Isaías Coelho',
       deptoId: 309
   },
   {
       proNombre: 'Itainópolis',
       deptoId: 309
   },
   {
       proNombre: 'Itaueira',
       deptoId: 309
   },
   {
       proNombre: 'Jacobina do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Jaicós',
       deptoId: 309
   },
   {
       proNombre: 'Jardim do Mulato',
       deptoId: 309
   },
   {
       proNombre: 'Jatobá do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Jaicós',
       deptoId: 309
   },
   {
       proNombre: 'Jardim do Mulato',
       deptoId: 309
   },
   {
       proNombre: 'Jatobá do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Jerumenha',
       deptoId: 309
   },
   {
       proNombre: 'João Costa',
       deptoId: 309
   },
   {
       proNombre: 'Joaquim Pires',
       deptoId: 309
   },
   {
       proNombre: 'Joca Marques',
       deptoId: 309
   },
   {
       proNombre: 'José de Freitas',
       deptoId: 309
   },
   {
       proNombre: 'Juazeiro do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Júlio Borges',
       deptoId: 309
   },
   {
       proNombre: 'Jurema',
       deptoId: 309
   },
   {
       proNombre: 'Lagoa Alegre',
       deptoId: 309
   },
   {
       proNombre: 'Lagoa de São Francisco',
       deptoId: 309
   },
   {
       proNombre: 'Lagoa do Barro do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Lagoa do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Lagoa do Sítio',
       deptoId: 309
   },
   {
       proNombre: 'Lagoinha do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Landri Sales',
       deptoId: 309
   },
   {
       proNombre: 'Luís Correia',
       deptoId: 309
   },
   {
       proNombre: 'Luzilândia',
       deptoId: 309
   },
   {
       proNombre: 'Madeiro',
       deptoId: 309
   },
   {
       proNombre: 'Manoel Emídio',
       deptoId: 309
   },
   {
       proNombre: 'Marcolândia',
       deptoId: 309
   },
   {
       proNombre: 'Marcos Parente',
       deptoId: 309
   },
   {
       proNombre: 'Massapê do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Matias Olímpio',
       deptoId: 309
   },
   {
       proNombre: 'Miguel Alves',
       deptoId: 309
   },
   {
       proNombre: 'Miguel Leão',
       deptoId: 309
   },
   {
       proNombre: 'Milton Brandão',
       deptoId: 309
   },
   {
       proNombre: 'Monsenhor Gil',
       deptoId: 309
   },
   {
       proNombre: 'Monsenhor Hipólito',
       deptoId: 309
   },
   {
       proNombre: 'Monte Alegre do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Morro Cabeça no Tempo',
       deptoId: 309
   },
   {
       proNombre: 'Morro do Chapéu do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Murici dos Portelas',
       deptoId: 309
   },
   {
       proNombre: 'Nazaré do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Nossa Senhora de Nazaré',
       deptoId: 309
   },
   {
       proNombre: 'Nossa Senhora dos Remédios',
       deptoId: 309
   },
   {
       proNombre: 'Nova Santa Rita',
       deptoId: 309
   },
   {
       proNombre: 'Novo Oriente do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Novo Santo Antônio',
       deptoId: 309
   },
   {
       proNombre: 'Oeiras',
       deptoId: 309
   },
   {
       proNombre: "Olho d'Água do Piauí",
       deptoId: 309
   },
   {
       proNombre: 'Padre Marcos',
       deptoId: 309
   },
   {
       proNombre: 'Paes Landim',
       deptoId: 309
   },
   {
       proNombre: 'Pajeú do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Palmeira do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Palmeirais',
       deptoId: 309
   },
   {
       proNombre: 'Paquetá',
       deptoId: 309
   },
   {
       proNombre: 'Parnaguá',
       deptoId: 309
   },
   {
       proNombre: 'Parnaíba',
       deptoId: 309
   },
   {
       proNombre: 'Passagem Franca do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Patos do Piauí',
       deptoId: 309
   },
   {
       proNombre: "Pau d'Arco do Piau",
       deptoId: 309
   },
   {
       proNombre: 'Paulistana',
       deptoId: 309
   },
   {
       proNombre: 'Pavussu',
       deptoId: 309
   },
   {
       proNombre: 'Pedro II',
       deptoId: 309
   },
   {
       proNombre: 'Pedro Laurentino',
       deptoId: 309
   },
   {
       proNombre: 'Picos',
       deptoId: 309
   },
   {
       proNombre: 'Pimenteiras',
       deptoId: 309
   },
   {
       proNombre: 'Pio IX',
       deptoId: 309
   },
   {
       proNombre: 'Piracuruca',
       deptoId: 309
   },
   {
       proNombre: 'Piripiri',
       deptoId: 309
   },
   {
       proNombre: 'Porto',
       deptoId: 309
   },
   {
       proNombre: 'Porto Alegre do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Prata do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Queimada Nova',
       deptoId: 309
   },
   {
       proNombre: 'Redenção do Gurguéia',
       deptoId: 309
   },
   {
       proNombre: 'Regeneração',
       deptoId: 309
   },
   {
       proNombre: 'Riacho Frio',
       deptoId: 309
   },
   {
       proNombre: 'Ribeira do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Ribeiro Gonçalves',
       deptoId: 309
   },
   {
       proNombre: 'Rio Grande do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Santa Cruz do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Santa Cruz dos Milagres',
       deptoId: 309
   },
   {
       proNombre: 'Santa Filomena',
       deptoId: 309
   },
   {
       proNombre: 'Santa Luz',
       deptoId: 309
   },
   {
       proNombre: 'Santa Rosa do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Santana do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Santo Antônio de Lisboa',
       deptoId: 309
   },
   {
       proNombre: 'Santo Antônio dos Milagres',
       deptoId: 309
   },
   {
       proNombre: 'Santo Inácio do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Braz do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Félix do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Francisco de Assis do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Francisco do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Gonçalo do Gurguéia',
       deptoId: 309
   },
   {
       proNombre: 'São Gonçalo do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São João da Canabrava',
       deptoId: 309
   },
   {
       proNombre: 'São João da Fronteira',
       deptoId: 309
   },
   {
       proNombre: 'São João da Serra',
       deptoId: 309
   },
   {
       proNombre: 'São João da Varjota',
       deptoId: 309
   },
   {
       proNombre: 'São João do Arraial',
       deptoId: 309
   },
   {
       proNombre: 'São João do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São José do Divino',
       deptoId: 309
   },
   {
       proNombre: 'São José do Peixe',
       deptoId: 309
   },
   {
       proNombre: 'São José do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Julião',
       deptoId: 309
   },
   {
       proNombre: 'São Lourenço do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Luís do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Miguel da Baixa Grande',
       deptoId: 309
   },
   {
       proNombre: 'São Miguel do Fidalgo',
       deptoId: 309
   },
   {
       proNombre: 'São Miguel do Tapuio',
       deptoId: 309
   },
   {
       proNombre: 'São Pedro do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'São Raimundo Nonato',
       deptoId: 309
   },
   {
       proNombre: 'Sebastião Barros',
       deptoId: 309
   },
   {
       proNombre: 'Sebastião Leal',
       deptoId: 309
   },
   {
       proNombre: 'Sigefredo Pacheco',
       deptoId: 309
   },
   {
       proNombre: 'Simões',
       deptoId: 309
   },
   {
       proNombre: 'Simplício Mendes',
       deptoId: 309
   },
   {
       proNombre: 'Socorro do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Sussuapara',
       deptoId: 309
   },
   {
       proNombre: 'Tamboril do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Tanque do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Teresina',
       deptoId: 309
   },
   {
       proNombre: 'União',
       deptoId: 309
   },
   {
       proNombre: 'Uruçuí',
       deptoId: 309
   },
   {
       proNombre: 'Valença do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Várzea Branca',
       deptoId: 309
   },
   {
       proNombre: 'Várzea Grande',
       deptoId: 309
   },
   {
       proNombre: 'Vera Mendes',
       deptoId: 309
   },
   {
       proNombre: 'Vila Nova do Piauí',
       deptoId: 309
   },
   {
       proNombre: 'Wall Ferraz',
       deptoId: 309
   },
   {
       proNombre: 'Angra dos Reis',
       deptoId: 310
   },
   {
       proNombre: 'Aperibé',
       deptoId: 310
   },
   {
       proNombre: 'Araruama',
       deptoId: 310
   },
   {
       proNombre: 'Areal',
       deptoId: 310
   },
   {
       proNombre: 'Armação dos Búzios',
       deptoId: 310
   },
   {
       proNombre: 'Arraial do Cabo',
       deptoId: 310
   },
   {
       proNombre: 'Barra do Piraí',
       deptoId: 310
   },
   {
       proNombre: 'Barra Mansa',
       deptoId: 310
   },
   {
       proNombre: 'Belford Roxo',
       deptoId: 310
   },
   {
       proNombre: 'Bom Jardim',
       deptoId: 310
   },
   {
       proNombre: 'Bom Jesus do Itabapoana',
       deptoId: 310
   },
   {
       proNombre: 'Cabo Frio',
       deptoId: 310
   },
   {
       proNombre: 'Cachoeiras de Macacu',
       deptoId: 310
   },
   {
       proNombre: 'Cambuci',
       deptoId: 310
   },
   {
       proNombre: 'Campos dos Goytacazes',
       deptoId: 310
   },
   {
       proNombre: 'Cantagalo',
       deptoId: 310
   },
   {
       proNombre: 'Carapebus',
       deptoId: 310
   },
   {
       proNombre: 'Cardoso Moreira',
       deptoId: 310
   },
   {
       proNombre: 'Carmo',
       deptoId: 310
   },
   {
       proNombre: 'Casimiro de Abreu',
       deptoId: 310
   },
   {
       proNombre: 'Comendador Levy Gasparian',
       deptoId: 310
   },
   {
       proNombre: 'Conceição de Macabu',
       deptoId: 310
   },
   {
       proNombre: 'Cordeiro',
       deptoId: 310
   },
   {
       proNombre: 'Duas Barras',
       deptoId: 310
   },
   {
       proNombre: 'Duque de Caxias',
       deptoId: 310
   },
   {
       proNombre: 'Engenheiro Paulo de Frontin',
       deptoId: 310
   },
   {
       proNombre: 'Guapimirim',
       deptoId: 310
   },
   {
       proNombre: 'Iguaba Grande',
       deptoId: 310
   },
   {
       proNombre: 'Itaboraí',
       deptoId: 310
   },
   {
       proNombre: 'Itaguaí',
       deptoId: 310
   },
   {
       proNombre: 'Italva',
       deptoId: 310
   },
   {
       proNombre: 'Itaocara',
       deptoId: 310
   },
   {
       proNombre: 'Itaperuna',
       deptoId: 310
   },
   {
       proNombre: 'Itatiaia',
       deptoId: 310
   },
   {
       proNombre: 'Japeri',
       deptoId: 310
   },
   {
       proNombre: 'Laje do Muriaé',
       deptoId: 310
   },
   {
       proNombre: 'Macaé',
       deptoId: 310
   },
   {
       proNombre: 'Macuco',
       deptoId: 310
   },
   {
       proNombre: 'Magé',
       deptoId: 310
   },
   {
       proNombre: 'Mangaratiba',
       deptoId: 310
   },
   {
       proNombre: 'Maricá',
       deptoId: 310
   },
   {
       proNombre: 'Mendes',
       deptoId: 310
   },
   {
       proNombre: 'Mesquita',
       deptoId: 310
   },
   {
       proNombre: 'Miguel Pereira',
       deptoId: 310
   },
   {
       proNombre: 'Miracema',
       deptoId: 310
   },
   {
       proNombre: 'Natividade',
       deptoId: 310
   },
   {
       proNombre: 'Nilópolis',
       deptoId: 310
   },
   {
       proNombre: 'Niterói',
       deptoId: 310
   },
   {
       proNombre: 'Nova Friburgo',
       deptoId: 310
   },
   {
       proNombre: 'Nova Iguaçu',
       deptoId: 310
   },
   {
       proNombre: 'Paracambi',
       deptoId: 310
   },
   {
       proNombre: 'Paraíba do Sul',
       deptoId: 310
   },
   {
       proNombre: 'Parati',
       deptoId: 310
   },
   {
       proNombre: 'Paty do Alferes',
       deptoId: 310
   },
   {
       proNombre: 'Petrópolis',
       deptoId: 310
   },
   {
       proNombre: 'Pinheiral',
       deptoId: 310
   },
   {
       proNombre: 'Piraí',
       deptoId: 310
   },
   {
       proNombre: 'Porciúncula',
       deptoId: 310
   },
   {
       proNombre: 'Porto Real',
       deptoId: 310
   },
   {
       proNombre: 'Quatis',
       deptoId: 310
   },
   {
       proNombre: 'Queimados',
       deptoId: 310
   },
   {
       proNombre: 'Quissamã',
       deptoId: 310
   },
   {
       proNombre: 'Resende',
       deptoId: 310
   },
   {
       proNombre: 'Rio Bonito',
       deptoId: 310
   },
   {
       proNombre: 'Rio Claro',
       deptoId: 310
   },
   {
       proNombre: 'Rio das Flores',
       deptoId: 310
   },
   {
       proNombre: 'Rio das Ostras',
       deptoId: 310
   },
   {
       proNombre: 'Río de Janeiro',
       deptoId: 310
   },
   {
       proNombre: 'Santa Maria Madalena',
       deptoId: 310
   },
   {
       proNombre: 'Santo Antônio de Pádua',
       deptoId: 310
   },
   {
       proNombre: 'São Fidélis',
       deptoId: 310
   },
   {
       proNombre: 'São Francisco de Itabapoana',
       deptoId: 310
   },
   {
       proNombre: 'São Gonçalo',
       deptoId: 310
   },
   {
       proNombre: 'São João da Barra',
       deptoId: 310
   },
   {
       proNombre: 'São João de Meriti',
       deptoId: 310
   },
   {
       proNombre: 'São José de Ubá',
       deptoId: 310
   },
   {
       proNombre: 'São José do Vale do Rio Preto',
       deptoId: 310
   },
   {
       proNombre: 'São Pedro da Aldeia',
       deptoId: 310
   },
   {
       proNombre: 'São Sebastião do Alto',
       deptoId: 310
   },
   {
       proNombre: 'Sapucaia',
       deptoId: 310
   },
   {
       proNombre: 'Saquarema',
       deptoId: 310
   },
   {
       proNombre: 'Seropédica',
       deptoId: 310
   },
   {
       proNombre: 'Silva Jardim',
       deptoId: 310
   },
   {
       proNombre: 'Sumidouro',
       deptoId: 310
   },
   {
       proNombre: 'Tanguá',
       deptoId: 310
   },
   {
       proNombre: 'Teresópolis',
       deptoId: 310
   },
   {
       proNombre: 'Trajano de Morais',
       deptoId: 310
   },
   {
       proNombre: 'Três Rios',
       deptoId: 310
   },
   {
       proNombre: 'Valença',
       deptoId: 310
   },
   {
       proNombre: 'Varre-Sai',
       deptoId: 310
   },
   {
       proNombre: 'Vassouras',
       deptoId: 310
   },
   {
       proNombre: 'Volta Redonda',
       deptoId: 310
   },
   {
       proNombre: 'Acari',
       deptoId: 311
   },
   {
       proNombre: 'Afonso Bezerra',
       deptoId: 311
   },
   {
       proNombre: 'Água Nova',
       deptoId: 311
   },
   {
       proNombre: 'Alexandria',
       deptoId: 311
   },
   {
       proNombre: 'Almino Afonso',
       deptoId: 311
   },
   {
       proNombre: 'Alto do Rodrigues',
       deptoId: 311
   },
   {
       proNombre: 'Angicos',
       deptoId: 311
   },
   {
       proNombre: 'Antônio Martins',
       deptoId: 311
   },
   {
       proNombre: 'Apodi',
       deptoId: 311
   },
   {
       proNombre: 'Areia Branca',
       deptoId: 311
   },
   {
       proNombre: 'Arês',
       deptoId: 311
   },
   {
       proNombre: 'Assu',
       deptoId: 311
   },
   {
       proNombre: 'Baía Formosa',
       deptoId: 311
   },
   {
       proNombre: 'Baraúna',
       deptoId: 311
   },
   {
       proNombre: 'Baraúna',
       deptoId: 311
   },
   {
       proNombre: 'Bento Fernandes',
       deptoId: 311
   },
   {
       proNombre: 'Boa Saúde',
       deptoId: 311
   },
   {
       proNombre: 'Bodó',
       deptoId: 311
   },
   {
       proNombre: 'Bom Jesus',
       deptoId: 311
   },
   {
       proNombre: 'Brejinho',
       deptoId: 311
   },
   {
       proNombre: 'Caiçara do Norte	',
       deptoId: 311
   },
   {
       proNombre: 'Caiçara do Rio do Vento',
       deptoId: 311
   },
   {
       proNombre: 'Caicó',
       deptoId: 311
   },
   {
       proNombre: 'Campo Grande',
       deptoId: 311
   },
   {
       proNombre: 'Campo Redondo',
       deptoId: 311
   },
   {
       proNombre: 'Canguaretama',
       deptoId: 311
   },
   {
       proNombre: 'Caraúbas',
       deptoId: 311
   },
   {
       proNombre: 'Carnaúba dos Dantas',
       deptoId: 311
   },
   {
       proNombre: 'Carnaubais',
       deptoId: 311
   },
   {
       proNombre: 'Ceará-Mirim',
       deptoId: 311
   },
   {
       proNombre: 'Cerro Corá',
       deptoId: 311
   },
   {
       proNombre: 'Coronel Ezequiel',
       deptoId: 311
   },
   {
       proNombre: 'Coronel João Pessoa',
       deptoId: 311
   },
   {
       proNombre: 'Cruzeta',
       deptoId: 311
   },
   {
       proNombre: 'Currais Novos',
       deptoId: 311
   },
   {
       proNombre: 'Doutor Severiano',
       deptoId: 311
   },
   {
       proNombre: 'Encanto',
       deptoId: 311
   },
   {
       proNombre: 'Equador',
       deptoId: 311
   },
   {
       proNombre: 'Espírito Santo',
       deptoId: 311
   },
   {
       proNombre: 'Extremoz',
       deptoId: 311
   },
   {
       proNombre: 'Felipe Guerra',
       deptoId: 311
   },
   {
       proNombre: 'Fernando Pedroza',
       deptoId: 311
   },
   {
       proNombre: 'Florânia',
       deptoId: 311
   },
   {
       proNombre: 'Francisco Dantas',
       deptoId: 311
   },
   {
       proNombre: 'Frutuoso Gomes',
       deptoId: 311
   },
   {
       proNombre: 'Galinhos',
       deptoId: 311
   },
   {
       proNombre: 'Goianinha',
       deptoId: 311
   },
   {
       proNombre: 'Governador Dix-Sept Rosado',
       deptoId: 311
   },
   {
       proNombre: 'Grossos',
       deptoId: 311
   },
   {
       proNombre: 'Guamaré',
       deptoId: 311
   },
   {
       proNombre: 'Ielmo Marinho',
       deptoId: 311
   },
   {
       proNombre: 'Ipanguaçu',
       deptoId: 311
   },
   {
       proNombre: 'Ipueira',
       deptoId: 311
   },
   {
       proNombre: 'Itajá',
       deptoId: 311
   },
   {
       proNombre: 'Itaú',
       deptoId: 311
   },
   {
       proNombre: 'Jaçanã',
       deptoId: 311
   },
   {
       proNombre: 'Jandaíra',
       deptoId: 311
   },
   {
       proNombre: 'Janduís',
       deptoId: 311
   },
   {
       proNombre: 'Japi',
       deptoId: 311
   },
   {
       proNombre: 'Jardim de Angicos',
       deptoId: 311
   },
   {
       proNombre: 'Jardim de Piranhas',
       deptoId: 311
   },
   {
       proNombre: 'Jardim do Seridó',
       deptoId: 311
   },
   {
       proNombre: 'João Câmara',
       deptoId: 311
   },
   {
       proNombre: 'João Dias',
       deptoId: 311
   },
   {
       proNombre: 'José da Penha',
       deptoId: 311
   },
   {
       proNombre: 'Jucurutu',
       deptoId: 311
   },
   {
       proNombre: 'Jundiá',
       deptoId: 311
   },
   {
       proNombre: "Lagoa d'Anta",
       deptoId: 311
   },
   {
       proNombre: 'Lagoa de Pedras',
       deptoId: 311
   },
   {
       proNombre: 'Lagoa de Velhos',
       deptoId: 311
   },
   {
       proNombre: 'Lagoa Nova',
       deptoId: 311
   },
   {
       proNombre: 'Lagoa Salgada',
       deptoId: 311
   },
   {
       proNombre: 'Lajes',
       deptoId: 311
   },
   {
       proNombre: 'Lajes Pintadas',
       deptoId: 311
   },
   {
       proNombre: 'Lucrécia',
       deptoId: 311
   },
   {
       proNombre: 'Luís Gomes',
       deptoId: 311
   },
   {
       proNombre: 'Macaíba',
       deptoId: 311
   },
   {
       proNombre: 'Macau',
       deptoId: 311
   },
   {
       proNombre: 'Major Sales',
       deptoId: 311
   },
   {
       proNombre: 'Marcelino Vieira',
       deptoId: 311
   },
   {
       proNombre: 'Martins',
       deptoId: 311
   },
   {
       proNombre: 'Maxaranguape',
       deptoId: 311
   },
   {
       proNombre: 'Messias Targino',
       deptoId: 311
   },
   {
       proNombre: 'Montanhas',
       deptoId: 311
   },
   {
       proNombre: 'Monte Alegre',
       deptoId: 311
   },
   {
       proNombre: 'Monte das Gameleiras',
       deptoId: 311
   },
   {
       proNombre: 'Mossoró',
       deptoId: 311
   },
   {
       proNombre: 'Natal',
       deptoId: 311
   },
   {
       proNombre: 'Nísia Floresta',
       deptoId: 311
   },
   {
       proNombre: 'Nova Cruz',
       deptoId: 311
   },
   {
       proNombre: "Olho-d'Água do Borges",
       deptoId: 311
   },
   {
       proNombre: 'Ouro Branco',
       deptoId: 311
   },
   {
       proNombre: 'Paraná',
       deptoId: 311
   },
   {
       proNombre: 'Paraú',
       deptoId: 311
   },
   {
       proNombre: 'Parelhas',
       deptoId: 311
   },
   {
       proNombre: 'Parnamirim',
       deptoId: 311
   },
   {
       proNombre: 'Passa e Fica',
       deptoId: 311
   },
   {
       proNombre: 'Passagem',
       deptoId: 311
   },
   {
       proNombre: 'Patu',
       deptoId: 311
   },
   {
       proNombre: 'Pau dos Ferros',
       deptoId: 311
   },
   {
       proNombre: 'Pedra Grande',
       deptoId: 311
   },
   {
       proNombre: 'Pedra Preta',
       deptoId: 311
   },
   {
       proNombre: 'Pedro Avelino',
       deptoId: 311
   },
   {
       proNombre: 'Pedro Velho',
       deptoId: 311
   },
   {
       proNombre: 'Pendências',
       deptoId: 311
   },
   {
       proNombre: 'Pilões',
       deptoId: 311
   },
   {
       proNombre: 'Poço Branco',
       deptoId: 311
   },
   {
       proNombre: 'Portalegre',
       deptoId: 311
   },
   {
       proNombre: 'Porto do Mangue',
       deptoId: 311
   },
   {
       proNombre: 'Pureza',
       deptoId: 311
   },
   {
       proNombre: 'Rafael Fernandes',
       deptoId: 311
   },
   {
       proNombre: 'Rafael Godeiro',
       deptoId: 311
   },
   {
       proNombre: 'Riacho da Cruz',
       deptoId: 311
   },
   {
       proNombre: 'Riacho de Santana',
       deptoId: 311
   },
   {
       proNombre: 'Riachuelo',
       deptoId: 311
   },
   {
       proNombre: 'Rio do Fogo',
       deptoId: 311
   },
   {
       proNombre: 'Rodolfo Fernandes',
       deptoId: 311
   },
   {
       proNombre: 'Ruy Barbosa',
       deptoId: 311
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 311
   },
   {
       proNombre: 'Santa Maria',
       deptoId: 311
   },
   {
       proNombre: 'Santana do Matos',
       deptoId: 311
   },
   {
       proNombre: 'Santana do Seridó',
       deptoId: 311
   },
   {
       proNombre: 'Santo Antônio',
       deptoId: 311
   },
   {
       proNombre: 'São Bento do Norte',
       deptoId: 311
   },
   {
       proNombre: 'São Bento do Trairi',
       deptoId: 311
   },
   {
       proNombre: 'São Fernando',
       deptoId: 311
   },
   {
       proNombre: 'São Francisco do Oeste',
       deptoId: 311
   },
   {
       proNombre: 'São Gonçalo do Amarante',
       deptoId: 311
   },
   {
       proNombre: 'São João do Sabugi',
       deptoId: 311
   },
   {
       proNombre: 'São José de Mipibu',
       deptoId: 311
   },
   {
       proNombre: 'São José do Campestre',
       deptoId: 311
   },
   {
       proNombre: 'São José do Seridó',
       deptoId: 311
   },
   {
       proNombre: 'São Miguel',
       deptoId: 311
   },
   {
       proNombre: 'São Miguel do Gostoso',
       deptoId: 311
   },
   {
       proNombre: 'São Paulo do Potengi',
       deptoId: 311
   },
   {
       proNombre: 'São Pedro',
       deptoId: 311
   },
   {
       proNombre: 'São Rafael',
       deptoId: 311
   },
   {
       proNombre: 'São Tomé',
       deptoId: 311
   },
   {
       proNombre: 'São Vicente',
       deptoId: 311
   },
   {
       proNombre: 'Senador Elói de Souza',
       deptoId: 311
   },
   {
       proNombre: 'Senador Georgino Avelino',
       deptoId: 311
   },
   {
       proNombre: 'Serra Caiada',
       deptoId: 311
   },
   {
       proNombre: 'Serra de São Bento',
       deptoId: 311
   },
   {
       proNombre: 'Serra do Mel',
       deptoId: 311
   },
   {
       proNombre: 'Serra Negra do Norte',
       deptoId: 311
   },
   {
       proNombre: 'Serrinha',
       deptoId: 311
   },
   {
       proNombre: 'Serrinha dos Pintos',
       deptoId: 311
   },
   {
       proNombre: 'Severiano Melo',
       deptoId: 311
   },
   {
       proNombre: 'Sítio Novo',
       deptoId: 311
   },
   {
       proNombre: 'Taboleiro Grande',
       deptoId: 311
   },
   {
       proNombre: 'Taipu',
       deptoId: 311
   },
   {
       proNombre: 'Tangará',
       deptoId: 311
   },
   {
       proNombre: 'Tenente Ananias',
       deptoId: 311
   },
   {
       proNombre: 'Tenente Laurentino Cruz',
       deptoId: 311
   },
   {
       proNombre: 'Tibau',
       deptoId: 311
   },
   {
       proNombre: 'Tibau do Sul',
       deptoId: 311
   },
   {
       proNombre: 'Timbaúba dos Batistas',
       deptoId: 311
   },
   {
       proNombre: 'Touros',
       deptoId: 311
   },
   {
       proNombre: 'Triunfo Potiguar',
       deptoId: 311
   },
   {
       proNombre: 'Umarizal',
       deptoId: 311
   },
   {
       proNombre: 'Upanema',
       deptoId: 311
   },
   {
       proNombre: 'Várzea',
       deptoId: 311
   },
   {
       proNombre: 'Venha-Ver',
       deptoId: 311
   },
   {
       proNombre: 'Vera Cruz',
       deptoId: 311
   },
   {
       proNombre: 'Viçosa',
       deptoId: 311
   },
   {
       proNombre: 'Vila Flor',
       deptoId: 311
   },
   {
       proNombre: 'Aceguá',
       deptoId: 312
   },
   {
       proNombre: 'Água Santa',
       deptoId: 312
   },
   {
       proNombre: 'Agudo',
       deptoId: 312
   },
   {
       proNombre: 'Ajuricaba',
       deptoId: 312
   },
   {
       proNombre: 'Alecrim',
       deptoId: 312
   },
   {
       proNombre: 'Alegrete',
       deptoId: 312
   },
   {
       proNombre: 'Alegria',
       deptoId: 312
   },
   {
       proNombre: 'Almirante Tamandaré do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Alpestre',
       deptoId: 312
   },
   {
       proNombre: 'Alto Alegre',
       deptoId: 312
   },
   {
       proNombre: 'Alto Feliz',
       deptoId: 312
   },
   {
       proNombre: 'Alvorada',
       deptoId: 312
   },
   {
       proNombre: 'Amaral Ferrador',
       deptoId: 312
   },
   {
       proNombre: 'Ametista do Sul',
       deptoId: 312
   },
   {
       proNombre: 'André da Rocha',
       deptoId: 312
   },
   {
       proNombre: 'Anta Gorda',
       deptoId: 312
   },
   {
       proNombre: 'Antônio Prado',
       deptoId: 312
   },
   {
       proNombre: 'Arambaré',
       deptoId: 312
   },
   {
       proNombre: 'Araricá',
       deptoId: 312
   },
   {
       proNombre: 'Aratiba',
       deptoId: 312
   },
   {
       proNombre: 'Arroio do Meio',
       deptoId: 312
   },
   {
       proNombre: 'Arroio do Padre',
       deptoId: 312
   },
   {
       proNombre: 'Arroio do Sal',
       deptoId: 312
   },
   {
       proNombre: 'Arroio do Tigre',
       deptoId: 312
   },
   {
       proNombre: 'Arroio dos Ratos',
       deptoId: 312
   },
   {
       proNombre: 'Arroio Grande',
       deptoId: 312
   },
   {
       proNombre: 'Arvorezinha',
       deptoId: 312
   },
   {
       proNombre: 'Augusto Pestana',
       deptoId: 312
   },
   {
       proNombre: 'Áurea',
       deptoId: 312
   },
   {
       proNombre: 'Bagé',
       deptoId: 312
   },
   {
       proNombre: 'Balneário Pinhal',
       deptoId: 312
   },
   {
       proNombre: 'Barão',
       deptoId: 312
   },
   {
       proNombre: 'Barão de Cotegipe',
       deptoId: 312
   },
   {
       proNombre: 'Barão do Triunfo',
       deptoId: 312
   },
   {
       proNombre: 'Barra do Guarita',
       deptoId: 312
   },
   {
       proNombre: 'Barra do Quaraí',
       deptoId: 312
   },
   {
       proNombre: 'Barra do Ribeiro',
       deptoId: 312
   },
   {
       proNombre: 'Barra do Rio Azul',
       deptoId: 312
   },
   {
       proNombre: 'Barra Funda',
       deptoId: 312
   },
   {
       proNombre: 'Barracão',
       deptoId: 312
   },
   {
       proNombre: 'Barros Cassal',
       deptoId: 312
   },
   {
       proNombre: 'Benjamin Constant do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Bento Gonçalves',
       deptoId: 312
   },
   {
       proNombre: 'Boa Vista das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Boa Vista do Buricá',
       deptoId: 312
   },
   {
       proNombre: 'Boa Vista do Cadeado',
       deptoId: 312
   },
   {
       proNombre: 'Boa Vista do Incra',
       deptoId: 312
   },
   {
       proNombre: 'Boa Vista do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Bom Jesus',
       deptoId: 312
   },
   {
       proNombre: 'Bom Princípio',
       deptoId: 312
   },
   {
       proNombre: 'Bom Progresso',
       deptoId: 312
   },
   {
       proNombre: 'Bom Retiro do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Boqueirão do Leão',
       deptoId: 312
   },
   {
       proNombre: 'Bossoroca',
       deptoId: 312
   },
   {
       proNombre: 'Bozano',
       deptoId: 312
   },
   {
       proNombre: 'Braga',
       deptoId: 312
   },
   {
       proNombre: 'Brochier',
       deptoId: 312
   },
   {
       proNombre: 'Butiá',
       deptoId: 312
   },
   {
       proNombre: 'Caçapava do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Cacequi',
       deptoId: 312
   },
   {
       proNombre: 'Cachoeira do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Cachoeirinha',
       deptoId: 312
   },
   {
       proNombre: 'Cacique Doble',
       deptoId: 312
   },
   {
       proNombre: 'Caibaté',
       deptoId: 312
   },
   {
       proNombre: 'Caiçara',
       deptoId: 312
   },
   {
       proNombre: 'Camaquã',
       deptoId: 312
   },
   {
       proNombre: 'Camargo',
       deptoId: 312
   },
   {
       proNombre: 'Cambará do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Campestre da Serra',
       deptoId: 312
   },
   {
       proNombre: 'Campina das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Campinas do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Campo Bom',
       deptoId: 312
   },
   {
       proNombre: 'Campo Novo',
       deptoId: 312
   },
   {
       proNombre: 'Campos Borges',
       deptoId: 312
   },
   {
       proNombre: 'Candelária',
       deptoId: 312
   },
   {
       proNombre: 'Cândido Godói',
       deptoId: 312
   },
   {
       proNombre: 'Candiota',
       deptoId: 312
   },
   {
       proNombre: 'Canela',
       deptoId: 312
   },
   {
       proNombre: 'Canguçu',
       deptoId: 312
   },
   {
       proNombre: 'Canoas',
       deptoId: 312
   },
   {
       proNombre: 'Canudos do Vale',
       deptoId: 312
   },
   {
       proNombre: 'Capão Bonito do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Capão da Canoa',
       deptoId: 312
   },
   {
       proNombre: 'Capão do Cipó',
       deptoId: 312
   },
   {
       proNombre: 'Capão do Leão',
       deptoId: 312
   },
   {
       proNombre: 'Capela de Santana',
       deptoId: 312
   },
   {
       proNombre: 'Capitão',
       deptoId: 312
   },
   {
       proNombre: 'Capivari do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Caraá',
       deptoId: 312
   },
   {
       proNombre: 'Carazinho',
       deptoId: 312
   },
   {
       proNombre: 'Carlos Barbosa',
       deptoId: 312
   },
   {
       proNombre: 'Carlos Gomes',
       deptoId: 312
   },
   {
       proNombre: 'Casca',
       deptoId: 312
   },
   {
       proNombre: 'Caseiros',
       deptoId: 312
   },
   {
       proNombre: 'Catuípe',
       deptoId: 312
   },
   {
       proNombre: 'Caxias do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Centenário',
       deptoId: 312
   },
   {
       proNombre: 'Cerrito',
       deptoId: 312
   },
   {
       proNombre: 'Cerro Branco',
       deptoId: 312
   },
   {
       proNombre: 'Cerro Grande',
       deptoId: 312
   },
   {
       proNombre: 'Cerro Grande do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Cerro Largo',
       deptoId: 312
   },
   {
       proNombre: 'Chapada',
       deptoId: 312
   },
   {
       proNombre: 'Charqueadas',
       deptoId: 312
   },
   {
       proNombre: 'Charrua',
       deptoId: 312
   },
   {
       proNombre: 'Chiapetta',
       deptoId: 312
   },
   {
       proNombre: 'Chuí',
       deptoId: 312
   },
   {
       proNombre: 'Chuvisca',
       deptoId: 312
   },
   {
       proNombre: 'Cidreira',
       deptoId: 312
   },
   {
       proNombre: 'Ciríaco',
       deptoId: 312
   },
   {
       proNombre: 'Colinas',
       deptoId: 312
   },
   {
       proNombre: 'Colorado',
       deptoId: 312
   },
   {
       proNombre: 'Condor',
       deptoId: 312
   },
   {
       proNombre: 'Constantina',
       deptoId: 312
   },
   {
       proNombre: 'Coqueiro Baixo',
       deptoId: 312
   },
   {
       proNombre: 'Coqueiros do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Coronel Barros',
       deptoId: 312
   },
   {
       proNombre: 'Coronel Bicaco',
       deptoId: 312
   },
   {
       proNombre: 'Coronel Pilar',
       deptoId: 312
   },
   {
       proNombre: 'Cotiporã',
       deptoId: 312
   },
   {
       proNombre: 'Coxilha',
       deptoId: 312
   },
   {
       proNombre: 'Crissiumal',
       deptoId: 312
   },
   {
       proNombre: 'Cristal',
       deptoId: 312
   },
   {
       proNombre: 'Cristal do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Cruz Alta',
       deptoId: 312
   },
   {
       proNombre: 'Cruzaltense',
       deptoId: 312
   },
   {
       proNombre: 'Cruzeiro do Sul',
       deptoId: 312
   },
   {
       proNombre: 'David Canabarro',
       deptoId: 312
   },
   {
       proNombre: 'Derrubadas',
       deptoId: 312
   },
   {
       proNombre: 'Dezesseis de Novembro',
       deptoId: 312
   },
   {
       proNombre: 'Dilermando de Aguiar',
       deptoId: 312
   },
   {
       proNombre: 'Dois Irmãos',
       deptoId: 312
   },
   {
       proNombre: 'Dois Irmãos das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Dois Lajeados',
       deptoId: 312
   },
   {
       proNombre: 'Dom Feliciano',
       deptoId: 312
   },
   {
       proNombre: 'Dom Pedrito',
       deptoId: 312
   },
   {
       proNombre: 'Dom Pedro de Alcântara',
       deptoId: 312
   },
   {
       proNombre: 'Dona Francisca',
       deptoId: 312
   },
   {
       proNombre: 'Doutor Maurício Cardoso',
       deptoId: 312
   },
   {
       proNombre: 'Doutor Ricardo',
       deptoId: 312
   },
   {
       proNombre: 'Eldorado do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Encantado',
       deptoId: 312
   },
   {
       proNombre: 'Encruzilhada do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Engenho Velho',
       deptoId: 312
   },
   {
       proNombre: 'Entre Rios do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Entre-Ijuís',
       deptoId: 312
   },
   {
       proNombre: 'Erebango',
       deptoId: 312
   },
   {
       proNombre: 'Erechim',
       deptoId: 312
   },
   {
       proNombre: 'Ernestina',
       deptoId: 312
   },
   {
       proNombre: 'Erval Grande',
       deptoId: 312
   },
   {
       proNombre: 'Erval Seco',
       deptoId: 312
   },
   {
       proNombre: 'Esmeralda',
       deptoId: 312
   },
   {
       proNombre: 'Esperança do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Espumoso',
       deptoId: 312
   },
   {
       proNombre: 'Estação',
       deptoId: 312
   },
   {
       proNombre: 'Estância Velha',
       deptoId: 312
   },
   {
       proNombre: 'Esteio',
       deptoId: 312
   },
   {
       proNombre: 'Estrela',
       deptoId: 312
   },
   {
       proNombre: 'Estrela Velha',
       deptoId: 312
   },
   {
       proNombre: 'Eugênio de Castro',
       deptoId: 312
   },
   {
       proNombre: 'Fagundes Varela',
       deptoId: 312
   },
   {
       proNombre: 'Farroupilha',
       deptoId: 312
   },
   {
       proNombre: 'Faxinal do Soturno',
       deptoId: 312
   },
   {
       proNombre: 'Faxinalzinho',
       deptoId: 312
   },
   {
       proNombre: 'Fazenda Vilanova',
       deptoId: 312
   },
   {
       proNombre: 'Feliz',
       deptoId: 312
   },
   {
       proNombre: 'Flores da Cunha',
       deptoId: 312
   },
   {
       proNombre: 'Floriano Peixoto',
       deptoId: 312
   },
   {
       proNombre: 'Fontoura Xavier',
       deptoId: 312
   },
   {
       proNombre: 'Formigueiro',
       deptoId: 312
   },
   {
       proNombre: 'Forquetinha',
       deptoId: 312
   },
   {
       proNombre: 'Fortaleza dos Valos',
       deptoId: 312
   },
   {
       proNombre: 'Frederico Westphalen',
       deptoId: 312
   },
   {
       proNombre: 'Garibaldi',
       deptoId: 312
   },
   {
       proNombre: 'Garruchos',
       deptoId: 312
   },
   {
       proNombre: 'Gaurama',
       deptoId: 312
   },
   {
       proNombre: 'General Câmara',
       deptoId: 312
   },
   {
       proNombre: 'Gentil',
       deptoId: 312
   },
   {
       proNombre: 'Getúlio Vargas',
       deptoId: 312
   },
   {
       proNombre: 'Giruá',
       deptoId: 312
   },
   {
       proNombre: 'Glorinha',
       deptoId: 312
   },
   {
       proNombre: 'Gramado',
       deptoId: 312
   },
   {
       proNombre: 'Gramado dos Loureiros',
       deptoId: 312
   },
   {
       proNombre: 'Gramado Xavier',
       deptoId: 312
   },
   {
       proNombre: 'Gravataí',
       deptoId: 312
   },
   {
       proNombre: 'Guabiju',
       deptoId: 312
   },
   {
       proNombre: 'Guaíba',
       deptoId: 312
   },
   {
       proNombre: 'Guaporé',
       deptoId: 312
   },
   {
       proNombre: 'Guarani das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Harmonia',
       deptoId: 312
   },
   {
       proNombre: 'Herval',
       deptoId: 312
   },
   {
       proNombre: 'Herveiras',
       deptoId: 312
   },
   {
       proNombre: 'Horizontina',
       deptoId: 312
   },
   {
       proNombre: 'Hulha Negra',
       deptoId: 312
   },
   {
       proNombre: 'Humaitá',
       deptoId: 312
   },
   {
       proNombre: 'Ibarama',
       deptoId: 312
   },
   {
       proNombre: 'Ibiaçá',
       deptoId: 312
   },
   {
       proNombre: 'Ibiraiaras',
       deptoId: 312
   },
   {
       proNombre: 'Ibirapuitã',
       deptoId: 312
   },
   {
       proNombre: 'Ibirubá',
       deptoId: 312
   },
   {
       proNombre: 'Igrejinha',
       deptoId: 312
   },
   {
       proNombre: 'Ijuí',
       deptoId: 312
   },
   {
       proNombre: 'Ilópolis',
       deptoId: 312
   },
   {
       proNombre: 'Imbé',
       deptoId: 312
   },
   {
       proNombre: 'Imigrante',
       deptoId: 312
   },
   {
       proNombre: 'Independência',
       deptoId: 312
   },
   {
       proNombre: 'Inhacorá',
       deptoId: 312
   },
   {
       proNombre: 'Ipiranga do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Iraí',
       deptoId: 312
   },
   {
       proNombre: 'Itaara',
       deptoId: 312
   },
   {
       proNombre: 'Itacurubi',
       deptoId: 312
   },
   {
       proNombre: 'Itapuca',
       deptoId: 312
   },
   {
       proNombre: 'Itaqui',
       deptoId: 312
   },
   {
       proNombre: 'Itati',
       deptoId: 312
   },
   {
       proNombre: 'Itatiba do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Ivorá',
       deptoId: 312
   },
   {
       proNombre: 'Ivoti',
       deptoId: 312
   },
   {
       proNombre: 'Jaboticaba',
       deptoId: 312
   },
   {
       proNombre: 'Jacuizinho',
       deptoId: 312
   },
   {
       proNombre: 'Jacutinga',
       deptoId: 312
   },
   {
       proNombre: 'Jaguarão',
       deptoId: 312
   },
   {
       proNombre: 'Jaguari',
       deptoId: 312
   },
   {
       proNombre: 'Jaquirana',
       deptoId: 312
   },
   {
       proNombre: 'Jari',
       deptoId: 312
   },
   {
       proNombre: 'Jóia',
       deptoId: 312
   },
   {
       proNombre: 'Júlio de Castilhos',
       deptoId: 312
   },
   {
       proNombre: 'Lagoa Bonita do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Lagoa dos Três Cantos',
       deptoId: 312
   },
   {
       proNombre: 'Lagoa Vermelha',
       deptoId: 312
   },
   {
       proNombre: 'Lagoão',
       deptoId: 312
   },
   {
       proNombre: 'Lajeado',
       deptoId: 312
   },
   {
       proNombre: 'Lajeado do Bugre',
       deptoId: 312
   },
   {
       proNombre: 'Lavras do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Liberato Salzano',
       deptoId: 312
   },
   {
       proNombre: 'Lindolfo Collor',
       deptoId: 312
   },
   {
       proNombre: 'Linha Nova',
       deptoId: 312
   },
   {
       proNombre: 'Maçambara',
       deptoId: 312
   },
   {
       proNombre: 'Machadinho',
       deptoId: 312
   },
   {
       proNombre: 'Mampituba',
       deptoId: 312
   },
   {
       proNombre: 'Manoel Viana',
       deptoId: 312
   },
   {
       proNombre: 'Maquiné',
       deptoId: 312
   },
   {
       proNombre: 'Maratá',
       deptoId: 312
   },
   {
       proNombre: 'Marau',
       deptoId: 312
   },
   {
       proNombre: 'Marcelino Ramos',
       deptoId: 312
   },
   {
       proNombre: 'Mariana Pimentel',
       deptoId: 312
   },
   {
       proNombre: 'Mariano Moro',
       deptoId: 312
   },
   {
       proNombre: 'Marques de Souza',
       deptoId: 312
   },
   {
       proNombre: 'Mata',
       deptoId: 312
   },
   {
       proNombre: 'Mato Castelhano',
       deptoId: 312
   },
   {
       proNombre: 'Mato Leitão',
       deptoId: 312
   },
   {
       proNombre: 'Mato Queimado',
       deptoId: 312
   },
   {
       proNombre: 'Maximiliano de Almeida',
       deptoId: 312
   },
   {
       proNombre: 'Minas do Leão',
       deptoId: 312
   },
   {
       proNombre: 'Miraguaí',
       deptoId: 312
   },
   {
       proNombre: 'Montauri',
       deptoId: 312
   },
   {
       proNombre: 'Monte Alegre dos Campos',
       deptoId: 312
   },
   {
       proNombre: 'Monte Belo do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Montenegro',
       deptoId: 312
   },
   {
       proNombre: 'Mormaço',
       deptoId: 312
   },
   {
       proNombre: 'Morrinhos do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Morro Redondo',
       deptoId: 312
   },
   {
       proNombre: 'Morro Reuter',
       deptoId: 312
   },
   {
       proNombre: 'Mostardas',
       deptoId: 312
   },
   {
       proNombre: 'Muçum',
       deptoId: 312
   },
   {
       proNombre: 'Muitos Capões',
       deptoId: 312
   },
   {
       proNombre: 'Muliterno',
       deptoId: 312
   },
   {
       proNombre: 'Não-Me-Toque',
       deptoId: 312
   },
   {
       proNombre: 'Nicolau Vergueiro',
       deptoId: 312
   },
   {
       proNombre: 'Nonoai',
       deptoId: 312
   },
   {
       proNombre: 'Nova Alvorada',
       deptoId: 312
   },
   {
       proNombre: 'Nova Araçá',
       deptoId: 312
   },
   {
       proNombre: 'Nova Bassano',
       deptoId: 312
   },
   {
       proNombre: 'Nova Boa Vista',
       deptoId: 312
   },
   {
       proNombre: 'Nova Bréscia',
       deptoId: 312
   },
   {
       proNombre: 'Nova Candelária',
       deptoId: 312
   },
   {
       proNombre: 'Nova Esperança do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Nova Hartz',
       deptoId: 312
   },
   {
       proNombre: 'Nova Pádua',
       deptoId: 312
   },
   {
       proNombre: 'Nova Palma',
       deptoId: 312
   },
   {
       proNombre: 'Nova Petrópolis',
       deptoId: 312
   },
   {
       proNombre: 'Nova Prata',
       deptoId: 312
   },
   {
       proNombre: 'Nova Ramada',
       deptoId: 312
   },
   {
       proNombre: 'Nova Roma do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Nova Santa Rita',
       deptoId: 312
   },
   {
       proNombre: 'Novo Barreiro',
       deptoId: 312
   },
   {
       proNombre: 'Novo Cabrais',
       deptoId: 312
   },
   {
       proNombre: 'Novo Hamburgo',
       deptoId: 312
   },
   {
       proNombre: 'Novo Machado',
       deptoId: 312
   },
   {
       proNombre: 'Novo Tiradentes',
       deptoId: 312
   },
   {
       proNombre: 'Novo Xingu',
       deptoId: 312
   },
   {
       proNombre: 'Osório',
       deptoId: 312
   },
   {
       proNombre: 'Paim Filho',
       deptoId: 312
   },
   {
       proNombre: 'Palmares do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Palmeira das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Palmitinho',
       deptoId: 312
   },
   {
       proNombre: 'Panambi',
       deptoId: 312
   },
   {
       proNombre: 'Pantano Grande',
       deptoId: 312
   },
   {
       proNombre: 'Paraí',
       deptoId: 312
   },
   {
       proNombre: 'Paraíso do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Pareci Novo',
       deptoId: 312
   },
   {
       proNombre: 'Parobé',
       deptoId: 312
   },
   {
       proNombre: 'Passa Sete',
       deptoId: 312
   },
   {
       proNombre: 'Passo do Sobrado',
       deptoId: 312
   },
   {
       proNombre: 'Passo Fundo',
       deptoId: 312
   },
   {
       proNombre: 'Paulo Bento',
       deptoId: 312
   },
   {
       proNombre: 'Paverama',
       deptoId: 312
   },
   {
       proNombre: 'Pedras Altas',
       deptoId: 312
   },
   {
       proNombre: 'Pedro Osório',
       deptoId: 312
   },
   {
       proNombre: 'Pejuçara',
       deptoId: 312
   },
   {
       proNombre: 'Pelotas',
       deptoId: 312
   },
   {
       proNombre: 'Picada Café',
       deptoId: 312
   },
   {
       proNombre: 'Pinhal',
       deptoId: 312
   },
   {
       proNombre: 'Pinhal da Serra',
       deptoId: 312
   },
   {
       proNombre: 'Pinhal Grande',
       deptoId: 312
   },
   {
       proNombre: 'Pinheirinho do Vale',
       deptoId: 312
   },
   {
       proNombre: 'Pinheiro Machado',
       deptoId: 312
   },
   {
       proNombre: 'Pirapó',
       deptoId: 312
   },
   {
       proNombre: 'Piratini',
       deptoId: 312
   },
   {
       proNombre: 'Planalto',
       deptoId: 312
   },
   {
       proNombre: 'Poço das Antas',
       deptoId: 312
   },
   {
       proNombre: 'Pontão',
       deptoId: 312
   },
   {
       proNombre: 'Ponte Preta',
       deptoId: 312
   },
   {
       proNombre: 'Portão',
       deptoId: 312
   },
   {
       proNombre: 'Porto Alegre',
       deptoId: 312
   },
   {
       proNombre: 'Porto Lucena',
       deptoId: 312
   },
   {
       proNombre: 'Porto Mauá',
       deptoId: 312
   },
   {
       proNombre: 'Porto Vera Cruz',
       deptoId: 312
   },
   {
       proNombre: 'Porto Xavier',
       deptoId: 312
   },
   {
       proNombre: 'Pouso Novo',
       deptoId: 312
   },
   {
       proNombre: 'Presidente Lucena',
       deptoId: 312
   },
   {
       proNombre: 'Progresso',
       deptoId: 312
   },
   {
       proNombre: 'Protásio Alves',
       deptoId: 312
   },
   {
       proNombre: 'Putinga',
       deptoId: 312
   },
   {
       proNombre: 'Quaraí',
       deptoId: 312
   },
   {
       proNombre: 'Quatro Irmãos',
       deptoId: 312
   },
   {
       proNombre: 'Quevedos',
       deptoId: 312
   },
   {
       proNombre: 'Quinze de Novembro',
       deptoId: 312
   },
   {
       proNombre: 'Redentora',
       deptoId: 312
   },
   {
       proNombre: 'Relvado',
       deptoId: 312
   },
   {
       proNombre: 'Restinga Seca',
       deptoId: 312
   },
   {
       proNombre: 'Rio dos Índios',
       deptoId: 312
   },
   {
       proNombre: 'Rio Grande',
       deptoId: 312
   },
   {
       proNombre: 'Rio Pardo',
       deptoId: 312
   },
   {
       proNombre: 'Riozinho',
       deptoId: 312
   },
   {
       proNombre: 'Roca Sales',
       deptoId: 312
   },
   {
       proNombre: 'Rodeio Bonito',
       deptoId: 312
   },
   {
       proNombre: 'Rolador',
       deptoId: 312
   },
   {
       proNombre: 'Rolante',
       deptoId: 312
   },
   {
       proNombre: 'Ronda Alta',
       deptoId: 312
   },
   {
       proNombre: 'Rondinha',
       deptoId: 312
   },
   {
       proNombre: 'Roque Gonzales',
       deptoId: 312
   },
   {
       proNombre: 'Rosário do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Sagrada Família',
       deptoId: 312
   },
   {
       proNombre: 'Saldanha Marinho',
       deptoId: 312
   },
   {
       proNombre: 'Salto do Jacuí',
       deptoId: 312
   },
   {
       proNombre: 'Salvador das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Salvador do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Sananduva',
       deptoId: 312
   },
   {
       proNombre: 'Santa Bárbara do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Santa Cecília do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Santa Clara do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Santa Cruz do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Santa Margarida do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Santa Maria',
       deptoId: 312
   },
   {
       proNombre: 'Santa Maria do Herval',
       deptoId: 312
   },
   {
       proNombre: 'Santa Rosa',
       deptoId: 312
   },
   {
       proNombre: 'Santa Tereza',
       deptoId: 312
   },
   {
       proNombre: 'Santa Vitória do Palmar',
       deptoId: 312
   },
   {
       proNombre: 'Santana da Boa Vista',
       deptoId: 312
   },
   {
       proNombre: 'Santana do Livramento',
       deptoId: 312
   },
   {
       proNombre: 'Santiago',
       deptoId: 312
   },
   {
       proNombre: 'Santo Ângelo',
       deptoId: 312
   },
   {
       proNombre: 'Santo Antônio da Patrulha',
       deptoId: 312
   },
   {
       proNombre: 'Santo Antônio das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Santo Antônio do Palma',
       deptoId: 312
   },
   {
       proNombre: 'Santo Antônio do Planalto',
       deptoId: 312
   },
   {
       proNombre: 'Santo Augusto',
       deptoId: 312
   },
   {
       proNombre: 'Santo Cristo',
       deptoId: 312
   },
   {
       proNombre: 'Santo Expedito do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São Borja',
       deptoId: 312
   },
   {
       proNombre: 'São Domingos do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São Francisco de Assis',
       deptoId: 312
   },
   {
       proNombre: 'São Francisco de Paula',
       deptoId: 312
   },
   {
       proNombre: 'São Gabriel',
       deptoId: 312
   },
   {
       proNombre: 'São Jerônimo',
       deptoId: 312
   },
   {
       proNombre: 'São João da Urtiga',
       deptoId: 312
   },
   {
       proNombre: 'São João do Polêsine',
       deptoId: 312
   },
   {
       proNombre: 'São Jorge',
       deptoId: 312
   },
   {
       proNombre: 'São José das Missões',
       deptoId: 312
   },
   {
       proNombre: 'São José do Herval',
       deptoId: 312
   },
   {
       proNombre: 'São José do Hortêncio',
       deptoId: 312
   },
   {
       proNombre: 'São José do Inhacorá',
       deptoId: 312
   },
   {
       proNombre: 'São José do Norte',
       deptoId: 312
   },
   {
       proNombre: 'São José do Ouro',
       deptoId: 312
   },
   {
       proNombre: 'São José do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São José dos Ausentes',
       deptoId: 312
   },
   {
       proNombre: 'São Leopoldo',
       deptoId: 312
   },
   {
       proNombre: 'São Lourenço do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São Luiz Gonzaga',
       deptoId: 312
   },
   {
       proNombre: 'São Marcos',
       deptoId: 312
   },
   {
       proNombre: 'São Martinho',
       deptoId: 312
   },
   {
       proNombre: 'São Martinho da Serra',
       deptoId: 312
   },
   {
       proNombre: 'São Miguel das Missões',
       deptoId: 312
   },
   {
       proNombre: 'São Nicolau',
       deptoId: 312
   },
   {
       proNombre: 'São Paulo das Missões',
       deptoId: 312
   },
   {
       proNombre: 'São Pedro da Serra',
       deptoId: 312
   },
   {
       proNombre: 'São Pedro das Missões',
       deptoId: 312
   },
   {
       proNombre: 'São Pedro do Butiá',
       deptoId: 312
   },
   {
       proNombre: 'São Pedro do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São Sebastião do Caí',
       deptoId: 312
   },
   {
       proNombre: 'São Sepé',
       deptoId: 312
   },
   {
       proNombre: 'São Valentim',
       deptoId: 312
   },
   {
       proNombre: 'São Valentim do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São Valério do Sul',
       deptoId: 312
   },
   {
       proNombre: 'São Vendelino',
       deptoId: 312
   },
   {
       proNombre: 'São Vicente do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Sapiranga',
       deptoId: 312
   },
   {
       proNombre: 'Sapucaia do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Sarandi',
       deptoId: 312
   },
   {
       proNombre: 'Seberi',
       deptoId: 312
   },
   {
       proNombre: 'Sede Nova',
       deptoId: 312
   },
   {
       proNombre: 'Segredo',
       deptoId: 312
   },
   {
       proNombre: 'Selbach',
       deptoId: 312
   },
   {
       proNombre: 'Senador Salgado Filho',
       deptoId: 312
   },
   {
       proNombre: 'Sentinela do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Serafina Corrêa',
       deptoId: 312
   },
   {
       proNombre: 'Sério',
       deptoId: 312
   },
   {
       proNombre: 'Sertão',
       deptoId: 312
   },
   {
       proNombre: 'Sertão Santana',
       deptoId: 312
   },
   {
       proNombre: 'Sete de Setembro',
       deptoId: 312
   },
   {
       proNombre: 'Severiano de Almeida',
       deptoId: 312
   },
   {
       proNombre: 'Silveira Martins',
       deptoId: 312
   },
   {
       proNombre: 'Sinimbu',
       deptoId: 312
   },
   {
       proNombre: 'Sobradinho',
       deptoId: 312
   },
   {
       proNombre: 'Soledade',
       deptoId: 312
   },
   {
       proNombre: 'Tabaí',
       deptoId: 312
   },
   {
       proNombre: 'Tapejara',
       deptoId: 312
   },
   {
       proNombre: 'Tapera',
       deptoId: 312
   },
   {
       proNombre: 'Tapes',
       deptoId: 312
   },
   {
       proNombre: 'Taquara',
       deptoId: 312
   },
   {
       proNombre: 'Taquari',
       deptoId: 312
   },
   {
       proNombre: 'Taquaruçu do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Tavares',
       deptoId: 312
   },
   {
       proNombre: 'Tenente Portela',
       deptoId: 312
   },
   {
       proNombre: 'Terra de Areia',
       deptoId: 312
   },
   {
       proNombre: 'Teutônia',
       deptoId: 312
   },
   {
       proNombre: 'Tio Hugo',
       deptoId: 312
   },
   {
       proNombre: 'Tiradentes do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Toropi',
       deptoId: 312
   },
   {
       proNombre: 'Torres',
       deptoId: 312
   },
   {
       proNombre: 'Tramandaí',
       deptoId: 312
   },
   {
       proNombre: 'Travesseiro',
       deptoId: 312
   },
   {
       proNombre: 'Três Arroios',
       deptoId: 312
   },
   {
       proNombre: 'Três Cachoeiras',
       deptoId: 312
   },
   {
       proNombre: 'Três Coroas',
       deptoId: 312
   },
   {
       proNombre: 'Três de Maio',
       deptoId: 312
   },
   {
       proNombre: 'Três Forquilhas',
       deptoId: 312
   },
   {
       proNombre: 'Três Palmeiras',
       deptoId: 312
   },
   {
       proNombre: 'Três Passos',
       deptoId: 312
   },
   {
       proNombre: 'Trindade do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Triunfo',
       deptoId: 312
   },
   {
       proNombre: 'Tucunduva',
       deptoId: 312
   },
   {
       proNombre: 'Tunas',
       deptoId: 312
   },
   {
       proNombre: 'Tupanci do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Tupanciretã',
       deptoId: 312
   },
   {
       proNombre: 'Tupandi',
       deptoId: 312
   },
   {
       proNombre: 'Tuparendi',
       deptoId: 312
   },
   {
       proNombre: 'Turuçu',
       deptoId: 312
   },
   {
       proNombre: 'Ubiretama',
       deptoId: 312
   },
   {
       proNombre: 'União da Serra',
       deptoId: 312
   },
   {
       proNombre: 'Unistalda',
       deptoId: 312
   },
   {
       proNombre: 'Uruguaiana',
       deptoId: 312
   },
   {
       proNombre: 'Vacaria',
       deptoId: 312
   },
   {
       proNombre: 'Vale do Sol',
       deptoId: 312
   },
   {
       proNombre: 'Vale Real',
       deptoId: 312
   },
   {
       proNombre: 'Vale Verde',
       deptoId: 312
   },
   {
       proNombre: 'Vanini',
       deptoId: 312
   },
   {
       proNombre: 'Venâncio Aires',
       deptoId: 312
   },
   {
       proNombre: 'Vera Cruz',
       deptoId: 312
   },
   {
       proNombre: 'Veranópolis',
       deptoId: 312
   },
   {
       proNombre: 'Vespasiano Correa',
       deptoId: 312
   },
   {
       proNombre: 'Viadutos',
       deptoId: 312
   },
   {
       proNombre: 'Viamão',
       deptoId: 312
   },
   {
       proNombre: 'Vicente Dutra',
       deptoId: 312
   },
   {
       proNombre: 'Victor Graeff',
       deptoId: 312
   },
   {
       proNombre: 'Vila Flores',
       deptoId: 312
   },
   {
       proNombre: 'Vila Lângaro',
       deptoId: 312
   },
   {
       proNombre: 'Vila Maria',
       deptoId: 312
   },
   {
       proNombre: 'Vila Nova do Sul',
       deptoId: 312
   },
   {
       proNombre: 'Vista Alegre',
       deptoId: 312
   },
   {
       proNombre: 'Vista Alegre do Prata',
       deptoId: 312
   },
   {
       proNombre: 'Vista Gaúcha',
       deptoId: 312
   },
   {
       proNombre: 'Vitória das Missões',
       deptoId: 312
   },
   {
       proNombre: 'Xangri-lá',
       deptoId: 312
   },
   {
       proNombre: "Alta Floresta d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'Alto Alegre de los Parecis',
       deptoId: 313
   },
   {
       proNombre: 'Alto Paraíso',
       deptoId: 313
   },
   {
       proNombre: "Alvorada d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'Ariquemes',
       deptoId: 313
   },
   {
       proNombre: 'Buritis',
       deptoId: 313
   },
   {
       proNombre: 'Cabixi',
       deptoId: 313
   },
   {
       proNombre: 'Cacaulândia',
       deptoId: 313
   },
   {
       proNombre: 'Cacoal',
       deptoId: 313
   },
   {
       proNombre: 'Campo Nuevo de Rondonia',
       deptoId: 313
   },
   {
       proNombre: 'Candeias del Jamari',
       deptoId: 313
   },
   {
       proNombre: 'Castanheiras',
       deptoId: 313
   },
   {
       proNombre: 'Cerejeiras',
       deptoId: 313
   },
   {
       proNombre: 'Chupinguaia',
       deptoId: 313
   },
   {
       proNombre: 'Colorado del Oeste',
       deptoId: 313
   },
   {
       proNombre: 'Corumbiara',
       deptoId: 313
   },
   {
       proNombre: 'Costa Marques',
       deptoId: 313
   },
   {
       proNombre: 'Cujubim',
       deptoId: 313
   },
   {
       proNombre: "Espigão d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'Extrema de Rondonia',
       deptoId: 313
   },
   {
       proNombre: 'Gobernador Jorge Teixeira',
       deptoId: 313
   },
   {
       proNombre: 'Guajará-Mirim',
       deptoId: 313
   },
   {
       proNombre: 'Itapuã del Oeste',
       deptoId: 313
   },
   {
       proNombre: 'Jaru',
       deptoId: 313
   },
   {
       proNombre: 'Ji-Paraná',
       deptoId: 313
   },
   {
       proNombre: "Machadinho d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'Ministro Andreazza',
       deptoId: 313
   },
   {
       proNombre: 'Mirante de la Sierra',
       deptoId: 313
   },
   {
       proNombre: 'Monte Negro',
       deptoId: 313
   },
   {
       proNombre: 'Novo Horizonte del Oeste',
       deptoId: 313
   },
   {
       proNombre: "Nueva Brasilândia d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'Nueva Mamoré',
       deptoId: 313
   },
   {
       proNombre: 'Nueva Unión',
       deptoId: 313
   },
   {
       proNombre: 'Oro Negro del Oeste',
       deptoId: 313
   },
   {
       proNombre: 'Parecis',
       deptoId: 313
   },
   {
       proNombre: 'Pimenta Bueno',
       deptoId: 313
   },
   {
       proNombre: 'Pimenteiras del Oeste',
       deptoId: 313
   },
   {
       proNombre: 'Presidente Médici',
       deptoId: 313
   },
   {
       proNombre: 'Primavera de Rondonia',
       deptoId: 313
   },
   {
       proNombre: 'Puerto Velho',
       deptoId: 313
   },
   {
       proNombre: 'Río Crespo',
       deptoId: 313
   },
   {
       proNombre: 'Rolim de Moura',
       deptoId: 313
   },
   {
       proNombre: "Santa Luzia d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'São Francisco del Guaporé',
       deptoId: 313
   },
   {
       proNombre: 'São Miguel del Guaporé',
       deptoId: 313
   },
   {
       proNombre: 'Seringueiras',
       deptoId: 313
   },
   {
       proNombre: "Son Felipe d'Oeste",
       deptoId: 313
   },
   {
       proNombre: 'Teixeirópolis',
       deptoId: 313
   },
   {
       proNombre: 'Theobroma',
       deptoId: 313
   },
   {
       proNombre: 'Urupá',
       deptoId: 313
   },
   {
       proNombre: 'Valle del Anari',
       deptoId: 313
   },
   {
       proNombre: 'Valle del Paraíso',
       deptoId: 313
   },
   {
       proNombre: 'Vilhena',
       deptoId: 313
   },
   {
       proNombre: 'Alto Alegre',
       deptoId: 314
   },
   {
       proNombre: 'Amajari',
       deptoId: 314
   },
   {
       proNombre: 'Boa Vista',
       deptoId: 314
   },
   {
       proNombre: 'Bonfim',
       deptoId: 314
   },
   {
       proNombre: 'Cantá',
       deptoId: 314
   },
   {
       proNombre: 'Caracaraí',
       deptoId: 314
   },
   {
       proNombre: 'Caroebe',
       deptoId: 314
   },
   {
       proNombre: 'Iracema',
       deptoId: 314
   },
   {
       proNombre: 'Mucajaí',
       deptoId: 314
   },
   {
       proNombre: 'Normandia',
       deptoId: 314
   },
   {
       proNombre: 'Pacaraima',
       deptoId: 314
   },
   {
       proNombre: 'Rorainópolis',
       deptoId: 314
   },
   {
       proNombre: 'São João da Baliza',
       deptoId: 314
   },
   {
       proNombre: 'São Luís',
       deptoId: 314
   },
   {
       proNombre: 'Uiramutã',
       deptoId: 314
   },
   {
       proNombre: 'Abdon Batista',
       deptoId: 315
   },
   {
       proNombre: 'Abelardo Luz',
       deptoId: 315
   },
   {
       proNombre: 'Agrolândia',
       deptoId: 315
   },
   {
       proNombre: 'Agronômica',
       deptoId: 315
   },
   {
       proNombre: 'Água Doce',
       deptoId: 315
   },
   {
       proNombre: 'Águas de Chapecó',
       deptoId: 315
   },
   {
       proNombre: 'Águas Frias',
       deptoId: 315
   },
   {
       proNombre: 'Águas Mornas',
       deptoId: 315
   },
   {
       proNombre: 'Alfredo Wagner',
       deptoId: 315
   },
   {
       proNombre: 'Alto Bela Vista',
       deptoId: 315
   },
   {
       proNombre: 'Anchieta',
       deptoId: 315
   },
   {
       proNombre: 'Angelina',
       deptoId: 315
   },
   {
       proNombre: 'Anita Garibaldi',
       deptoId: 315
   },
   {
       proNombre: 'Anitápolis',
       deptoId: 315
   },
   {
       proNombre: 'Antônio Carlos',
       deptoId: 315
   },
   {
       proNombre: 'Apiúna',
       deptoId: 315
   },
   {
       proNombre: 'Arabutã',
       deptoId: 315
   },
   {
       proNombre: 'Araquari',
       deptoId: 315
   },
   {
       proNombre: 'Araranguá',
       deptoId: 315
   },
   {
       proNombre: 'Armazém',
       deptoId: 315
   },
   {
       proNombre: 'Arroio Trinta',
       deptoId: 315
   },
   {
       proNombre: 'Arvoredo',
       deptoId: 315
   },
   {
       proNombre: 'Ascurra',
       deptoId: 315
   },
   {
       proNombre: 'Atalanta',
       deptoId: 315
   },
   {
       proNombre: 'Aurora',
       deptoId: 315
   },
   {
       proNombre: 'Balneário Arroio do Silva',
       deptoId: 315
   },
   {
       proNombre: 'Balneário Barra do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Balneário Camboriú',
       deptoId: 315
   },
   {
       proNombre: 'Balneário Gaivota',
       deptoId: 315
   },
   {
       proNombre: 'Balneário Rincão',
       deptoId: 315
   },
   {
       proNombre: 'Bandeirante',
       deptoId: 315
   },
   {
       proNombre: 'Barra Bonita',
       deptoId: 315
   },
   {
       proNombre: 'Barra Velha',
       deptoId: 315
   },
   {
       proNombre: 'Bela Vista do Toldo',
       deptoId: 315
   },
   {
       proNombre: 'Belmonte',
       deptoId: 315
   },
   {
       proNombre: 'Benedito Novo',
       deptoId: 315
   },
   {
       proNombre: 'Biguaçu',
       deptoId: 315
   },
   {
       proNombre: 'Blumenau',
       deptoId: 315
   },
   {
       proNombre: 'Bocaina do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Bom Jardim da Serra',
       deptoId: 315
   },
   {
       proNombre: 'Bom Jesus',
       deptoId: 315
   },
   {
       proNombre: 'Bom Jesus do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'Bom Retiro',
       deptoId: 315
   },
   {
       proNombre: 'Bombinhas',
       deptoId: 315
   },
   {
       proNombre: 'Botuverá',
       deptoId: 315
   },
   {
       proNombre: 'Braço do Norte',
       deptoId: 315
   },
   {
       proNombre: 'Braço do Trombudo',
       deptoId: 315
   },
   {
       proNombre: 'Brunópolis',
       deptoId: 315
   },
   {
       proNombre: 'Brusque',
       deptoId: 315
   },
   {
       proNombre: 'Caçador',
       deptoId: 315
   },
   {
       proNombre: 'Caibi',
       deptoId: 315
   },
   {
       proNombre: 'Calmon',
       deptoId: 315
   },
   {
       proNombre: 'Camboriú',
       deptoId: 315
   },
   {
       proNombre: 'Campo Alegre',
       deptoId: 315
   },
   {
       proNombre: 'Campo Belo do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Campo Erê',
       deptoId: 315
   },
   {
       proNombre: 'Campos Novos',
       deptoId: 315
   },
   {
       proNombre: 'Canelinha',
       deptoId: 315
   },
   {
       proNombre: 'Canoinhas',
       deptoId: 315
   },
   {
       proNombre: 'Capão Alto',
       deptoId: 315
   },
   {
       proNombre: 'Capinzal',
       deptoId: 315
   },
   {
       proNombre: 'Capivari de Baixo',
       deptoId: 315
   },
   {
       proNombre: 'Catanduvas',
       deptoId: 315
   },
   {
       proNombre: 'Caxambu do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Celso Ramos',
       deptoId: 315
   },
   {
       proNombre: 'Cerro Negro',
       deptoId: 315
   },
   {
       proNombre: 'Chapadão do Lageado',
       deptoId: 315
   },
   {
       proNombre: 'Chapecó',
       deptoId: 315
   },
   {
       proNombre: 'Cocal do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Concórdia',
       deptoId: 315
   },
   {
       proNombre: 'Cordilheira Alta',
       deptoId: 315
   },
   {
       proNombre: 'Coronel Freitas',
       deptoId: 315
   },
   {
       proNombre: 'Coronel Martins',
       deptoId: 315
   },
   {
       proNombre: 'Correia Pinto',
       deptoId: 315
   },
   {
       proNombre: 'Corupá',
       deptoId: 315
   },
   {
       proNombre: 'Criciúma',
       deptoId: 315
   },
   {
       proNombre: 'Cunha Porã',
       deptoId: 315
   },
   {
       proNombre: 'Cunhataí',
       deptoId: 315
   },
   {
       proNombre: 'Curitibanos',
       deptoId: 315
   },
   {
       proNombre: 'Descanso',
       deptoId: 315
   },
   {
       proNombre: 'Dionísio Cerqueira',
       deptoId: 315
   },
   {
       proNombre: 'Dona Emma',
       deptoId: 315
   },
   {
       proNombre: 'Doutor Pedrinho',
       deptoId: 315
   },
   {
       proNombre: 'Entre Rios',
       deptoId: 315
   },
   {
       proNombre: 'Ermo',
       deptoId: 315
   },
   {
       proNombre: 'Erval Velho',
       deptoId: 315
   },
   {
       proNombre: 'Faxinal dos Guedes',
       deptoId: 315
   },
   {
       proNombre: 'Flor do Sertão',
       deptoId: 315
   },
   {
       proNombre: 'Florianópolis',
       deptoId: 315
   },
   {
       proNombre: 'Formosa do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Forquilhinha',
       deptoId: 315
   },
   {
       proNombre: 'Fraiburgo',
       deptoId: 315
   },
   {
       proNombre: 'Frei Rogério',
       deptoId: 315
   },
   {
       proNombre: 'Galvão',
       deptoId: 315
   },
   {
       proNombre: 'Garopaba',
       deptoId: 315
   },
   {
       proNombre: 'Garuva',
       deptoId: 315
   },
   {
       proNombre: 'Gaspar',
       deptoId: 315
   },
   {
       proNombre: 'Governador Celso Ramos',
       deptoId: 315
   },
   {
       proNombre: 'Grão Pará',
       deptoId: 315
   },
   {
       proNombre: 'Gravatal',
       deptoId: 315
   },
   {
       proNombre: 'Guabiruba',
       deptoId: 315
   },
   {
       proNombre: 'Guaraciaba',
       deptoId: 315
   },
   {
       proNombre: 'Guaramirim',
       deptoId: 315
   },
   {
       proNombre: 'Guarujá do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Guatambú',
       deptoId: 315
   },
   {
       proNombre: 'Herval d’Oeste',
       deptoId: 315
   },
   {
       proNombre: 'Ibiam',
       deptoId: 315
   },
   {
       proNombre: 'Ibicaré',
       deptoId: 315
   },
   {
       proNombre: 'Ibirama',
       deptoId: 315
   },
   {
       proNombre: 'Içara',
       deptoId: 315
   },
   {
       proNombre: 'Ilhota',
       deptoId: 315
   },
   {
       proNombre: 'Imaruí',
       deptoId: 315
   },
   {
       proNombre: 'Imbituba',
       deptoId: 315
   },
   {
       proNombre: 'Imbuia',
       deptoId: 315
   },
   {
       proNombre: 'Indaial',
       deptoId: 315
   },
   {
       proNombre: 'Iomerê',
       deptoId: 315
   },
   {
       proNombre: 'Ipira',
       deptoId: 315
   },
   {
       proNombre: 'Iporã do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'Ipuaçu',
       deptoId: 315
   },
   {
       proNombre: 'Ipumirim',
       deptoId: 315
   },
   {
       proNombre: 'Iraceminha',
       deptoId: 315
   },
   {
       proNombre: 'Irani',
       deptoId: 315
   },
   {
       proNombre: 'Irati',
       deptoId: 315
   },
   {
       proNombre: 'Irineópolis',
       deptoId: 315
   },
   {
       proNombre: 'Itá',
       deptoId: 315
   },
   {
       proNombre: 'Itaiópolis',
       deptoId: 315
   },
   {
       proNombre: 'Itajaí',
       deptoId: 315
   },
   {
       proNombre: 'Itapema',
       deptoId: 315
   },
   {
       proNombre: 'Itapiranga',
       deptoId: 315
   },
   {
       proNombre: 'Itapoá',
       deptoId: 315
   },
   {
       proNombre: 'Ituporanga',
       deptoId: 315
   },
   {
       proNombre: 'Jaborá',
       deptoId: 315
   },
   {
       proNombre: 'Jacinto Machado',
       deptoId: 315
   },
   {
       proNombre: 'Jaguaruna',
       deptoId: 315
   },
   {
       proNombre: 'Jaraguá do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Jardinópolis',
       deptoId: 315
   },
   {
       proNombre: 'Joaçaba',
       deptoId: 315
   },
   {
       proNombre: 'Joinville',
       deptoId: 315
   },
   {
       proNombre: 'José Boiteux',
       deptoId: 315
   },
   {
       proNombre: 'Jupiá',
       deptoId: 315
   },
   {
       proNombre: 'Lacerdópolis',
       deptoId: 315
   },
   {
       proNombre: 'Lages',
       deptoId: 315
   },
   {
       proNombre: 'Laguna',
       deptoId: 315
   },
   {
       proNombre: 'Lajeado Grande',
       deptoId: 315
   },
   {
       proNombre: 'Laurentino',
       deptoId: 315
   },
   {
       proNombre: 'Lauro Müller',
       deptoId: 315
   },
   {
       proNombre: 'Lebon Régis',
       deptoId: 315
   },
   {
       proNombre: 'Leoberto Leal',
       deptoId: 315
   },
   {
       proNombre: 'Lindóia do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Lontras',
       deptoId: 315
   },
   {
       proNombre: 'Luiz Alves',
       deptoId: 315
   },
   {
       proNombre: 'Luzerna',
       deptoId: 315
   },
   {
       proNombre: 'Macieira',
       deptoId: 315
   },
   {
       proNombre: 'Mafra',
       deptoId: 315
   },
   {
       proNombre: 'Major Gercino',
       deptoId: 315
   },
   {
       proNombre: 'Major Vieira',
       deptoId: 315
   },
   {
       proNombre: 'Maracajá',
       deptoId: 315
   },
   {
       proNombre: 'Maravilha',
       deptoId: 315
   },
   {
       proNombre: 'Marema',
       deptoId: 315
   },
   {
       proNombre: 'Massaranduba',
       deptoId: 315
   },
   {
       proNombre: 'Matos Costa',
       deptoId: 315
   },
   {
       proNombre: 'Meleiro',
       deptoId: 315
   },
   {
       proNombre: 'Mirim Doce',
       deptoId: 315
   },
   {
       proNombre: 'Modelo',
       deptoId: 315
   },
   {
       proNombre: 'Mondaí',
       deptoId: 315
   },
   {
       proNombre: 'Monte Carlo',
       deptoId: 315
   },
   {
       proNombre: 'Monte Castelo',
       deptoId: 315
   },
   {
       proNombre: 'Morro da Fumaça',
       deptoId: 315
   },
   {
       proNombre: 'Morro Grande',
       deptoId: 315
   },
   {
       proNombre: 'Navegantes',
       deptoId: 315
   },
   {
       proNombre: 'Nova Erechim',
       deptoId: 315
   },
   {
       proNombre: 'Nova Itaberaba',
       deptoId: 315
   },
   {
       proNombre: 'Nova Trento',
       deptoId: 315
   },
   {
       proNombre: 'Nova Veneza',
       deptoId: 315
   },
   {
       proNombre: 'Novo Horizonte',
       deptoId: 315
   },
   {
       proNombre: 'Orleans',
       deptoId: 315
   },
   {
       proNombre: 'Otacílio Costa',
       deptoId: 315
   },
   {
       proNombre: 'Ouro',
       deptoId: 315
   },
   {
       proNombre: 'Ouro Verde',
       deptoId: 315
   },
   {
       proNombre: 'Paial',
       deptoId: 315
   },
   {
       proNombre: 'Painel',
       deptoId: 315
   },
   {
       proNombre: 'Palhoça',
       deptoId: 315
   },
   {
       proNombre: 'Palma Sola',
       deptoId: 315
   },
   {
       proNombre: 'Palmeira',
       deptoId: 315
   },
   {
       proNombre: 'Palmitos',
       deptoId: 315
   },
   {
       proNombre: 'Papanduva',
       deptoId: 315
   },
   {
       proNombre: 'Paraíso',
       deptoId: 315
   },
   {
       proNombre: 'Passo de Torres',
       deptoId: 315
   },
   {
       proNombre: 'Passos Maia',
       deptoId: 315
   },
   {
       proNombre: 'Paulo Lopes',
       deptoId: 315
   },
   {
       proNombre: 'Pedras Grandes',
       deptoId: 315
   },
   {
       proNombre: 'Penha',
       deptoId: 315
   },
   {
       proNombre: 'Peritiba',
       deptoId: 315
   },
   {
       proNombre: 'Pescaria Brava',
       deptoId: 315
   },
   {
       proNombre: 'Petrolândia',
       deptoId: 315
   },
   {
       proNombre: 'Piçarras',
       deptoId: 315
   },
   {
       proNombre: 'Pinhalzinho',
       deptoId: 315
   },
   {
       proNombre: 'Pinheiro Preto',
       deptoId: 315
   },
   {
       proNombre: 'Piratuba',
       deptoId: 315
   },
   {
       proNombre: 'Planalto Alegre',
       deptoId: 315
   },
   {
       proNombre: 'Pomerode',
       deptoId: 315
   },
   {
       proNombre: 'Ponte Alta',
       deptoId: 315
   },
   {
       proNombre: 'Ponte Alta do Norte',
       deptoId: 315
   },
   {
       proNombre: 'Ponte Serrada',
       deptoId: 315
   },
   {
       proNombre: 'Porto Belo',
       deptoId: 315
   },
   {
       proNombre: 'Porto União',
       deptoId: 315
   },
   {
       proNombre: 'Pouso Redondo',
       deptoId: 315
   },
   {
       proNombre: 'Praia Grande',
       deptoId: 315
   },
   {
       proNombre: 'Presidente Castelo Branco',
       deptoId: 315
   },
   {
       proNombre: 'Presidente Getúlio',
       deptoId: 315
   },
   {
       proNombre: 'Presidente Nereu',
       deptoId: 315
   },
   {
       proNombre: 'Princesa',
       deptoId: 315
   },
   {
       proNombre: 'Quilombo',
       deptoId: 315
   },
   {
       proNombre: 'Rancho Queimado',
       deptoId: 315
   },
   {
       proNombre: 'Rio das Antas',
       deptoId: 315
   },
   {
       proNombre: 'Rio do Campo',
       deptoId: 315
   },
   {
       proNombre: 'Rio do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'Rio do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Rio dos Cedros',
       deptoId: 315
   },
   {
       proNombre: 'Rio Fortuna',
       deptoId: 315
   },
   {
       proNombre: 'Rio Negrinho',
       deptoId: 315
   },
   {
       proNombre: 'Rio Rufino',
       deptoId: 315
   },
   {
       proNombre: 'Rodeio',
       deptoId: 315
   },
   {
       proNombre: 'Romelândia',
       deptoId: 315
   },
   {
       proNombre: 'Salete',
       deptoId: 315
   },
   {
       proNombre: 'Saltinho',
       deptoId: 315
   },
   {
       proNombre: 'Salto Veloso',
       deptoId: 315
   },
   {
       proNombre: 'Sangão',
       deptoId: 315
   },
   {
       proNombre: 'Santa Cecília',
       deptoId: 315
   },
   {
       proNombre: 'Santa Helena',
       deptoId: 315
   },
   {
       proNombre: 'Santa Rosa de Lima',
       deptoId: 315
   },
   {
       proNombre: 'Santa Rosa do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Santa Terezinha',
       deptoId: 315
   },
   {
       proNombre: 'Santa Terezinha do Progresso',
       deptoId: 315
   },
   {
       proNombre: 'Santiago do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Santo Amaro da Imperatriz',
       deptoId: 315
   },
   {
       proNombre: 'São Bento do Sul',
       deptoId: 315
   },
   {
       proNombre: 'São Bernardino',
       deptoId: 315
   },
   {
       proNombre: 'São Bonifácio',
       deptoId: 315
   },
   {
       proNombre: 'São Carlos',
       deptoId: 315
   },
   {
       proNombre: 'São Cristóvão do Sul',
       deptoId: 315
   },
   {
       proNombre: 'São Domingos',
       deptoId: 315
   },
   {
       proNombre: 'São Francisco do Sul',
       deptoId: 315
   },
   {
       proNombre: 'São João Batista',
       deptoId: 315
   },
   {
       proNombre: 'São João do Itaperiú',
       deptoId: 315
   },
   {
       proNombre: 'São João do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'São João do Sul',
       deptoId: 315
   },
   {
       proNombre: 'São Joaquim',
       deptoId: 315
   },
   {
       proNombre: 'São José',
       deptoId: 315
   },
   {
       proNombre: 'São José do Cedro',
       deptoId: 315
   },
   {
       proNombre: 'São José do Cerrito',
       deptoId: 315
   },
   {
       proNombre: 'São Lourenço do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'São Ludgero',
       deptoId: 315
   },
   {
       proNombre: 'São Martinho',
       deptoId: 315
   },
   {
       proNombre: 'São Miguel da Boa Vista',
       deptoId: 315
   },
   {
       proNombre: 'São Miguel do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'São Pedro de Alcântara',
       deptoId: 315
   },
   {
       proNombre: 'Saudades',
       deptoId: 315
   },
   {
       proNombre: 'Schroeder',
       deptoId: 315
   },
   {
       proNombre: 'Seara',
       deptoId: 315
   },
   {
       proNombre: 'Serra Alta',
       deptoId: 315
   },
   {
       proNombre: 'Siderópolis',
       deptoId: 315
   },
   {
       proNombre: 'Sombrio',
       deptoId: 315
   },
   {
       proNombre: 'Sul Brasil',
       deptoId: 315
   },
   {
       proNombre: 'Taió',
       deptoId: 315
   },
   {
       proNombre: 'Tangará',
       deptoId: 315
   },
   {
       proNombre: 'Tigrinhos',
       deptoId: 315
   },
   {
       proNombre: 'Tijucas',
       deptoId: 315
   },
   {
       proNombre: 'Timbé do Sul',
       deptoId: 315
   },
   {
       proNombre: 'Timbó',
       deptoId: 315
   },
   {
       proNombre: 'Timbó Grande',
       deptoId: 315
   },
   {
       proNombre: 'Três Barras',
       deptoId: 315
   },
   {
       proNombre: 'Treviso',
       deptoId: 315
   },
   {
       proNombre: 'Treze de Maio',
       deptoId: 315
   },
   {
       proNombre: 'Treze Tílias',
       deptoId: 315
   },
   {
       proNombre: 'Trombudo Central',
       deptoId: 315
   },
   {
       proNombre: 'Tubarão',
       deptoId: 315
   },
   {
       proNombre: 'Tunápolis',
       deptoId: 315
   },
   {
       proNombre: 'Turvo',
       deptoId: 315
   },
   {
       proNombre: 'União do Oeste',
       deptoId: 315
   },
   {
       proNombre: 'Urubici',
       deptoId: 315
   },
   {
       proNombre: 'Urupema',
       deptoId: 315
   },
   {
       proNombre: 'Urussanga',
       deptoId: 315
   },
   {
       proNombre: 'Vargeão',
       deptoId: 315
   },
   {
       proNombre: 'Vargem',
       deptoId: 315
   },
   {
       proNombre: 'Vargem Bonita',
       deptoId: 315
   },
   {
       proNombre: 'Vidal Ramos',
       deptoId: 315
   },
   {
       proNombre: 'Videira',
       deptoId: 315
   },
   {
       proNombre: 'Vitor Meireles',
       deptoId: 315
   },
   {
       proNombre: 'Witmarsum',
       deptoId: 315
   },
   {
       proNombre: 'Xanxerê',
       deptoId: 315
   },
   {
       proNombre: 'Xavantina',
       deptoId: 315
   },
   {
       proNombre: 'Xaxim',
       deptoId: 315
   },
   {
       proNombre: 'Zortéa',
       deptoId: 315
   },
   {
       proNombre: 'Adamantina',
       deptoId: 316
   },
   {
       proNombre: 'Amparo',
       deptoId: 316
   },
   {
       proNombre: 'Andradina',
       deptoId: 316
   },
   {
       proNombre: 'Araçatuba',
       deptoId: 316
   },
   {
       proNombre: 'Araraquara',
       deptoId: 316
   },
   {
       proNombre: 'Assis',
       deptoId: 316
   },
   {
       proNombre: 'Auriflama',
       deptoId: 316
   },
   {
       proNombre: 'Avaré',
       deptoId: 316
   },
   {
       proNombre: 'Bananal',
       deptoId: 316
   },
   {
       proNombre: 'Barretos',
       deptoId: 316
   },
   {
       proNombre: 'Batatais',
       deptoId: 316
   },
   {
       proNombre: 'Bauru',
       deptoId: 316
   },
   {
       proNombre: 'Birigui',
       deptoId: 316
   },
   {
       proNombre: 'Botucatu',
       deptoId: 316
   },
   {
       proNombre: 'Bragança Paulista',
       deptoId: 316
   },
   {
       proNombre: 'Campinas',
       deptoId: 316
   },
   {
       proNombre: 'Campos do Jordão',
       deptoId: 316
   },
   {
       proNombre: 'Capão Bonito',
       deptoId: 316
   },
   {
       proNombre: 'Caraguatatuba',
       deptoId: 316
   },
   {
       proNombre: 'Catanduva',
       deptoId: 316
   },
   {
       proNombre: 'Dracena',
       deptoId: 316
   },
   {
       proNombre: 'Fernandópolis',
       deptoId: 316
   },
   {
       proNombre: 'Franca',
       deptoId: 316
   },
   {
       proNombre: 'Franco da Rocha',
       deptoId: 316
   },
   {
       proNombre: 'Guaratinguetá',
       deptoId: 316
   },
   {
       proNombre: 'Guarulhos',
       deptoId: 316
   },
   {
       proNombre: 'Itanhaém',
       deptoId: 316
   },
   {
       proNombre: 'Itapecerica da Serra',
       deptoId: 316
   },
   {
       proNombre: 'Itapetininga',
       deptoId: 316
   },
   {
       proNombre: 'Itapeva',
       deptoId: 316
   },
   {
       proNombre: 'Ituverava',
       deptoId: 316
   },
   {
       proNombre: 'Jaboticabal',
       deptoId: 316
   },
   {
       proNombre: 'Jales',
       deptoId: 316
   },
   {
       proNombre: 'Jaú',
       deptoId: 316
   },
   {
       proNombre: 'Jundiaí',
       deptoId: 316
   },
   {
       proNombre: 'Limeira',
       deptoId: 316
   },
   {
       proNombre: 'Lins',
       deptoId: 316
   },
   {
       proNombre: 'Marília',
       deptoId: 316
   },
   {
       proNombre: 'Mogi das Cruzes',
       deptoId: 316
   },
   {
       proNombre: 'Mogi Guaçu',
       deptoId: 316
   },
   {
       proNombre: 'Mogi-Mirim',
       deptoId: 316
   },
   {
       proNombre: 'Nhandeara',
       deptoId: 316
   },
   {
       proNombre: 'Horizonte',
       deptoId: 316
   },
   {
       proNombre: 'Osasco',
       deptoId: 316
   },
   {
       proNombre: 'Ourinhos',
       deptoId: 316
   },
   {
       proNombre: 'Paraibuna/Paraitinga',
       deptoId: 316
   },
   {
       proNombre: 'Paulínia',
       deptoId: 316
   },
   {
       proNombre: 'Paraibuna/Paraitinga',
       deptoId: 316
   },
   {
       proNombre: 'Piedade',
       deptoId: 316
   },
   {
       proNombre: 'Piracicaba',
       deptoId: 316
   },
   {
       proNombre: 'Pirassununga',
       deptoId: 316
   },
   {
       proNombre: 'Presidente Prudente',
       deptoId: 316
   },
   {
       proNombre: 'Registro',
       deptoId: 316
   },
   {
       proNombre: 'Ribeirão Preto',
       deptoId: 316
   },
   {
       proNombre: 'Río Claro',
       deptoId: 316
   },
   {
       proNombre: 'Santos',
       deptoId: 316
   },
   {
       proNombre: 'São Joaquim da Barra',
       deptoId: 316
   },
   {
       proNombre: 'São José dos Campos',
       deptoId: 316
   },
   {
       proNombre: 'Sorocaba',
       deptoId: 316
   },
   {
       proNombre: 'São José do Río Preto',
       deptoId: 316
   },
   {
       proNombre: 'São João da Boa Vista',
       deptoId: 316
   },
   {
       proNombre: 'São Paulo',
       deptoId: 316
   },
   {
       proNombre: 'Tatuí',
       deptoId: 316
   },
   {
       proNombre: 'Tupã',
       deptoId: 316
   },
   {
       proNombre: 'Votuporanga',
       deptoId: 316
   },
   {
       proNombre: 'Amparo de São Francisco',
       deptoId: 317
   },
   {
       proNombre: 'Aquidabã',
       deptoId: 317
   },
   {
       proNombre: 'Aracaju',
       deptoId: 317
   },
   {
       proNombre: 'Arauá',
       deptoId: 317
   },
   {
       proNombre: 'Areia Branca',
       deptoId: 317
   },
   {
       proNombre: 'Barra dos Coqueiros',
       deptoId: 317
   },
   {
       proNombre: 'Boquim',
       deptoId: 317
   },
   {
       proNombre: 'Brejo Grande',
       deptoId: 317
   },
   {
       proNombre: 'Campo do Brito',
       deptoId: 317
   },
   {
       proNombre: 'Canhoba',
       deptoId: 317
   },
   {
       proNombre: 'Canindé de São Francisco',
       deptoId: 317
   },
   {
       proNombre: 'Capela',
       deptoId: 317
   },
   {
       proNombre: 'Carira',
       deptoId: 317
   },
   {
       proNombre: 'Carmópolis',
       deptoId: 317
   },
   {
       proNombre: 'Cedro de São João',
       deptoId: 317
   },
   {
       proNombre: 'Cristinápolis',
       deptoId: 317
   },
   {
       proNombre: 'Cumbe',
       deptoId: 317
   },
   {
       proNombre: 'Divina Pastora',
       deptoId: 317
   },
   {
       proNombre: 'Estância',
       deptoId: 317
   },
   {
       proNombre: 'Feira Nova',
       deptoId: 317
   },
   {
       proNombre: 'Frei Paulo',
       deptoId: 317
   },
   {
       proNombre: 'Gararu',
       deptoId: 317
   },
   {
       proNombre: 'General Maynard',
       deptoId: 317
   },
   {
       proNombre: 'Graccho Cardoso',
       deptoId: 317
   },
   {
       proNombre: 'Ilha das Flores',
       deptoId: 317
   },
   {
       proNombre: 'Indiaroba',
       deptoId: 317
   },
   {
       proNombre: 'Itabaiana',
       deptoId: 317
   },
   {
       proNombre: 'Itabaianinha',
       deptoId: 317
   },
   {
       proNombre: 'Itabi',
       deptoId: 317
   },
   {
       proNombre: "Itaporanga d'Ajuda",
       deptoId: 317
   },
   {
       proNombre: 'Japaratuba',
       deptoId: 317
   },
   {
       proNombre: 'Japoatã',
       deptoId: 317
   },
   {
       proNombre: 'Lagarto',
       deptoId: 317
   },
   {
       proNombre: 'Laranjeiras',
       deptoId: 317
   },
   {
       proNombre: 'Macambira',
       deptoId: 317
   },
   {
       proNombre: 'Malhada dos Bois',
       deptoId: 317
   },
   {
       proNombre: 'Malhador',
       deptoId: 317
   },
   {
       proNombre: 'Maruim',
       deptoId: 317
   },
   {
       proNombre: 'Moita Bonita',
       deptoId: 317
   },
   {
       proNombre: 'Monte Alegre de Sergipe',
       deptoId: 317
   },
   {
       proNombre: 'Muribeca',
       deptoId: 317
   },
   {
       proNombre: 'Neópolis',
       deptoId: 317
   },
   {
       proNombre: 'Nossa Senhora Aparecida',
       deptoId: 317
   },
   {
       proNombre: 'Nossa Senhora da Glória',
       deptoId: 317
   },
   {
       proNombre: 'Nossa Senhora das Dores',
       deptoId: 317
   },
   {
       proNombre: 'Nossa Senhora de Lourdes',
       deptoId: 317
   },
   {
       proNombre: 'Nossa Senhora do Socorro',
       deptoId: 317
   },
   {
       proNombre: 'Pacatuba',
       deptoId: 317
   },
   {
       proNombre: 'Pedra Mole',
       deptoId: 317
   },
   {
       proNombre: 'Pedrinhas',
       deptoId: 317
   },
   {
       proNombre: 'Pinhão',
       deptoId: 317
   },
   {
       proNombre: 'Pirambu',
       deptoId: 317
   },
   {
       proNombre: 'Poço Redondo',
       deptoId: 317
   },
   {
       proNombre: 'Poço Verde',
       deptoId: 317
   },
   {
       proNombre: 'Porto da Folha',
       deptoId: 317
   },
   {
       proNombre: 'Propriá',
       deptoId: 317
   },
   {
       proNombre: 'Riachão do Dantas',
       deptoId: 317
   },
   {
       proNombre: 'Riachuelo',
       deptoId: 317
   },
   {
       proNombre: 'Ribeirópolis',
       deptoId: 317
   },
   {
       proNombre: 'Rosário do Catete',
       deptoId: 317
   },
   {
       proNombre: 'Salgado',
       deptoId: 317
   },
   {
       proNombre: 'Santa Luzia do Itanh',
       deptoId: 317
   },
   {
       proNombre: 'Santa Rosa de Lima',
       deptoId: 317
   },
   {
       proNombre: 'Santana do São Francisco',
       deptoId: 317
   },
   {
       proNombre: 'Santo Amaro das Brotas',
       deptoId: 317
   },
   {
       proNombre: 'São Cristóvão',
       deptoId: 317
   },
   {
       proNombre: 'São Domingos',
       deptoId: 317
   },
   {
       proNombre: 'São Francisco',
       deptoId: 317
   },
   {
       proNombre: 'São Miguel do Aleixo',
       deptoId: 317
   },
   {
       proNombre: 'Simão Dias',
       deptoId: 317
   },
   {
       proNombre: 'Siriri',
       deptoId: 317
   },
   {
       proNombre: 'Telha',
       deptoId: 317
   },
   {
       proNombre: 'Tobias Barreto',
       deptoId: 317
   },
   {
       proNombre: 'Tomar do Geru',
       deptoId: 317
   },
   {
       proNombre: 'Umbaúba',
       deptoId: 317
   },
   {
       proNombre: 'Abreulândia',
       deptoId: 318
   },
   {
       proNombre: 'Aguiarnópolis',
       deptoId: 318
   },
   {
       proNombre: 'Aliança do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Almas',
       deptoId: 318
   },
   {
       proNombre: 'Alvorada',
       deptoId: 318
   },
   {
       proNombre: 'Ananás',
       deptoId: 318
   },
   {
       proNombre: 'Angico',
       deptoId: 318
   },
   {
       proNombre: 'Aparecida do Rio Negro',
       deptoId: 318
   },
   {
       proNombre: 'Aragominas',
       deptoId: 318
   },
   {
       proNombre: 'Araguacema',
       deptoId: 318
   },
   {
       proNombre: 'Araguanã',
       deptoId: 318
   },
   {
       proNombre: 'Araguatins',
       deptoId: 318
   },
   {
       proNombre: 'Araguaçu',
       deptoId: 318
   },
   {
       proNombre: 'Araguaína',
       deptoId: 318
   },
   {
       proNombre: 'Arapoema',
       deptoId: 318
   },
   {
       proNombre: 'Arraias',
       deptoId: 318
   },
   {
       proNombre: 'Augustinópolis',
       deptoId: 318
   },
   {
       proNombre: 'Aurora do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Axixá do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Babaçulândia',
       deptoId: 318
   },
   {
       proNombre: 'Bandeirantes do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Barra do Ouro',
       deptoId: 318
   },
   {
       proNombre: 'Barrolândia',
       deptoId: 318
   },
   {
       proNombre: 'Bernardo Sayão',
       deptoId: 318
   },
   {
       proNombre: 'Bom Jesus do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Brasilândia do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Brejinho de Nazaré',
       deptoId: 318
   },
   {
       proNombre: 'Buriti do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Cachoeirinha',
       deptoId: 318
   },
   {
       proNombre: 'Campos Lindos',
       deptoId: 318
   },
   {
       proNombre: 'Cariri do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Carmolândia',
       deptoId: 318
   },
   {
       proNombre: 'Carrasco Bonito',
       deptoId: 318
   },
   {
       proNombre: 'Caseara',
       deptoId: 317
   },
   {
       proNombre: 'Centenário',
       deptoId: 317
   },
   {
       proNombre: 'Chapada da Natividade',
       deptoId: 317
   },
   {
       proNombre: 'Chapada de Areia',
       deptoId: 318
   },
   {
       proNombre: 'Colinas do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Colméia',
       deptoId: 318
   },
   {
       proNombre: 'Combinado',
       deptoId: 318
   },
   {
       proNombre: 'Conceição do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Couto de Magalhães',
       deptoId: 318
   },
   {
       proNombre: 'Cristalândia',
       deptoId: 318
   },
   {
       proNombre: 'Crixás do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Darcinópolis',
       deptoId: 318
   },
   {
       proNombre: 'Dianópolis',
       deptoId: 318
   },
   {
       proNombre: 'Divinópolis do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Dois Irmãos do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Dueré',
       deptoId: 318
   },
   {
       proNombre: 'Esperantina',
       deptoId: 318
   },
   {
       proNombre: 'Figueirópolis',
       deptoId: 318
   },
   {
       proNombre: 'Filadélfia',
       deptoId: 318
   },
   {
       proNombre: 'Formoso do Araguaia',
       deptoId: 318
   },
   {
       proNombre: 'Fortaleza do Tabocão',
       deptoId: 318
   },
   {
       proNombre: 'Fátima',
       deptoId: 318
   },
   {
       proNombre: 'Goianorte',
       deptoId: 318
   },
   {
       proNombre: 'Goiatins',
       deptoId: 318
   },
   {
       proNombre: 'Guaraí',
       deptoId: 318
   },
   {
       proNombre: 'Gurupi',
       deptoId: 318
   },
   {
       proNombre: 'Ipueiras',
       deptoId: 318
   },
   {
       proNombre: 'Itacajá',
       deptoId: 318
   },
   {
       proNombre: 'Itaguatins',
       deptoId: 318
   },
   {
       proNombre: 'Itapiratins',
       deptoId: 318
   },
   {
       proNombre: 'Itaporã do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Jaú do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Juarina',
       deptoId: 318
   },
   {
       proNombre: 'Lagoa da Confusão',
       deptoId: 318
   },
   {
       proNombre: 'Lagoa do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Lajeado',
       deptoId: 318
   },
   {
       proNombre: 'Lavandeira',
       deptoId: 318
   },
   {
       proNombre: 'Lizarda',
       deptoId: 318
   },
   {
       proNombre: 'Luzinópolis',
       deptoId: 318
   },
   {
       proNombre: 'Marianópolis do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Mateiros',
       deptoId: 318
   },
   {
       proNombre: 'Maurilândia do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Miracema do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Miranorte',
       deptoId: 318
   },
   {
       proNombre: 'Monte do Carmo',
       deptoId: 318
   },
   {
       proNombre: 'Monte Santo do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Muricilândia',
       deptoId: 318
   },
   {
       proNombre: 'Natividade',
       deptoId: 318
   },
   {
       proNombre: 'Nazaré',
       deptoId: 318
   },
   {
       proNombre: 'Nova Olinda',
       deptoId: 318
   },
   {
       proNombre: 'Nova Rosalândia',
       deptoId: 318
   },
   {
       proNombre: 'Novo Acordo',
       deptoId: 318
   },
   {
       proNombre: 'Novo Alegre',
       deptoId: 318
   },
   {
       proNombre: 'Novo Jardim',
       deptoId: 318
   },
   {
       proNombre: 'Oliveira de Fátima',
       deptoId: 318
   },
   {
       proNombre: 'Palmas',
       deptoId: 318
   },
   {
       proNombre: 'Palmeirante',
       deptoId: 318
   },
   {
       proNombre: 'Palmeiras do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Palmeirópolis',
       deptoId: 318
   },
   {
       proNombre: 'Paranã',
       deptoId: 318
   },
   {
       proNombre: 'Paraíso do Tocantins',
       deptoId: 318
   },
   {
       proNombre: "Pau d'Arco",
       deptoId: 318
   },
   {
       proNombre: 'Pedro Afonso',
       deptoId: 318
   },
   {
       proNombre: 'Peixe',
       deptoId: 318
   },
   {
       proNombre: 'Pequizeiro',
       deptoId: 318
   },
   {
       proNombre: 'Pindorama do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Piraquê',
       deptoId: 318
   },
   {
       proNombre: 'Pium',
       deptoId: 318
   },
   {
       proNombre: 'Ponte Alta do Bom Jesus',
       deptoId: 318
   },
   {
       proNombre: 'Ponte Alta do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Porto Alegre do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Porto Nacional',
       deptoId: 318
   },
   {
       proNombre: 'Praia Norte',
       deptoId: 318
   },
   {
       proNombre: 'Presidente Kennedy',
       deptoId: 318
   },
   {
       proNombre: 'Pugmil',
       deptoId: 318
   },
   {
       proNombre: 'Recursolândia',
       deptoId: 318
   },
   {
       proNombre: 'Riachinho',
       deptoId: 318
   },
   {
       proNombre: 'Rio da Conceição',
       deptoId: 318
   },
   {
       proNombre: 'Rio dos Bois',
       deptoId: 318
   },
   {
       proNombre: 'Rio Sono',
       deptoId: 318
   },
   {
       proNombre: 'Sampaio',
       deptoId: 318
   },
   {
       proNombre: 'Sandolândia',
       deptoId: 318
   },
   {
       proNombre: 'Santa Fé do Araguaia',
       deptoId: 318
   },
   {
       proNombre: 'Santa Maria do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Santa Rita do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Santa Rosa do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Santa Tereza do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Santa Terezinha do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Silvanópolis',
       deptoId: 318
   },
   {
       proNombre: 'Sucupira',
       deptoId: 318
   },
   {
       proNombre: 'São Bento do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'São Félix do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'São Salvador do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'São Sebastião do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'São Valério da Natividade',
       deptoId: 318
   },
   {
       proNombre: 'Sítio Novo do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Taguatinga',
       deptoId: 318
   },
   {
       proNombre: 'Taipas do Tocantins',
       deptoId: 318
   },
   {
       proNombre: 'Talismã',
       deptoId: 318
   },
   {
       proNombre: 'Tocantinópolis',
       deptoId: 318
   },
   {
       proNombre: 'Tocantínia',
       deptoId: 318
   },
   {
       proNombre: 'Tupirama',
       deptoId: 318
   },
   {
       proNombre: 'Tupiratins',
       deptoId: 318
   },
   {
       proNombre: 'Wanderlândia',
       deptoId: 318
   },
   {
       proNombre: 'Xambioá',
       deptoId: 318
   },
   {
       proNombre: 'Águas Claras',
       deptoId: 319
   },
   {
       proNombre: '	Brasília',
       deptoId: 319
   },
   {
       proNombre: 'Brazlândia',
       deptoId: 319
   },
   {
       proNombre: 'Candangolândia',
       deptoId: 319
   },
   {
       proNombre: 'Ceilândia',
       deptoId: 319
   },
   {
       proNombre: 'Cruzeiro',
       deptoId: 319
   },
   {
       proNombre: 'Fercal',
       deptoId: 319
   },
   {
       proNombre: 'Gama',
       deptoId: 319
   },
   {
       proNombre: 'Guará',
       deptoId: 319
   },
   {
       proNombre: 'Itapoã',
       deptoId: 319
   },
   {
       proNombre: 'Jardim Botânico',
       deptoId: 319
   },
   {
       proNombre: 'Lago Norte',
       deptoId: 319
   },
   {
       proNombre: 'Lago Sul',
       deptoId: 319
   },
   {
       proNombre: 'Núcleo Bandeirante',
       deptoId: 319
   },
   {
       proNombre: 'Paranoá',
       deptoId: 319
   },
   {
       proNombre: 'Park Way',
       deptoId: 319
   },
   {
       proNombre: 'Planaltina',
       deptoId: 319
   },
   {
       proNombre: 'Recanto das Emas',
       deptoId: 319
   },
   {
       proNombre: 'Riacho Fundo',
       deptoId: 319
   },
   {
       proNombre: 'Riacho Fundo II',
       deptoId: 319
   },
   {
       proNombre: 'Samambaia',
       deptoId: 319
   },
   {
       proNombre: 'Santa Maria',
       deptoId: 319
   },
   {
       proNombre: 'São Sebastião',
       deptoId: 319
   },
   {
       proNombre: 'SCIA',
       deptoId: 319
   },
   {
       proNombre: 'SIA',
       deptoId: 319
   },
   {
       proNombre: 'Sobradinho',
       deptoId: 319
   },
   {
       proNombre: 'Sobradinho II',
       deptoId: 319
   },
   {
       proNombre: 'Sudoeste/Octogonal',
       deptoId: 319
   },
   {
       proNombre: 'Taguatinga',
       deptoId: 319
   },
   {
       proNombre: 'Varjão',
       deptoId: 319
   },
   {
       proNombre: 'Vicente Pires',
       deptoId: 319
   },
   {
       proNombre: 'Bukit Sawat',
       deptoId: 320
   },
   {
       proNombre: 'Kuala Balai',
       deptoId: 320
   },
   {
       proNombre: 'Kuala Belait',
       deptoId: 320
   },
   {
       proNombre: 'Labi',
       deptoId: 320
   },
   {
       proNombre: 'Liang',
       deptoId: 320
   },
   {
       proNombre: 'Melilas',
       deptoId: 320
   },
   {
       proNombre: 'Seria',
       deptoId: 320
   },
   {
       proNombre: 'Sukang',
       deptoId: 320
   },
   {
       proNombre: 'Berakas "A"',
       deptoId: 321
   },
   {
       proNombre: 'Berakas "B"',
       deptoId: 321
   },
   {
       proNombre: 'Berakas "A"',
       deptoId: 321
   },
   {
       proNombre: 'Berakas "B"',
       deptoId: 321
   },
   {
       proNombre: 'Burong Pinggai Ayer',
       deptoId: 321
   },
   {
       proNombre: 'Gadong',
       deptoId: 321
   },
   {
       proNombre: 'Kampong Peramu',
       deptoId: 321
   },
   {
       proNombre: 'Kilanas',
       deptoId: 321
   },
   {
       proNombre: 'Kota Batu',
       deptoId: 321
   },
   {
       proNombre: 'Lumapas',
       deptoId: 321
   },
   {
       proNombre: 'Mentiri',
       deptoId: 321
   },
   {
       proNombre: 'Pengkalan Batu',
       deptoId: 321
   },
   {
       proNombre: 'Saba',
       deptoId: 321
   },
   {
       proNombre: 'Sengkurong',
       deptoId: 321
   },
   {
       proNombre: 'Serasa',
       deptoId: 321
   },
   {
       proNombre: 'Sungai Kebun',
       deptoId: 321
   },
   {
       proNombre: 'Sungai Kedayan',
       deptoId: 321
   },
   {
       proNombre: 'Tamoi',
       deptoId: 321
   },
   {
       proNombre: 'Bangar',
       deptoId: 322
   },
   {
       proNombre: 'Labu',
       deptoId: 322
   },
   {
       proNombre: 'Batu Apoi',
       deptoId: 322
   },
   {
       proNombre: 'Amo',
       deptoId: 322
   },
   {
       proNombre: 'Bokok',
       deptoId: 322
   },
   {
       proNombre: 'Pekan Tutong',
       deptoId: 323
   },
   {
       proNombre: 'Keriam',
       deptoId: 323
   },
   {
       proNombre: 'Telisai',
       deptoId: 323
   },
   {
       proNombre: 'Tanjong Maya',
       deptoId: 323
   },
   {
       proNombre: 'Kiudang',
       deptoId: 323
   },
   {
       proNombre: 'Ukong',
       deptoId: 323
   },
   {
       proNombre: 'Lamunin',
       deptoId: 323
   },
   {
       proNombre: 'Rambai',
       deptoId: 323
   },
   {
       proNombre: 'Bansko',
       deptoId: 324
   },
   {
       proNombre: 'Belitsa',
       deptoId: 324
   },
   {
       proNombre: 'Blagoevgrad',
       deptoId: 324
   },
   {
       proNombre: 'Garmen',
       deptoId: 324
   },
   {
       proNombre: 'Gotse Delchev',
       deptoId: 324
   },
   {
       proNombre: 'Hadzhidimovo',
       deptoId: 324
   },
   {
       proNombre: 'Kresna',
       deptoId: 324
   },
   {
       proNombre: 'Petrich',
       deptoId: 324
   },
   {
       proNombre: 'Razlog',
       deptoId: 324
   },
   {
       proNombre: 'Sandanski',
       deptoId: 324
   },
   {
       proNombre: 'Satovcha',
       deptoId: 324
   },
   {
       proNombre: 'Simitli',
       deptoId: 324
   },
   {
       proNombre: 'Strumyani',
       deptoId: 324
   },
   {
       proNombre: 'Yakoruda',
       deptoId: 324
   },
   {
       proNombre: 'Aytos',
       deptoId: 325
   },
   {
       proNombre: 'Burgas',
       deptoId: 325
   },
   {
       proNombre: 'Sredets',
       deptoId: 325
   },
   {
       proNombre: 'Kameno',
       deptoId: 325
   },
   {
       proNombre: 'Karnobat',
       deptoId: 325
   },
   {
       proNombre: 'Malko Tarnovo',
       deptoId: 325
   },
   {
       proNombre: 'Tsarevo',
       deptoId: 325
   },
   {
       proNombre: 'Nesebar',
       deptoId: 325
   },
   {
       proNombre: 'Pomorie',
       deptoId: 325
   },
   {
       proNombre: 'Ruen',
       deptoId: 325
   },
   {
       proNombre: 'Sozopol',
       deptoId: 325
   },
   {
       proNombre: 'Sungurlare',
       deptoId: 325
   },
   {
       proNombre: 'Primorsko',
       deptoId: 325
   },
   {
       proNombre: 'Balchik',
       deptoId: 326
   },
   {
       proNombre: 'Dobrich',
       deptoId: 326
   },
   {
       proNombre: 'General Toshevo',
       deptoId: 326
   },
   {
       proNombre: 'Kavarna',
       deptoId: 326
   },
   {
       proNombre: 'Krushari',
       deptoId: 326
   },
   {
       proNombre: 'Shabla',
       deptoId: 326
   },
   {
       proNombre: 'Tervel',
       deptoId: 326
   },
   {
       proNombre: 'Dryanovo',
       deptoId: 327
   },
   {
       proNombre: 'Gabrovo',
       deptoId: 327
   },
   {
       proNombre: 'Sevlievo',
       deptoId: 327
   },
   {
       proNombre: 'Tryavna',
       deptoId: 327
   },
   {
       proNombre: 'Dimitrovgrad',
       deptoId: 328
   },
   {
       proNombre: 'Harmanli',
       deptoId: 328
   },
   {
       proNombre: 'Haskovo',
       deptoId: 328
   },
   {
       proNombre: 'Ivaylovgrad',
       deptoId: 328
   },
   {
       proNombre: 'Lyubimets',
       deptoId: 328
   },
   {
       proNombre: 'Madzharovo',
       deptoId: 328
   },
   {
       proNombre: 'Mineralni Bani',
       deptoId: 328
   },
   {
       proNombre: 'Simeonovgrad',
       deptoId: 328
   },
   {
       proNombre: 'Stambolovo',
       deptoId: 328
   },
   {
       proNombre: 'Svilengrad',
       deptoId: 328
   },
   {
       proNombre: 'Topolovgrad',
       deptoId: 328
   },
   {
       proNombre: 'Ardino',
       deptoId: 329
   },
   {
       proNombre: 'Chernoochene',
       deptoId: 329
   },
   {
       proNombre: 'Dzhebel',
       deptoId: 329
   },
   {
       proNombre: 'Kardzhali',
       deptoId: 329
   },
   {
       proNombre: 'Kirkovo',
       deptoId: 329
   },
   {
       proNombre: 'Krumovgrad',
       deptoId: 329
   },
   {
       proNombre: 'Momchilgrad',
       deptoId: 329
   },
   {
       proNombre: 'Boboshevo',
       deptoId: 330
   },
   {
       proNombre: 'Bobov Dol',
       deptoId: 330
   },
   {
       proNombre: 'Dupnitsa',
       deptoId: 330
   },
   {
       proNombre: 'Kyustendil',
       deptoId: 330
   },
   {
       proNombre: 'Kocherinovo',
       deptoId: 330
   },
   {
       proNombre: 'Nevestino',
       deptoId: 330
   },
   {
       proNombre: 'Rila',
       deptoId: 330
   },
   {
       proNombre: 'Sapareva Banya',
       deptoId: 330
   },
   {
       proNombre: 'Treklyano',
       deptoId: 330
   },
   {
       proNombre: 'Apriltsi',
       deptoId: 331
   },
   {
       proNombre: 'Letnitsa',
       deptoId: 331
   },
   {
       proNombre: 'Lovech',
       deptoId: 331
   },
   {
       proNombre: 'Lukovit',
       deptoId: 331
   },
   {
       proNombre: 'Teteven',
       deptoId: 331
   },
   {
       proNombre: 'Troyan',
       deptoId: 331
   },
   {
       proNombre: 'Ugarchin',
       deptoId: 331
   },
   {
       proNombre: 'Yablanitsa',
       deptoId: 331
   },
   {
       proNombre: 'Berkovitsa',
       deptoId: 332
   },
   {
       proNombre: 'Boychinovtsi',
       deptoId: 332
   },
   {
       proNombre: 'Brusartsi',
       deptoId: 332
   },
   {
       proNombre: 'Chiprovtsi',
       deptoId: 332
   },
   {
       proNombre: 'Georgi Damyanovo',
       deptoId: 332
   },
   {
       proNombre: 'Lom',
       deptoId: 332
   },
   {
       proNombre: 'Medkovets',
       deptoId: 332
   },
   {
       proNombre: 'Montana',
       deptoId: 332
   },
   {
       proNombre: 'Varshets',
       deptoId: 332
   },
   {
       proNombre: 'Yakimovo',
       deptoId: 332
   },
   {
       proNombre: 'Batak',
       deptoId: 333
   },
   {
       proNombre: 'Belovo',
       deptoId: 333
   },
   {
       proNombre: 'Bratsigovo',
       deptoId: 333
   },
   {
       proNombre: 'Lesichovo',
       deptoId: 333
   },
   {
       proNombre: 'Panagyurishte',
       deptoId: 333
   },
   {
       proNombre: 'Pazardzhik',
       deptoId: 333
   },
   {
       proNombre: 'Peshtera',
       deptoId: 333
   },
   {
       proNombre: 'Rakitovo',
       deptoId: 333
   },
   {
       proNombre: 'Septemvri',
       deptoId: 333
   },
   {
       proNombre: 'Strelcha',
       deptoId: 333
   },
   {
       proNombre: 'Velingrad',
       deptoId: 333
   },
   {
       proNombre: 'Breznik',
       deptoId: 334
   },
   {
       proNombre: 'Kovachevtsi',
       deptoId: 334
   },
   {
       proNombre: 'Pernik',
       deptoId: 334
   },
   {
       proNombre: 'Radomir',
       deptoId: 334
   },
   {
       proNombre: 'Tran',
       deptoId: 334
   },
   {
       proNombre: 'Zemen',
       deptoId: 334
   },
   {
       proNombre: 'Belene',
       deptoId: 335
   },
   {
       proNombre: 'Cherven Bryag',
       deptoId: 335
   },
   {
       proNombre: 'Gulyantsi',
       deptoId: 335
   },
   {
       proNombre: 'Dolni Dabnik',
       deptoId: 335
   },
   {
       proNombre: 'Dolna Mitropoliya',
       deptoId: 335
   },
   {
       proNombre: 'Iskar',
       deptoId: 335
   },
   {
       proNombre: 'Knezha',
       deptoId: 335
   },
   {
       proNombre: 'Levski',
       deptoId: 335
   },
   {
       proNombre: 'Nikopol',
       deptoId: 335
   },
   {
       proNombre: 'Pleven',
       deptoId: 335
   },
   {
       proNombre: 'Pordim',
       deptoId: 335
   },
   {
       proNombre: 'Asenovgrad',
       deptoId: 336
   },
   {
       proNombre: 'Brezovo',
       deptoId: 336
   },
   {
       proNombre: 'Hisarya',
       deptoId: 336
   },
   {
       proNombre: 'Kaloyanovo',
       deptoId: 336
   },
   {
       proNombre: 'Karlovo',
       deptoId: 336
   },
   {
       proNombre: 'Krichim',
       deptoId: 336
   },
   {
       proNombre: 'Kuklen',
       deptoId: 336
   },
   {
       proNombre: 'Laki',
       deptoId: 336
   },
   {
       proNombre: 'Maritsa',
       deptoId: 336
   },
   {
       proNombre: 'Parvomay',
       deptoId: 336
   },
   {
       proNombre: 'Perushtitsa',
       deptoId: 336
   },
   {
       proNombre: 'Plovdiv',
       deptoId: 336
   },
   {
       proNombre: 'Rakovski',
       deptoId: 336
   },
   {
       proNombre: 'Rodopi',
       deptoId: 336
   },
   {
       proNombre: 'Sadovo',
       deptoId: 336
   },
   {
       proNombre: 'Saedinenie',
       deptoId: 336
   },
   {
       proNombre: 'Sopot',
       deptoId: 336
   },
   {
       proNombre: 'Stamboliyski',
       deptoId: 336
   },
   {
       proNombre: 'Isperih',
       deptoId: 337
   },
   {
       proNombre: 'Kubrat',
       deptoId: 337
   },
   {
       proNombre: 'Loznitsa',
       deptoId: 337
   },
   {
       proNombre: 'Razgrad',
       deptoId: 337
   },
   {
       proNombre: 'Samuil',
       deptoId: 337
   },
   {
       proNombre: 'Tsar Kaloyan',
       deptoId: 337
   },
   {
       proNombre: 'Zavet',
       deptoId: 337
   },
   {
       proNombre: 'Betovo',
       deptoId: 338
   },
   {
       proNombre: 'Borovo',
       deptoId: 338
   },
   {
       proNombre: 'Byala',
       deptoId: 338
   },
   {
       proNombre: 'Dve Mogili',
       deptoId: 338
   },
   {
       proNombre: 'Ivanovo',
       deptoId: 338
   },
   {
       proNombre: 'Ruse',
       deptoId: 338
   },
   {
       proNombre: 'Slivo Pole',
       deptoId: 338
   },
   {
       proNombre: 'Tsenovo',
       deptoId: 338
   },
   {
       proNombre: 'Hitrino',
       deptoId: 339
   },
   {
       proNombre: 'Kaolinovo',
       deptoId: 339
   },
   {
       proNombre: 'Kaspichan',
       deptoId: 339
   },
   {
       proNombre: 'Nikola Kozlevo',
       deptoId: 339
   },
   {
       proNombre: 'Novi Pazar',
       deptoId: 339
   },
   {
       proNombre: 'Shumen',
       deptoId: 339
   },
   {
       proNombre: 'Smyadovo',
       deptoId: 339
   },
   {
       proNombre: 'Varbitsa',
       deptoId: 339
   },
   {
       proNombre: 'Veliki Preslav',
       deptoId: 339
   },
   {
       proNombre: 'Venets',
       deptoId: 339
   },
   {
       proNombre: 'Alfatar',
       deptoId: 340
   },
   {
       proNombre: 'Dulovo',
       deptoId: 340
   },
   {
       proNombre: 'Glavinitsa',
       deptoId: 340
   },
   {
       proNombre: 'Kaynardzha',
       deptoId: 340
   },
   {
       proNombre: 'Silistra',
       deptoId: 340
   },
   {
       proNombre: 'Sitovo',
       deptoId: 340
   },
   {
       proNombre: 'Tutrakan',
       deptoId: 340
   },
   {
       proNombre: 'Kotel',
       deptoId: 341
   },
   {
       proNombre: 'Nova Zagora',
       deptoId: 341
   },
   {
       proNombre: 'Sliven',
       deptoId: 341
   },
   {
       proNombre: 'Tvarditsa',
       deptoId: 341
   },
   {
       proNombre: 'Banite',
       deptoId: 342
   },
   {
       proNombre: 'Borino',
       deptoId: 342
   },
   {
       proNombre: 'Chepelare',
       deptoId: 342
   },
   {
       proNombre: 'Devin',
       deptoId: 342
   },
   {
       proNombre: 'Dospat',
       deptoId: 342
   },
   {
       proNombre: 'Madan',
       deptoId: 342
   },
   {
       proNombre: 'Nedelino',
       deptoId: 342
   },
   {
       proNombre: 'Rudozem',
       deptoId: 342
   },
   {
       proNombre: 'Smolyan',
       deptoId: 342
   },
   {
       proNombre: 'Zlatograd',
       deptoId: 342
   },
   {
       proNombre: 'Anton',
       deptoId: 343
   },
   {
       proNombre: 'Botevgrad',
       deptoId: 343
   },
   {
       proNombre: 'Bozhurishte',
       deptoId: 343
   },
   {
       proNombre: 'Chavdar',
       deptoId: 343
   },
   {
       proNombre: 'Chelopech',
       deptoId: 343
   },
   {
       proNombre: 'Dolna Banya',
       deptoId: 343
   },
   {
       proNombre: 'Dragomán',
       deptoId: 343
   },
   {
       proNombre: 'Elin Pelin',
       deptoId: 343
   },
   {
       proNombre: 'Etropole',
       deptoId: 343
   },
   {
       proNombre: 'Godech',
       deptoId: 343
   },
   {
       proNombre: 'Gorna Malina',
       deptoId: 343
   },
   {
       proNombre: 'Ihtiman',
       deptoId: 343
   },
   {
       proNombre: 'Koprivshtitsa',
       deptoId: 343
   },
   {
       proNombre: 'Kostenets',
       deptoId: 343
   },
   {
       proNombre: 'Kostinbrod',
       deptoId: 343
   },
   {
       proNombre: 'Mirkovo',
       deptoId: 343
   },
   {
       proNombre: 'Pirdop',
       deptoId: 343
   },
   {
       proNombre: 'Pravets',
       deptoId: 343
   },
   {
       proNombre: 'Samokov',
       deptoId: 343
   },
   {
       proNombre: 'Slivnitsa',
       deptoId: 343
   },
   {
       proNombre: 'Svoge',
       deptoId: 343
   },
   {
       proNombre: 'Zlatitsa',
       deptoId: 343
   },
   {
       proNombre: 'Bankya',
       deptoId: 344
   },
   {
       proNombre: 'Izgrev',
       deptoId: 344
   },
   {
       proNombre: 'Ilinden',
       deptoId: 344
   },
   {
       proNombre: 'Iskar',
       deptoId: 344
   },
   {
       proNombre: 'Krasna polyana',
       deptoId: 344
   },
   {
       proNombre: 'Krasno selo',
       deptoId: 344
   },
   {
       proNombre: 'Kremikovtsi',
       deptoId: 344
   },
   {
       proNombre: 'Lozenets',
       deptoId: 344
   },
   {
       proNombre: 'Lyulin',
       deptoId: 344
   },
   {
       proNombre: 'Mladost',
       deptoId: 344
   },
   {
       proNombre: 'Nadezhda',
       deptoId: 344
   },
   {
       proNombre: 'Novi Iskar',
       deptoId: 344
   },
   {
       proNombre: 'Ovcha kupel',
       deptoId: 344
   },
   {
       proNombre: 'Oborishte',
       deptoId: 344
   },
   {
       proNombre: 'Pancharevo',
       deptoId: 344
   },
   {
       proNombre: 'Poduyane',
       deptoId: 344
   },
   {
       proNombre: 'Serdika',
       deptoId: 344
   },
   {
       proNombre: 'Slatina',
       deptoId: 344
   },
   {
       proNombre: 'Studentski grad',
       deptoId: 344
   },
   {
       proNombre: 'Sredets',
       deptoId: 344
   },
   {
       proNombre: 'Triaditsa',
       deptoId: 344
   },
   {
       proNombre: 'Vazrazhdane',
       deptoId: 344
   },
   {
       proNombre: 'Vitosha',
       deptoId: 344
   },
   {
       proNombre: 'Vrabnitsa',
       deptoId: 344
   },
   {
       proNombre: 'Bratya Daskalovi',
       deptoId: 345
   },
   {
       proNombre: 'Chirpan',
       deptoId: 345
   },
   {
       proNombre: 'Galabovo',
       deptoId: 345
   },
   {
       proNombre: 'Gurkovo',
       deptoId: 345
   },
   {
       proNombre: 'Kazanlak',
       deptoId: 345
   },
   {
       proNombre: 'Maglizh',
       deptoId: 345
   },
   {
       proNombre: 'Nikolaevo',
       deptoId: 345
   },
   {
       proNombre: 'Opan',
       deptoId: 345
   },
   {
       proNombre: 'Pavel Banya',
       deptoId: 345
   },
   {
       proNombre: 'Radnevo',
       deptoId: 345
   },
   {
       proNombre: 'Shipka',
       deptoId: 345
   },
   {
       proNombre: 'Stara Zagora',
       deptoId: 345
   },
   {
       proNombre: 'Antonovo',
       deptoId: 346
   },
   {
       proNombre: 'Omurtag',
       deptoId: 346
   },
   {
       proNombre: 'Opaka',
       deptoId: 346
   },
   {
       proNombre: 'Popovo',
       deptoId: 346
   },
   {
       proNombre: 'Tărgovište',
       deptoId: 346
   },
   {
       proNombre: 'Elena',
       deptoId: 347
   },
   {
       proNombre: 'Gorna Oryahovitsa',
       deptoId: 347
   },
   {
       proNombre: 'Lyaskovets',
       deptoId: 347
   },
   {
       proNombre: 'Pavlikeni',
       deptoId: 347
   },
   {
       proNombre: 'Polski Trambesh',
       deptoId: 347
   },
   {
       proNombre: 'Strazhitsa',
       deptoId: 347
   },
   {
       proNombre: 'Svishtov',
       deptoId: 347
   },
   {
       proNombre: 'Suhindol',
       deptoId: 347
   },
   {
       proNombre: 'Veliko Tarnovo',
       deptoId: 347
   },
   {
       proNombre: 'Zlataritsa',
       deptoId: 347
   },
   {
       proNombre: 'Aksakovo',
       deptoId: 348
   },
   {
       proNombre: 'Avren',
       deptoId: 348
   },
   {
       proNombre: 'Beloslav',
       deptoId: 348
   },
   {
       proNombre: 'Byala',
       deptoId: 348
   },
   {
       proNombre: 'Dalgopol',
       deptoId: 348
   },
   {
       proNombre: 'Devnya',
       deptoId: 348
   },
   {
       proNombre: 'Dolni Chiflik',
       deptoId: 348
   },
   {
       proNombre: 'Provadiya',
       deptoId: 348
   },
   {
       proNombre: 'Suvorovo',
       deptoId: 348
   },
   {
       proNombre: 'Valchidol',
       deptoId: 348
   },
   {
       proNombre: 'Varna',
       deptoId: 348
   },
   {
       proNombre: 'Vetrino',
       deptoId: 348
   },
   {
       proNombre: 'Belogradchik',
       deptoId: 349
   },
   {
       proNombre: 'Boynitsa',
       deptoId: 349
   },
   {
       proNombre: 'Bregovo',
       deptoId: 349
   },
   {
       proNombre: 'Chuprene',
       deptoId: 349
   },
   {
       proNombre: 'Dimovo',
       deptoId: 349
   },
   {
       proNombre: 'Gramada',
       deptoId: 349
   },
   {
       proNombre: 'Kula',
       deptoId: 349
   },
   {
       proNombre: 'Makresh',
       deptoId: 349
   },
   {
       proNombre: 'Novo Selo',
       deptoId: 349
   },
   {
       proNombre: 'Ruzhintsi',
       deptoId: 349
   },
   {
       proNombre: 'Grandtz',
       deptoId: 349
   },
   {
       proNombre: 'Borovan',
       deptoId: 350
   },
   {
       proNombre: 'Byala Slatina',
       deptoId: 350
   },
   {
       proNombre: 'Hayredin',
       deptoId: 350
   },
   {
       proNombre: 'Kozloduy',
       deptoId: 350
   },
   {
       proNombre: 'Krivodol',
       deptoId: 350
   },
   {
       proNombre: 'Mezdra',
       deptoId: 350
   },
   {
       proNombre: 'Miziya',
       deptoId: 350
   },
   {
       proNombre: 'Oryahovo',
       deptoId: 350
   },
   {
       proNombre: 'Roman',
       deptoId: 350
   },
   {
       proNombre: 'Vratsa',
       deptoId: 350
   },
   {
       proNombre: 'Bolyarovo',
       deptoId: 351
   },
   {
       proNombre: 'Elhovo',
       deptoId: 351
   },
   {
       proNombre: 'Straldzha',
       deptoId: 351
   },
   {
       proNombre: 'Tundzha',
       deptoId: 351
   },
   {
       proNombre: 'Yambol',
       deptoId: 351
   },
   {
       proNombre: 'Balé',
       deptoId: 352
   },
   {
       proNombre: 'Banwa',
       deptoId: 352
   },
   {
       proNombre: 'Kossi',
       deptoId: 352
   },
   {
       proNombre: 'Mouhoun',
       deptoId: 352
   },
   {
       proNombre: 'Nayala',
       deptoId: 352
   },
   {
       proNombre: 'Sourou',
       deptoId: 352
   },
   {
       proNombre: 'Comoé',
       deptoId: 353
   },
   {
       proNombre: 'Léraba',
       deptoId: 353
   },
   {
       proNombre: 'Kadiogo',
       deptoId: 354
   },
   {
       proNombre: 'Boulgou',
       deptoId: 355
   },
   {
       proNombre: 'Koulpélogo ',
       deptoId: 355
   },
   {
       proNombre: 'Kouritenga',
       deptoId: 355
   },
   {
       proNombre: 'Bam',
       deptoId: 356
   },
   {
       proNombre: 'Namentenga',
       deptoId: 356
   },
   {
       proNombre: 'Sanmatenga',
       deptoId: 356
   },
   {
       proNombre: 'Boulkiemdé',
       deptoId: 357
   },
   {
       proNombre: 'Sanguié',
       deptoId: 357
   },
   {
       proNombre: 'Sissili ',
       deptoId: 357
   },
   {
       proNombre: 'Ziro',
       deptoId: 357
   },
   {
       proNombre: 'Bazéga',
       deptoId: 358
   },
   {
       proNombre: 'Nahouri ',
       deptoId: 358
   },
   {
       proNombre: 'Zoundwéogo',
       deptoId: 358
   },
   {
       proNombre: 'Gnagna',
       deptoId: 359
   },
   {
       proNombre: 'Gourma',
       deptoId: 359
   },
   {
       proNombre: 'Komondjari',
       deptoId: 359
   },
   {
       proNombre: 'Kompienga',
       deptoId: 359
   },
   {
       proNombre: 'Tapoa',
       deptoId: 359
   },
   {
       proNombre: 'Houet',
       deptoId: 360
   },
   {
       proNombre: 'Kénédougou',
       deptoId: 360
   },
   {
       proNombre: 'Tuy',
       deptoId: 360
   },
   {
       proNombre: 'Loroum',
       deptoId: 361
   },
   {
       proNombre: 'Passoré',
       deptoId: 361
   },
   {
       proNombre: 'Yatenga ',
       deptoId: 361
   },
   {
       proNombre: 'Zondoma',
       deptoId: 361
   },
   {
       proNombre: 'Ganzourgou',
       deptoId: 362
   },
   {
       proNombre: 'Kourwéogo',
       deptoId: 362
   },
   {
       proNombre: 'Oubritenga',
       deptoId: 362
   },
   {
       proNombre: 'Oudalan',
       deptoId: 363
   },
   {
       proNombre: 'Séno',
       deptoId: 363
   },
   {
       proNombre: 'Soum',
       deptoId: 363
   },
   {
       proNombre: 'Yagha',
       deptoId: 363
   },
   {
       proNombre: 'Bougouriba',
       deptoId: 364
   },
   {
       proNombre: 'Ioba',
       deptoId: 364
   },
   {
       proNombre: 'Noumbiel',
       deptoId: 364
   },
   {
       proNombre: 'Poni',
       deptoId: 364
   },
   {
       proNombre: 'Bubanza',
       deptoId: 365
   },
   {
       proNombre: 'Buyumbura',
       deptoId: 366
   },
   {
       proNombre: 'Buyumbura',
       deptoId: 367
   },
   {
       proNombre: 'Bururi',
       deptoId: 368
   },
   {
       proNombre: 'Cankuzo',
       deptoId: 369
   },
   {
       proNombre: 'Cibitoke',
       deptoId: 370
   },
   {
       proNombre: 'Gitega',
       deptoId: 371
   },
   {
       proNombre: 'Karuzi',
       deptoId: 372
   },
   {
       proNombre: 'Kayanza',
       deptoId: 373
   },
   {
       proNombre: 'Kirundo',
       deptoId: 374
   },
   {
       proNombre: 'Makamba',
       deptoId: 375
   },
   {
       proNombre: 'Muramvya',
       deptoId: 376
   },
   {
       proNombre: 'Muyinga',
       deptoId: 377
   },
   {
       proNombre: 'Mwaro',
       deptoId: 378
   },
   {
       proNombre: 'Ngozi',
       deptoId: 379
   },
   {
       proNombre: 'Rutana',
       deptoId: 380
   },
   {
       proNombre: 'Ruyigi',
       deptoId: 381
   },
   {
       proNombre: 'Distrito de Dagana',
       deptoId: 382
   },
   {
       proNombre: 'Distrito de Gasa',
       deptoId: 382
   },
   {
       proNombre: 'Distrito de Punakha',
       deptoId: 382
   },
   {
       proNombre: 'Distrito de Tsirang',
       deptoId: 382
   },
   {
       proNombre: 'Distrito de Wangdue Phodrang',
       deptoId: 382
   },
   {
       proNombre: 'Distrito de Lhuntse',
       deptoId: 383
   },
   {
       proNombre: 'Distrito de Mongar',
       deptoId: 383
   },
   {
       proNombre: 'Distrito de Pemagatshel ',
       deptoId: 383
   },
   {
       proNombre: 'Distrito de Samdrup Jongkhar',
       deptoId: 383
   },
   {
       proNombre: 'Distrito de Trashigang',
       deptoId: 383
   },
   {
       proNombre: 'Distrito de Trashiyangste',
       deptoId: 383
   },
   {
       proNombre: 'Distrito de Chukha',
       deptoId: 384
   },
   {
       proNombre: 'Distrito de Haa',
       deptoId: 384
   },
   {
       proNombre: 'Distrito de Paro',
       deptoId: 384
   },
   {
       proNombre: 'Distrito de Samtse',
       deptoId: 384
   },
   {
       proNombre: 'Distrito de Thimphu',
       deptoId: 384
   },
   {
       proNombre: 'Distrito de Bumthang',
       deptoId: 385
   },
   {
       proNombre: 'Distrito de Sarpang',
       deptoId: 385
   },
   {
       proNombre: 'Distrito de Trongsa',
       deptoId: 385
   },
   {
       proNombre: 'Distrito de Zhemgang',
       deptoId: 385
   },
   {
       proNombre: 'Boavista',
       deptoId: 386
   },
   {
       proNombre: 'Cachaço',
       deptoId: 387
   },
   {
       proNombre: 'Campo Baixo',
       deptoId: 387
   },
   {
       proNombre: 'Cova Joana',
       deptoId: 387
   },
   {
       proNombre: 'Cova Rodela',
       deptoId: 387
   },
   {
       proNombre: 'Fajã de Agua',
       deptoId: 387
   },
   {
       proNombre: 'Furna',
       deptoId: 387
   },
   {
       proNombre: 'Lime Doce',
       deptoId: 387
   },
   {
       proNombre: 'Mato Grande',
       deptoId: 387
   },
   {
       proNombre: 'Nova Sintra do Monte',
       deptoId: 387
   },
   {
       proNombre: 'Santa Bárbara',
       deptoId: 387
   },
   {
       proNombre: 'Tantum',
       deptoId: 387
   },
   {
       proNombre: 'Vila Nova Sintra',
       deptoId: 387
   },
   {
       proNombre: 'Mosteiros',
       deptoId: 388
   },
   {
       proNombre: 'Santa Catarina do Fogo',
       deptoId: 388
   },
   {
       proNombre: 'São Filipe',
       deptoId: 388
   },
   {
       proNombre: 'Alcatraz',
       deptoId: 389
   },
   {
       proNombre: 'Barreiro',
       deptoId: 389
   },
   {
       proNombre: 'Calheta',
       deptoId: 389
   },
   {
       proNombre: 'Figueira Seco',
       deptoId: 389
   },
   {
       proNombre: 'João',
       deptoId: 389
   },
   {
       proNombre: 'João',
       deptoId: 389
   },
   {
       proNombre: 'Monte Branco',
       deptoId: 389
   },
   {
       proNombre: 'Morro',
       deptoId: 389
   },
   {
       proNombre: 'Morrinho',
       deptoId: 389
   },
   {
       proNombre: 'Pedro Vaz',
       deptoId: 389
   },
   {
       proNombre: 'Pedro Vaz',
       deptoId: 389
   },
   {
       proNombre: 'Pilão Cão',
       deptoId: 389
   },
   {
       proNombre: 'Porto Cais',
       deptoId: 389
   },
   {
       proNombre: 'Praia Gonçalo',
       deptoId: 389
   },
   {
       proNombre: 'Ribeira Dom João',
       deptoId: 389
   },
   {
       proNombre: 'Santo Antônio',
       deptoId: 389
   },
   {
       proNombre: 'Vila do Maio/Porto Inglês',
       deptoId: 389
   },
   {
       proNombre: 'Espargos',
       deptoId: 390
   },
   {
       proNombre: 'Palmeira',
       deptoId: 390
   },
   {
       proNombre: 'Murdeira',
       deptoId: 390
   },
   {
       proNombre: 'Santa Luzia',
       deptoId: 391
   },
   {
       proNombre: 'Praia',
       deptoId: 392
   },
   {
       proNombre: 'Ribeira Grande de Santiago',
       deptoId: 392
   },
   {
       proNombre: 'Santa Catarina',
       deptoId: 392
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 392
   },
   {
       proNombre: 'São Lourenço dos Órgãos',
       deptoId: 392
   },
   {
       proNombre: 'São Miguel',
       deptoId: 392
   },
   {
       proNombre: 'São Salvador do Mundo',
       deptoId: 392
   },
   {
       proNombre: 'Tarrafal',
       deptoId: 392
   },
   {
       proNombre: 'Municipio de Paul',
       deptoId: 393
   },
   {
       proNombre: 'Municipio de Porto Novo',
       deptoId: 393
   },
   {
       proNombre: 'Municipio de Ribeira Grande',
       deptoId: 393
   },
   {
       proNombre: 'Ribeira Brava',
       deptoId: 394
   },
   {
       proNombre: 'Tarrafal de São Nicolau',
       deptoId: 394
   },
   {
       proNombre: 'El Concejo',
       deptoId: 395
   },
   {
       proNombre: 'Malai',
       deptoId: 396
   },
   {
       proNombre: 'Mongkol Borei',
       deptoId: 396
   },
   {
       proNombre: 'Ou Chrov',
       deptoId: 396
   },
   {
       proNombre: 'Phnum Srok',
       deptoId: 396
   },
   {
       proNombre: 'Preah Netr Preah',
       deptoId: 396
   },
   {
       proNombre: 'Serei Saophoan',
       deptoId: 396
   },
   {
       proNombre: 'Svay Chek',
       deptoId: 396
   },
   {
       proNombre: 'Thma Puok',
       deptoId: 396
   },
   {
       proNombre: 'Banan',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de Thma Koul',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de Battambang',
       deptoId: 397
   },
   {
       proNombre: 'Bavel',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de Ek Phnom',
       deptoId: 397
   },
   {
       proNombre: 'Moung Ruessi',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de otanak Mondol',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de Sangkae',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de Samlout',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de Sampov Loun',
       deptoId: 397
   },
   {
       proNombre: 'Phnum Proek',
       deptoId: 397
   },
   {
       proNombre: 'Kamrieng',
       deptoId: 397
   },
   {
       proNombre: 'Koas Krala',
       deptoId: 397
   },
   {
       proNombre: 'Distrito de RukhaKiri',
       deptoId: 397
   },
   {
       proNombre: 'Batheay',
       deptoId: 398
   },
   {
       proNombre: 'Chamkar Leu',
       deptoId: 398
   },
   {
       proNombre: 'Cheung Prey',
       deptoId: 398
   },
   {
       proNombre: 'Dambae',
       deptoId: 398
   },
   {
       proNombre: 'Kampong Cham',
       deptoId: 398
   },
   {
       proNombre: 'Kampong Siem',
       deptoId: 398
   },
   {
       proNombre: 'Kang Meas',
       deptoId: 398
   },
   {
       proNombre: 'Koh Sotin',
       deptoId: 398
   },
   {
       proNombre: 'Krouch Chhmar',
       deptoId: 398
   },
   {
       proNombre: 'Memot',
       deptoId: 398
   },
   {
       proNombre: 'Ou Reang Ov',
       deptoId: 398
   },
   {
       proNombre: 'Ponhea Kraek',
       deptoId: 398
   },
   {
       proNombre: 'Prey Chhor',
       deptoId: 398
   },
   {
       proNombre: 'Srey Santhor',
       deptoId: 398
   },
   {
       proNombre: 'Stueng Trang',
       deptoId: 398
   },
   {
       proNombre: 'Tbuong Kmoum',
       deptoId: 398
   },
   {
       proNombre: 'Baribour',
       deptoId: 399
   },
   {
       proNombre: 'Chol Kiri',
       deptoId: 399
   },
   {
       proNombre: 'Kampong Chhnang',
       deptoId: 399
   },
   {
       proNombre: 'Kampong Leaeng',
       deptoId: 399
   },
   {
       proNombre: 'Kampong Tralach',
       deptoId: 399
   },
   {
       proNombre: "Rolea B'ier",
       deptoId: 399
   },
   {
       proNombre: 'Sameakki Mean Chey',
       deptoId: 399
   },
   {
       proNombre: 'Tuek Phos',
       deptoId: 399
   },
   {
       proNombre: 'Basedth',
       deptoId: 400
   },
   {
       proNombre: 'Chbar Mon',
       deptoId: 400
   },
   {
       proNombre: 'Kong Pisei',
       deptoId: 400
   },
   {
       proNombre: 'Aoral',
       deptoId: 400
   },
   {
       proNombre: 'Odongk',
       deptoId: 400
   },
   {
       proNombre: 'Phnom Sruoch',
       deptoId: 400
   },
   {
       proNombre: 'Samraong Tong',
       deptoId: 400
   },
   {
       proNombre: 'Thpong',
       deptoId: 400
   },
   {
       proNombre: 'Baray',
       deptoId: 401
   },
   {
       proNombre: 'Kampong Svay',
       deptoId: 401
   },
   {
       proNombre: 'Stueng Saen',
       deptoId: 401
   },
   {
       proNombre: 'Prasat Balangk',
       deptoId: 401
   },
   {
       proNombre: 'Prasat Sambour',
       deptoId: 401
   },
   {
       proNombre: 'Sandaan',
       deptoId: 401
   },
   {
       proNombre: 'Santuk',
       deptoId: 401
   },
   {
       proNombre: 'Stoung',
       deptoId: 401
   },
   {
       proNombre: 'Angkor Chey',
       deptoId: 402
   },
   {
       proNombre: 'Banteay Meas',
       deptoId: 402
   },
   {
       proNombre: 'Chhuk',
       deptoId: 402
   },
   {
       proNombre: 'Chum Kiri',
       deptoId: 402
   },
   {
       proNombre: 'Dang Tong',
       deptoId: 402
   },
   {
       proNombre: 'Kampong Trach',
       deptoId: 402
   },
   {
       proNombre: 'Kampot',
       deptoId: 402
   },
   {
       proNombre: 'Kampong Bay',
       deptoId: 402
   },
   {
       proNombre: 'Kandal Stueng',
       deptoId: 403
   },
   {
       proNombre: 'Kien Svay',
       deptoId: 403
   },
   {
       proNombre: 'Khsach Kandal',
       deptoId: 403
   },
   {
       proNombre: 'Koh Thum',
       deptoId: 403
   },
   {
       proNombre: 'Leuk Daek',
       deptoId: 403
   },
   {
       proNombre: 'Lvea Aem',
       deptoId: 403
   },
   {
       proNombre: 'Mukh Kamphool',
       deptoId: 403
   },
   {
       proNombre: 'Angk Snuol',
       deptoId: 403
   },
   {
       proNombre: 'Ponhea Leu',
       deptoId: 403
   },
   {
       proNombre: "S'ang",
       deptoId: 403
   },
   {
       proNombre: 'Ta Khmau',
       deptoId: 403
   },
   {
       proNombre: 'Botum Sakor',
       deptoId: 404
   },
   {
       proNombre: 'Kiri Sakor',
       deptoId: 404
   },
   {
       proNombre: 'Koh Kong',
       deptoId: 404
   },
   {
       proNombre: 'Smach Mean Chey',
       deptoId: 404
   },
   {
       proNombre: 'Mondol Seima',
       deptoId: 404
   },
   {
       proNombre: 'Srae Ambel',
       deptoId: 404
   },
   {
       proNombre: 'Thma Bang',
       deptoId: 404
   },
   {
       proNombre: 'Kampong Seila',
       deptoId: 404
   },
   {
       proNombre: 'Chhloung',
       deptoId: 405
   },
   {
       proNombre: 'Kracheh',
       deptoId: 405
   },
   {
       proNombre: 'Preaek Prasab',
       deptoId: 405
   },
   {
       proNombre: 'Sambour',
       deptoId: 405
   },
   {
       proNombre: 'Snuol',
       deptoId: 405
   },
   {
       proNombre: 'Kaev Seima',
       deptoId: 406
   },
   {
       proNombre: 'Kaoh Nheaek',
       deptoId: 406
   },
   {
       proNombre: 'Ou Reang',
       deptoId: 406
   },
   {
       proNombre: 'Pechr Chenda',
       deptoId: 406
   },
   {
       proNombre: 'Saen Monourom',
       deptoId: 406
   },
   {
       proNombre: 'Anlong Veaeng',
       deptoId: 407
   },
   {
       proNombre: 'Banteay Ampil',
       deptoId: 407
   },
   {
       proNombre: 'Chong Kal',
       deptoId: 407
   },
   {
       proNombre: 'Samraong',
       deptoId: 407
   },
   {
       proNombre: 'Trapeang Prasat',
       deptoId: 407
   },
   {
       proNombre: 'Chey Saen',
       deptoId: 408
   },
   {
       proNombre: 'Chhaeb',
       deptoId: 408
   },
   {
       proNombre: 'Choam Khsant',
       deptoId: 408
   },
   {
       proNombre: 'Kuleaen',
       deptoId: 408
   },
   {
       proNombre: 'Rovieng',
       deptoId: 408
   },
   {
       proNombre: 'Sangkom Thmei',
       deptoId: 408
   },
   {
       proNombre: 'Tbaeng Mean Chey',
       deptoId: 408
   },
   {
       proNombre: 'Bakan',
       deptoId: 409
   },
   {
       proNombre: 'Kandieng',
       deptoId: 409
   },
   {
       proNombre: 'Krakor',
       deptoId: 409
   },
   {
       proNombre: 'Phnum Kravanh',
       deptoId: 409
   },
   {
       proNombre: 'Sampov Meas',
       deptoId: 409
   },
   {
       proNombre: 'Veal Veaeng',
       deptoId: 409
   },
   {
       proNombre: 'Ba Phnum',
       deptoId: 410
   },
   {
       proNombre: 'Kamchay Mear',
       deptoId: 410
   },
   {
       proNombre: 'Kampong Trabaek',
       deptoId: 410
   },
   {
       proNombre: 'Kanhchriech',
       deptoId: 410
   },
   {
       proNombre: 'Me Sang',
       deptoId: 410
   },
   {
       proNombre: 'Peam Chor',
       deptoId: 410
   },
   {
       proNombre: 'Peam Ro',
       deptoId: 410
   },
   {
       proNombre: 'Pea Reang',
       deptoId: 410
   },
   {
       proNombre: 'Preah Sdach',
       deptoId: 410
   },
   {
       proNombre: 'Prey Veaeng',
       deptoId: 410
   },
   {
       proNombre: 'Kampong Leav',
       deptoId: 410
   },
   {
       proNombre: 'Sithor Kandal',
       deptoId: 410
   },
   {
       proNombre: 'Andoung Meas',
       deptoId: 411
   },
   {
       proNombre: 'Banlung',
       deptoId: 411
   },
   {
       proNombre: 'Bar Kaev',
       deptoId: 411
   },
   {
       proNombre: 'Koun Mom',
       deptoId: 411
   },
   {
       proNombre: 'Lumphat',
       deptoId: 411
   },
   {
       proNombre: 'Ou Chum',
       deptoId: 411
   },
   {
       proNombre: 'Ou Ya Dav',
       deptoId: 411
   },
   {
       proNombre: 'Ta Veaeng',
       deptoId: 411
   },
   {
       proNombre: 'Veun Sai',
       deptoId: 411
   },
   {
       proNombre: 'Angkor Chum',
       deptoId: 412
   },
   {
       proNombre: 'Angkor Thom',
       deptoId: 412
   },
   {
       proNombre: 'Banteay Srei',
       deptoId: 412
   },
   {
       proNombre: 'Chi Kraeng',
       deptoId: 412
   },
   {
       proNombre: 'Kralanh',
       deptoId: 412
   },
   {
       proNombre: 'Puok',
       deptoId: 412
   },
   {
       proNombre: 'Prasat Bakong',
       deptoId: 412
   },
   {
       proNombre: 'Siem Reap',
       deptoId: 412
   },
   {
       proNombre: 'Siem Reap',
       deptoId: 412
   },
   {
       proNombre: 'Srei Snam',
       deptoId: 412
   },
   {
       proNombre: 'Svay Leu',
       deptoId: 412
   },
   {
       proNombre: 'Varin',
       deptoId: 412
   },
   {
       proNombre: 'Sesan',
       deptoId: 413
   },
   {
       proNombre: 'Siem Bouk',
       deptoId: 413
   },
   {
       proNombre: 'Siem Pang',
       deptoId: 413
   },
   {
       proNombre: 'Stung Treng',
       deptoId: 413
   },
   {
       proNombre: 'Thala Barivat',
       deptoId: 413
   },
   {
       proNombre: 'Chantrea',
       deptoId: 414
   },
   {
       proNombre: 'Kampong Rou',
       deptoId: 414
   },
   {
       proNombre: 'Rumduol',
       deptoId: 414
   },
   {
       proNombre: 'Romeas Haek',
       deptoId: 414
   },
   {
       proNombre: 'Svay Chrum',
       deptoId: 414
   },
   {
       proNombre: 'Svay Rieng',
       deptoId: 414
   },
   {
       proNombre: 'Svay Teab',
       deptoId: 414
   },
   {
       proNombre: 'Angkor Borei',
       deptoId: 415
   },
   {
       proNombre: 'Bati',
       deptoId: 415
   },
   {
       proNombre: 'Bourei Cholsar',
       deptoId: 415
   },
   {
       proNombre: 'Kiri Vong',
       deptoId: 415
   },
   {
       proNombre: 'Kaoh Andaet',
       deptoId: 415
   },
   {
       proNombre: 'Prey Kabbas',
       deptoId: 415
   },
   {
       proNombre: 'Samraong',
       deptoId: 415
   },
   {
       proNombre: 'Doun Kaev',
       deptoId: 415
   },
   {
       proNombre: 'Tram Kak',
       deptoId: 415
   },
   {
       proNombre: 'Treang',
       deptoId: 415
   },
   {
       proNombre: "Damnak Chang'aeur",
       deptoId: 416
   },
   {
       proNombre: 'Kep',
       deptoId: 416
   },
   {
       proNombre: 'Pailin',
       deptoId: 417
   },
   {
       proNombre: 'Sala Krau',
       deptoId: 417
   },
   {
       proNombre: 'Chamkarmon',
       deptoId: 418
   },
   {
       proNombre: 'Daun Penh',
       deptoId: 418
   },
   {
       proNombre: 'Prampir Makara ',
       deptoId: 418
   },
   {
       proNombre: 'Toul Kork ',
       deptoId: 418
   },
   {
       proNombre: 'Dangkor',
       deptoId: 418
   },
   {
       proNombre: 'Meanchey',
       deptoId: 418
   },
   {
       proNombre: 'Russey Keo',
       deptoId: 418
   },
   {
       proNombre: 'Sen Sok',
       deptoId: 418
   },
   {
       proNombre: 'Mittakpheap',
       deptoId: 419
   },
   {
       proNombre: 'Prey Nob',
       deptoId: 419
   },
   {
       proNombre: 'Stueng Hav',
       deptoId: 419
   },
   {
       proNombre: 'Kampong Sela',
       deptoId: 419
   },
   {
       proNombre: 'Djerem',
       deptoId: 420
   },
   {
       proNombre: 'Faro-Deo',
       deptoId: 420
   },
   {
       proNombre: 'Mayo-Banyo',
       deptoId: 420
   },
   {
       proNombre: 'Mbéré',
       deptoId: 420
   },
   {
       proNombre: 'Vina',
       deptoId: 420
   },
   {
       proNombre: 'Haute-Sanaga',
       deptoId: 421
   },
   {
       proNombre: 'Lekié',
       deptoId: 421
   },
   {
       proNombre: 'Mfoundi',
       deptoId: 421
   },
   {
       proNombre: 'Mbam-et-Inoubou',
       deptoId: 421
   },
   {
       proNombre: 'Mbam-et-Kim',
       deptoId: 421
   },
   {
       proNombre: 'Mefou-et-Afamba',
       deptoId: 421
   },
   {
       proNombre: 'Mefou-et-Akono',
       deptoId: 421
   },
   {
       proNombre: 'Nyong-et-Kéllé',
       deptoId: 421
   },
   {
       proNombre: 'Nyong-et-Mfoumou',
       deptoId: 421
   },
   {
       proNombre: 'Nyong-et-Soo',
       deptoId: 421
   },
   {
       proNombre: 'Boumba-et-Ngoko',
       deptoId: 422
   },
   {
       proNombre: 'Haut-Nyong',
       deptoId: 422
   },
   {
       proNombre: 'Kadey',
       deptoId: 422
   },
   {
       proNombre: 'Lom-et-Djérem',
       deptoId: 422
   },
   {
       proNombre: 'Diamaré',
       deptoId: 423
   },
   {
       proNombre: 'Mayo-Kani',
       deptoId: 423
   },
   {
       proNombre: 'Logone-et-Chari',
       deptoId: 423
   },
   {
       proNombre: 'Mayo-Danay',
       deptoId: 423
   },
   {
       proNombre: 'Mayo-Sava',
       deptoId: 423
   },
   {
       proNombre: 'Mayo-Tsanaga',
       deptoId: 423
   },
   {
       proNombre: 'Moungo',
       deptoId: 424
   },
   {
       proNombre: 'Nkam',
       deptoId: 424
   },
   {
       proNombre: 'Sanaga-Maritime',
       deptoId: 424
   },
   {
       proNombre: 'Wouri',
       deptoId: 424
   },
   {
       proNombre: 'Bénoué',
       deptoId: 425
   },
   {
       proNombre: 'Faro',
       deptoId: 425
   },
   {
       proNombre: 'Mayo-Louti',
       deptoId: 425
   },
   {
       proNombre: 'Mayo-Rey',
       deptoId: 425
   },
   {
       proNombre: 'Boyo',
       deptoId: 426
   },
   {
       proNombre: 'Bui',
       deptoId: 426
   },
   {
       proNombre: 'Donga-Mantung',
       deptoId: 426
   },
   {
       proNombre: 'Menchum',
       deptoId: 426
   },
   {
       proNombre: 'Mezam',
       deptoId: 426
   },
   {
       proNombre: 'Momo',
       deptoId: 426
   },
   {
       proNombre: 'Ngo-ketunjia',
       deptoId: 426
   },
   {
       proNombre: 'Dja-Et-Lobo',
       deptoId: 427
   },
   {
       proNombre: 'Mvila',
       deptoId: 427
   },
   {
       proNombre: 'Océan',
       deptoId: 427
   },
   {
       proNombre: 'Vallée-du-Ntem',
       deptoId: 427
   },
   {
       proNombre: 'Fako',
       deptoId: 428
   },
   {
       proNombre: 'Kupe-Manenguba',
       deptoId: 428
   },
   {
       proNombre: 'Lebialem',
       deptoId: 428
   },
   {
       proNombre: 'Manyu',
       deptoId: 428
   },
   {
       proNombre: 'Meme',
       deptoId: 428
   },
   {
       proNombre: 'Ndian',
       deptoId: 428
   },
   {
       proNombre: 'Bamboutos',
       deptoId: 429
   },
   {
       proNombre: 'Haut-Nkam',
       deptoId: 429
   },
   {
       proNombre: 'Hauts-Plateaux',
       deptoId: 429
   },
   {
       proNombre: 'Koung-Khi',
       deptoId: 429
   },
   {
       proNombre: 'Menoua',
       deptoId: 429
   },
   {
       proNombre: 'Mifi',
       deptoId: 429
   },
   {
       proNombre: 'Ndé',
       deptoId: 429
   },
   {
       proNombre: 'Noun',
       deptoId: 429
   },
   {
       proNombre: 'Airdrie',
       deptoId: 430
   },
   {
       proNombre: 'Beaumont',
       deptoId: 430
   },
   {
       proNombre: 'Brooks',
       deptoId: 430
   },
   {
       proNombre: 'Calgary',
       deptoId: 430
   },
   {
       proNombre: 'Camrose',
       deptoId: 430
   },
   {
       proNombre: 'Canmore',
       deptoId: 430
   },
   {
       proNombre: 'Chestermere',
       deptoId: 430
   },
   {
       proNombre: 'Cochrane',
       deptoId: 430
   },
   {
       proNombre: 'Cold Lake',
       deptoId: 430
   },
   {
       proNombre: 'Edmonton',
       deptoId: 430
   },
   {
       proNombre: 'Fort Saskatchewan',
       deptoId: 430
   },
   {
       proNombre: 'Grande Prairie',
       deptoId: 430
   },
   {
       proNombre: 'High River',
       deptoId: 430
   },
   {
       proNombre: 'Lacombe',
       deptoId: 430
   },
   {
       proNombre: 'Leduc',
       deptoId: 430
   },
   {
       proNombre: 'Lethbridge',
       deptoId: 430
   },
   {
       proNombre: 'Lloydminster',
       deptoId: 430
   },
   {
       proNombre: 'Medicine Hat',
       deptoId: 430
   },
   {
       proNombre: 'Okotoks',
       deptoId: 430
   },
   {
       proNombre: 'Red Deer',
       deptoId: 430
   },
   {
       proNombre: 'Saint Albert',
       deptoId: 430
   },
   {
       proNombre: 'Spruce Grove',
       deptoId: 430
   },
   {
       proNombre: 'Stony Plain',
       deptoId: 430
   },
   {
       proNombre: 'Strathmore',
       deptoId: 430
   },
   {
       proNombre: 'Sylvan Lake',
       deptoId: 430
   },
   {
       proNombre: 'Wetaskiwin',
       deptoId: 430
   },
   {
       proNombre: 'Alberni-Clayoquot',
       deptoId: 431
   },
   {
       proNombre: 'Bulkley-Nechako',
       deptoId: 431
   },
   {
       proNombre: 'Capital',
       deptoId: 431
   },
   {
       proNombre: 'Cariboo',
       deptoId: 431
   },
   {
       proNombre: 'Central Coast',
       deptoId: 431
   },
   {
       proNombre: 'Central Kootenay',
       deptoId: 431
   },
   {
       proNombre: 'Central Okanagan',
       deptoId: 431
   },
   {
       proNombre: 'Columbia-Shuswap',
       deptoId: 431
   },
   {
       proNombre: 'Comox Valley',
       deptoId: 431
   },
   {
       proNombre: 'Cowichan Valley',
       deptoId: 431
   },
   {
       proNombre: 'East Kootenay',
       deptoId: 431
   },
   {
       proNombre: 'Fraser Valley',
       deptoId: 431
   },
   {
       proNombre: 'Fraser-Fort George',
       deptoId: 431
   },
   {
       proNombre: 'Gran/Metro Vancouver',
       deptoId: 431
   },
   {
       proNombre: 'Kitimat-Stikine',
       deptoId: 431
   },
   {
       proNombre: 'Kootenay Boundary',
       deptoId: 431
   },
   {
       proNombre: 'Mount Waddington',
       deptoId: 431
   },
   {
       proNombre: 'Nanaimo',
       deptoId: 431
   },
   {
       proNombre: 'North Okanagan',
       deptoId: 431
   },
   {
       proNombre: 'Northern Rockies',
       deptoId: 431
   },
   {
       proNombre: 'Okanagan-Similkameen',
       deptoId: 431
   },
   {
       proNombre: 'Peace River',
       deptoId: 431
   },
   {
       proNombre: 'Powell River',
       deptoId: 431
   },
   {
       proNombre: 'Skeena-Reina Carlota',
       deptoId: 431
   },
   {
       proNombre: 'Squamish-Lillooet',
       deptoId: 431
   },
   {
       proNombre: 'Región de Stikine',
       deptoId: 431
   },
   {
       proNombre: 'Strathcona',
       deptoId: 431
   },
   {
       proNombre: 'Sunshine Coast',
       deptoId: 431
   },
   {
       proNombre: 'Thompson-Nicola',
       deptoId: 431
   },
   {
       proNombre: 'Condado de Kings',
       deptoId: 432
   },
   {
       proNombre: 'Condado de Prince',
       deptoId: 432
   },
   {
       proNombre: 'Condado de Queens',
       deptoId: 432
   },
   {
       proNombre: 'Brandon',
       deptoId: 433
   },
   {
       proNombre: 'Dauphin',
       deptoId: 433
   },
   {
       proNombre: 'Morden',
       deptoId: 433
   },
   {
       proNombre: 'Portage la Prairie',
       deptoId: 433
   },
   {
       proNombre: 'Selkirk',
       deptoId: 433
   },
   {
       proNombre: 'Steinbach',
       deptoId: 433
   },
   {
       proNombre: 'Thompson',
       deptoId: 433
   },
   {
       proNombre: 'Winkler',
       deptoId: 433
   },
   {
       proNombre: 'Winnipeg',
       deptoId: 433
   },
   {
       proNombre: 'Condado de Annapolis',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Cabo Bretón',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Colchester',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Cumberland',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Halifax',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Hants',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Kings',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Lunenburg',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Pictou',
       deptoId: 434
   },
   {
       proNombre: 'Condado de Yarmouth',
       deptoId: 434
   },
   {
       proNombre: 'Albert',
       deptoId: 435
   },
   {
       proNombre: 'Carleton',
       deptoId: 435
   },
   {
       proNombre: 'Charlotte',
       deptoId: 435
   },
   {
       proNombre: 'Gloucester',
       deptoId: 435
   },
   {
       proNombre: 'Kent',
       deptoId: 435
   },
   {
       proNombre: 'Kings',
       deptoId: 435
   },
   {
       proNombre: 'Madawaska',
       deptoId: 435
   },
   {
       proNombre: 'Northumberland',
       deptoId: 435
   },
   {
       proNombre: 'Queens',
       deptoId: 435
   },
   {
       proNombre: 'Restigouche',
       deptoId: 435
   },
   {
       proNombre: 'Saint John',
       deptoId: 435
   },
   {
       proNombre: 'Sunbury',
       deptoId: 435
   },
   {
       proNombre: 'Victoria',
       deptoId: 435
   },
   {
       proNombre: 'Westmorland',
       deptoId: 435
   },
   {
       proNombre: 'York',
       deptoId: 435
   },
   {
       proNombre: 'Arviat',
       deptoId: 436
   },
   {
       proNombre: 'Baker Lake',
       deptoId: 436
   },
   {
       proNombre: 'Cambridge Bay',
       deptoId: 436
   },
   {
       proNombre: 'Cape Dorset',
       deptoId: 436
   },
   {
       proNombre: 'Igloolik',
       deptoId: 436
   },
   {
       proNombre: 'Iqaluit',
       deptoId: 436
   },
   {
       proNombre: 'Kugluktuk',
       deptoId: 436
   },
   {
       proNombre: 'Pangnirtung',
       deptoId: 436
   },
   {
       proNombre: 'Pond Inlet',
       deptoId: 436
   },
   {
       proNombre: 'Rankin Inlet',
       deptoId: 436
   },
   {
       proNombre: 'Hamilton',
       deptoId: 437
   },
   {
       proNombre: 'Kingston',
       deptoId: 437
   },
   {
       proNombre: 'Kitchener',
       deptoId: 437
   },
   {
       proNombre: 'London',
       deptoId: 437
   },
   {
       proNombre: 'North Bay',
       deptoId: 437
   },
   {
       proNombre: 'Ottawa',
       deptoId: 437
   },

   {
       proNombre: 'Sault Ste. Marie',
       deptoId: 437
   },
   {
       proNombre: 'St. Catharines',
       deptoId: 437
   },
   {
       proNombre: 'Sudbury',
       deptoId: 437
   },
   {
       proNombre: 'Timmins',
       deptoId: 437
   },
   {
       proNombre: 'Thunder Bay',
       deptoId: 437
   },
   {
       proNombre: 'Toronto',
       deptoId: 437
   },
   {
       proNombre: 'Windsor',
       deptoId: 437
   },
   {
       proNombre: 'Abitibi-Témiscamingue',
       deptoId: 438
   },
   {
       proNombre: 'Bas-Saint-Laurent',
       deptoId: 438
   },
   {
       proNombre: 'Capitale-Nationale',
       deptoId: 438
   },
   {
       proNombre: 'Centre-du-Québec',
       deptoId: 438
   },
   {
       proNombre: 'Chaudière-Appalaches',
       deptoId: 438
   },
   {
       proNombre: 'Côte-Nord',
       deptoId: 438
   },
   {
       proNombre: 'Estrie',
       deptoId: 438
   },
   {
       proNombre: 'Gaspésie–Îles-de-la-Madeleine',
       deptoId: 438
   },
   {
       proNombre: 'Lanaudière',
       deptoId: 438
   },
   {
       proNombre: 'Laurentides',
       deptoId: 438
   },
   {
       proNombre: 'Laval',
       deptoId: 438
   },
   {
       proNombre: 'Mauricie',
       deptoId: 438
   },
   {
       proNombre: 'Montérégie',
       deptoId: 438
   },
   {
       proNombre: 'Montreal',
       deptoId: 438
   },
   {
       proNombre: 'Nord-du-Québec',
       deptoId: 438
   },
   {
       proNombre: 'Outaouais',
       deptoId: 438
   },
   {
       proNombre: 'Saguenay–Lac-Saint-Jean',
       deptoId: 438
   },
   {
       proNombre: 'Corman Park',
       deptoId: 439
   },
   {
       proNombre: 'Estevan',
       deptoId: 439
   },
   {
       proNombre: 'Moose Jaw',
       deptoId: 439
   },
   {
       proNombre: 'North Battleford',
       deptoId: 439
   },
   {
       proNombre: 'Prince Albert',
       deptoId: 439
   },
   {
       proNombre: 'Regina',
       deptoId: 439
   },
   {
       proNombre: 'Saskatoon',
       deptoId: 439
   },
   {
       proNombre: 'Swift Current',
       deptoId: 439
   },
   {
       proNombre: 'Weyburn',
       deptoId: 439
   },
   {
       proNombre: 'Yorkton',
       deptoId: 439
   },
   {
       proNombre: "Badger's Quay",
       deptoId: 440
   },
   {
       proNombre: 'Bay Roberts',
       deptoId: 440
   },
   {
       proNombre: "Bishop's Falls",
       deptoId: 440
   },
   {
       proNombre: 'Bonavista',
       deptoId: 440
   },
   {
       proNombre: 'Botwood',
       deptoId: 440
   },
   {
       proNombre: 'Burin',
       deptoId: 440
   },
   {
       proNombre: 'Carbonear',
       deptoId: 440
   },
   {
       proNombre: 'Channel-Port aux Basques',
       deptoId: 440
   },
   {
       proNombre: 'Clarenville',
       deptoId: 440
   },
   {
       proNombre: 'Conception Bay South',
       deptoId: 440
   },
   {
       proNombre: 'Corner brook',
       deptoId: 440
   },
   {
       proNombre: 'Deer Lake',
       deptoId: 440
   },
   {
       proNombre: 'Gambo',
       deptoId: 440
   },
   {
       proNombre: 'Gander',
       deptoId: 440
   },
   {
       proNombre: 'Glovertown',
       deptoId: 440
   },
   {
       proNombre: 'Grand Bank',
       deptoId: 440
   },
   {
       proNombre: 'Grand Falls-Windsor',
       deptoId: 440
   },
   {
       proNombre: 'Happy Valley-Goose Bay',
       deptoId: 440
   },
   {
       proNombre: 'Harbour Breton',
       deptoId: 440
   },
   {
       proNombre: 'Harbour Grace',
       deptoId: 440
   },
   {
       proNombre: 'Holyrood',
       deptoId: 440
   },
   {
       proNombre: 'Humber Arm South',
       deptoId: 440
   },
   {
       proNombre: 'Humber Arm South',
       deptoId: 440
   },
   {
       proNombre: 'Lewisporte',
       deptoId: 440
   },
   {
       proNombre: 'Logy Bay-Middle Cove-Outer Cove',
       deptoId: 440
   },
   {
       proNombre: 'Marystown',
       deptoId: 440
   },
   {
       proNombre: 'Mt Pearl',
       deptoId: 440
   },
   {
       proNombre: 'New-Wes-Valley',
       deptoId: 440
   },
   {
       proNombre: 'Paradise',
       deptoId: 440
   },
   {
       proNombre: 'Pasadena',
       deptoId: 440
   },
   {
       proNombre: 'Pasadena',
       deptoId: 440
   },
   {
       proNombre: 'Portugal Cove South',
       deptoId: 440
   },
   {
       proNombre: 'Saint Anthony',
       deptoId: 440
   },
   {
       proNombre: "Saint George's",
       deptoId: 440
   },
   {
       proNombre: 'San Juan de Terranova',
       deptoId: 440
   },
   {
       proNombre: "Spaniard's Bay",
       deptoId: 440
   },
   {
       proNombre: 'Springdale',
       deptoId: 440
   },
   {
       proNombre: 'Stephenville',
       deptoId: 440
   },
   {
       proNombre: 'Torbay',
       deptoId: 440
   },
   {
       proNombre: 'Twillingate',
       deptoId: 440
   },
   {
       proNombre: 'Behchoko',
       deptoId: 441
   },
   {
       proNombre: 'Colville Lake',
       deptoId: 441
   },
   {
       proNombre: 'Deline',
       deptoId: 441
   },
   {
       proNombre: 'Dettah',
       deptoId: 441
   },
   {
       proNombre: 'Fort Good Hope',
       deptoId: 441
   },
   {
       proNombre:  'Fort Resolution',
       deptoId: 441
   },
   {
       proNombre: 'Fort Simpson',
       deptoId: 441
   },
   {
       proNombre: 'Fort Smith',
       deptoId: 441
   },
   {
       proNombre: 'Gamèti',
       deptoId: 441
   },
   {
       proNombre: 'Hay River',
       deptoId: 441
   },
   {
       proNombre: 'Hay River Reserve',
       deptoId: 441
   },
   {
       proNombre: 'Inuvik',
       deptoId: 441
   },
   {
       proNombre: 'Jean Marie River',
       deptoId: 441
   },
   {
       proNombre: 'Kakisa',
       deptoId: 441
   },
   {
       proNombre: "Lutselk'e",
       deptoId: 441
   },
   {
       proNombre: "N'Dilo",
       deptoId: 441
   },
   {
       proNombre: 'Nahanni Butte',
       deptoId: 441
   },
   {
       proNombre: 'Norman Wells',
       deptoId: 441
   },
   {
       proNombre: 'Trout Lake',
       deptoId: 441
   },
   {
       proNombre: 'Tsiigehtchic',
       deptoId: 441
   },
   {
       proNombre: 'Wekweeti',
       deptoId: 441
   },
   {
       proNombre: 'Whatì',
       deptoId: 441
   },
   {
       proNombre: 'Wrigley',
       deptoId: 441
   },
   {
       proNombre: 'Yellowknife',
       deptoId: 441
   },
   {
       proNombre: 'Beaver Creek',
       deptoId: 442
   },
   {
       proNombre: 'Burwash Landing',
       deptoId: 442
   },
   {
       proNombre: 'Carmacks',
       deptoId: 442
   },
   {
       proNombre: 'Dawson City',
       deptoId: 442
   },
   {
       proNombre: 'Destruction Bay',
       deptoId: 442
   },
   {
       proNombre: 'Faro',
       deptoId: 442
   },
   {
       proNombre: 'Ibex Valley',
       deptoId: 442
   },
   {
       proNombre: 'Haines Junction',
       deptoId: 442
   },
   {
       proNombre: 'Marsh Lake',
       deptoId: 442
   },
   {
       proNombre: 'Mayo',
       deptoId: 442
   },
   {
       proNombre: 'Mt. Lorne',
       deptoId: 442
   },
   {
       proNombre: 'Old Crow',
       deptoId: 442
   },
   {
       proNombre: 'Pelly Crossing',
       deptoId: 442
   },
   {
       proNombre: 'Ross River',
       deptoId: 442
   },
   {
       proNombre: 'Tagish',
       deptoId: 442
   },
   {
       proNombre: 'Teslin',
       deptoId: 442
   },
   {
       proNombre: 'Watson Lake',
       deptoId: 442
   },
   {
       proNombre: 'Whitehorse',
       deptoId: 442
   },
   {
       proNombre: 'Whitehorse (aglomeración)',
       deptoId: 442
   },
   {
       proNombre: 'Al Daayen',
       deptoId: 443
   },
   {
       proNombre: 'Al Khor',
       deptoId: 444
   },
   {
       proNombre: 'Al-Rayyan',
       deptoId: 445
   },
   {
       proNombre: 'Al Wakrah',
       deptoId: 446
   },
   {
       proNombre: 'Doha',
       deptoId: 447
   },
   {
       proNombre: 'Al Shamal',
       deptoId: 448
   },
   {
       proNombre: 'Umm Salal Mohammed',
       deptoId: 449
   },
   {
       proNombre: 'Batha Este',
       deptoId: 450
   },
   {
       proNombre: 'Batha Oeste',
       deptoId: 450
   },
   {
       proNombre: 'Fitri',
       deptoId: 450
   },
   {
       proNombre: 'Baguirmi',
       deptoId: 451
   },
   {
       proNombre: 'Chari',
       deptoId: 451
   },
   {
       proNombre: 'Loug Chari',
       deptoId: 451
   },
   {
       proNombre: 'Dababa',
       deptoId: 453
   },
   {
       proNombre: 'Dagana',
       deptoId: 453
   },
   {
       proNombre: 'Haraze Al Biar',
       deptoId: 453
   },
   {
       proNombre: 'Biltine',
       deptoId: 454
   },
   {
       proNombre: 'Dar Tama',
       deptoId: 454
   },
   {
       proNombre: 'Iriba',
       deptoId: 454
   },
   {
       proNombre: 'Mégri',
       deptoId: 454
   },
   {
       proNombre: 'Barh El Gazel Nord',
       deptoId: 455
   },
   {
       proNombre: 'Barh El Gazel Sud',
       deptoId: 455
   },
   {
       proNombre: 'Barh El Gazel Ouest',
       deptoId: 455
   },
   {
       proNombre: 'Borkou',
       deptoId: 456
   },
   {
       proNombre: 'Borkou Yala',
       deptoId: 456
   },
   {
       proNombre: 'Ennedi',
       deptoId: 457
   },
   {
       proNombre: 'Wadi Hawar',
       deptoId: 457
   },
   {
       proNombre: 'Guéra',
       deptoId: 458
   },
   {
       proNombre: 'Barh Signaka',
       deptoId: 458
   },
   {
       proNombre: 'Abtouyour',
       deptoId: 458
   },
   {
       proNombre: 'Mangalmé',
       deptoId: 458
   },
   {
       proNombre: 'Kanem',
       deptoId: 459
   },
   {
       proNombre: 'Nord Kanem',
       deptoId: 459
   },
   {
       proNombre: 'Wadi Bissam',
       deptoId: 459
   },
   {
       proNombre: 'Fouli',
       deptoId: 460
   },
   {
       proNombre: 'Kaya',
       deptoId: 460
   },
   {
       proNombre: 'Mamdi',
       deptoId: 460
   },
   {
       proNombre: 'Wayi',
       deptoId: 460
   },
   {
       proNombre: 'Dodjé',
       deptoId: 461
   },
   {
       proNombre: 'Guéni',
       deptoId: 461
   },
   {
       proNombre: 'Lac Wey',
       deptoId: 461
   },
   {
       proNombre: 'Ngourkosso',
       deptoId: 461
   },
   {
       proNombre: 'Lanya',
       deptoId: 462
   },
   {
       proNombre: 'La Nya Pendé',
       deptoId: 462
   },
   {
       proNombre: 'La Pendé',
       deptoId: 462
   },
   {
       proNombre: 'Monts de Lam',
       deptoId: 462
   },
   {
       proNombre: 'Mandoul Occidental',
       deptoId: 463
   },
   {
       proNombre: 'Mandoul Oriental',
       deptoId: 463
   },
   {
       proNombre: 'Barh Sara',
       deptoId: 463
   },
   {
       proNombre: 'Kabbia',
       deptoId: 464
   },
   {
       proNombre: 'Mayo Lemie',
       deptoId: 464
   },
   {
       proNombre: 'Mayo-Boneye',
       deptoId: 464
   },
   {
       proNombre: "Mont d'Illi",
       deptoId: 464
   },
   {
       proNombre: 'Mayo-Binder',
       deptoId: 465
   },
   {
       proNombre: 'Mayo-Dallah',
       deptoId: 465
   },
   {
       proNombre: 'Lac Léré',
       deptoId: 465
   },
   {
       proNombre: 'Barh Köh',
       deptoId: 466
   },
   {
       proNombre: 'Grande Sido',
       deptoId: 466
   },
   {
       proNombre: 'Lac Iro',
       deptoId: 466
   },
   {
       proNombre: 'Abdi',
       deptoId: 467
   },
   {
       proNombre: 'Assoungha',
       deptoId: 467
   },
   {
       proNombre: 'Ouara',
       deptoId: 467
   },
   {
       proNombre: 'Aboudeïa',
       deptoId: 468
   },
   {
       proNombre: 'Barh Azoum',
       deptoId: 468
   },
   {
       proNombre: 'Haraze Mangueigne',
       deptoId: 468
   },
   {
       proNombre: 'Djourouf Al Ahmar',
       deptoId: 469
   },
   {
       proNombre: 'Kimiti',
       deptoId: 469
   },
   {
       proNombre: 'Tandjilé Centre',
       deptoId: 470
   },
   {
       proNombre: 'Tandjilé Est',
       deptoId: 470
   },
   {
       proNombre: 'Tandjilé Ouest',
       deptoId: 470
   },
   {
       proNombre: 'Tibesti Est',
       deptoId: 471
   },
   {
       proNombre: 'Tibesti Ouest',
       deptoId: 471
   },
   {
       proNombre: 'Yamena',
       deptoId: 472
   },
   {
       proNombre: 'Antofagasta',
       deptoId: 473
   },
   {
       proNombre: 'El Loa',
       deptoId: 473
   },
   {
       proNombre: 'Tocopilla',
       deptoId: 473
   },
   {
       proNombre: 'Provincia de Cautín',
       deptoId: 474
   },
   {
       proNombre: 'Provincia de Malleco',
       deptoId: 474
   },
   {
       proNombre: 'Provincia de Arica',
       deptoId: 475
   },
   {
       proNombre: 'Provincia de Parinacota',
       deptoId: 475
   },
   {
       proNombre: 'Provincia de Chañaral',
       deptoId: 476
   },
   {
       proNombre: 'Provincia de Copiapó',
       deptoId: 476
   },
   {
       proNombre: 'Provincia de Huasco',
       deptoId: 476
   },
   {
       proNombre: 'Provincia de Aysén',
       deptoId: 477
   },
   {
       proNombre: 'Provincia de Capitán Prat',
       deptoId: 477
   },
   {
       proNombre: 'Provincia de Coyhaique',
       deptoId: 477
   },
   {
       proNombre: 'Provincia de General Carrera',
       deptoId: 477
   },
   {
       proNombre: 'Arauco',
       deptoId: 478
   },
   {
       proNombre: 'Biobío',
       deptoId: 478
   },
   {
       proNombre: 'Concepción',
       deptoId: 478
   },
   {
       proNombre: 'Ñuble',
       deptoId: 478
   },
   {
       proNombre: 'Choapa',
       deptoId: 479
   },
   {
       proNombre: 'Elqui',
       deptoId: 479
   },
   {
       proNombre: 'Limarí',
       deptoId: 479
   },
   {
       proNombre: 'Cachapoal',
       deptoId: 480
   },
   {
       proNombre: 'Cardenal Caro',
       deptoId: 480
   },
   {
       proNombre: 'Colchagua',
       deptoId: 480
   },
   {
       proNombre: 'Chiloé',
       deptoId: 481
   },
   {
       proNombre: 'Llanquihue',
       deptoId: 481
   },
   {
       proNombre: 'Osorno',
       deptoId: 481
   },
   {
       proNombre: 'Palena',
       deptoId: 481
   },
   {
       proNombre: 'Ranco',
       deptoId: 482
   },
   {
       proNombre: 'Valdivia',
       deptoId: 482
   },
   {
       proNombre: 'Magallanes',
       deptoId: 483
   },
   {
       proNombre: 'Tierra del Fuego',
       deptoId: 483
   },
   {
       proNombre: 'Última Esperanza',
       deptoId: 483
   },
   {
       proNombre: 'Cauquenes',
       deptoId: 484
   },
   {
       proNombre: 'Curicó',
       deptoId: 484
   },
   {
       proNombre: 'Linares',
       deptoId: 484
   },
   {
       proNombre: 'Talca',
       deptoId: 484
   },
   {
       proNombre: 'Santiago',
       deptoId: 485
   },
   {
       proNombre: 'Talagante',
       deptoId: 485
   },
   {
       proNombre: 'Iquique',
       deptoId: 486
   },
   {
       proNombre: 'Tamarugal',
       deptoId: 486
   },
   {
       proNombre: 'Isla de Pascua',
       deptoId: 487
   },
   {
       proNombre: 'Los Andes',
       deptoId: 487
   },
   {
       proNombre: 'Marga Marga',
       deptoId: 487
   },
   {
       proNombre: 'Petorca',
       deptoId: 487
   },
   {
       proNombre: 'Quillota',
       deptoId: 487
   },
   {
       proNombre: 'San Antonio',
       deptoId: 487
   },
   {
       proNombre: 'San Felipe de Aconcagua',
       deptoId: 487
   },
   {
       proNombre: 'Valparaíso',
       deptoId: 487
   },
   {
       proNombre: 'Valparaíso',
       deptoId: 487
   },
   {
       proNombre: 'Aksu',
       deptoId: 488
   },
   {
       proNombre: 'Altay',
       deptoId: 488
   },
   {
       proNombre: 'Aral',
       deptoId: 488
   },
   {
       proNombre: 'Bayingolin',
       deptoId: 488
   },
   {
       proNombre: 'Bortala',
       deptoId: 488
   },
   {
       proNombre: 'Changji',
       deptoId: 488
   },
   {
       proNombre: '	ili',
       deptoId: 488
   },
   {
       proNombre: 'Karamay',
       deptoId: 488
   },
   {
       proNombre: 'Kasgar',
       deptoId: 488
   },
   {
       proNombre: 'Kizilsu',
       deptoId: 488
   },
   {
       proNombre: 'Kumul',
       deptoId: 488
   },
   {
       proNombre: 'Jotán',
       deptoId: 488
   },
   {
       proNombre: 'Shihezi',
       deptoId: 488
   },
   {
       proNombre: 'Tacheng',
       deptoId: 488
   },
   {
       proNombre: 'Tumshuke',
       deptoId: 488
   },
   {
       proNombre: 'Turfán',
       deptoId: 488
   },
   {
       proNombre: 'Urumchi',
       deptoId: 488
   },
   {
       proNombre: 'Wujiaqu',
       deptoId: 488
   },
   {
       proNombre: 'Banan',
       deptoId: 489
   },
   {
       proNombre: 'Qianjiang',
       deptoId: 489
   },
   {
       proNombre: 'Changshou',
       deptoId: 489
   },
   {
       proNombre: 'Shapingba',
       deptoId: 489
   },
   {
       proNombre: 'Shuangqiao',
       deptoId: 489
   },
   {
       proNombre: 'Wansheng',
       deptoId: 489
   },
   {
       proNombre: 'Wanzhou',
       deptoId: 489
   },
   {
       proNombre: 'Yubei',
       deptoId: 489
   },
   {
       proNombre: 'Yongchuan',
       deptoId: 489
   },
   {
       proNombre: 'Yuzhong',
       deptoId: 489
   },
   {
       proNombre: 'Beibei',
       deptoId: 489
   },
   {
       proNombre: 'Dadukou',
       deptoId: 489
   },
   {
       proNombre: 'Fuling',
       deptoId: 489
   },
   {
       proNombre: 'Hechuan',
       deptoId: 489
   },
   {
       proNombre: 'Jiangbei',
       deptoId: 489
   },
   {
       proNombre: 'Jiangjin',
       deptoId: 489
   },
   {
       proNombre: 'Fuzhou',
       deptoId: 490
   },
   {
       proNombre: 'Longyan',
       deptoId: 490
   },
   {
       proNombre: 'Nanping',
       deptoId: 490
   },
   {
       proNombre: 'Ningde',
       deptoId: 490
   },
   {
       proNombre: 'Putian',
       deptoId: 490
   },
   {
       proNombre: 'Quanzhou',
       deptoId: 490
   },
   {
       proNombre: 'Sanming',
       deptoId: 490
   },
   {
       proNombre: 'Zhangzhou',
       deptoId: 490
   },
   {
       proNombre: 'Xiamen',
       deptoId: 490
   },
   {
       proNombre: 'Jiuquan',
       deptoId: 491
   },
   {
       proNombre: 'Jiayuguan',
       deptoId: 491
   },
   {
       proNombre: 'Zhangye',
       deptoId: 491
   },
   {
       proNombre: 'Jinchang',
       deptoId: 491
   },
   {
       proNombre: 'Wuwei',
       deptoId: 491
   },
   {
       proNombre: 'Baiyin',
       deptoId: 491
   },
   {
       proNombre: 'Lanzhou',
       deptoId: 491
   },
   {
       proNombre: 'Linxia Hui',
       deptoId: 491
   },
   {
       proNombre: 'Gannan',
       deptoId: 491
   },
   {
       proNombre: 'Dingxi',
       deptoId: 491
   },
   {
       proNombre: 'Longnan',
       deptoId: 491
   },
   {
       proNombre: 'Tianshui',
       deptoId: 491
   },
   {
       proNombre: 'Pingliang',
       deptoId: 491
   },
   {
       proNombre: 'Qingyang',
       deptoId: 491
   },
   {
       proNombre: 'Qingyuan',
       deptoId: 492
   },
   {
       proNombre: 'Shaoguan',
       deptoId: 492
   },
   {
       proNombre: 'Heyuan',
       deptoId: 492
   },
   {
       proNombre: 'Meizhou',
       deptoId: 492
   },
   {
       proNombre: 'Chaozhou',
       deptoId: 492
   },
   {
       proNombre: 'Zhaoqing',
       deptoId: 492
   },
   {
       proNombre: 'Yunfu',
       deptoId: 492
   },
   {
       proNombre: 'Foshan',
       deptoId: 492
   },
   {
       proNombre: 'Cantón',
       deptoId: 492
   },
   {
       proNombre: 'Dongguan',
       deptoId: 492
   },
   {
       proNombre: 'Huizhou',
       deptoId: 492
   },
   {
       proNombre: 'Shanwei',
       deptoId: 492
   },
   {
       proNombre: 'Jieyang',
       deptoId: 492
   },
   {
       proNombre: 'Shantou',
       deptoId: 492
   },
   {
       proNombre: 'Zhanjiang',
       deptoId: 492
   },
   {
       proNombre: 'Maoming',
       deptoId: 492
   },
   {
       proNombre: 'Yangjiang',
       deptoId: 492
   },
   {
       proNombre: 'Jiangmen',
       deptoId: 492
   },
   {
       proNombre: 'Zhongshan',
       deptoId: 492
   },
   {
       proNombre: 'Zhuhai',
       deptoId: 492
   },
   {
       proNombre: 'Shenzhen',
       deptoId: 492
   },
   {
       proNombre: 'Baise',
       deptoId: 493
   },
   {
       proNombre: 'Hechi',
       deptoId: 493
   },
   {
       proNombre: 'Liuzhou',
       deptoId: 493
   },
   {
       proNombre: 'Guilin',
       deptoId: 493
   },
   {
       proNombre: 'Hezhou',
       deptoId: 493
   },
   {
       proNombre: 'Chongzuo',
       deptoId: 493
   },
   {
       proNombre: 'Nanning',
       deptoId: 493
   },
   {
       proNombre: 'Laibin',
       deptoId: 493
   },
   {
       proNombre: 'Guigang',
       deptoId: 493
   },
   {
       proNombre: 'Wuzhou',
       deptoId: 493
   },
   {
       proNombre: 'Fangchenggang',
       deptoId: 493
   },
   {
       proNombre: 'Qinzhou',
       deptoId: 493
   },
   {
       proNombre: 'Beihai',
       deptoId: 493
   },
   {
       proNombre: 'Yulin',
       deptoId: 493
   },
   {
       proNombre: 'Bijie',
       deptoId: 494
   },
   {
       proNombre: 'Zunyi',
       deptoId: 494
   },
   {
       proNombre: 'Tongren',
       deptoId: 494
   },
   {
       proNombre: 'Liupanshui',
       deptoId: 494
   },
   {
       proNombre: 'Anshun',
       deptoId: 494
   },
   {
       proNombre: 'Guiyang',
       deptoId: 494
   },
   {
       proNombre: 'Qianxinan',
       deptoId: 494
   },
   {
       proNombre: 'Qiannan',
       deptoId: 494
   },
   {
       proNombre: 'Qiandongnan',
       deptoId: 494
   },
   {
       proNombre: 'Haikou',
       deptoId: 495
   },
   {
       proNombre: 'Sanya',
       deptoId: 495
   },
   {
       proNombre: 'Danzhou',
       deptoId: 495
   },
   {
       proNombre: 'Sansha',
       deptoId: 495
   },
   {
       proNombre: 'Qionghai',
       deptoId: 495
   },
   {
       proNombre: 'Wanning',
       deptoId: 495
   },
   {
       proNombre: 'Wuzhishan',
       deptoId: 495
   },
   {
       proNombre: 'Dongfang',
       deptoId: 495
   },
   {
       proNombre: 'Wenchang',
       deptoId: 495
   },
   {
       proNombre: 'Lingao',
       deptoId: 495
   },
   {
       proNombre: 'Chengmai',
       deptoId: 495
   },
   {
       proNombre: "Ding'an",
       deptoId: 495
   },
   {
       proNombre: 'Tunchang',
       deptoId: 495
   },
   {
       proNombre: 'Changjiang Li',
       deptoId: 495
   },
   {
       proNombre: 'Baisha Li',
       deptoId: 495
   },
   {
       proNombre: 'Qiongzhong Li y Miao',
       deptoId: 495
   },
   {
       proNombre: 'Lingshui Li',
       deptoId: 495
   },
   {
       proNombre: 'Baoting Li y Miao',
       deptoId: 495
   },
   {
       proNombre: 'Ledong Li',
       deptoId: 495
   },
   {
       proNombre: 'Yangpu',
       deptoId: 495
   },
   {
       proNombre: 'Shijiazhuang',
       deptoId: 496
   },
   {
       proNombre: 'Báoding',
       deptoId: 496
   },
   {
       proNombre: 'Cangzhou',
       deptoId: 496
   },
   {
       proNombre: 'Chengdé',
       deptoId: 496
   },
   {
       proNombre: 'Handan',
       deptoId: 496
   },
   {
       proNombre: 'Hengshui',
       deptoId: 496
   },
   {
       proNombre: 'Langfang',
       deptoId: 496
   },
   {
       proNombre: 'Qinhuangdao',
       deptoId: 496
   },
   {
       proNombre: 'Tangshan',
       deptoId: 496
   },
   {
       proNombre: 'Xingtai',
       deptoId: 496
   },
   {
       proNombre: 'Zhangjiakou',
       deptoId: 496
   },
   {
       proNombre: 'Harbin',
       deptoId: 497
   },
   {
       proNombre: 'Daqing',
       deptoId: 497
   },
   {
       proNombre: 'Hegang',
       deptoId: 497
   },
   {
       proNombre: 'Heihe',
       deptoId: 497
   },
   {
       proNombre: 'Jiamusi',
       deptoId: 497
   },
   {
       proNombre: 'Jixi',
       deptoId: 497
   },
   {
       proNombre: 'Mudanjiang',
       deptoId: 497
   },
   {
       proNombre: 'Qiqihar',
       deptoId: 497
   },
   {
       proNombre: 'Qitaihe',
       deptoId: 497
   },
   {
       proNombre: 'Shuangyashan',
       deptoId: 497
   },
   {
       proNombre: 'Suihua',
       deptoId: 497
   },
   {
       proNombre: 'Yichun',
       deptoId: 497
   },
   {
       proNombre: "Daxing'anling",
       deptoId: 497
   },
   {
       proNombre: 'Zhengzhou',
       deptoId: 498
   },
   {
       proNombre: 'Anyang',
       deptoId: 498
   },
   {
       proNombre: 'Hebi',
       deptoId: 498
   },
   {
       proNombre: 'Jiaozuo',
       deptoId: 498
   },
   {
       proNombre: 'Kaifeng',
       deptoId: 498
   },
   {
       proNombre: 'Luohe',
       deptoId: 498
   },
   {
       proNombre: 'Luoyang',
       deptoId: 498
   },
   {
       proNombre: 'Nanyang',
       deptoId: 498
   },
   {
       proNombre: 'Pingdingshan',
       deptoId: 498
   },
   {
       proNombre: 'Puyang',
       deptoId: 498
   },
   {
       proNombre: 'Sanmenxia',
       deptoId: 498
   },
   {
       proNombre: 'Shangqiu',
       deptoId: 498
   },
   {
       proNombre: 'Xinxiang',
       deptoId: 498
   },
   {
       proNombre: 'Xinyang',
       deptoId: 498
   },
   {
       proNombre: 'Xuchang',
       deptoId: 498
   },
   {
       proNombre: 'Zhoukou',
       deptoId: 498
   },
   {
       proNombre: 'Zhumadian',
       deptoId: 498
   },
   {
       proNombre: 'Jiyuan',
       deptoId: 498
   },
   {
       proNombre: 'Distrito de las Islas',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Kwai Tsing',
       deptoId: 499
   },
   {
       proNombre: 'Distrito del Norte',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Sai Kung',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Sha Tin',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Tai Po',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Tsuen Wan',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Tuen Mun',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Yuen Long',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Kowloon',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Kwun Tong',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Sham Shui Po',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Wong Tai Sin',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Yau Tsim Mong',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de la Central y Oeste',
       deptoId: 499
   },
   {
       proNombre: 'Distrito del Este',
       deptoId: 499
   },
   {
       proNombre: 'Distrito del Sur',
       deptoId: 499
   },
   {
       proNombre: 'Distrito de Wan Chai',
       deptoId: 499
   },
   {
       proNombre: 'Wuhan',
       deptoId: 500
   },
   {
       proNombre: 'Ezhou',
       deptoId: 500
   },
   {
       proNombre: 'Huanggang',
       deptoId: 500
   },
   {
       proNombre: 'Huangshi',
       deptoId: 500
   },
   {
       proNombre: 'Jingmen',
       deptoId: 500
   },
   {
       proNombre: 'Jingzhou',
       deptoId: 500
   },
   {
       proNombre: 'Shiyan',
       deptoId: 500
   },
   {
       proNombre: 'Suizhou',
       deptoId: 500
   },
   {
       proNombre: 'Xiangyang',
       deptoId: 500
   },
   {
       proNombre: 'Xianning',
       deptoId: 500
   },
   {
       proNombre: 'Xiaogan',
       deptoId: 500
   },
   {
       proNombre: 'Yichang',
       deptoId: 500
   },
   {
       proNombre: 'Enshi',
       deptoId: 500
   },
   {
       proNombre: 'Changsha',
       deptoId: 501
   },
   {
       proNombre: 'Changde',
       deptoId: 501
   },
   {
       proNombre: 'Chenzhou',
       deptoId: 501
   },
   {
       proNombre: 'Hengyang',
       deptoId: 501
   },
   {
       proNombre: 'Huaihua',
       deptoId: 501
   },
   {
       proNombre: 'Loudi',
       deptoId: 501
   },
   {
       proNombre: 'Shaoyang',
       deptoId: 501
   },
   {
       proNombre: 'Xiangtan',
       deptoId: 501
   },
   {
       proNombre: 'Yiyang',
       deptoId: 501
   },
   {
       proNombre: 'Yongzhou',
       deptoId: 501
   },
   {
       proNombre: 'Yueyang',
       deptoId: 501
   },
   {
       proNombre: 'Zhangjiajie',
       deptoId: 501
   },
   {
       proNombre: 'Zhuzhou',
       deptoId: 501
   },
   {
       proNombre: 'Xiangxi',
       deptoId: 501
   },
   {
       proNombre: 'Nankín',
       deptoId: 502
   },
   {
       proNombre: 'Changzhou',
       deptoId: 502
   },
   {
       proNombre: "Huai'an",
       deptoId: 502
   },
   {
       proNombre: 'Lianyungang',
       deptoId: 502
   },
   {
       proNombre: 'Nantong',
       deptoId: 502
   },
   {
       proNombre: 'Suqian',
       deptoId: 502
   },
   {
       proNombre: 'Suzhou',
       deptoId: 502
   },
   {
       proNombre: 'Taizhou',
       deptoId: 502
   },
   {
       proNombre: 'Wuxi',
       deptoId: 502
   },
   {
       proNombre: 'Xuzhou',
       deptoId: 502
   },
   {
       proNombre: 'Yancheng',
       deptoId: 502
   },
   {
       proNombre: 'Yangzhou',
       deptoId: 502
   },
   {
       proNombre: 'Zhenjiang',
       deptoId: 502
   },
   {
       proNombre: 'Nanchang',
       deptoId: 503
   },
   {
       proNombre: 'Fuzhou',
       deptoId: 503
   },
   {
       proNombre: 'Ganzhou',
       deptoId: 503
   },
   {
       proNombre: "Ji'an",
       deptoId: 503
   },
   {
       proNombre: 'Jingdezhen',
       deptoId: 503
   },
   {
       proNombre: 'Jiujiang',
       deptoId: 503
   },
   {
       proNombre: 'Pingxiang',
       deptoId: 503
   },
   {
       proNombre: 'Shangrao',
       deptoId: 503
   },
   {
       proNombre: 'Xinyu',
       deptoId: 503
   },
   {
       proNombre: 'Yichun',
       deptoId: 503
   },
   {
       proNombre: 'Yingtan',
       deptoId: 503
   },
   {
       proNombre: 'Changchun',
       deptoId: 504
   },
   {
       proNombre: 'Baicheng',
       deptoId: 504
   },
   {
       proNombre: 'Baishan',
       deptoId: 504
   },
   {
       proNombre: 'Jilin',
       deptoId: 504
   },
   {
       proNombre: 'Liaoyuan',
       deptoId: 504
   },
   {
       proNombre: 'Siping',
       deptoId: 504
   },
   {
       proNombre: 'Songyuan',
       deptoId: 504
   },
   {
       proNombre: 'Tonghua',
       deptoId: 504
   },
   {
       proNombre: 'Yanbián',
       deptoId: 504
   },
   {
       proNombre: 'Shenyang',
       deptoId: 505
   },
   {
       proNombre: 'Dalian',
       deptoId: 505
   },
   {
       proNombre: 'Anshán',
       deptoId: 505
   },
   {
       proNombre: 'Benxi',
       deptoId: 505
   },
   {
       proNombre: 'Chaoyang',
       deptoId: 505
   },
   {
       proNombre: 'Dandong',
       deptoId: 505
   },
   {
       proNombre: 'Fushun',
       deptoId: 505
   },
   {
       proNombre: 'Fuxin',
       deptoId: 505
   },
   {
       proNombre: 'Huludao',
       deptoId: 505
   },
   {
       proNombre: 'Jinzhou',
       deptoId: 505
   },
   {
       proNombre: 'Liaoyang',
       deptoId: 505
   },
   {
       proNombre: 'Panjin',
       deptoId: 505
   },
   {
       proNombre: 'Tieling',
       deptoId: 505
   },
   {
       proNombre: 'Yingkou',
       deptoId: 505
   },
   {
       proNombre: 'Yingkou',
       deptoId: 505
   },
   {
       proNombre: 'Macao',
       deptoId: 506
   },
   {
       proNombre: 'Isla Taipa',
       deptoId: 506
   },
   {
       proNombre: 'Isla Coloane',
       deptoId: 506
   },
   {
       proNombre: 'Hohhot',
       deptoId: 507
   },
   {
       proNombre: 'Baotou',
       deptoId: 507
   },
   {
       proNombre: 'Wuhai',
       deptoId: 507
   },
   {
       proNombre: 'Ulanhad',
       deptoId: 507
   },
   {
       proNombre: 'Tongliao',
       deptoId: 507
   },
   {
       proNombre: 'Ordos',
       deptoId: 507
   },
   {
       proNombre: 'Hulun Buir',
       deptoId: 507
   },
   {
       proNombre: 'Bayannur',
       deptoId: 507
   },
   {
       proNombre: 'Ulanqab',
       deptoId: 507
   },
   {
       proNombre: 'Yinchuan',
       deptoId: 508
   },
   {
       proNombre: 'Shizuishan',
       deptoId: 508
   },
   {
       proNombre: 'Wuzhong',
       deptoId: 508
   },
   {
       proNombre: 'Zhongwei',
       deptoId: 508
   },
   {
       proNombre: 'Guyuan',
       deptoId: 508
   },
   {
       proNombre: 'Distrito de Dongcheng',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Xicheng',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Chongwen',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Xuanwu',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Chaoyang',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Haidian',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Fengtai',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Shijingshan',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Mentougou',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Fangshan',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Tongzhou',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Shunyi',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Changping',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Daxing',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Pinggu',
       deptoId: 509
   },
   {
       proNombre: 'Distrito de Huairou',
       deptoId: 509
   },
   {
       proNombre: 'Xining',
       deptoId: 510
   },
   {
       proNombre: 'Haidong',
       deptoId: 510
   },
   {
       proNombre: 'Haixi',
       deptoId: 510
   },
   {
       proNombre: 'Haibei',
       deptoId: 510
   },
   {
       proNombre: 'Hainan',
       deptoId: 510
   },
   {
       proNombre: 'Huangnan',
       deptoId: 510
   },
   {
       proNombre: 'Yushu',
       deptoId: 510
   },
   {
       proNombre: 'Golog',
       deptoId: 510
   },
   {
       proNombre: "Xi'an",
       deptoId: 511
   },
   {
       proNombre: 'Ankáng',
       deptoId: 511
   },
   {
       proNombre: 'Baoji',
       deptoId: 511
   },
   {
       proNombre: 'Hanzhong',
       deptoId: 511
   },
   {
       proNombre: 'Shangluo',
       deptoId: 511
   },
   {
       proNombre: 'Tongchuan',
       deptoId: 511
   },
   {
       proNombre: 'Weinan',
       deptoId: 511
   },
   {
       proNombre: 'Xianyang',
       deptoId: 511
   },
   {
       proNombre: "Yan'an",
       deptoId: 511
   },
   {
       proNombre: 'Yulin',
       deptoId: 511
   },
   {
       proNombre: 'Jinan',
       deptoId: 512
   },
   {
       proNombre: 'Qingdao',
       deptoId: 512
   },
   {
       proNombre: 'Binzhou',
       deptoId: 512
   },
   {
       proNombre: 'Dezhou',
       deptoId: 512
   },
   {
       proNombre: 'Dongying',
       deptoId: 512
   },
   {
       proNombre: 'Heze',
       deptoId: 512
   },
   {
       proNombre: 'Jining',
       deptoId: 512
   },
   {
       proNombre: 'Laiwu',
       deptoId: 512
   },
   {
       proNombre: 'Liaocheng',
       deptoId: 512
   },
   {
       proNombre: 'Linyi',
       deptoId: 512
   },
   {
       proNombre: 'Rizhao',
       deptoId: 512
   },
   {
       proNombre: "Tai'an",
       deptoId: 512
   },
   {
       proNombre: 'Weifang',
       deptoId: 512
   },
   {
       proNombre: 'Weihai',
       deptoId: 512
   },
   {
       proNombre: 'Yantai',
       deptoId: 512
   },
   {
       proNombre: 'Zaozhuang',
       deptoId: 512
   },
   {
       proNombre: 'Zibo',
       deptoId: 512
   },
   {
       proNombre: 'Distrito Huangpu',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Xuhui',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Changning',
       deptoId: 513
   },
   {
       proNombre: "Distrito Jing'an",
       deptoId: 513
   },
   {
       proNombre: 'Distrito Putuo',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Zhabei',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Hongkou',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Yangpu',
       deptoId: 513
   },
   {
       proNombre: 'Distrito de Baoshan',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Minhang',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Jiading',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Jinshan',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Songjiang',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Qingpu',
       deptoId: 513
   },
   {
       proNombre: 'Distrito Fengxian',
       deptoId: 513
   },
   {
       proNombre: 'Taiyuan',
       deptoId: 514
   },
   {
       proNombre: 'Changzhi',
       deptoId: 514
   },
   {
       proNombre: 'Datong',
       deptoId: 514
   },
   {
       proNombre: 'Jincheng',
       deptoId: 514
   },
   {
       proNombre: 'Jinzhong',
       deptoId: 514
   },
   {
       proNombre: 'Linfen',
       deptoId: 514
   },
   {
       proNombre: 'Lüliang',
       deptoId: 514
   },
   {
       proNombre: 'Shuozhou',
       deptoId: 514
   },
   {
       proNombre: 'Xinzhou',
       deptoId: 514
   },
   {
       proNombre: 'Yangquan',
       deptoId: 514
   },
   {
       proNombre: 'Yuncheng',
       deptoId: 514
   },
   {
       proNombre: 'Ganzi',
       deptoId: 515
   },
   {
       proNombre: 'Ngawa',
       deptoId: 515
   },
   {
       proNombre: 'Mianyang',
       deptoId: 515
   },
   {
       proNombre: 'Guangyuan',
       deptoId: 515
   },
   {
       proNombre: 'Nanchong',
       deptoId: 515
   },
   {
       proNombre: 'Bazhong',
       deptoId: 515
   },
   {
       proNombre: 'Dazhou',
       deptoId: 515
   },
   {
       proNombre: "Ya'an",
       deptoId: 515
   },
   {
       proNombre: 'Chengdu',
       deptoId: 515
   },
   {
       proNombre: 'Deyang',
       deptoId: 515
   },
   {
       proNombre: 'Suining',
       deptoId: 515
   },
   {
       proNombre: "Guang'an",
       deptoId: 515
   },
   {
       proNombre: 'Meishan',
       deptoId: 515
   },
   {
       proNombre: 'Ziyang',
       deptoId: 515
   },
   {
       proNombre: 'Leshan',
       deptoId: 515
   },
   {
       proNombre: 'Neijiang',
       deptoId: 515
   },
   {
       proNombre: 'Zigong',
       deptoId: 515
   },
   {
       proNombre: 'Yibin',
       deptoId: 515
   },
   {
       proNombre: 'Luzhou',
       deptoId: 515
   },
   {
       proNombre: 'Liangshan',
       deptoId: 515
   },
   {
       proNombre: 'Panzhihua',
       deptoId: 515
   },
   {
       proNombre: 'Nuevo Taipéi	',
       deptoId: 516
   },
   {
       proNombre: 'Kaohsiung',
       deptoId: 516
   },
   {
       proNombre: 'Taichung',
       deptoId: 516
   },
   {
       proNombre: 'Taipéi',
       deptoId: 516
   },
   {
       proNombre: 'Taoyuan',
       deptoId: 516
   },
   {
       proNombre: 'Tainan',
       deptoId: 516
   },
   {
       proNombre: 'Hsinchu',
       deptoId: 516
   },
   {
       proNombre: 'Keelung',
       deptoId: 516
   },
   {
       proNombre: 'Chiayi',
       deptoId: 516
   },
   {
       proNombre: 'Changhua',
       deptoId: 516
   },
   {
       proNombre: 'Pingtung',
       deptoId: 516
   },
   {
       proNombre: 'Zhubei',
       deptoId: 516
   },
   {
       proNombre: 'Hualien',
       deptoId: 516
   },
   {
       proNombre: 'Douliu',
       deptoId: 516
   },
   {
       proNombre: 'Taitung',
       deptoId: 516
   },
   {
       proNombre: 'Nantou',
       deptoId: 516
   },
   {
       proNombre: 'Yilan',
       deptoId: 516
   },
   {
       proNombre: 'Miaoli',
       deptoId: 516
   },
   {
       proNombre: 'Magong',
       deptoId: 516
   },
   {
       proNombre: 'Puzi',
       deptoId: 516
   },
   {
       proNombre: 'Taibao',
       deptoId: 516
   },
   {
       proNombre: 'Heping',
       deptoId: 517
   },
   {
       proNombre: 'Hedong',
       deptoId: 517
   },
   {
       proNombre: 'Hexi',
       deptoId: 517
   },
   {
       proNombre: 'Nankai',
       deptoId: 517
   },
   {
       proNombre: 'Hongqiao',
       deptoId: 517
   },
   {
       proNombre: 'Hebei',
       deptoId: 517
   },
   {
       proNombre: 'Jinnan',
       deptoId: 517
   },
   {
       proNombre: 'Dongli',
       deptoId: 517
   },
   {
       proNombre: 'Xiqing',
       deptoId: 517
   },
   {
       proNombre: 'Beichen',
       deptoId: 517
   },
   {
       proNombre: 'Baodi',
       deptoId: 517
   },
   {
       proNombre: 'Wuqing',
       deptoId: 517
   },
   {
       proNombre: 'Nueva Área de Binhái',
       deptoId: 517
   },
   {
       proNombre: 'Ngari',
       deptoId: 518
   },
   {
       proNombre: 'Nagqu',
       deptoId: 518
   },
   {
       proNombre: 'Chamdo',
       deptoId: 518
   },
   {
       proNombre: 'Shigatse',
       deptoId: 518
   },
   {
       proNombre: 'Lhasa',
       deptoId: 518
   },
   {
       proNombre: 'Shannan',
       deptoId: 518
   },
   {
       proNombre: 'Nyingchi',
       deptoId: 518
   },
   {
       proNombre: 'Urumchi',
       deptoId: 519
   },
   {
       proNombre: 'Karamay',
       deptoId: 519
   },
   {
       proNombre: 'Shihezi',
       deptoId: 519
   },
   {
       proNombre: 'Tumshuke',
       deptoId: 519
   },
   {
       proNombre: 'Aral',
       deptoId: 519
   },
   {
       proNombre: 'Wujiaqu',
       deptoId: 519
   },
   {
       proNombre: 'Turfán',
       deptoId: 519
   },
   {
       proNombre: 'Kumul',
       deptoId: 519
   },
   {
       proNombre: 'Jotán',
       deptoId: 519
   },
   {
       proNombre: 'Aksu',
       deptoId: 519
   },
   {
       proNombre: 'Kasgar',
       deptoId: 519
   },
   {
       proNombre: 'Tacheng',
       deptoId: 519
   },
   {
       proNombre: 'Altay',
       deptoId: 519
   },
   {
       proNombre: 'Kizilsu',
       deptoId: 519
   },
   {
       proNombre: 'Bayingolin',
       deptoId: 519
   },
   {
       proNombre: 'Changji',
       deptoId: 519
   },
   {
       proNombre: 'Bortala',
       deptoId: 519
   },
   {
       proNombre: 'Ili',
       deptoId: 519
   },
   {
       proNombre: 'Kunming',
       deptoId: 520
   },
   {
       proNombre: 'Qujing',
       deptoId: 520
   },
   {
       proNombre: 'Yuxi',
       deptoId: 520
   },
   {
       proNombre: 'Baoshan',
       deptoId: 520
   },
   {
       proNombre: 'Zhaotong',
       deptoId: 520
   },
   {
       proNombre: 'Lijiang',
       deptoId: 520
   },
   {
       proNombre: "Pu'er",
       deptoId: 520
   },
   {
       proNombre: 'Lincang',
       deptoId: 520
   },
   {
       proNombre: 'Dehong',
       deptoId: 520
   },
   {
       proNombre: 'Nujiang',
       deptoId: 520
   },
   {
       proNombre: 'Dêqên',
       deptoId: 520
   },
   {
       proNombre: 'Dali',
       deptoId: 520
   },
   {
       proNombre: 'Chuxiong',
       deptoId: 520
   },
   {
       proNombre: 'Honghe',
       deptoId: 520
   },
   {
       proNombre: 'Wenshan',
       deptoId: 520
   },
   {
       proNombre: 'Xishuangbanna',
       deptoId: 520
   },
   {
       proNombre: 'Hangzhou',
       deptoId: 521
   },
   {
       proNombre: 'Ningbo',
       deptoId: 521
   },
   {
       proNombre: 'Huzhou',
       deptoId: 521
   },
   {
       proNombre: 'Jiaxing',
       deptoId: 521
   },
   {
       proNombre: 'Jinhua',
       deptoId: 521
   },
   {
       proNombre: 'Lishui',
       deptoId: 521
   },
   {
       proNombre: 'Quzhou',
       deptoId: 521
   },
   {
       proNombre: 'Shaoxing',
       deptoId: 521
   },
   {
       proNombre: 'Taizhou',
       deptoId: 521
   },
   {
       proNombre: 'Wenzhou',
       deptoId: 521
   },
   {
       proNombre: 'Zhoushan',
       deptoId: 521
   },
   {
       proNombre: 'Famagusta',
       deptoId: 522
   },
   {
       proNombre: 'Kyrenia',
       deptoId: 523
   },
   {
       proNombre: 'Lárnaca',
       deptoId: 524
   },
   {
       proNombre: 'Limasol',
       deptoId: 525
   },
   {
       proNombre: 'Nicosia',
       deptoId: 526
   },
   {
       proNombre: 'Pafos',
       deptoId: 527
   },
   {
       proNombre: 'Antioquia',
       deptoId: 528
   },
   {
       proNombre: 'Viejo Caldas',
       deptoId: 528
   },
   {
       proNombre: 'Bogotá (D. C.)',
       deptoId: 529
   },
   {
       proNombre: 'Bolívar',
       deptoId: 530
   },
   {
       proNombre: 'Atlántico',
       deptoId: 530
   },
   {
       proNombre: 'Boyacá',
       deptoId: 531
   },
   {
       proNombre: 'Tundama',
       deptoId: 531
   },
   {
       proNombre: 'Cauca',
       deptoId: 532
   },
   {
       proNombre: 'Nariño',
       deptoId: 532
   },
   {
       proNombre: 'Viejo Caldas',
       deptoId: 532
   },
   {
       proNombre: 'Caquetá',
       deptoId: 532
   },
   {
       proNombre: 'Putumayo',
       deptoId: 532
   },
   {
       proNombre: 'Cundinamarca',
       deptoId: 534
   },
   {
       proNombre: 'Quesada',
       deptoId: 534
   },
   {
       proNombre: 'Meta',
       deptoId: 534
   },
   {
       proNombre: 'Magdalena',
       deptoId: 534
   },
   {
       proNombre: 'La Guajira',
       deptoId: 534
   },
   {
       proNombre: 'Galán',
       deptoId: 535
   },
   {
       proNombre: 'Santander',
       deptoId: 535
   },
   {
       proNombre: 'Tolima',
       deptoId: 536
   },
   {
       proNombre: 'Huila',
       deptoId: 536
   },
   {
       proNombre: 'Moroni',
       deptoId: 537
   },
   {
       proNombre: 'Mutsamudu',
       deptoId: 538
   },
   {
       proNombre: 'Fomboni',
       deptoId: 539
   },
   {
       proNombre: 'Funa',
       deptoId: 540
   },
   {
       proNombre: 'Lukunga',
       deptoId: 540
   },
   {
       proNombre: 'Mont Amba',
       deptoId: 540
   },
   {
       proNombre: 'Tshangu',
       deptoId: 540
   },
   {
       proNombre: 'Bas-Fleuve',
       deptoId: 541
   },
   {
       proNombre: 'Cataractes',
       deptoId: 541
   },
   {
       proNombre: 'Lukaya',
       deptoId: 541
   },
   {
       proNombre: 'Kenge',
       deptoId: 542
   },
   {
       proNombre: 'Kikwit',
       deptoId: 543
   },
   {
       proNombre: 'Inongo',
       deptoId: 544
   },
   {
       proNombre: '	Luebo',
       deptoId: 545
   },
   {
       proNombre: '	Kananga',
       deptoId: 546
   },
   {
       proNombre: 'Mbuji-Mayi',
       deptoId: 547
   },
   {
       proNombre: 'Kabinda',
       deptoId: 548
   },
   {
       proNombre: 'Lodja',
       deptoId: 549
   },
   {
       proNombre: 'Kindu',
       deptoId: 550
   },
   {
       proNombre: ' Baraka',
       deptoId: 551
   },
   {
       proNombre: ' Fizi',
       deptoId: 551
   },
   {
       proNombre: ' Kabare',
       deptoId: 551
   },
   {
       proNombre: 'Katana',
       deptoId: 551
   },
   {
       proNombre: 'Kaziba',
       deptoId: 551
   },
   {
       proNombre: ' Lemera',
       deptoId: 551
   },
   {
       proNombre: ' Mwenga',
       deptoId: 551
   },
   {
       proNombre: ' Nundu',
       deptoId: 551
   },
   {
       proNombre: ' Nyangezi',
       deptoId: 551
   },
   {
       proNombre: ' Shabunda',
       deptoId: 551
   },
   {
       proNombre: 'Uvira',
       deptoId: 551
   },
   {
       proNombre: ' Walungu',
       deptoId: 551
   },
   {
       proNombre: '  Goma',
       deptoId: 552
   },
   {
       proNombre: ' Butembo ',
       deptoId: 552
   },
   {
       proNombre: ' Beni ',
       deptoId: 552
   },
   {
       proNombre: ' Bunia ',
       deptoId: 553
   },
   {
       proNombre: 'Isiro ',
       deptoId: 554
   },
   {
       proNombre: '	Kisangani ',
       deptoId: 555
   },
   {
       proNombre: 'Buta ',
       deptoId: 556
   },
   {
       proNombre: 'Businga ',
       deptoId: 557
   },
   {
       proNombre: 'Bosobolo',
       deptoId: 557
   },
   {
       proNombre: 'Mobayi-Mbongo ',
       deptoId: 557
   },
   {
       proNombre: 'Yakoma',
       deptoId: 557
   },
   {
       proNombre: '	Lisala',
       deptoId: 558
   },
   {
       proNombre: 'Gemena',
       deptoId: 559
   },
   {
       proNombre: 'Mbandaka',
       deptoId: 560
   },
   {
       proNombre: '	Boende',
       deptoId: 561
   },
   {
       proNombre: '	Kalemie',
       deptoId: 562
   },
   {
       proNombre: '	Kamina',
       deptoId: 563
   },
   {
       proNombre: '	Kolwezi',
       deptoId: 564
   },
   {
       proNombre: '	Lubumbashi',
       deptoId: 565
   },
   {
       proNombre: 'Chung-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Pyongchon-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Potonggang-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Moranbong-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Sŏsŏng-guyŏk',
       deptoId: 566
   },
   {
       proNombre: 'Songyo-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Tongdaewŏn-guyŏk',
       deptoId: 566
   },
   {
       proNombre: 'Taedonggang-guyŏk',
       deptoId: 566
   },
   {
       proNombre: 'Sadong-guyŏk',
       deptoId: 566
   },
   {
       proNombre: 'Taesong-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Mangyongdae-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Hyongjesan-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Ryongsong-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Samsok-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Ryokpo-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Nakrang-guyok ',
       deptoId: 566
   },
   {
       proNombre: 'Sunan-guyŏk',
       deptoId: 566
   },
   {
       proNombre: 'Unjong-guyok',
       deptoId: 566
   },
   {
       proNombre: 'Kangdong County',
       deptoId: 566
   },
   {
       proNombre: 'Kangnam County',
       deptoId: 566
   },
   {
       proNombre: 'Rajin-guyok',
       deptoId: 567
   },
   {
       proNombre: 'Sinŭiju ',
       deptoId: 568
   },
   {
       proNombre: 'Kaesong-si',
       deptoId: 569
   },
   {
       proNombre: 'Changpung-gun',
       deptoId: 569
   },
   {
       proNombre: 'Kaepung-gun',
       deptoId: 569
   },
   {
       proNombre: 'Panmun-gun',
       deptoId: 569
   },
   {
       proNombre: 'Región Turística de Kŭmgangsan',
       deptoId: 570
   },
   {
       proNombre: 'Chongnam',
       deptoId: 571
   },
   {
       proNombre: 'Tukchang',
       deptoId: 571
   },
   {
       proNombre: 'Ungok',
       deptoId: 571
   },
   {
       proNombre: 'Sinuiju',
       deptoId: 572
   },
   {
       proNombre: 'Changgang-gun',
       deptoId: 573
   },
   {
       proNombre: 'Chasong-gun',
       deptoId: 573
   },
   {
       proNombre: 'Chonchon-gun',
       deptoId: 573
   },
   {
       proNombre: 'Chosan-gun',
       deptoId: 573
   },
   {
       proNombre: 'Chunggang-gun',
       deptoId: 573
   },
   {
       proNombre: 'Hwapyong-gun',
       deptoId: 573
   },
   {
       proNombre: 'Kopung-gun',
       deptoId: 573
   },
   {
       proNombre: 'Rangrim-gun',
       deptoId: 573
   },
   {
       proNombre: 'Ryongrim-gun',
       deptoId: 573
   },
   {
       proNombre: 'Sijung-gun',
       deptoId: 573
   },
   {
       proNombre: 'Songgan-gun',
       deptoId: 573
   },
   {
       proNombre: 'Songwon-gun',
       deptoId: 573
   },
   {
       proNombre: 'Usi-gun',
       deptoId: 573
   },
   {
       proNombre: 'Wiwon-gun',
       deptoId: 573
   },
   {
       proNombre: 'Tongsin-gun',
       deptoId: 573
   },
   {
       proNombre: 'Haeju',
       deptoId: 574
   },
   {
       proNombre: 'Sariwŏn',
       deptoId: 575
   },
   {
       proNombre: 'Condado de Cheorwon ',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Goseong',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Hoengseong',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Hongcheon',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Hwacheon',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Inje',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Jeongseon',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Pyeongchang',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Yanggu ',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Yangyang',
       deptoId: 576
   },
   {
       proNombre: 'Condado de Yeongwol',
       deptoId: 576
   },
   {
       proNombre: 'Changjin-gun',
       deptoId: 577
   },
   {
       proNombre: 'Chongpyong-gun',
       deptoId: 577
   },
   {
       proNombre: 'Hamju-gun',
       deptoId: 577
   },
   {
       proNombre: 'Hochon-gun',
       deptoId: 577
   },
   {
       proNombre: 'Hongwon-gun',
       deptoId: 577
   },
   {
       proNombre: 'Kowon-gun',
       deptoId: 577
   },
   {
       proNombre: 'Kumya-gun',
       deptoId: 577
   },
   {
       proNombre: 'Pujon-gun',
       deptoId: 577
   },
   {
       proNombre: 'Pukchong-gun',
       deptoId: 577
   },
   {
       proNombre: 'Ragwon-gun',
       deptoId: 577
   },
   {
       proNombre: 'Riwon-gun',
       deptoId: 577
   },
   {
       proNombre: 'Sinhung-gun',
       deptoId: 577
   },
   {
       proNombre: 'Toksong-gun',
       deptoId: 577
   },
   {
       proNombre: 'Yonggwang-gun',
       deptoId: 577
   },
   {
       proNombre: 'Yodok County-gun',
       deptoId: 577
   },
   {
       proNombre: 'Hwasŏng-gun',
       deptoId: 578
   },
   {
       proNombre: 'Hwadae-gun',
       deptoId: 578
   },
   {
       proNombre: 'Kilchu-gun',
       deptoId: 578
   },
   {
       proNombre: 'Kyŏngsŏng-gun',
       deptoId: 578
   },
   {
       proNombre: 'Musan-gun ',
       deptoId: 578
   },
   {
       proNombre: "Myŏngch'ŏn-gun",
       deptoId: 578
   },
   {
       proNombre: 'Onsŏng-gun',
       deptoId: 578
   },
   {
       proNombre: 'Ŏrang-gun',
       deptoId: 578
   },
   {
       proNombre: 'Puryŏng-gun',
       deptoId: 578
   },
   {
       proNombre: 'Saebyŏl-gun',
       deptoId: 578
   },
   {
       proNombre: 'Ŭndŏk-gun',
       deptoId: 578
   },
   {
       proNombre: 'Yŏnsa-gun',
       deptoId: 578
   },
   {
       proNombre: 'Hyesan',
       deptoId: 579
   },

   {
       proNombre: 'Dobong-gu',
       deptoId: 580
   },
   {
       proNombre: 'Dongdaemun-gu ',
       deptoId: 580
   },
   {
       proNombre: 'Dongjak-gu ',
       deptoId: 580
   },
   {
       proNombre: 'Eunpyeong-gu',
       deptoId: 580
   },
   {
       proNombre: 'Gangbuk-gu',
       deptoId: 580
   },
   {
       proNombre: 'Gangdong-gu',
       deptoId: 580
   },
   {
       proNombre: 'Gangnam-gu',
       deptoId: 580
   },
   {
       proNombre: 'Gangseo-gu ',
       deptoId: 580
   },
   {
       proNombre: 'Gangseo-gu ',
       deptoId: 580
   },
   {
       proNombre: 'Guro-gu',
       deptoId: 580
   },
   {
       proNombre: 'Gwanak-gu',
       deptoId: 580
   },
   {
       proNombre: 'Gwangjin-gu',
       deptoId: 580
   },
   {
       proNombre: 'Jongno-gu',
       deptoId: 580
   },
   {
       proNombre: 'Jung-gu',
       deptoId: 580
   },
   {
       proNombre: 'Jungnang-gu',
       deptoId: 580
   },
   {
       proNombre: 'Mapo-gu',
       deptoId: 580
   },
   {
       proNombre: 'Nowon-gu',
       deptoId: 580
   },
   {
       proNombre: 'Seocho-gu',
       deptoId: 580
   },
   {
       proNombre: 'Seodaemun-gu',
       deptoId: 580
   },
   {
       proNombre: 'Seongbuk-gu ',
       deptoId: 580
   },
   {
       proNombre: 'Seongdong-gu',
       deptoId: 580
   },
   {
       proNombre: 'Songpa-gu',
       deptoId: 580
   },
   {
       proNombre: 'Yangcheon-gu',
       deptoId: 580
   },
   {
       proNombre: 'Yeongdeungpo-gu',
       deptoId: 580
   },
   {
       proNombre: 'Yongsan-gu',
       deptoId: 580
   },
   {
       proNombre: 'Distrito Daedeok',
       deptoId: 581
   },
   {
       proNombre: 'Distrito Dong',
       deptoId: 581
   },
   {
       proNombre: 'Distrito Jung',
       deptoId: 581
   },
   {
       proNombre: 'Distrito Seo',
       deptoId: 581
   },
   {
       proNombre: 'Distrito Yuseong',
       deptoId: 581
   },
   {
       proNombre: 'Buk',
       deptoId: 582
   },
   {
       proNombre: 'Dong',
       deptoId: 582
   },
   {
       proNombre: 'Gwangsan',
       deptoId: 582
   },
   {
       proNombre: 'Nam',
       deptoId: 582
   },
   {
       proNombre: 'Seo',
       deptoId: 582
   },
   {
       proNombre: 'Bupyeong-gu',
       deptoId: 583
   },
   {
       proNombre: 'Dong-gu',
       deptoId: 583
   },
   {
       proNombre: 'Gyeyang-gu',
       deptoId: 583
   },
   {
       proNombre: 'Jung-gu',
       deptoId: 583
   },
   {
       proNombre: 'Nam-gu',
       deptoId: 583
   },
   {
       proNombre: 'Namdong-gu',
       deptoId: 583
   },
   {
       proNombre: 'Seo-gu',
       deptoId: 583
   },
   {
       proNombre: 'Yeonsu-gu',
       deptoId: 583
   },
   {
       proNombre: 'Ganghwa-gun',
       deptoId: 583
   },
   {
       proNombre: 'Ongjin-gun',
       deptoId: 583
   },
   {
       proNombre: 'Distrito Buk',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Busanjin',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Dong',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Dongnae',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Gangseo',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Geumjeong',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Haeundae',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Jung',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Nam',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Saha',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Sasang',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Seo',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Suyeong',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Yeongdo',
       deptoId: 584
   },
   {
       proNombre: 'Distrito Yeonje',
       deptoId: 584
   },
   {
       proNombre: 'Condado Gijang',
       deptoId: 584
   },
   {
       proNombre: 'Buk-gu',
       deptoId: 585
   },
   {
       proNombre: 'Dalseo-gu',
       deptoId: 585
   },
   {
       proNombre: 'Dong-gu',
       deptoId: 585
   },
   {
       proNombre: 'Jung-gu',
       deptoId: 585
   },
   {
       proNombre: 'Nam-gu',
       deptoId: 585
   },
   {
       proNombre: 'Seo-gu ',
       deptoId: 585
   },
   {
       proNombre: 'Suseong-gu',
       deptoId: 585
   },
   {
       proNombre: 'Dalseong-gun',
       deptoId: 585
   },
   {
       proNombre: 'Buk',
       deptoId: 586
   },
   {
       proNombre: 'Dong',
       deptoId: 586
   },
   {
       proNombre: 'Jung',
       deptoId: 586
   },
   {
       proNombre: 'Nam',
       deptoId: 586
   },
   {
       proNombre: 'Ciudad de Jeju',
       deptoId: 587
   },
   {
       proNombre: 'Seogwipo',
       deptoId: 587
   },
   {
       proNombre: 'Odienné',
       deptoId: 588
   },
   {
       proNombre: 'Madinani ',
       deptoId: 588
   },
   {
       proNombre: 'Minignan',
       deptoId: 588
   },
   {
       proNombre: ' Boundiali',
       deptoId: 589
   },
   {
       proNombre: 'Ferkessédougou',
       deptoId: 589
   },
   {
       proNombre: 'Korhogo ',
       deptoId: 589
   },
   {
       proNombre: 'Tengréla',
       deptoId: 589
   },
   {
       proNombre: 'Touba',
       deptoId: 590
   },
   {
       proNombre: 'Mankono ',
       deptoId: 591
   },
   {
       proNombre: 'Séguéla',
       deptoId: 591
   },
   {
       proNombre: 'Béoumi',
       deptoId: 592
   },
   {
       proNombre: 'Bouaké',
       deptoId: 592
   },
   {
       proNombre: 'Dabakala',
       deptoId: 592
   },
   {
       proNombre: 'Katiola',
       deptoId: 592
   },
   {
       proNombre: 'Sakassou',
       deptoId: 592
   },
   {
       proNombre: 'Bondoukou',
       deptoId: 593
   },
   {
       proNombre: 'Bouna',
       deptoId: 593
   },
   {
       proNombre: 'Tanda',
       deptoId: 593
   },
   {
       proNombre: ' Bangolo',
       deptoId: 594
   },
   {
       proNombre: 'Biankouma',
       deptoId: 594
   },
   {
       proNombre: ' Danané',
       deptoId: 594
   },
   {
       proNombre: 'Man',
       deptoId: 594
   },
   {
       proNombre: 'Daloa',
       deptoId: 595
   },
   {
       proNombre: 'Issia ',
       deptoId: 595
   },
   {
       proNombre: 'Vavoua',
       deptoId: 595
   },
   {
       proNombre: ' Bouaflé',
       deptoId: 596
   },
   {
       proNombre: 'Sinfra',
       deptoId: 596
   },
   {
       proNombre: 'Zuánoula',
       deptoId: 596
   },
   {
       proNombre: ' Tiébissou',
       deptoId: 597
   },
   {
       proNombre: 'Toumodi',
       deptoId: 597
   },
   {
       proNombre: 'Yamusukro',
       deptoId: 597
   },
   {
       proNombre: ' Bocanda',
       deptoId: 598
   },
   {
       proNombre: 'Bongouanou',
       deptoId: 598
   },
   {
       proNombre: ' Daoukro',
       deptoId: 598
   },
   {
       proNombre: 'Dimbokro',
       deptoId: 598
   },
   {
       proNombre: ' Mbahiakro',
       deptoId: 598
   },
   {
       proNombre: 'Abengourou',
       deptoId: 599
   },
   {
       proNombre: 'Agnibilékrou',
       deptoId: 599
   },
   {
       proNombre: ' Duékoué',
       deptoId: 600
   },
   {
       proNombre: ' Guiglo',
       deptoId: 600
   },
   {
       proNombre: 'Toulépleu',
       deptoId: 600
   },
   {
       proNombre: 'Gagnoa',
       deptoId: 601
   },
   {
       proNombre: 'Oumé',
       deptoId: 601
   },
   {
       proNombre: 'Adzopé',
       deptoId: 602
   },
   {
       proNombre: ' Agboville',
       deptoId: 602
   },
   {
       proNombre: 'San Pédro',
       deptoId: 603
   },
   {
       proNombre: 'Sassandra',
       deptoId: 603
   },
   {
       proNombre: 'Soubré',
       deptoId: 603
   },
   {
       proNombre: 'Tabou',
       deptoId: 603
   },
   {
       proNombre: 'Divo ',
       deptoId: 604
   },
   {
       proNombre: 'Lakota',
       deptoId: 604
   },
   {
       proNombre: 'Abiyán',
       deptoId: 605
   },
   {
       proNombre: 'Alépé',
       deptoId: 605
   },
   {
       proNombre: 'Alépé',
       deptoId: 605
   },
   {
       proNombre: 'Grand-Lahou',
       deptoId: 605
   },
   {
       proNombre: 'Jacquesville',
       deptoId: 605
   },
   {
       proNombre: 'Tiassalé',
       deptoId: 605
   },
   {
       proNombre: ' Aboisso,',
       deptoId: 606
   },
   {
       proNombre: ' Adiaké',
       deptoId: 606
   },
   {
       proNombre: 'Grand-Bassam',
       deptoId: 606
   },
   {
       proNombre: 'San José',
       deptoId: 607
   },
   {
       proNombre: 'Escazú',
       deptoId: 607
   },
   {
       proNombre: 'Desamparados',
       deptoId: 607
   },
   {
       proNombre: 'Puriscal',
       deptoId: 607
   },
   {
       proNombre: 'Tarrazú',
       deptoId: 607
   },
   {
       proNombre: 'Aserrí',
       deptoId: 607
   },
   {
       proNombre: 'Mora',
       deptoId: 607
   },
   {
       proNombre: 'Goicoechea',
       deptoId: 607
   },
   {
       proNombre: 'Santa Ana',
       deptoId: 607
   },
   {
       proNombre: 'Alajuelita',
       deptoId: 607
   },
   {
       proNombre: 'Vázquez de Coronado',
       deptoId: 607
   },
   {
       proNombre: 'Acosta',
       deptoId: 607
   },
   {
       proNombre: 'Tibás',
       deptoId: 607
   },
   {
       proNombre: 'Moravia',
       deptoId: 607
   },
   {
       proNombre: 'Montes de Oca',
       deptoId: 607
   },
   {
       proNombre: 'Turrubares',
       deptoId: 607
   },
   {
       proNombre: 'Dota',
       deptoId: 607
   },
   {
       proNombre: 'Curridabat',
       deptoId: 607
   },
   {
       proNombre: 'Pérez Zeledón',
       deptoId: 607
   },
   {
       proNombre: 'León Cortés',
       deptoId: 607
   },
   {
       proNombre: 'Alajuela',
       deptoId: 608
   },
   {
       proNombre: 'San Ramón',
       deptoId: 608
   },
   {
       proNombre: 'Grecia',
       deptoId: 608
   },
   {
       proNombre: 'San Mateo',
       deptoId: 608
   },
   {
       proNombre: 'Atenas',
       deptoId: 608
   },
   {
       proNombre: 'Naranjo',
       deptoId: 608
   },
   {
       proNombre: 'Palmares',
       deptoId: 608
   },
   {
       proNombre: 'Poás',
       deptoId: 608
   },
   {
       proNombre: 'Orotina',
       deptoId: 608
   },
   {
       proNombre: 'San Carlos',
       deptoId: 608
   },
   {
       proNombre: 'Zarcero',
       deptoId: 608
   },
   {
       proNombre: 'Valverde Vega',
       deptoId: 608
   },
   {
       proNombre: 'Upala',
       deptoId: 608
   },
   {
       proNombre: 'Los Chiles',
       deptoId: 608
   },
   {
       proNombre: 'Guatuso',
       deptoId: 608
   },
   {
       proNombre: 'Cartago',
       deptoId: 609
   },
   {
       proNombre: 'Paraíso',
       deptoId: 609
   },
   {
       proNombre: 'La Unión',
       deptoId: 609
   },
   {
       proNombre: 'Jiménez',
       deptoId: 609
   },
   {
       proNombre: 'Turrialba',
       deptoId: 609
   },
   {
       proNombre: 'Alvarado',
       deptoId: 609
   },
   {
       proNombre: 'Oreamuno',
       deptoId: 609
   },
   {
       proNombre: 'El Guarco',
       deptoId: 609
   },
   {
       proNombre: 'Heredia',
       deptoId: 610
   },
   {
       proNombre: 'Barva',
       deptoId: 610
   },
   {
       proNombre: 'Santo Domingo',
       deptoId: 610
   },
   {
       proNombre: 'Santa Bárbara',
       deptoId: 610
   },
   {
       proNombre: 'San Rafael',
       deptoId: 610
   },
   {
       proNombre: 'San Isidro',
       deptoId: 610
   },
   {
       proNombre: 'Belén',
       deptoId: 610
   },
   {
       proNombre: 'Flores',
       deptoId: 610
   },
   {
       proNombre: 'San Pablo',
       deptoId: 610
   },
   {
       proNombre: 'Sarapiquí',
       deptoId: 610
   },
   {
       proNombre: 'Liberia',
       deptoId: 611
   },
   {
       proNombre: 'Nicoya',
       deptoId: 611
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 611
   },
   {
       proNombre: 'Bagaces',
       deptoId: 611
   },
   {
       proNombre: 'Carrillo',
       deptoId: 611
   },
   {
       proNombre: 'Cañas',
       deptoId: 611
   },
   {
       proNombre: 'Abangares',
       deptoId: 611
   },
   {
       proNombre: 'Tilarán',
       deptoId: 611
   },
   {
       proNombre: 'Nandayure',
       deptoId: 611
   },
   {
       proNombre: 'La Cruz',
       deptoId: 611
   },
   {
       proNombre: 'Hojancha',
       deptoId: 611
   },
   {
       proNombre: 'Puntarenas',
       deptoId: 612
   },
   {
       proNombre: 'Esparza',
       deptoId: 612
   },
   {
       proNombre: 'Buenos Aires',
       deptoId: 612
   },
   {
       proNombre: 'Montes de Oro',
       deptoId: 612
   },
   {
       proNombre: 'Osa',
       deptoId: 612
   },
   {
       proNombre: 'Quepos',
       deptoId: 612
   },
   {
       proNombre: 'Golfito',
       deptoId: 612
   },
   {
       proNombre: 'Coto Brus',
       deptoId: 612
   },
   {
       proNombre: 'Parrita',
       deptoId: 612
   },
   {
       proNombre: 'Corredores',
       deptoId: 612
   },
   {
       proNombre: 'Garabito',
       deptoId: 612
   },
   {
       proNombre: 'Limón',
       deptoId: 613
   },
   {
       proNombre: 'Pococí',
       deptoId: 613
   },
   {
       proNombre: 'Siquirres',
       deptoId: 613
   },
   {
       proNombre: 'Talamanca',
       deptoId: 613
   },
   {
       proNombre: 'Matina',
       deptoId: 613
   },
   {
       proNombre: 'Guácimo',
       deptoId: 613
   },
   {
       proNombre: 'Dugo Selo',
       deptoId: 614
   },
   {
       proNombre: 'Ivanić-Grad',
       deptoId: 614
   },
   {
       proNombre: 'Jastrebarsko',
       deptoId: 614
   },
   {
       proNombre: 'Samobor',
       deptoId: 614
   },
   {
       proNombre: 'Sveta Nedelja',
       deptoId: 614
   },
   {
       proNombre: 'Sveti Ivan Zelina',
       deptoId: 614
   },
   {
       proNombre: 'Velika Gorica',
       deptoId: 614
   },
   {
       proNombre: 'Vrbovec',
       deptoId: 614
   },
   {
       proNombre: 'Zaprešić',
       deptoId: 614
   },
   {
       proNombre: 'Donja Stubica',
       deptoId: 615
   },
   {
       proNombre: 'Klanjec',
       deptoId: 615
   },
   {
       proNombre: 'Krapina',
       deptoId: 615
   },
   {
       proNombre: 'Oroslavje',
       deptoId: 615
   },
   {
       proNombre: 'Pregrada',
       deptoId: 615
   },
   {
       proNombre: 'Zabok',
       deptoId: 615
   },
   {
       proNombre: 'Zlatar',
       deptoId: 615
   },
   {
       proNombre: 'Glina',
       deptoId: 616
   },
   {
       proNombre: 'Hrvatska Kostajnica',
       deptoId: 616
   },
   {
       proNombre: 'Kutina',
       deptoId: 616
   },
   {
       proNombre: 'Novska',
       deptoId: 616
   },
   {
       proNombre: 'Petrinja',
       deptoId: 616
   },
   {
       proNombre: 'Sisak',
       deptoId: 616
   },
   {
       proNombre: 'Duga Resa',
       deptoId: 617
   },
   {
       proNombre: 'Karlovac',
       deptoId: 617
   },
   {
       proNombre: 'Ogulin',
       deptoId: 617
   },
   {
       proNombre: 'Ozalj',
       deptoId: 617
   },
   {
       proNombre: 'Slunj',
       deptoId: 617
   },
   {
       proNombre: 'Ivanec',
       deptoId: 618
   },
   {
       proNombre: 'Lepoglava',
       deptoId: 618
   },
   {
       proNombre: 'Ludbreg',
       deptoId: 618
   },
   {
       proNombre: 'Novi Marof',
       deptoId: 618
   },
   {
       proNombre: 'Varaždin',
       deptoId: 618
   },
   {
       proNombre: 'Varaždinske Toplice',
       deptoId: 618
   },
   {
       proNombre: 'Đurđevac',
       deptoId: 619
   },
   {
       proNombre: 'Koprivnica',
       deptoId: 619
   },
   {
       proNombre: 'Križevci',
       deptoId: 619
   },
   {
       proNombre: 'Bjelovar',
       deptoId: 620
   },
   {
       proNombre: 'Čazma',
       deptoId: 620
   },
   {
       proNombre: 'Daruvar',
       deptoId: 620
   },
   {
       proNombre: 'Garešnica',
       deptoId: 620
   },
   {
       proNombre: 'Grubišno Polje',
       deptoId: 620
   },
   {
       proNombre: 'Bakar',
       deptoId: 621
   },
   {
       proNombre: 'Cres',
       deptoId: 621
   },
   {
       proNombre: 'Crikvenica',
       deptoId: 621
   },
   {
       proNombre: 'Čabar',
       deptoId: 621
   },
   {
       proNombre: 'Delnice',
       deptoId: 621
   },
   {
       proNombre: 'Kastav',
       deptoId: 621
   },
   {
       proNombre: 'Kraljevica',
       deptoId: 621
   },
   {
       proNombre: 'Krk',
       deptoId: 621
   },
   {
       proNombre: 'Mali Lošinj',
       deptoId: 621
   },
   {
       proNombre: 'Novi Vinodolski',
       deptoId: 621
   },
   {
       proNombre: 'Opatija',
       deptoId: 621
   },
   {
       proNombre: 'Rab',
       deptoId: 621
   },
   {
       proNombre: 'Rijeka',
       deptoId: 621
   },
   {
       proNombre: 'Vrbovsko',
       deptoId: 621
   },
   {
       proNombre: 'Gospić',
       deptoId: 622
   },
   {
       proNombre: 'Novalja',
       deptoId: 622
   },
   {
       proNombre: 'Otočac',
       deptoId: 622
   },
   {
       proNombre: 'Senj',
       deptoId: 622
   },
   {
       proNombre: 'Orahovica',
       deptoId: 623
   },
   {
       proNombre: 'Slatina',
       deptoId: 623
   },
   {
       proNombre: 'Virovitica',
       deptoId: 623
   },
   {
       proNombre: 'Kutjevo',
       deptoId: 624
   },
   {
       proNombre: 'Lipik',
       deptoId: 624
   },
   {
       proNombre: 'Pakrac',
       deptoId: 624
   },
   {
       proNombre: 'Pakrac',
       deptoId: 624
   },
   {
       proNombre: 'Požega',
       deptoId: 624
   },
   {
       proNombre: 'Nova iška',
       deptoId: 625
   },
   {
       proNombre: 'Slavonski Brod',
       deptoId: 625
   },
   {
       proNombre: 'Benkovac',
       deptoId: 626
   },
   {
       proNombre: 'Biograd na Moru',
       deptoId: 626
   },
   {
       proNombre: 'Nin',
       deptoId: 626
   },
   {
       proNombre: 'Obrovac',
       deptoId: 626
   },
   {
       proNombre: 'Pag',
       deptoId: 626
   },
   {
       proNombre: 'Zadar',
       deptoId: 626
   },
   {
       proNombre: 'Beli Manastir',
       deptoId: 627
   },
   {
       proNombre: 'Belišće',
       deptoId: 627
   },
   {
       proNombre: 'Donji Miholjac',
       deptoId: 627
   },
   {
       proNombre: 'Đakovo',
       deptoId: 627
   },
   {
       proNombre: 'Našice',
       deptoId: 627
   },
   {
       proNombre: 'Osijek',
       deptoId: 627
   },
   {
       proNombre: 'Valpovo',
       deptoId: 627
   },
   {
       proNombre: 'Drniš',
       deptoId: 628
   },
   {
       proNombre: 'Knin',
       deptoId: 628
   },
   {
       proNombre: 'Skradin',
       deptoId: 628
   },
   {
       proNombre: 'Šibenik',
       deptoId: 628
   },
   {
       proNombre: 'Šibenik',
       deptoId: 628
   },
   {
       proNombre: 'Ilok',
       deptoId: 629
   },
   {
       proNombre: 'Otok',
       deptoId: 629
   },
   {
       proNombre: 'Vinkovci',
       deptoId: 629
   },
   {
       proNombre: 'Vukovar',
       deptoId: 629
   },
   {
       proNombre: 'Županja',
       deptoId: 629
   },
   {
       proNombre: 'Hvar',
       deptoId: 630
   },
   {
       proNombre: 'Imotski',
       deptoId: 630
   },
   {
       proNombre: 'Kaštela',
       deptoId: 630
   },
   {
       proNombre: 'Komiža',
       deptoId: 630
   },
   {
       proNombre: 'Makarska',
       deptoId: 630
   },
   {
       proNombre: 'Omiš',
       deptoId: 630
   },
   {
       proNombre: 'Sinj',
       deptoId: 630
   },
   {
       proNombre: 'Solin',
       deptoId: 630
   },
   {
       proNombre: 'Split',
       deptoId: 630
   },
   {
       proNombre: 'Stari',
       deptoId: 630
   },
   {
       proNombre: 'Supetar',
       deptoId: 630
   },
   {
       proNombre: 'Trilj',
       deptoId: 630
   },
   {
       proNombre: 'Trogir',
       deptoId: 630
   },
   {
       proNombre: 'Vis',
       deptoId: 630
   },
   {
       proNombre: 'Vrgorac',
       deptoId: 630
   },
   {
       proNombre: 'Vrlika',
       deptoId: 630
   },
   {
       proNombre: 'Buje',
       deptoId: 631
   },
   {
       proNombre: 'Buzet',
       deptoId: 631
   },
   {
       proNombre: 'Labin',
       deptoId: 631
   },
   {
       proNombre: 'Novigrad',
       deptoId: 631
   },
   {
       proNombre: 'Pazin',
       deptoId: 631
   },
   {
       proNombre: 'Poreč',
       deptoId: 631
   },
   {
       proNombre: 'Pula',
       deptoId: 631
   },
   {
       proNombre: 'Rovinj',
       deptoId: 631
   },
   {
       proNombre: 'Umag',
       deptoId: 631
   },
   {
       proNombre: 'Vodnjan',
       deptoId: 631
   },
   {
       proNombre: 'Dubrovnik',
       deptoId: 632
   },
   {
       proNombre: 'Korčula',
       deptoId: 632
   },
   {
       proNombre: 'Metković',
       deptoId: 632
   },
   {
       proNombre: 'Opuzen',
       deptoId: 632
   },
   {
       proNombre: 'Ploče',
       deptoId: 632
   },
   {
       proNombre: 'Čakovec',
       deptoId: 633
   },
   {
       proNombre: 'Mursko Središće',
       deptoId: 633
   },
   {
       proNombre: 'Prelog',
       deptoId: 633
   },
   {
       proNombre: 'Zagreb',
       deptoId: 634
   },
   {
       proNombre: 'Consolación del Sur',
       deptoId: 635
   },
   {
       proNombre: 'Guane',
       deptoId: 635
   },
   {
       proNombre: 'La Palma',
       deptoId: 635
   },
   {
       proNombre: 'Los Palacios	',
       deptoId: 635
   },
   {
       proNombre: 'Mantua',
       deptoId: 635
   },
   {
       proNombre: 'Minas de Matahambre',
       deptoId: 635
   },
   {
       proNombre: 'Pinar del Río',
       deptoId: 635
   },
   {
       proNombre: 'San Juan y Martínez',
       deptoId: 635
   },
   {
       proNombre: 'San Luis',
       deptoId: 635
   },
   {
       proNombre: 'Sandino',
       deptoId: 635
   },
   {
       proNombre: 'Viñales',
       deptoId: 635
   },
   {
       proNombre: 'Mariel',
       deptoId: 636
   },
   {
       proNombre: 'Guanajay',
       deptoId: 636
   },
   {
       proNombre: 'Caimito',
       deptoId: 636
   },
   {
       proNombre: 'Bauta',
       deptoId: 636
   },
   {
       proNombre: 'San Antonio de los Baños',
       deptoId: 636
   },
   {
       proNombre: 'Güira de Melena',
       deptoId: 636
   },
   {
       proNombre: 'Alquízar',
       deptoId: 636
   },
   {
       proNombre: 'Artemisa',
       deptoId: 636
   },
   {
       proNombre: 'Bahía Honda',
       deptoId: 636
   },
   {
       proNombre: 'Candelaria',
       deptoId: 636
   },
   {
       proNombre: 'San Cristóbal',
       deptoId: 636
   },
   {
       proNombre: 'Arroyo Naranjo',
       deptoId: 637
   },
   {
       proNombre: 'Boyeros',
       deptoId: 637
   },
   {
       proNombre: 'Centro Habana',
       deptoId: 637
   },
   {
       proNombre: 'Cerro',
       deptoId: 637
   },
   {
       proNombre: 'Cotorro',
       deptoId: 637
   },
   {
       proNombre: 'Diez de Octubre',
       deptoId: 637
   },
   {
       proNombre: 'Guanabacoa',
       deptoId: 637
   },
   {
       proNombre: 'La Habana del Este',
       deptoId: 637
   },
   {
       proNombre: 'La Habana Vieja',
       deptoId: 637
   },
   {
       proNombre: 'La Lisa',
       deptoId: 637
   },
   {
       proNombre: 'Marianao',
       deptoId: 637
   },
   {
       proNombre: 'Playa',
       deptoId: 637
   },
   {
       proNombre: 'Plaza de la Revolución',
       deptoId: 637
   },
   {
       proNombre: 'Regla',
       deptoId: 637
   },
   {
       proNombre: 'San Miguel del Padrón',
       deptoId: 637
   },
   {
       proNombre: 'Bejucal',
       deptoId: 638
   },
   {
       proNombre: 'San José de las Lajas',
       deptoId: 638
   },
   {
       proNombre: 'Jaruco',
       deptoId: 638
   },
   {
       proNombre: 'Santa Cruz del Norte',
       deptoId: 638
   },
   {
       proNombre: 'Madruga',
       deptoId: 638
   },
   {
       proNombre: 'Nueva Paz',
       deptoId: 638
   },
   {
       proNombre: 'San Nicolás de Bari',
       deptoId: 638
   },
   {
       proNombre: 'Güines',
       deptoId: 638
   },
   {
       proNombre: 'Melena del Sur',
       deptoId: 638
   },
   {
       proNombre: 'Batabanó',
       deptoId: 638
   },
   {
       proNombre: 'Quivicán',
       deptoId: 638
   },
   {
       proNombre: 'Calimete',
       deptoId: 639
   },
   {
       proNombre: 'Cárdenas',
       deptoId: 639
   },
   {
       proNombre: 'Ciénaga de Zapata',
       deptoId: 639
   },
   {
       proNombre: 'Colón',
       deptoId: 639
   },
   {
       proNombre: 'Jagüey Grande',
       deptoId: 639
   },
   {
       proNombre: 'Jovellanos',
       deptoId: 639
   },
   {
       proNombre: 'Limonar',
       deptoId: 639
   },
   {
       proNombre: 'Los Arabos',
       deptoId: 639
   },
   {
       proNombre: 'Martí',
       deptoId: 639
   },
   {
       proNombre: 'Matanzas',
       deptoId: 639
   },
   {
       proNombre: 'Pedro Betancourt',
       deptoId: 639
   },
   {
       proNombre: 'Perico',
       deptoId: 639
   },
   {
       proNombre: 'Unión de Reyes',
       deptoId: 639
   },
   {
       proNombre: 'Abreus',
       deptoId: 640
   },
   {
       proNombre: 'Aguada de Pasajeros',
       deptoId: 640
   },
   {
       proNombre: 'Cienfuegos',
       deptoId: 640
   },
   {
       proNombre: 'Cruces',
       deptoId: 640
   },
   {
       proNombre: 'Cumanayagua',
       deptoId: 640
   },
   {
       proNombre: 'Lajas',
       deptoId: 640
   },
   {
       proNombre: 'Palmira',
       deptoId: 640
   },
   {
       proNombre: 'Rodas',
       deptoId: 640
   },
   {
       proNombre: 'Caibarién',
       deptoId: 641
   },
   {
       proNombre: 'Camajuaní',
       deptoId: 641
   },
   {
       proNombre: 'Cifuentes',
       deptoId: 641
   },
   {
       proNombre: 'Corralillo',
       deptoId: 641
   },
   {
       proNombre: 'Encrucijada',
       deptoId: 641
   },
   {
       proNombre: 'Manicaragua',
       deptoId: 641
   },
   {
       proNombre: 'Placetas',
       deptoId: 641
   },
   {
       proNombre: 'Quemado de Güines',
       deptoId: 641
   },
   {
       proNombre: 'Ranchuelo',
       deptoId: 641
   },
   {
       proNombre: 'Remedios',
       deptoId: 641
   },
   {
       proNombre: 'Sagua la Grande',
       deptoId: 641
   },
   {
       proNombre: 'Santa Clara',
       deptoId: 641
   },
   {
       proNombre: 'Santo Domingo',
       deptoId: 641
   },
   {
       proNombre: 'Sancti Spíritus',
       deptoId: 642
   },
   {
       proNombre: 'Trinidad',
       deptoId: 642
   },
   {
       proNombre: 'Cabaiguán',
       deptoId: 642
   },
   {
       proNombre: 'Yaguajay',
       deptoId: 642
   },
   {
       proNombre: 'Jatibonico',
       deptoId: 642
   },
   {
       proNombre: 'Taguasco',
       deptoId: 642
   },
   {
       proNombre: 'Fomento',
       deptoId: 642
   },
   {
       proNombre: 'La Sierpe',
       deptoId: 642
   },
   {
       proNombre: 'Ciego de Ávila',
       deptoId: 643
   },
   {
       proNombre: 'Morón',
       deptoId: 643
   },
   {
       proNombre: 'Chambas',
       deptoId: 643
   },
   {
       proNombre: 'Ciro Redondo',
       deptoId: 643
   },
   {
       proNombre: 'Majagua',
       deptoId: 643
   },
   {
       proNombre: 'Florencia',
       deptoId: 643
   },
   {
       proNombre: 'Venezuela',
       deptoId: 643
   },
   {
       proNombre: 'Baraguá',
       deptoId: 643
   },
   {
       proNombre: 'Primero de Enero',
       deptoId: 643
   },
   {
       proNombre: 'Bolivia',
       deptoId: 643
   },
   {
       proNombre: 'Camagüey',
       deptoId: 644
   },
   {
       proNombre: 'Guáimaro',
       deptoId: 644
   },
   {
       proNombre: 'Nuevitas',
       deptoId: 644
   },
   {
       proNombre: 'Céspedes',
       deptoId: 644
   },
   {
       proNombre: 'Jimaguayú',
       deptoId: 644
   },
   {
       proNombre: 'Sibanicú',
       deptoId: 644
   },
   {
       proNombre: 'Esmeralda',
       deptoId: 644
   },
   {
       proNombre: 'Minas',
       deptoId: 644
   },
   {
       proNombre: 'Sierra de Cubitas',
       deptoId: 644
   },
   {
       proNombre: 'Florida',
       deptoId: 644
   },
   {
       proNombre: 'Najasa',
       deptoId: 644
   },
   {
       proNombre: 'Vertientes',
       deptoId: 644
   },
   {
       proNombre: 'Santa Cruz del Sur',
       deptoId: 644
   },
   {
       proNombre: 'Manatí',
       deptoId: 645
   },
   {
       proNombre: 'Puerto Padre',
       deptoId: 645
   },
   {
       proNombre: 'Jesús Menéndez',
       deptoId: 645
   },
   {
       proNombre: 'Majibacoa',
       deptoId: 645
   },
   {
       proNombre: 'Las Tunas',
       deptoId: 645
   },
   {
       proNombre: 'Jobabo',
       deptoId: 645
   },
   {
       proNombre: 'Colombia',
       deptoId: 645
   },
   {
       proNombre: 'Amancio',
       deptoId: 645
   },
   {
       proNombre: 'Bartolomé Masó',
       deptoId: 646
   },
   {
       proNombre: 'Bayamo',
       deptoId: 646
   },
   {
       proNombre: 'Buey Arriba',
       deptoId: 646
   },
   {
       proNombre: 'Campechuela',
       deptoId: 646
   },
   {
       proNombre: 'Cauto Cristo',
       deptoId: 646
   },
   {
       proNombre: 'Guisa',
       deptoId: 646
   },
   {
       proNombre: 'Jiguaní',
       deptoId: 646
   },
   {
       proNombre: 'Manzanillo',
       deptoId: 646
   },
   {
       proNombre: 'Media Luna',
       deptoId: 646
   },
   {
       proNombre: 'Niquero',
       deptoId: 646
   },
   {
       proNombre: 'Pilón',
       deptoId: 646
   },
   {
       proNombre: 'Río Cauto',
       deptoId: 646
   },
   {
       proNombre: 'Yara',
       deptoId: 646
   },
   {
       proNombre: 'Antilla',
       deptoId: 647
   },
   {
       proNombre: 'Báguanos',
       deptoId: 647
   },
   {
       proNombre: 'Banes',
       deptoId: 647
   },
   {
       proNombre: 'Cacocum',
       deptoId: 647
   },
   {
       proNombre: 'Calixto García',
       deptoId: 647
   },
   {
       proNombre: 'Cueto',
       deptoId: 647
   },
   {
       proNombre: 'Frank País',
       deptoId: 647
   },
   {
       proNombre: 'Gibara',
       deptoId: 647
   },
   {
       proNombre: 'Holguín',
       deptoId: 647
   },
   {
       proNombre: 'Mayarí',
       deptoId: 647
   },
   {
       proNombre: 'Moa',
       deptoId: 647
   },
   {
       proNombre: 'Rafael Freyre',
       deptoId: 647
   },
   {
       proNombre: 'Sagua de Tánamo',
       deptoId: 647
   },
   {
       proNombre: 'Urbano Noris',
       deptoId: 647
   },
   {
       proNombre: 'Contramaestre',
       deptoId: 648
   },
   {
       proNombre: 'Guamá',
       deptoId: 648
   },
   {
       proNombre: 'Mella',
       deptoId: 648
   },
   {
       proNombre: 'Palma Soriano',
       deptoId: 648
   },
   {
       proNombre: 'San Luis',
       deptoId: 648
   },
   {
       proNombre: 'Santiago de Cuba',
       deptoId: 648
   },
   {
       proNombre: 'Segundo Frente',
       deptoId: 648
   },
   {
       proNombre: 'Songo-La Maya',
       deptoId: 648
   },
   {
       proNombre: 'Tercer Frente',
       deptoId: 648
   },
   {
       proNombre: 'Baracoa',
       deptoId: 649
   },
   {
       proNombre: 'Caimanera',
       deptoId: 649
   },
   {
       proNombre: 'El Salvador',
       deptoId: 649
   },
   {
       proNombre: 'Guantánamo',
       deptoId: 649
   },
   {
       proNombre: 'Imías',
       deptoId: 649
   },
   {
       proNombre: 'Maisí',
       deptoId: 649
   },
   {
       proNombre: 'Manuel Tames',
       deptoId: 649
   },
   {
       proNombre: 'Niceto Pérez',
       deptoId: 649
   },
   {
       proNombre: 'San Antonio del Sur',
       deptoId: 649
   },
   {
       proNombre: 'Yateras',
       deptoId: 649
   },
   {
       proNombre: 'Nueva Gerona',
       deptoId: 650
   },
   {
       proNombre: 'Albertslund',
       deptoId: 651
   },
   {
       proNombre: 'Allerød',
       deptoId: 651
   },
   {
       proNombre: 'Ballerup',
       deptoId: 651
   },
   {
       proNombre: 'Bornholm',
       deptoId: 651
   },
   {
       proNombre: 'Brøndby',
       deptoId: 651
   },
   {
       proNombre: 'Copenhague',
       deptoId: 651
   },
   {
       proNombre: 'Dragør',
       deptoId: 651
   },
   {
       proNombre: 'Egedal',
       deptoId: 651
   },
   {
       proNombre: 'Elsinor',
       deptoId: 651
   },
   {
       proNombre: 'Fredensborg',
       deptoId: 651
   },
   {
       proNombre: 'Frederiksberg',
       deptoId: 651
   },
   {
       proNombre: 'Frederikssund',
       deptoId: 651
   },
   {
       proNombre: 'Furesø',
       deptoId: 651
   },
   {
       proNombre: 'Gentofte',
       deptoId: 651
   },
   {
       proNombre: 'Gladsaxe',
       deptoId: 651
   },
   {
       proNombre: 'Glostrup',
       deptoId: 651
   },
   {
       proNombre: 'Gribskov',
       deptoId: 651
   },
   {
       proNombre: 'Halsnæs',
       deptoId: 651
   },
   {
       proNombre: 'Herlev',
       deptoId: 651
   },
   {
       proNombre: 'Hillerød',
       deptoId: 651
   },
   {
       proNombre: 'Hvidovre',
       deptoId: 651
   },
   {
       proNombre: 'Høje-Taastrup',
       deptoId: 651
   },
   {
       proNombre: 'Hørsholm',
       deptoId: 651
   },
   {
       proNombre: 'Ishøj',
       deptoId: 651
   },
   {
       proNombre: 'Lyngby-Taarbæk',
       deptoId: 651
   },
   {
       proNombre: 'Rudersdal',
       deptoId: 651
   },
   {
       proNombre: 'Rødovre',
       deptoId: 651
   },
   {
       proNombre: 'Tårnby',
       deptoId: 651
   },
   {
       proNombre: 'Vallensbæk',
       deptoId: 651
   },
   {
       proNombre: 'Århus',
       deptoId: 652
   },
   {
       proNombre: 'Favrskov',
       deptoId: 652
   },
   {
       proNombre: 'Hedensted',
       deptoId: 652
   },
   {
       proNombre: 'Herning',
       deptoId: 652
   },
   {
       proNombre: 'Holstebro',
       deptoId: 652
   },
   {
       proNombre: 'Holstebro',
       deptoId: 652
   },
   {
       proNombre: 'Ikast-Brande',
       deptoId: 652
   },
   {
       proNombre: 'Lemvig',
       deptoId: 652
   },
   {
       proNombre: 'Norddjurs',
       deptoId: 652
   },
   {
       proNombre: 'Odder',
       deptoId: 652
   },
   {
       proNombre: 'Randers',
       deptoId: 652
   },
   {
       proNombre: 'Ringkøbing-Skjern',
       deptoId: 652
   },
   {
       proNombre: 'Samsø',
       deptoId: 652
   },
   {
       proNombre: 'Silkeborg',
       deptoId: 652
   },
   {
       proNombre: 'Skanderborg',
       deptoId: 652
   },
   {
       proNombre: 'Skive',
       deptoId: 652
   },
   {
       proNombre: 'Struer',
       deptoId: 652
   },
   {
       proNombre: 'Syddjurs',
       deptoId: 652
   },
   {
       proNombre: 'Viborg',
       deptoId: 652
   },
   {
       proNombre: 'Aabenraa',
       deptoId: 653
   },
   {
       proNombre: 'Ærø',
       deptoId: 653
   },
   {
       proNombre: 'Assens',
       deptoId: 653
   },
   {
       proNombre: 'Billund',
       deptoId: 653
   },
   {
       proNombre: 'Esbjerg',
       deptoId: 653
   },
   {
       proNombre: 'Faaborg-Midtfyn',
       deptoId: 653
   },
   {
       proNombre: 'Fanø',
       deptoId: 653
   },
   {
       proNombre: 'Fredericia',
       deptoId: 653
   },
   {
       proNombre: 'Haderslev',
       deptoId: 653
   },
   {
       proNombre: 'Kerteminde',
       deptoId: 653
   },
   {
       proNombre: 'Kolding',
       deptoId: 653
   },
   {
       proNombre: 'Langeland',
       deptoId: 653
   },
   {
       proNombre: 'Middelfart',
       deptoId: 653
   },
   {
       proNombre: 'Nordfyn',
       deptoId: 653
   },
   {
       proNombre: 'Nyborg',
       deptoId: 653
   },
   {
       proNombre: 'Odense',
       deptoId: 653
   },
   {
       proNombre: 'Sønderborg',
       deptoId: 653
   },
   {
       proNombre: 'Svendborg',
       deptoId: 653
   },
   {
       proNombre: 'Tønder',
       deptoId: 653
   },
   {
       proNombre: 'Varde',
       deptoId: 653
   },
   {
       proNombre: 'Vejen',
       deptoId: 653
   },
   {
       proNombre: 'Vejle',
       deptoId: 653
   },
   {
       proNombre: 'Faxe',
       deptoId: 654
   },
   {
       proNombre: 'Greve',
       deptoId: 654
   },
   {
       proNombre: 'Guldborgsund',
       deptoId: 654
   },
   {
       proNombre: 'Holbæk',
       deptoId: 654
   },
   {
       proNombre: 'Kalundborg',
       deptoId: 654
   },
   {
       proNombre: 'Køge',
       deptoId: 654
   },
   {
       proNombre: 'Lejre',
       deptoId: 654
   },
   {
       proNombre: 'Lolland',
       deptoId: 654
   },
   {
       proNombre: 'Næstved',
       deptoId: 654
   },
   {
       proNombre: 'Odsherred',
       deptoId: 654
   },
   {
       proNombre: 'Ringsted',
       deptoId: 654
   },
   {
       proNombre: 'Roskilde',
       deptoId: 654
   },
   {
       proNombre: 'Slagelse',
       deptoId: 654
   },
   {
       proNombre: 'Solrød',
       deptoId: 654
   },
   {
       proNombre: 'Sorø',
       deptoId: 654
   },
   {
       proNombre: 'Stevns',
       deptoId: 654
   },
   {
       proNombre: 'Vordingborg',
       deptoId: 654
   },
   {
       proNombre: 'Ålborg',
       deptoId: 655
   },
   {
       proNombre: 'Brønderslev',
       deptoId: 655
   },
   {
       proNombre: 'Frederikshavn',
       deptoId: 655
   },
   {
       proNombre: 'Hjørring',
       deptoId: 655
   },
   {
       proNombre: 'Jammerbugt',
       deptoId: 655
   },
   {
       proNombre: 'Læsø',
       deptoId: 655
   },
   {
       proNombre: 'Mariagerfjord',
       deptoId: 655
   },
   {
       proNombre: 'Morsø',
       deptoId: 655
   },
   {
       proNombre: 'Rebild',
       deptoId: 655
   },
   {
       proNombre: 'Thisted',
       deptoId: 655
   },
   {
       proNombre: 'Vesthimmerland',
       deptoId: 655
   },
   {
       proNombre: 'Wesley',
       deptoId: 656
   },
   {
       proNombre: 'Woodford Hill',
       deptoId: 656
   },
   {
       proNombre: 'Calibishie',
       deptoId: 656
   },
   {
       proNombre: 'Hampstead',
       deptoId: 656
   },
   {
       proNombre: 'Bense',
       deptoId: 656
   },
   {
       proNombre: "Dos D'Ane",
       deptoId: 656
   },
   {
       proNombre: 'Anse du Mé',
       deptoId: 656
   },
   {
       proNombre: 'Paix Bouche',
       deptoId: 656
   },
   {
       proNombre: 'Thibaud',
       deptoId: 656
   },
   {
       proNombre: 'Vieille Case',
       deptoId: 656
   },
   {
       proNombre: 'Penville',
       deptoId: 656
   },
   {
       proNombre: 'Grand Fond',
       deptoId: 657
   },
   {
       proNombre: ' Castle Bruce',
       deptoId: 657
   },
   {
       proNombre: 'Rosalie',
       deptoId: 657
   },
   {
       proNombre: 'Good Hope',
       deptoId: 657
   },
   {
       proNombre: 'Petite Soufrière',
       deptoId: 657
   },
   {
       proNombre: 'Riviere Cyrique',
       deptoId: 657
   },
   {
       proNombre: 'Morne Jaune',
       deptoId: 657
   },
   {
       proNombre: 'San Sauveur',
       deptoId: 657
   },
   {
       proNombre: '	Roseau',
       deptoId: 658
   },
   {
       proNombre: 'Capucin',
       deptoId: 659
   },
   {
       proNombre: 'Clifton',
       deptoId: 659
   },
   {
       proNombre: 'Cottage',
       deptoId: 659
   },
   {
       proNombre: 'Toucari',
       deptoId: 659
   },
   {
       proNombre: 'Tanetane',
       deptoId: 659
   },
   {
       proNombre: 'Bornes',
       deptoId: 659
   },
   {
       proNombre: 'Saint Joseph',
       deptoId: 660
   },
   {
       proNombre: '	Pointe Michel',
       deptoId: 661
   },
   {
       proNombre: '	Scotts Head',
       deptoId: 662
   },
   {
       proNombre: 'Gallion',
       deptoId: 662
   },
   {
       proNombre: 'Grand Bay',
       deptoId: 663
   },
   {
       proNombre: 'Canefield',
       deptoId: 664
   },
   {
       proNombre: 'Mahaut',
       deptoId: 664
   },
   {
       proNombre: 'Colihaut',
       deptoId: 665
   },
   {
       proNombre: 'Chordeleg',
       deptoId: 666
   },
   {
       proNombre: 'Cuenca',
       deptoId: 666
   },
   {
       proNombre: 'El Pan',
       deptoId: 666
   },
   {
       proNombre: 'Girón',
       deptoId: 666
   },
   {
       proNombre: 'Guachapala',
       deptoId: 666
   },
   {
       proNombre: 'Gualaceo',
       deptoId: 666
   },
   {
       proNombre: 'Nabón',
       deptoId: 666
   },
   {
       proNombre: 'Oña',
       deptoId: 666
   },
   {
       proNombre: 'Paute',
       deptoId: 666
   },
   {
       proNombre: 'Ponce Enriquez',
       deptoId: 666
   },
   {
       proNombre: 'Pucará',
       deptoId: 666
   },
   {
       proNombre: 'San Fernando',
       deptoId: 666
   },
   {
       proNombre: 'Santa Isabel',
       deptoId: 666
   },
   {
       proNombre: 'Sevilla de Oro',
       deptoId: 666
   },
   {
       proNombre: 'Sígsig',
       deptoId: 666
   },
   {
       proNombre: 'Caluma',
       deptoId: 667
   },
   {
       proNombre: 'Chillanes',
       deptoId: 667
   },
   {
       proNombre: 'Chimbo',
       deptoId: 667
   },
   {
       proNombre: 'Echeandía',
       deptoId: 667
   },
   {
       proNombre: 'Guaranda',
       deptoId: 667
   },
   {
       proNombre: 'Las Naves',
       deptoId: 667
   },
   {
       proNombre: 'San Miguel',
       deptoId: 667
   },
   {
       proNombre: 'Azogues',
       deptoId: 668
   },
   {
       proNombre: 'Biblián',
       deptoId: 668
   },
   {
       proNombre: 'Cañar',
       deptoId: 668
   },
   {
       proNombre: 'Déleg',
       deptoId: 668
   },
   {
       proNombre: 'El Tambo',
       deptoId: 668
   },
   {
       proNombre: 'La Troncal',
       deptoId: 668
   },
   {
       proNombre: 'Suscal',
       deptoId: 668
   },
   {
       proNombre: 'Bolívar',
       deptoId: 669
   },
   {
       proNombre: 'Espejo',
       deptoId: 669
   },
   {
       proNombre: 'Mira',
       deptoId: 669
   },
   {
       proNombre: 'Montúfar',
       deptoId: 669
   },
   {
       proNombre: 'San Pedro de Huaca',
       deptoId: 669
   },
   {
       proNombre: 'Tulcán',
       deptoId: 669
   },
   {
       proNombre: 'Alausí',
       deptoId: 670
   },
   {
       proNombre: 'Chambo',
       deptoId: 670
   },
   {
       proNombre: 'Chunchi',
       deptoId: 670
   },
   {
       proNombre: 'Colta',
       deptoId: 670
   },
   {
       proNombre: 'Cumandá',
       deptoId: 670
   },
   {
       proNombre: 'Guamote',
       deptoId: 670
   },
   {
       proNombre: 'Guano',
       deptoId: 670
   },
   {
       proNombre: 'Pallatanga',
       deptoId: 670
   },
   {
       proNombre: 'Penipe',
       deptoId: 670
   },
   {
       proNombre: 'Riobamba',
       deptoId: 670
   },
   {
       proNombre: 'La Maná',
       deptoId: 671
   },
   {
       proNombre: 'Latacunga',
       deptoId: 671
   },
   {
       proNombre: 'Pangua',
       deptoId: 671
   },
   {
       proNombre: 'Pujilí',
       deptoId: 671
   },
   {
       proNombre: 'Salcedo',
       deptoId: 671
   },
   {
       proNombre: 'Saquisilí',
       deptoId: 671
   },
   {
       proNombre: 'Sigchos',
       deptoId: 671
   },
   {
       proNombre: 'Arenillas',
       deptoId: 672
   },
   {
       proNombre: ' Atahualpa',
       deptoId: 672
   },
   {
       proNombre: 'Balsas',
       deptoId: 672
   },
   {
       proNombre: 'Chilla',
       deptoId: 672
   },
   {
       proNombre: 'El Guabo',
       deptoId: 672
   },
   {
       proNombre: 'Huaquillas',
       deptoId: 672
   },
   {
       proNombre: 'Las Lajas',
       deptoId: 672
   },
   {
       proNombre: 'Machala',
       deptoId: 672
   },
   {
       proNombre: 'Marcabelí',
       deptoId: 672
   },
   {
       proNombre: 'Pasaje',
       deptoId: 672
   },
   {
       proNombre: 'Piñas',
       deptoId: 672
   },
   {
       proNombre: 'Portovelo',
       deptoId: 672
   },
   {
       proNombre: 'Santa Rosa',
       deptoId: 672
   },
   {
       proNombre: 'Zaruma',
       deptoId: 672
   },
   {
       proNombre: 'Atacames',
       deptoId: 673
   },
   {
       proNombre: 'Eloy Alfaro',
       deptoId: 673
   },
   {
       proNombre: 'Esmeraldas',
       deptoId: 673
   },
   {
       proNombre: 'Muisne',
       deptoId: 673
   },
   {
       proNombre: 'Quinindé',
       deptoId: 673
   },
   {
       proNombre: 'Rioverde',
       deptoId: 673
   },
   {
       proNombre: 'San Lorenzo',
       deptoId: 673
   },
   {
       proNombre: 'Isabela',
       deptoId: 674
   },
   {
       proNombre: 'San Cristóbal',
       deptoId: 674
   },
   {
       proNombre: 'Santa Cruz',
       deptoId: 674
   },
   {
       proNombre: 'Guayaquil',
       deptoId: 675
   },
   {
       proNombre: 'Alfredo Baquerizo Moreno',
       deptoId: 675
   },
   {
       proNombre: 'Balao',
       deptoId: 675
   },
   {
       proNombre: 'Balzar',
       deptoId: 675
   },
   {
       proNombre: 'Colimes',
       deptoId: 675
   },
   {
       proNombre: 'Coronel Marcelino Maridueña',
       deptoId: 675
   },
   {
       proNombre: 'Daule',
       deptoId: 675
   },
   {
       proNombre: 'Durán',
       deptoId: 675
   },
   {
       proNombre: 'El Empalme',
       deptoId: 675
   },
   {
       proNombre: 'El Triunfo',
       deptoId: 675
   },
   {
       proNombre: 'General Antonio Elizalde',
       deptoId: 675
   },
   {
       proNombre: 'Isidro Ayora',
       deptoId: 675
   },
   {
       proNombre: 'Lomas de Sargentillo',
       deptoId: 675
   },
   {
       proNombre: 'Milagro',
       deptoId: 675
   },
   {
       proNombre: 'Naranjal',
       deptoId: 675
   },
   {
       proNombre: 'Naranjito',
       deptoId: 675
   },
   {
       proNombre: 'Nobol',
       deptoId: 675
   },
   {
       proNombre: 'Palestina',
       deptoId: 675
   },
   {
       proNombre: 'Pedro Carbo',
       deptoId: 675
   },
   {
       proNombre: 'Playas',
       deptoId: 675
   },
   {
       proNombre: 'Salitre',
       deptoId: 675
   },
   {
       proNombre: 'Samborondón',
       deptoId: 675
   },
   {
       proNombre: 'Santa Lucía',
       deptoId: 675
   },
   {
       proNombre: 'Simón Bolívar',
       deptoId: 675
   },
   {
       proNombre: 'Yaguachi',
       deptoId: 675
   },
   {
       proNombre: 'Antonio Ante',
       deptoId: 676
   },
   {
       proNombre: 'Cotacachi',
       deptoId: 676
   },
   {
       proNombre: 'Ibarra',
       deptoId: 676
   },
   {
       proNombre: 'Otavalo',
       deptoId: 676
   },
   {
       proNombre: ' Pimampiro',
       deptoId: 676
   },
   {
       proNombre: 'San Miguel de Urcuquí',
       deptoId: 676
   },
   {
       proNombre: 'Calvas',
       deptoId: 677
   },
   {
       proNombre: 'Catamayo',
       deptoId: 677
   },
   {
       proNombre: 'Celica',
       deptoId: 677
   },
   {
       proNombre: 'Chaguarpamba',
       deptoId: 677
   },
   {
       proNombre: 'Espíndola',
       deptoId: 677
   },
   {
       proNombre: 'Gonzanamá',
       deptoId: 677
   },
   {
       proNombre: 'Loja',
       deptoId: 677
   },
   {
       proNombre: 'Macará',
       deptoId: 677
   },
   {
       proNombre: 'Olmedo',
       deptoId: 677
   },
   {
       proNombre: 'Paltas',
       deptoId: 677
   },
   {
       proNombre: 'Pindal',
       deptoId: 677
   },
   {
       proNombre: 'Puyango',
       deptoId: 677
   },
   {
       proNombre: 'Quilanga',
       deptoId: 677
   },
   {
       proNombre: 'Saraguro',
       deptoId: 677
   },
   {
       proNombre: 'Sozoranga',
       deptoId: 677
   },
   {
       proNombre: 'Zapotillo',
       deptoId: 677
   },
   {
       proNombre: 'Baba',
       deptoId: 678
   },
   {
       proNombre: 'Babahoyo',
       deptoId: 678
   },
   {
       proNombre: 'Buena Fe',
       deptoId: 678
   },
   {
       proNombre: 'Mocache',
       deptoId: 678
   },
   {
       proNombre: 'Montalvo',
       deptoId: 678
   },
   {
       proNombre: 'Palenque',
       deptoId: 678
   },
   {
       proNombre: 'Puebloviejo',
       deptoId: 678
   },
   {
       proNombre: 'Quevedo',
       deptoId: 678
   },
   {
       proNombre: 'Quinsaloma',
       deptoId: 678
   },
   {
       proNombre: 'Urdaneta',
       deptoId: 678
   },
   {
       proNombre: 'Valencia',
       deptoId: 678
   },
   {
       proNombre: 'Ventanas',
       deptoId: 678
   },
   {
       proNombre: 'Vinces',
       deptoId: 678
   },
   {
       proNombre: 'Bolívar',
       deptoId: 679
   },
   {
       proNombre: 'Chone',
       deptoId: 679
   },
   {
       proNombre: 'El Carmen',
       deptoId: 679
   },
   {
       proNombre: 'Flavio Alfaro',
       deptoId: 679
   },
   {
       proNombre: 'Jama',
       deptoId: 679
   },
   {
       proNombre: 'Jaramijó',
       deptoId: 679
   },
   {
       proNombre: 'Jipijapa',
       deptoId: 679
   },
   {
       proNombre: 'Junín',
       deptoId: 679
   },
   {
       proNombre: 'Manta',
       deptoId: 679
   },
   {
       proNombre: 'Montecristi',
       deptoId: 679
   },
   {
       proNombre: ' Olmedo',
       deptoId: 679
   },
   {
       proNombre: 'Paján',
       deptoId: 679
   },
   {
       proNombre: 'Pedernales',
       deptoId: 679
   },
   {
       proNombre: 'Pichincha',
       deptoId: 679
   },
   {
       proNombre: ' Portoviejo',
       deptoId: 679
   },
   {
       proNombre: 'Puerto López',
       deptoId: 679
   },
   {
       proNombre: 'Rocafuerte',
       deptoId: 679
   },
   {
       proNombre: 'San Vicente',
       deptoId: 679
   },
   {
       proNombre: 'Santa Ana',
       deptoId: 679
   },
   {
       proNombre: 'Sucre',
       deptoId: 679
   },
   {
       proNombre: 'Tosagua',
       deptoId: 679
   },
   {
       proNombre: 'Veinticuatro de Mayo',
       deptoId: 679
   },
   {
       proNombre: 'Gualaquiza',
       deptoId: 680
   },
   {
       proNombre: 'Huamboya',
       deptoId: 680
   },
   {
       proNombre: 'Limón Indanza',
       deptoId: 680
   },
   {
       proNombre: 'Logroño',
       deptoId: 680
   },
   {
       proNombre: 'Morona',
       deptoId: 680
   },
   {
       proNombre: 'Pablo Sexto',
       deptoId: 680
   },
   {
       proNombre: 'Palora',
       deptoId: 680
   },
   {
       proNombre: 'San Juan Bosco',
       deptoId: 680
   },
   {
       proNombre: 'Santiago',
       deptoId: 680
   },
   {
       proNombre: 'Sucúa',
       deptoId: 680
   },
   {
       proNombre: 'Taisha',
       deptoId: 680
   },
   {
       proNombre: 'Taisha',
       deptoId: 680
   },
   {
       proNombre: 'Archidona',
       deptoId: 681
   },
   {
       proNombre: 'Carlos Julio Arosemena Tola',
       deptoId: 681
   },
   {
       proNombre: 'El Chaco',
       deptoId: 681
   },
   {
       proNombre: 'Quijos',
       deptoId: 681
   },
   {
       proNombre: 'Tena',
       deptoId: 681
   },
   {
       proNombre: 'Aguarico',
       deptoId: 682
   },
   {
       proNombre: 'Orellana',
       deptoId: 682
   },
   {
       proNombre: 'La Joya de los Sachas',
       deptoId: 682
   },
   {
       proNombre: 'Loreto',
       deptoId: 682
   },
   {
       proNombre: 'Arajuno',
       deptoId: 683
   },
   {
       proNombre: 'Mera',
       deptoId: 683
   },
   {
       proNombre: 'Pastaza',
       deptoId: 683
   },
   {
       proNombre: 'Santa Clara',
       deptoId: 683
   },
   {
       proNombre: 'Cayambe',
       deptoId: 684
   },
   {
       proNombre: 'Mejía',
       deptoId: 684
   },
   {
       proNombre: 'Pedro Moncayo',
       deptoId: 684
   },
   {
       proNombre: 'Pedro Vicente Maldonado',
       deptoId: 684
   },
   {
       proNombre: 'Puerto Quito',
       deptoId: 684
   },
   {
       proNombre: 'Distrito Metropolitano de Quito',
       deptoId: 684
   },
   {
       proNombre: 'Rumiñahui',
       deptoId: 684
   },
   {
       proNombre: 'San Miguel de Los Bancos',
       deptoId: 684
   },
   {
       proNombre: 'La Libertad',
       deptoId: 685
   },
   {
       proNombre: 'Salinas',
       deptoId: 685
   },
   {
       proNombre: 'Santa Elena',
       deptoId: 685
   },
   {
       proNombre: 'Santo Domingo',
       deptoId: 686
   },
   {
       proNombre: 'La Concordia',
       deptoId: 686
   },
   {
       proNombre: 'Cascales',
       deptoId: 687
   },
   {
       proNombre: 'Cuyabeno',
       deptoId: 687
   },
   {
       proNombre: 'Gonzalo Pizarro',
       deptoId: 687
   },
   {
       proNombre: 'Lago Agrio',
       deptoId: 687
   },
   {
       proNombre: 'Putumayo',
       deptoId: 687
   },
   {
       proNombre: 'Shushufindi',
       deptoId: 687
   },
   {
       proNombre: 'Sucumbíos',
       deptoId: 687
   },
   {
       proNombre: 'Ambato',
       deptoId: 688
   },
   {
       proNombre: 'Baños de Agua Santa',
       deptoId: 688
   },
   {
       proNombre: 'Cevallos',
       deptoId: 688
   },
   {
       proNombre: 'Mocha',
       deptoId: 688
   },
   {
       proNombre: 'Patate',
       deptoId: 688
   },
   {
       proNombre: 'Pelileo',
       deptoId: 688
   },
   {
       proNombre: 'Píllaro',
       deptoId: 688
   },
   {
       proNombre: 'Quero',
       deptoId: 688
   },
   {
       proNombre: 'Tisaleo',
       deptoId: 688
   },
   {
       proNombre: 'Centinela del Cóndor',
       deptoId: 689
   },
   {
       proNombre: 'Chinchipe',
       deptoId: 689
   },
   {
       proNombre: 'El Pangui',
       deptoId: 689
   },
   {
       proNombre: 'Nangaritza',
       deptoId: 689
   },
   {
       proNombre: 'Palanda',
       deptoId: 689
   },
   {
       proNombre: 'Paquisha',
       deptoId: 689
   },
   {
       proNombre: 'Yacuambi',
       deptoId: 689
   },
   {
       proNombre: 'Yantzaza',
       deptoId: 689
   },
   {
       proNombre: 'Zamora',
       deptoId: 689
   },
   {
       proNombre: 'Al Montazh',
       deptoId: 690
   },
   {
       proNombre: 'Sharak (Este)',
       deptoId: 690
   },
   {
       proNombre: 'Wassat (Central)',
       deptoId: 690
   },
   {
       proNombre: 'Al Gomrok',
       deptoId: 690
   },
   {
       proNombre: 'Agamy',
       deptoId: 690
   },
   {
       proNombre: 'Al Amriya',
       deptoId: 690
   },
   {
       proNombre: 'Borg Al Arab',
       deptoId: 690
   },
   {
       proNombre: 'Asuán',
       deptoId: 691
   },
   {
       proNombre: 'Nueva Tushka',
       deptoId: 691
   },
   {
       proNombre: 'Abú Simbel',
       deptoId: 691
   },
   {
       proNombre: 'Asuán',
       deptoId: 691
   },
   {
       proNombre: 'Darau',
       deptoId: 691
   },
   {
       proNombre: 'Edfu',
       deptoId: 691
   },
   {
       proNombre: 'Kom Ombo',
       deptoId: 691
   },
   {
       proNombre: 'Nasr',
       deptoId: 691
   },
   {
       proNombre: 'Asiut',
       deptoId: 692
   },
   {
       proNombre: 'Damanhur',
       deptoId: 693
   },
   {
       proNombre: 'Beni Suef',
       deptoId: 694
   },
   {
       proNombre: 'El Cairo',
       deptoId: 695
   },
   {
       proNombre: 'Al Manzalah',
       deptoId: 696
   },
   {
       proNombre: 'Al Matariyyah',
       deptoId: 696
   },
   {
       proNombre: 'Al Gammaliyyah',
       deptoId: 696
   },
   {
       proNombre: 'Meit Salseel',
       deptoId: 696
   },
   {
       proNombre: 'Menyat Al Nasr',
       deptoId: 696
   },
   {
       proNombre: 'Dikirnis',
       deptoId: 696
   },
   {
       proNombre: "Bani 'Ebeid",
       deptoId: 696
   },
   {
       proNombre: 'Temayy Al Amdeed',
       deptoId: 696
   },
   {
       proNombre: 'Al Senbellawein',
       deptoId: 696
   },
   {
       proNombre: 'Mahallat Damanah',
       deptoId: 696
   },
   {
       proNombre: 'Al Mansoura',
       deptoId: 696
   },
   {
       proNombre: 'Aga',
       deptoId: 696
   },
   {
       proNombre: 'Meit Ghamr',
       deptoId: 696
   },
   {
       proNombre: 'Belqas',
       deptoId: 696
   },
   {
       proNombre: 'Sherbeen',
       deptoId: 696
   },
   {
       proNombre: 'Talkha',
       deptoId: 696
   },
   {
       proNombre: 'Damieta',
       deptoId: 697
   },
   {
       proNombre: '	Fayún',
       deptoId: 698
   },
   {
       proNombre: 'Tanta',
       deptoId: 699
   },
   {
       proNombre: 'El-Mahalla El-Kubra',
       deptoId: 699
   },
   {
       proNombre: 'Guiza',
       deptoId: 700
   },
   {
       proNombre: 'Ismailía',
       deptoId: 701
   },
   {
       proNombre: 'Kafr el Sheij',
       deptoId: 702
   },
   {
       proNombre: 'Marsa Matruh',
       deptoId: 703
   },
   {
       proNombre: 'Menia',
       deptoId: 704
   },
   {
       proNombre: ' Shibin El-Kom',
       deptoId: 705
   },
   {
       proNombre: 'Quesna',
       deptoId: 705
   },
   {
       proNombre: 'Tala',
       deptoId: 705
   },
   {
       proNombre: 'Bagour',
       deptoId: 705
   },
   {
       proNombre: 'Menouf',
       deptoId: 705
   },
   {
       proNombre: 'Ashmoun ',
       deptoId: 705
   },
   {
       proNombre: 'Sers el-Lyan',
       deptoId: 705
   },
   {
       proNombre: 'el-Kharga Town',
       deptoId: 706
   },
   {
       proNombre: 'El Arish',
       deptoId: 707
   },
   {
       proNombre: 'Puerto Saíd',
       deptoId: 708
   },
   {
       proNombre: 'Banha',
       deptoId: 709
   },
   {
       proNombre: 'Shibin Al-Qanater',
       deptoId: 709
   },
   {
       proNombre: 'Shubra-el-Khema',
       deptoId: 709
   },
   {
       proNombre: 'Qalyub',
       deptoId: 709
   },
   {
       proNombre: 'Khanka',
       deptoId: 709
   },
   {
       proNombre: 'Abu zaabal',
       deptoId: 709
   },
   {
       proNombre: 'Tukh',
       deptoId: 709
   },
   {
       proNombre: 'Qaha',
       deptoId: 709
   },
   {
       proNombre: 'Quena',
       deptoId: 710
   },
   {
       proNombre: 'Hurgada',
       deptoId: 711
   },
   {
       proNombre: 'Zaqaziq',
       deptoId: 712
   },
   {
       proNombre: 'Suhag',
       deptoId: 713
   },
   {
       proNombre: 'El Tor',
       deptoId: 714
   },
   {
       proNombre: 'Dahab',
       deptoId: 714
   },
   {
       proNombre: 'Sharm el-Sheikh',
       deptoId: 714
   },
   {
       proNombre: 'Taba',
       deptoId: 714
   },
   {
       proNombre: 'Nuweiba',
       deptoId: 714
   },
   {
       proNombre: 'Suez',
       deptoId: 715
   },
   {
       proNombre: 'Lúxor',
       deptoId: 716
   },
   {
       proNombre: 'Ahuachapán',
       deptoId: 717
   },
   {
       proNombre: 'Apaneca',
       deptoId: 717
   },
   {
       proNombre: 'Atiquizaya',
       deptoId: 717
   },
   {
       proNombre: 'Concepción de Ataco',
       deptoId: 717
   },
   {
       proNombre: 'El Refugio',
       deptoId: 717
   },
   {
       proNombre: 'Guaymango',
       deptoId: 717
   },
   {
       proNombre: 'Jujutla',
       deptoId: 717
   },
   {
       proNombre: 'San Francisco Menéndez',
       deptoId: 717
   },
   {
       proNombre: 'San Lorenzo',
       deptoId: 717
   },
   {
       proNombre: 'San Pedro Puxtla',
       deptoId: 717
   },
   {
       proNombre: 'Tacuba',
       deptoId: 717
   },
   {
       proNombre: 'Turín',
       deptoId: 717
   },
   {
       proNombre: 'Candelaria de la Frontera',
       deptoId: 718
   },
   {
       proNombre: 'Chalchuapa',
       deptoId: 718
   },
   {
       proNombre: 'Coatepeque',
       deptoId: 718
   },
   {
       proNombre: 'El Congo',
       deptoId: 718
   },
   {
       proNombre: 'El Porvenir',
       deptoId: 718
   },
   {
       proNombre: 'Masahuat',
       deptoId: 718
   },
   {
       proNombre: 'Metapán',
       deptoId: 718
   },
   {
       proNombre: 'San Antonio Pajonal',
       deptoId: 718
   },
   {
       proNombre: 'San Sebastián Salitrillo',
       deptoId: 718
   },
   {
       proNombre: 'Santa Ana',
       deptoId: 718
   },
   {
       proNombre: 'Santa Rosa Guachipilín',
       deptoId: 718
   },
   {
       proNombre: 'Santiago de la Frontera',
       deptoId: 718
   },
   {
       proNombre: 'Texistepeque',
       deptoId: 718
   },
   {
       proNombre: 'Acajutla',
       deptoId: 719
   },
   {
       proNombre: 'Armenia',
       deptoId: 719
   },
   {
       proNombre: 'Caluco',
       deptoId: 719
   },
   {
       proNombre: 'Cuisnahuat',
       deptoId: 719
   },
   {
       proNombre: 'Izalco',
       deptoId: 719
   },
   {
       proNombre: 'Juayúa',
       deptoId: 719
   },
   {
       proNombre: 'Nahuizalco',
       deptoId: 719
   },
   {
       proNombre: 'Nahulingo',
       deptoId: 719
   },
   {
       proNombre: 'Salcoatitán',
       deptoId: 719
   },
   {
       proNombre: 'San Antonio del Monte',
       deptoId: 719
   },
   {
       proNombre: 'San Julián',
       deptoId: 719
   },
   {
       proNombre: 'Santa Catarina Masahuat',
       deptoId: 719
   },
   {
       proNombre: 'Santa Isabel Ishuatán',
       deptoId: 719
   },
   {
       proNombre: 'Santo Domingo de Guzmán',
       deptoId: 719
   },
   {
       proNombre: 'Sonsonate',
       deptoId: 719
   },
   {
       proNombre: 'Sonzacate',
       deptoId: 719
   },
   {
       proNombre: 'Alegría',
       deptoId: 720
   },
   {
       proNombre: 'Berlín',
       deptoId: 720
   },
   {
       proNombre: 'California',
       deptoId: 720
   },
   {
       proNombre: 'Concepción Batres',
       deptoId: 720
   },
   {
       proNombre: 'El Triunfo',
       deptoId: 720
   },
   {
       proNombre: 'Ereguayquín',
       deptoId: 720
   },
   {
       proNombre: 'Estanzuelas',
       deptoId: 720
   },
   {
       proNombre: 'Jiquilisco',
       deptoId: 720
   },
   {
       proNombre: 'Jucuapa',
       deptoId: 720
   },
   {
       proNombre: 'Jucuarán',
       deptoId: 720
   },
   {
       proNombre: 'Mercedes Umaña',
       deptoId: 720
   },
   {
       proNombre: 'Nueva Granada',
       deptoId: 720
   },
   {
       proNombre: 'Ozatlán',
       deptoId: 720
   },
   {
       proNombre: 'Puerto El Triunfo',
       deptoId: 720
   },
   {
       proNombre: 'San Agustín',
       deptoId: 720
   },
   {
       proNombre: 'San Buenaventura',
       deptoId: 720
   },
   {
       proNombre: 'San Dionisio',
       deptoId: 720
   },
   {
       proNombre: 'San Francisco Javier',
       deptoId: 720
   },
   {
       proNombre: 'Santa Elena',
       deptoId: 720
   },
   {
       proNombre: 'Santa María',
       deptoId: 720
   },
   {
       proNombre: 'Santiago de María',
       deptoId: 720
   },
   {
       proNombre: 'Tecapán',
       deptoId: 720
   },
   {
       proNombre: 'Usulután',
       deptoId: 720
   },
   {
       proNombre: 'Carolina',
       deptoId: 721
   },
   {
       proNombre: 'Chapeltique',
       deptoId: 721
   },
   {
       proNombre: 'Chinameca',
       deptoId: 721
   },
   {
       proNombre: 'Chirilagua',
       deptoId: 721
   },
   {
       proNombre: 'Ciudad Barrios',
       deptoId: 721
   },
   {
       proNombre: 'Comacarán',
       deptoId: 721
   },
   {
       proNombre: 'El Tránsito',
       deptoId: 721
   },
   {
       proNombre: 'Lolotique',
       deptoId: 721
   },
   {
       proNombre: 'Moncagua',
       deptoId: 721
   },
   {
       proNombre: 'Nueva Guadalupe',
       deptoId: 721
   },
   {
       proNombre: 'Nuevo Edén de San Juan',
       deptoId: 721
   },
   {
       proNombre: 'Quelepa',
       deptoId: 721
   },
   {
       proNombre: 'San Antonio',
       deptoId: 721
   },
   {
       proNombre: 'San Gerardo',
       deptoId: 721
   },
   {
       proNombre: 'San Jorge',
       deptoId: 721
   },
   {
       proNombre: 'San Luis de la Reina',
       deptoId: 721
   },
   {
       proNombre: 'San Miguel',
       deptoId: 721
   },
   {
       proNombre: 'San Rafael Oriente',
       deptoId: 721
   },
   {
       proNombre: 'Sesori',
       deptoId: 721
   },
   {
       proNombre: 'Uluazapa',
       deptoId: 721
   },
   {
       proNombre: 'Arambala',
       deptoId: 722
   },
   {
       proNombre: 'Cacaopera',
       deptoId: 722
   },
   {
       proNombre: 'Chilanga',
       deptoId: 722
   },
   {
       proNombre: 'Corinto',
       deptoId: 722
   },
   {
       proNombre: 'Delicias de Concepción',
       deptoId: 722
   },
   {
       proNombre: 'El Divisadero',
       deptoId: 722
   },
   {
       proNombre: 'El Rosario',
       deptoId: 722
   },
   {
       proNombre: 'Gualococti',
       deptoId: 722
   },
   {
       proNombre: 'Guatajiagua',
       deptoId: 722
   },
   {
       proNombre: 'Joateca',
       deptoId: 722
   },
   {
       proNombre: 'Jocoaitique',
       deptoId: 722
   },
   {
       proNombre: 'Jocoro',
       deptoId: 722
   },
   {
       proNombre: 'Lolotiquillo',
       deptoId: 722
   },
   {
       proNombre: 'Meanguera',
       deptoId: 722
   },
   {
       proNombre: 'Osicala',
       deptoId: 722
   },
   {
       proNombre: 'Perquín',
       deptoId: 722
   },
   {
       proNombre: 'San Carlos',
       deptoId: 722
   },
   {
       proNombre: 'San Fernando	',
       deptoId: 722
   },
   {
       proNombre: 'San Francisco	',
       deptoId: 722
   },
   {
       proNombre: 'San Isidro	',
       deptoId: 722
   },
   {
       proNombre: 'San Simón',
       deptoId: 722
   },
   {
       proNombre: 'Sensembra',
       deptoId: 722
   },
   {
       proNombre: 'Sociedad',
       deptoId: 722
   },
   {
       proNombre: 'Torola',
       deptoId: 722
   },
   {
       proNombre: 'Yamabal',
       deptoId: 722
   },
   {
       proNombre: 'Yoloaiquín',
       deptoId: 722
   },
   {
       proNombre: 'La Unión',
       deptoId: 723
   },
   {
       proNombre: 'San Alejo',
       deptoId: 723
   },
   {
       proNombre: 'Yucuaiquín',
       deptoId: 723
   },
   {
       proNombre: 'Conchagua',
       deptoId: 723
   },
   {
       proNombre: 'Intipucá',
       deptoId: 723
   },
   {
       proNombre: 'San José',
       deptoId: 723
   },
   {
       proNombre: 'El Carmen',
       deptoId: 723
   },
   {
       proNombre: 'Yayantique',
       deptoId: 723
   },
   {
       proNombre: 'Bolívar',
       deptoId: 723
   },
   {
       proNombre: 'Meanguera del Golfo ',
       deptoId: 723
   },
   {
       proNombre: 'Santa Rosa de Lima',
       deptoId: 723
   },
   {
       proNombre: 'Pasaquina',
       deptoId: 723
   },
   {
       proNombre: 'Anamoros',
       deptoId: 723
   },
   {
       proNombre: 'Nueva Esparta ',
       deptoId: 723
   },
   {
       proNombre: 'El Sauce',
       deptoId: 723
   },
   {
       proNombre: 'Concepción de Oriente',
       deptoId: 723
   },
   {
       proNombre: 'Polorós',
       deptoId: 723
   },
   {
       proNombre: 'Lislique',
       deptoId: 723
   },
   {
       proNombre: 'Playa Mizata',
       deptoId: 724
   },
   {
       proNombre: 'Playa La Perla',
       deptoId: 724
   },
   {
       proNombre: 'Playa El Palmarcito',
       deptoId: 724
   },
   {
       proNombre: 'Playa Km 59',
       deptoId: 724
   },
   {
       proNombre: 'Playa El Zonte',
       deptoId: 724
   },
   {
       proNombre: 'Playa El Tunco',
       deptoId: 724
   },
   {
       proNombre: 'Playa El Sunzal',
       deptoId: 724
   },
   {
       proNombre: 'Playa Río Grande, La Bocana',
       deptoId: 724
   },
   {
       proNombre: 'Playa El Majahual',
       deptoId: 724
   },
   {
       proNombre: 'Playa San Blas',
       deptoId: 724
   },
   {
       proNombre: 'Playa Conchalio',
       deptoId: 724
   },
   {
       proNombre: 'Playa Punta Roca',
       deptoId: 724
   },
   {
       proNombre: 'Playa La Paz',
       deptoId: 724
   },
   {
       proNombre: 'Playa El Obispo',
       deptoId: 724
   },
   {
       proNombre: 'Playa Las Flores',
       deptoId: 724
   },
   {
       proNombre: 'Playa San Diego',
       deptoId: 724
   },
   {
       proNombre: 'Agua Caliente',
       deptoId: 725
   },
   {
       proNombre: 'Arcatao',
       deptoId: 725
   },
   {
       proNombre: 'Azacualpa',
       deptoId: 725
   },
   {
       proNombre: 'Cancasque',
       deptoId: 725
   },
   {
       proNombre: 'Chalatenango (ciudad)',
       deptoId: 725
   },
   {
       proNombre: 'Citalá',
       deptoId: 725
   },
   {
       proNombre: 'Comapala',
       deptoId: 725
   },
   {
       proNombre: 'Concepción Quezaltepeque',
       deptoId: 725
   },
   {
       proNombre: 'Dulce Nombre de María',
       deptoId: 725
   },
   {
       proNombre: 'El Carrizal',
       deptoId: 725
   },
   {
       proNombre: 'El Paraíso',
       deptoId: 725
   },
   {
       proNombre: 'La Laguna',
       deptoId: 725
   },
   {
       proNombre: 'La Palma',
       deptoId: 725
   },
   {
       proNombre: 'La Reina',
       deptoId: 725
   },
   {
       proNombre: 'Las Flores',
       deptoId: 725
   },
   {
       proNombre: 'Las Vueltas',
       deptoId: 725
   },
   {
       proNombre: 'Nombre de Jesús',
       deptoId: 725
   },
   {
       proNombre: 'Nueva Concepción',
       deptoId: 725
   },
   {
       proNombre: 'Nueva Trinidad',
       deptoId: 725
   },
   {
       proNombre: 'Ojos de Agua',
       deptoId: 725
   },
   {
       proNombre: 'Potonico',
       deptoId: 725
   },
   {
       proNombre: 'San Antonio de la Cruz',
       deptoId: 725
   },
   {
       proNombre: 'San Antonio Los Ranchos',
       deptoId: 725
   },
   {
       proNombre: 'San Fernando',
       deptoId: 725
   },
   {
       proNombre: 'San Francisco Lempa',
       deptoId: 725
   },
   {
       proNombre: 'San Francisco Morazán',
       deptoId: 725
   },
   {
       proNombre: 'San Ignacio',
       deptoId: 725
   },
   {
       proNombre: 'San Isidro Labrador',
       deptoId: 725
   },
   {
       proNombre: 'San Luis del Carmen',
       deptoId: 725
   },
   {
       proNombre: 'San Miguel de Mercedes',
       deptoId: 725
   },
   {
       proNombre: 'San Rafael',
       deptoId: 725
   },
   {
       proNombre: 'Santa Rita',
       deptoId: 725
   },
   {
       proNombre: 'Tejutla',
       deptoId: 725
   },
   {
       proNombre: 'Cojutepeque',
       deptoId: 726
   },
   {
       proNombre: 'Candelaria',
       deptoId: 726
   },
   {
       proNombre: 'El Carmen',
       deptoId: 726
   },
   {
       proNombre: 'El Rosario',
       deptoId: 726
   },
   {
       proNombre: 'Monte San Juan',
       deptoId: 726
   },
   {
       proNombre: 'Oratorio de Concepción',
       deptoId: 726
   },
   {
       proNombre: 'San Bartolomé Perulapía',
       deptoId: 726
   },
   {
       proNombre: 'San Cristóbal',
       deptoId: 726
   },
   {
       proNombre: 'San José Guayabal',
       deptoId: 726
   },
   {
       proNombre: 'San Pedro Perulapán',
       deptoId: 726
   },
   {
       proNombre: 'San Rafael Cedros',
       deptoId: 726
   },
   {
       proNombre: 'San Ramón',
       deptoId: 726
   },
   {
       proNombre: 'Santa Cruz Analquito',
       deptoId: 726
   },
   {
       proNombre: 'Santa Cruz Michapa',
       deptoId: 726
   },
   {
       proNombre: 'Suchitoto',
       deptoId: 726
   },
   {
       proNombre: 'Tenancingo',
       deptoId: 726
   },
   {
       proNombre: 'Aguilares',
       deptoId: 727
   },
   {
       proNombre: 'Apopa',
       deptoId: 727
   },
   {
       proNombre: 'Ayutuxtepeque',
       deptoId: 727
   },
   {
       proNombre: 'Cuscatancingo',
       deptoId: 727
   },
   {
       proNombre: 'Delgado',
       deptoId: 727
   },
   {
       proNombre: 'El Paisnal',
       deptoId: 727
   },
   {
       proNombre: 'Guazapa',
       deptoId: 727
   },
   {
       proNombre: 'Ilopango',
       deptoId: 727
   },
   {
       proNombre: 'Mejicanos',
       deptoId: 727
   },
   {
       proNombre: 'Nejapa',
       deptoId: 727
   },
   {
       proNombre: 'Panchimalco',
       deptoId: 727
   },
   {
       proNombre: 'Rosario de Mora',
       deptoId: 727
   },
   {
       proNombre: 'San Marcos',
       deptoId: 727
   },
   {
       proNombre: 'San Martín',
       deptoId: 727
   },
   {
       proNombre: 'San Salvador',
       deptoId: 727
   },
   {
       proNombre: 'Santiago Texacuangos',
       deptoId: 727
   },
   {
       proNombre: 'Santo Tomás',
       deptoId: 727
   },
   {
       proNombre: 'Soyapango',
       deptoId: 727
   },
   {
       proNombre: 'Tonacatepeque',
       deptoId: 727
   },
   {
       proNombre: 'Zacatecoluca',
       deptoId: 728
   },
   {
       proNombre: 'Cuyultitán',
       deptoId: 728
   },
   {
       proNombre: 'El Rosario',
       deptoId: 728
   },
   {
       proNombre: 'Jerusalén',
       deptoId: 728
   },
   {
       proNombre: 'Mercedes La Ceiba',
       deptoId: 728
   },
   {
       proNombre: 'Olocuilta',
       deptoId: 728
   },
   {
       proNombre: 'Paraíso de Osorio',
       deptoId: 728
   },
   {
       proNombre: 'San Antonio Masahuat',
       deptoId: 728
   },
   {
       proNombre: 'San Emigdio',
       deptoId: 728
   },
   {
       proNombre: 'San Francisco Chinameca',
       deptoId: 728
   },
   {
       proNombre: 'San Pedro Masahuat',
       deptoId: 728
   },
   {
       proNombre: 'San Juan Nonualco',
       deptoId: 728
   },
   {
       proNombre: 'San Juan Talpa',
       deptoId: 728
   },
   {
       proNombre: 'San Juan Tepezontes',
       deptoId: 728
   },
   {
       proNombre: 'San Luis La Herradura',
       deptoId: 728
   },
   {
       proNombre: 'San Luis Talpa',
       deptoId: 728
   },
   {
       proNombre: 'San Miguel Tepezontes',
       deptoId: 728
   },
   {
       proNombre: 'San Pedro Nonualco',
       deptoId: 728
   },
   {
       proNombre: 'San Rafael Obrajuelo',
       deptoId: 728
   },
   {
       proNombre: 'Santa María Ostuma',
       deptoId: 728
   },
   {
       proNombre: 'Santiago Nonualco',
       deptoId: 728
   },
   {
       proNombre: 'Tapalhuaca',
       deptoId: 728
   },
   {
       proNombre: 'Cinquera',
       deptoId: 729
   },
   {
       proNombre: 'Dolores',
       deptoId: 729
   },
   {
       proNombre: 'Guacotecti',
       deptoId: 729
   },
   {
       proNombre: 'Ilobasco',
       deptoId: 729
   },
   {
       proNombre: 'Jutiapa',
       deptoId: 729
   },
   {
       proNombre: 'San Isidro',
       deptoId: 729
   },
   {
       proNombre: 'Sensuntepeque',
       deptoId: 729
   },
   {
       proNombre: 'Tejutepeque',
       deptoId: 729
   },
   {
       proNombre: 'Victoria',
       deptoId: 729
   },
   {
       proNombre: 'Apastepeque',
       deptoId: 730
   },
   {
       proNombre: 'Guadalupe',
       deptoId: 730
   },
   {
       proNombre: 'San Cayetano Istepeque',
       deptoId: 730
   },
   {
       proNombre: 'San Esteban Catarina',
       deptoId: 730
   },
   {
       proNombre: 'San Ildefonso',
       deptoId: 730
   },
   {
       proNombre: 'San Lorenzo',
       deptoId: 730
   },
   {
       proNombre: 'San Sebastián',
       deptoId: 730
   },
   {
       proNombre: 'San Vicente',
       deptoId: 730
   },
   {
       proNombre: 'Santa Clara',
       deptoId: 730
   },
   {
       proNombre: 'Santo Domingo',
       deptoId: 730
   },
   {
       proNombre: 'Tecoluca',
       deptoId: 730
   },
   {
       proNombre: 'Tepetitán',
       deptoId: 730
   },
   {
       proNombre: 'Verapaz',
       deptoId: 730
   },
   {
       proNombre: 'Abu Dhabi',
       deptoId: 731
   },
   {
       proNombre: 'Ajmán',
       deptoId: 732
   },
   {
       proNombre: 'Fuyaira',
       deptoId: 733
   },
   {
       proNombre: 'Sharjah',
       deptoId: 734
   },
   {
       proNombre: 'Dubái',
       deptoId: 735
   },
   {
       proNombre: 'Ras el Jaima',
       deptoId: 736
   },
   {
       proNombre: 'Um al Kaiwain',
       deptoId: 737
   },
   {
       proNombre: 'Keren',
       deptoId: 738
   },
   {
       proNombre: 'Asmara',
       deptoId: 739
   },
   {
       proNombre: 'Barentu',
       deptoId: 740
   },
   {
       proNombre: '	Massawa',
       deptoId: 741
   },
   {
       proNombre: 'Mendefera',
       deptoId: 742
   },
   {
       proNombre: 'Assab',
       deptoId: 743
   },
   {
       proNombre: 'Bratislava',
       deptoId: 744
   },
   {
       proNombre: 'Bratislava I',
       deptoId: 744
   },
   {
       proNombre: 'Bratislava II',
       deptoId: 744
   },
   {
       proNombre: 'Bratislava III',
       deptoId: 744
   },
   {
       proNombre: 'Bratislava IV',
       deptoId: 744
   },
   {
       proNombre: 'Bratislava V',
       deptoId: 744
   },
   {
       proNombre: 'Distrito de Malacky',
       deptoId: 744
   },
   {
       proNombre: 'Distrito de Pezinok',
       deptoId: 744
   },
   {
       proNombre: 'Distrito de Senec',
       deptoId: 744
   },
   {
       proNombre: 'Distrito de Dunajská Streda',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Galanta',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Hlohovec',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Piešťany',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Senica',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Skalica',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Trnava',
       deptoId: 745
   },
   {
       proNombre: 'Distrito de Bánovce nad Bebravou',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Ilava',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Myjava',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Nové Mesto nad Váhom',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Partizánske',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Považská Bystrica',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Prievidza',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Púchov',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Trenčín',
       deptoId: 746
   },
   {
       proNombre: 'Distrito de Komárno',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Levice',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Nitra',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Nové Zámky',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Šaľa',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Topoľčany',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Zlaté Moravce',
       deptoId: 747
   },
   {
       proNombre: 'Distrito de Bytča',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Čadca',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Dolný Kubín',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Kysucké Nové Mesto',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Liptovský Mikuláš',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Martin',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Námestovo',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Ružomberok',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Turčianske Teplice',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Tvrdošín',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Žilina',
       deptoId: 748
   },
   {
       proNombre: 'Distrito de Banská Bystrica',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Banská Štiavnica',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Brezno',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Detva',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Krupina',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Lučenec',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Poltár',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Revúca',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Rimavská Sobota',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Veľký Krtíš',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Zvolen',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Žarnovica',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Žiar nad Hronom',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Žiar nad Hronom',
       deptoId: 749
   },
   {
       proNombre: 'Distrito de Bardejov',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Humenné',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Kežmarok',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Levoča',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Medzilaborce',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Poprad',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Prešov',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Sabinov',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Snina',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Stará Ľubovňa',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Stropkov',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Svidník',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Vranov nad Topľou',
       deptoId: 750
   },
   {
       proNombre: 'Distrito de Gelnica',
       deptoId: 751
   },
   {
       proNombre: 'Košice',
       deptoId: 751
   },
   {
       proNombre: 'Distrito de Košice–okolie',
       deptoId: 751
   },
   {
       proNombre: 'Distrito de Michalovce',
       deptoId: 751
   },
   {
       proNombre: 'Distrito de Rožňava',
       deptoId: 751
   },
   {
       proNombre: 'Distrito de Sobrance',
       deptoId: 751
   },
   {
       proNombre: 'Distrito de Spišská Nová Ves',
       deptoId: 751
   },
   {
       proNombre: 'Distrito de Trebišov',
       deptoId: 751
   },
   {
       proNombre: 'Apače',
       deptoId: 752
   },
   {
       proNombre: 'Beltinci',
       deptoId: 752
   },
   {
       proNombre: 'Cankova',
       deptoId: 752
   },
   {
       proNombre: 'Črenšovci',
       deptoId: 752
   },
   {
       proNombre: 'Dobrovnik',
       deptoId: 752
   },
   {
       proNombre: 'Gornja Radgona',
       deptoId: 752
   },
   {
       proNombre: 'Gornji Petrovci',
       deptoId: 752
   },
   {
       proNombre: 'Grad',
       deptoId: 752
   },
   {
       proNombre: 'Hodoš',
       deptoId: 752
   },
   {
       proNombre: 'Kobilje',
       deptoId: 752
   },
   {
       proNombre: 'Križevci',
       deptoId: 752
   },
   {
       proNombre: 'Kuzma',
       deptoId: 752
   },
   {
       proNombre: 'Lendava',
       deptoId: 752
   },
   {
       proNombre: 'Ljutomer',
       deptoId: 752
   },
   {
       proNombre: 'Moravske Toplice',
       deptoId: 752
   },
   {
       proNombre: 'Murska Sobota',
       deptoId: 752
   },
   {
       proNombre: 'Odranci',
       deptoId: 752
   },
   {
       proNombre: 'Puconci',
       deptoId: 752
   },
   {
       proNombre: 'Radenci',
       deptoId: 752
   },
   {
       proNombre: 'Razkrižje',
       deptoId: 752
   },
   {
       proNombre: 'Rogašovci',
       deptoId: 752
   },
   {
       proNombre: 'Šalovci',
       deptoId: 752
   },
   {
       proNombre: 'Sveti Jurij ob Ščavnici',
       deptoId: 752
   },
   {
       proNombre: 'Tišina',
       deptoId: 752
   },
   {
       proNombre: 'Turnišče',
       deptoId: 752
   },
   {
       proNombre: 'Velika Polana',
       deptoId: 752
   },
   {
       proNombre: 'Veržej',
       deptoId: 752
   },
   {
       proNombre: 'Benedikt',
       deptoId: 753
   },
   {
       proNombre: 'Cerkvenjak',
       deptoId: 753
   },
   {
       proNombre: 'Destrnik',
       deptoId: 753
   },
   {
       proNombre: 'Dornava',
       deptoId: 753
   },
   {
       proNombre: 'Duplek',
       deptoId: 753
   },
   {
       proNombre: 'Gorišnica',
       deptoId: 753
   },
   {
       proNombre: 'Hajdina',
       deptoId: 753
   },
   {
       proNombre: 'Hoče-Slivnica',
       deptoId: 753
   },
   {
       proNombre: 'Juršinci',
       deptoId: 753
   },
   {
       proNombre: 'Kidričevo',
       deptoId: 753
   },
   {
       proNombre: 'Kungota',
       deptoId: 753
   },
   {
       proNombre: 'Lenart',
       deptoId: 753
   },
   {
       proNombre: 'Lovrenc na Pohorju',
       deptoId: 753
   },
   {
       proNombre: 'Majšperk',
       deptoId: 753
   },
   {
       proNombre: 'Maribor',
       deptoId: 753
   },
   {
       proNombre: 'Markovci',
       deptoId: 753
   },
   {
       proNombre: 'Miklavž na Dravskem polju',
       deptoId: 753
   },
   {
       proNombre: 'Oplotnica',
       deptoId: 753
   },
   {
       proNombre: 'Ormož',
       deptoId: 753
   },
   {
       proNombre: 'Pesnica',
       deptoId: 753
   },
   {
       proNombre: 'Podlehnik',
       deptoId: 753
   },
   {
       proNombre: 'Ptuj',
       deptoId: 753
   },
   {
       proNombre: 'Rače-Fram',
       deptoId: 753
   },
   {
       proNombre: 'Ruše',
       deptoId: 753
   },
   {
       proNombre: 'Selnica ob Dravi',
       deptoId: 753
   },
   {
       proNombre: 'Šentilj',
       deptoId: 753
   },
   {
       proNombre: 'Slovenska Bistrica',
       deptoId: 753
   },
   {
       proNombre: 'Starše',
       deptoId: 753
   },
   {
       proNombre: 'Sveta Ana',
       deptoId: 753
   },
   {
       proNombre: 'Sveti Andraž v Slovenskih goricah',
       deptoId: 753
   },
   {
       proNombre: 'Trnovska vas',
       deptoId: 753
   },
   {
       proNombre: 'Videm',
       deptoId: 753
   },
   {
       proNombre: 'Zavrč',
       deptoId: 753
   },
   {
       proNombre: 'Žetale',
       deptoId: 753
   },
   {
       proNombre: 'Črna na Koroškem',
       deptoId: 754
   },
   {
       proNombre: 'Dravograd',
       deptoId: 754
   },
   {
       proNombre: 'Mežica',
       deptoId: 754
   },
   {
       proNombre: 'Mislinja',
       deptoId: 754
   },
   {
       proNombre: 'Muta',
       deptoId: 754
   },
   {
       proNombre: 'Podvelka',
       deptoId: 754
   },
   {
       proNombre: 'Prevalje',
       deptoId: 754
   },
   {
       proNombre: 'Radlje ob Dravi',
       deptoId: 754
   },
   {
       proNombre: 'Ravne na Koroškem',
       deptoId: 754
   },
   {
       proNombre: 'Ribnica na Pohorju',
       deptoId: 754
   },
   {
       proNombre: 'Slovenj Gradec',
       deptoId: 754
   },
   {
       proNombre: 'Vuzenica',
       deptoId: 754
   },
   {
       proNombre: 'Bistrica ob Sotli',
       deptoId: 755
   },
   {
       proNombre: 'Braslovče',
       deptoId: 755
   },
   {
       proNombre: 'Celje',
       deptoId: 755
   },
   {
       proNombre: 'Dobje',
       deptoId: 755
   },
   {
       proNombre: 'Dobrna',
       deptoId: 755
   },
   {
       proNombre: 'Gornji Grad',
       deptoId: 755
   },
   {
       proNombre: 'Kozje',
       deptoId: 755
   },
   {
       proNombre: 'Laško',
       deptoId: 755
   },
   {
       proNombre: 'Ljubno',
       deptoId: 755
   },
   {
       proNombre: 'Luče',
       deptoId: 755
   },
   {
       proNombre: 'Mozirje',
       deptoId: 755
   },
   {
       proNombre: 'Nazarje',
       deptoId: 755
   },
   {
       proNombre: 'Podčetrtek',
       deptoId: 755
   },
   {
       proNombre: 'Polzela',
       deptoId: 755
   },
   {
       proNombre: 'Prebold',
       deptoId: 755
   },
   {
       proNombre: 'Radeče',
       deptoId: 755
   },
   {
       proNombre: 'Rogaška Slatina',
       deptoId: 755
   },
   {
       proNombre: 'Rogatec',
       deptoId: 755
   },
   {
       proNombre: 'Solčava',
       deptoId: 755
   },
   {
       proNombre: 'Slovenske Konjice',
       deptoId: 755
   },
   {
       proNombre: 'Šentjur',
       deptoId: 755
   },
   {
       proNombre: 'Šmarje pri Jelšah',
       deptoId: 755
   },
   {
       proNombre: 'Šmartno ob Paki',
       deptoId: 755
   },
   {
       proNombre: 'Šoštanj',
       deptoId: 755
   },
   {
       proNombre: 'Štore',
       deptoId: 755
   },
   {
       proNombre: 'Tabor',
       deptoId: 755
   },
   {
       proNombre: 'Velenje',
       deptoId: 755
   },
   {
       proNombre: 'Vitanje',
       deptoId: 755
   },
   {
       proNombre: 'Vojnik',
       deptoId: 755
   },
   {
       proNombre: 'Vransko',
       deptoId: 755
   },
   {
       proNombre: 'Zreče',
       deptoId: 755
   },
   {
       proNombre: 'Žalec',
       deptoId: 755
   },
   {
       proNombre: 'Hrastnik',
       deptoId: 756
   },
   {
       proNombre: 'Trbovlje',
       deptoId: 756
   },
   {
       proNombre: 'Zagorje ob Savi',
       deptoId: 756
   },
   {
       proNombre: 'Posavina',
       deptoId: 757
   },
   {
       proNombre: 'Črnomelj',
       deptoId: 758
   },
   {
       proNombre: 'Dolenjske Toplice',
       deptoId: 758
   },
   {
       proNombre: 'Kočevje',
       deptoId: 758
   },
   {
       proNombre: 'Kostel',
       deptoId: 758
   },
   {
       proNombre: 'Loški Potok',
       deptoId: 758
   },
   {
       proNombre: 'Metlika',
       deptoId: 758
   },
   {
       proNombre: 'Mirna Peč',
       deptoId: 758
   },
   {
       proNombre: 'Novo Mesto',
       deptoId: 758
   },
   {
       proNombre: 'Osilnica',
       deptoId: 758
   },
   {
       proNombre: 'Ribnica',
       deptoId: 758
   },
   {
       proNombre: 'Semič',
       deptoId: 758
   },
   {
       proNombre: 'Straža',
       deptoId: 758
   },
   {
       proNombre: 'Šentjernej',
       deptoId: 758
   },
   {
       proNombre: 'Šentrupert',
       deptoId: 758
   },
   {
       proNombre: 'Škocjan',
       deptoId: 758
   },
   {
       proNombre: 'Sodražica',
       deptoId: 758
   },
   {
       proNombre: 'Trebnje',
       deptoId: 758
   },
   {
       proNombre: 'Žužemberk',
       deptoId: 758
   },
   {
       proNombre: 'Borovnica',
       deptoId: 759
   },
   {
       proNombre: 'Brezovica',
       deptoId: 759
   },
   {
       proNombre: 'Dobrepolje',
       deptoId: 759
   },
   {
       proNombre: 'Dobrova-Polhov Gradec',
       deptoId: 759
   },
   {
       proNombre: 'Dol pri Ljubljani',
       deptoId: 759
   },
   {
       proNombre: 'Domžale',
       deptoId: 759
   },
   {
       proNombre: 'Grosuplje',
       deptoId: 759
   },
   {
       proNombre: 'Horjul',
       deptoId: 759
   },
   {
       proNombre: 'Ig',
       deptoId: 759
   },
   {
       proNombre: 'Ivančna Gorica',
       deptoId: 759
   },
   {
       proNombre: 'Kamnik',
       deptoId: 759
   },
   {
       proNombre: 'Komenda',
       deptoId: 759
   },
   {
       proNombre: 'Litija',
       deptoId: 759
   },
   {
       proNombre: 'Liubliana',
       deptoId: 759
   },
   {
       proNombre: 'Logatec',
       deptoId: 759
   },
   {
       proNombre: 'Log-Dragomer',
       deptoId: 759
   },
   {
       proNombre: 'Lukovica',
       deptoId: 759
   },
   {
       proNombre: 'Medvode',
       deptoId: 759
   },
   {
       proNombre: 'Mengeš',
       deptoId: 759
   },
   {
       proNombre: 'Moravče',
       deptoId: 759
   },
   {
       proNombre: 'Škofljica',
       deptoId: 759
   },
   {
       proNombre: 'Šmartno pri Litiji',
       deptoId: 759
   },
   {
       proNombre: 'Trzin',
       deptoId: 759
   },
   {
       proNombre: 'Velike Lašče',
       deptoId: 759
   },
   {
       proNombre: 'Vodice',
       deptoId: 759
   },
   {
       proNombre: 'Vrhnika',
       deptoId: 759
   },
   {
       proNombre: 'Bled',
       deptoId: 761
   },
   {
       proNombre: 'Bohinj',
       deptoId: 761
   },
   {
       proNombre: 'Cerklje na Gorenjskem',
       deptoId: 761
   },
   {
       proNombre: 'Gorenja vas-Poljane',
       deptoId: 761
   },
   {
       proNombre: 'Jesenice',
       deptoId: 761
   },
   {
       proNombre: 'Jezersko',
       deptoId: 761
   },
   {
       proNombre: 'Kranj',
       deptoId: 761
   },
   {
       proNombre: 'Kranjska Gora',
       deptoId: 761
   },
   {
       proNombre: 'Naklo',
       deptoId: 761
   },
   {
       proNombre: 'Preddvor',
       deptoId: 761
   },
   {
       proNombre: 'Radovljica',
       deptoId: 761
   },
   {
       proNombre: 'Šenčur',
       deptoId: 761
   },
   {
       proNombre: 'Škofja Loka',
       deptoId: 761
   },
   {
       proNombre: 'Tržič',
       deptoId: 761
   },
   {
       proNombre: 'Železniki',
       deptoId: 761
   },
   {
       proNombre: 'Žiri',
       deptoId: 761
   },
   {
       proNombre: 'Žirovnica',
       deptoId: 761
   },
   {
       proNombre: 'Bloke',
       deptoId: 762
   },
   {
       proNombre: 'Cerknica',
       deptoId: 762
   },
   {
       proNombre: 'Ilirska Bistrica',
       deptoId: 762
   },
   {
       proNombre: 'Loška Dolina',
       deptoId: 762
   },
   {
       proNombre: 'Pivka',
       deptoId: 762
   },
   {
       proNombre: 'Postojna',
       deptoId: 762
   },
   {
       proNombre: 'Ajdovščina',
       deptoId: 763
   },
   {
       proNombre: 'Bovec',
       deptoId: 763
   },
   {
       proNombre: 'Brda',
       deptoId: 763
   },
   {
       proNombre: 'Cerkno',
       deptoId: 763
   },
   {
       proNombre: 'Idrija',
       deptoId: 763
   },
   {
       proNombre: 'Kanal ob Soči',
       deptoId: 763
   },
   {
       proNombre: 'Kobarid',
       deptoId: 763
   },
   {
       proNombre: 'Miren-Kostanjevica',
       deptoId: 763
   },
   {
       proNombre: 'Nova Gorica',
       deptoId: 763
   },
   {
       proNombre: 'Šempeter-Vrtojba',
       deptoId: 763
   },
   {
       proNombre: 'Tolmin',
       deptoId: 763
   },
   {
       proNombre: 'Vipava',
       deptoId: 763
   },
   {
       proNombre: 'Divača',
       deptoId: 764
   },
   {
       proNombre: 'Hrpelje-Kozina',
       deptoId: 764
   },
   {
       proNombre: 'Izola',
       deptoId: 764
   },
   {
       proNombre: 'Komen',
       deptoId: 764
   },
   {
       proNombre: 'Koper',
       deptoId: 764
   },
   {
       proNombre: 'Piran',
       deptoId: 764
   },
   {
       proNombre: 'Sežana',
       deptoId: 764
   },
   {
       proNombre: 'Sevilla',
       deptoId: 765
   },
   {
       proNombre: 'Málaga',
       deptoId: 765
   },
   {
       proNombre: 'Cádiz',
       deptoId: 765
   },
   {
       proNombre: 'Granada',
       deptoId: 765
   },
   {
       proNombre: 'Córdoba',
       deptoId: 765
   },
   {
       proNombre: 'Almería',
       deptoId: 765
   },
   {
       proNombre: 'Jaén',
       deptoId: 765
   },
   {
       proNombre: 'Huelva',
       deptoId: 765
   },
   {
       proNombre: 'Alto Campo',
       deptoId: 766
   },
   {
       proNombre: 'Alto Ampurdán',
       deptoId: 766
   },
   {
       proNombre: 'Alto Penedés',
       deptoId: 766
   },
   {
       proNombre: 'Alto Urgel',
       deptoId: 766
   },
   {
       proNombre: 'Alta Ribagorza',
       deptoId: 766
   },
   {
       proNombre: 'Noya',
       deptoId: 766
   },
   {
       proNombre: 'Bages',
       deptoId: 766
   },
   {
       proNombre: 'Bajo Campo',
       deptoId: 766
   },
   {
       proNombre: 'Bajo Ebro',
       deptoId: 766
   },
   {
       proNombre: 'Bajo Ampurdán',
       deptoId: 766
   },
   {
       proNombre: 'Bajo Llobregat',
       deptoId: 766
   },
   {
       proNombre: 'Bajo Penedés',
       deptoId: 766
   },
   {
       proNombre: 'Barcelonés',
       deptoId: 766
   },
   {
       proNombre: 'Berguedá',
       deptoId: 766
   },
   {
       proNombre: 'Baja Cerdaña',
       deptoId: 766
   },
   {
       proNombre: 'Cuenca de Barberá',
       deptoId: 766
   },
   {
       proNombre: 'Garraf',
       deptoId: 766
   },
   {
       proNombre: 'Las Garrigas',
       deptoId: 766
   },
   {
       proNombre: 'La Garrocha',
       deptoId: 766
   },
   {
       proNombre: 'Gironés',
       deptoId: 766
   },
   {
       proNombre: 'Maresme',
       deptoId: 766
   },
   {
       proNombre: 'Moyanés',
       deptoId: 766
   },
   {
       proNombre: 'Montsiá',
       deptoId: 766
   },
   {
       proNombre: 'Noguera',
       deptoId: 766
   },
   {
       proNombre: 'Osona',
       deptoId: 766
   },
   {
       proNombre: 'Pallars Jussá',
       deptoId: 766
   },
   {
       proNombre: '	Pallars Sobirá',
       deptoId: 766
   },
   {
       proNombre: "Pla de l'Estany",
       deptoId: 766
   },
   {
       proNombre: 'Plana de Urgel',
       deptoId: 766
   },
   {
       proNombre: 'Priorato',
       deptoId: 766
   },
   {
       proNombre: 'Ribera de Ebro',
       deptoId: 766
   },
   {
       proNombre: 'Ripollés',
       deptoId: 766
   },
   {
       proNombre: 'Segarra',
       deptoId: 766
   },
   {
       proNombre: 'Segriá',
       deptoId: 766
   },
   {
       proNombre: 'Selva',
       deptoId: 766
   },
   {
       proNombre: 'Solsonés',
       deptoId: 766
   },
   {
       proNombre: 'Tarragonés',
       deptoId: 766
   },
   {
       proNombre: 'Tierra Alta',
       deptoId: 766
   },
   {
       proNombre: 'Urgel',
       deptoId: 766
   },
   {
       proNombre: '	Valle de Arán',
       deptoId: 766
   },
   {
       proNombre: 'Vallés Occidental',
       deptoId: 766
   },
   {
       proNombre: 'Vallés Oriental',
       deptoId: 766
   },
   {
       proNombre: 'Alcalá de Henares',
       deptoId: 767
   },
   {
       proNombre: 'Alcobendas',
       deptoId: 767
   },
   {
       proNombre: 'Alcorcón',
       deptoId: 767
   },
   {
       proNombre: 'Aranjuez',
       deptoId: 767
   },
   {
       proNombre: 'Arganda del Rey',
       deptoId: 767
   },
   {
       proNombre: 'Collado Villalba',
       deptoId: 767
   },
   {
       proNombre: 'Colmenar Viejo',
       deptoId: 767
   },
   {
       proNombre: 'Coslada',
       deptoId: 767
   },
   {
       proNombre: 'Fuenlabrada',
       deptoId: 767
   },
   {
       proNombre: 'Getafe',
       deptoId: 767
   },
   {
       proNombre: 'Leganés',
       deptoId: 767
   },
   {
       proNombre: 'Madrid',
       deptoId: 767
   },
   {
       proNombre: 'Majadahonda',
       deptoId: 767
   },
   {
       proNombre: 'Móstoles',
       deptoId: 767
   },
   {
       proNombre: 'Navalcarnero',
       deptoId: 767
   },
   {
       proNombre: 'Parla',
       deptoId: 767
   },
   {
       proNombre: 'San Lorenzo de El Escorial',
       deptoId: 767
   },
   {
       proNombre: 'Torrejón de Ardoz',
       deptoId: 767
   },
   {
       proNombre: 'Torrelaguna',
       deptoId: 767
   },
   {
       proNombre: 'Valdemoro',
       deptoId: 767
   },
   {
       proNombre: 'Valdaracete',
       deptoId: 767
   },
   {
       proNombre: 'Alcalatén',
       deptoId: 768
   },
   {
       proNombre: 'Alto Maestrazgo',
       deptoId: 768
   },
   {
       proNombre: 'Alto Mijares',
       deptoId: 768
   },
   {
       proNombre: 'Alto Palancia',
       deptoId: 768
   },
   {
       proNombre: 'Alto Vinalopó',
       deptoId: 768
   },
   {
       proNombre: 'Bajo Maestrazgo',
       deptoId: 768
   },
   {
       proNombre: 'Bajo Vinalopó',
       deptoId: 768
   },
   {
       proNombre: 'Campo de Alicante',
       deptoId: 768
   },
   {
       proNombre: 'Campo de Morvedre',
       deptoId: 768
   },
   {
       proNombre: 'Campo de Turia',
       deptoId: 768
   },
   {
       proNombre: 'Canal de Navarrés',
       deptoId: 768
   },
   {
       proNombre: 'Condado de Cocentaina',
       deptoId: 768
   },
   {
       proNombre: 'Costera',
       deptoId: 768
   },
   {
       proNombre: 'Huerta Norte',
       deptoId: 768
   },
   {
       proNombre: 'Huerta Oeste',
       deptoId: 768
   },
   {
       proNombre: 'Huerta Sur',
       deptoId: 768
   },
   {
       proNombre: 'Hoya de Alcoy',
       deptoId: 768
   },
   {
       proNombre: 'Hoya de Buñol',
       deptoId: 768
   },
   {
       proNombre: 'Marina Alta',
       deptoId: 768
   },
   {
       proNombre: 'Marina Baja',
       deptoId: 768
   },
   {
       proNombre: 'Plana Alta',
       deptoId: 768
   },
   {
       proNombre: 'Plana Baja',
       deptoId: 768
   },
   {
       proNombre: 'La Plana de Utiel-Requena',
       deptoId: 768
   },
   {
       proNombre: 'Los Puertos de Morella ',
       deptoId: 768
   },
   {
       proNombre: 'Ribera Alta',
       deptoId: 768
   },
   {
       proNombre: 'Ribera Baja',
       deptoId: 768
   },
   {
       proNombre: 'Rincón de Ademuz',
       deptoId: 768
   },
   {
       proNombre: 'Safor',
       deptoId: 768
   },
   {
       proNombre: 'Safor',
       deptoId: 768
   },
   {
       proNombre: 'Valencia',
       deptoId: 768
   },
   {
       proNombre: 'Valle de Albaida',
       deptoId: 768
   },
   {
       proNombre: 'Valle de Cofrentes',
       deptoId: 768
   },
   {
       proNombre: 'Vega Baja del Segura',
       deptoId: 768
   },
   {
       proNombre: 'Vinalopó Medio',
       deptoId: 768
   },
   {
       proNombre: 'Arzúa',
       deptoId: 769
   },
   {
       proNombre: 'Barbanza',
       deptoId: 769
   },
   {
       proNombre: 'La Barcala',
       deptoId: 769
   },
   {
       proNombre: 'Bergantiños',
       deptoId: 769
   },
   {
       proNombre: 'Betanzos',
       deptoId: 769
   },
   {
       proNombre: 'La Coruña',
       deptoId: 769
   },
   {
       proNombre: 'Eume',
       deptoId: 769
   },
   {
       proNombre: 'Ferrol',
       deptoId: 769
   },
   {
       proNombre: 'Finisterre',
       deptoId: 769
   },
   {
       proNombre: 'Muros',
       deptoId: 769
   },
   {
       proNombre: 'Noya',
       deptoId: 769
   },
   {
       proNombre: 'Órdenes',
       deptoId: 769
   },
   {
       proNombre: 'Ortegal',
       deptoId: 769
   },
   {
       proNombre: 'Santiago',
       deptoId: 769
   },
   {
       proNombre: 'Sar',
       deptoId: 769
   },
   {
       proNombre: 'Tierra de Mellid',
       deptoId: 769
   },
   {
       proNombre: 'Tierra de Soneira',
       deptoId: 769
   },
   {
       proNombre: 'Jallas',
       deptoId: 769
   },
   {
       proNombre: 'Lugo',
       deptoId: 769
   },
   {
       proNombre: 'Monforte de Lemos',
       deptoId: 769
   },
   {
       proNombre: 'Vivero',
       deptoId: 769
   },
   {
       proNombre: 'Villalba',
       deptoId: 769
   },
   {
       proNombre: 'Sarria',
       deptoId: 769
   },
   {
       proNombre: 'Ribadeo',
       deptoId: 769
   },
   {
       proNombre: 'Foz',
       deptoId: 769
   },
   {
       proNombre: 'Burela',
       deptoId: 769
   },
   {
       proNombre: 'Chantada',
       deptoId: 769
   },
   {
       proNombre: 'Guitiriz',
       deptoId: 769
   },
   {
       proNombre: 'Castro de Rey',
       deptoId: 769
   },
   {
       proNombre: 'Otero de Rey',
       deptoId: 769
   },
   {
       proNombre: 'Cospeito',
       deptoId: 769
   },
   {
       proNombre: 'Cervo',
