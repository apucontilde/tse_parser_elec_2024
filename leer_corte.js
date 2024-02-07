const jsonh = require('./jsonh.js');
const { partidos } = require('./partidos.js')
const { DIVISION } = require('./division.js')
const { asignacion_regidurias } = require('./asignacion_regidurias.js')

// LECTURA DE LOS DATOS EN EL ARCHIVO
const partidos_por_codigo = Object.fromEntries(partidos.map((partido) => [partido.codigo, partido]))
const division_por_provincia_canton = Object.fromEntries(DIVISION.map((canton) => [`${canton.n1}${canton.n2}`, canton]))

const votosPorCantonYPartido = (data, es_regiduria) => {
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
        if (es_regiduria) {
            v_por_canton_por_partido[provincia_canton].regidurias = asignacion_regidurias[provincia_canton.replace(/\s/g, '')]
        }
    }
    return v_por_canton_por_partido
}

(async () => {
    const response = await fetch("https://www.tse.go.cr/APISVR2024/cortes/ultimo");
    const corte = await response.json();

    var alcaldias_regidurias = jsonh.unpack(corte.e);

    let arrAlcaldias = alcaldias_regidurias.find(item => item.id === "A");
    let arrRegidurias = alcaldias_regidurias.find(item => item.id === "R");

    let alcaldias = jsonh.unpack(arrAlcaldias.l);
    let regidurias = jsonh.unpack(arrRegidurias.l);

    let alcaldias_por_canton_y_partido = votosPorCantonYPartido(alcaldias)
    let regidurias_por_canton_y_partido = votosPorCantonYPartido(regidurias, true)

    console.log(`corte ${corte.n} fecha ${corte.f} hora ${corte.h}`);
    console.log(alcaldias_por_canton_y_partido["CARTAGO.JIMENEZ"])
    console.log(regidurias_por_canton_y_partido["CARTAGO.JIMENEZ"])

})();
