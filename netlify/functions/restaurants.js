export default async () => {
  const swiggyUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9711023&lng=77.6544715&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const proxyUrl =
    "https://api.allorigins.win/raw?url=" +
    encodeURIComponent(swiggyUrl);

  const response = await fetch(proxyUrl);

  const data = await response.text();

  return new Response(data, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};