function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) return "Invalid";
  let top = restaurants[0];
  for (let r of restaurants) {
    if (r.rating > top.rating) top = r;
  }
  return top.name.toUpperCase();
}
console.log(topRatedRestaurant([{"name":"Chillox","rating":4.5},{"name":"Sultan's Dine","rating":4.8}]));
