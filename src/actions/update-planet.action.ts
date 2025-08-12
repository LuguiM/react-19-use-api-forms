import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
    return new Promise((r) => setTimeout(r, 2000))
}

export const upadatePlanetAction = async (planet: Planet) => {
    try {
        await sleep();
        // throw new Error('Error de prueba')
        const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);

        console.log('Planeta actualizado');
        return response.data

    } catch (error) {
        console.log('error', error);

        throw new Error('Error al actualizar el planeta')
    }
}