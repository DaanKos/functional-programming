export default function(mainCategory, results) {
    return results
        .map(result => {
            return {
                mainCategory,
                subCategory: result.subcategorieLabel.value,
                landLabel: result.landLabel.value,
                objectCount: Number(result.choCount.value)
            }
        })
}