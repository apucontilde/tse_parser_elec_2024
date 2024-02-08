const jsonh = require('./jsonh.js');
const { partidos } = require('./partidos.js')
const { DIVISION } = require('./division.js')
const { asignacion_regidurias } = require('./asignacion_regidurias.js')

// LECTURA DE LOS DATOS EN EL ARCHIVO
const partidos_por_codigo = Object.fromEntries(partidos.map((partido) => [partido.codigo, partido]))
const division_por_provincia_canton = Object.fromEntries(DIVISION.map((canton) => [`${canton.n1}${canton.n2}`, canton]))
const votosPorCantonYPartido = (data) => {

    let por_canton = Object.groupBy(data, ({ n1, n2 }) => `${n1}${n2}`)
    let v_por_canton_por_partido = {}
    for (const [codigo_canton, [mesa]] of Object.entries(por_canton)) {
        let { d1: provincia, d2: canton, ...rest } = division_por_provincia_canton[codigo_canton]
        let provincia_canton = `${provincia}.${canton}`
        v_por_canton_por_partido[provincia_canton] = {}
        v_por_canton_por_partido[provincia_canton].votos_validos = mesa.vV
        v_por_canton_por_partido[provincia_canton].votos = Object.fromEntries(jsonh.unpack(mesa.v).map(({ cP: codigo_partido, v }) => {
            let nombre_partido = partidos_por_codigo[codigo_partido].descPartido
            return [nombre_partido, v]
        }))
    }

    return v_por_canton_por_partido
}

(async () => {
    const response = await fetch("https://www.tse.go.cr/APISVR2024/cortes/ultimo");
    const corte = await response.json();
    // const corte = await Bun.file("./corte.json").json()

    var alcaldias_regidurias = jsonh.unpack(corte.e);

    let arrAlcaldias = alcaldias_regidurias.find(item => item.id === "A");
    let arrRegidurias = alcaldias_regidurias.find(item => item.id === "R");

    let alcaldias = jsonh.unpack(arrAlcaldias.l).filter(a => a.n3 == 0);
    let regidurias = jsonh.unpack(arrRegidurias.l).filter(a => a.n3 == 0);;

    let alcaldias_por_canton_y_partido = votosPorCantonYPartido(alcaldias)
    let regidurias_por_canton_y_partido = votosPorCantonYPartido(regidurias)
    console.log(`corte ${corte.n} fecha ${corte.f} hora ${corte.h}`);


    Object.entries(regidurias_por_canton_y_partido).map(([canton, { votos, votos_validos }]) => {
        console.log(canton)
        const cantidad_regidurias = asignacion_regidurias[canton.replace(/\s/g, '')]
        console.log(`cantidad regidurias: ${cantidad_regidurias}`)
        // console.log(`votos válidos: ${votos_validos}`)
        const cociente = Math.floor(votos_validos / cantidad_regidurias)
        const subcociente = Math.floor(cociente / 2)
        // console.log(`votos válidos / cantidad regidurias: ${cociente}`)
        const partidos_candidatos = Object.fromEntries(Object.entries(votos).filter(([partido, votos]) => votos > subcociente))
        const factores = Object.entries(partidos_candidatos).map(([partido, votos]) => {
            return [partido, votos / cociente]
        })
        // console.log(`votos / cociente: \n ${Object.entries(factores).join("\n")}\n`)

        const regidores_elegidos_por_partido = Object.fromEntries(factores.map(([partido, votos]) => [partido, Math.floor(votos)]))


        const regidores_elegidos = Object.entries(regidores_elegidos_por_partido).reduce((acc, [partido, regidores]) => acc + regidores, 0)
        // console.log(`regidores_elegidos: ${regidores_elegidos}`)

        const regidores_restantes = cantidad_regidurias - regidores_elegidos
        // console.log(`regidores_restantes: ${regidores_restantes}`)

        const residuos = Object.entries(partidos_candidatos).map(([partido, votos]) => [partido, votos - (cociente * regidores_elegidos_por_partido[partido])])
        // console.log(`residuos: ${residuos}`)


        const partidos_candidatos_2da_ronda = residuos.sort((a, b) => b[1] - a[1]).map(([partido, votos]) => partido)
        // console.log(`partidos_candidatos_2da_ronda: ${partidos_candidatos_2da_ronda}`)

        for (let i = 0; i <= regidores_restantes - 1; i++) {
            const partido = partidos_candidatos_2da_ronda[i % partidos_candidatos_2da_ronda.length]

            if (regidores_elegidos_por_partido[partido]) {
                regidores_elegidos_por_partido[partido] += 1
            } else {
                regidores_elegidos_por_partido[partido] = 1
            }
        }
        // residuo division

        console.log(`${Object.entries(regidores_elegidos_por_partido).sort((a, b) => b[1] - a[1]).join("\n")}\n`)

    })

})();
