/**
 * This method can be used to check if the variable is empty or not. Returns true if it is empty else false.
 *
 * @param {any} data - Any variable that you want to check if it is empty or not
 *
 * @example
 * ```
 * if(isEmpty(userData)) {
 *   return;
 * }
 * ```
 *
 * @category General Method
 */
export function isEmpty(data: any) {
  try {
    if (data === null || data === undefined) {
      return true;
    }

    const dataType = typeof data;

    switch (dataType) {

      case 'string':
        if (data.trim() === '' || data === 'null' || data === null) {
          return true;
        }

        return false;

      case 'object':
        const keys = Object.keys(data);
        const len = keys.length;

        if (len <= 0) {
          return true;
        }

        return false;

      case 'number':
        return false;

      default:
        // for array
        if (Array.isArray(data) && data.length <= 0) {
          return true;
        }

        return false;
    }

  } catch (e) {
    return true;
  }
}


/**
 * This method returns an array of given size filled with provided value
 *
 * @param {number} arraySize - Size of the array i.e number of elements in the array
 * @param {string | number} value - Value that you want to fill in the array
 *
 * @example
 * ```
 * getFilledArray(4,'hello') // ['hello', 'hello', 'hello', 'hello']
 * ```
 *
 * @category General Method
 */
export function getFilledArray(arraySize: number, value: string | number) {
  return new Array(arraySize).fill(value);
}


/**
 * This method returns the index of the selected tab
 *
 * @param {any} tabs - Array of tabs object
 * @param {string} selectedTabName - Selected tab name
 *
 * @remarks
 * Please ensure that tab object has searchId key to facilitate matching process
 *
 * @example
 * ```
 * getSelectedTabIndex(tabsArrayOfObject,'mutual-funds') // 1
 * ```
 *
 * @category General Method
 */
export const getSelectedTabIndex = (tabs: any[], selectedTabName: string): number => {
  let defaultIndex = 0;

  try {
    if (selectedTabName) {
      tabs.map((tab, index) => {
        if (tab.searchId === selectedTabName) {
          defaultIndex = index;
        }
      });
    }

    return defaultIndex;

  } catch (e) {
    console.error('Unable to return the selected tab index');
    return defaultIndex;
  }
};


/**
 * This method is used to check if the given string check for characters from a-z, A-Z, 0-9.
 *
 * @param str - String that you want to check for the above characters
 *
 * @example
 * ```
 * if(isAlphanumericString('aaAa123')) {
 *  return true
 * }
 *
 * if(isAlphanumericString('aaAa_98-')) {
 *  return false
 * }
 * ```
 *
 */
export const isAlphanumericString = (str: string) => {
  const regexForAlphaNumericString = /^[a-z0-9]+$/i;

  return regexForAlphaNumericString.test(str);
};



/**
 * This method checks for all characters to be number between 0-9 and pincode length to be 6
 *
 * @param {string} pincode - string entered in input element
 *
 * @example
 *```
 * if(isValidPincode('123456')) {
 *  return true
 * }
 *
 * if(isValidPincode('1234aa')) {
 *  return false
 * }
 *
 * if(isValidPincode('12345')) {
 *  return false
 * }
 * ```
 *
 */
export const isValidPincode = (pincode: string) => {
  //This regex checks for all characters to be number between 0-9
  const regexForOnlyNumbers = /^\d+$/;

  return regexForOnlyNumbers.test(pincode) && pincode.length === 6;
};
