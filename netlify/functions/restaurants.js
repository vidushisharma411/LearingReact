export default async (req) => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9711023&lng=77.6544715&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};