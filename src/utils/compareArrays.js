export default function(results) {
    return results
        .reduce((newItems, currentItem) => {
            // Is there an item that has a country property that's equal to the current item country property?
            const foundItem = newItems.find(item => item.country === currentItem.countryLabel)

            // If the country doesn't exist in the new item array, create it as a new object with the necessary properties
            if (!foundItem) {
                const newItem = {
                    country: currentItem.countryLabel,
                    countryGeo: currentItem.countryGeo,
                    mainCategory: currentItem.mainCategory,
                    objectCount: currentItem.objectCount
                }

                // Push the new item to the newItems array
                newItems.push(newItem)
            } else if (foundItem.objectCount < currentItem.objectCount) {
                foundItem.country = currentItem.countryLabel,
                foundItem.countryGeo = currentItem.countryGeo,
                foundItem.mainCategory = currentItem.mainCategory,
                foundItem.objectCount = currentItem.objectCount
            }

            // Return newItems array
            return newItems
		}, [])
}