const leadsData = require('./data.js');

const logChanges = (preferred, replaced, changeKey) => {
  const keys = Object.keys(preferred);
  const identifier = preferred[changeKey];
  const notification = `>>>>> Duplicate record found for: ${changeKey}: ${identifier}. <<<<<`;
  console.log(notification);
  
  keys.forEach(key => {
    const oldVal = replaced[key];
    const newVal = preferred[key];
    if (newVal !== oldVal) {
      const change = `Prefer ${newVal} over ${oldVal} for value of ${key} in record ${changeKey}: ${identifier}`
      console.log(change);
    }
  });
};

const deduplicate = (data) => {
  const leads = data.leads.reduce((acc, record) => {
    const keysToCheck = ["_id", "email"];
    let shouldPushRecord = true;
    
    for (const key of keysToCheck) {
      const originalRecord = acc.find(rec => rec[key] === record[key]);
      if (originalRecord != null) {
        if (originalRecord.entryDate > record.entryDate) {
          // original record preferred: no change to array; simply drop new record (immediately)
          logChanges(originalRecord, record, key);
          shouldPushRecord = false;
          break;
        } else {
          // current record preffered: drop original from array and add current
          logChanges(record, originalRecord, key);
          acc.splice(acc.indexOf(originalRecord), 1);
        }
      }
    }

    if (shouldPushRecord) {
      acc.push(record);
    }

    return acc;
  }, []);
  console.log("deduplicated data:", {leads});
  return {leads};
};

module.exports = deduplicate(leadsData);
