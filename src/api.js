const url = "https://api.coincap.io/v2/";

export const getAssets = async () => {
  const res = await fetch(`${url}assets?limit=20`);
  const { data } = await res.json();
  return data;
};

export const getAsset = async (coin) => {
  const res = await fetch(`${url}assets/${coin}`);
  const { data } = await res.json();
  return data;
};

export const getAssetHistory = async (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const res = await fetch(
    `${url}assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const { data } = await res.json();
  return data;
};

export const getMarkets = async (coin) => {
  const res = await fetch(`${url}assets/${coin}/markets?limit=5`);
  const { data } = await res.json();
  return data;
};

export const getExhange = async (id) => {
  console.log("entro");
  const res = await fetch(`${url}exchanges/${id}`);
  const { data } = await res.json();
  return data;
};

/* otra fora de exportar sería con export default y dentro que haya un objeto, para luego importar el objeto y acceder con dot notation */
