const {formatArrayStrings, processArray, strings, num} = require('./arrayManipulation');

const processedNumbers = processArray(num);
const modifiedStrings = formatArrayStrings(strings,processedNumbers);

function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
  
    for (let i = 0; i < names.length; i++) {
      const userProfile = {
        id: i + 1,
        originalName: names[i],
        modifiedName: modifiedNames[i]
      };
  
      userProfiles.push(userProfile);
    }
  
    return userProfiles;
  }

  const userProfile = createUserProfiles(strings,modifiedStrings);
  console.log(userProfile);
