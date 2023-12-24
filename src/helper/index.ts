export const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 3600; i++) {
      data.push({ x: i, y: Math.floor(Math.random() * 1000) + 1 });
    }
    return data;
  };