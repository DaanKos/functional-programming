export default function(results) {
    return results.reduce((newItems, currentItem) => {
        // Is there an item that has a country property that's equal to the current item country property?
        const foundItem = newItems.find(item => item.country === currentItem.country)

        // If the country doesn't exist in the new item array, create it as a new object with the necessary properties
        if (!foundItem) {
            const newItem = {
                country: currentItem.country,
                countryGeo: currentItem.countryGeo,
                categoryWithMostObjects: currentItem.mainCategory,
                objectCountTotal: currentItem.objectCountTotal,
            }

            // Push the new item to the newItems array
            newItems.push(newItem)
        } else if (foundItem.objectCountTotal < currentItem.objectCountTotal) {
            // If the country does exist in the new item array, add current item objectCount to objectCountTotal of that item
            foundItem.country = currentItem.country
            foundItem.countryGeo = currentItem.countryGeo
            foundItem.categoryWithMostObjects = currentItem.mainCategory
            foundItem.objectCountTotal = currentItem.objectCountTotal
        }

        // Return newItems array
        return newItems
    }, [])
}