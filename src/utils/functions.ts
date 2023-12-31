import AsyncStorage from '@react-native-async-storage/async-storage';

export const dateToShow = ({
  startDate,
  endDate,
}: {
  startDate: number;
  endDate: number;
}) => {
  if (startDate === endDate) return endDate;
  else {
    const date = `${startDate} to ${endDate}`;
    return date;
  }
};

export const removeHTMLTags = (text: string | null) => {
  if (text === null) return;
  text = text.replace(/<[^>]*>/g, '');
  return text;
};

export const storeArray = async (key: string, array: number[]) => {
  try {
    const jsonValue = JSON.stringify(array);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error storing array in AsyncStorage:', error);
  }
};

export const getArray = async (key: string): Promise<number[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error getting array from AsyncStorage:', error);
    return null;
  }
};

export const updateArray = async (key: string, numberToCheck: number) => {
  try {
    let currentArray = (await getArray(key)) || [];
    const isNumberInArray = currentArray.includes(numberToCheck);
    if (isNumberInArray) {
      currentArray = currentArray.filter(num => num !== numberToCheck);
    } else {
      currentArray.push(numberToCheck);
    }
    await storeArray(key, currentArray);
  } catch (error) {
    console.error('Error updating array in AsyncStorage:', error);
  }
};

export const updateArrayWithDoubleTap = async (
  key: string,
  numberToCheck: number
) => {
  try {
    const currentArray = (await getArray(key)) || [];
    const isNumberInArray = currentArray.includes(numberToCheck);
    if (!isNumberInArray) {
      currentArray.push(numberToCheck);
    }
    await storeArray(key, currentArray);
  } catch (error) {
    console.error('Error updating array in AsyncStorage:', error);
  }
};
