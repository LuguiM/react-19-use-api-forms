import { FC } from "react";
import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

export const getPlanets = async (): Promise<Planet[]> => {
  console.log('Realizando peitcion http');
  const res = await planetsApi.get<Planet[]>('/');
  return res.data;
};