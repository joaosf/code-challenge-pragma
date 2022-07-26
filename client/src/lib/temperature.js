export function getTemperatureDescription(item) {
  if (item.temperature < item.minimumTemperature) {
    return <span>too low</span>
  } else if (item.temperature > item.maximumTemperature) {
    return <span>too high</span>
  } else if (
    item.temperature <= item.maximumTemperature &&
    item.temperature >= item.minimumTemperature) {
    return <span>all good</span>
  } else {
    return <span></span>
  }
}