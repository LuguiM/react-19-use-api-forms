import { FC, use, useEffect, useState } from 'react';
import { planetsApi } from '../api/planetsApi';
import { Planet } from '../interfaces/planet.interface';
import { EditPlanetForm } from './ui/EditPlanetForm';
import { PlanetList } from './ui/PlanetList';
import { createPlanetAction } from '../actions/create-planet.action';
// import { getPlanets } from '../actions/get-planets.action';

interface Props {
  getPlanets: Promise<Planet[]>;
}

const Planets: FC<Props> = ({getPlanets}) => {

  const originalPlanets = use(getPlanets);
  const [planets, setPlanets] = useState<Planet[]>(originalPlanets);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const [planets, setPlanets] = useState<Planet[]>([]);

  // useEffect(() => {
  //   getPlanets()
  //     .then((res) => {
  //       setPlanets(res);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     });
  // }, []);

  const handleAddPlanet = async(planet: Partial<Planet>) => {
    const newPlanet = await createPlanetAction(planet);
    if (planet.id && planet.name) { // Ensure required properties are defined
      setPlanets([...planets, planet as Planet]);
    } else {
      console.error('Invalid planet data:', planet);
    }
    console.log('exito', newPlanet);
  };

  return (
    <>
      <h4 className="text-2xl font-thin mb-4">Agregar y mantener planetas</h4>
      <hr className="border-gray-300 mb-4" />
      {/* Formulario para agregar un planeta */}
      <EditPlanetForm onAddPlanet={handleAddPlanet} />

      <PlanetList planets={planets} />
    </>
  );
};

export default Planets;
