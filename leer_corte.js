const jsonh = require('./jsonh.js');
0
const response = await fetch("https://www.tse.go.cr/APISVR2024/cortes/ultimo");
const corte = await response.json();

// LECTURA DE LOS DATOS EN EL ARCHIVO
const { partidos } = require('./partidos.js')
const partidos_por_codigo = Object.fromEntries(partidos.map((partido) => [partido.codigo, partido]))
const { DIVISION } = require('./division.js')
const division_por_provincia_canton = Object.fromEntries(DIVISION.map((canton) => [`${canton.n1}${canton.n2}`, canton]))

const votosPorCantonYPartido = (data) => {
    let por_canton = Object.groupBy(data, ({ n1, n2 }) => `${n1}${n2}`)
    let v_por_canton_por_partido = {}
    for (const [codigo_canton, datos] of Object.entries(por_canton)) {
        let { d1: provincia, d2: canton, ...rest } = division_por_provincia_canton[codigo_canton]
        let provincia_canton = `${provincia}.${canton}`
        v_por_canton_por_partido[provincia_canton] = {}
        let votos_validos = 0
        for (const mesa of datos) {
            votos_validos += mesa.vV
            let votos_por_partido = jsonh.unpack(mesa.v)
            votos_por_partido.map(({ cP: codigo_partido, v }) => {
                let nombre_partido = partidos_por_codigo[codigo_partido].descPartido
                if (v_por_canton_por_partido[provincia_canton][nombre_partido]) {
                    v_por_canton_por_partido[provincia_canton][nombre_partido] += v
                } else {
                    v_por_canton_por_partido[provincia_canton][nombre_partido] = v
                }
            })
        }
        v_por_canton_por_partido[provincia_canton].votos_validos = votos_validos
    }
    return v_por_canton_por_partido
}


const lecturaResultados = async (ls) => {
    var res = ls.e;
    var decode = jsonh.unpack(res);

    let arrAlcaldias = decode.find(item => item.id === "A");
    let arrRegidurias = decode.find(item => item.id === "R");

    let alcaldias = jsonh.unpack(arrAlcaldias.l);
    let regidurias = jsonh.unpack(arrRegidurias.l);

    let alcaldias_por_canton_y_partido = votosPorCantonYPartido(alcaldias)
    let regidurias_por_canton_y_partido = votosPorCantonYPartido(regidurias)

    console.log(`corte ${ls.n} fecha ${ls.f} hora ${ls.h}`);
    // console.log(Object.entries(alcaldias_por_canton_y_partido)[0])
    // console.log(Object.entries(regidurias_por_canton_y_partido)[0])
    console.log(alcaldias_por_canton_y_partido["PUNTARENAS.MONTEVERDE"])

    return { corte: ls.n, fecha: ls.f, hora: ls.h, alcaldias_por_canton_y_partido, regidurias_por_canton_y_partido }
};
lecturaResultados(corte)
