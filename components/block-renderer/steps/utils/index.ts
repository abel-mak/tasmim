export const dataToArray = (data: any = {}) => {
  const stepCount = data.step;
  const res = [];

  for (let i = 0; i < stepCount; i++) {
    res.push({
      title: data[`step_${i}_title`],
      value: data[`step_${i}_value`],
    });
  }
  return res;
};
