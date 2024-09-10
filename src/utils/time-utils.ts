const correctTime = (time: string) => `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
export { correctTime };
