const fetchApi = async (api) => {
    const getData = await fetch(api);
    const data = await getData.json();
    return data;
}
export default fetchApi;