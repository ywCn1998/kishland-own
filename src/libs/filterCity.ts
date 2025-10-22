import { stateCities } from "@/components/constant/cities";
import { normalizePersian } from "./normalize";

export function filterCityById(cityId : string) {
  const filteredCities = stateCities
    .map((province) => ({
      ...province,
      cities: province.cities.filter((city) => normalizePersian(city.id) === normalizePersian(cityId)),
    }))
    .filter((province) => province.cities.length > 0);
  return filteredCities;
}
