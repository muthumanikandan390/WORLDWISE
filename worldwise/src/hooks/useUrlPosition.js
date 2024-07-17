import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat") ; // Handle potential null values
  const lng = searchParams.get("lng") ; // Handle potential null values
  console.log(`${lat} of useSearchParams ${lng} `)

  return [lat, lng];
}
